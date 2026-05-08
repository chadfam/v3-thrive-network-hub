const FGWhatTheyDo = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[760px] px-6 sm:px-8 md:px-10 py-16 md:py-32 text-center">
        <div className="mx-auto h-[2px] w-20 bg-gradient-warm" />
        <h2
          className="mt-10 font-serif-display text-slate-ink tracking-section"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
        >
          The work, plainly.
        </h2>
        <p className="mt-8 text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
          Most parents are doing fine on the structural stuff. Health insurance, after-school activities, college savings, the bedtime routine that mostly works. The thing that's missing isn't structural. It's the connecting work that actually holds a family together. Phone-free dinners that don't fall apart by Wednesday. Hard conversations with teenagers that don't end in slammed doors. Weekly rhythms that don't require an app to remember. Values that get transmitted on purpose instead of by accident.
        </p>
        <p className="mt-6 text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
          FAM Guides coach families through that work. One-on-one or in small cohorts. The model is closer to how a fitness coach gets paid than how a therapist does. Recurring, results-oriented, low-friction. You're not running diagnostics or treating disorders. You're helping families build the patterns they've been telling each other they want to build but haven't quite gotten to.
        </p>
        <p className="mt-12 font-serif-display italic text-slate-ink text-[20px] md:text-[24px] leading-snug">
          Real outcomes families can name out loud six months in.
        </p>
      </div>
    </section>
  );
};

export default FGWhatTheyDo;