const CCAccess = () => {
  return (
    <section className="bg-brand-blue/5 border-t border-slate-ink/10">
      <div className="mx-auto max-w-[820px] px-6 sm:px-8 md:px-10 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display text-slate-ink tracking-section"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
        >
          Your next decision, made with <span className="text-brand-blue ppx-italic">good counsel</span>.
        </h2>

        <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))]">
          Command Central fits the owner who is growing quickly and deciding quickly with it. The one who has outgrown handling everything alone but is not ready to put a full team of specialists on payroll.
        </p>

        <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))]">
          With this group in place, a new question stops being a research project. You already know who to call, and your time goes to the decision itself rather than the hunt for someone qualified to discuss it.
        </p>

        <p className="mt-10 font-serif-display italic text-slate-ink text-[18px] md:text-[22px] leading-snug">
          Good counsel, already in place.
        </p>
      </div>
    </section>
  );
};

export default CCAccess;
