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
          Section 125 cafeteria plans have been in the IRS code since 1978. The savings are real, the structure is well-defined, and most large employers have used some version of one for decades. The reason most small and mid-sized businesses don't have one is straightforward: the existing wellness vendors price administration like enterprise software, the setup feels like another HR project, and the math is hard to see clearly without someone walking you through it.
        </p>
        <p className="mt-6 text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
          Team Wellness Hub is the response. We built a plan structure that any business with W-2 employees can adopt at a flat administrative fee that's typically covered by the FICA savings in the first quarter. Employees opt in voluntarily, the deductions run through your existing payroll, and the wellness benefits sit on top of whatever insurance you already provide.
        </p>
        <p className="mt-12 font-serif-display italic text-slate-ink text-[20px] md:text-[24px] leading-snug">
          The savings have always been there. The infrastructure made them inaccessible.
        </p>
      </div>
    </section>
  );
};

export default TWHWhy;