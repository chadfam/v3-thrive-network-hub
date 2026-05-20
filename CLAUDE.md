# CLAUDE.md

Guidance for Claude Code (and any AI agent) working in this repo. Read this first.

## What this is

Marketing site for United To Thrive LLC, the network behind Profit Partners,
Mastermind Passport, Command Central, FAM Central, WER1, and PromoEngine. Built
on Lovable.dev and synced to this GitHub repo.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn/ui (Radix primitives in `src/components/ui`)
- React Router (BrowserRouter), React Helmet Async (per-page SEO)
- Vitest + Testing Library
- Path alias: `@/` maps to `src/`

## Commands

```bash
npm install
npm run dev        # http://localhost:8080
npm run build      # production build to dist/
npm run preview    # serve the build locally
npm run lint       # ESLint (flat config)
npm run typecheck  # tsc --noEmit
npm test           # Vitest, run once
```

Run `npm run build` before committing.

## Workflow (important)

- This repo syncs to Lovable.dev: a commit on `main` updates the Lovable preview,
  and pushing is what publishes. Do NOT `git push` until the change is explicitly
  approved for release. Edit and commit locally, then wait for the go-ahead.
- Do not force-push or rewrite history without an explicit OK.
- Edit locally rather than in the Lovable editor, to avoid two-way sync conflicts.

## Hard rules (no exceptions)

- No em-dash characters anywhere: copy, meta, alt text, button labels, code,
  comments, SVG titles. Use periods, commas, colons, parens, or reword. Hyphens
  and en-dashes are fine. A Stop hook (`.claude/scripts/utt-audit.sh`) enforces
  this and blocks completion on a hit.
- No pricing on the public site.
- No eyebrow or kicker labels (small uppercase tracked text above a heading)
  anywhere, in copy or in code.
- Single CTA site-wide: "Join our WEcosystem" pointing at `/apply`. No demo,
  contact, or secondary CTAs.
- Anchor links scroll to the TOP of the destination page, never mid-page. Sticky
  nav stays at the top.
- Voice is informational and benefit-driven, not salesy: no pain lists, no sales
  contrasts, no rhetorical setups. Never fabricate steps, numbers, tiers, or
  mechanisms. If a specific is not in source or this conversation, ask.

## Brand tokens

Defined in [src/index.css](src/index.css). Current palette (navy unified
site-wide):

| Token        | Hex       | Role                                  |
|--------------|-----------|---------------------------------------|
| Navy (brand) | `#264B73` | Primary: buttons, links, logo, accents |
| Navy hover   | `#33608F` | Hover / accent navy                    |
| Gold         | `#FBBF24` | Accent dividers and highlights only    |
| Ink          | `#0F172A` | Headlines and body text                |

Type is Montserrat throughout. See [BRAND.md](BRAND.md) for the logo system.

## Source-of-truth docs

`_context/` is gitignored local reference (not in the repo for collaborators):

- `_context/STRATEGY.md`: strategy, brand, voice, banned phrases, IA, audit.
- `_context/CONTENT_INVENTORY.md`: verified facts. Ground every specific here.
- `_context/SITE_COPY_v2.md`: approved copy.

If something is not in source, in memory, or in this conversation, ask. Do not
invent it.

## Trademarks

Profit Partners, Mastermind Passport, Command Central, and Lifetime Client Agency
are trademarks of United To Thrive LLC.
