const values = [
  {
    name: "Family First",
    body: "Every decision is judged by whether it strengthens families and the relationships that hold them together.",
  },
  {
    name: "Connection over addiction",
    body: "We design for real experiences and meaningful participation, not the endless scroll.",
  },
  {
    name: "Ownership over consumption",
    body: "Families and owners show up as contributors, leaders, and creators. Not passive consumers.",
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
          Help families <span className="text-brand-blue ppx-italic">F.E.E.L.</span> again.
        </h2>

        <p className="mt-8 mx-auto max-w-[720px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          United to Thrive is a family-first community connecting business owners, community leaders, and trusted experts to the families they serve.
        </p>

        <p className="mt-6 mx-auto max-w-[720px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          We exist to help families reconnect, build meaningful relationships, and live stronger lives. Every introduction inside the network strengthens the people on both sides of it. F.E.E.L. is the framework. Movement is the goal.
        </p>

        <div className="mt-16 md:mt-20 grid sm:grid-cols-3 gap-8 md:gap-10 text-left">
          {values.map((v) => (
            <div key={v.name} className="border-t border-brand-blue/30 pt-6">
              <p className="font-serif-display text-brand-blue text-[22px] md:text-[26px] leading-tight">
                {v.name}
              </p>
              <p className="mt-3 text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Argument;
