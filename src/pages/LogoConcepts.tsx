import Layout from "@/components/site/Layout";
import currentLogo from "@/assets/thrive-logo.svg";
import concept1 from "@/assets/logo-concepts/concept-1-color-swap.svg";
import concept2 from "@/assets/logo-concepts/concept-2-three-rings.svg";
import concept3 from "@/assets/logo-concepts/concept-3-t-monogram.svg";
import concept4 from "@/assets/logo-concepts/concept-4-wordmark-period.svg";
import concept5 from "@/assets/logo-concepts/concept-5-wordmark-flourish.svg";
import concept6 from "@/assets/logo-concepts/concept-6-stacked-eyebrow.svg";
import concept7 from "@/assets/logo-concepts/concept-07-ascending-bars.svg";
import concept8 from "@/assets/logo-concepts/concept-08-network-nodes.svg";
import concept9 from "@/assets/logo-concepts/concept-09-blue-wordmark.svg";
import concept10 from "@/assets/logo-concepts/concept-10-momentum-loop.svg";
import concept11 from "@/assets/logo-concepts/concept-11-t-rounded-square.svg";
import concept12 from "@/assets/logo-concepts/concept-12-interlocking-arcs.svg";
import concept13 from "@/assets/logo-concepts/concept-13-upward-chevron.svg";
import concept14 from "@/assets/logo-concepts/concept-14-concentric-ripple.svg";
import concept15 from "@/assets/logo-concepts/concept-15-diamond-mark.svg";
import concept16 from "@/assets/logo-concepts/concept-16-pill-mark.svg";

type Concept = {
  id: string;
  src: string;
  name: string;
  why: string;
  badge: string;
  live?: boolean;
};

const concepts: Concept[] = [
  { id: "current", src: currentLogo, name: "Current (live)", badge: "LIVE", live: true,
    why: "Concept 1 is currently shipping — the starburst recolored navy → blue → gold." },
  { id: "1", src: concept1, name: "Concept 1 — Direct color swap", badge: "BATCH 1",
    why: "Same starburst geometry, navy→blue→gold gradient. The one currently live." },
  { id: "2", src: concept2, name: "Concept 2 — Three rings (Venn)", badge: "BATCH 1",
    why: "Three overlapping circles — converging programs. Navy + blue + gold." },
  { id: "3", src: concept3, name: "Concept 3 — T monogram", badge: "BATCH 1",
    why: "Navy block-T with gold accent dot. Strong, scalable, favicon-friendly." },
  { id: "4", src: concept4, name: "Concept 4 — Wordmark + gold period", badge: "BATCH 1",
    why: "Wordmark only, small gold dot at the end. Cleanest, most editorial." },
  { id: "5", src: concept5, name: "Concept 5 — Wordmark + gold flourish", badge: "BATCH 1",
    why: "Wordmark plus a short gold bar echoing the site's .section-accent dividers." },
  { id: "6", src: concept6, name: "Concept 6 — Stacked w/ 'UNITED TO'", badge: "BATCH 1",
    why: "Eyebrow above the wordmark — disambiguates 'Thrive' vs 'United to Thrive'." },
  { id: "7", src: concept7, name: "Concept 7 — Ascending bars", badge: "BATCH 2 · BLUE",
    why: "Three rising bars (navy → blue → gold) signaling growth. Reads as 'thriving.'" },
  { id: "8", src: concept8, name: "Concept 8 — Network nodes", badge: "BATCH 2 · BLUE",
    why: "Connected dots and lines, navy-to-blue gradient, gold end node. Echoes the WER1 network diagrams already on the site." },
  { id: "9", src: concept9, name: "Concept 9 — All-blue wordmark", badge: "BATCH 2 · BLUE",
    why: "The wordmark itself rendered in brand blue #2563EB — no icon. Maximum confidence in the name." },
  { id: "10", src: concept10, name: "Concept 10 — Momentum loop", badge: "BATCH 2 · BLUE",
    why: "A circular arrow in a navy→blue→gold gradient — compounding momentum, the referral flywheel." },
  { id: "11", src: concept11, name: "Concept 11 — T in rounded square", badge: "BATCH 2 · BLUE",
    why: "App-icon style: navy rounded square, white T, gold corner dot. Best of all for favicon / app store." },
  { id: "12", src: concept12, name: "Concept 12 — Interlocking arcs", badge: "BATCH 2 · BLUE",
    why: "Two interlocking C-curves — blue and gold — abstracting partnership / a handshake." },
  { id: "13", src: concept13, name: "Concept 13 — Upward chevron", badge: "BATCH 2 · BLUE",
    why: "Stacked chevrons pointing up, navy→blue with a gold cap. Direct and energetic." },
  { id: "14", src: concept14, name: "Concept 14 — Concentric ripple", badge: "BATCH 2 · BLUE",
    why: "Three ripple arcs (navy, blue, light blue) with a gold center — the Waves of Pay model, simplified into a mark." },
  { id: "15", src: concept15, name: "Concept 15 — Diamond mark", badge: "BATCH 2 · BLUE",
    why: "A rotated square quartered into navy / blue / blue / gold. Premium, structured, gem-like." },
  { id: "16", src: concept16, name: "Concept 16 — Pill with 't'", badge: "BATCH 2 · BLUE",
    why: "Solid blue pill with a white lowercase 't' and gold corner dot. Friendly, modern, compact." },
];

const Tile = ({ src, label, dark = false }: { src: string; label: string; dark?: boolean }) => (
  <div className={`flex items-center justify-center px-6 py-7 rounded-xl ${dark ? "bg-brand-navy" : "bg-white border border-[hsl(var(--slate-200))]"}`}>
    <img src={src} alt={label} className="h-9 md:h-11 w-auto" />
  </div>
);

const Favicon = ({ src, dark = false }: { src: string; dark?: boolean }) => (
  <div className={`flex items-center justify-center w-11 h-11 rounded ${dark ? "bg-brand-navy" : "bg-white border border-[hsl(var(--slate-200))]"}`}>
    <img src={src} alt="favicon" className="h-5 w-auto" />
  </div>
);

const LogoConcepts = () => (
  <Layout title="Logo Concepts" description="Logo concept comparison. Internal preview only." canonical="/logo-concepts" noindex>
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pt-16 md:pt-24 pb-8">
        <p className="eyebrow">INTERNAL PREVIEW · NOT INDEXED</p>
        <h1 className="mt-6 font-serif-display text-slate-ink" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
          Logo concept comparison
        </h1>
        <p className="mt-6 max-w-[680px] text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          Sixteen logo directions on the blue / navy / gold palette. Each shown on light, dark, and at favicon size. Concept 1 is currently live. Pick a different one (or a hybrid) and we'll swap it in.
        </p>
        <p className="mt-4 text-[14px] italic text-[hsl(var(--slate-500))]">
          Wordmark typography uses the system fallback here because the SVGs load as <code>&lt;img&gt;</code>. Final implementation inlines the SVG so Montserrat renders. Evaluate layout / icon / color, not letterforms.
        </p>
      </div>
    </section>

    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pb-16 md:pb-32 space-y-10">
        {concepts.map((c) => (
          <article
            key={c.id}
            className={`rounded-2xl p-6 md:p-9 ${c.live ? "border-2 border-brand-gold bg-brand-gold/[0.04]" : "border border-[hsl(var(--slate-200))]"}`}
          >
            <div className="flex flex-wrap items-baseline gap-3">
              <p className={c.live ? "eyebrow-gold" : "eyebrow-blue"}>{c.badge}</p>
              <h2 className="font-serif-display text-slate-ink text-[22px] md:text-[26px]">{c.name}</h2>
            </div>
            <p className="mt-3 max-w-[680px] text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">{c.why}</p>
            <div className="mt-7 grid md:grid-cols-3 gap-4">
              <Tile src={c.src} label={`${c.name} light`} />
              <Tile src={c.src} label={`${c.name} dark`} dark />
              <div className="flex items-center justify-center gap-3 rounded-xl bg-[hsl(var(--slate-200))] py-7 px-6">
                <Favicon src={c.src} />
                <Favicon src={c.src} dark />
                <span className="text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--slate-500))]">favicon</span>
              </div>
            </div>
          </article>
        ))}

        <div className="rounded-2xl bg-brand-navy p-8 md:p-12 text-white">
          <h2 className="font-serif-display text-[28px] md:text-[32px]">Pick one and we'll ship it.</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-white/80 max-w-[680px]">
            All concept SVGs live in <code>src/assets/logo-concepts/</code>. Tell me a number — or describe a hybrid (e.g., "Concept 11 mark + Concept 6 eyebrow stack") — and I'll make it the live logo + favicon.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default LogoConcepts;
