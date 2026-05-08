const LLHero = () => {
  return (
    <section className="hero-fullbleed bg-background">
      <img
        className="hero-fullbleed-img"
        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2400&q=80"
        alt="Outdoor neighborhood block-party gathering with adults and families in warm afternoon light"
        loading="eager"
      />
      <div className="hero-fullbleed-scrim" />
      <div className="hero-fullbleed-content mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pt-16 md:pt-28 pb-20 md:pb-32">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-[hsl(var(--slate-500))]">
              ONE LEADER PER INDUSTRY PER ZIP CODE
            </p>
            <h1
              className="mt-6 font-serif-display text-slate-ink tracking-hero"
              style={{ fontSize: "clamp(2.25rem, 6.5vw, 4.5rem)", lineHeight: 1.02 }}
            >
              Be the connector your zip code already gives you.
            </h1>
            <p className="mt-8 max-w-[540px] text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
              Local Leaders are the people families turn to when they need a recommendation. The mortgage broker who knows the school board. The wellness practitioner who knows everyone's pediatrician. United to Thrive turns that role into a position with training, exclusivity, and a real income stream.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/apply?role=local-leader"
                className="group relative inline-flex items-center justify-center px-6 py-3 rounded-lg text-[15px] font-medium text-white bg-slate-ink overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Apply now</span>
              </a>
              <a
                href="/nominate"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-[15px] font-medium text-slate-ink border border-slate-ink hover:bg-slate-ink hover:text-white transition-colors"
              >
                Nominate someone
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LLHero;