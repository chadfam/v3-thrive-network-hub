const W1WhyOwn = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[760px] px-6 sm:px-8 md:px-10 py-20 md:py-32 text-center">
        <div className="mx-auto section-accent" />
        <h2
          className="mt-8 font-serif-display text-slate-ink"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
        >
          Why we own this platform.
        </h2>
        <div className="mt-8 space-y-6">
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            Most networks rent their referral infrastructure. The platform takes a percentage. The brand pays a fee. The affiliates get paid through whatever rules the platform vendor decided to enforce.
          </p>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            The chain that connected the deal in the first place stays invisible because the platform wasn't built to see it.
          </p>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            We acquired WER1 specifically so the platform underneath United to Thrive could be built around the principle that the chain is the point.
          </p>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            The Waves of Pay model is real, and the platform is built for it. We can configure it for partner businesses because we own the WER1 brand and the integration. The math was designed first. The platform was built to deliver it.
          </p>
        </div>
        <p className="mt-10 font-serif-display italic text-slate-ink text-[24px]" style={{ letterSpacing: "-0.01em" }}>
          The chain is the point. The platform was built to pay it.
        </p>
      </div>
    </section>
  );
};

export default W1WhyOwn;