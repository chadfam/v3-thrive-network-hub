const CCApply = () => {
  return (
    <section className="bg-background border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1080px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display text-slate-ink mx-auto max-w-[820px]"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          The bench unlocks through <span className="text-brand-blue ppx-italic">Profit Partners</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          Apply at the tier that matches your business. Inner Circle members get full Command Central access from day one. Other tiers can request specific services as needed.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="/apply"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-brand-blue text-white text-[15px] font-semibold tracking-tight hover:bg-brand-blue/90 transition-colors shadow-sm"
          >
            Apply to Profit Partners
          </a>
          <a
            href="/contact?topic=command-central"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-white text-slate-ink text-[15px] font-semibold border-2 border-slate-ink/15 hover:border-brand-blue hover:text-brand-blue transition-colors"
          >
            Talk about a specific service
          </a>
        </div>
      </div>
    </section>
  );
};

export default CCApply;