const CCGuide = () => {
  return (
    <section className="bg-background border-t border-slate-ink/10">
      <div className="mx-auto max-w-[820px] px-6 sm:px-8 md:px-10 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display text-slate-ink tracking-section"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
        >
          A curated group, chosen for the <span className="text-brand-blue ppx-italic">quality of their work</span>.
        </h2>

        <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))]">
          Command Central is a defined set of advisors, experts, and service providers the team has worked alongside and stands behind. It is not a marketplace, a directory, or a list of names that paid for placement.
        </p>

        <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))]">
          That distinction is the whole point. A directory hands you a long list and leaves the hard part, deciding who is worth a call, exactly where it was. A curated group hands you people already screened on the one thing that matters: the quality of their work.
        </p>

        <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))]">
          Inclusion is reviewed before anyone is introduced.
        </p>

        <p className="mt-10 font-serif-display italic text-slate-ink text-[18px] md:text-[22px] leading-snug">
          Chosen for their work. Ready before you need them.
        </p>
      </div>
    </section>
  );
};

export default CCGuide;
