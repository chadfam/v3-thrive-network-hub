const stats = [
  {
    value: "$640+",
    label: "Annual payroll-tax savings for the business, per participating employee.",
  },
  {
    value: "$1,500+",
    label: "Extra take-home pay for each participating employee, annually.",
  },
  {
    value: "0",
    label: "Disruption to the health insurance you already offer.",
  },
];

const TWHStats = () => {
  return (
    <section className="bg-brand-blue/5 border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1080px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display text-slate-ink mx-auto max-w-[920px]"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          A raise for your team. <span className="text-brand-blue ppx-italic">Without raising payroll</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[720px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          The math works for both sides because the IRS structures it that way. Employees redirect a portion of pre-tax pay toward qualified wellness benefits, and the business saves on the employer FICA owed on those same dollars.
        </p>

        <div className="mt-16 md:mt-20 grid sm:grid-cols-3 gap-10 md:gap-8">
          {stats.map((s) => (
            <div key={s.value}>
              <p
                className="font-serif-display text-brand-blue leading-none"
                style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)", letterSpacing: "-0.02em" }}
              >
                {s.value}
              </p>
              <p className="mt-4 mx-auto max-w-[260px] text-[14px] md:text-[15px] leading-relaxed text-[hsl(var(--slate-700))]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TWHStats;
