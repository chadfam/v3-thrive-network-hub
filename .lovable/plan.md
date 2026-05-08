## What's wrong now

The current `.hero-photo-bleed > img` and `.img-blend` masks use a radial gradient that fades the photo on **all four sides**. The result is a soft oval floating in white. The PPX reference does something different.

## What PPX actually does

Looking at the uploaded screenshot of profitpartnersphx.com:

- The hero photo bleeds **hard to the top edge** of the section and **hard to the right edge** of the viewport — no fade there.
- Only the **inner edges** (left side, where the photo meets the headline column, and the bottom, where it meets the next section) dissolve into the page.
- A faint blue glow sits behind the dissolving edge, reinforcing the blend.
- The photo itself stays crisp and full-strength in its core — it doesn't look vignetted.

So the effect is **directional fade**, not a radial vignette.

## Change

Rewrite the masks in `src/index.css`:

1. `.hero-photo-bleed > img` — replace the radial-gradient mask with a **linear-gradient mask on the left edge** (fully transparent at 0%, fully opaque by ~25%) combined with a softer fade at the bottom (opaque until ~80%, transparent at 100%). Top and right stay fully opaque so the photo bleeds cleanly off-screen on the right and butts the section top.
2. `.img-blend` (used by the secondary hero pages where the photo sits inside the grid rather than bleeding to viewport edge) — same directional treatment but mirrored per layout: fade the edge that faces the text column, keep the outer edge sharp. Since some heroes have the image on the left (Leaders, Expert Faculty) and some on the right (FAM Guides, Local Leaders), introduce two helper classes:
   - `.img-blend-fade-left` — soft fade on left edge, sharp right
   - `.img-blend-fade-right` — soft fade on right edge, sharp left
   And pick the correct one in each hero component based on which side the image sits on.
3. Strengthen the blue glow behind the photo (`.hero-blue-glow::before` and `.img-blend-wrap::before`) and bias it toward the fading edge so the dissolve reads as a glow, not just missing pixels.
4. Remove the soft mask from `.img-blend` itself; only the directional variants get masks. The plain `.img-blend` becomes a no-radius, no-shadow utility.

## Files to edit

- `src/index.css` — rewrite the mask rules described above.
- `src/components/site/Hero.tsx` — already uses `.hero-photo-bleed`, no change needed.
- `src/components/businesses/BizHero.tsx` — already uses `.hero-photo-bleed`, no change.
- `src/components/leaders/LeadHero.tsx` — image on left → swap `img-blend` for `img-blend-fade-right`.
- `src/components/expert/EFHero.tsx` — image on left → `img-blend-fade-right`.
- `src/components/famguides/FGHero.tsx` — image on right → `img-blend-fade-left`.
- `src/components/local/LLHero.tsx` — image on right → `img-blend-fade-left`.
- `src/components/command/CCHero.tsx` — image on right → `img-blend-fade-left`.
- `src/components/passport/PassHero.tsx` — image on right, navy background → `img-blend-fade-left` with a navy-tinted fade instead of white.

## Out of scope

- No copy, layout, or routing changes.
- Photography stays as-is.
- Non-hero images keep their current treatment.
