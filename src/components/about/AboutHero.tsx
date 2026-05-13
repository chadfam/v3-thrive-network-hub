const AboutHero = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden style={{ backgroundImage: "none" }} />
      <div className="relative mx-auto max-w-[880px] px-6 sm:px-8 md:px-10 pt-16 md:pt-32 pb-12 md:pb-20 text-center">
        <h1 className="font-serif-display text-slate-ink tracking-hero" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 1.02 }}>
          A network for the version of business that still works.
        </h1>
        <p className="mt-8 md:mt-10 text-[17px] md:text-[21px] leading-relaxed text-[hsl(var(--slate-700))] mx-auto max-w-[760px]">
          United to Thrive is the company behind Profit Partners, FAM Central, Local Leaders, and the WER1 referral platform. We integrated the programs and built one community around them, so growth comes from relationships and referrals instead of ads. Here's why.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="/businesses" className="btn-primary">
            See the programs
          </a>
          <a href="/apply" className="btn-secondary">
            Apply now
          </a>
        </div>
      </div>
      <div className="relative w-full h-[280px] md:h-[480px]">
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200"
        srcSet="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=640 640w, https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200 1200w, https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=2400 2400w"
        sizes="(max-width: 640px) 100vw, (max-width: 1200px) 100vw, 2400px"
          alt="Small founding team gathered around a wall of notes and whiteboard in soft natural light."
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default AboutHero;