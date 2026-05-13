const CCAccess = () => {
  return (
    <section className="relative bg-background">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "none",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 sm:px-8 md:px-10 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display text-slate-ink tracking-section"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
        >
          How to get access.
        </h2>
        <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          Command Central is included with Profit Partners membership. The level of access is shaped to your business on a private call, with on-demand reach across the five disciplines once you're in.
        </p>
        <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          The partners on the bench set their own service fees. Those are pre-priced inside the platform, so you see the number before any work begins. The network itself doesn't add a per-engagement upcharge.
        </p>

        <a href="/profit-partners" className="mt-10 text-link inline-block">
          See more on Profit Partners →
        </a>
      </div>
    </section>
  );
};

export default CCAccess;
