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
const BLUE = "#16294C";
const BLUE_LIGHT = "#7CA8F8";
const GOLD = "#FBBF24";
const FONT = "'Montserrat', system-ui, -apple-system, sans-serif";

const ink = (d: boolean) => (d ? "#FFFFFF" : NAVY);
const blu = (d: boolean) => (d ? BLUE_LIGHT : BLUE);

type Concept = { id: string; name: string; note: string; render: (dark: boolean) => ReactNode; tall?: boolean };

// Wordmark, always first / on the left. "thrive" ≈ 152px wide at 44px ExtraBold.
const WM = (d: boolean) => (
  <text x="2" y="42" fontFamily={FONT} fontWeight={800} fontSize={44} letterSpacing="-1.5" fill={ink(d)}>thrive</text>
);
// The wordmark is treated as a NODE in the network. A connecting spoke runs
// from the end of "thrive" to the hub, so word + mark read as one lockup.
const LINK_X = 152;       // x where the connecting spoke meets the wordmark
const LINK_Y = 30;        // y of that connection (optical centre of the word)
const HUB_X = 184;        // hub centre x - close to the word, with a short spoke between
const HUB_Y = 28;
const SPOKE = (d: boolean) => (d ? "rgba(255,255,255,0.45)" : "#C2CCD8");
const SPOKE_FAINT = (d: boolean) => (d ? "rgba(255,255,255,0.3)" : "#DDE3EA");
const ICON_X = 162; // legacy, kept for other sections that still reference it

// Five satellites on the right/top/bottom; the wordmark fills the sixth "slot".
const ringR = (cx: number, cy: number, r: number) =>
  [-60, -20, 25, 70, 115].map((deg) => {
    const a = (deg * Math.PI) / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as const;
  });
// Full six-satellite ring (for the variants that don't use the word as a node).
const ring6 = (cx: number, cy: number, r: number) =>
  [0, 60, 120, 180, 240, 300].map((deg) => {
    const a = ((deg - 90) * Math.PI) / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as const;
  });

// Connecting spoke from the wordmark to the hub.
const Link = ({ d, to = [HUB_X, HUB_Y], w = 1.5 }: { d: boolean; to?: readonly [number, number]; w?: number }) => (
  <line x1={LINK_X} y1={LINK_Y} x2={to[0]} y2={to[1]} stroke={SPOKE(d)} strokeWidth={w} />
);

// ════════════════════════════════════════════════════════════════════════════
// FINAL DIRECTION · hub-and-spoke symbol + Montserrat wordmark (a system)
// Built on a simple 26-unit square grid so the mark survives at favicon size.
// Gold centre = United to Thrive / the family at the middle.
// Six nodes = the six programs (all the same blue - equal members of the network).
// Navy spokes = the structure that connects them.
// ════════════════════════════════════════════════════════════════════════════

// Reusable mark. `tone`: "color" (navy spokes, blue nodes, gold hub),
// "mono" (single colour), "reversed" (for dark backgrounds).
// All sizes are fractions of `size` so the mark scales cleanly.
const ThriveMark = ({
  size = 26,
  tone = "color",
  spokeW = 2,
  nodeR = 2.7,
  hubR = 4.8,
  ringR = 8.6,
  weights = 6,
  rotate = 0,
  spokeGapOuter = 0,        // spoke stops this far (units) short of the node
  nodeStyle = "fill",       // "fill" | "ring"
  nodeStrokeW = 1.2,
  hubStyle = "fill",        // "fill" | "ring" | "halo"
  hubHaloR = 0,
}: {
  size?: number; tone?: "color" | "mono" | "reversed"; spokeW?: number;
  nodeR?: number; hubR?: number; ringR?: number; weights?: number; rotate?: number;
  spokeGapOuter?: number; nodeStyle?: "fill" | "ring"; nodeStrokeW?: number;
  hubStyle?: "fill" | "ring" | "halo"; hubHaloR?: number;
}) => {
  const c = size / 2;
  const pts = Array.from({ length: weights }, (_, i) => {
    const a = ((i * 360) / weights - 90 + rotate) * Math.PI / 180;
    return [c + ringR * Math.cos(a), c + ringR * Math.sin(a), a] as const;
  });
  const spoke = tone === "reversed" ? "rgba(255,255,255,0.85)" : tone === "mono" ? "currentColor" : NAVY;
  const node = tone === "reversed" ? "#FFFFFF" : tone === "mono" ? "currentColor" : BLUE;
  const hub = tone === "mono" ? "currentColor" : GOLD;
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} aria-label="thrive mark">
      {pts.map(([x, y, a], i) => {
        const outerR = ringR - (spokeGapOuter + (nodeStyle === "ring" ? 0 : 0));
        const ex = c + outerR * Math.cos(a), ey = c + outerR * Math.sin(a);
        return <line key={`s${i}`} x1={c} y1={c} x2={ex} y2={ey} stroke={spoke} strokeWidth={spokeW} strokeLinecap="round" />;
      })}
      {pts.map(([x, y], i) => nodeStyle === "ring"
        ? <circle key={`n${i}`} cx={x} cy={y} r={nodeR} fill="none" stroke={node} strokeWidth={nodeStrokeW} />
        : <circle key={`n${i}`} cx={x} cy={y} r={nodeR} fill={node} />)}
      {hubStyle === "halo" && <circle cx={c} cy={c} r={hubHaloR || hubR * 1.7} fill="none" stroke={hub} strokeWidth={Math.max(0.6, hubR * 0.18)} opacity="0.45" />}
      {hubStyle === "ring"
        ? <circle cx={c} cy={c} r={hubR} fill="none" stroke={hub} strokeWidth={Math.max(1, hubR * 0.42)} />
        : <circle cx={c} cy={c} r={hubR} fill={hub} />}
    </svg>
  );
};

// Convenience: a "light"-register mark at any size, all fractions tuned for delicacy.
const LightMark = ({ size = 88, tone = "color", ...over }: { size?: number; tone?: "color" | "mono" | "reversed" } & Partial<Parameters<typeof ThriveMark>[0]>) => (
  <ThriveMark size={size} tone={tone} spokeW={size * 0.05} nodeR={size * 0.072} hubR={size * 0.14} ringR={size * 0.33} {...over} />
);

// ════════════════════════════════════════════════════════════════════════════
// THE ORGANIC HUB (refined S3) - the chosen direction.
// A living network: hub set off-centre, nodes at deliberately-irregular
// distances and angles, spokes of varying length. Carefully composed so the
// visual mass stays balanced even though nothing is symmetric.
// Designed on a 32-unit square so it works as a favicon / app icon too.
// ════════════════════════════════════════════════════════════════════════════

// Node layouts, hand-tuned (not random). [x, y, "blue"|"navy", radiusScale]
type ONode = readonly [number, number, "blue" | "navy", number];
const ORG_HUB = [13, 16] as const; // hub centre, off to the lower-left
const ORG_NODES: Record<string, { hub: readonly [number, number]; nodes: ONode[] }> = {
  // 6 nodes = the six programs; balanced asymmetry
  six:   { hub: ORG_HUB, nodes: [
    [5, 6, "navy", 1], [25, 4, "blue", 1.05], [29, 17, "navy", 0.92],
    [22, 28, "blue", 1], [7, 28, "navy", 1], [17, 10, "blue", 0.85],
  ]},
  // 5 nodes - closer to the original S3 mock
  five:  { hub: [14, 17] as const, nodes: [
    [5, 7, "navy", 1], [27, 5, "blue", 1.05], [29, 19, "navy", 0.95],
    [20, 29, "blue", 1], [7, 28, "navy", 0.95],
  ]},
  // 6 nodes, all the same blue (equal members)
  sixBlue: { hub: ORG_HUB, nodes: [
    [5, 6, "blue", 1], [25, 4, "blue", 1.05], [29, 17, "blue", 0.92],
    [22, 28, "blue", 1], [7, 28, "blue", 1], [17, 10, "blue", 0.85],
  ]},
};

const OrganicMark = ({
  size = 88,
  tone = "color",            // "color" | "mono" | "reversed"
  layout = "six",            // key into ORG_NODES
  weight = "light",          // "light" | "medium" | "bold"
}: { size?: number; tone?: "color" | "mono" | "reversed"; layout?: keyof typeof ORG_NODES; weight?: "light" | "medium" | "bold" }) => {
  const s = size / 32;       // scale factor from the 32-unit design grid
  const w = weight === "bold" ? 1.5 : weight === "medium" ? 1.2 : 0.95;   // spoke width on the 32-grid
  const baseNodeR = weight === "bold" ? 3.2 : weight === "medium" ? 2.7 : 2.4;
  const hubR = weight === "bold" ? 4.6 : weight === "medium" ? 4.2 : 3.8;
  const { hub, nodes } = ORG_NODES[layout];
  const [hx, hy] = hub;
  const spoke = tone === "reversed" ? "rgba(255,255,255,0.85)" : tone === "mono" ? "currentColor" : NAVY;
  const colBlue = tone === "reversed" ? "#FFFFFF" : tone === "mono" ? "currentColor" : BLUE;
  const colNavy = tone === "reversed" ? "rgba(255,255,255,0.78)" : tone === "mono" ? "currentColor" : NAVY;
  const hubFill = tone === "mono" ? "currentColor" : GOLD;
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-label="thrive mark">
      {nodes.map(([x, y], i) => <line key={`s${i}`} x1={hx} y1={hy} x2={x} y2={y} stroke={spoke} strokeWidth={w} strokeLinecap="round" />)}
      {nodes.map(([x, y, c, rs], i) => <circle key={`n${i}`} cx={x} cy={y} r={baseNodeR * rs} fill={c === "blue" ? colBlue : colNavy} />)}
      <circle cx={hx} cy={hy} r={hubR} fill={hubFill} />
      {/* keep s referenced (svg already scales via width/height) */}
      {false && <rect width={s} height={s} />}
    </svg>
  );
};

// Lockup using the organic mark - wordmark first, mark on the RIGHT.
const OrgLockup = ({ tone = "color", h = 48, layout = "six", weight = "light" }: { tone?: "color" | "reversed"; h?: number; layout?: keyof typeof ORG_NODES; weight?: "light" | "medium" | "bold" }) => {
  const dark = tone === "reversed";
  const mark = h * 0.72;
  const gap = h * 0.16;
  const wordW = h * 3.4;            // approx advance width of "thrive" at fontSize h
  const markX = wordW + gap;
  return (
    <svg viewBox={`0 0 ${markX + mark + 2} ${h}`} height={h} className="w-auto" aria-label="thrive">
      <text x={4} y={h * 0.95} fontFamily={FONT} fontWeight={800} fontSize={h} letterSpacing={h * -0.034} fill={dark ? "#FFFFFF" : NAVY}>thrive</text>
      <g transform={`translate(${markX}, ${(h - mark) / 2})`}><OrganicMark size={mark} tone={dark ? "reversed" : "color"} layout={layout} weight={weight} /></g>
    </svg>
  );
};

