import { useState, useCallback } from 'react';
import makerjs from 'makerjs';
import ImageMasker from './components/ImageMasker';

// ---------------------------------------------------------------------------
// Ring SVG generator using MakerJS
//
// Produces an SVG with two closed circle paths — an outer disk and an inner
// hole.  ImageMasker's parseSvgContent extracts them as shape elements;
// clip-rule="evenodd" in the clipPath makes the inner circle a transparent
// hole at winding depth 2 (even).
// ---------------------------------------------------------------------------

function makeRingSvg(outerDiam, innerDiam) {
  const outerR = outerDiam / 2;
  const innerR = innerDiam / 2;

  const model = {
    paths: {
      outer: new makerjs.paths.Circle([0, 0], outerR),
    },
    units: makerjs.unitType.Millimeter,
  };

  if (innerR > 0 && innerR < outerR) {
    model.paths.inner = new makerjs.paths.Circle([0, 0], innerR);
  }

  return makerjs.exporter.toSVG(model, {
    units: makerjs.unitType.Millimeter,
  });
}

// ---------------------------------------------------------------------------

export default function RingHarness() {
  const [outerDiam, setOuterDiam] = useState(100);
  const [innerDiam, setInnerDiam] = useState(40);

  const [imageUrl, setImageUrl]       = useState('');
  const [imageName, setImageName]     = useState('');
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [imageUrlError, setImageUrlError] = useState('');
  const [imgInfo, setImgInfo]         = useState(null);

  // ── Diameter controls ─────────────────────────────────────────────────

  const handleOuterChange = useCallback((raw) => {
    const val = Math.max(2, Number(raw));
    setOuterDiam(val);
    setInnerDiam((prev) => Math.min(prev, val - 1));
  }, []);

  const handleInnerChange = useCallback((raw) => {
    setInnerDiam((prev) => {
      void prev;
      return Math.max(0, Number(raw));
    });
  }, []);

  // ── Image loading ─────────────────────────────────────────────────────

  const handleImageChange = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageName(file.name);
    setImageUrlInput('');
    setImageUrlError('');
    const url = URL.createObjectURL(file);
    setImageUrl((prev) => {
      if (prev && prev.startsWith('blob:')) URL.revokeObjectURL(prev);
      return url;
    });
  }, []);

  const handleImageUrlLoad = useCallback(() => {
    const url = imageUrlInput.trim();
    if (!url) return;
    setImageUrlError('');
    const img = new Image();
    img.onload = () => {
      setImageUrl((prev) => {
        if (prev && prev.startsWith('blob:')) URL.revokeObjectURL(prev);
        return url;
      });
      setImageName(url.split('/').pop() || 'remote-image');
    };
    img.onerror = () => setImageUrlError('Failed to load image from URL');
    img.src = url;
  }, [imageUrlInput]);

  const onImageUrlKey = useCallback(
    (e) => { if (e.key === 'Enter') handleImageUrlLoad(); },
    [handleImageUrlLoad],
  );

  const handleImgChange = useCallback((info) => setImgInfo(info), []);

  // ── Generator ─────────────────────────────────────────────────────────

  const svgGenerator = useCallback(
    () => makeRingSvg(outerDiam, innerDiam),
    [outerDiam, innerDiam],
  );

  const isReady = Boolean(imageUrl);

  return (
    <>
      <header className="toolbar">
        <span className="toolbar-title">Ring Generator</span>
        <div className="toolbar-controls">

          {/* Outer diameter */}
          <div className="param-group">
            <span className="param-label">Outer ⌀</span>
            <input
              className="param-slider"
              type="range"
              min={2}
              max={500}
              value={outerDiam}
              onChange={(e) => handleOuterChange(e.target.value)}
            />
            <input
              className="param-number"
              type="number"
              min={2}
              max={500}
              value={outerDiam}
              onChange={(e) => handleOuterChange(e.target.value)}
            />
            <span className="param-unit">mm</span>
          </div>

          {/* Inner diameter */}
          <div className="param-group">
            <span className="param-label">Inner ⌀</span>
            <input
              className="param-slider"
              type="range"
              min={0}
              max={outerDiam - 1}
              value={innerDiam}
              onChange={(e) => handleInnerChange(e.target.value)}
            />
            <input
              className="param-number"
              type="number"
              min={0}
              max={outerDiam - 1}
              value={innerDiam}
              onChange={(e) => handleInnerChange(e.target.value)}
            />
            <span className="param-unit">mm</span>
          </div>

          <div className="source-divider" />

          {/* Image source */}
          <div className="source-group">
            <label className="file-btn">
              <span className="file-btn-icon">🖼</span>
              {imageName || 'Load Image…'}
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
                onChange={handleImageChange}
                hidden
              />
            </label>
            <span className="source-or">or</span>
            <div className="url-field">
              <input
                className="url-input"
                type="url"
                placeholder="Image URL…"
                value={imageUrlInput}
                onChange={(e) => { setImageUrlInput(e.target.value); setImageUrlError(''); }}
                onKeyDown={onImageUrlKey}
              />
              <button
                className="url-load-btn"
                onClick={handleImageUrlLoad}
                disabled={!imageUrlInput.trim()}
              >
                Load
              </button>
              {imageUrlError && <span className="url-error">{imageUrlError}</span>}
            </div>
          </div>

          {/* Readout + preview */}
          {isReady && imgInfo && (
            <>
              <span className="img-readout">
                x&nbsp;<code>{imgInfo.x.toFixed(1)}</code>
                &ensp;y&nbsp;<code>{imgInfo.y.toFixed(1)}</code>
                &ensp;w&nbsp;<code>{imgInfo.w.toFixed(1)}</code>
                &ensp;h&nbsp;<code>{imgInfo.h.toFixed(1)}</code>
                {imgInfo.error && (
                  <span className="readout-error" title={imgInfo.error}>&nbsp;⚠️ canvas export failed</span>
                )}
              </span>
              {imgInfo.dataUrl && (
                <img
                  className="preview-thumb"
                  src={imgInfo.dataUrl}
                  alt="masked preview"
                  title="Masked output preview"
                />
              )}
            </>
          )}

        </div>
      </header>

      <main className="canvas-area">
        {isReady ? (
          <ImageMasker
            svgGenerator={svgGenerator}
            imageUrl={imageUrl}
            onChange={handleImgChange}
          />
        ) : (
          <div className="empty-state">
            <div className="empty-icon">◎</div>
            <p>Load an <strong>image</strong> to get started.</p>
            <p className="empty-sub">Adjust outer and inner diameters to shape the ring mask.</p>
          </div>
        )}
      </main>
    </>
  );
}
