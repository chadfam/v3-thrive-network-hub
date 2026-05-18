const bullets = [
  "The existing vendors price administration like enterprise software, so most small and mid-sized businesses skip it.",
  "Setup feels like another HR project: paperwork, payroll changes, employee questions, compliance documentation.",
  "The math is hard to see clearly without someone walking you through it, and most owners don't want to ask their CPA for a favor.",
];

const TWHWhy = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-brand-blue opacity-[0.04] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div>
          <h2
            className="font-serif-display text-slate-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            Why most owners haven't set this up.
          </h2>
          <div className="mt-8 space-y-6 max-w-[480px]">
            <p className="text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
              Pre-tax wellness benefit plans have been in the tax code since the 1970s. The savings are real, the structure is well-defined, and most large employers have used some version of one for decades.
            </p>
            <p className="text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
              For smaller businesses, the obstacle has never been the plan. It's been everything around adopting it.
            </p>
          </div>
          <p className="mt-8 font-serif-display italic text-slate-ink text-[20px]" style={{ letterSpacing: "-0.01em" }}>
            Team Wellness Hub is the response. A flat administrative fee, a plan structure any W-2 business can adopt, and we handle the rest.
          </p>
        </div>

        <div className="bg-white border border-[#E0E3E7] rounded-2xl p-6 sm:p-8 md:p-10">
          <h3 className="font-serif-display text-[22px] md:text-[24px] text-slate-ink leading-tight">
            Where the friction has been
          </h3>
          <ul className="mt-6 space-y-5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span aria-hidden className="bullet-dot mt-[9px]" />
                <span className="text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TWHWhy;
