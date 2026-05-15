const CCHero = () => {
  return (
    <section className="hero-fullbleed bg-background">
      <img
        className="hero-fullbleed-img"
        src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?auto=format&fit=crop&q=80&w=1200"
        srcSet="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?auto=format&fit=crop&q=80&w=640 640w, https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?auto=format&fit=crop&q=80&w=1200 1200w, https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?auto=format&fit=crop&q=80&w=2400 2400w"
        sizes="(max-width: 640px) 100vw, (max-width: 1200px) 100vw, 2400px"
        alt="A table of small business owners in a working meeting, business casual attire, gathered around a long wood table with coffee cups and laptops."
        loading="eager"
      />
      <div className="hero-fullbleed-scrim" />
      <div className="hero-fullbleed-content mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pt-16 md:pt-28 pb-20 md:pb-32 grid md:grid-cols-12">
        <div className="md:col-span-7">
          <h1
            className="font-serif-display text-slate-ink tracking-hero"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)", lineHeight: 1.02 }}
          >
            Your own board of advisors.
          </h1>
          <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[560px]">
            Advisors, experts, and service providers across coaching, marketing, finance, legal, and technology.
          </p>
          <div className="mt-10">
            <a href="/apply" className="btn-primary">
              Join our WEcosystem
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCHero;
