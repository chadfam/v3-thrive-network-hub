const FGHero = () => {
  return (
    <section className="hero-fullbleed bg-background">
      <img
        className="hero-fullbleed-img"
        src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200"
        srcSet="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=640 640w, https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200 1200w, https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=2400 2400w"
        sizes="(max-width: 640px) 100vw, (max-width: 1200px) 100vw, 2400px"
        alt="Two people in calm sofa conversation in a warm interior with soft natural light"
        loading="eager"
      />
      <div className="hero-fullbleed-scrim" />
      <div className="hero-fullbleed-content mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pt-16 md:pt-28 pb-20 md:pb-32">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-7">
            <h1
              className="font-serif-display text-slate-ink tracking-hero"
              style={{ fontSize: "clamp(2.25rem, 6.5vw, 4.5rem)", lineHeight: 1.02 }}
            >
              Help families feel more connected.
            </h1>
            <p className="mt-8 max-w-[540px] text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
              FAM Guides are practitioners who help families feel more connected. The work starts with the FAM Plan: the family's own plan for the connecting work most parents don't have a guide for.
            </p>
            <p className="mt-5 max-w-[540px] text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
              The platform handles billing, scheduling, and family matching. You handle the coaching. A practice with a platform underneath, on a recurring monthly model, not one-off sessions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/apply?role=fam-guide"
                className="btn-primary"
              >
            Apply now
          </a>
              <a href="#specialty-paths" className="btn-secondary">
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