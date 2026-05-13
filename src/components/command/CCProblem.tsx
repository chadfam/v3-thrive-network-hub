const CCProblem = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 md:px-10 py-16 md:py-32 text-center">
        <div className="mx-auto section-accent" />
        <h2
          className="mt-8 font-serif-display text-slate-ink tracking-section"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
        >
          Why we built this.
        </h2>
        <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          Most owners spend years cycling through vendors:
        </p>
        <ul className="mt-5 mx-auto max-w-[440px] space-y-3 text-left">
          <li className="flex items-start gap-3 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            <span aria-hidden className="bullet-dot" />
            <span>The marketing person who didn't deliver.</span>
          </li>
          <li className="flex items-start gap-3 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            <span aria-hidden className="bullet-dot" />
            <span>The bookkeeper who left at tax season.</span>
          </li>
          <li className="flex items-start gap-3 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            <span aria-hidden className="bullet-dot" />
            <span>The lawyer who billed for the call where they said hello.</span>
          </li>
        </ul>
        <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          By the third or fourth one you stop trusting recommendations entirely. Eventually you give up and pay full retail at a name-brand firm. That solves the trust problem and creates a billing problem.
        </p>
        <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          Command Central is the response. A bench of vetted partners across the disciplines you actually need. Each one is accountable to the network because their next referral depends on the last one going well.
        </p>
        <p className="mt-10 font-serif-display italic text-slate-ink text-[20px] md:text-[24px]">
          Skin in the game on both sides.
        </p>
      </div>
    </section>
  );
};

export default CCProblem;