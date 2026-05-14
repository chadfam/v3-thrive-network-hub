const stats = [
  {
    value: "F.E.E.L.",
    label: "Families, Entrepreneurs, Experts, Love. The four audiences we align.",
  },
  {
    value: "20+",
    label: "Years of family-first leadership behind the WEcosystem.",
  },
  {
    value: "0",
    label: "Algorithms standing between you and the people who already trust you.",
  },
];

const Argument = () => {
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
          More than a network. <span className="text-brand-blue ppx-italic">A movement</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[720px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          We started United to Thrive because the ad-driven internet stopped working for the people it was supposed to serve. Owners are renting attention from their own customers. Families are losing dinner-table conversation to a feed. We're a movement for everyone who'd rather build something that matters.
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

export default Argument;
