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

const ink = (d: boolean) => (d ? "#FFFFFF" : NAVY);
const blu = (d: boolean) => (d ? BLUE_LIGHT : BLUE);

type Concept = { id: string; name: string; note: string; render: (dark: boolean) => ReactNode; tall?: boolean };

// ── SECTION 0 · Meaning-aligned directions ───────────────────────────────────
// Each mark embodies a specific thing United to Thrive stands for.
const meaning: Concept[] = [
  {
    id: "M1",
    name: "United → Thrive — two forms become one",
    note: "A 'U' (an open vessel — united, gathering) with a 'T' rising out of it (thrive). One reads into the other: united, then thriving. The literal name as a mark. U in blue, T in navy, gold pivot dot.",
    render: (d) => (
      <svg viewBox="0 0 250 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <g transform="translate(2, 4)">
          {/* U — open bowl */}
          <path d="M 4 2 V 22 a 14 14 0 0 0 28 0 V 2" fill="none" stroke={blu(d)} strokeWidth="7" strokeLinecap="round" />
          {/* T — rising from the bowl */}
          <rect x="6" y="6" width="28" height="6.5" rx="2" fill={ink(d)} />
          <rect x="16.75" y="6" width="6.5" height="26" rx="2" fill={ink(d)} />
          <circle cx="20" cy="38" r="3.5" fill={GOLD} />
        </g>
        <text x="56" y="42" fontFamily={FONT} fontWeight={800} fontSize={44} letterSpacing="-1.5" fill={ink(d)}>thrive</text>
      </svg>
    ),
  },
  {
    id: "M2",
    name: "Convergence — the many become one, then rise",
    note: "Several lines (the programs, the people, the chapters) start spread apart and converge to a single point — then continue as one bold stroke lifting upward. 'We unite them all,' and the united thing thrives. Navy lines, gold rising stroke.",
    render: (d) => (
      <svg viewBox="0 0 250 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <g transform="translate(2, 4)" fill="none" strokeWidth="3" strokeLinecap="round">
          <path d="M 2 4 L 26 24" stroke={ink(d)} />
          <path d="M 2 24 L 26 24" stroke={blu(d)} />
          <path d="M 2 44 L 26 24" stroke={ink(d)} />
          <path d="M 26 24 L 42 4" stroke={GOLD} strokeWidth="5" />
          <path d="M 42 4 L 36 2 L 36 9 Z" fill={GOLD} stroke="none" transform="rotate(-30 42 4)" />
        </g>
        <text x="56" y="42" fontFamily={FONT} fontWeight={800} fontSize={44} letterSpacing="-1.5" fill={ink(d)}>thrive</text>
      </svg>
    ),
  },
  {
    id: "M3",
    name: "Family at the hub — everyone orbits the family",
    note: "A gold heart-dot at the center; navy/blue petals radiating out (the businesses, leaders, partners that serve them). 'Famous for families' rendered literally — families at the center, the whole network revolving around them.",
    render: (d) => (
      <svg viewBox="0 0 250 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <g transform="translate(24, 28)">
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <ellipse key={deg} cx="0" cy="-13" rx="4.5" ry="11" fill={i % 2 === 0 ? blu(d) : ink(d)} transform={`rotate(${deg})`} />
          ))}
          <circle cx="0" cy="0" r="7" fill={GOLD} />
        </g>
        <text x="56" y="42" fontFamily={FONT} fontWeight={800} fontSize={44} letterSpacing="-1.5" fill={ink(d)}>thrive</text>
      </svg>
    ),
  },
  {
    id: "M4",
    name: "The ascending chain — 'the chain is the point'",
    note: "Interlocking links climbing left-to-right, each a step up — and a colour step too: navy → blue → gold. The referral chain that pays everyone, the relationships that compound, the network rising. The single most literal expression of the WER1 idea.",
    render: (d) => (
      <svg viewBox="0 0 250 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <g fill="none" strokeWidth="4.5" strokeLinecap="round">
          <ellipse cx="14" cy="40" rx="10" ry="7" stroke={ink(d)} transform="rotate(-30 14 40)" />
          <ellipse cx="26" cy="28" rx="10" ry="7" stroke={blu(d)} transform="rotate(-30 26 28)" />
          <ellipse cx="38" cy="16" rx="10" ry="7" stroke={GOLD} transform="rotate(-30 38 16)" />
        </g>
        <text x="58" y="42" fontFamily={FONT} fontWeight={800} fontSize={44} letterSpacing="-1.5" fill={ink(d)}>thrive</text>
      </svg>
    ),
  },
  {
    id: "M5",
    name: "Roots & sprout — thriving above, network below",
    note: "Above a horizon line: a two-leaf sprout (visible thriving). Below it: a small web of connected nodes (the partnership network that feeds the growth). The whole philosophy in one mark — what you see growing is built on relationships you don't.",
    tall: true,
    render: (d) => (
      <svg viewBox="0 0 250 72" className="h-12 md:h-14 w-auto" aria-label="thrive">
        <g transform="translate(20, 4)">
          {/* sprout above */}
          <path d="M 0 30 V 8" stroke={blu(d)} strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M 0 14 q -11 -3 -13 -13 q 11 0 13 13" fill={GOLD} />
          <path d="M 0 18 q 11 -3 13 -13 q -11 0 -13 13" fill={blu(d)} />
          {/* horizon line */}
          <line x1="-18" y1="32" x2="18" y2="32" stroke={d ? "rgba(255,255,255,0.4)" : "#CBD5E1"} strokeWidth="1.5" />
          {/* root network below */}
          <g stroke={ink(d)} strokeWidth="1.5" fill={ink(d)}>
            <line x1="0" y1="32" x2="-12" y2="46" />
            <line x1="0" y1="32" x2="11" y2="44" />
            <line x1="-12" y1="46" x2="2" y2="56" />
            <line x1="11" y1="44" x2="2" y2="56" />
            <circle cx="-12" cy="46" r="3" />
            <circle cx="11" cy="44" r="3" />
            <circle cx="2" cy="56" r="3" />
          </g>
        </g>
        <text x="56" y="48" fontFamily={FONT} fontWeight={800} fontSize={44} letterSpacing="-1.5" fill={ink(d)}>thrive</text>
      </svg>
    ),
  },
  {
    id: "M6",
    name: "Trust → abundance — the gradient is the message",
    note: "A simple rising arc (or half-sun on a horizon) filled navy → blue → gold. Brandon's exact framing — blue is trust, gold is wealth — made into the mark itself: you move from trust to abundance. Optimistic, clean, scales to anything.",
    render: (d) => (
      <svg viewBox="0 0 250 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <defs>
          <linearGradient id={`m6-${d ? "d" : "l"}`} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor={ink(d)} />
            <stop offset="0.55" stopColor={blu(d)} />
            <stop offset="1" stopColor={GOLD} />
          </linearGradient>
        </defs>
        <g transform="translate(4, 0)">
          <path d="M 2 44 A 20 20 0 0 1 42 44" fill="none" stroke={`url(#m6-${d ? "d" : "l"})`} strokeWidth="6" strokeLinecap="round" />
          {[8, 22, 36].map((x, i) => (
            <line key={x} x1={x} y1={44 - Math.sqrt(Math.max(0, 400 - (x - 22) ** 2))} x2={x} y2="48" stroke={i === 2 ? GOLD : blu(d)} strokeWidth="2.5" strokeLinecap="round" />
          ))}
        </g>
        <text x="58" y="42" fontFamily={FONT} fontWeight={800} fontSize={44} letterSpacing="-1.5" fill={ink(d)}>thrive</text>
      </svg>
    ),
  },
  {
    id: "M7",
    name: "Interlocked rings — the bond, made permanent",
    note: "Two interlocked rings — the business and the family — with a small third ring (the leader who connects them). Unity, partnership, permanence; the link that doesn't come apart. Navy + blue rings, gold link-point.",
    render: (d) => (
      <svg viewBox="0 0 250 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <g transform="translate(4, 6)" fill="none" strokeWidth="4.5">
          <circle cx="16" cy="22" r="13" stroke={ink(d)} />
          <circle cx="32" cy="22" r="13" stroke={blu(d)} />
          <circle cx="24" cy="22" r="6" stroke={GOLD} strokeWidth="3.5" />
        </g>
        <text x="58" y="42" fontFamily={FONT} fontWeight={800} fontSize={44} letterSpacing="-1.5" fill={ink(d)}>thrive</text>
      </svg>
    ),
  },
  {
    id: "M8",
    name: "The home + the growth",
    note: "A clean roofline (a chevron, a home) with an upward shoot rising through the peak. 'Strong communities start with strong families' — the home is the foundation; thriving grows out of it. Navy roof, gold shoot.",
    render: (d) => (
      <svg viewBox="0 0 250 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <g transform="translate(4, 4)">
          <path d="M 2 40 L 24 14 L 46 40" fill="none" stroke={ink(d)} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 24 24 V 4 M 24 12 L 18 6 M 24 12 L 30 6" fill="none" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
        </g>
        <text x="60" y="42" fontFamily={FONT} fontWeight={800} fontSize={44} letterSpacing="-1.5" fill={ink(d)}>thrive</text>
      </svg>
    ),
  },
  {
    id: "M9",
    name: "The table — united at it, thriving from it",
    note: "A 'T' whose crossbar is a long meeting table with three figures seated at it (the mastermind, the alliance, the community), the stem its foundation. Everything good here happens at a table; this puts the table in the mark. People dots alternate blue/gold.",
    render: (d) => (
      <svg viewBox="0 0 250 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <g transform="translate(4, 4)">
          <rect x="2" y="20" width="44" height="6" rx="3" fill={ink(d)} />
          <rect x="20" y="20" width="6" height="22" rx="3" fill={ink(d)} />
          {[8, 23, 38].map((x, i) => <circle key={x} cx={x} cy="13" r="4.5" fill={i === 1 ? GOLD : blu(d)} />)}
        </g>
        <text x="58" y="42" fontFamily={FONT} fontWeight={800} fontSize={44} letterSpacing="-1.5" fill={ink(d)}>thrive</text>
      </svg>
    ),
  },
  {
    id: "M10",
    name: "Growth rings — the network adds a ring every year",
    note: "Concentric arcs like tree-growth rings — innermost navy, then blue, the outermost (newest) gold. A tree thrives by adding rings; the network grows the same way, outward, year over year. Quiet, organic, premium.",
    render: (d) => (
      <svg viewBox="0 0 250 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <g transform="translate(28, 28)" fill="none" strokeLinecap="round">
          <circle cx="0" cy="0" r="5" fill={ink(d)} stroke="none" />
          <circle cx="0" cy="0" r="11" stroke={blu(d)} strokeWidth="2.5" />
          <circle cx="0" cy="0" r="18" stroke={blu(d)} strokeWidth="2.5" opacity="0.6" />
          <circle cx="0" cy="0" r="25" stroke={GOLD} strokeWidth="2.5" />
        </g>
        <text x="62" y="42" fontFamily={FONT} fontWeight={800} fontSize={44} letterSpacing="-1.5" fill={ink(d)}>thrive</text>
      </svg>
    ),
  },
];

// ── SECTION 1 · Creative directions (bigger swings) ──────────────────────────
const creative: Concept[] = [
  {
    id: "C1",
    name: "Arrow-i — the 'i' grows upward",
    note: "The 'i' in thrive is replaced by an upward arrow (its dot becomes the arrowhead). The word literally points to growth. Gold arrowhead, navy stem.",
    render: (d) => (
      <svg viewBox="0 0 250 60" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <text x="2" y="46" fontFamily={FONT} fontWeight={800} fontSize={46} letterSpacing="-1.5" fill={ink(d)}>thr</text>
        {/* arrow standing in for the 'i' */}
        <g transform="translate(108, 0)">
          <rect x="0" y="22" width="6" height="24" rx="3" fill={ink(d)} />
          <path d="M 3 6 L -5 18 L 11 18 Z" fill={GOLD} />
        </g>
        <text x="124" y="46" fontFamily={FONT} fontWeight={800} fontSize={46} letterSpacing="-1.5" fill={ink(d)}>ve</text>
      </svg>
    ),
  },
  {
    id: "C2",
    name: "Just the 't' — favicon-first identity",
    note: "Drop the wordmark entirely for the symbol: a single bold lowercase 't' with a gold crossbar. The whole brand collapses to one mark. Wordmark sits beneath in small caps when needed.",
    tall: true,
    render: (d) => (
      <svg viewBox="0 0 90 78" className="h-14 md:h-16 w-auto" aria-label="thrive">
        {/* big lowercase t */}
        <rect x="34" y="2" width="11" height="52" rx="3" fill={ink(d)} />
        <rect x="18" y="16" width="42" height="11" rx="3" fill={GOLD} />
        <path d="M 39.5 54 q 0 8 8 8 l 6 0" fill="none" stroke={ink(d)} strokeWidth="11" strokeLinecap="round" />
        {/* tiny wordmark */}
        <text x="45" y="74" textAnchor="middle" fontFamily={FONT} fontWeight={700} fontSize={11} letterSpacing="3" fill={d ? "rgba(255,255,255,0.7)" : "#64748B"}>THRIVE</text>
      </svg>
    ),
  },
  {
    id: "C3",
    name: "Rising word — the baseline thrives upward",
    note: "Heavy Montserrat, but each letter sits a notch higher than the last. The word physically climbs. Final letter gets a gold underline-tick.",
    render: (d) => (
      <svg viewBox="0 0 230 60" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <text fontFamily={FONT} fontWeight={800} fontSize={40} fill={ink(d)}>
          <tspan x="2" y="50">t</tspan>
          <tspan x="22" y="45">h</tspan>
          <tspan x="50" y="40">r</tspan>
          <tspan x="72" y="35">i</tspan>
          <tspan x="86" y="30">v</tspan>
          <tspan x="112" y="25">e</tspan>
        </text>
        <rect x="140" y="6" width="14" height="3.5" rx="1.75" fill={GOLD} transform="rotate(-18 140 6)" />
      </svg>
    ),
  },
  {
    id: "C4",
    name: "Word-of-mouth — thrive in a speech bubble",
    note: "The wordmark inside a rounded chat bubble with a tail. The whole identity says 'recommendation / referral / what people say' — which is literally the business model.",
    tall: true,
    render: (d) => (
      <svg viewBox="0 0 230 90" className="h-14 md:h-16 w-auto" aria-label="thrive">
        <path d="M 6 6 h 200 a 14 14 0 0 1 14 14 v 34 a 14 14 0 0 1 -14 14 h -150 l -22 18 v -18 h -28 a 14 14 0 0 1 -14 -14 v -34 a 14 14 0 0 1 14 -14 z"
          fill={d ? "#FFFFFF" : BLUE} />
        <text x="113" y="48" textAnchor="middle" fontFamily={FONT} fontWeight={800} fontSize={36} letterSpacing="-1.2" fill={d ? BLUE : "#FFFFFF"}>thrive</text>
        <circle cx="200" cy="14" r="4" fill={GOLD} />
      </svg>
    ),
  },
  {
    id: "C5",
    name: "Honeycomb — a hex cell mark + wordmark",
    note: "A navy hexagon (a building block, a network cell) with a gold dot inside, leading the wordmark. Implies structure, ecosystem, the network you belong to.",
    render: (d) => (
      <svg viewBox="0 0 250 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <polygon points="22,4 38,14 38,34 22,44 6,34 6,14" fill={ink(d)} />
        <circle cx="22" cy="24" r="6" fill={GOLD} />
        <text x="52" y="42" fontFamily={FONT} fontWeight={800} fontSize={44} letterSpacing="-1.5" fill={ink(d)}>thrive</text>
      </svg>
    ),
  },
  {
    id: "C6",
    name: "The orbit — a family at the center",
    note: "The wordmark with a small gold dot orbiting on a thin arc above it. The dot is the family; the word is everything that revolves around them. Subtle, distinctive.",
    render: (d) => (
      <svg viewBox="0 0 230 60" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <path d="M 30 16 A 95 30 0 0 1 200 16" fill="none" stroke={d ? "rgba(255,255,255,0.4)" : "#CBD5E1"} strokeWidth="1.5" />
        <circle cx="172" cy="8" r="5.5" fill={GOLD} />
        <text x="20" y="50" fontFamily={FONT} fontWeight={800} fontSize={42} letterSpacing="-1.5" fill={ink(d)}>thrive</text>
      </svg>
    ),
  },
  {
    id: "C7",
    name: "Negative-space T — the mark is the void",
    note: "A navy rounded square with a 'T' cut out of it — the letter exists only as empty space. Modern, confident, very strong as an app icon. Wordmark alongside.",
    render: (d) => (
      <svg viewBox="0 0 250 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <defs>
          <mask id={`tmask-${d ? "d" : "l"}`}>
            <rect x="0" y="0" width="46" height="46" fill="#fff" />
            <rect x="11" y="11" width="24" height="6.5" fill="#000" />
            <rect x="19.75" y="11" width="6.5" height="24" fill="#000" />
          </mask>
        </defs>
        <rect x="2" y="5" width="46" height="46" rx="11" fill={ink(d)} mask={`url(#tmask-${d ? "d" : "l"})`} />
        <circle cx="42" cy="11" r="4" fill={GOLD} />
        <text x="60" y="42" fontFamily={FONT} fontWeight={800} fontSize={44} letterSpacing="-1.5" fill={ink(d)}>thrive</text>
      </svg>
    ),
  },
  {
    id: "C8",
    name: "Stacked block — TH / RI / VE as a monogram",
    note: "The word broken into three rows of ultra-bold caps, packed into a near-square. Reads as a monogram, works at any size, feels architectural and permanent.",
    tall: true,
    render: (d) => (
      <svg viewBox="0 0 120 96" className="h-16 md:h-20 w-auto" aria-label="thrive">
        <text x="2" y="28" fontFamily={FONT} fontWeight={800} fontSize={32} letterSpacing="-1" fill={ink(d)}>TH</text>
        <text x="2" y="60" fontFamily={FONT} fontWeight={800} fontSize={32} letterSpacing="-1" fill={blu(d)}>RI</text>
        <text x="2" y="92" fontFamily={FONT} fontWeight={800} fontSize={32} letterSpacing="-1" fill={ink(d)}>VE</text>
        <rect x="74" y="80" width="42" height="12" rx="3" fill={GOLD} />
      </svg>
    ),
  },
  {
    id: "C9",
    name: "The thread — one line ties the letters together",
    note: "The wordmark with a single thin line weaving over and under the letters — the network thread that connects everyone. Gold line, navy word.",
    render: (d) => (
      <svg viewBox="0 0 220 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <path d="M 0 38 Q 30 24 60 38 T 120 38 T 180 38 Q 200 30 220 38" fill="none" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />
        <text x="2" y="44" fontFamily={FONT} fontWeight={800} fontSize={42} letterSpacing="-1.5" fill={ink(d)}>thrive</text>
      </svg>
    ),
  },
  {
    id: "C10",
    name: "Plus mark — '+thrive' (more, wellness, growth)",
    note: "A bold blue equal-armed plus sign leading the wordmark. Reads as 'plus / more / add value' and nods to the wellness side of the business. Plus works alone as a favicon.",
    render: (d) => (
      <svg viewBox="0 0 248 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <g transform="translate(4, 6)">
          <rect x="13" y="0" width="12" height="38" rx="3" fill={blu(d)} />
          <rect x="0" y="13" width="38" height="12" rx="3" fill={blu(d)} />
          <circle cx="34" cy="4" r="3.5" fill={GOLD} />
        </g>
        <text x="54" y="42" fontFamily={FONT} fontWeight={800} fontSize={44} letterSpacing="-1.5" fill={ink(d)}>thrive</text>
      </svg>
    ),
  },
  {
    id: "C11",
    name: "Seedling — life growing out of the word",
    note: "A small two-leaf sprout grows out of the end of 'thrive'. The most literal take: thrive = growth, life, flourishing. Warm, organic, family-friendly.",
    render: (d) => (
      <svg viewBox="0 0 240 60" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <text x="2" y="46" fontFamily={FONT} fontWeight={800} fontSize={44} letterSpacing="-1.5" fill={ink(d)}>thrive</text>
        <g transform="translate(178, 4)">
          <path d="M 4 30 V 8" stroke={blu(d)} strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M 4 14 q -12 -4 -14 -14 q 12 0 14 14" fill={GOLD} />
          <path d="M 4 18 q 12 -4 14 -14 q -12 0 -14 14" fill={blu(d)} />
        </g>
      </svg>
    ),
  },
  {
    id: "C12",
    name: "Pixel — the digital-platform take",
    note: "The wordmark built from a chunky pixel grid. Signals 'this is a tech platform / app', not just a marketing brand. Most polarizing of the set — you'll love it or hate it.",
    render: (d) => {
      // crude pixel rendering of "thrive" using rects on a grid
      const px = 6;
      const cells: [number, number][] = [];
      // each tuple is a 5x5-ish glyph block at column offset; we cheat with a simple bitmap
      const grid = [
        "  X      X X X   X       X X X     X       X X X X X ",
      ];
      // Too complex to hand-bitmap nicely — instead approximate with a "pixel-block" wordmark
      void cells; void grid; void px;
      return (
        <svg viewBox="0 0 230 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
          <text x="2" y="42" fontFamily={"'Courier New', monospace"} fontWeight={700} fontSize={40} letterSpacing="2" fill={ink(d)}>thrive</text>
          {/* pixel-grid overlay accent */}
          <g fill={GOLD}>
            <rect x="2" y="46" width="5" height="5" />
            <rect x="9" y="46" width="5" height="5" />
            <rect x="16" y="46" width="5" height="5" />
          </g>
        </svg>
      );
    },
  },
  {
    id: "C13",
    name: "Infinity loop — compounding, recurring",
    note: "An infinity / loop mark before the wordmark — the referral flywheel, recurring revenue, relationships that keep paying. Blue loop, gold pinch-point.",
    render: (d) => (
      <svg viewBox="0 0 245 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <g transform="translate(2, 8)" fill="none" strokeWidth="5" strokeLinecap="round">
          <path d="M 10 20 C 10 8 24 8 24 20 C 24 32 38 32 38 20 C 38 8 24 8 24 20 C 24 32 10 32 10 20 Z" stroke={blu(d)} />
        </g>
        <circle cx="26" cy="28" r="3.5" fill={GOLD} />
        <text x="52" y="42" fontFamily={FONT} fontWeight={800} fontSize={44} letterSpacing="-1.5" fill={ink(d)}>thrive</text>
      </svg>
    ),
  },
  {
    id: "C14",
    name: "Underline-arrow — the line turns into direction",
    note: "Heavy wordmark with a gold underline that lifts into an arrowhead at the end. Stability (the line) plus momentum (the arrow). Reads as 'forward, up, and to the right.'",
    render: (d) => (
      <svg viewBox="0 0 235 64" className="h-11 md:h-13 w-auto" aria-label="thrive">
        <text x="2" y="42" fontFamily={FONT} fontWeight={800} fontSize={44} letterSpacing="-1.5" fill={ink(d)}>thrive</text>
        <path d="M 4 54 L 168 54 L 162 48 M 168 54 L 162 60" fill="none" stroke={GOLD} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

// ── SECTION 2 · Montserrat typography treatments (from earlier batch) ────────
const wordmarks: Concept[] = [
  { id: "T1", name: "Montserrat ExtraBold · lowercase · tight", note: "The workhorse. Heavy, negative tracking, navy.",
    render: (d) => (<svg viewBox="0 0 210 56" className="h-10 md:h-12 w-auto"><text x="2" y="42" fontFamily={FONT} fontWeight={800} fontSize={46} letterSpacing="-2" fill={ink(d)}>thrive</text></svg>) },
  { id: "T2", name: "Montserrat ExtraBold · brand blue", note: "Same form, all brand blue.",
    render: (d) => (<svg viewBox="0 0 210 56" className="h-10 md:h-12 w-auto"><text x="2" y="42" fontFamily={FONT} fontWeight={800} fontSize={46} letterSpacing="-2" fill={blu(d)}>thrive</text></svg>) },
  { id: "T4", name: "Montserrat Medium · UPPERCASE · wide tracking", note: "Spaced caps, lighter weight — refined / editorial.",
    render: (d) => (<svg viewBox="0 0 330 56" className="h-7 md:h-9 w-auto"><text x="2" y="40" fontFamily={FONT} fontWeight={600} fontSize={34} letterSpacing="14" fill={ink(d)}>THRIVE</text></svg>) },
  { id: "T5", name: "Montserrat ExtraBold · two-tone T", note: "Capital T in blue, rest navy.",
    render: (d) => (<svg viewBox="0 0 220 56" className="h-10 md:h-12 w-auto"><text x="2" y="42" fontFamily={FONT} fontWeight={800} fontSize={46} letterSpacing="-1.5"><tspan fill={blu(d)}>T</tspan><tspan fill={ink(d)}>hrive</tspan></text></svg>) },
  { id: "T7", name: "Montserrat ExtraBold Italic · gradient", note: "Forward-leaning, navy→blue gradient.",
    render: (d) => (<svg viewBox="0 0 230 56" className="h-10 md:h-12 w-auto"><defs><linearGradient id={`tg-${d ? "d" : "l"}`} x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor={d ? "#fff" : NAVY} /><stop offset="1" stopColor={d ? BLUE_LIGHT : BLUE} /></linearGradient></defs><text x="2" y="42" fontFamily={FONT} fontWeight={800} fontStyle="italic" fontSize={46} letterSpacing="-1.8" fill={`url(#tg-${d ? "d" : "l"})`}>thrive</text></svg>) },
  { id: "T8", name: "Stacked · 'UNITED TO' + thrive", note: "Eyebrow over wordmark; resolves naming ambiguity.", tall: true,
    render: (d) => (<svg viewBox="0 0 215 72" className="h-12 md:h-14 w-auto"><text x="3" y="16" fontFamily={FONT} fontWeight={600} fontSize={12} letterSpacing="5" fill={d ? "rgba(255,255,255,0.65)" : "#64748B"}>UNITED TO</text><text x="2" y="60" fontFamily={FONT} fontWeight={800} fontSize={46} letterSpacing="-2" fill={ink(d)}>thrive</text></svg>) },
  { id: "T12", name: "T-in-square mark + Montserrat thrive", note: "App-icon mark + clean wordmark — a real logo system.",
    render: (d) => (<svg viewBox="0 0 250 56" className="h-10 md:h-12 w-auto"><rect x="2" y="6" width="44" height="44" rx="11" fill={d ? "#fff" : NAVY} /><rect x="13" y="17" width="22" height="6" rx="1.5" fill={d ? NAVY : "#fff"} /><rect x="21" y="17" width="6" height="22" rx="1.5" fill={d ? NAVY : "#fff"} /><circle cx="40" cy="12" r="4" fill={GOLD} /><text x="58" y="42" fontFamily={FONT} fontWeight={800} fontSize={46} letterSpacing="-2" fill={ink(d)}>thrive</text></svg>) },
];

// ── SECTION 3 · Earlier icon concepts (reference) ────────────────────────────
type ImgConcept = { id: string; src: string; name: string; live?: boolean };
const imgConcepts: ImgConcept[] = [
  { id: "current", src: currentLogo, name: "Current (live)", live: true },
  { id: "1", src: concept1, name: "Color swap" }, { id: "2", src: concept2, name: "Three rings" },
  { id: "3", src: concept3, name: "T monogram" }, { id: "4", src: concept4, name: "Wordmark + period" },
  { id: "5", src: concept5, name: "Wordmark + flourish" }, { id: "6", src: concept6, name: "Stacked eyebrow" },
  { id: "7", src: concept7, name: "Ascending bars" }, { id: "8", src: concept8, name: "Network nodes" },
  { id: "9", src: concept9, name: "Blue wordmark" }, { id: "10", src: concept10, name: "Momentum loop" },
  { id: "11", src: concept11, name: "T in square" }, { id: "12", src: concept12, name: "Interlocking arcs" },
  { id: "13", src: concept13, name: "Upward chevron" }, { id: "14", src: concept14, name: "Concentric ripple" },
  { id: "15", src: concept15, name: "Diamond mark" }, { id: "16", src: concept16, name: "Pill with t" },
];

const Tile = ({ children, dark = false }: { children: ReactNode; dark?: boolean }) => (
  <div className={`flex items-center justify-center px-6 py-8 rounded-xl ${dark ? "bg-brand-navy" : "bg-white border border-[hsl(var(--slate-200))]"}`}>
    {children}
  </div>
);

const ConceptCard = ({ c }: { c: Concept }) => (
  <article className="border border-[hsl(var(--slate-200))] rounded-2xl p-6 md:p-9">
    <div className="flex flex-wrap items-baseline gap-3">
      <p className="eyebrow-blue">{c.id}</p>
      <h3 className="font-serif-display text-slate-ink text-[20px] md:text-[24px]">{c.name}</h3>
    </div>
    <p className="mt-3 max-w-[700px] text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">{c.note}</p>
    <div className="mt-7 grid md:grid-cols-2 gap-4">
      <Tile>{c.render(false)}</Tile>
      <Tile dark>{c.render(true)}</Tile>
    </div>
  </article>
);

const LogoConcepts = () => (
  <Layout title="Logo Concepts" description="Logo concept comparison. Internal preview only." canonical="/logo-concepts" noindex>
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pt-16 md:pt-24 pb-8">
        <p className="eyebrow">INTERNAL PREVIEW · NOT INDEXED</p>
        <h1 className="mt-6 font-serif-display text-slate-ink" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
          Logo concepts — what United to Thrive stands for
        </h1>
        <p className="mt-6 max-w-[760px] text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          Section 0 (below) is the focus: 10 marks, each one built around a specific thing the brand stands for — partnerships over advertising, families at the center, "the chain is the point," uniting separate programs under one roof, trust → abundance. Sections 1–3 keep the earlier explorations for reference.
        </p>
      </div>
    </section>

    {/* ── SECTION 0 · Meaning-aligned ─────────────────────────────────────── */}
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pb-12">
        <div className="border-b-2 border-brand-gold pb-4">
          <p className="eyebrow-gold">SECTION 0 · WHAT THE BRAND STANDS FOR</p>
          <h2 className="mt-2 font-serif-display text-slate-ink text-[26px] md:text-[32px]">Meaning-aligned marks</h2>
          <p className="mt-3 max-w-[680px] text-[15px] text-[hsl(var(--slate-700))]">Each note explains the idea the mark carries — so you can pick on meaning, not just looks.</p>
        </div>
        <div className="mt-8 space-y-8">
          {meaning.map((c) => <ConceptCard key={c.id} c={c} />)}
        </div>
      </div>
    </section>

    <section className="surface-muted">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-12 md:py-20">
        <div className="border-b border-[hsl(var(--slate-200))] pb-4">
          <p className="eyebrow-blue">SECTION 1 · CREATIVE DIRECTIONS</p>
          <h2 className="mt-2 font-serif-display text-slate-ink text-[24px] md:text-[28px]">Bigger swings (reference)</h2>
        </div>
        <div className="mt-8 space-y-8">
          {creative.map((c) => <ConceptCard key={c.id} c={c} />)}
        </div>
      </div>
    </section>

    <section className="surface-muted">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-12 md:py-20">
        <div className="border-b border-[hsl(var(--slate-200))] pb-4">
          <p className="eyebrow-blue">SECTION 2 · CLEAN MONTSERRAT TREATMENTS</p>
          <h2 className="mt-2 font-serif-display text-slate-ink text-[24px] md:text-[28px]">Typography only</h2>
        </div>
        <div className="mt-8 space-y-8">
          {wordmarks.map((c) => <ConceptCard key={c.id} c={c} />)}
        </div>
      </div>
    </section>

    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-12 md:py-20">
        <div className="border-b border-[hsl(var(--slate-200))] pb-4">
          <p className="eyebrow">SECTION 3 · EARLIER ICON CONCEPTS (REFERENCE)</p>
          <h2 className="mt-2 font-serif-display text-slate-ink text-[24px] md:text-[28px]">Icon set</h2>
          <p className="mt-3 text-[13px] italic text-[hsl(var(--slate-500))]">Loaded as <code>&lt;img&gt;</code>, so the wordmark type here is a system fallback — judge the icons.</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {imgConcepts.map((c) => (
            <article key={c.id} className={`rounded-2xl p-4 ${c.live ? "border-2 border-brand-gold bg-brand-gold/[0.04]" : "bg-white border border-[hsl(var(--slate-200))]"}`}>
              <div className="flex flex-wrap items-baseline gap-2">
                {c.live && <span className="eyebrow-gold text-[10px]">LIVE</span>}
                <h3 className="font-serif-display text-slate-ink text-[14px]">{c.name}</h3>
              </div>
              <div className="mt-3 flex items-center justify-center px-3 py-4 rounded-lg bg-white border border-[hsl(var(--slate-200))]"><img src={c.src} alt={c.name} className="h-7 w-auto" /></div>
              <div className="mt-2 flex items-center justify-center px-3 py-4 rounded-lg bg-brand-navy"><img src={c.src} alt={`${c.name} dark`} className="h-7 w-auto" /></div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pb-16 md:pb-32">
        <div className="rounded-2xl bg-brand-navy p-8 md:p-12 text-white">
          <h2 className="font-serif-display text-[28px] md:text-[32px]">Point at one.</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-white/80 max-w-[700px]">
            Give me a code — "C7", "T5" — or a hybrid: "C7 negative-space mark + T2 blue wordmark", "C6 orbit but the dot is blue", "C8 stack in two colors". When you pick, I convert the Montserrat to outlined paths and ship it as the live logo + favicon.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default LogoConcepts;
