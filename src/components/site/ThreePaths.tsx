const steps = [
  {
    num: "01",
    name: "Find your people",
    body: "Apply once, and we match you to the WEcosystem role that fits: business owner, community leader, expert, or cause. One front door, many ways in.",
  },
  {
    num: "02",
    name: "Build real connection",
    body: "Monthly masterminds, neighborhood gatherings, family events, expert content. The trust-based work that the internet stopped doing for you.",
  },
  {
    num: "03",
    name: "Strengthen the families you serve",
    body: "FAM Central is the consumer side of the WEcosystem. Your business, your wisdom, your cause shows up where families are already looking for it.",
  },
  {
    num: "04",
    name: "Grow as the network grows",
    body: "Every introduction strengthens the people on both ends of it. The platform pays the chain that made it happen, automatically.",
  },
];

const ThreePaths = () => {
  return (
    <section className="bg-[hsl(220_30%_98%)] border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display text-slate-ink mx-auto max-w-[820px]"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          Four steps. One WEcosystem. <span className="text-brand-blue ppx-italic">Real connection</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[640px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          A clear path from wherever you are now into a network built on family, partnership, and shared growth.
        </p>

        <div className="mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 text-left">
          {steps.map((s) => (
            <article
              key={s.num}
              className="rounded-2xl bg-white p-7 md:p-8 border border-slate-ink/10 flex flex-col"
            >
              <span className="font-serif-display text-brand-blue text-[18px] tracking-tight">
                {s.num}
              </span>
              <h3 className="mt-5 font-serif-display text-[20px] md:text-[22px] leading-tight text-slate-ink">
                {s.name}
              </h3>
              <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePaths;
