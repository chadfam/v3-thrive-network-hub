const TWHWhy = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[760px] px-6 sm:px-8 md:px-10 py-16 md:py-32 text-center">
        <div className="mx-auto section-accent" />
        <h2
          className="mt-10 font-serif-display text-slate-ink tracking-section"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
        >
          Why most owners haven't set this up.
        </h2>
        <p className="mt-8 text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
          Pre-tax wellness benefit plans have been in the tax code since the 1970s. The savings are real. The structure is well-defined. Most large employers have used some version of one for decades.
        </p>
        <p className="mt-6 text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
          Most small and mid-sized businesses don't have one for three reasons:
        </p>

        <ol className="mt-8 mx-auto max-w-[640px] grid sm:grid-cols-3 gap-5 text-left">
          <li className="rounded-2xl bg-white p-6 border border-brand-blue/15">
            <p className="font-serif-display text-brand-blue text-[28px] leading-none">01</p>
            <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
              The existing vendors price administration like enterprise software.
            </p>
          </li>
          <li className="rounded-2xl bg-white p-6 border border-brand-blue/15">
            <p className="font-serif-display text-brand-blue text-[28px] leading-none">02</p>
            <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
              The setup feels like another HR project.
            </p>
          </li>
          <li className="rounded-2xl bg-white p-6 border border-brand-blue/15">
            <p className="font-serif-display text-brand-blue text-[28px] leading-none">03</p>
            <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
              The math is hard to see clearly without someone walking you through it.
            </p>
          </li>
        </ol>

        <p className="mt-10 text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
          Team Wellness Hub is the response. We built a plan structure any business with W-2 employees can adopt at a flat administrative fee. That fee is typically covered by the payroll-tax savings in the first quarter.
        </p>
        <p className="mt-6 text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
          Employees opt in voluntarily. The deductions run through your existing payroll. The wellness benefits sit on top of whatever insurance you already provide.
        </p>
        <p className="mt-12 font-serif-display italic text-slate-ink text-[20px] md:text-[24px] leading-snug">
          The savings have always been there. The infrastructure made them inaccessible.
        </p>
      </div>
    </section>
  );
};

export default TWHWhy;