// The horizontal lockup: light-register mark + Montserrat wordmark.
// `markScale` = mark height as a fraction of cap height; `gapScale` = gap as fraction of cap height.
const ThriveLockup = ({ tone = "color", h = 44, markScale = 0.66, gapScale = 0.2, markProps = {} }: {
  tone?: "color" | "reversed"; h?: number; markScale?: number; gapScale?: number; markProps?: Partial<Parameters<typeof ThriveMark>[0]>;
}) => {
  const dark = tone === "reversed";
  const mark = h * markScale;
  const gap = h * gapScale;
  const wmX = mark + gap;
  return (
    <svg viewBox={`0 0 ${wmX + 150} ${h}`} height={h} className="w-auto" aria-label="thrive">
      <g transform={`translate(0, ${(h - mark) / 2 - h * 0.04})`}>
        <LightMark size={mark} tone={dark ? "reversed" : "color"} {...markProps} />
      </g>
      <text x={wmX} y={h * 0.95} fontFamily={FONT} fontWeight={800} fontSize={h} letterSpacing={h * -0.034} fill={dark ? "#FFFFFF" : NAVY}>thrive</text>
    </svg>
  );
};

// ── MESHED · the network woven INTO the wordmark ────────────────────────────
// "thrive" at 44px ExtraBold ≈ 150px wide. Rough letter centres:
//   t≈12  h≈33  r≈54  i≈67  v≈84  e≈106   baseline y=42, x-height top ≈ y=15.
const meshed: Concept[] = [
  {
    id: "X1",
    name: "Word inside the network",
    note: "A thin ring encircles the whole word; satellites - the programs - sit on the ring; one is the gold hub (United to Thrive / the family). The word isn't NEXT to the network; it's IN it.",
    render: (d) => {
      const cx = 75, cy = 28, rx = 92, ry = 28;
      const pts = [200, 240, 290, 340, 20, 70, 110, 160].map((deg, i) => {
        const a = (deg * Math.PI) / 180;
        return [cx + rx * Math.cos(a), cy + ry * Math.sin(a), i] as const;
      });
      return (
        <svg viewBox="-10 -8 188 72" className="h-10 md:h-12 w-auto" aria-label="thrive">
          <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="none" stroke={SPOKE(d)} strokeWidth="1.25" />
          {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={i === 0 ? 6 : 3.6} fill={i === 0 ? GOLD : (i % 2 === 0 ? blu(d) : ink(d))} />)}
          {WM(d)}
        </svg>
      );
    },
  },
  {
    id: "X2",
    name: "The word hangs from the network",
    note: "A small gold hub floats above the centre of the word; hairline spokes drop from it and touch the tops of t, h, i and v - the word is suspended from the network it belongs to. The 'e' completes it as the last node.",
    render: (d) => {
      const hx = 64, hy = 4;
      const tops: [number, number][] = [[12, 6], [33, 6], [67, 11], [84, 14], [106, 14]];
      return (
        <svg viewBox="-4 -6 168 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
          {tops.map(([x, y], i) => <line key={i} x1={hx} y1={hy} x2={x} y2={y} stroke={i === 4 ? GOLD : SPOKE(d)} strokeWidth={i === 4 ? 2 : 1.25} />)}
          {WM(d)}
          {tops.map(([x, y], i) => i === 4 ? <circle key={`c${i}`} cx={x} cy={y} r="3.6" fill={GOLD} /> : <circle key={`c${i}`} cx={x} cy={y} r="2.8" fill={blu(d)} />)}
          <circle cx={hx} cy={hy} r="5.5" fill={GOLD} />
        </svg>
      );
    },
  },
  {
    id: "X3",
    name: "Network behind the word",
    note: "A faint hub-and-spoke sits BEHIND the wordmark, centred on the 'rive'. The word is in front, on the network - same space, layered. The hub peeks out above and below the letters; the gold centre glows through.",
    render: (d) => {
      const cx = 78, cy = 27, pts = ring6(cx, cy, 24);
      return (
        <svg viewBox="-6 -8 174 72" className="h-10 md:h-12 w-auto" aria-label="thrive">
          <g opacity={d ? 0.5 : 0.55}>
            {pts.map(([x, y], i) => <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke={SPOKE(d)} strokeWidth="1.25" />)}
            {pts.map(([x, y], i) => <circle key={`c${i}`} cx={x} cy={y} r="3.4" fill={i % 2 === 0 ? blu(d) : ink(d)} />)}
          </g>
          <circle cx={cx} cy={cy} r="5.5" fill={GOLD} opacity="0.85" />
          {WM(d)}
        </svg>
      );
    },
  },
  {
    id: "X4",
    name: "The 't' crossbar becomes a spoke",
    note: "The horizontal stroke of the 't' keeps going - out over the top of the word - and lands on a small hub-and-spoke sitting just past the 'e'. The first letter and the network share the same stroke. They can't be separated.",
    render: (d) => {
      const hx = 130, hy = 8, pts = ringR(hx, hy, 13);
      return (
        <svg viewBox="-2 -6 168 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
          {/* extended t-crossbar arcs from the 't' (≈x10,y18) up and right to the hub */}
          <path d={`M 10 18 C 40 4, 90 0, ${hx} ${hy}`} fill="none" stroke={ink(d)} strokeWidth="4.5" strokeLinecap="round" />
          {WM(d)}
          {pts.map(([x, y], i) => <line key={i} x1={hx} y1={hy} x2={x} y2={y} stroke={SPOKE(d)} strokeWidth="1.1" />)}
          {pts.map(([x, y], i) => <circle key={`c${i}`} cx={x} cy={y} r="2.6" fill={i % 2 === 0 ? blu(d) : ink(d)} />)}
          <circle cx={hx} cy={hy} r="5" fill={GOLD} />
        </svg>
      );
    },
  },
  {
    id: "X5",
    name: "The 'i' dot is a node",
    note: "Smallest change, tightest mesh: the tittle of the 'i' in 'thrive' becomes a gold node with a thin halo ring - the network is literally inside the letter. Works because Montserrat's i-dot is already a chunky square; we just make it the centre of a tiny hub.",
    render: (d) => {
      const ix = 66, iy = 9; // i-dot position
      const minis = [200, 320, 90].map((deg) => {
        const a = (deg * Math.PI) / 180;
        return [ix + 9 * Math.cos(a), iy + 9 * Math.sin(a)] as const;
      });
      return (
        <svg viewBox="-2 -6 160 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
          {WM(d)}
          {/* cover the original tittle area, then draw the node */}
          <rect x={ix - 4} y={iy - 4} width="8" height="8" fill={d ? NAVY : "#fff"} opacity={d ? 0 : 0} />
          {minis.map(([x, y], i) => <line key={i} x1={ix} y1={iy} x2={x} y2={y} stroke={SPOKE(d)} strokeWidth="1" />)}
          {minis.map(([x, y], i) => <circle key={`c${i}`} cx={x} cy={y} r="1.6" fill={blu(d)} />)}
          <circle cx={ix} cy={iy} r="6" fill="none" stroke={GOLD} strokeWidth="1" opacity="0.5" />
          <circle cx={ix} cy={iy} r="3" fill={GOLD} />
        </svg>
      );
    },
  },
  {
    id: "X6",
    name: "Hub replaces the 'i' - thr⊙ve",
    note: "Go all the way: the 'i' is gone - in its place, a small hub-and-spoke at the i's height. The word reads 'thr-(network)-ve'. The network isn't decoration on the wordmark; it IS a letter of it.",
    render: (d) => (
      <svg viewBox="-2 -6 168 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <text x="2" y="42" fontFamily={FONT} fontWeight={800} fontSize={44} letterSpacing="-1.5" fill={ink(d)}>thr</text>
        {/* hub standing in for the 'i', occupying ≈x60–74 */}
        <g transform="translate(67, 27)">
          {[210, 270, 330, 30, 90, 150].map((deg, i) => {
            const a = (deg * Math.PI) / 180; const x = 9 * Math.cos(a), y = 9 * Math.sin(a);
            return <g key={deg}><line x1="0" y1="0" x2={x} y2={y} stroke={SPOKE(d)} strokeWidth="1.1" /><circle cx={x} cy={y} r="2" fill={i % 2 === 0 ? blu(d) : ink(d)} /></g>;
          })}
          <circle cx="0" cy="-15" r="2.2" fill={GOLD} />
          <line x1="0" y1="0" x2="0" y2="-13" stroke={GOLD} strokeWidth="1.4" />
          <circle cx="0" cy="0" r="4" fill={GOLD} />
        </g>
        <text x="78" y="42" fontFamily={FONT} fontWeight={800} fontSize={44} letterSpacing="-1.5" fill={ink(d)}>ve</text>
      </svg>
    ),
  },
  {
    id: "X7",
    name: "The network underlines the word",
    note: "A horizontal line runs beneath 'thrive' with nodes on it like stops on a transit line - the word sits ON the network, its foundation. The middle stop is the gold hub. Echoes the gold accent rule used across the site.",
    render: (d) => {
      const y = 50, xs = [10, 35, 60, 85, 110, 135];
      return (
        <svg viewBox="-2 -2 160 60" className="h-11 md:h-13 w-auto" aria-label="thrive">
          {WM(d)}
          <line x1="6" y1={y} x2="142" y2={y} stroke={SPOKE(d)} strokeWidth="2" strokeLinecap="round" />
          {xs.map((x, i) => <circle key={x} cx={x} cy={y} r={i === 2 ? 5 : 3.2} fill={i === 2 ? GOLD : (i % 2 === 0 ? blu(d) : ink(d))} />)}
        </svg>
      );
    },
  },
  {
    id: "X8",
    name: "Network canopy over the word",
    note: "A gentle arc over the wordmark with the programs hanging from it - a canopy, a roof of relationships sheltering the word. The apex of the arc is the gold hub. Reads as 'the network holds the brand up.'",
    render: (d) => {
      const xs = [16, 40, 64, 88, 112, 136];
      const arcY = (x: number) => 6 + 0.0016 * (x - 76) ** 2; // shallow upward arc, low in the middle
      return (
        <svg viewBox="-2 -8 164 58" className="h-10 md:h-12 w-auto" aria-label="thrive">
          <path d={`M 8 ${arcY(8)} Q 76 -4 144 ${arcY(144)}`} fill="none" stroke={SPOKE(d)} strokeWidth="1.5" />
          {xs.map((x) => <line key={x} x1={x} y1={arcY(x) + 1} x2={x} y2="14" stroke={SPOKE(d)} strokeWidth="1" />)}
          {xs.map((x, i) => <circle key={`c${x}`} cx={x} cy={arcY(x)} r={i === 2 ? 5 : 3.2} fill={i === 2 ? GOLD : (i % 2 === 0 ? blu(d) : ink(d))} />)}
          {WM(d)}
        </svg>
      );
    },
  },
];

// ── HUB-AND-SPOKE STUDY · 10 variations, integrated with the wordmark ───────
const hubStudy: Concept[] = [
  {
    id: "HS1",
    name: "Refined six-spoke - gold hub, the word is the sixth node",
    note: "S1, integrated. A connecting spoke runs from the end of 'thrive' into the network - the wordmark is the sixth node. Gold hub with a faint halo; five satellites alternating navy/blue; hairline spokes. Reads as one lockup.",
    render: (d) => {
      const pts = ringR(HUB_X, HUB_Y, 18);
      return (
        <svg viewBox="0 0 210 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
          {WM(d)}
          <Link d={d} />
          {pts.map(([x, y], i) => <line key={i} x1={HUB_X} y1={HUB_Y} x2={x} y2={y} stroke={SPOKE(d)} strokeWidth="1.25" />)}
          {pts.map(([x, y], i) => <circle key={`c${i}`} cx={x} cy={y} r="3.8" fill={i % 2 === 0 ? blu(d) : ink(d)} />)}
          <circle cx={HUB_X} cy={HUB_Y} r="10" fill="none" stroke={GOLD} strokeWidth="1" opacity="0.4" />
          <circle cx={HUB_X} cy={HUB_Y} r="6.5" fill={GOLD} />
        </svg>
      );
    },
  },
  {
    id: "HS2",
    name: "Organic - equal members, the word feeds in",
    note: "S3, integrated. The connecting spoke and five same-blue satellites (every program an equal member) scatter at irregular distances; spokes gently curve. The wordmark connects in as just another node. Gold hub.",
    render: (d) => {
      const sats: [number, number][] = [[174, 9], [206, 14], [202, 38], [170, 46], [192, 50]];
      return (
        <svg viewBox="0 0 218 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
          {WM(d)}
          <path d={`M ${LINK_X} ${LINK_Y} Q ${(LINK_X + HUB_X) / 2} ${LINK_Y + 5} ${HUB_X} ${HUB_Y}`} fill="none" stroke={SPOKE(d)} strokeWidth="1.5" />
          {sats.map(([x, y], i) => {
            const mx = (HUB_X + x) / 2 + (y - HUB_Y) * 0.14;
            const my = (HUB_Y + y) / 2 - (x - HUB_X) * 0.14;
            return <path key={i} d={`M ${HUB_X} ${HUB_Y} Q ${mx} ${my} ${x} ${y}`} fill="none" stroke={SPOKE(d)} strokeWidth="1.25" />;
          })}
          {sats.map(([x, y], i) => <circle key={`c${i}`} cx={x} cy={y} r={i === 1 ? 4.4 : 3.7} fill={blu(d)} />)}
          <circle cx={HUB_X} cy={HUB_Y} r="7" fill={GOLD} />
        </svg>
      );
    },
  },
  {
    id: "HS3",
    name: "Warm center - the word connects to a home",
    note: "The hub is a small gold home shape ('famous for families' at the centre). A connecting spoke joins the wordmark to it; five navy satellites complete the network. Subtle, human, still tidy at small sizes.",
    render: (d) => {
      const pts = ringR(HUB_X, HUB_Y, 18);
      return (
        <svg viewBox="0 0 210 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
          {WM(d)}
          <Link d={d} to={[HUB_X - 7, HUB_Y]} />
          {pts.map(([x, y], i) => <line key={i} x1={HUB_X} y1={HUB_Y} x2={x} y2={y} stroke={SPOKE(d)} strokeWidth="1.25" />)}
          {pts.map(([x, y], i) => <circle key={`c${i}`} cx={x} cy={y} r="3.8" fill={ink(d)} />)}
          <rect x={HUB_X - 7} y={HUB_Y - 7} width="14" height="14" rx="4" fill={GOLD} />
        </svg>
      );
    },
  },
  {
    id: "HS4",
    name: "Orbit ring - the word joins the orbit",
    note: "No radial spokes. Five satellites sit on a thin orbit ring around the gold hub, and the connecting spoke brings the wordmark onto the same ring. 'Everything circles the centre.' Navy/blue satellites.",
    render: (d) => {
      const R = 17, pts = ringR(HUB_X, HUB_Y, R);
      return (
        <svg viewBox="0 0 210 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
          {WM(d)}
          <Link d={d} to={[HUB_X - R, HUB_Y]} />
          <circle cx={HUB_X} cy={HUB_Y} r={R} fill="none" stroke={SPOKE(d)} strokeWidth="1.25" />
          {pts.map(([x, y], i) => <circle key={`c${i}`} cx={x} cy={y} r="3.7" fill={i % 2 === 0 ? blu(d) : ink(d)} />)}
          <circle cx={HUB_X} cy={HUB_Y} r="7" fill={GOLD} />
        </svg>
      );
    },
  },
  {
    id: "HS5",
    name: "One path lit - and the lit path is the word",
    note: "Four satellites quietly outlined in navy on hairline spokes; one spoke glows gold - and it's the one running back to 'thrive'. The wordmark is the deal in motion. Navy hub.",
    render: (d) => {
      const pts = ringR(HUB_X, HUB_Y, 18);
      return (
        <svg viewBox="0 0 210 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
          {WM(d)}
          <line x1={LINK_X} y1={LINK_Y} x2={HUB_X} y2={HUB_Y} stroke={GOLD} strokeWidth="3" />
          {pts.map(([x, y], i) => <line key={i} x1={HUB_X} y1={HUB_Y} x2={x} y2={y} stroke={SPOKE_FAINT(d)} strokeWidth="1.25" />)}
          {pts.map(([x, y], i) => <circle key={`c${i}`} cx={x} cy={y} r="3.8" fill="none" stroke={d ? "rgba(255,255,255,0.5)" : "#C2CCD8"} strokeWidth="2" />)}
          <circle cx={HUB_X} cy={HUB_Y} r="7" fill={ink(d)} />
        </svg>
      );
    },
  },
  {
    id: "HS6",
    name: "Reaching fan - the word powers the broadcast",
    note: "The connecting spoke feeds into the hub, which fans satellites out to the right at increasing distance - the network reaching, promoting, distributing. 'We put you in front of people.' Gold hub, navy/blue satellites, blue spokes.",
    render: (d) => {
      const hx = HUB_X - 14, hy = HUB_Y;
      const fan: [number, number][] = [[hx + 18, hy - 16], [hx + 24, hy - 6], [hx + 26, hy + 5], [hx + 24, hy + 16], [hx + 18, hy + 25]];
      return (
        <svg viewBox="0 0 222 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
          {WM(d)}
          <Link d={d} to={[hx, hy]} w={2} />
          {fan.map(([x, y], i) => <line key={i} x1={hx} y1={hy} x2={x} y2={y} stroke={blu(d)} strokeWidth="1.75" />)}
          {fan.map(([x, y], i) => <circle key={`c${i}`} cx={x} cy={y} r="3.7" fill={i % 2 === 0 ? ink(d) : blu(d)} />)}
          <circle cx={hx} cy={hy} r="7.5" fill={GOLD} />
        </svg>
      );
    },
  },
  {
    id: "HS7",
    name: "Layered hub - the word connects to family / community / network",
    note: "The centre tells the story: a gold dot (family) inside a blue ring (community) inside a navy ring (network). The connecting spoke joins the wordmark to the outer ring; two small satellites complete it. The strongest standalone favicon of the set.",
    render: (d) => (
      <svg viewBox="0 0 208 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        {WM(d)}
        <Link d={d} to={[HUB_X - 13, HUB_Y]} />
        <line x1={HUB_X} y1={HUB_Y} x2={HUB_X + 4} y2={HUB_Y - 19} stroke={SPOKE(d)} strokeWidth="1.25" />
        <line x1={HUB_X} y1={HUB_Y} x2={HUB_X + 6} y2={HUB_Y + 18} stroke={SPOKE(d)} strokeWidth="1.25" />
        <circle cx={HUB_X + 4} cy={HUB_Y - 19} r="3.4" fill={ink(d)} />
        <circle cx={HUB_X + 6} cy={HUB_Y + 18} r="3.4" fill={ink(d)} />
        <circle cx={HUB_X} cy={HUB_Y} r="13" fill="none" stroke={ink(d)} strokeWidth="3" />
        <circle cx={HUB_X} cy={HUB_Y} r="8" fill="none" stroke={blu(d)} strokeWidth="3" />
        <circle cx={HUB_X} cy={HUB_Y} r="3.4" fill={GOLD} />
      </svg>
    ),
  },
  {
    id: "HS8",
    name: "Networks within - the word feeds a network of networks",
    note: "The connecting spoke joins the wordmark to the centre hub; four satellites, each with its own small dot beyond it - each program brings its own people in. 'A network of networks,' integrated into the lockup.",
    render: (d) => {
      const mids = [45, 135, 225, 315].map((deg) => {
        const a = (deg * Math.PI) / 180;
        return [HUB_X + 14 * Math.cos(a), HUB_Y + 14 * Math.sin(a), deg] as const;
      });
      return (
        <svg viewBox="0 0 212 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
          {WM(d)}
          <Link d={d} />
          {mids.map(([x, y, deg], i) => {
            const a = (deg * Math.PI) / 180;
            const ox = x + 7.5 * Math.cos(a), oy = y + 7.5 * Math.sin(a);
            return (
              <g key={i}>
                <line x1={HUB_X} y1={HUB_Y} x2={x} y2={y} stroke={SPOKE(d)} strokeWidth="1.25" />
                <line x1={x} y1={y} x2={ox} y2={oy} stroke={SPOKE_FAINT(d)} strokeWidth="1" />
                <circle cx={ox} cy={oy} r="2" fill={blu(d)} />
                <circle cx={x} cy={y} r="3.7" fill={ink(d)} />
              </g>
            );
          })}
          <circle cx={HUB_X} cy={HUB_Y} r="6.5" fill={GOLD} />
        </svg>
      );
    },
  },
  {
    id: "HS9",
    name: "Plus-network - the word is the fourth arm",
    note: "Stripped to a plus/cross: the connecting spoke is the left arm, three satellites are the others, gold hub. The most iconic and favicon-ready of the set; the plus quietly nods to 'more / add value.' Blue spokes.",
    render: (d) => {
      const sats = [[HUB_X, HUB_Y - 18], [HUB_X + 18, HUB_Y], [HUB_X, HUB_Y + 18]] as const;
      return (
        <svg viewBox="0 0 210 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
          {WM(d)}
          <line x1={LINK_X} y1={LINK_Y} x2={HUB_X} y2={HUB_Y} stroke={blu(d)} strokeWidth="2.5" strokeLinecap="round" />
          {sats.map(([x, y], i) => <line key={i} x1={HUB_X} y1={HUB_Y} x2={x} y2={y} stroke={blu(d)} strokeWidth="2.5" strokeLinecap="round" />)}
          {sats.map(([x, y], i) => <circle key={`c${i}`} cx={x} cy={y} r="4.2" fill={ink(d)} />)}
          <circle cx={HUB_X} cy={HUB_Y} r="7" fill={GOLD} />
        </svg>
      );
    },
  },
  {
    id: "HS10",
    name: "The 't' hub - the word loops back to its initial",
    note: "The connecting spoke runs from 'thrive' to a hub that IS a tiny gold lowercase 't' - the brand initial at the centre of the network it labels. Five navy/blue satellites; hairline spokes. The most self-referential, in a good way.",
    render: (d) => {
      const pts = ringR(HUB_X, HUB_Y, 18);
      return (
        <svg viewBox="0 0 210 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
          {WM(d)}
          <Link d={d} to={[HUB_X - 8.5, HUB_Y]} />
          {pts.map(([x, y], i) => <line key={i} x1={HUB_X} y1={HUB_Y} x2={x} y2={y} stroke={SPOKE(d)} strokeWidth="1.25" />)}
          {pts.map(([x, y], i) => <circle key={`c${i}`} cx={x} cy={y} r="3.8" fill={i % 2 === 0 ? blu(d) : ink(d)} />)}
          <circle cx={HUB_X} cy={HUB_Y} r="8.5" fill={d ? "rgba(255,255,255,0.06)" : "#fff"} stroke={GOLD} strokeWidth="1" opacity={d ? 0.4 : 1} />
          <rect x={HUB_X - 2} y={HUB_Y - 6} width="4" height="13" rx="1" fill={GOLD} />
          <rect x={HUB_X - 4.5} y={HUB_Y - 2.5} width="9" height="3.5" rx="1" fill={GOLD} />
        </svg>
      );
    },
  },
];

