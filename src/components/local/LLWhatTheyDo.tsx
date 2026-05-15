const LLWhatTheyDo = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[760px] px-6 sm:px-8 md:px-10 py-16 md:py-32 text-center">
        <div className="mx-auto section-accent" />
        <h2
          className="mt-10 font-serif-display text-slate-ink tracking-section"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
        >
          What a Local Leader does.
        </h2>
        <p className="mt-8 text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
          Most Local Leaders are already doing some version of this work. They post local recommendations on social. They get asked which contractor to use. They host the neighborhood gathering at their place. They know which parent runs the cooking class and which one runs the grief support group. The work is already there. The role names it, structures it, and makes it pay.
        </p>
        <p className="mt-6 text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
          A typical month has rhythm to it. A few posts that highlight events worth attending. One or two introductions between families and the local businesses worth knowing. A small gathering, sometimes at the leader's place, sometimes hosted by a partner. Conversations that happen in the school parking lot or at the coffee shop. Nothing performative. Just the connecting work most communities have always run on.
        </p>
        <p className="mt-12 font-serif-display italic text-slate-ink text-[20px] md:text-[24px] leading-snug">
          The role pays for what your neighborhood already gives you credit for.
        </p>
      </div>
    </section>
  );
};

export default LLWhatTheyDo;