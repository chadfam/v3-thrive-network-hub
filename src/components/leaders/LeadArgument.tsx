const stats = [
  {
    value: "0",
    label: "Extra hours required. You're already doing this work in your community.",
  },
  {
    value: "1",
    label: "Trusted connector per industry per area. Category exclusivity protected.",
  },
  {
    value: "$3-10k",
    label: "Monthly earnings most active Local Leaders see within their first year.",
  },
];

const LeadArgument = () => {
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
          Get paid for what you <span className="text-brand-blue ppx-italic">already do</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[720px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          You're already the person your neighbors text for recommendations. You're already running the parent group, the workshop, the introductions. United to Thrive turns that role into a position.
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

export default LeadArgument;
