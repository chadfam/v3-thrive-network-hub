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
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2
            className="font-serif-display text-slate-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            A raise for your team, without raising payroll.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[720px] mx-auto">
            The math works for both sides because the IRS structures it that way. Employees redirect a portion of pre-tax pay toward qualified wellness benefits, and the business saves on the employer FICA owed on those same dollars.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-10 md:gap-8 text-center">
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
