# Replace image in "Become the name families pass along" section

## What changes

Swap the current family-dinner photo in `FamousForFamilies.tsx` for a new image showing a small group of parents in conversation. Same warm, candid tone — but the subject becomes peer-to-peer trust between parents (which matches the "name families pass along" message) rather than a family at the table.

## How

1. Generate a new photo: a small group (3–4) of parents standing in soft natural light, talking casually, warm and authentic — documentary feel, no eye contact with camera. Save to `src/assets/parents-talking.jpg`.
2. Update `src/components/site/FamousForFamilies.tsx` to import the new image and update the `alt` text accordingly.
3. Leave layout, copy, aspect ratio (4/5), and everything else untouched.

## Out of scope

- No copy or layout changes.
- The old `family-dinner.jpg` asset stays in the repo in case it's reused elsewhere.
