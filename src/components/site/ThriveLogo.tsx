/**
 * United to Thrive logo system.
 *
 * Lockup: the wordmark "thrive" (Montserrat ExtraBold) with the organic
 * hub-and-spoke mark growing out of the TOP-RIGHT of the "e" - a connecting
 * spoke runs from inside the "e" to a central hub, and the six program nodes
 * (Profit Partners, Mastermind Passport, Command Central, FAM Central, WER1,
 * PromoEngine) fan out from the hub at deliberately-irregular distances and
 * angles: a network that *grew*, not a diagram. The word is woven into the
 * network. The whole mark is brand blue (#2563EB) - single colour, no gold.
 *
 * Variants:
 *   "lockup"  - wordmark + connected mark, horizontal. The default.
 *   "mark"    - the organic mark only, square. (light weight)
 *   "favicon" - the organic mark only, square, slightly heavier (~16 px legible).
 *
 * tone: "default" (light backgrounds) | "reversed" (dark backgrounds)
 * Size with `className`, e.g. className="h-7 w-auto".
 */
import { CSSProperties } from "react";

const NAVY = "#0F172A";   // text-ink - wordmark
const BLUE = "#2563EB";   // brand blue - the whole mark
const FONT = "'Montserrat', system-ui, -apple-system, sans-serif";

type Tone = "default" | "reversed";
const colors = (tone: Tone) =>
  tone === "reversed"
    ? { stroke: "rgba(255,255,255,0.92)", node: "#FFFFFF", hub: "#FFFFFF", word: "#FFFFFF" }
    : { stroke: BLUE, node: BLUE, hub: BLUE, word: NAVY };

// ── The organic mark - one shape, used everywhere ────────────────────────────
// 32×32 grid. Hub off-centre (left of, and level with, the middle); six nodes
// at hand-tuned irregular spots so it reads as a real network rather than a
// neat star. Spokes run hub → each node. Entirely brand blue.
const STAND_HUB: readonly [number, number] = [13, 16];
const STAND_NODES: ReadonlyArray<readonly [number, number, number]> = [
  [5, 6, 1], [25, 4, 1.05], [29, 17, 0.92],
  [22, 28, 1], [7, 28, 1], [17, 10, 0.85],
];
function StandaloneMark({ tone, weight }: { tone: Tone; weight: "light" | "medium" }) {
  const { spokeW, nodeR, hubR } = weight === "medium"
    ? { spokeW: 1.25, nodeR: 2.7, hubR: 4.2 }
    : { spokeW: 0.95, nodeR: 2.4, hubR: 3.8 };
  const c = colors(tone);
  const [hx, hy] = STAND_HUB;
  return (
    <>
      {STAND_NODES.map(([x, y], i) => <line key={`s${i}`} x1={hx} y1={hy} x2={x} y2={y} stroke={c.stroke} strokeWidth={spokeW} strokeLinecap="round" />)}
      {STAND_NODES.map(([x, y, rs], i) => <circle key={`n${i}`} cx={x} cy={y} r={nodeR * rs} fill={c.node} />)}
      <circle cx={hx} cy={hy} r={hubR} fill={c.hub} />
    </>
  );
}

// ── Connected lockup geometry (44-unit cap-height grid) ──────────────────────
// "thrive" at x=4, fontSize 44, baseline y=39 → the "e" occupies roughly
// x≈101–126. The connecting spoke starts well INSIDE the "e" (≈x=116) so it
// visibly grows out of the e's top-right and runs to the hub; the six program
// nodes fan out from the hub in the same irregular spread as the standalone
// mark (S3 study, scaled up). Spoke/node weights are bumped from the standalone
// "light" study so the structure stays legible at header size (~28 px).
const FS = 44;
const BASE = 39;
const E_ANCHOR: readonly [number, number] = [116, 18];   // on the "e", upper-right
const LOCK_HUB: readonly [number, number] = [143, 21];   // central hub
const LOCK_NODES: ReadonlyArray<readonly [number, number, number]> = [
  [133, 8, 1.05],    // upper-left - nearest the "e"
  [158, 6, 1.1],     // top
  [163, 22, 0.95],   // right
  [154, 36, 1.05],   // lower-right
  [136, 36, 1.0],    // lower-left
  [148, 13, 0.9],    // inner upper
];
const VB_W = 168;
const LOCK_NODE_R = 2.7;
const LOCK_HUB_R = 4.4;
const LOCK_SPOKE_W = 2.0;

function LockupSvg({ tone, className, style, title }: { tone: Tone; className?: string; style?: CSSProperties; title: string }) {
  const c = colors(tone);
  const [hx, hy] = LOCK_HUB;
  return (
    <svg viewBox={`0 0 ${VB_W} 44`} className={className} style={style} role="img" aria-label={title}>
      <title>{title}</title>
      <text x={4} y={BASE} fontFamily={FONT} fontWeight={800} fontSize={FS} letterSpacing={FS * -0.034} fill={c.word}>thrive</text>
      {/* connecting spoke: out of the "e" → the hub */}
      <line x1={E_ANCHOR[0]} y1={E_ANCHOR[1]} x2={hx} y2={hy} stroke={c.stroke} strokeWidth={LOCK_SPOKE_W} strokeLinecap="round" />
      {/* spokes: hub → each program node */}
      {LOCK_NODES.map(([x, y], i) => <line key={`s${i}`} x1={hx} y1={hy} x2={x} y2={y} stroke={c.stroke} strokeWidth={LOCK_SPOKE_W} strokeLinecap="round" />)}
      {/* program nodes */}
      {LOCK_NODES.map(([x, y, rs], i) => <circle key={`n${i}`} cx={x} cy={y} r={LOCK_NODE_R * rs} fill={c.node} />)}
      {/* the hub */}
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
