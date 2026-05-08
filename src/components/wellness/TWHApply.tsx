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
        <div className="mx-auto section-accent" />
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
          <a href="/contact?topic=team-wellness-hub-analysis" className="btn-primary">
            Request a savings analysis →
          </a>
          <a href="/profit-partners" className="text-link">
            Or apply through Profit Partners →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TWHApply;