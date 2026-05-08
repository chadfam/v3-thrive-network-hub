const LeadHero = () => {
  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("local-leaders")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="top" className="hero-fullbleed bg-background">
      <img
        className="hero-fullbleed-img"
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80"
        alt="Three adults in animated conversation at a casual coffee-shop table, natural light."
        loading="eager"
      />
      <div className="hero-fullbleed-scrim" />
      <div className="hero-fullbleed-content mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pt-16 md:pt-28 pb-20 md:pb-32 grid md:grid-cols-12">
        <div className="md:col-span-7">
          <h1 className="font-serif-display tracking-hero text-slate-ink" style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)", lineHeight: 1.02 }}>
            Lead the room<br />you're already in.
          </h1>
          <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[540px]">
            Three programs for the connectors, coaches, and experts whose work is already changing how families live. Apply, and we'll match you to the role that fits.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="/apply" className="group relative inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-[15px] font-medium text-white bg-slate-ink overflow-hidden">
              <span className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Apply now</span>
            </a>
            <a href="#local-leaders" onClick={handleAnchor} className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-[15px] font-medium text-slate-ink border border-slate-ink hover:bg-slate-ink hover:text-white transition-colors">
              See the three programs
            </a>
          </div>
          <div className="mt-12 text-[14px] font-medium text-[hsl(var(--slate-500))] flex flex-wrap items-center gap-x-3 gap-y-2">
            <a href="#local-leaders" className="hover:text-slate-ink transition-colors">Local Leaders</a>
            <span aria-hidden>·</span>
            <a href="#fam-guides" className="hover:text-slate-ink transition-colors">FAM Guides</a>
            <span aria-hidden>·</span>
            <a href="#expert-faculty" className="hover:text-slate-ink transition-colors">Expert Faculty</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadHero;