const CCApply = () => {
  return (
    <section className="bg-background border-t border-slate-ink/10">
      <div className="mx-auto max-w-[820px] px-6 sm:px-10 md:px-16 py-20 md:py-24 text-center">
        <h2
          className="font-serif-display text-slate-ink"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Join our WEcosystem.
        </h2>
        <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          One application. We'll be in touch within two to three business days.
        </p>
        <div className="mt-10">
          <a
            href="/apply"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-brand-blue text-white text-[15px] font-semibold tracking-tight hover:bg-brand-blue/90 transition-colors shadow-sm"
          >
            Join our WEcosystem
          </a>
        </div>
      </div>
    </section>
  );
};

export default CCApply;