// ── SHORTLIST · hub-and-spoke + chains + word-of-mouth bubbles ───────────────
const shortlist: Concept[] = [
  // ---- HUB AND SPOKE ----
  {
    id: "S1",
    name: "Hub & spoke - the network, plainly",
    note: "A gold center hub (United to Thrive / the family) with six satellite hubs around it - Profit Partners, Mastermind Passport, Command Central, FAM Central, WER1, PromoEngine. Thin spokes connect them all. The mark IS the company structure.",
    render: (d) => {
      const cx = 24, cy = 28, r = 22;
      const pts = [0, 60, 120, 180, 240, 300].map((deg) => {
        const a = (deg * Math.PI) / 180;
        return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as const;
      });
      return (
        <svg viewBox="0 0 220 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
          {WM(d)}
          <g transform={`translate(${ICON_X}, 0)`}>
            {pts.map(([x, y], i) => <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke={d ? "rgba(255,255,255,0.45)" : "#CBD5E1"} strokeWidth="1.5" />)}
            {pts.map(([x, y], i) => <circle key={`c${i}`} cx={x} cy={y} r="4.5" fill={i % 2 === 0 ? blu(d) : ink(d)} />)}
            <circle cx={cx} cy={cy} r="7.5" fill={GOLD} />
          </g>
        </svg>
      );
    },
  },
  {
    id: "S2",
    name: "Hub & spoke as a 'T'",
    note: "The hub-and-spoke arranged into the letter T - three satellite hubs across the top (the crossbar), the hub at the join, two more dropping down (the stem). Symbol + monogram + network, all at once. Hub gold, satellites navy/blue.",
    render: (d) => (
      <svg viewBox="0 0 215 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        {WM(d)}
        <g transform={`translate(${ICON_X}, 0)`}>
          <g stroke={d ? "rgba(255,255,255,0.45)" : "#CBD5E1"} strokeWidth="1.5">
            <line x1="24" y1="12" x2="6" y2="12" /><line x1="24" y1="12" x2="42" y2="12" />
            <line x1="24" y1="12" x2="24" y2="28" /><line x1="24" y1="28" x2="24" y2="44" />
          </g>
          <circle cx="6" cy="12" r="4.5" fill={ink(d)} /><circle cx="42" cy="12" r="4.5" fill={ink(d)} />
          <circle cx="24" cy="28" r="4.5" fill={blu(d)} /><circle cx="24" cy="44" r="4.5" fill={blu(d)} />
          <circle cx="24" cy="12" r="7" fill={GOLD} />
        </g>
      </svg>
    ),
  },
  {
    id: "S3",
    name: "Hub & spoke - organic, real-network",
    note: "Hub off-center; satellites at irregular distances and angles, spokes of varying length. Reads less like a diagram, more like a living network that grew. Hub gold, satellites navy/blue.",
    render: (d) => {
      const cx = 22, cy = 27;
      const pts: [number, number, string][] = [
        [4, 8, ink(d)], [42, 6, blu(d)], [46, 30, ink(d)], [10, 46, blu(d)], [34, 47, ink(d)],
      ];
      return (
        <svg viewBox="0 0 215 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
          {WM(d)}
          <g transform={`translate(${ICON_X}, 0)`}>
            {pts.map(([x, y], i) => <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke={d ? "rgba(255,255,255,0.4)" : "#CBD5E1"} strokeWidth="1.5" />)}
            {pts.map(([x, y, c], i) => <circle key={`c${i}`} cx={x} cy={y} r="4" fill={c} />)}
            <circle cx={cx} cy={cy} r="7.5" fill={GOLD} />
          </g>
        </svg>
      );
    },
  },
  {
    id: "S4",
    name: "Hub & spoke - networks within the network",
    note: "A center hub, a ring of mid-hubs, and each mid-hub has its own two little satellites. Fractal: each program is itself a hub. Says 'a network of networks' - which is exactly what United to Thrive is.",
    render: (d) => {
      const cx = 24, cy = 28;
      const mid = [45, 135, 225, 315].map((deg) => {
        const a = (deg * Math.PI) / 180;
        return [cx + 14 * Math.cos(a), cy + 14 * Math.sin(a), deg] as const;
      });
      return (
        <svg viewBox="0 0 215 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
          {WM(d)}
          <g transform={`translate(${ICON_X}, 0)`}>
            {mid.map(([x, y, deg], i) => {
              const a = (deg * Math.PI) / 180;
              const o1 = [x + 7 * Math.cos(a - 0.5), y + 7 * Math.sin(a - 0.5)] as const;
              const o2 = [x + 7 * Math.cos(a + 0.5), y + 7 * Math.sin(a + 0.5)] as const;
              return (
                <g key={i}>
                  <line x1={cx} y1={cy} x2={x} y2={y} stroke={d ? "rgba(255,255,255,0.4)" : "#CBD5E1"} strokeWidth="1.5" />
                  <line x1={x} y1={y} x2={o1[0]} y2={o1[1]} stroke={d ? "rgba(255,255,255,0.3)" : "#E2E8F0"} strokeWidth="1" />
                  <line x1={x} y1={y} x2={o2[0]} y2={o2[1]} stroke={d ? "rgba(255,255,255,0.3)" : "#E2E8F0"} strokeWidth="1" />
                  <circle cx={o1[0]} cy={o1[1]} r="2.2" fill={blu(d)} />
                  <circle cx={o2[0]} cy={o2[1]} r="2.2" fill={blu(d)} />
                  <circle cx={x} cy={y} r="4" fill={ink(d)} />
                </g>
              );
            })}
            <circle cx={cx} cy={cy} r="7" fill={GOLD} />
          </g>
        </svg>
      );
    },
  },
  {
    id: "S5",
    name: "Hub & spoke - value flowing outward",
    note: "The hub sends value OUT to each satellite - spokes drawn as arrows pointing from the center to the programs. Says: United to Thrive promotes you, distributes to you, feeds the network. Arrows blue, hub gold.",
    render: (d) => {
      const cx = 24, cy = 28, r = 21;
      const pts = [0, 72, 144, 216, 288].map((deg) => {
        const a = ((deg - 90) * Math.PI) / 180;
        return [cx + r * Math.cos(a), cy + r * Math.sin(a), deg - 90] as const;
      });
      return (
        <svg viewBox="0 0 215 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
          {WM(d)}
          <g transform={`translate(${ICON_X}, 0)`}>
            {pts.map(([x, y, deg], i) => (
              <g key={i}>
                <line x1={cx} y1={cy} x2={x} y2={y} stroke={blu(d)} strokeWidth="2" />
                <path d="M 0 0 L -4 -3 L -4 3 Z" fill={blu(d)} transform={`translate(${x},${y}) rotate(${deg}) translate(2,0)`} />
                <circle cx={x} cy={y} r="2.5" fill={ink(d)} opacity="0.4" />
              </g>
            ))}
            <circle cx={cx} cy={cy} r="8" fill={GOLD} />
          </g>
        </svg>
      );
    },
  },
  {
    id: "S6",
    name: "Hub & spoke - one path lit up (a deal in motion)",
    note: "The full network sits quietly in grey - except one spoke and one satellite glow gold: a referral flowing through right now. Captures the network AND the action on it. Hub navy, lit path gold.",
    render: (d) => {
      const cx = 24, cy = 28, r = 22;
      const pts = [0, 60, 120, 180, 240, 300].map((deg) => {
        const a = (deg * Math.PI) / 180;
        return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as const;
      });
      return (
        <svg viewBox="0 0 220 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
          {WM(d)}
          <g transform={`translate(${ICON_X}, 0)`}>
            {pts.map(([x, y], i) => <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke={i === 5 ? GOLD : (d ? "rgba(255,255,255,0.35)" : "#E2E8F0")} strokeWidth={i === 5 ? 3 : 1.5} />)}
            {pts.map(([x, y], i) => <circle key={`c${i}`} cx={x} cy={y} r={i === 5 ? 5.5 : 4} fill={i === 5 ? GOLD : "none"} stroke={i === 5 ? "none" : (d ? "rgba(255,255,255,0.5)" : "#CBD5E1")} strokeWidth="2" />)}
            <circle cx={cx} cy={cy} r="7.5" fill={ink(d)} />
          </g>
        </svg>
      );
    },
  },
  // ---- CHAIN (more like M4) ----
  {
    id: "S7",
    name: "Ascending chain - straight up (M4, vertical)",
    note: "Three interlocking links climbing vertically, each a step higher and a colour brighter: navy → blue → gold. Cleaner and more iconic than the diagonal M4. 'The chain is the point' - and the chain rises.",
    render: (d) => (
      <svg viewBox="0 0 200 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        {WM(d)}
        <g transform={`translate(${ICON_X}, 0)`} fill="none" strokeWidth="4.5" strokeLinecap="round">
          <ellipse cx="10" cy="44" rx="6.5" ry="9.5" stroke={ink(d)} transform="rotate(18 10 44)" />
          <ellipse cx="16" cy="28" rx="6.5" ry="9.5" stroke={blu(d)} transform="rotate(18 16 28)" />
          <ellipse cx="22" cy="12" rx="6.5" ry="9.5" stroke={GOLD} transform="rotate(18 22 12)" />
        </g>
      </svg>
    ),
  },
  {
    id: "S8",
    name: "Chain forms the 'T'",
    note: "Three links across the top make the T's crossbar; the middle link drops two more to form the stem. The brand monogram, built entirely out of connected links. Crossbar navy/blue, stem ends in a gold link.",
    render: (d) => (
      <svg viewBox="0 0 215 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        {WM(d)}
        <g transform={`translate(${ICON_X}, 0)`} fill="none" strokeWidth="4" strokeLinecap="round">
          <ellipse cx="10" cy="12" rx="9" ry="6" stroke={ink(d)} />
          <ellipse cx="24" cy="12" rx="9" ry="6" stroke={blu(d)} />
          <ellipse cx="38" cy="12" rx="9" ry="6" stroke={ink(d)} />
          <ellipse cx="24" cy="26" rx="6" ry="9" stroke={blu(d)} />
          <ellipse cx="24" cy="42" rx="6" ry="9" stroke={GOLD} />
        </g>
      </svg>
    ),
  },
  {
    id: "S9",
    name: "Chain loop - the flywheel",
    note: "Five links forming a closed ring - the referral flywheel, recurring revenue, relationships that loop back and keep paying. One link gold (the active deal). Reads as 'this never stops.'",
    render: (d) => {
      const cx = 24, cy = 28, r = 14;
      const links = [0, 72, 144, 216, 288].map((deg) => {
        const a = ((deg - 90) * Math.PI) / 180;
        return [cx + r * Math.cos(a), cy + r * Math.sin(a), deg] as const;
      });
      return (
        <svg viewBox="0 0 215 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
          {WM(d)}
          <g transform={`translate(${ICON_X}, 0)`}>
            {links.map(([x, y, deg], i) => (
              <ellipse key={i} cx={x} cy={y} rx="5.5" ry="9" fill="none" strokeWidth="4" stroke={i === 0 ? GOLD : (i % 2 === 0 ? ink(d) : blu(d))} transform={`rotate(${deg} ${x} ${y})`} />
            ))}
          </g>
        </svg>
      );
    },
  },
  // ---- SPEECH BUBBLE (more like C4) ----
  {
    id: "S10",
    name: "Chorus of recommendations - overlapping bubbles",
    note: "Three speech bubbles cascading - many voices, many recommendations. The business model in a mark: people talking. Back navy, middle blue, front gold.",
    render: (d) => (
      <svg viewBox="0 0 222 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        {WM(d)}
        <g transform={`translate(${ICON_X}, 0)`}>
          <path d="M 4 4 h 22 a 6 6 0 0 1 6 6 v 8 a 6 6 0 0 1 -6 6 h -10 l -7 6 v -6 h -5 a 6 6 0 0 1 -6 -6 v -8 a 6 6 0 0 1 6 -6 z" fill={ink(d)} />
          <path d="M 14 14 h 22 a 6 6 0 0 1 6 6 v 8 a 6 6 0 0 1 -6 6 h -10 l -7 6 v -6 h -5 a 6 6 0 0 1 -6 -6 v -8 a 6 6 0 0 1 6 -6 z" fill={blu(d)} />
          <path d="M 22 26 h 22 a 6 6 0 0 1 6 6 v 8 a 6 6 0 0 1 -6 6 h -10 l -7 6 v -6 h -5 a 6 6 0 0 1 -6 -6 v -8 a 6 6 0 0 1 6 -6 z" fill={GOLD} />
        </g>
      </svg>
    ),
  },
  {
    id: "S11",
    name: "Recommendation → chain (the bubble has a tail of links)",
    note: "A speech bubble whose pointer tail extends into two chain links - a recommendation that connects people downstream, and pays each of them. Word-of-mouth meets 'the chain is the point.' Bubble blue, links navy → gold.",
    render: (d) => (
      <svg viewBox="0 0 218 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        {WM(d)}
        <g transform={`translate(${ICON_X}, 0)`}>
          <path d="M 4 4 h 30 a 7 7 0 0 1 7 7 v 14 a 7 7 0 0 1 -7 7 h -14 l -6 7 v -7 h -10 a 7 7 0 0 1 -7 -7 v -14 a 7 7 0 0 1 7 -7 z" fill={blu(d)} />
          <g fill="none" strokeWidth="3.5" strokeLinecap="round">
            <ellipse cx="22" cy="40" rx="5" ry="7.5" stroke={ink(d)} transform="rotate(25 22 40)" />
            <ellipse cx="32" cy="48" rx="5" ry="7.5" stroke={GOLD} transform="rotate(25 32 48)" />
          </g>
        </g>
      </svg>
    ),
  },
  {
    id: "S12",
    name: "What people say is about the network (bubble holds a hub)",
    note: "A speech bubble containing a tiny hub-and-spoke. The recommendation (the bubble) and the network it points to (the hub inside) are one thing. Bubble navy outline, hub gold, satellites blue.",
    render: (d) => (
      <svg viewBox="0 0 220 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        {WM(d)}
        <g transform={`translate(${ICON_X}, 0)`}>
          <path d="M 3 4 h 40 a 7 7 0 0 1 7 7 v 18 a 7 7 0 0 1 -7 7 h -20 l -7 7 v -7 h -13 a 7 7 0 0 1 -7 -7 v -18 a 7 7 0 0 1 7 -7 z" fill="none" stroke={ink(d)} strokeWidth="2.5" />
          <g transform="translate(23, 20)">
            {[0, 90, 180, 270].map((deg) => {
              const a = (deg * Math.PI) / 180;
              const x = 9 * Math.cos(a), y = 9 * Math.sin(a);
              return <g key={deg}><line x1="0" y1="0" x2={x} y2={y} stroke={d ? "rgba(255,255,255,0.4)" : "#CBD5E1"} strokeWidth="1.2" /><circle cx={x} cy={y} r="2.5" fill={blu(d)} /></g>;
            })}
            <circle cx="0" cy="0" r="4" fill={GOLD} />
          </g>
        </g>
      </svg>
    ),
  },
];

