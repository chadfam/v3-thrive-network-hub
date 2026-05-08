const HowPromoter = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-warm opacity-[0.04] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32 text-center">
        <h2
          className="mx-auto font-serif-display text-slate-ink"
          style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", lineHeight: 1.05, letterSpacing: "-0.01em", maxWidth: 800 }}
        >
          Get paid for what
          <br /> you already do.
        </h2>
        <div className="mt-8 mx-auto space-y-6" style={{ maxWidth: 640 }}>
          <p className="text-[19px] leading-relaxed text-slate-700">
            You're already recommending the businesses, books, and people you trust. Becoming a WER1 promoter is the simplest way to engage with the platform. You don't need to run a business or apply to a program. Sign up, share what you love, and earn when people buy.
          </p>
          <p className="text-[19px] leading-relaxed text-slate-700">
            The Waves of Pay model means you also earn from the introductions made by people you brought into the network, for as long as they keep introducing.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="/apply?role=promoter"
            className="group relative inline-flex items-center justify-center px-7 py-4 rounded-lg text-[15px] font-medium bg-slate-ink text-white overflow-hidden transition-colors"
          >
            <span className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Become a promoter →</span>
          </a>
          <a
            href="/apply"
            className="group inline-flex items-center gap-2 text-[15px] text-slate-ink"
          >
            <span className="relative">
              <span className="bg-gradient-warm bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0">
                Or apply to a program instead →
              </span>
              <span className="group-hover:opacity-0 transition-opacity duration-300">
                Or apply to a program instead →
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowPromoter;