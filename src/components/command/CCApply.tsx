const CCApply = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 md:px-10 py-20 md:py-32 text-center">
        <div className="mx-auto h-[2px] w-20 bg-gradient-warm" />
        <h2
          className="mt-8 font-serif-display text-slate-ink tracking-hero"
          style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", lineHeight: 1.05 }}
        >
          The bench unlocks through Profit Partners.
        </h2>
        <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[640px] mx-auto">
          Apply to Profit Partners at the tier that matches your business. Inner Circle members get full Command Central access from day one. Other tiers can request specific services as needed.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="/apply"
            className="group relative inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-[15px] font-medium text-white bg-slate-ink overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Apply to Profit Partners →</span>
          </a>
          <a href="/contact?topic=command-central" className="text-[15px] text-slate-ink">
            <span className="hover:bg-gradient-warm hover:bg-clip-text hover:text-transparent">
              Or talk to us about a specific service →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CCApply;