import { Link } from "react-router-dom";

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

const benefits = [
  "Monthly mastermind days with values-aligned owners",
  "Co-marketing campaigns across the alliance",
  "Promoted inside FAM Central to the families already using it",
  "Category exclusivity, one per industry per market",
];

const BizProfitPartners = () => {
  return (
    <section id="profit-partners" className="scroll-mt-24 bg-white border-t border-slate-ink/10">
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
              Profit Partners™. <span className="text-brand-blue ppx-italic">The alliance</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              A working alliance of complementary business owners actively recommending each other to the families they already serve. The flagship offering inside United to Thrive, and the one application that opens everything else.
            </p>

            <ul className="mt-10 space-y-4 max-w-[560px]">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span aria-hidden className="bullet-dot" />
                  <span className="text-[16px] md:text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-10 font-serif-display italic text-slate-ink text-[18px] md:text-[20px] leading-snug max-w-[560px]">
              Your own power team. Built formally, with skin in the game on every introduction.
            </p>

            <Link
              to="/profit-partners"
              className="group mt-10 inline-flex items-center text-[15px] font-semibold text-brand-blue"
            >
              See what's included
              <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div>
            <div className="relative w-full">
              <svg
                viewBox="0 0 500 420"
                className="w-full h-auto"
                role="img"
                aria-label="Hub-and-spoke diagram with the homeowner at the center and six professional roles around the edge, each connected to the center by a line."
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BizProfitPartners;
