const PPHero = () => {
  return (
    <section className="hero-fullbleed bg-background">
      <img
        className="hero-fullbleed-img"
        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2400&q=80"
        alt="Business owners in a working session around a table"
        loading="eager"
      />
      <div className="hero-fullbleed-scrim" />
      <div className="hero-fullbleed-content mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pt-16 md:pt-28 pb-20 md:pb-32 grid md:grid-cols-12">
        <div className="md:col-span-7">
          <h1 className="font-serif-display hero-headline text-slate-ink">
            Profit Partners.<sup className="text-[0.4em] align-super">™</sup><br />
            The <span className="ppx-italic">working alliance</span>.
          </h1>
          <p className="mt-8 max-w-[540px] text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            A working alliance of business owners building predictable referral revenue together. Three annual tiers. The only program in the United to Thrive network you apply to directly. Everything else opens up once you're in.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="/apply"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-[15px] font-medium text-white bg-brand-blue hover:bg-brand-blue-hover transition-colors"
            >
              Apply now
            </a>
            <a
              href="#tiers"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-[15px] font-medium text-slate-ink border border-[hsl(var(--slate-200))] hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              See the tiers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PPHero;