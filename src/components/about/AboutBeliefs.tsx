const principles = [
  {
    num: "01",
    name: "The chain is the point.",
    body: "Most networks pay one person per deal. We pay everyone in the chain that made the deal happen, so the chain holds together.",
  },
  {
    num: "02",
    name: "Reputation is a 20-year asset.",
    body: "Marketing tactics depreciate the moment the algorithm changes. Reputation accumulates. Our owners think in decades, not quarters.",
  },
  {
    num: "03",
    name: "Families are the math.",
    body: "A customer who recommends you to three other parents at school pickup is worth more than ten Facebook clicks. We built the network around that arithmetic.",
  },
  {
    num: "04",
    name: "Movement, not campaigns.",
    body: "We don't run marketing campaigns or pay influencers per post. We build connected economies where introductions move outward and the platform pays everyone the introduction touched.",
  },
];

const AboutBeliefs = () => {
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
          Four principles. <span className="text-brand-blue ppx-italic">One network</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[640px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          The beliefs that show up in the way the network is built and the way it runs every day.
        </p>

        <div className="mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 text-left">
          {principles.map((p) => (
            <article
              key={p.num}
              className="rounded-2xl bg-white p-7 md:p-8 border border-slate-ink/10 flex flex-col"
            >
              <span className="font-serif-display text-brand-blue text-[18px] tracking-tight">
                {p.num}
              </span>
              <h3 className="mt-5 font-serif-display text-[20px] md:text-[22px] leading-tight text-slate-ink">
                {p.name}
              </h3>
              <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutBeliefs;
