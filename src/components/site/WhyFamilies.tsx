const pains = [
  {
    word: "Disconnected",
    label: "Families pulled apart by feeds, screens, and the slow drift of modern life.",
  },
  {
    word: "Drowned out",
    label: "Owners renting attention from algorithms that change the rules every quarter.",
  },
  {
    word: "Buried",
    label: "Experts and causes whose work changes lives, lost under noise meant to keep us scrolling.",
  },
];

const WhyFamilies = () => {
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
          Built for the people <span className="text-brand-blue ppx-italic">the algorithm forgot</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[720px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          We replaced paid attention with real partnerships. The people who already trust each other do the work together, where they live.
        </p>

        <div className="mt-16 md:mt-20 grid sm:grid-cols-3 gap-10 md:gap-8">
          {pains.map((p) => (
            <div key={p.word}>
              <p
                className="font-serif-display text-brand-blue leading-none"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.015em" }}
              >
                {p.word}
              </p>
              <p className="mt-4 mx-auto max-w-[280px] text-[14px] md:text-[15px] leading-relaxed text-[hsl(var(--slate-700))]">
                {p.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-16 md:mt-20 font-serif-display italic text-slate-ink mx-auto max-w-[820px]" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", lineHeight: 1.3 }}>
          A customer who recommends you to three other parents in the school pickup line beats ten Facebook clicks every time.
        </p>
      </div>
    </section>
  );
};

export default WhyFamilies;
