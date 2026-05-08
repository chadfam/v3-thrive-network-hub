const TWHApply = () => {
  return (
    <section className="relative bg-background">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "none",
        }}
      />
      <div className="relative mx-auto max-w-[760px] px-6 sm:px-8 md:px-10 py-20 md:py-32 text-center">
        <div className="mx-auto h-[2px] w-20 bg-gradient-warm" />
        <h2
          className="mt-10 font-serif-display text-slate-ink tracking-hero"
          style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", lineHeight: 1.05 }}
        >
          Find out what this is worth
          <br />
          to your business.
        </h2>
        <p className="mt-8 mx-auto max-w-[640px] text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
          The savings analysis is the no-commitment first step. We review your payroll census and tell you exactly what the plan is worth to you and your team in actual dollars. If the math doesn't work for your situation, we say so.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="/contact?topic=team-wellness-hub-analysis"
            className="group relative inline-flex items-center justify-center px-6 py-3 rounded-lg text-[15px] font-medium text-white bg-slate-ink overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Request a savings analysis →</span>
          </a>
          <a href="/profit-partners" className="text-[15px] text-slate-ink">
            <span className="hover:bg-gradient-warm hover:bg-clip-text hover:text-transparent">
              Or apply through Profit Partners →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TWHApply;