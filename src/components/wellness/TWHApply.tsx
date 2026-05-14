const TWHApply = () => {
  return (
    <section id="apply" className="scroll-mt-24 bg-brand-blue/5 border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1080px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display text-slate-ink mx-auto max-w-[820px]"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          Talk to us about <span className="text-brand-blue ppx-italic">setting it up</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          The savings analysis is the no-commitment first step. We review your payroll census and tell you exactly what the plan is worth to you and your team. If the math doesn't work for your situation, we say so.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="/contact?topic=team-wellness-hub-analysis"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-brand-blue text-white text-[15px] font-semibold tracking-tight hover:bg-brand-blue/90 transition-colors shadow-sm"
          >
            Request a savings analysis
          </a>
          <a
            href="/profit-partners"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-white text-slate-ink text-[15px] font-semibold border-2 border-slate-ink/15 hover:border-brand-blue hover:text-brand-blue transition-colors"
          >
            Apply through Profit Partners
          </a>
        </div>

        <p className="mt-10 text-[13px] tracking-wide text-[hsl(var(--slate-500))]">
          Most plans go live within four to six weeks of the savings analysis.
        </p>
      </div>
    </section>
  );
};

export default TWHApply;
