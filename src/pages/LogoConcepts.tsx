import { ReactNode } from "react";
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

const NAVY = "#0F172A";
const BLUE = "#2563EB";
const BLUE_LIGHT = "#7CA8F8";
const GOLD = "#FBBF24";
const FONT = "'Montserrat', system-ui, -apple-system, sans-serif";

// Each wordmark concept renders an inline SVG so Montserrat actually renders.
type WM = {
  id: string;
  name: string;
  note: string;
  render: (dark: boolean) => ReactNode;
};

const ink = (dark: boolean) => (dark ? "#FFFFFF" : NAVY);
const blueAcc = (dark: boolean) => (dark ? BLUE_LIGHT : BLUE);

const wordmarks: WM[] = [
  {
    id: "T1",
    name: "Montserrat ExtraBold · lowercase · tight",
    note: "The workhorse. Heavy weight, negative tracking, single navy color. Confident and modern.",
    render: (dark) => (
      <svg viewBox="0 0 210 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <text x="2" y="42" fontFamily={FONT} fontWeight={800} fontSize={46} letterSpacing="-2" fill={ink(dark)}>thrive</text>
      </svg>
    ),
  },
  {
    id: "T2",
    name: "Montserrat ExtraBold · lowercase · brand blue",
    note: "Same form, rendered entirely in brand blue. Maximum brand-color presence.",
    render: (dark) => (
      <svg viewBox="0 0 210 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <text x="2" y="42" fontFamily={FONT} fontWeight={800} fontSize={46} letterSpacing="-2" fill={dark ? BLUE_LIGHT : BLUE}>thrive</text>
      </svg>
    ),
  },
  {
    id: "T3",
    name: "Montserrat ExtraBold · UPPERCASE",
    note: "All caps, heavy. Reads as a strong, established brand. Slightly more corporate.",
    render: (dark) => (
      <svg viewBox="0 0 270 56" className="h-9 md:h-11 w-auto" aria-label="THRIVE">
        <text x="2" y="42" fontFamily={FONT} fontWeight={800} fontSize={42} letterSpacing="0" fill={ink(dark)}>THRIVE</text>
      </svg>
    ),
  },
  {
    id: "T4",
    name: "Montserrat Medium · UPPERCASE · wide tracking",
    note: "Spaced-out caps at a lighter weight. Refined, editorial, almost luxury. Very different feel from the rest.",
    render: (dark) => (
      <svg viewBox="0 0 330 56" className="h-7 md:h-9 w-auto" aria-label="THRIVE">
        <text x="2" y="40" fontFamily={FONT} fontWeight={600} fontSize={34} letterSpacing="14" fill={ink(dark)}>THRIVE</text>
      </svg>
    ),
  },
  {
    id: "T5",
    name: "Montserrat ExtraBold · Title Case · two-tone T",
    note: "Capital 'T' in brand blue, 'hrive' in navy. Subtle but distinctive — the T does double duty as a mini-mark.",
    render: (dark) => (
      <svg viewBox="0 0 220 56" className="h-10 md:h-12 w-auto" aria-label="Thrive">
        <text x="2" y="42" fontFamily={FONT} fontWeight={800} fontSize={46} letterSpacing="-1.5">
          <tspan fill={blueAcc(dark)}>T</tspan><tspan fill={ink(dark)}>hrive</tspan>
        </text>
      </svg>
    ),
  },
  {
    id: "T6",
    name: "Montserrat Bold · lowercase + gold period",
    note: "Cleaner weight, lowercase, with a small gold period. Editorial / publication feel. The dot signals 'full stop — this is the name.'",
    render: (dark) => (
      <svg viewBox="0 0 215 56" className="h-10 md:h-12 w-auto" aria-label="thrive.">
        <text x="2" y="42" fontFamily={FONT} fontWeight={700} fontSize={44} letterSpacing="-1.2" fill={ink(dark)}>thrive</text>
        <circle cx="178" cy="40" r="5" fill={GOLD} />
      </svg>
    ),
  },
  {
    id: "T7",
    name: "Montserrat ExtraBold Italic · gradient",
    note: "Forward-leaning italic with a navy→blue gradient fill. Energetic, momentum-y. The most 'startup' of the set.",
    render: (dark) => (
      <svg viewBox="0 0 230 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <defs>
          <linearGradient id={`wm-grad-${dark ? "d" : "l"}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor={dark ? "#FFFFFF" : NAVY} />
            <stop offset="1" stopColor={dark ? BLUE_LIGHT : BLUE} />
          </linearGradient>
        </defs>
        <text x="2" y="42" fontFamily={FONT} fontWeight={800} fontStyle="italic" fontSize={46} letterSpacing="-1.8" fill={`url(#wm-grad-${dark ? "d" : "l"})`}>thrive</text>
      </svg>
    ),
  },
  {
    id: "T8",
    name: "Stacked · 'UNITED TO' eyebrow + thrive",
    note: "Solves the Thrive-vs-United-to-Thrive ambiguity. Small caps eyebrow over the heavy wordmark. Taller — needs vertical room.",
    render: (dark) => (
      <svg viewBox="0 0 215 72" className="h-12 md:h-14 w-auto" aria-label="United to Thrive">
        <text x="3" y="16" fontFamily={FONT} fontWeight={600} fontSize={12} letterSpacing="5" fill={dark ? "rgba(255,255,255,0.65)" : "#64748B"}>UNITED TO</text>
        <text x="2" y="60" fontFamily={FONT} fontWeight={800} fontSize={46} letterSpacing="-2" fill={ink(dark)}>thrive</text>
      </svg>
    ),
  },
  {
    id: "T9",
    name: "thrive + gold underline",
    note: "Heavy wordmark with a short gold rule beneath it — visually rhymes with the .section-accent dividers used all over the site.",
    render: (dark) => (
      <svg viewBox="0 0 215 64" className="h-11 md:h-13 w-auto" aria-label="thrive">
        <text x="2" y="42" fontFamily={FONT} fontWeight={800} fontSize={46} letterSpacing="-2" fill={ink(dark)}>thrive</text>
        <rect x="3" y="50" width="64" height="3" rx="1.5" fill={GOLD} />
      </svg>
    ),
  },
  {
    id: "T10",
    name: "Triangle mark + thrive",
    note: "A small upward navy triangle (growth / play-button energy) leading the wordmark. The triangle works alone as a favicon.",
    render: (dark) => (
      <svg viewBox="0 0 250 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <path d="M 4 40 L 18 40 L 11 22 Z" fill={blueAcc(dark)} />
        <text x="32" y="42" fontFamily={FONT} fontWeight={800} fontSize={46} letterSpacing="-2" fill={ink(dark)}>thrive</text>
      </svg>
    ),
  },
  {
    id: "T11",
    name: "Gold dot mark + thrive",
    note: "A solid gold dot before the wordmark. Simple, warm, premium. The dot is the standalone symbol.",
    render: (dark) => (
      <svg viewBox="0 0 248 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <circle cx="14" cy="32" r="10" fill={GOLD} />
        <text x="34" y="42" fontFamily={FONT} fontWeight={800} fontSize={46} letterSpacing="-2" fill={ink(dark)}>thrive</text>
      </svg>
    ),
  },
  {
    id: "T12",
    name: "T-in-square mark + thrive (Montserrat)",
    note: "The Concept-11 app-icon mark (navy square, white T, gold dot) paired with a clean Montserrat wordmark. A real symbol + a real wordmark.",
    render: (dark) => (
      <svg viewBox="0 0 250 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <rect x="2" y="6" width="44" height="44" rx="11" fill={dark ? "#FFFFFF" : NAVY} />
        <rect x="13" y="17" width="22" height="6" rx="1.5" fill={dark ? NAVY : "#FFFFFF"} />
        <rect x="21" y="17" width="6" height="22" rx="1.5" fill={dark ? NAVY : "#FFFFFF"} />
        <circle cx="40" cy="12" r="4" fill={GOLD} />
        <text x="58" y="42" fontFamily={FONT} fontWeight={800} fontSize={46} letterSpacing="-2" fill={ink(dark)}>thrive</text>
      </svg>
    ),
  },
];

// ── Existing image-based concepts (kept for reference, secondary) ─────────────
type ImgConcept = { id: string; src: string; name: string; why: string; live?: boolean };
const imgConcepts: ImgConcept[] = [
  { id: "current", src: currentLogo, name: "Current (live)", why: "Concept 1 — starburst recolored navy → blue → gold. Currently shipping.", live: true },
  { id: "1", src: concept1, name: "Concept 1 — Color swap", why: "Original starburst, new gradient." },
  { id: "2", src: concept2, name: "Concept 2 — Three rings", why: "Venn-style overlapping circles." },
  { id: "3", src: concept3, name: "Concept 3 — T monogram", why: "Block-T + gold dot." },
  { id: "4", src: concept4, name: "Concept 4 — Wordmark + period", why: "Wordmark only, gold dot." },
  { id: "5", src: concept5, name: "Concept 5 — Wordmark + flourish", why: "Wordmark + gold bar." },
  { id: "6", src: concept6, name: "Concept 6 — Stacked eyebrow", why: "'UNITED TO' over wordmark." },
  { id: "7", src: concept7, name: "Concept 7 — Ascending bars", why: "Three rising bars." },
  { id: "8", src: concept8, name: "Concept 8 — Network nodes", why: "Connected dots/lines." },
  { id: "9", src: concept9, name: "Concept 9 — Blue wordmark", why: "Wordmark in brand blue." },
  { id: "10", src: concept10, name: "Concept 10 — Momentum loop", why: "Circular arrow." },
  { id: "11", src: concept11, name: "Concept 11 — T in square", why: "App-icon style." },
  { id: "12", src: concept12, name: "Concept 12 — Interlocking arcs", why: "Two C-curves." },
  { id: "13", src: concept13, name: "Concept 13 — Upward chevron", why: "Stacked chevrons." },
  { id: "14", src: concept14, name: "Concept 14 — Concentric ripple", why: "Waves of Pay as a mark." },
  { id: "15", src: concept15, name: "Concept 15 — Diamond mark", why: "Quartered rotated square." },
  { id: "16", src: concept16, name: "Concept 16 — Pill with 't'", why: "Blue pill, white t, gold dot." },
];

const Tile = ({ children, dark = false }: { children: ReactNode; dark?: boolean }) => (
  <div className={`flex items-center justify-center px-6 py-8 rounded-xl ${dark ? "bg-brand-navy" : "bg-white border border-[hsl(var(--slate-200))]"}`}>
    {children}
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
        <p className="mt-6 max-w-[700px] text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          New direction: drop the old custom letterforms, build the wordmark in <strong>Montserrat</strong> (the brand font). Section 1 below has twelve fresh Montserrat treatments — rendered with the real font, on light and navy. Section 2 keeps the earlier icon-driven concepts for reference.
        </p>
      </div>
    </section>

    {/* ── Section 1: new Montserrat wordmarks ─────────────────────────────── */}
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pb-12">
        <div className="border-b border-[hsl(var(--slate-200))] pb-4">
          <p className="eyebrow-blue">SECTION 1 · NEW MONTSERRAT WORDMARKS</p>
          <h2 className="mt-2 font-serif-display text-slate-ink text-[24px] md:text-[28px]">Fresh typography</h2>
        </div>
        <div className="mt-8 space-y-8">
          {wordmarks.map((w) => (
            <article key={w.id} className="border border-[hsl(var(--slate-200))] rounded-2xl p-6 md:p-9">
              <div className="flex flex-wrap items-baseline gap-3">
                <p className="eyebrow-gold">{w.id}</p>
                <h3 className="font-serif-display text-slate-ink text-[20px] md:text-[24px]">{w.name}</h3>
              </div>
              <p className="mt-3 max-w-[680px] text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">{w.note}</p>
              <div className="mt-7 grid md:grid-cols-2 gap-4">
                <Tile>{w.render(false)}</Tile>
                <Tile dark>{w.render(true)}</Tile>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* ── Section 2: earlier icon-driven concepts ─────────────────────────── */}
    <section className="surface-muted">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-12 md:py-20">
        <div className="border-b border-[hsl(var(--slate-200))] pb-4">
          <p className="eyebrow">SECTION 2 · EARLIER ICON CONCEPTS (REFERENCE)</p>
          <h2 className="mt-2 font-serif-display text-slate-ink text-[24px] md:text-[28px]">Icon-driven concepts</h2>
          <p className="mt-3 text-[14px] italic text-[hsl(var(--slate-500))]">
            These reuse the old wordmark letterforms (loaded as <code>&lt;img&gt;</code>, so the type renders in a system fallback). Use them to judge the <em>icons</em>; any icon here can be paired with a Section-1 wordmark.
          </p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {imgConcepts.map((c) => (
            <article key={c.id} className={`rounded-2xl p-5 ${c.live ? "border-2 border-brand-gold bg-brand-gold/[0.04]" : "bg-white border border-[hsl(var(--slate-200))]"}`}>
              <div className="flex flex-wrap items-baseline gap-2">
                {c.live && <span className="eyebrow-gold text-[11px]">LIVE</span>}
                <h3 className="font-serif-display text-slate-ink text-[16px]">{c.name}</h3>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-[hsl(var(--slate-500))]">{c.why}</p>
              <div className="mt-4 flex items-center justify-center px-4 py-5 rounded-lg bg-white border border-[hsl(var(--slate-200))]">
                <img src={c.src} alt={c.name} className="h-8 w-auto" />
              </div>
              <div className="mt-2 flex items-center justify-center px-4 py-5 rounded-lg bg-brand-navy">
                <img src={c.src} alt={`${c.name} dark`} className="h-8 w-auto" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-12 md:py-20">
        <div className="rounded-2xl bg-brand-navy p-8 md:p-12 text-white">
          <h2 className="font-serif-display text-[28px] md:text-[32px]">Pick a direction.</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-white/80 max-w-[700px]">
            Tell me a code (e.g. "T5" or "T12") — or a hybrid like "T12 mark with the T2 blue wordmark", or "T8 stack but in blue". When you pick one, I'll convert the Montserrat to outlined paths and make it the live logo + favicon so it renders identically everywhere.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default LogoConcepts;
