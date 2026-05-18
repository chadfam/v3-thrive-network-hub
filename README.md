# United to Thrive

Marketing site for United To Thrive LLC, the network behind Profit Partners, Mastermind Passport, Command Central, the WER1 referral engine, and related programs.

> **Tagline:** Grow through partnerships. Famous for families.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn/ui
- React Router (BrowserRouter)
- React Helmet Async (per-page SEO)
- Vitest + Testing Library

## Local development

```bash
npm install
npm run dev      # localhost:8080
npm run build    # production build to dist/
npm run preview  # preview the production build locally
npm run lint
npm test
```

## Deploy

The repo is connected to **Lovable.dev**: commits on `main` sync to the Lovable preview automatically. Because pushing is what publishes, do not `git push` until a change has been explicitly approved for release. Edit and commit locally, then wait for the go-ahead.

## Project structure

```
src/
├── components/
│   ├── site/         # Layout, Header, Footer, home-page sections
│   ├── about/        # /about page sections
│   ├── businesses/   # /businesses sections
│   ├── leaders/      # /leaders sections
│   ├── profit/       # /profit-partners sections
│   ├── passport/     # /mastermind-passport sections
│   ├── command/      # /command-central sections
│   ├── wer1/         # /wer1 sections
│   ├── local/        # /local-leaders sections
│   ├── famguides/    # /fam-guides sections
│   ├── expert/       # /expert-faculty sections
│   ├── wellness/     # /team-wellness-hub sections
│   └── ui/           # shadcn/ui primitives
├── pages/            # Top-level route components
└── lib/              # Shared utilities

public/
├── sitemap.xml
├── robots.txt
├── favicon.svg
└── og-image.placeholder.txt   # TODO: replace with a real 1200x630 og-image.png

_context/             # gitignored: local content reference for Claude
```

## SEO

- Per-page metadata is centralized via the `<Layout>` component in [src/components/site/Layout.tsx](src/components/site/Layout.tsx). Each page passes `title`, `description`, and `canonical` props.
- Organization + WebSite JSON-LD live in [index.html](index.html).
- Sitemap at [public/sitemap.xml](public/sitemap.xml). Update it when adding routes.
- The OG image is still a placeholder (`public/og-image.placeholder.txt`). Add a real 1200x630 `og-image.png` before launch and point the meta tags at it.

## Brand

- **Primary palette:** Brand blue `#2563EB`, navy `#0B1F3F`, gold `#FBBF24` on white. (Tokens defined in [src/index.css](src/index.css).)
- **Type:** Montserrat throughout.
- **Voice:** Direct, specific, mission-first. Avoid stock photo aesthetics; this is a people business.

## Trademarks

- ™: Profit Partners, Mastermind Passport, Command Central, Lifetime Client Agency
- ®: Raving Referrals
- All owned by United To Thrive LLC

## Contact

United To Thrive LLC
222 S Mill Ave, Suite 800
Tempe, AZ 85281
