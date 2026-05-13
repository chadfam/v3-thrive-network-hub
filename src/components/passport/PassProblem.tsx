const PassProblem = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[760px] px-6 sm:px-8 md:px-10 py-16 md:py-32 text-center">
        <span className="block mx-auto section-accent" aria-hidden />
        <h2 className="mt-10 font-serif-display text-slate-ink tracking-section" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
          The problem with masterminds.
        </h2>
        <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          Most of the rooms worth being in are invite-only, hard to discover, and limited to small circles.
        </p>
        <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          The names you've heard of are gated by application, sponsorship, or someone vouching for you. The names you haven't heard of are sometimes the ones that change a business the most, but they're impossible to find from the outside.
        </p>
        <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          The other problem is the math. Annual membership in any one of these communities typically runs into the tens of thousands.
        </p>
        <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          Most owners can't afford to test three or four to find out which one fits. They commit to one, hope it's the right one, and find out a year and twenty thousand dollars later that it wasn't.
        </p>
        <p className="mt-10 font-serif-display italic text-slate-ink" style={{ fontSize: "clamp(1.25rem, 2.4vw, 1.5rem)" }}>
          The Passport is the response to both problems.
        </p>
      </div>
    </section>
  );
};

export default PassProblem;