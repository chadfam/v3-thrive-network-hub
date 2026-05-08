const EFHero = () => {
  return (
    <section className="hero-fullbleed bg-background">
      <img
        className="hero-fullbleed-img"
        src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&auto=format&fit=crop&w=1200"
        srcSet="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&auto=format&fit=crop&w=640 640w, https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&auto=format&fit=crop&w=1200 1200w, https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&auto=format&fit=crop&w=2400 2400w"
        sizes="(max-width: 640px) 100vw, (max-width: 1200px) 100vw, 2400px"
        alt="Podcast host at a studio microphone, focused, warm light."
        loading="eager"
      />
      <div className="hero-fullbleed-scrim" />
      <div className="hero-fullbleed-content mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pt-16 md:pt-28 pb-20 md:pb-32 grid md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="text-[13px] font-medium uppercase tracking-[0.14em] text-[hsl(var(--slate-500))]">
            DISTRIBUTION AND INCOME FOR EXPERTS WHO HELP FAMILIES
          </div>
          <h1 className="mt-6 font-serif-display tracking-hero text-slate-ink" style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)", lineHeight: 1.02 }}>
            Five income streams for the expertise you've already built.
          </h1>
          <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[540px]">
            Expert Faculty connects authors, speakers, coaches, and category leaders to families who came to FAM Central looking for trusted expert content. The platform handles distribution across in-app feeds, local hubs, email campaigns, and events. You focus on creating.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="/apply?role=expert-faculty"
              className="btn-primary">
            Apply now
            </a>
            <a href="#income-streams" className="btn-secondary">
              See how the income works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EFHero;