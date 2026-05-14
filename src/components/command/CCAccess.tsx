import { Link } from "react-router-dom";

const rows = [
  { tier: "Profit Partner", access: "Selected services on request, case-by-case" },
  { tier: "Mastermind", access: "Selected services on request, case-by-case" },
  { tier: "Inner Circle", access: "Full bench, on-demand, all five disciplines" },
];

const CCAccess = () => {
  return (
    <section className="bg-brand-blue/5 border-t border-slate-ink/10">
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
              How to access <span className="text-brand-blue ppx-italic">Command Central</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Command Central is included at the Inner Circle tier of Profit Partners. Members at that tier have on-demand access across all five disciplines without per-engagement upcharges from the network.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Specific partners may carry their own service fees. Those are pre-priced and visible inside the platform before any work begins.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              At Profit Partner and Mastermind tiers, individual services can be requested on a case-by-case basis. The full bench unlocks at Inner Circle.
            </p>

            <Link
              to="/profit-partners"
              className="group mt-10 inline-flex items-center text-[15px] font-semibold text-brand-blue"
            >
              See more on Profit Partners
              <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div>
            <div
              className="rounded-2xl bg-white p-7 sm:p-9 md:p-10"
              style={{ border: "1px solid #E0E3E7" }}
            >
              <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[hsl(var(--slate-500))]">
                Command Central access by tier
              </p>
              <div className="mt-7">
                {rows.map((r, i) => (
                  <div
                    key={r.tier}
                    className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1 sm:gap-4 py-5"
                    style={i > 0 ? { borderTop: "1px solid #E0E3E7" } : undefined}
                  >
                    <span className="font-serif-display text-[18px] md:text-[20px] text-slate-ink leading-snug">
                      {r.tier}
                    </span>
                    <span className="text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                      {r.access}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCAccess;
