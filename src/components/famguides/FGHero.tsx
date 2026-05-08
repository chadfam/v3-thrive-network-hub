const FGHero = () => {
  return (
    <section className="hero-fullbleed bg-background">
      <img
        className="hero-fullbleed-img"
        src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=2400&q=80"
        alt="Two people in calm sofa conversation in a warm interior with soft natural light"
        loading="eager"
      />
      <div className="hero-fullbleed-scrim" />
      <div className="hero-fullbleed-content mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pt-16 md:pt-28 pb-20 md:pb-32">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-[hsl(var(--slate-500))]">
              A FAMILY COACHING PRACTICE WITH A PLATFORM UNDERNEATH
            </p>
            <h1
              className="mt-6 font-serif-display text-slate-ink tracking-hero"
              style={{ fontSize: "clamp(2.25rem, 6.5vw, 4.5rem)", lineHeight: 1.02 }}
            >
              Coach families through the work of being more present.
            </h1>
            <p className="mt-8 max-w-[540px] text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
              FAM Guides are practitioners who work with families on the connecting work most parents don't have a guide for. The platform handles billing, scheduling, and family matching. You handle the coaching. The model is recurring monthly revenue, not one-off sessions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/apply?role=fam-guide"
                className="group relative inline-flex items-center justify-center px-6 py-3 rounded-lg text-[15px] font-medium text-white bg-slate-ink overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Apply now</span>
              </a>
              <a
                href="#specialty-paths"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-[15px] font-medium text-slate-ink border border-slate-ink hover:bg-slate-ink hover:text-white transition-colors"
              >
                See the specialty paths
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FGHero;