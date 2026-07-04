# SVG Image Masker — Code Review

This document walks through how the application works, file by file and concept by concept.

---

## Application Overview

```
App.jsx
  └── ImageMasker.jsx
```

`App.jsx` is the test harness — it handles loading files and URLs, then passes two props down to `ImageMasker`:

- **`svgContent`** — the raw SVG markup as a string
- **`imageUrl`** — either a `blob:` URL (for local files) or a plain `https://` URL

`ImageMasker.jsx` does everything visual: parses the SVG, renders the mask, and handles all drag interaction. It knows nothing about where the data came from.

---

## App.jsx

### State

```js
const [svgContent, setSvgContent] = useState('');   // raw SVG text
const [imageUrl, setImageUrl]     = useState('');   // URL (blob or http)
const [svgName, setSvgName]       = useState('');   // display label
const [imageName, setImageName]   = useState('');

const [svgUrlInput, setSvgUrlInput]       = useState(''); // controlled text input
const [imageUrlInput, setImageUrlInput]   = useState('');
const [svgUrlError, setSvgUrlError]       = useState(''); // inline error message
const [imageUrlError, setImageUrlError]   = useState('');
const [svgUrlLoading, setSvgUrlLoading]   = useState(false); // loading spinner text
```

`isReady` is derived — it's `true` only when both `svgContent` and `imageUrl` are non-empty. It gates whether `ImageMasker` renders or the empty-state placeholder shows.

### File loading

**SVG file:** A `FileReader` reads the chosen `.svg` file as text, then calls `setSvgContent()` with the result. The file never leaves the browser.

