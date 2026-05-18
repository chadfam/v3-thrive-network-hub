type Spoke = { lines: string[]; x: number; y: number };

const spokes: Spoke[] = [
  { lines: ["Realtor"], x: 250, y: 40 },
  { lines: ["Mortgage"], x: 410, y: 130 },
  { lines: ["Insurance"], x: 410, y: 290 },
  { lines: ["Home", "Services"], x: 250, y: 380 },
  { lines: ["Financial"], x: 90, y: 290 },
  { lines: ["Legal"], x: 90, y: 130 },
];

const HUB = { x: 250, y: 210 };

const PPPowerTeam = () => {
  return (
    <section className="bg-white border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2
              className="font-serif-display text-slate-ink"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              A hub-and-spoke alliance built around the{" "}
              <span className="text-brand-blue ppx-italic">family</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              At the center of every alliance is the family you all serve. Each partner becomes a spoke. When the family has a need any partner can fill, the introduction happens through someone they already trust.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              That's the Power Team. The diagram maps it out.
            </p>
          </div>

          <div>
            <svg
              viewBox="-50 -50 600 520"
              className="w-full h-auto"
              role="img"
              aria-label="Hub-and-spoke diagram with the family at the center and six professional roles around the edge, each connected to the center by a line."
            >
              {spokes.map((s) => (
                <line
                  key={`line-${s.label}`}
                  x1={HUB.x}
                  y1={HUB.y}
                  x2={s.x}
                  y2={s.y}
                  stroke="#FBBF24"
                  strokeWidth="1.5"
                  strokeOpacity="0.5"
                />
              ))}

              {spokes.map((s) => (
                <g key={`spoke-${s.lines.join("-")}`}>
                  <circle cx={s.x} cy={s.y} r="50" fill="white" stroke="#2563EB" strokeWidth="1.5" />
                  <text
                    x={s.x}
                    y={s.y - (s.lines.length - 1) * 10 + 6}
                    textAnchor="middle"
                    fontSize="18"
                    fontWeight="600"
                    fill="#0F172A"
                    fontFamily="system-ui, -apple-system, sans-serif"
                  >
                    {s.lines.map((line, i) => (
                      <tspan key={line} x={s.x} dy={i === 0 ? 0 : 20}>
                        {line}
                      </tspan>
                    ))}
                  </text>
                </g>
              ))}

              <circle cx={HUB.x} cy={HUB.y} r="66" fill="#2563EB" />
              <text x={HUB.x} y={HUB.y - 4} textAnchor="middle" fontSize="19" fontWeight="700" fill="white" fontFamily="system-ui, -apple-system, sans-serif">
                The
              </text>
              <text x={HUB.x} y={HUB.y + 20} textAnchor="middle" fontSize="22" fontWeight="700" fill="white" fontFamily="system-ui, -apple-system, sans-serif">
                Family
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PPPowerTeam;
