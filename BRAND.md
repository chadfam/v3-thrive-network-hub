# United to Thrive - brand sheet

A one-page reference. The logo system lives in code as [`<ThriveLogo>`](src/components/site/ThriveLogo.tsx); static files are in [`public/`](public/).

## The logo

**Concept.** A horizontal lockup: the **"thrive"** wordmark with an **organic hub-and-spoke mark** growing out of the top-right of the "e". The mark is a hub set off-centre (United to Thrive, the family, at the middle of everything), surrounded by six nodes at deliberately-irregular distances and angles. The six nodes are the six programs: Profit Partners, Mastermind Passport, Command Central, FAM Central, WER1, PromoEngine. Spokes of varying length connect them, reading as a network that *grew* rather than a diagram. The whole mark is one colour, the **brand navy** (`#264B73`); the wordmark is the darker ink (`#0F172A`).

### Variants

| Variant | Use | How |
|---|---|---|
| **Lockup** | Header, footer, documents, anywhere wide | `<ThriveLogo />`, or `public/thrive-logo.svg` |
| **Mark only** (light) | Square spaces: app icon, social avatar, stamp | `<ThriveLogo variant="mark" />` |
| **Mark only** (favicon weight) | Tiny: browser tab, ~16 to 32 px | `<ThriveLogo variant="favicon" />`, `public/favicon.svg` |
| **Reversed** | On navy / dark backgrounds / photos | add `tone="reversed"` to any of the above |

The favicon variant uses slightly heavier strokes and nodes so it survives at 16 px; the lockup and mark use the lighter, more delicate weight everywhere else.

### Clearspace

Keep padding around the lockup equal to the **cap-height of "thrive"** on all sides (roughly the height of the mark). Don't crowd it with other elements.

### Minimum sizes

- Lockup: don't go below **~24 px tall** (below that, drop the wordmark and use the mark).
- Mark: down to **16 px** using the favicon weight; below that, it stops being legible.

### Don'ts

- Don't recolour the mark. It's the brand navy `#264B73`, single colour (white on dark backgrounds). Don't introduce gold or a second colour into it.
- Don't add a drop shadow, gradient, or outline.
- Don't stretch, skew, or rotate it.
- Don't put the lockup on a busy photo without a scrim. Use the reversed variant over a navy overlay (~55% opacity).
- Don't recreate the old starburst logo or the old custom typeface; those are retired.

## Colour

| Token | Hex | Role |
|---|---|---|
| Navy / ink | `#0F172A` | Wordmark, body text |
| Brand navy | `#264B73` | The logo mark (hub, spokes and nodes), primary buttons, links, accents, and dark surfaces |
| Brand navy hover | `#33608F` | Hover state for buttons and links; navy accent |
| Brand gold | `#FBBF24` | Accent dividers, highlights. Not used in the logo |
| White | `#FFFFFF` | Reversed wordmark and nodes; backgrounds |

The palette was unified to a single navy (`#264B73`) site-wide; the old separate brand blue (`#2563EB`) and surface navy (`#0B1F3F`) are retired. `src/index.css` is the source of truth for exact token values.

Two to three colours in any single application. The gold is for accents, dividers, and highlights only. Never in the logo, never a full background or large fill.

## Typography

- **Montserrat** (Google Fonts), used site-wide.
  - Headlines / wordmark: ExtraBold (800), tight tracking (roughly -2% to -3.4%).
  - Body: Regular/Medium (400 to 500), ~16 to 17 px, 1.55 line-height.
- No eyebrow or kicker labels (small uppercase tracked text above headings) anywhere. This is a sitewide rule, in copy and in code.

## Voice (for copy)

Direct, specific, mission-first. Outcomes and benefits over features. "Partnerships over advertising." "Famous for families." Avoid buzzword soup and generic claims; lead with the number, the name, or the proof. Full copy rules live in `_context/STRATEGY.md`.

## Files

- `public/favicon.svg` - the mark, favicon weight (browser tab, also referenced by `apple-touch-icon`).
- `public/thrive-logo.svg` - the horizontal lockup (also the `logo` in the site's JSON-LD; outline the text for off-site/pixel-exact use).
- `src/components/site/ThriveLogo.tsx` - the live logo component (renders Montserrat correctly in-app).
- `src/assets/thrive-logo.svg` - static fallback copy of the lockup.

> Production note: the wordmark in the static `.svg` files references Montserrat with a system fallback. For a truly portable asset (e.g. handing the logo to a printer or another tool), outline the "thrive" text in a vector editor and re-export.

## No em-dashes

This site has a hard no-em-dash rule. Don't use the em-dash character anywhere in the codebase, including this file, `README.md`, comments, and SVG titles. Use periods, commas, colons, parens, or rewording. Hyphens and en-dashes are fine.
