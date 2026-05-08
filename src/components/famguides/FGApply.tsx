const FGApply = () => {
  return (
    <section className="relative bg-background">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "none",
        }}
      />
      <div className="relative mx-auto max-w-[760px] px-6 sm:px-8 md:px-10 py-20 md:py-32 text-center">
        <div className="mx-auto h-[2px] w-20 bg-gradient-warm" />
        <h2
          className="mt-10 font-serif-display text-slate-ink tracking-hero"
          style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", lineHeight: 1.05 }}
        >
          Bring your practice into a network that runs.
        </h2>
        <p className="mt-8 mx-auto max-w-[640px] text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
          The application takes about ten minutes. We follow up within five business days with the next step. Onboarding for accepted applicants begins on the first of the following month.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="/apply?role=fam-guide"
            className="group relative inline-flex items-center justify-center px-6 py-3 rounded-lg text-[15px] font-medium text-white bg-slate-ink overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Apply as a FAM Guide →</span>
          </a>
          <a href="/contact?topic=fam-guides" className="text-[15px] text-slate-ink">
            <span className="hover:bg-gradient-warm hover:bg-clip-text hover:text-transparent">
              Or talk to us about a specialty path first →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FGApply;