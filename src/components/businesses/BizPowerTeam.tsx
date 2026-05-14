type Spoke = { label: string; x: number; y: number };

const spokes: Spoke[] = [
  { label: "Realtor", x: 250, y: 40 },
  { label: "Mortgage", x: 410, y: 130 },
  { label: "Insurance", x: 410, y: 290 },
  { label: "Home Services", x: 250, y: 380 },
  { label: "Financial", x: 90, y: 290 },
  { label: "Legal", x: 90, y: 130 },
];

const HUB = { x: 250, y: 210 };

const BizPowerTeam = () => {
  return (
    <section className="surface-muted">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <span className="block h-0.5 w-20 bg-brand-gold rounded-full mb-8" aria-hidden />
            <h2 className="font-serif-display section-headline text-slate-ink">
              Your own power team.
            </h2>
            <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[560px]">
              The homeowner sits at the center. The professionals who serve them every day surround them. Each one trusted, each one paid to keep that trust intact.
            </p>

            <ul className="mt-10 space-y-4 max-w-[560px]">
              <li className="flex items-start gap-3">
                <span aria-hidden className="bullet-dot" />
                <span className="text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                  Your realtor, mortgage lender, insurance agent, home services pros, financial advisor, and attorney, all sending each other work.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden className="bullet-dot" />
                <span className="text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                  Trust is already in place. The homeowner doesn't need to find the next professional. The professional they already trust sends them.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden className="bullet-dot" />
                <span className="text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                  Profit Partners builds this team formally. One per category in each market. Cross-promotion runs through FAM Central. Earning runs through WER1.
                </span>
              </li>
            </ul>

            <p className="mt-10 font-serif-display italic text-slate-ink text-[18px] md:text-[20px] leading-snug max-w-[520px]">
              Your own B&amp;I chapter. Except this one is built to send each other business, not just network.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative w-full">
              <svg
                viewBox="0 0 500 420"
                className="w-full h-auto"
                role="img"
                aria-label="Hub-and-spoke diagram with the homeowner at the center and six professional roles around the edge, each connected to the center by a line."
              >
                {/* Connecting spokes */}
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

                {/* Outer spoke circles */}
                {spokes.map((s) => (
                  <g key={`spoke-${s.label}`}>
                    <circle
                      cx={s.x}
                      cy={s.y}
                      r="42"
                      fill="white"
                      stroke="#2563EB"
                      strokeWidth="1.5"
                    />
                    <text
                      x={s.x}
                      y={s.y + 4}
                      textAnchor="middle"
                      fontSize="13"
                      fontWeight="600"
                      fill="#0F172A"
                      fontFamily="system-ui, -apple-system, sans-serif"
                    >
                      {s.label}
                    </text>
                  </g>
                ))}

                {/* Center hub */}
                <circle cx={HUB.x} cy={HUB.y} r="62" fill="#2563EB" />
                <text
                  x={HUB.x}
                  y={HUB.y - 4}
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="700"
                  fill="white"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  The
                </text>
                <text
                  x={HUB.x}
                  y={HUB.y + 14}
                  textAnchor="middle"
                  fontSize="16"
                  fontWeight="700"
                  fill="white"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  Homeowner
                </text>
              </svg>

              <p className="mt-6 text-center text-[13px] italic text-[hsl(var(--slate-500))]">
                Profit Partners on the B2C side. Same model also runs B2B for partners serving other businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BizPowerTeam;
