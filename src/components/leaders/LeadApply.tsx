const LeadApply = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 md:px-10 py-16 md:py-32 text-center">
        <h2 className="font-serif-display tracking-hero text-slate-ink mx-auto" style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)", lineHeight: 1.05 }}>
          Step into the role your<br className="hidden md:block" /> community already gives you.
        </h2>
        <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[640px] mx-auto">
          The application takes about ten minutes. We review every one and follow up with the next step for the role that fits.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a href="/apply" className="btn-primary text-[15px] py-4 px-7">
            Apply now →
          </a>
          <a href="/nominate" className="group inline-flex items-center text-[15px] text-slate-ink">
            <span className="group-hover:text-gradient-warm transition-colors">Or nominate someone in your community →</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeadApply;