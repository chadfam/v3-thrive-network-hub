const AboutHero = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden style={{ backgroundImage: "none" }} />
      <div className="relative mx-auto max-w-[880px] px-6 sm:px-8 md:px-10 pt-16 md:pt-32 pb-12 md:pb-20 text-center">
        <h1 className="font-serif-display text-slate-ink tracking-hero" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 1.02 }}>
          We built a network for the
          <br className="hidden md:block" /> version of business that still works.
        </h1>
        <p className="mt-8 md:mt-10 text-[17px] md:text-[21px] leading-relaxed text-[hsl(var(--slate-700))] mx-auto max-w-[760px]">
          United to Thrive is the company behind Profit Partners, FAM Central, Local Leaders, and the WER1 Impact Network. We acquired the platforms, integrated the programs, and built one community around them. Here's why.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="/businesses" className="group relative inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-[15px] font-medium text-white bg-slate-ink overflow-hidden">
            <span className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">See the programs</span>
          </a>
          <a href="/apply" className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-[15px] font-medium text-slate-ink border border-slate-ink hover:bg-slate-ink hover:text-white transition-colors">
            Apply now
          </a>
        </div>
      </div>
      <div className="relative w-full h-[280px] md:h-[480px]">
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2400&q=80"
          alt="Small founding team gathered around a wall of notes and whiteboard in soft natural light."
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default AboutHero;