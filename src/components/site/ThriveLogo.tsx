/**
 * United to Thrive logo system.
 *
 * Lockup: the wordmark "thrive" (Montserrat ExtraBold) with the organic
 * hub-and-spoke mark growing out of the TOP-RIGHT of the "e" — a connecting
 * spoke runs from the "e" to a gold hub (United to Thrive / the family at the
 * middle of everything), and the program nodes (Profit Partners, Mastermind
 * Passport, Command Central, FAM Central, WER1, PromoEngine) spread up and to
 * the right at deliberately-irregular distances and angles. The word is woven
 * into the network; the network grew from it.
 *
 * Variants:
 *   "lockup"  — wordmark + connected mark, horizontal. The default.
 *   "mark"    — the organic mark only, square. (light weight)
 *   "favicon" — the organic mark only, square, slightly heavier (~16 px legible).
 *
 * tone: "default" (light backgrounds) | "reversed" (dark backgrounds)
 * Size with `className`, e.g. className="h-7 w-auto".
 */
import { CSSProperties } from "react";

const NAVY = "#0F172A";   // text-ink — matches site body text
const BLUE = "#2563EB";   // brand blue
const GOLD = "#FBBF24";   // brand gold
const FONT = "'Montserrat', system-ui, -apple-system, sans-serif";

type Tone = "default" | "reversed";
const colors = (tone: Tone) =>
  tone === "reversed"
    ? { spoke: "rgba(255,255,255,0.85)", navy: "rgba(255,255,255,0.78)", blue: "#FFFFFF", hub: GOLD, word: "#FFFFFF" }
    : { spoke: NAVY, navy: NAVY, blue: BLUE, hub: GOLD, word: NAVY };

// ── Standalone organic mark (used for "mark" and "favicon") ──────────────────
// 32×32 grid. Hub off-centre lower-left; six nodes at hand-tuned irregular spots.
const STAND_HUB: readonly [number, number] = [13, 16];
const STAND_NODES: ReadonlyArray<readonly [number, number, "blue" | "navy", number]> = [
  [5, 6, "navy", 1], [25, 4, "blue", 1.05], [29, 17, "navy", 0.92],
  [22, 28, "blue", 1], [7, 28, "navy", 1], [17, 10, "blue", 0.85],
];
function StandaloneMark({ tone, weight }: { tone: Tone; weight: "light" | "medium" }) {
  const { spokeW, nodeR, hubR } = weight === "medium"
    ? { spokeW: 1.25, nodeR: 2.7, hubR: 4.2 }
    : { spokeW: 0.95, nodeR: 2.4, hubR: 3.8 };
  const c = colors(tone);
  const [hx, hy] = STAND_HUB;
  return (
    <>
      {STAND_NODES.map(([x, y], i) => <line key={`s${i}`} x1={hx} y1={hy} x2={x} y2={y} stroke={c.spoke} strokeWidth={spokeW} strokeLinecap="round" />)}
      {STAND_NODES.map(([x, y, k, rs], i) => <circle key={`n${i}`} cx={x} cy={y} r={nodeR * rs} fill={k === "blue" ? c.blue : c.navy} />)}
      <circle cx={hx} cy={hy} r={hubR} fill={c.hub} />
    </>
  );
}

// ── Connected lockup geometry (44-unit cap-height grid) ──────────────────────
// "thrive" at x=4, fontSize 44, baseline y=39 → the "e" occupies roughly
// x≈101–126, x-height line at y≈17. The connecting spoke starts well INSIDE
// the "e" (≈x=116) so — whatever the exact glyph metrics — it visibly grows
// out of the e's top-right; the gold hub sits up-and-right; the program nodes
// fan up and to the right. Spoke/node weights are bumped from the "light"
// study value so the structure is actually legible at header size (~28 px).
const FS = 44;
const BASE = 39;
const E_ANCHOR: readonly [number, number] = [116, 19];   // on the "e", upper-right
const HUB: readonly [number, number] = [137, 11];        // gold hub centre
const PROG_NODES: ReadonlyArray<readonly [number, number, "blue" | "navy", number]> = [
  [127, 4, "navy", 1.05],
  [149, 4, "blue", 1.1],
  [163, 11, "navy", 0.95],
  [159, 24, "blue", 1.05],
  [140, 27, "navy", 1.0],
];
const VB_W = 168;
const LOCK_NODE_R = 2.7;
const LOCK_HUB_R = 4.4;
const LOCK_SPOKE_W = 2.0;

function LockupSvg({ tone, className, style, title }: { tone: Tone; className?: string; style?: CSSProperties; title: string }) {
  const c = colors(tone);
  const [hx, hy] = HUB;
  return (
    <svg viewBox={`0 0 ${VB_W} 44`} className={className} style={style} role="img" aria-label={title}>
      <title>{title}</title>
      <text x={4} y={BASE} fontFamily={FONT} fontWeight={800} fontSize={FS} letterSpacing={FS * -0.034} fill={c.word}>thrive</text>
      {/* connecting spoke: out of the "e" → the hub */}
      <line x1={E_ANCHOR[0]} y1={E_ANCHOR[1]} x2={hx} y2={hy} stroke={c.spoke} strokeWidth={LOCK_SPOKE_W} strokeLinecap="round" />
      {/* spokes: hub → each program node */}
      {PROG_NODES.map(([x, y], i) => <line key={`s${i}`} x1={hx} y1={hy} x2={x} y2={y} stroke={c.spoke} strokeWidth={LOCK_SPOKE_W} strokeLinecap="round" />)}
      {/* program nodes */}
      {PROG_NODES.map(([x, y, k, rs], i) => <circle key={`n${i}`} cx={x} cy={y} r={LOCK_NODE_R * rs} fill={k === "blue" ? c.blue : c.navy} />)}
      {/* the gold hub */}
      <circle cx={hx} cy={hy} r={LOCK_HUB_R} fill={c.hub} />
    </svg>
  );
}

export type ThriveLogoProps = {
  variant?: "lockup" | "mark" | "favicon";
  tone?: Tone;
  className?: string;
  style?: CSSProperties;
  title?: string;
};

export default function ThriveLogo({
  variant = "lockup",
  tone = "default",
  className,
  style,
  title = "United to Thrive",
}: ThriveLogoProps) {
  if (variant === "mark" || variant === "favicon") {
    return (
      <svg viewBox="0 0 32 32" className={className} style={style} role="img" aria-label={title}>
        <title>{title}</title>
        <StandaloneMark tone={tone} weight={variant === "favicon" ? "medium" : "light"} />
      </svg>
    );
  }
  return <LockupSvg tone={tone} className={className} style={style} title={title} />;
}
