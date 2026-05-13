const FGWhatTheyDo = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[760px] px-6 sm:px-8 md:px-10 py-16 md:py-32 text-center">
        <div className="mx-auto section-accent" />
        <h2
          className="mt-10 font-serif-display text-slate-ink tracking-section"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
        >
          The work, plainly.
        </h2>
        <p className="mt-8 text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
          Most parents are doing fine on the structural stuff. Health insurance. After-school activities. College savings. The bedtime routine that mostly works.
        </p>
        <p className="mt-6 text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
          What's missing isn't structural. It's the connecting work that holds a family together:
        </p>
        <ul className="mt-6 mx-auto max-w-[580px] space-y-4 text-left">
          <li className="flex items-start gap-3">
            <span aria-hidden className="bullet-dot" />
            <span className="text-[16px] md:text-[18px] leading-relaxed text-[hsl(var(--slate-700))]">
              Phone-free dinners that don't fall apart by Wednesday.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span aria-hidden className="bullet-dot" />
            <span className="text-[16px] md:text-[18px] leading-relaxed text-[hsl(var(--slate-700))]">
              Hard conversations with teenagers that don't end in slammed doors.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span aria-hidden className="bullet-dot" />
            <span className="text-[16px] md:text-[18px] leading-relaxed text-[hsl(var(--slate-700))]">
              Weekly rhythms that don't require an app to remember.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span aria-hidden className="bullet-dot" />
            <span className="text-[16px] md:text-[18px] leading-relaxed text-[hsl(var(--slate-700))]">
              Values that get transmitted on purpose instead of by accident.
            </span>
          </li>
        </ul>
        <p className="mt-8 text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
          FAM Guides coach families through that work. It starts with the FAM Plan: the family's own plan for feeling more connected. One-on-one or in small cohorts.
        </p>
        <p className="mt-6 text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
          The model is closer to a fitness coach than a therapist. Recurring, results-oriented, low-friction. You're helping families build the patterns they've been telling each other they want, but haven't quite gotten to.
        </p>
        <p className="mt-12 font-serif-display italic text-slate-ink text-[20px] md:text-[24px] leading-snug">
          Real outcomes families can name out loud six months in.
        </p>
      </div>
    </section>
  );
};

export default FGWhatTheyDo;