// ── SECTION 0 · Meaning-aligned directions (icon on the RIGHT) ───────────────
// Each mark embodies a specific thing United to Thrive stands for.
const meaning: Concept[] = [
  {
    id: "M1",
    name: "United → Thrive - two forms become one",
    note: "A 'U' (an open vessel - united, gathering) with a 'T' rising out of it (thrive). One reads into the other: united, then thriving. The literal name as a mark. U in blue, T in navy, gold pivot dot.",
    render: (d) => (
      <svg viewBox="0 0 220 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        {WM(d)}
        <g transform={`translate(${ICON_X}, 4)`}>
          <path d="M 4 2 V 22 a 14 14 0 0 0 28 0 V 2" fill="none" stroke={blu(d)} strokeWidth="7" strokeLinecap="round" />
          <rect x="6" y="6" width="28" height="6.5" rx="2" fill={ink(d)} />
          <rect x="16.75" y="6" width="6.5" height="26" rx="2" fill={ink(d)} />
          <circle cx="20" cy="38" r="3.5" fill={GOLD} />
        </g>
      </svg>
    ),
  },
  {
    id: "M2",
    name: "Convergence - the many become one, then rise",
    note: "Several lines (the programs, the people, the chapters) start spread apart and converge to a single point - then continue as one bold stroke lifting upward. 'We unite them all,' and the united thing thrives. Navy lines, gold rising stroke.",
    render: (d) => (
      <svg viewBox="0 0 220 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        {WM(d)}
        <g transform={`translate(${ICON_X}, 4)`} fill="none" strokeWidth="3" strokeLinecap="round">
          <path d="M 2 4 L 26 24" stroke={ink(d)} />
          <path d="M 2 24 L 26 24" stroke={blu(d)} />
          <path d="M 2 44 L 26 24" stroke={ink(d)} />
          <path d="M 26 24 L 42 4" stroke={GOLD} strokeWidth="5" />
          <path d="M 42 4 L 36 2 L 36 9 Z" fill={GOLD} stroke="none" transform="rotate(-30 42 4)" />
        </g>
      </svg>
    ),
  },
  {
    id: "M3",
    name: "Family at the hub - everyone orbits the family",
    note: "A gold heart-dot at the center; navy/blue petals radiating out (the businesses, leaders, partners that serve them). 'Famous for families' rendered literally - families at the center, the whole network revolving around them.",
    render: (d) => (
      <svg viewBox="0 0 220 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        {WM(d)}
        <g transform={`translate(${ICON_X + 24}, 28)`}>
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <ellipse key={deg} cx="0" cy="-13" rx="4.5" ry="11" fill={i % 2 === 0 ? blu(d) : ink(d)} transform={`rotate(${deg})`} />
          ))}
          <circle cx="0" cy="0" r="7" fill={GOLD} />
        </g>
      </svg>
    ),
  },
  {
    id: "M4",
    name: "The ascending chain - 'the chain is the point'",
    note: "Interlocking links climbing left-to-right, each a step up - and a colour step too: navy → blue → gold. The referral chain that pays everyone, the relationships that compound, the network rising. The single most literal expression of the WER1 idea.",
    render: (d) => (
      <svg viewBox="0 0 220 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        {WM(d)}
        <g transform={`translate(${ICON_X}, 0)`} fill="none" strokeWidth="4.5" strokeLinecap="round">
          <ellipse cx="14" cy="40" rx="10" ry="7" stroke={ink(d)} transform="rotate(-30 14 40)" />
          <ellipse cx="26" cy="28" rx="10" ry="7" stroke={blu(d)} transform="rotate(-30 26 28)" />
          <ellipse cx="38" cy="16" rx="10" ry="7" stroke={GOLD} transform="rotate(-30 38 16)" />
        </g>
      </svg>
    ),
  },
  {
    id: "M5",
    name: "Roots & sprout - thriving above, network below",
    note: "Above a horizon line: a two-leaf sprout (visible thriving). Below it: a small web of connected nodes (the partnership network that feeds the growth). The whole philosophy in one mark - what you see growing is built on relationships you don't.",
    tall: true,
    render: (d) => (
      <svg viewBox="0 0 220 72" className="h-12 md:h-14 w-auto" aria-label="thrive">
        <text x="2" y="48" fontFamily={FONT} fontWeight={800} fontSize={44} letterSpacing="-1.5" fill={ink(d)}>thrive</text>
        <g transform={`translate(${ICON_X + 18}, 4)`}>
          <path d="M 0 30 V 8" stroke={blu(d)} strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M 0 14 q -11 -3 -13 -13 q 11 0 13 13" fill={GOLD} />
          <path d="M 0 18 q 11 -3 13 -13 q -11 0 -13 13" fill={blu(d)} />
          <line x1="-18" y1="32" x2="18" y2="32" stroke={d ? "rgba(255,255,255,0.4)" : "#CBD5E1"} strokeWidth="1.5" />
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
      </svg>
    ),
  },
  {
    id: "M6",
    name: "Trust → abundance - the gradient is the message",
    note: "A simple rising arc (or half-sun on a horizon) filled navy → blue → gold. Brandon's exact framing - blue is trust, gold is wealth - made into the mark itself: you move from trust to abundance. Optimistic, clean, scales to anything.",
    render: (d) => (
      <svg viewBox="0 0 220 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <defs>
          <linearGradient id={`m6-${d ? "d" : "l"}`} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor={ink(d)} />
            <stop offset="0.55" stopColor={blu(d)} />
            <stop offset="1" stopColor={GOLD} />
          </linearGradient>
        </defs>
        {WM(d)}
        <g transform={`translate(${ICON_X}, 0)`}>
          <path d="M 2 44 A 20 20 0 0 1 42 44" fill="none" stroke={`url(#m6-${d ? "d" : "l"})`} strokeWidth="6" strokeLinecap="round" />
          {[8, 22, 36].map((x, i) => (
            <line key={x} x1={x} y1={44 - Math.sqrt(Math.max(0, 400 - (x - 22) ** 2))} x2={x} y2="48" stroke={i === 2 ? GOLD : blu(d)} strokeWidth="2.5" strokeLinecap="round" />
          ))}
        </g>
      </svg>
    ),
  },
  {
    id: "M7",
    name: "Interlocked rings - the bond, made permanent",
    note: "Two interlocked rings - the business and the family - with a small third ring (the leader who connects them). Unity, partnership, permanence; the link that doesn't come apart. Navy + blue rings, gold link-point.",
    render: (d) => (
      <svg viewBox="0 0 220 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        {WM(d)}
        <g transform={`translate(${ICON_X}, 6)`} fill="none" strokeWidth="4.5">
          <circle cx="16" cy="22" r="13" stroke={ink(d)} />
          <circle cx="32" cy="22" r="13" stroke={blu(d)} />
          <circle cx="24" cy="22" r="6" stroke={GOLD} strokeWidth="3.5" />
        </g>
      </svg>
    ),
  },
  {
    id: "M8",
    name: "The home + the growth",
    note: "A clean roofline (a chevron, a home) with an upward shoot rising through the peak. 'Strong communities start with strong families' - the home is the foundation; thriving grows out of it. Navy roof, gold shoot.",
    render: (d) => (
      <svg viewBox="0 0 220 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        {WM(d)}
        <g transform={`translate(${ICON_X}, 4)`}>
          <path d="M 2 40 L 24 14 L 46 40" fill="none" stroke={ink(d)} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 24 24 V 4 M 24 12 L 18 6 M 24 12 L 30 6" fill="none" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
        </g>
      </svg>
    ),
  },
  {
    id: "M9",
    name: "The table - united at it, thriving from it",
    note: "A 'T' whose crossbar is a long meeting table with three figures seated at it (the mastermind, the alliance, the community), the stem its foundation. Everything good here happens at a table; this puts the table in the mark. People dots alternate blue/gold.",
    render: (d) => (
      <svg viewBox="0 0 220 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        {WM(d)}
        <g transform={`translate(${ICON_X}, 4)`}>
          <rect x="2" y="20" width="44" height="6" rx="3" fill={ink(d)} />
          <rect x="20" y="20" width="6" height="22" rx="3" fill={ink(d)} />
          {[8, 23, 38].map((x, i) => <circle key={x} cx={x} cy="13" r="4.5" fill={i === 1 ? GOLD : blu(d)} />)}
        </g>
      </svg>
    ),
  },
  {
    id: "M10",
    name: "Growth rings - the network adds a ring every year",
    note: "Concentric arcs like tree-growth rings - innermost navy, then blue, the outermost (newest) gold. A tree thrives by adding rings; the network grows the same way, outward, year over year. Quiet, organic, premium.",
    render: (d) => (
      <svg viewBox="0 0 220 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        {WM(d)}
        <g transform={`translate(${ICON_X + 26}, 28)`} fill="none" strokeLinecap="round">
          <circle cx="0" cy="0" r="5" fill={ink(d)} stroke="none" />
          <circle cx="0" cy="0" r="11" stroke={blu(d)} strokeWidth="2.5" />
          <circle cx="0" cy="0" r="18" stroke={blu(d)} strokeWidth="2.5" opacity="0.6" />
          <circle cx="0" cy="0" r="25" stroke={GOLD} strokeWidth="2.5" />
        </g>
      </svg>
    ),
  },
];

