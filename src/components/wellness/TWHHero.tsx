const TWHHero = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[880px] px-6 sm:px-8 md:px-10 pt-16 md:pt-32 pb-16 text-center">
        <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-[hsl(var(--slate-500))]">
          A SECTION 125 WELLNESS PROGRAM
        </p>
        <h1
          className="mt-6 font-serif-display text-slate-ink tracking-hero"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 1.02 }}
        >
          Give your team a raise.
          <br />
          Without raising payroll.
        </h1>
        <p className="mt-8 mx-auto max-w-[720px] text-[17px] md:text-[21px] text-[hsl(var(--slate-700))] leading-relaxed">
          Team Wellness Hub is a Section 125 cafeteria plan that lets your employees allocate part of their compensation toward qualified wellness benefits on a pre-tax basis. Employees see more take-home pay. Your business saves on FICA payroll taxes. The plan sits alongside whatever insurance you already offer.
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