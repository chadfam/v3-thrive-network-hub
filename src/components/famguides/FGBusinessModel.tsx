const items = [
  {
    label: "Recurring monthly engagements",
    desc: "Most one-on-one family work runs as a monthly retainer. Predictable revenue, predictable rhythm.",
  },
  {
    label: "Cohort programs",
    desc: "Groups of families running through a structured program for 4 to 12 weeks. Higher per-family economics, lower hours per family.",
  },
  {
    label: "Specialty intensives",
    desc: "Shorter higher-priced engagements for specific transitions or events. Empty nest. Pre-marriage. Family business succession.",
  },
  {
    label: "Network attribution",
    desc: "Through WER1, when you bring families into the FAM Central platform, you continue to earn from their broader platform activity.",
  },
];

const FGBusinessModel = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-7">
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-[hsl(var(--slate-500))]">
              HOW THE PRACTICE RUNS
            </p>
            <h2
              className="mt-6 font-serif-display text-slate-ink tracking-section"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
            >
              Recurring revenue. No reinventing the offer.
            </h2>
            <p className="mt-8 max-w-[540px] text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
              Most coaches and counselors burn out on the operational layer of their own practice. New clients every month. New offers to sell. New billing problems. New scheduling tetris.
            </p>
            <p className="mt-5 max-w-[540px] text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
              The practice never stabilizes because the operating model doesn't.
            </p>
            <p className="mt-6 max-w-[540px] text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
              FAM Guides operate inside a different structure. Engagements are recurring by default. Cohorts run on a calendar. The platform handles billing, scheduling, and family matching.
            </p>
            <p className="mt-5 max-w-[540px] text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
              Your job is the coaching. Your revenue accumulates from the families and cohorts you serve well, not from how loud you can be on social media.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="bg-background rounded-2xl p-10 border" style={{ borderColor: "#E0E3E7" }}>
              <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-[hsl(var(--slate-500))]">
                HOW REVENUE IS STRUCTURED
              </p>
              <ul className="mt-6">
                {items.map((it, i) => (
                  <li
                    key={it.label}
                    className={`py-5 ${i > 0 ? "border-t" : ""}`}
                    style={{ borderColor: "#E0E3E7" }}
                  >
                    <p className="text-[15px] font-medium text-slate-ink">{it.label}</p>
                    <p className="mt-2 text-[15px] text-[hsl(var(--slate-700))] leading-relaxed">
                      {it.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FGBusinessModel;