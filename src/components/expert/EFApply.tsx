const EFApply = () => {
  return (
    <section className="relative bg-background">
      <div className="absolute inset-0 warm-tint-bg pointer-events-none" aria-hidden style={{ opacity: 0.8 }} />
      <div className="relative mx-auto max-w-3xl px-6 sm:px-8 md:px-10 py-20 md:py-32 text-center">
        <div className="mx-auto mb-10 h-[2px] w-20 bg-gradient-warm" />
        <h2 className="font-serif-display tracking-section text-slate-ink" style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", lineHeight: 1.05 }}>
          Bring your expertise into a network built for it.
        </h2>
        <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[640px] mx-auto">
          The application takes about fifteen minutes. We review applications on a rolling basis with our editorial team. Approved experts begin onboarding within two weeks of acceptance.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="/apply?role=expert-faculty"
            className="group relative inline-flex items-center justify-center px-7 py-4 rounded-lg text-[15px] font-medium text-white bg-slate-ink overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Apply as Expert Faculty →</span>
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