**Image file:** `URL.createObjectURL(file)` produces a short-lived `blob:` URL that the browser can use as an `<image href>` without any file system access. When a new file replaces the old one, `URL.revokeObjectURL(prev)` releases the memory (only for blob URLs — external `https://` URLs don't need revoking).

### URL loading

**SVG URL (`handleSvgUrlLoad`):**
1. `fetch(url)` retrieves the content over HTTP.
2. Checks `res.ok` — throws on non-2xx status (e.g. 404).
3. Does a simple string check for `<svg` to catch cases where the server returns an HTML error page instead of an SVG.
4. Sets `svgContent` to the response text; from here the flow is identical to file loading.

> **CORS note:** If the remote server doesn't send `Access-Control-Allow-Origin` headers, `fetch()` will throw a network error. This is a browser security policy, not a bug in the app. Local dev-server files and same-origin URLs always work.

**Image URL (`handleImageUrlLoad`):**
Rather than fetching the bytes, the app lets the browser load the image natively:
1. Creates a temporary `new Image()` element.
2. Sets its `src` to the URL and waits for `onload` or `onerror`.
3. On success, sets `imageUrl` to the raw URL string.

This approach validates the URL works before handing it to `ImageMasker`, and it avoids the need to copy image bytes into JS memory.

**Keyboard UX:** Both URL inputs call their load handler when Enter is pressed (`onKeyDown` checks `e.key === 'Enter'`).

**Cross-clearing:** Loading a file clears the URL input for that source, and loading via URL would replace whatever content was previously set — so the two inputs for each source are always in sync.

---

## ImageMasker.jsx

### Part 1 — SVG Parsing (`parseSvgContent`)

The browser's built-in `DOMParser` parses the SVG string into a live DOM tree. The function then does a depth-first walk of that tree via the recursive `walk()` function.

**What `walk` collects:**
- Only shape elements (`path`, `circle`, `rect`, `ellipse`, `polygon`, `polyline`, `line`) are kept — structural elements like `<g>`, `<defs>`, and `<clipPath>` are walked through but not stored.
- All attributes are copied, with two transformations:
  - Namespace attributes (`xmlns`, `xml:space`, etc.) are dropped — React doesn't use them.
  - Hyphenated SVG attributes are remapped to camelCase (`fill-rule` → `fillRule`, etc.) because React's JSX requires it.
- `transform` attributes are concatenated as the tree is descended, so a shape inside a translated `<g>` carries the full transform chain.

**`viewBox` extraction:** The `viewBox` attribute is read directly from the root `<svg>` element. If absent, the code falls back to `width` and `height` attributes. This string (`"0 0 455 220"` for your panel SVG) is what sets the coordinate system for everything else.

**Result:** `{ viewBox: "...", shapes: [{ tag, attrs }, ...] }` — a plain JS array of shape descriptors ready to render as React elements.

---

### Part 2 — Compound Path Deduplication

This is the fix for the CAD export artifact.

**The problem:** Some laser-cutting and CAD tools write every closed subpath twice inside a compound `<path d="...">` — once clockwise (CW) and once counter-clockwise (CCW). This is harmless for stroke rendering, but it breaks fill-based clip masking.

With `clip-rule="evenodd"`, the even-odd rule counts how many subpaths enclose any given point. Odd count → filled (visible in clip); even count → hole. With duplicate subpaths:

```
Outer rectangle:  1 copy  → depth 1 (odd)  → shows image ✓
Hole circles:     2 copies → depth 2+2 = 4 (even) → hole... wait, no.

Actually the depth accumulates like this:
  Outside everything: depth 0 (even) → transparent ✓
  Inside outer rect only: depth 1 (odd) → image shows ✓
  Inside a hole circle: each copy adds 1 → depth 1+1 = 3 (odd) → image shows ✗ (should be a hole)
```

The second copy of each hole subpath pushes the winding count from 2 back to 3 (odd), making what should be a transparent hole show the image instead.

**The fix — `deduplicateCompoundPath(d)`:**

1. **`splitSubpaths(d)`** — splits the `d` string on `M` (absolute MoveTo) boundaries using a lookahead regex. Each `M` starts a new subpath. Relative `m` commands (lowercase) are preserved as-is within their subpath.

2. **`firstTwoCoords(sp)`** — extracts the first four numbers from a subpath string. These correspond to the start point (first coord) and the first control/end point (second coord). Uses a regex that handles integers, decimals, and scientific notation.

3. **`isReversedDuplicate(a, b)`** — checks whether subpath `a` starts where `b`'s first segment ends, and vice versa. This is the geometric signature of a CW/CCW pair: the second copy travels the same outline in reverse, so its first two coordinates are the first two of the original, swapped. A tolerance of 0.02 units handles floating-point rounding in the SVG coordinates.

4. **`deduplicateCompoundPath`** — O(n²) scan over subpaths. For each unvisited subpath, keeps it, then looks for a reversed-duplicate to skip. The result is rejoined into a single `d` string.

For your SVG specifically: 30 subpaths → 20 kept, 10 duplicate pairs removed.

---

### Part 3 — The Clip Mask

This is the core of the visual effect. It lives inside `<defs>` in the SVG output:

```jsx
<clipPath id="im-shape-clip" clipPathUnits="userSpaceOnUse">
  {shapes.map(({ tag: Tag, attrs }, i) => (
    <Tag key={i} {...attrs} fill="black" clipRule="evenodd" />
  ))}
</clipPath>
```

**`clipPathUnits="userSpaceOnUse"`** means the clip region is defined in the SVG's own coordinate space (e.g. millimeters for your panel), not relative to the element being clipped. This is essential so the clip shape aligns correctly with the guide overlay.

**`fill="black"`** is applied to every shape, overriding whatever fill color the original SVG had. Inside a `<clipPath>`, only the geometry matters — the fill value just needs to be non-transparent for the region to clip.

**`clipRule="evenodd"`** on each child applies the even-odd winding rule. This is what makes compound paths (shapes with holes) work correctly. A `<path>` with an outer rectangle and inner circles uses this rule to determine which areas are "inside" vs "holes."

The clip is then applied to the image element with:
```jsx
clipPath={isMasked ? 'url(#im-shape-clip)' : undefined}
```

The clip is only active (`isMasked === true`) once the user finishes dragging. During a drag, the full image is visible so you can see what you're positioning.

---

### Part 4 — Image Auto-Fitting

When `imageUrl` changes, a `useEffect` runs:

```js
img.onload = () => {
  const aspect = img.naturalWidth / img.naturalHeight;
  const vbAspect = vbW / vbH;
  let w, h;
  if (aspect > vbAspect) {   // image is wider than the viewBox
    w = vbW * 0.9;            // fit to width, 90% of viewBox
    h = w / aspect;
  } else {                   // image is taller
    h = vbH * 0.9;            // fit to height
    w = h * aspect;
  }
  setImgRect({
    x: vbX + (vbW - w) / 2,  // centered horizontally
    y: vbY + (vbH - h) / 2,  // centered vertically
    w, h,
  });
};
```

The image is scaled to fit inside the viewBox at 90% of the available dimension, centered, and with its native aspect ratio preserved. This gives you a sensible starting point for positioning.

---

### Part 5 — Drag & Resize Interaction

**`imgRect`** is the single piece of state that drives the image position and size: `{ x, y, w, h }` in SVG coordinate space.

**`dragRef`** is a React ref (not state) that tracks the in-progress drag: `{ handle, sx, sy, startRect }`. Using a ref means mouse move events don't cause re-renders just to check whether a drag is active.

**`toSvgPoint(clientX, clientY)`** converts browser screen coordinates to SVG user-space coordinates using the browser's built-in `getScreenCTM().inverse()` matrix. This handles the SVG being scaled and positioned inside the page at any size.

**`onPointerDown(e, handle)`** — called on both the image (handle `'move'`) and each of the 8 resize handles. Captures the current SVG-space pointer position and a snapshot of `imgRect` as `startRect`. Clears the mask so the full image is visible during drag.

**`onMouseMove` / `onMouseUp`** — attached to `window` (not the SVG) so dragging outside the element still works. On `mouseup`, `dragRef` is cleared and `isMasked` is set to `true`.

---

### Part 6 — Proportional Scaling Math (`applyDrag`)

`applyDrag(startRect, handle, dx, dy, proportional)` is a pure function — it takes the snapshot at drag-start and computes a new rect from the accumulated delta. This avoids drift from accumulated floating-point error.

**`proportional = false` (Shift held):** Simple axis-aligned logic. Each handle moves only the edges it "owns." `Math.max(MIN_SIZE, ...)` prevents the image from collapsing to zero.

**`proportional = true` (default):** Two strategies depending on handle type.

*Corner handles — diagonal projection:*

The key insight is that for a proportional resize, we want to scale the rectangle uniformly. The "natural" outward direction for the `se` corner is along the diagonal `(w, h)`. We project the drag vector `(dx, dy)` onto that diagonal to get a scalar scale factor:

$$\text{scale} = 1 + \frac{dx \cdot w + dy \cdot h}{w^2 + h^2}$$

This is a dot product divided by the squared length of the diagonal. A drag purely along the diagonal gives exactly the expected uniform scale. A drag perpendicular to the diagonal gives zero scale change. Any other angle gives a smooth blend. The formula is slightly different per corner (signs flip) to account for each corner's outward direction.

*Edge handles — primary axis drives:*

For the `e` handle: the new width is simply `w + dx`, then `h = newWidth / aspect`. The image re-centers on the opposite axis (so the image doesn't jump to one side as it grows).

For the `n`/`s` handles: same idea but height drives.

---

### Part 7 — Render Structure

```
<svg>                           ← full-page SVG, coordinate system = viewBox
  <defs>
    <pattern id="im-checker">  ← gray checkerboard for transparency background
    <clipPath id="im-shape-clip"> ← the mask shape
  </defs>

  <rect fill="url(#im-checker)"> ← background fill across entire viewBox

  <image                         ← the photo, with clipPath when isMasked
    href={imageUrl}
    x y width height
    clipPath="url(#im-shape-clip)" (when masked)
    onMouseDown → onPointerDown('move')
  />

  {shapes.map(…)}               ← guide overlay (blue dashed lines)
                                   solid when positioning, faded when masked

  <rect … />                    ← dashed bounding box of the image

  {HANDLES.map(…)}              ← 8 resize handles (squares at corners, rounds at edges)
</svg>
```

The guide overlay uses `pointerEvents="none"` so it doesn't interfere with mouse events on the image behind it. Handle size (`hs`) and stroke width (`sw`) are proportional to the viewBox so they look reasonable at any scale.

---

## Data Flow Summary

```
User picks file / types URL
        │
        ▼
App.jsx reads/fetches content
        │
        ├── svgContent (string) ──────────────────────────────────┐
        │                                                          ▼
        └── imageUrl (blob: or https:) ──────► ImageMasker  parseSvgContent()
                                                    │              │
                                                    │         deduplicateCompoundPath()
                                                    │              │
                                                    │         { viewBox, shapes }
                                                    │              │
                                                    │        rendered as <clipPath>
                                                    │        and guide overlay
                                                    │
                                               drag events
                                                    │
                                               applyDrag() → setImgRect()
                                                    │
                                               mouseup → setIsMasked(true)
                                                    │
                                               <image clipPath="url(#im-shape-clip)">
```

---

## Known Limitations

| Limitation | Detail |
|---|---|
| CORS on SVG URLs | The remote server must send `Access-Control-Allow-Origin: *`. GitHub raw URLs, CDNs with open CORS, and your own server all work. Many "download SVG" links from design sites will be blocked. |
| CORS on image URLs | Browser `<image>` elements load cross-origin images without restriction for display, but if you ever wanted to read the pixel data (e.g. canvas export), you'd hit CORS again. For display-only masking this is not an issue. |
| Deduplication heuristic | The reversed-duplicate check looks only at the first two coordinates of each subpath. Two different subpaths that happen to start at the same two points in reversed order would be incorrectly removed. This is extremely unlikely in practice but is a known simplification. |
| No touch support | `onMouseDown`, `mousemove`, `mouseup` are mouse events only. Touch/stylus devices would need `onPointerDown` with `pointerId` capture instead. |
| SVG feature coverage | The parser collects shape elements and their transforms, but ignores `<use>`, `<symbol>`, `<linearGradient>`, `<filter>`, and other non-shape content. For simple laser-cut panel SVGs this is sufficient. Complex illustration SVGs may not render correctly in the guide overlay. |
