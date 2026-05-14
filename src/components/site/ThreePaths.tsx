const feel = [
  {
    letter: "F",
    name: "Families",
    body: "Find trusted people, businesses, experts, and experiences that strengthen real life at home. Save and earn for sharing what you already love.",
  },
  {
    letter: "E",
    name: "Entrepreneurs",
    body: "Grow through the families who already trust you and the partners who serve them, instead of ad spend you can't control.",
  },
  {
    letter: "E",
    name: "Experts",
    body: "Reach the audience your work was built for. Get rewarded for the impact, not just the impressions.",
  },
  {
    letter: "L",
    name: "Love (Charities)",
    body: "Causes and community organizations monetize their reach by recommending the people and resources families already need.",
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
          Four audiences inside <span className="text-brand-blue ppx-italic">F.E.E.L.</span>
        </h2>

        <p className="mt-8 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          F.E.E.L. is the framework underneath everything we make. Four audiences, one community, aligned around the people they all share.
        </p>

        <div className="mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 text-left">
          {feel.map((f) => (
            <article
              key={f.name}
              className="rounded-2xl bg-white p-7 md:p-8 border border-slate-ink/10 flex flex-col"
            >
              <span className="font-serif-display text-brand-blue text-[40px] md:text-[48px] leading-none tracking-tight">
                {f.letter}
              </span>
              <h3 className="mt-5 font-serif-display text-[20px] md:text-[22px] leading-tight text-slate-ink">
                {f.name}
              </h3>
              <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePaths;