// ── SECTION 1 · Creative directions (bigger swings) ──────────────────────────
const creative: Concept[] = [
  {
    id: "C1",
    name: "Arrow-i - the 'i' grows upward",
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
    name: "Just the 't' - favicon-first identity",
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
    name: "Rising word - the baseline thrives upward",
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
    name: "Word-of-mouth - thrive in a speech bubble",
    note: "The wordmark inside a rounded chat bubble with a tail. The whole identity says 'recommendation / referral / what people say' - which is literally the business model.",
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
    name: "Honeycomb - a hex cell mark + wordmark",
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
    name: "The orbit - a family at the center",
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
    name: "Negative-space T - the mark is the void",
    note: "A navy rounded square with a 'T' cut out of it - the letter exists only as empty space. Modern, confident, very strong as an app icon. Wordmark alongside.",
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
    name: "Stacked block - TH / RI / VE as a monogram",
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
    name: "The thread - one line ties the letters together",
    note: "The wordmark with a single thin line weaving over and under the letters - the network thread that connects everyone. Gold line, navy word.",
    render: (d) => (
      <svg viewBox="0 0 220 56" className="h-10 md:h-12 w-auto" aria-label="thrive">
        <path d="M 0 38 Q 30 24 60 38 T 120 38 T 180 38 Q 200 30 220 38" fill="none" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />
        <text x="2" y="44" fontFamily={FONT} fontWeight={800} fontSize={42} letterSpacing="-1.5" fill={ink(d)}>thrive</text>
      </svg>
    ),
  },
  {
    id: "C10",
    name: "Plus mark - '+thrive' (more, wellness, growth)",
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
    name: "Seedling - life growing out of the word",
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
    name: "Pixel - the digital-platform take",
    note: "The wordmark built from a chunky pixel grid. Signals 'this is a tech platform / app', not just a marketing brand. Most polarizing of the set - you'll love it or hate it.",
    render: (d) => {
      // crude pixel rendering of "thrive" using rects on a grid
      const px = 6;
      const cells: [number, number][] = [];
      // each tuple is a 5x5-ish glyph block at column offset; we cheat with a simple bitmap
      const grid = [
        "  X      X X X   X       X X X     X       X X X X X ",
      ];
      // Too complex to hand-bitmap nicely - instead approximate with a "pixel-block" wordmark
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
    name: "Infinity loop - compounding, recurring",
    note: "An infinity / loop mark before the wordmark - the referral flywheel, recurring revenue, relationships that keep paying. Blue loop, gold pinch-point.",
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
    name: "Underline-arrow - the line turns into direction",
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
  { id: "T4", name: "Montserrat Medium · UPPERCASE · wide tracking", note: "Spaced caps, lighter weight - refined / editorial.",
    render: (d) => (<svg viewBox="0 0 330 56" className="h-7 md:h-9 w-auto"><text x="2" y="40" fontFamily={FONT} fontWeight={600} fontSize={34} letterSpacing="14" fill={ink(d)}>THRIVE</text></svg>) },
  { id: "T5", name: "Montserrat ExtraBold · two-tone T", note: "Capital T in blue, rest navy.",
    render: (d) => (<svg viewBox="0 0 220 56" className="h-10 md:h-12 w-auto"><text x="2" y="42" fontFamily={FONT} fontWeight={800} fontSize={46} letterSpacing="-1.5"><tspan fill={blu(d)}>T</tspan><tspan fill={ink(d)}>hrive</tspan></text></svg>) },
  { id: "T7", name: "Montserrat ExtraBold Italic · gradient", note: "Forward-leaning, navy→blue gradient.",
    render: (d) => (<svg viewBox="0 0 230 56" className="h-10 md:h-12 w-auto"><defs><linearGradient id={`tg-${d ? "d" : "l"}`} x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor={d ? "#fff" : NAVY} /><stop offset="1" stopColor={d ? BLUE_LIGHT : BLUE} /></linearGradient></defs><text x="2" y="42" fontFamily={FONT} fontWeight={800} fontStyle="italic" fontSize={46} letterSpacing="-1.8" fill={`url(#tg-${d ? "d" : "l"})`}>thrive</text></svg>) },
  { id: "T8", name: "Stacked · 'UNITED TO' + thrive", note: "Eyebrow over wordmark; resolves naming ambiguity.", tall: true,
    render: (d) => (<svg viewBox="0 0 215 72" className="h-12 md:h-14 w-auto"><text x="3" y="16" fontFamily={FONT} fontWeight={600} fontSize={12} letterSpacing="5" fill={d ? "rgba(255,255,255,0.65)" : "#64748B"}>UNITED TO</text><text x="2" y="60" fontFamily={FONT} fontWeight={800} fontSize={46} letterSpacing="-2" fill={ink(d)}>thrive</text></svg>) },
  { id: "T12", name: "T-in-square mark + Montserrat thrive", note: "App-icon mark + clean wordmark - a real logo system.",
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
          The chosen direction - S3, the organic hub
        </h1>
        <p className="mt-6 max-w-[820px] text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          Refining <strong>S3</strong> - the living-network hub: gold centre set off to one side (United to Thrive, the family at the middle), nodes at deliberately-irregular distances and angles (the programs), spokes of varying length (the structure that grew, not a diagram). Composed so the visual mass stays balanced even though nothing is symmetric - and drawn on a 32-unit square so it works as a favicon / app icon. Paired with the <strong>Montserrat</strong> wordmark. The light-mark study and earlier explorations stay below for reference.
        </p>
      </div>
    </section>

    {/* ── REFINING S3 - THE ORGANIC HUB ──────────────────────────────────── */}
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pb-12 space-y-10">
        <div className="border-b-2 border-brand-gold pb-4">
          <p className="eyebrow-gold">REFINING S3 · ORGANIC HUB-AND-SPOKE + MONTSERRAT WORDMARK</p>
          <h2 className="mt-2 font-serif-display text-slate-ink text-[26px] md:text-[32px]">The living-network mark, cleaned up</h2>
        </div>

        {/* Primary lockup */}
        <article className="border border-[hsl(var(--slate-200))] rounded-2xl p-6 md:p-9">
          <p className="eyebrow-blue">PRIMARY LOCKUP</p>
          <h3 className="mt-2 font-serif-display text-slate-ink text-[20px]">Horizontal - the default (6 nodes, light weight)</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="flex items-center justify-center px-8 py-12 rounded-xl bg-white border border-[hsl(var(--slate-200))]"><OrgLockup tone="color" h={52} /></div>
            <div className="flex items-center justify-center px-8 py-12 rounded-xl bg-brand-navy"><OrgLockup tone="reversed" h={52} /></div>
          </div>
        </article>

        {/* The mark alone */}
        <article className="border border-[hsl(var(--slate-200))] rounded-2xl p-6 md:p-9">
          <p className="eyebrow-blue">THE MARK ALONE</p>
          <h3 className="mt-2 font-serif-display text-slate-ink text-[20px]">For square spaces - app icon, social avatar, stamp</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="flex items-center justify-center p-12 rounded-xl bg-white border border-[hsl(var(--slate-200))]"><OrganicMark size={96} /></div>
            <div className="flex items-center justify-center p-12 rounded-xl bg-brand-navy"><OrganicMark size={96} tone="reversed" /></div>
            <div className="flex items-center justify-center p-12 rounded-xl bg-brand-blue"><OrganicMark size={96} tone="reversed" /></div>
          </div>
        </article>

        {/* Favicon sizes */}
        <article className="border border-[hsl(var(--slate-200))] rounded-2xl p-6 md:p-9">
          <p className="eyebrow-blue">FAVICON / TINY SIZES</p>
          <h3 className="mt-2 font-serif-display text-slate-ink text-[20px]">Does the organic mark survive at 16 / 24 / 32 / 48 px?</h3>
          <div className="mt-6 flex flex-wrap items-end gap-7">
            {[16, 24, 32, 48].map((px) => (
              <div key={px} className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center rounded bg-white border border-[hsl(var(--slate-200))]" style={{ width: px + 10, height: px + 10 }}><OrganicMark size={px} /></div>
                <span className="text-[11px] text-[hsl(var(--slate-500))]">{px}px</span>
              </div>
            ))}
            {[16, 24, 32, 48].map((px) => (
              <div key={`d${px}`} className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center rounded bg-brand-navy" style={{ width: px + 10, height: px + 10 }}><OrganicMark size={px} tone="reversed" /></div>
                <span className="text-[11px] text-[hsl(var(--slate-500))]">{px}px · dark</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[14px] italic text-[hsl(var(--slate-500))]">If 16px is mush at the light weight, the favicon falls back to the <strong>medium</strong> or <strong>bold</strong> version of the same mark (shown below), or to a stripped 3-node version. Tell me what you see.</p>
        </article>

        {/* One-color + on photo */}
        <article className="border border-[hsl(var(--slate-200))] rounded-2xl p-6 md:p-9">
          <p className="eyebrow-blue">ONE-COLOUR · ON A PHOTO</p>
          <h3 className="mt-2 font-serif-display text-slate-ink text-[20px]">The non-negotiable tests</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="flex items-center justify-center px-8 py-12 rounded-xl bg-white border border-[hsl(var(--slate-200))] text-slate-ink">
              <svg viewBox="0 0 190 52" height={52} className="w-auto"><g transform="translate(0,7)"><OrganicMark size={38} tone="mono" /></g><text x="46" y="49" fontFamily={FONT} fontWeight={800} fontSize={52} letterSpacing="-1.8" fill="currentColor">thrive</text></svg>
            </div>
            <div className="flex items-center justify-center px-8 py-12 rounded-xl bg-slate-ink text-white">
              <svg viewBox="0 0 190 52" height={52} className="w-auto"><g transform="translate(0,7)"><OrganicMark size={38} tone="mono" /></g><text x="46" y="49" fontFamily={FONT} fontWeight={800} fontSize={52} letterSpacing="-1.8" fill="currentColor">thrive</text></svg>
            </div>
            <div
              className="relative flex items-center justify-center px-8 py-12 rounded-xl overflow-hidden"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=640)", backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 bg-brand-navy/55" />
              <div className="relative"><OrgLockup tone="reversed" h={40} /></div>
            </div>
          </div>
        </article>

        {/* Layout variants */}
        <article className="border border-[hsl(var(--slate-200))] rounded-2xl p-6 md:p-9">
          <p className="eyebrow-blue">ARRANGEMENT - PICK ONE</p>
          <h3 className="mt-2 font-serif-display text-slate-ink text-[20px]">Node count & colour mix</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {([
              { k: "six" as const, label: "6 nodes · navy + blue (the six programs, varied)" },
              { k: "five" as const, label: "5 nodes · navy + blue (closest to the original S3)" },
              { k: "sixBlue" as const, label: "6 nodes · all blue (equal members of the network)" },
            ]).map((v) => (
              <div key={v.k} className="rounded-xl border border-[hsl(var(--slate-200))] p-6">
                <div className="flex items-center justify-center py-4"><OrganicMark size={88} layout={v.k} /></div>
                <div className="mt-3 flex items-center px-3 py-2 rounded bg-white border border-[hsl(var(--slate-200))]"><OrgLockup tone="color" h={34} layout={v.k} /></div>
                <p className="mt-2 text-[13px] text-[hsl(var(--slate-700))] text-center">{v.label}</p>
              </div>
            ))}
          </div>
        </article>

        {/* Weight variants of the organic mark */}
        <article className="border border-[hsl(var(--slate-200))] rounded-2xl p-6 md:p-9">
          <p className="eyebrow-blue">WEIGHT - PICK ONE</p>
          <h3 className="mt-2 font-serif-display text-slate-ink text-[20px]">Same organic mark, three weights</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {(["light", "medium", "bold"] as const).map((w) => (
              <div key={w} className="rounded-xl border border-[hsl(var(--slate-200))] p-6">
                <div className="flex items-center justify-center py-4"><OrganicMark size={88} weight={w} /></div>
                <div className="mt-3 flex justify-center gap-3">{[16, 24].map((px) => <div key={px} className="flex items-center justify-center rounded bg-white border border-[hsl(var(--slate-200))]" style={{ width: px + 8, height: px + 8 }}><OrganicMark size={px} weight={w} /></div>)}</div>
                <p className="mt-2 text-[13px] text-[hsl(var(--slate-700))] text-center capitalize">{w}{w === "light" ? " - your pick (most delicate)" : w === "medium" ? " - favicon-safe middle ground" : " - survives the tiniest"}</p>
              </div>
            ))}
          </div>
        </article>

        <div className="rounded-2xl bg-brand-navy p-8 md:p-12 text-white">
          <h3 className="font-serif-display text-[24px] md:text-[28px]">If this is the one, I'll wire it in.</h3>
          <p className="mt-4 text-[17px] leading-relaxed text-white/90 max-w-[760px]">
            Confirm the arrangement (6 / 5 / all-blue) and the weight (light / medium / bold for use; the favicon may use a heavier one), and say the word. I'll then: build a <code>&lt;ThriveLogo&gt;</code> component (so Montserrat renders in the header), swap it into Header & Footer, replace <code>favicon.svg</code> with the mark (heavier variant for legibility), export the SVG file set, and add a one-page brand sheet (clearspace, min sizes, colour values, do's/don'ts).
          </p>
        </div>
      </div>
    </section>

    {/* ── REFINE THE LIGHT MARK (reference) ───────────────────────────────── */}
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pb-12 space-y-10">
        <div className="border-b-2 border-brand-gold pb-4">
          <p className="eyebrow-gold">REFINING THE LIGHT MARK · GOLD HUB · BLUE NODES · NAVY SPOKES</p>
          <h2 className="mt-2 font-serif-display text-slate-ink text-[26px] md:text-[32px]">Dial in the proportions</h2>
          <p className="mt-3 max-w-[700px] text-[15px] text-[hsl(var(--slate-700))]">Same recipe in every one (light weight, your colour roles) - varying node count, spoke length, node/hub treatment, and padding. Each shown big, at 16/24 px, and in the lockup. Tell me the letter you like (and any tweak).</p>
        </div>

        {([
          { id: "L-A", name: "Baseline - 6 nodes, one pointing up, solid", p: {} },
          { id: "L-B", name: "6 nodes, flat top (rotated 30°) - more grounded", p: { rotate: 30 } },
          { id: "L-C", name: "5 nodes - odd count reads more organic / dynamic", p: { weights: 5 } },
          { id: "L-D", name: "7 nodes - denser network, still light", p: { weights: 7 } },
          { id: "L-E", name: "8 nodes (flat sides) - fullest wheel", p: { weights: 8, rotate: 22.5 } },
          { id: "L-F", name: "6 nodes, spokes stop short of the nodes - airier", p: { spokeGapOuter: 4 } },
          { id: "L-G", name: "6 nodes drawn as open rings - most delicate", p: { nodeStyle: "ring" as const, nodeR: 3.2 } },
          { id: "L-H", name: "6 nodes, gold halo around the hub - a touch richer", p: { hubStyle: "halo" as const } },
          { id: "L-I", name: "6 nodes, hub is an open gold ring - 'the space everything holds'", p: { hubStyle: "ring" as const } },
          { id: "L-J", name: "6 nodes, tighter to the edges - favicon-optimised", p: { ringR: 88 * 0.37, nodeR: 88 * 0.082 } },
          { id: "L-K", name: "6 nodes, roomier padding - most elegant", p: { ringR: 88 * 0.29 } },
          { id: "L-L", name: "Delicate combo - open ring nodes + short spokes + solid gold hub", p: { nodeStyle: "ring" as const, nodeR: 3.2, spokeGapOuter: 3 } },
        ] as { id: string; name: string; p: Partial<Parameters<typeof ThriveMark>[0]> }[]).map((v) => {
          // scale node-radius-style props that were given in 88-units down for the small previews
          const small = (px: number) => {
            const sp: Partial<Parameters<typeof ThriveMark>[0]> = { ...v.p };
            if (typeof sp.ringR === "number" && sp.ringR > 10) sp.ringR = sp.ringR / 88 * px;
            if (typeof sp.nodeR === "number" && sp.nodeR > 5) sp.nodeR = sp.nodeR / 88 * px;
            if (typeof sp.spokeGapOuter === "number") sp.spokeGapOuter = sp.spokeGapOuter / 88 * px;
            return sp;
          };
          return (
            <article key={v.id} className="border border-[hsl(var(--slate-200))] rounded-2xl p-6 md:p-8">
              <div className="flex flex-wrap items-baseline gap-3">
                <p className="eyebrow-blue">{v.id}</p>
                <h3 className="font-serif-display text-slate-ink text-[18px] md:text-[20px]">{v.name}</h3>
              </div>
              <div className="mt-6 grid md:grid-cols-[120px_120px_1fr] gap-4 items-center">
                <div className="flex items-center justify-center p-6 rounded-xl bg-white border border-[hsl(var(--slate-200))]"><LightMark size={88} {...v.p} /></div>
                <div className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white border border-[hsl(var(--slate-200))]">
                  {[16, 24].map((px) => <div key={px} className="flex items-center justify-center rounded bg-white border border-[hsl(var(--slate-200))]" style={{ width: px + 10, height: px + 10 }}><LightMark size={px} {...small(px)} /></div>)}
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center px-6 py-4 rounded-xl bg-white border border-[hsl(var(--slate-200))]"><ThriveLockup tone="color" h={42} markProps={v.p} /></div>
                  <div className="flex items-center px-6 py-4 rounded-xl bg-brand-navy"><ThriveLockup tone="reversed" h={42} markProps={v.p} /></div>
                </div>
              </div>
            </article>
          );
        })}

        {/* Lockup proportion options */}
        <article className="border border-[hsl(var(--slate-200))] rounded-2xl p-6 md:p-8">
          <p className="eyebrow-blue">LOCKUP PROPORTIONS</p>
          <h3 className="mt-2 font-serif-display text-slate-ink text-[18px] md:text-[20px]">Mark size & gap relative to the wordmark</h3>
          <div className="mt-6 space-y-3">
            {[
              { label: "Mark small, generous gap - wordmark leads", ms: 0.56, gs: 0.26 },
              { label: "Balanced - the recommended default", ms: 0.66, gs: 0.20 },
              { label: "Mark large, tight gap - symbol leads", ms: 0.78, gs: 0.14 },
            ].map((o) => (
              <div key={o.label}>
                <div className="flex items-center px-6 py-4 rounded-xl bg-white border border-[hsl(var(--slate-200))]"><ThriveLockup tone="color" h={48} markScale={o.ms} gapScale={o.gs} /></div>
                <p className="mt-1 text-[12px] text-[hsl(var(--slate-500))]">{o.label}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>

    {/* ── FINAL DIRECTION (the v1 system, for context) ────────────────────── */}
    <section className="surface-muted">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-12 md:py-20 space-y-10">
        <div className="border-b border-[hsl(var(--slate-200))] pb-4">
          <p className="eyebrow-blue">THE SYSTEM · HUB-AND-SPOKE SYMBOL + MONTSERRAT WORDMARK</p>
          <h2 className="mt-2 font-serif-display text-slate-ink text-[24px] md:text-[28px]">United to Thrive - logo system v1 (baseline)</h2>
        </div>

        {/* Primary lockup */}
        <article className="border border-[hsl(var(--slate-200))] rounded-2xl p-6 md:p-9">
          <p className="eyebrow-blue">PRIMARY LOCKUP</p>
          <h3 className="mt-2 font-serif-display text-slate-ink text-[20px]">Horizontal - the default</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="flex items-center justify-center px-8 py-12 rounded-xl bg-white border border-[hsl(var(--slate-200))]"><ThriveLockup tone="color" h={52} /></div>
            <div className="flex items-center justify-center px-8 py-12 rounded-xl bg-brand-navy"><ThriveLockup tone="reversed" h={52} /></div>
          </div>
        </article>

        {/* The mark alone */}
        <article className="border border-[hsl(var(--slate-200))] rounded-2xl p-6 md:p-9">
          <p className="eyebrow-blue">THE MARK ALONE</p>
          <h3 className="mt-2 font-serif-display text-slate-ink text-[20px]">For square spaces - app icon, social avatar, stamp</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="flex items-center justify-center p-12 rounded-xl bg-white border border-[hsl(var(--slate-200))]"><ThriveMark size={88} spokeW={6.6} nodeR={9.2} hubR={16.3} ringR={29} /></div>
            <div className="flex items-center justify-center p-12 rounded-xl bg-brand-navy"><ThriveMark size={88} tone="reversed" spokeW={6.6} nodeR={9.2} hubR={16.3} ringR={29} /></div>
            <div className="flex items-center justify-center p-12 rounded-xl bg-brand-blue"><ThriveMark size={88} tone="reversed" spokeW={6.6} nodeR={9.2} hubR={16.3} ringR={29} /></div>
          </div>
        </article>

        {/* Favicon sizes */}
        <article className="border border-[hsl(var(--slate-200))] rounded-2xl p-6 md:p-9">
          <p className="eyebrow-blue">FAVICON / TINY SIZES</p>
          <h3 className="mt-2 font-serif-display text-slate-ink text-[20px]">Does it survive at 16, 32, 48 px?</h3>
          <div className="mt-6 flex flex-wrap items-end gap-8">
            {[16, 24, 32, 48].map((px) => (
              <div key={px} className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center rounded bg-white border border-[hsl(var(--slate-200))]" style={{ width: px + 12, height: px + 12 }}>
                  <ThriveMark size={px} spokeW={px * 0.085} nodeR={px * 0.11} hubR={px * 0.19} ringR={px * 0.33} />
                </div>
                <span className="text-[11px] text-[hsl(var(--slate-500))]">{px}px</span>
              </div>
            ))}
            {[16, 24, 32, 48].map((px) => (
              <div key={`d${px}`} className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center rounded bg-brand-navy" style={{ width: px + 12, height: px + 12 }}>
                  <ThriveMark size={px} tone="reversed" spokeW={px * 0.085} nodeR={px * 0.11} hubR={px * 0.19} ringR={px * 0.33} />
                </div>
                <span className="text-[11px] text-[hsl(var(--slate-500))]">{px}px · dark</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[14px] italic text-[hsl(var(--slate-500))]">If 16px reads as mush, the favicon falls back to just the gold hub + 4 spokes (a "+"). Tell me how it looks to you.</p>
        </article>

        {/* One-color + on photo */}
        <article className="border border-[hsl(var(--slate-200))] rounded-2xl p-6 md:p-9">
          <p className="eyebrow-blue">ONE-COLOUR · ON A PHOTO</p>
          <h3 className="mt-2 font-serif-display text-slate-ink text-[20px]">The non-negotiable tests</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="flex items-center justify-center px-8 py-12 rounded-xl bg-white border border-[hsl(var(--slate-200))] text-slate-ink">
              <svg viewBox="0 0 185 52" height={52} className="w-auto"><g transform="translate(0,8)"><ThriveMark size={36} tone="mono" spokeW={2.7} nodeR={3.8} hubR={6.7} ringR={11.9} /></g><text x="44" y="49" fontFamily={FONT} fontWeight={800} fontSize={52} letterSpacing="-1.8" fill="currentColor">thrive</text></svg>
            </div>
            <div className="flex items-center justify-center px-8 py-12 rounded-xl bg-slate-ink text-white">
              <svg viewBox="0 0 185 52" height={52} className="w-auto"><g transform="translate(0,8)"><ThriveMark size={36} tone="mono" spokeW={2.7} nodeR={3.8} hubR={6.7} ringR={11.9} /></g><text x="44" y="49" fontFamily={FONT} fontWeight={800} fontSize={52} letterSpacing="-1.8" fill="currentColor">thrive</text></svg>
            </div>
            <div
              className="relative flex items-center justify-center px-8 py-12 rounded-xl overflow-hidden"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=640)", backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 bg-brand-navy/55" />
              <div className="relative"><ThriveLockup tone="reversed" h={40} /></div>
            </div>
          </div>
        </article>

        {/* Mark weight options */}
        <article className="border border-[hsl(var(--slate-200))] rounded-2xl p-6 md:p-9">
          <p className="eyebrow-blue">DIAL THE WEIGHT</p>
          <h3 className="mt-2 font-serif-display text-slate-ink text-[20px]">Three weights of the same mark - pick one</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              { label: "Light - delicate, more whitespace", sw: 4.4, nr: 7.6, hr: 14, rr: 30 },
              { label: "Medium - the recommended default", sw: 6.6, nr: 9.2, hr: 16.3, rr: 29 },
              { label: "Bold - survives tiniest, most confident", sw: 9.2, nr: 11, hr: 18, rr: 27.5 },
            ].map((w) => (
              <div key={w.label} className="rounded-xl border border-[hsl(var(--slate-200))] p-6">
                <div className="flex items-center justify-center py-6"><ThriveMark size={88} spokeW={w.sw} nodeR={w.nr} hubR={w.hr} ringR={w.rr} /></div>
                <p className="mt-2 text-[13px] text-[hsl(var(--slate-700))] text-center">{w.label}</p>
                <div className="mt-3 flex justify-center gap-3">
                  {[16, 24].map((px) => <div key={px} className="flex items-center justify-center rounded bg-white border border-[hsl(var(--slate-200))]" style={{ width: px + 10, height: px + 10 }}><ThriveMark size={px} spokeW={px * w.sw / 88} nodeR={px * w.nr / 88} hubR={px * w.hr / 88} ringR={px * w.rr / 88} /></div>)}
                </div>
              </div>
            ))}
          </div>
        </article>

        <div className="rounded-2xl bg-brand-navy p-8 md:p-12 text-white">
          <h3 className="font-serif-display text-[24px] md:text-[28px]">If this is right, I'll wire it in.</h3>
          <p className="mt-4 text-[17px] leading-relaxed text-white/90 max-w-[760px]">
            Pick a weight (light / medium / bold), confirm the colour roles (gold hub, blue nodes, navy spokes - or want the spokes blue too?), and say the word. I'll then: build a <code>&lt;ThriveLogo&gt;</code> component (so the Montserrat actually renders in the header), swap it into Header & Footer, replace <code>favicon.svg</code> with the simplified mark, and add a short brand sheet (clearspace, min sizes, colour values, do's/don'ts).
          </p>
        </div>
      </div>
    </section>

    {/* ── MESHED ──────────────────────────────────────────────────────────── */}
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pb-12">
        <div className="border-b-2 border-brand-gold pb-4">
          <p className="eyebrow-gold">SECTION X · NETWORK WOVEN INTO THE WORDMARK</p>
          <h2 className="mt-2 font-serif-display text-slate-ink text-[26px] md:text-[32px]">Meshed marks</h2>
        </div>
        <div className="mt-8 space-y-8">
          {meshed.map((c) => <ConceptCard key={c.id} c={c} />)}
        </div>
      </div>
    </section>

    {/* ── HUB-AND-SPOKE STUDY (detached, reference) ──────────────────────────── */}
    <section className="surface-muted">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-12 md:py-20">
        <div className="border-b border-[hsl(var(--slate-200))] pb-4">
          <p className="eyebrow-blue">HUB-AND-SPOKE STUDY · 10 VARIATIONS OF S1 / S3 (REFERENCE)</p>
          <h2 className="mt-2 font-serif-display text-slate-ink text-[24px] md:text-[28px]">The network mark, as a separate symbol</h2>
        </div>
        <div className="mt-8 space-y-8">
          {hubStudy.map((c) => <ConceptCard key={c.id} c={c} />)}
        </div>
      </div>
    </section>

    {/* ── SHORTLIST · hub-and-spoke + chains + bubbles ────────────────────── */}
    <section className="surface-muted">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-12 md:py-20">
        <div className="border-b border-[hsl(var(--slate-200))] pb-4">
          <p className="eyebrow-blue">SHORTLIST · HUB-AND-SPOKE · CHAINS · WORD-OF-MOUTH (REFERENCE)</p>
          <h2 className="mt-2 font-serif-display text-slate-ink text-[24px] md:text-[28px]">Earlier shortlist - incl. the original S1 / S3</h2>
        </div>
        <div className="mt-8 space-y-8">
          {shortlist.map((c) => <ConceptCard key={c.id} c={c} />)}
        </div>
      </div>
    </section>

    {/* ── SECTION 0 · Meaning-aligned ─────────────────────────────────────── */}
    <section className="surface-muted">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-12 md:py-20">
        <div className="border-b border-[hsl(var(--slate-200))] pb-4">
          <p className="eyebrow-blue">SECTION 0 · WHAT THE BRAND STANDS FOR (REFERENCE)</p>
          <h2 className="mt-2 font-serif-display text-slate-ink text-[24px] md:text-[28px]">Meaning-aligned marks</h2>
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
          <p className="mt-3 text-[13px] italic text-[hsl(var(--slate-500))]">Loaded as <code>&lt;img&gt;</code>, so the wordmark type here is a system fallback - judge the icons.</p>
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
          <p className="mt-4 text-[17px] leading-relaxed text-white/90 max-w-[700px]">
            Give me a code - "C7", "T5" - or a hybrid: "C7 negative-space mark + T2 blue wordmark", "C6 orbit but the dot is blue", "C8 stack in two colors". When you pick, I convert the Montserrat to outlined paths and ship it as the live logo + favicon.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default LogoConcepts;
