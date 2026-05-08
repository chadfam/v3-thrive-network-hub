import Layout from "@/components/site/Layout";
import concept1 from "@/assets/logo-concepts/concept-1-color-swap.svg";
import concept2 from "@/assets/logo-concepts/concept-2-three-rings.svg";
import concept3 from "@/assets/logo-concepts/concept-3-t-monogram.svg";
import concept4 from "@/assets/logo-concepts/concept-4-wordmark-period.svg";
import concept5 from "@/assets/logo-concepts/concept-5-wordmark-flourish.svg";
import concept6 from "@/assets/logo-concepts/concept-6-stacked-eyebrow.svg";
import currentLogo from "@/assets/thrive-logo.svg";

type Concept = {
  id: string;
  src: string;
  name: string;
  why: string;
  pros: string[];
  cons: string[];
};

const concepts: Concept[] = [
  {
    id: "current",
    src: currentLogo,
    name: "Current logo",
    why: "What's on the site now. Orange-to-pink gradient on the starburst icon, dark slate wordmark.",
    pros: ["Already in use, recognized"],
    cons: ["Warm gradient fights blue/navy/gold palette", "Decorative starburst is busy at small sizes"],
  },
  {
    id: "1",
    src: concept1,
    name: "Concept 1 — Direct color swap",
    why: "Same starburst geometry. Replace the orange→pink gradient with navy→blue→gold.",
    pros: ["Lowest risk; keeps recognition", "10-min change"],
    cons: ["Inherits the busy starburst shape", "Gradient still feels decorative"],
  },
  {
    id: "2",
    src: concept2,
    name: "Concept 2 — Three rings (Venn)",
    why: "Three overlapping circles for the converging programs (Profit Partners, Mastermind Passport, Command Central). Navy + blue + gold.",
    pros: ["Tells a story (network)", "Symbol works as standalone", "Multi-color but balanced"],
    cons: ["Looks slightly like Olympic rings or marketing-agency logos", "Translucency may not print well"],
  },
  {
    id: "3",
    src: concept3,
    name: "Concept 3 — T monogram",
    why: "Bold navy 'T' with a gold accent dot. Strong, simple, scalable. Clean separation between symbol and wordmark.",
    pros: ["Works as favicon and app icon", "Solid color (no gradient = scales perfectly)", "B2B-feel"],
    cons: ["Generic 'T'; needs custom proportions to feel distinct", "Could be confused with other 'T' brands"],
  },
  {
    id: "4",
    src: concept4,
    name: "Concept 4 — Wordmark + gold period",
    why: "Drop the icon. Wordmark only with a small gold dot at the end. Maximum cleanliness.",
    pros: ["Cleanest, most professional", "Brand mark is the wordmark itself", "Easy to use across mediums"],
    cons: ["No standalone symbol for favicon/social", "Plays it safe"],
  },
  {
    id: "5",
    src: concept5,
    name: "Concept 5 — Wordmark + gold flourish",
    why: "Wordmark plus a small gold horizontal accent bar (matches the .section-accent dividers used throughout the site).",
    pros: ["Visually echoes the gold accent system already on the site", "Minimal but intentional"],
    cons: ["Bar may read as 'incomplete' to some viewers", "No standalone symbol"],
  },
  {
    id: "6",
    src: concept6,
    name: "Concept 6 — Stacked with 'UNITED TO' eyebrow",
    why: "Solves a brand-clarity problem: the wordmark says 'thrive' but the company is 'United to Thrive'. Eyebrow makes it explicit.",
    pros: ["Disambiguates Thrive vs. United to Thrive", "Premium / editorial feel"],
    cons: ["Taller; harder to fit in tight headers", "Loses the singular 'thrive' moment"],
  },
];

const Tile = ({ src, label, dark = false }: { src: string; label: string; dark?: boolean }) => (
  <div
    className={`flex items-center justify-center px-6 py-8 rounded-xl ${dark ? "bg-brand-navy" : "bg-white border border-[hsl(var(--slate-200))]"}`}
  >
    <img src={src} alt={label} className="h-10 md:h-12 w-auto" />
  </div>
);

const Favicon = ({ src, dark = false }: { src: string; dark?: boolean }) => (
  <div
    className={`flex items-center justify-center w-12 h-12 rounded ${dark ? "bg-brand-navy" : "bg-white border border-[hsl(var(--slate-200))]"}`}
  >
    <img src={src} alt="favicon size" className="h-5 w-auto" />
  </div>
);

const LogoConcepts = () => (
  <Layout
    title="Logo Concepts"
    description="Logo concept comparison. Internal preview only."
    canonical="/logo-concepts"
    noindex
  >
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pt-16 md:pt-24 pb-8">
        <p className="eyebrow">INTERNAL PREVIEW · NOT INDEXED</p>
        <h1 className="mt-6 font-serif-display text-slate-ink" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
          Logo concept comparison
        </h1>
        <p className="mt-6 max-w-[640px] text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          Six directions for moving the Thrive logo onto the new blue / navy / gold palette. Each shown on light, dark, and at favicon size. Pick one and we'll wire it in.
        </p>
        <p className="mt-4 text-[14px] italic text-[hsl(var(--slate-500))]">
          Note: typography in some concepts uses the system fallback because the SVGs are loaded as <code>&lt;img&gt;</code>. Final implementation will inline the SVG so Montserrat renders properly.
        </p>
      </div>
    </section>

    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pb-16 md:pb-32 space-y-12">
        {concepts.map((c, i) => (
          <article key={c.id} className="border border-[hsl(var(--slate-200))] rounded-2xl p-6 md:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="eyebrow-blue">{i === 0 ? "BASELINE" : `OPTION ${c.id}`}</p>
                <h2 className="mt-2 font-serif-display text-slate-ink text-[24px] md:text-[28px]">
                  {c.name}
                </h2>
                <p className="mt-3 max-w-[640px] text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                  {c.why}
                </p>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <Tile src={c.src} label={`${c.name} on white`} />
              <Tile src={c.src} label={`${c.name} on navy`} dark />
              <div className="flex items-center justify-center gap-3 rounded-xl bg-[hsl(var(--slate-200))] py-8 px-6">
                <Favicon src={c.src} />
                <Favicon src={c.src} dark />
                <span className="text-[12px] uppercase tracking-[0.18em] text-[hsl(var(--slate-500))]">favicon size</span>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div>
                <p className="eyebrow-gold">PROS</p>
                <ul className="mt-3 space-y-2">
                  {c.pros.map((p) => (
                    <li key={p} className="flex gap-3 text-[15px] text-[hsl(var(--slate-700))]">
                      <span className="bullet-dot-gold" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow">CONS</p>
                <ul className="mt-3 space-y-2">
                  {c.cons.map((p) => (
                    <li key={p} className="flex gap-3 text-[15px] text-[hsl(var(--slate-700))]">
                      <span className="bullet-dot" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}

        <div className="mt-12 rounded-2xl bg-brand-navy p-8 md:p-12 text-white">
          <h2 className="font-serif-display text-[28px] md:text-[32px]">
            Pick one and we'll ship it.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-white/80 max-w-[640px]">
            Each concept SVG is in <code>src/assets/logo-concepts/</code>. To make a concept the live logo, we'll replace <code>thrive-logo.svg</code> and Header / Footer pick it up automatically. Tell me which one (or which mash-up) feels right.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default LogoConcepts;
