const THUMBNAIL_WIDTH = 200;
const THUMBNAIL_HEIGHT = 150;
const IMAGE_WIDTH = 800;
const IMAGE_HEIGHT = 600;

export default {
    "breakfast-garage": {
        name: "Breakfast Garage Gaming",
        bannerImageUrl: "https://placehold.co/1000x300",
        categories: [
            "controllers",
            "enclosures",
            "merch",
            "accessories"
        ],
        products: [
            {
                id: 1,
                name: "Carnage Guisada V1.5 Enclosure",
                category: "enclosures",
                description: "The original Carnage Guisada enclosure that started it all. Solid acrylic construction with a roomy interior and clean cable routing. A no-frills workhorse built for the lab.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                isCustomizable: true,
                price: 159.00,
                variations: [
                    {
                        name: "size",
                        options: [
                            { name: "Standard", price: 0 },
                            { name: "Wide", price: 30 }
                        ]
                    }, {
                        name: "finish",
                        options: [
                            { name: "Matte", price: 0 },
                            { name: "Gloss", price: 16 }
                        ]
                    }
                ]
            }, {
                id: 2,
                name: "Carnage Guisada V1.5 Special Edition Enclosure",
                category: "enclosures",
                description: "The V1.5 you know and love, now dressed up for the occasion. Features a limited-run UV-printed top panel with artwork inspired by late-night taco stands and tournament grind culture.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                isCustomizable: true,
                price: 175.00,
                variations: [
                    {
                        name: "size",
                        options: [
                            { name: "Standard", price: 0 },
                            { name: "Wide", price: 30 }
                        ]
                    }, {
                        name: "finish",
                        options: [
                            { name: "Matte", price: 0 },
                            { name: "Gloss", price: 14 }
                        ]
                    }
                ]
            }, {
                id: 3,
                name: "Carnage Guisada V2 Enclosure",
                category: "enclosures",
                description: "A full redesign from the ground up. The V2 adds a recessed button layout, improved bottom feet, and tighter tolerances throughout. Fits all standard Sanwa and Seimitsu parts.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                isCustomizable: true,
                price: 169.00,
                variations: [
                    {
                        name: "size",
                        options: [
                            { name: "Standard", price: 0 },
                            { name: "Wide", price: 30 }
                        ]
                    }, {
                        name: "finish",
                        options: [
                            { name: "Matte", price: 0 },
                            { name: "Gloss", price: 16 },
                            { name: "Frosted Clear", price: 26 }
                        ]
                    }
                ]
            }, {
                id: 4,
                name: "Carnage Guisada V2 Special Edition Enclosure",
                category: "enclosures",
                description: "Same bulletproof V2 internals wrapped in an eye-catching special edition colorway. Only a handful made per drop — don't sleep on it.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                isCustomizable: true,
                price: 185.00,
                variations: [
                    {
                        name: "size",
                        options: [
                            { name: "Standard", price: 0 },
                            { name: "Wide", price: 30 }
                        ]
                    }, {
                        name: "finish",
                        options: [
                            { name: "Matte", price: 0 },
                            { name: "Gloss", price: 14 }
                        ]
                    }
                ]
            }, {
                id: 5,
                name: "Carnage Guisada V2 Midnight Edition Enclosure",
                category: "enclosures",
                description: "Matte black on black with subtle deep blue accents. The Midnight Edition is for players who prefer their setup to disappear into the dark — until the mixup lands.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                isCustomizable: true,
                price: 189.00,
                variations: [
                    {
                        name: "size",
                        options: [
                            { name: "Standard", price: 0 },
                            { name: "Wide", price: 30 }
                        ]
                    }, {
                        name: "finish",
                        options: [
                            { name: "Matte", price: 0 },
                            { name: "Gloss", price: 16 }
                        ]
                    }
                ]
            }, {
                id: 6,
                name: "Huevos Puncheros V2 Enclosure",
                category: "enclosures",
                description: "A wider, flatter enclosure designed for players who want their buttons closer to the table. The Huevos Puncheros V2 is a fan favorite among leverless converts.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                isCustomizable: true,
                price: 179.00,
                variations: [
                    {
                        name: "layout",
                        options: [
                            { name: "8-Button", price: 0 },
                            { name: "10-Button", price: 30 }
                        ]
                    }, {
                        name: "finish",
                        options: [
                            { name: "Matte", price: 0 },
                            { name: "Gloss", price: 16 },
                            { name: "Smoked", price: 20 }
                        ]
                    }
                ]
            }, {
                id: 7,
                name: "Huevos Puncheros V2 Special Edition Enclosure",
                category: "enclosures",
                description: "The V2 in a vivid special edition finish. Hand-inspected before shipping. Pairs well with translucent buttons if you're going for that full stained-glass look.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                isCustomizable: true,
                price: 195.00,
                variations: [
                    {
                        name: "layout",
                        options: [
                            { name: "8-Button", price: 0 },
                            { name: "10-Button", price: 30 }
                        ]
                    }, {
                        name: "finish",
                        options: [
                            { name: "Matte", price: 0 },
                            { name: "Gloss", price: 14 }
                        ]
                    }
                ]
            }, {
                id: 8,
                name: "Huevos Puncheros V2 Chrome Edition Enclosure",
                category: "enclosures",
                description: "Mirrored chrome top panel that will absolutely blind your opponent across the table. Functional, fabulous, and borderline illegal at majors.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                isCustomizable: true,
                price: 199.00,
                variations: [
                    {
                        name: "layout",
                        options: [
                            { name: "8-Button", price: 0 },
                            { name: "10-Button", price: 30 }
                        ]
                    }, {
                        name: "finish",
                        options: [
                            { name: "Full Chrome", price: 16 },
                            { name: "Chrome Top / Matte Base", price: 0 }
                        ]
                    }
                ]
            }, {
                id: 9,
                name: "Huevos Puncheros V3 Enclosure",
                category: "enclosures",
                description: "Third generation of the Puncheros line, featuring an ergonomic wrist lip, updated USB-C passthrough port, and a refined button cluster layout informed by direct community feedback.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                isCustomizable: true,
                price: 199.00,
                variations: [
                    {
                        name: "layout",
                        options: [
                            { name: "8-Button", price: 0 },
                            { name: "10-Button", price: 30 }
                        ]
                    }, {
                        name: "finish",
                        options: [
                            { name: "Matte", price: 0 },
                            { name: "Gloss", price: 16 },
                            { name: "Frosted Clear", price: 20 }
                        ]
                    }
                ]
            }, {
                id: 10,
                name: "Huevos Puncheros V3 Holographic Edition Enclosure",
                category: "enclosures",
                description: "The V3 with a holographic top panel that shifts between colors as you move. Truly a conversation piece. Limited production run — no restocks planned.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                isCustomizable: true,
                price: 249.00,
                variations: [
                    {
                        name: "layout",
                        options: [
                            { name: "8-Button", price: 0 },
                            { name: "10-Button", price: 30 }
                        ]
                    }, {
                        name: "finish",
                        options: [
                            { name: "Holographic Rainbow", price: 0 },
                            { name: "Holographic Gold", price: 16 }
                        ]
                    }
                ]
            }, {
                id: 11,
                name: "Carnage Guisada Mini Enclosure",
                category: "enclosures",
                description: "Everything you love about the Carnage Guisada, shrunk down for travel. Fits 8 buttons in a compact footprint that slips easily into a laptop bag.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                isCustomizable: true,
                price: 155.00,
                variations: [
                    {
                        name: "finish",
                        options: [
                            { name: "Matte Black", price: 0 },
                            { name: "Frosted Clear", price: 10 },
                            { name: "Gloss White", price: 10 }
                        ]
                    }, {
                        name: "art panel",
                        options: [
                            { name: "Standard", price: 0 },
                            { name: "With Custom Art Panel", price: 24 }
                        ]
                    }
                ]
            }, {
                id: 12,
                name: "Carnage Guisada Mini Sunset Edition Enclosure",
                category: "enclosures",
                description: "The Mini gets a warm gradient treatment — burnt orange bleeding into dusty rose. Looks like a Texas summer. Plays like a counterpick.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                isCustomizable: true,
                price: 175.00,
                variations: [
                    {
                        name: "finish",
                        options: [
                            { name: "Sunset Gradient", price: 0 },
                            { name: "Sunset Gradient + Gloss", price: 14 }
                        ]
                    }, {
                        name: "art panel",
                        options: [
                            { name: "Standard", price: 0 },
                            { name: "With Custom Art Panel", price: 24 }
                        ]
                    }
                ]
            }, {
                id: 13,
                name: "Huevos Puncheros Mini Enclosure",
                category: "enclosures",
                description: "Compact leverless enclosure for on-the-go grinding. Slim profile, solid build, no compromises on button spacing. The road warrior's best friend.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                isCustomizable: true,
                price: 165.00,
                variations: [
                    {
                        name: "finish",
                        options: [
                            { name: "Matte Black", price: 0 },
                            { name: "Frosted Clear", price: 10 },
                            { name: "Gloss White", price: 10 }
                        ]
                    }, {
                        name: "layout",
                        options: [
                            { name: "8-Button", price: 0 },
                            { name: "10-Button", price: 24 }
                        ]
                    }
                ]
            }, {
                id: 14,
                name: "Tama Rindoh Standee",
                category: "merch",
                description: "A double-sided acrylic standee featuring Tama Rindoh in full fighting stance. 6 inches tall, UV-printed with vibrant colors. Perfect for the desk shrine.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                price: 28.00
            }, {
                id: 15,
                name: "Liquid Core Joystick Topper",
                category: "accessories",
                description: "A satisfying liquid-filled sphere that sits atop any standard joystick shaft. Mesmerizing to watch, smooth to grip. Available in several colorways per drop.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                isCustomizable: true,
                price: 42.00
            }, {
                id: 16,
                name: "UV Printed Dust Washer",
                category: "accessories",
                description: "Dress up your joystick with a custom UV-printed dust washer. Fits standard shaft diameters. Artwork changes each season — check the current drop for available designs.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                isCustomizable: true,
                price: 28.00
            }, {
                id: 17,
                name: "Breakfast Garage Classic Fightstick",
                category: "controllers",
                description: "The BG house stick. Pre-built and ready to plug in, featuring a Carnage Guisada V2 enclosure, Sanwa buttons, and a JLF lever. A solid starting point for any level of play.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                price: 189.00
            }, {
                id: 18,
                name: "Breakfast Garage Leverless Controller",
                category: "controllers",
                description: "BG's take on the leverless format. Built into a Huevos Puncheros V3 shell with Brook Universal Fight Board inside. No soldering required. Just plug in and lab.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                price: 219.00
            }, {
                id: 19,
                name: "BG Logo Snapback Hat",
                category: "merch",
                description: "Structured snapback with the Breakfast Garage wordmark embroidered on the front panel. One size fits most. Rep the garage at your next local.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                price: 38.00
            }, {
                id: 20,
                name: "BG Enamel Pin Set",
                category: "merch",
                description: "Set of three hard enamel pins featuring BG's most recognizable icons. Clutch clasp backs, vibrant fills, and a matte black finish on the metal. Great for bags, lanyards, or display.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                price: 22.00
            }, {
                id: 21,
                name: "Braided USB-C Cable",
                category: "accessories",
                description: "A 10-foot braided USB-C cable purpose-built for fight sticks. Tangle-resistant, strain-relieved ends, and thick enough to survive a tournament bag without complaint.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                isCustomizable: true,
                price: 32.00
            }
        ]
    },
    "iron-summit-arcade": {
        name: "Iron Summit Arcade",
        bannerImageUrl: "https://placehold.co/1200x300",
        categories: [
            "controllers",
            "enclosures",
            "merch",
            "accessories"
        ],
        products: [
            {
                id: 22,
                name: "Ironclad Hitbox V3 Controller",
                category: "controllers",
                description: "Iron Summit's flagship hitbox, built for precision. Low-profile buttons, a reinforced chassis, and a Brook UFB pre-installed. Tournament-ready out of the box.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                price: 249.00
            }, {
                id: 23,
                name: "Ironclad Leverless Mini Controller",
                category: "controllers",
                description: "A pint-sized leverless built for players who travel light. Fits in a jacket pocket, plays like a full-size board. Compatible with PS5, PS4, PC, and Switch.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                price: 199.00
            }, {
                id: 24,
                name: "Summit Slim Enclosure",
                category: "enclosures",
                description: "A sleek, low-profile enclosure machined from aluminum. The Summit Slim sits flush on any surface and runs cool under pressure. Minimal branding, maximum focus.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                isCustomizable: true,
                price: 245.00,
                variations: [
                    {
                        name: "color",
                        options: [
                            { name: "Brushed Aluminum", price: 0 },
                            { name: "Anodized Black", price: 20 },
                            { name: "Anodized Blue", price: 20 }
                        ]
                    }, {
                        name: "size",
                        options: [
                            { name: "Standard", price: 0 },
                            { name: "Wide", price: 34 }
                        ]
                    }
                ]
            }, {
                id: 25,
                name: "Summit Pro Enclosure",
                category: "enclosures",
                description: "The Pro steps up with a weighted base, removable top panel, and dual USB-C routing. Designed for players who refuse to compromise on feel or function.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                isCustomizable: true,
                price: 279.00,
                variations: [
                    {
                        name: "color",
                        options: [
                            { name: "Brushed Aluminum", price: 0 },
                            { name: "Anodized Black", price: 16 },
                            { name: "Anodized Gold", price: 20 }
                        ]
                    }, {
                        name: "size",
                        options: [
                            { name: "Standard", price: 0 },
                            { name: "Wide", price: 20 }
                        ]
                    }
                ]
            }, {
                id: 26,
                name: "Iron Summit Logo Tee",
                category: "merch",
                description: "100% heavyweight cotton tee with the Iron Summit crest screen-printed on the chest. Relaxed fit, pre-shrunk, and holds up after many washes.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                price: 35.00
            }, {
                id: 27,
                name: "Balltop Grip Tape Set",
                category: "accessories",
                description: "Precision-cut grip tape for standard 35mm balltops. Adds just enough texture to improve control without feeling abrasive. Pack includes three pre-cut sheets.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                isCustomizable: true,
                price: 25.00
            }, {
                id: 28,
                name: "Acrylic Artwork Panel",
                category: "accessories",
                description: "Custom-cut acrylic artwork panel sized for standard fightstick tops. Protects your art insert while adding a clean layered look. Available in clear and smoked finishes.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                isCustomizable: true,
                price: 38.00
            }
        ]
    },
    "pixel-forge-customs": {
        name: "Pixel Forge Customs",
        bannerImageUrl: "https://placehold.co/1200x300",
        categories: [
            "controllers",
            "enclosures",
            "merch",
            "accessories"
        ],
        products: [
            {
                id: 29,
                name: "Forge Series Fightstick Enclosure",
                category: "enclosures",
                description: "Pixel Forge's signature enclosure, CNC-routed from thick acrylic with clean laser-etched branding. Roomy enough for modding, tight enough to feel professional.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                isCustomizable: true,
                price: 215.00,
                variations: [
                    {
                        name: "size",
                        options: [
                            { name: "Standard", price: 0 },
                            { name: "Wide", price: 30 }
                        ]
                    }, {
                        name: "finish",
                        options: [
                            { name: "Clear", price: 0 },
                            { name: "Smoked", price: 10 },
                            { name: "Tinted Blue", price: 14 }
                        ]
                    }
                ]
            }, {
                id: 30,
                name: "Forge Mini Enclosure",
                category: "enclosures",
                description: "The Forge Series shrunk to a compact form factor. Same quality materials and build tolerances, now optimized for leverless layouts and travel setups.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                isCustomizable: true,
                price: 185.00,
                variations: [
                    {
                        name: "finish",
                        options: [
                            { name: "Clear", price: 0 },
                            { name: "Smoked", price: 10 },
                            { name: "Tinted Pink", price: 10 }
                        ]
                    }, {
                        name: "layout",
                        options: [
                            { name: "8-Button", price: 0 },
                            { name: "10-Button", price: 24 }
                        ]
                    }
                ]
            }, {
                id: 31,
                name: "Custom Lever Gate Set",
                category: "accessories",
                description: "A set of aftermarket restrictor gates machined to tighter tolerances than stock. Includes square, octagonal, and circular options. Drop-in fit for JLF and compatible levers.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                isCustomizable: true,
                price: 45.00
            }, {
                id: 32,
                name: "RGB Button Harness",
                category: "accessories",
                description: "Wire harness that adds per-button RGB lighting to any standard 30mm button setup. Daisy-chain up to 12 buttons, controlled via included USB dongle and desktop software.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                isCustomizable: true,
                price: 48.00
            }, {
                id: 33,
                name: "Pixel Forge Enamel Pin",
                category: "merch",
                description: "Hard enamel pin featuring the Pixel Forge anvil logo in full color on a nickel-plated base. Rubber clutch back. Small enough to stack on any bag or jacket lapel.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                price: 16.00
            }, {
                id: 34,
                name: "Pixel Forge Sticker Pack",
                category: "merch",
                description: "Pack of eight die-cut vinyl stickers featuring Pixel Forge artwork and icons. Weatherproof and UV-resistant — stick them on your stick, your case, your water bottle, wherever.",
                thumbnailImageUrl: `https://placehold.co/${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}`,
                imageUrl: `https://placehold.co/${IMAGE_WIDTH}x${IMAGE_HEIGHT}`,
                price: 14.00
            }
        ]
    }
}