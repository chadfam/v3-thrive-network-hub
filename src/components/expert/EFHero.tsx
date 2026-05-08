const EFHero = () => {
  return (
    <section className="hero-fullbleed bg-background">
      <img
        className="hero-fullbleed-img"
        src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=2400&q=80&auto=format&fit=crop"
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
              className="group relative inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-[15px] font-medium text-white bg-slate-ink overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Apply now</span>
            </a>
            <a
              href="#income-streams"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-[15px] font-medium text-slate-ink border border-slate-ink hover:bg-slate-ink hover:text-white transition-colors"
            >
              See how the income works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EFHero;