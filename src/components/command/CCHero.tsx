const CCHero = () => {
  return (
    <section className="hero-fullbleed bg-background">
      <img
        className="hero-fullbleed-img"
        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2400&q=80"
        alt="Financial advisor reviewing documents at a desk in warm office light"
        loading="eager"
      />
      <div className="hero-fullbleed-scrim" />
      <div className="hero-fullbleed-content mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pt-16 md:pt-28 pb-20 md:pb-32 grid md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[hsl(var(--slate-500))]">
            THE OPERATING BENCH
          </p>
          <h1
            className="mt-6 font-serif-display text-slate-ink tracking-hero"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)", lineHeight: 1.02 }}
          >
            A bench. Not a vendor list.
          </h1>
          <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[540px]">
            Command Central is the operating layer underneath Profit Partners. Pre-vetted experts and service providers across five disciplines and thirty-plus services. Accountable to the network because their next referral depends on the last one going well.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#catalog"
              className="group relative inline-flex items-center justify-center px-6 py-3 rounded-lg text-[15px] font-medium text-white bg-slate-ink overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">See what's in the catalog</span>
            </a>
            <a
              href="/profit-partners"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-[15px] font-medium text-slate-ink border border-slate-ink hover:bg-slate-ink hover:text-white transition-colors"
            >
              Apply through Profit Partners
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCHero;