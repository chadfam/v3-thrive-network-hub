const NAVY = "#0F172A";
const BLUE = "#2563EB";
const GOLD = "#FBBF24";
const MUTED = "#94A3B8";

// Six pros who serve the same homeowner. Order is clockwise from the top.
const pros = [
  { name: "Realtor",        angleDeg: -90 },
  { name: "Mortgage lender", angleDeg: -30 },
  { name: "Accountant",      angleDeg:  30 },
  { name: "Roofer",          angleDeg:  90 },
  { name: "Plumber",         angleDeg: 150 },
  { name: "Painter",         angleDeg: 210 },
];

// Diagram geometry (square, 800x800 viewBox)
const CX = 400, CY = 400;
const R_SPOKE = 240;   // distance from hub to each node center
const R_NODE  = 32;    // node circle radius
const R_HUB   = 62;    // hub circle radius

const pt = (angleDeg: number, radius: number) => {
  const a = (angleDeg * Math.PI) / 180;
  return { x: CX + Math.cos(a) * radius, y: CY + Math.sin(a) * radius };
};

const PPPowerTeam = () => {
  return (
    <section id="power-team" className="bg-background scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <h2
              className="font-serif-display text-slate-ink tracking-section"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
            >
              Your power team.
            </h2>
            <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
              Every homeowner already pays a circle of professionals: a realtor when they buy, a mortgage lender to finance it, painters and plumbers and roofers to keep it, accountants to make sense of it. Those businesses serve the same family every day. None of them usually send each other work.
            </p>
            <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
              Profit Partners formalizes the connections between them. Think of it as your own private chapter, organized around the customer you both already serve. Every introduction goes both ways, every introduction gets tracked, and every introduction pays whoever made it.
            </p>
            <p className="mt-6 italic text-[15px] text-[hsl(var(--slate-500))]">
              We use the homeowner as the hub because homeowners are the most concentrated, recurring customer in the country. Renters don't pay to fix the roof.
            </p>
            <a href="#benefits" className="mt-8 inline-block text-[15px] text-slate-ink hover:text-brand-blue transition-colors underline-offset-4 hover:underline">
              See what's included in the alliance →
            </a>
          </div>

          <div className="md:col-span-7 order-1 md:order-2">
            <svg
              viewBox="0 0 800 800"
              className="w-full h-auto max-w-[640px] mx-auto"
              role="img"
              aria-label="Hub-and-spoke diagram. A homeowner at the center is connected by lines to six surrounding professionals: realtor, mortgage lender, accountant, roofer, plumber, and painter."
            >
              {/* spokes */}
              {pros.map((p) => {
                const end = pt(p.angleDeg, R_SPOKE);
                // shorten the line so it stops at the node edge (not center)
                const dx = end.x - CX, dy = end.y - CY;
                const len = Math.hypot(dx, dy);
                const trimStart = R_HUB + 4;
                const trimEnd = len - (R_NODE + 4);
                const x1 = CX + (dx / len) * trimStart;
                const y1 = CY + (dy / len) * trimStart;
                const x2 = CX + (dx / len) * trimEnd;
                const y2 = CY + (dy / len) * trimEnd;
                return (
                  <line
                    key={`spoke-${p.name}`}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke={BLUE}
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.55"
                  />
                );
              })}

              {/* pro nodes + labels */}
              {pros.map((p) => {
                const c = pt(p.angleDeg, R_SPOKE);
                // label sits a bit further out from the node, biased outward
                const labelPos = pt(p.angleDeg, R_SPOKE + R_NODE + 26);
                // anchor based on horizontal angle so labels stay readable
                const cos = Math.cos((p.angleDeg * Math.PI) / 180);
                const anchor: "start" | "middle" | "end" = cos > 0.35 ? "start" : cos < -0.35 ? "end" : "middle";
                return (
                  <g key={`node-${p.name}`}>
                    <circle cx={c.x} cy={c.y} r={R_NODE} fill="#FFFFFF" stroke={BLUE} strokeWidth="2" />
                    <circle cx={c.x} cy={c.y} r={R_NODE / 3.2} fill={BLUE} />
                    <text
                      x={labelPos.x}
                      y={labelPos.y}
                      textAnchor={anchor}
                      dominantBaseline="middle"
                      fontFamily="'Montserrat', system-ui, -apple-system, sans-serif"
                      fontSize="22"
                      fontWeight="600"
                      fill={NAVY}
                    >
                      {p.name}
                    </text>
                  </g>
                );
              })}

              {/* the homeowner hub */}
              <circle cx={CX} cy={CY} r={R_HUB + 10} fill="none" stroke={GOLD} strokeWidth="2" strokeDasharray="2 6" opacity="0.7" />
              <circle cx={CX} cy={CY} r={R_HUB} fill={NAVY} />
              <text
                x={CX}
                y={CY - 4}
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="'Montserrat', system-ui, -apple-system, sans-serif"
                fontSize="20"
                fontWeight="700"
                fill="#FFFFFF"
              >
                Homeowner
              </text>
              <text
                x={CX}
                y={CY + 22}
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="'Montserrat', system-ui, -apple-system, sans-serif"
                fontSize="13"
                fontWeight="500"
                fill={MUTED}
                letterSpacing="0.04em"
              >
                family at the center
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PPPowerTeam;
