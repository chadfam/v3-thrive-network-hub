const TWHHero = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[880px] px-6 sm:px-8 md:px-10 pt-16 md:pt-32 pb-16 text-center">
        <h1
          className="font-serif-display text-slate-ink tracking-hero"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 1.02 }}
        >
          Your employees deserve better health.
          <br />
          Your business deserves lower taxes.
        </h1>
        <p className="mt-8 mx-auto max-w-[720px] text-[17px] md:text-[21px] text-[hsl(var(--slate-700))] leading-relaxed">
          Team Wellness Hub gives your team real, supplemental wellness benefits. Because it's set up as a pre-tax benefit (the kind that's been in the tax code for decades), employees take home more pay and the business saves on payroll taxes. It sits alongside whatever insurance you already offer. A raise for the team, without raising payroll.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#the-math"
            className="btn-primary"
          >
            See the math
          </a>
          <a href="/contact?topic=team-wellness-hub" className="btn-secondary">
            Talk to us about setup
          </a>
        </div>
      </div>
    </section>
  );
};

export default TWHHero;