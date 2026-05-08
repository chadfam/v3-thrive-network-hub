const EFApply = () => {
  return (
    <section className="relative bg-background">
      <div className="absolute inset-0 warm-tint-bg pointer-events-none" aria-hidden style={{ opacity: 0.8 }} />
      <div className="relative mx-auto max-w-3xl px-6 sm:px-8 md:px-10 py-20 md:py-32 text-center">
        <div className="mx-auto mb-10 section-accent" />
        <h2 className="font-serif-display tracking-section text-slate-ink" style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", lineHeight: 1.05 }}>
          Bring your expertise into a network built for it.
        </h2>
        <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[640px] mx-auto">
          The application takes about fifteen minutes. We review applications on a rolling basis with our editorial team. Approved experts begin onboarding within two weeks of acceptance.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="/apply?role=expert-faculty"
            className="btn-primary text-[15px] py-4 px-7"
          >
            Apply as Expert Faculty →
          </a>
          <a
            href="/contact?topic=expert-faculty"
            className="group inline-flex items-center text-[15px] font-medium text-slate-ink"
          >
            <span className="group-hover:text-gradient-warm transition-colors">Or talk to us about a category first →</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EFApply;