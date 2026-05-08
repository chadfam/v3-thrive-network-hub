const BizWhoInside = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[760px] px-6 sm:px-8 md:px-10 py-16 md:py-32 text-center">
        <h2 className="font-serif-display text-slate-ink tracking-section" style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", lineHeight: 1.05 }}>
          Who's already inside.
        </h2>
        <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          Most members run businesses between $500K and $50M annually. They tend to be a few years past needing more attention and a few years into being tired of paying for it. They show up in person. They make introductions without keeping score. They think about reputation in twenty-year increments.
        </p>
        <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          The Phoenix chapter has owners in real estate, mortgage, financial advisory, insurance, home services, professional services, construction, automotive, and the trades. Category exclusivity is one per industry per market, so the room you walk into is built to send each other business, not compete for the same customer.
        </p>
        <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          If you're looking for a marketing service, a lead list, a course, or any version of growth where you pay for attention instead of build trust, this won't be a fit.
        </p>
      </div>
    </section>
  );
};

export default BizWhoInside;
