const stats = [
  { number: "$640+", label: "Annual tax savings for the business, per participating employee" },
  { number: "$1,500+", label: "Extra take-home pay for each participating employee, annually" },
  { number: "0", label: "Disruption to the insurance you already offer" },
];

const TWHStats = () => {
  return (
    <section className="bg-background border-t border-b" style={{ borderColor: "#E0E3E7" }}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center md:px-8 ${
                i > 0 ? "md:border-l border-t md:border-t-0 pt-10 md:pt-0" : ""
              }`}
              style={{ borderColor: "#E0E3E7" }}
            >
              <p
                className="font-serif-display"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1, color: "#1D4ED8" }}
              >
                {s.number}
              </p>
              <p className="mt-4 mx-auto max-w-[280px] text-[14px] text-[hsl(var(--slate-700))] leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center italic text-[14px] text-[hsl(var(--slate-500))] max-w-[720px] mx-auto">
          Actual savings vary by employee compensation, participation level, and state tax rates. Plan administration fees apply.
        </p>
      </div>
    </section>
  );
};

export default TWHStats;