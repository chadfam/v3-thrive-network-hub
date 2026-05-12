# United to Thrive — brand sheet

A one-page reference. The logo system lives in code as [`<ThriveLogo>`](src/components/site/ThriveLogo.tsx); static files are in [`public/`](public/).

## The logo

**Concept.** A horizontal lockup: the **"thrive"** wordmark with an **organic hub-and-spoke mark** to its right. The mark is a gold hub set off-centre — United to Thrive, the family, at the middle of everything — surrounded by six nodes at deliberately-irregular distances and angles (the six programs: Profit Partners, Mastermind Passport, Command Central, FAM Central, WER1, PromoEngine), connected by navy spokes of varying length (a network that *grew* — not a diagram).

### Variants

| Variant | Use | How |
|---|---|---|
| **Lockup** | Header, footer, documents, anywhere wide | `<ThriveLogo />` · or `public/thrive-logo.svg` |
| **Mark only** (light) | Square spaces — app icon, social avatar, stamp | `<ThriveLogo variant="mark" />` |
| **Mark only** (favicon weight) | Tiny: browser tab, ~16–32 px | `<ThriveLogo variant="favicon" />` · `public/favicon.svg` |
| **Reversed** | On navy / dark backgrounds / photos | add `tone="reversed"` to any of the above |

The favicon variant uses slightly heavier strokes and nodes so it survives at 16 px; the lockup and mark use the lighter, more delicate weight everywhere else.

### Clearspace

Keep padding around the lockup equal to the **cap-height of "thrive"** on all sides (roughly the height of the mark). Don't crowd it with other elements.

### Minimum sizes

- Lockup: don't go below **~24 px tall** (below that, drop the wordmark and use the mark).
- Mark: down to **16 px** using the favicon weight; below that, it stops being legible.

### Don'ts

- Don't recolour the mark outside the palette below.
- Don't add a drop shadow, gradient, or outline.
- Don't stretch, skew, or rotate it.
- Don't put the lockup on a busy photo without a scrim — use the reversed variant over a navy overlay (~55% opacity).
- Don't recreate the old starburst logo or the old custom typeface — those are retired.

## Colour

| Token | Hex | Role |
|---|---|---|
| Navy / ink | `#0F172A` | Wordmark, navy spokes & nodes, body text |
| Brand blue | `#2563EB` | Blue nodes, primary buttons, links, accents |
| Brand gold | `#FBBF24` | The hub centre, accent dividers, highlight |
| Brand navy (surfaces) | `#0B1F3F` | Large dark backgrounds (navy sections), reversed-logo backdrop |
| White | `#FFFFFF` | Reversed wordmark & nodes; backgrounds |

Two-to-three colours in any single application. The gold is for the centre/accents only — never a full background or large fill.

## Typography

- **Montserrat** (Google Fonts), used site-wide.
  - Headlines / wordmark: ExtraBold (800), tight tracking (≈ −2% to −3.4%).
  - Body: Regular/Medium (400–500), ~16–17 px, 1.55 line-height.
  - Eyebrow labels: Medium (500), UPPERCASE, +0.18em tracking, 13 px.

## Voice (for copy)

Direct, specific, mission-first. Outcomes and benefits over features. "Partnerships over advertising." "Famous for families." Avoid buzzword soup and generic claims; lead with the number, the name, or the proof.

## Files

- `public/favicon.svg` — the mark, favicon weight (browser tab, also referenced by `apple-touch-icon`).
- `public/thrive-logo.svg` — the horizontal lockup (also the `logo` in the site's JSON-LD; outline the text for off-site/pixel-exact use).
- `src/components/site/ThriveLogo.tsx` — the live logo component (renders Montserrat correctly in-app).
- `src/assets/thrive-logo.svg` — static fallback copy of the lockup.

> Production note: the wordmark in the static `.svg` files references Montserrat with a system fallback. For a truly portable asset (e.g. handing the logo to a printer or another tool), outline the "thrive" text in a vector editor and re-export.
