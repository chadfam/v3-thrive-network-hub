const PassHero = () => {
  return (
    <section style={{ backgroundColor: "#0B1F3F" }} className="hero-fullbleed text-white">
      <img
        className="hero-fullbleed-img"
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200"
        srcSet="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=640 640w, https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200 1200w, https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=2400 2400w"
        sizes="(max-width: 640px) 100vw, (max-width: 1200px) 100vw, 2400px"
        alt="Private mastermind gathering in warm light"
        loading="eager"
      />
      <div className="hero-fullbleed-scrim-navy" />
      <div className="hero-fullbleed-content mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pt-20 md:pt-32 pb-20 md:pb-32 grid md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="text-[13px] font-medium tracking-[0.14em] uppercase text-white/70">
            ONE MEMBERSHIP. FORTY-PLUS ROOMS.
          </p>
          <h1
            className="mt-6 font-serif-display text-white tracking-hero"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 1.04 }}
          >
            Mastermind Passport.™<br />Walk in introduced.
          </h1>
          <p className="mt-8 max-w-[540px] text-[18px] md:text-[21px] leading-relaxed text-white/90">
            Guest access into 40+ elite mastermind communities through one membership. The rooms most owners spend years trying to find. You walk in as a guest of the network instead of paying retail to test each one.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/apply"
              className="btn-on-dark">
            Apply now
            </a>
            <a
              href="#rooms"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-[15px] font-medium text-white border border-white/60 hover:bg-white hover:text-slate-ink transition-colors"
            >
              See the rooms
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassHero;