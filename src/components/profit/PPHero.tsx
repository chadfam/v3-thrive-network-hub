import heroImg from "@/assets/hero-mastermind.jpg";

const PPHero = () => {
  return (
    <section className="hero-fullbleed bg-background">
      <img
        className="hero-fullbleed-img"
        src={heroImg}
        alt="Business owners in a candid mastermind session around a wooden table, warm daylight."
        loading="eager"
      />
      <div className="hero-fullbleed-scrim" />
      <div className="hero-fullbleed-content mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pt-16 md:pt-28 pb-20 md:pb-32 grid md:grid-cols-12">
        <div className="md:col-span-7">
          <h1 className="font-serif-display hero-headline text-slate-ink">
            Profit Partners.<sup className="text-[0.4em] align-super">™</sup><br />
            The <span className="ppx-italic">working alliance</span>.
          </h1>
          <p className="mt-8 max-w-[540px] text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            A working alliance of business owners building predictable referral revenue together. The only program in the United to Thrive network you apply to directly. Everything else opens up once you're in.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="/apply" className="btn-primary">
              Apply now
            </a>
            <a href="#benefits" className="btn-secondary">
              See what's included
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PPHero;