# Site-wide Mobile & Functionality Audit

Goal: verify every page on the site is mobile-friendly and that all links, buttons, and forms work as intended. Fix issues found.

## Scope

All public routes:
- `/` Home
- `/about`
- `/businesses`, `/profit-partners`, `/command-central`, `/mastermind-passport`
- `/leaders`, `/fam-guides`, `/local-leaders`, `/expert-faculty`
- `/team-wellness-hub`, `/promo-engine`, `/wer1`
- `/fam-central`, `/logo-concepts`, `/nominate`
- `/apply`, `/booking`, `/contact`
- `/privacy`, `/terms`, `/404`

## Audit checklist (per page)

Mobile (test at 375px, 414px, 768px):
- No horizontal scroll / overflow
- Typography scales (no clipped headlines, readable body)
- Tap targets >= 44px (especially icon-only buttons, nav)
- Images responsive, no layout shift, proper aspect ratio
- Section padding/spacing doesn't crush content
- Sticky header and mobile menu open/close correctly
- Forms usable: input sizing, labels visible, keyboard types correct
- Embedded iframes (GHL form on `/apply`, calendar on `/booking`) fit width

Links & navigation:
- Header links, mobile menu links, footer links all resolve
- In-page anchor links (`#apply`, etc.) scroll to correct section
- CTA buttons across all section components route correctly
- External links use `target="_blank"` + `rel="noopener"`
- 404 fallback works for unknown routes

Forms:
- `/contact` form: required validation, success state, topic preselect from `?topic=` query
- `/apply` GHL embedded form loads and resizes
- `/booking` GHL calendar loads and resizes
- Any newsletter/CTA inputs validate and submit

Console & network:
- No runtime errors or warnings beyond known React Router future-flag notices
- No 404s on images or assets

## Approach

1. Programmatic pass: ripgrep for known issue patterns
   - `target="_blank"` without `rel="noopener"`
   - hardcoded widths/min-widths that break mobile
   - icon-only `<Button>` / `<button>` missing `aria-label`
   - broken `to=`/`href=` routes (compare against router config)
   - `overflow-x` offenders
2. Manual browser pass with the browser tool at 375px and 768px on each route
   - Screenshot each page, scroll through
   - Click primary CTAs and nav links to confirm targets
   - Submit `/contact` form with test data
   - Verify `/apply` and `/booking` iframes render
3. Compile findings into a fix list grouped by file
4. Apply fixes (mobile spacing, missing aria-labels, broken links, form bugs)
5. Re-verify the fixed pages in the browser at mobile width

## Deliverable

- A summary of issues found per page
- Code fixes applied for each issue
- Confirmation screenshots for any non-trivial fix

## Notes

- This is a large audit (~22 routes). Expect multiple iterations.
- Will not change copy, design system tokens, or business logic unless required to fix a bug.
- Will not touch GHL form/calendar internals — only the wrapper/embed sizing.
