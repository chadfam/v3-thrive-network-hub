const CCHero = () => {
  return (
    <section className="hero-fullbleed bg-background">
      <img
        className="hero-fullbleed-img"
        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200"
        srcSet="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=640 640w, https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200 1200w, https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2400 2400w"
        sizes="(max-width: 640px) 100vw, (max-width: 1200px) 100vw, 2400px"
        alt="Financial advisor reviewing documents at a desk in warm office light"
        loading="eager"
      />
      <div className="hero-fullbleed-scrim" />
      <div className="hero-fullbleed-content mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pt-16 md:pt-28 pb-20 md:pb-32 grid md:grid-cols-12">
        <div className="md:col-span-7">
          <h1
            className="font-serif-display text-slate-ink tracking-hero"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)", lineHeight: 1.02 }}
          >
            A board of advisors. Not a vendor list.
          </h1>
          <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[540px]">
            Command Central is your own board of advisors, experts, and service providers underneath Profit Partners. Pre-vetted, with set pricing, across five disciplines and thirty-plus services.
          </p>
          <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[540px]">
            Each one is accountable to the network because their next referral depends on the last one going well. So you stop guessing who to trust.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#catalog"
              className="btn-primary"
            >
            See what's in the catalog
          </a>
            <a href="/profit-partners" className="btn-secondary">
              Apply through Profit Partners
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCHero;