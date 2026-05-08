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
        <div className="mx-auto section-accent" />
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
          <a href="/apply?role=fam-guide" className="btn-primary">
            Apply as a FAM Guide →
          </a>
          <a href="/contact?topic=fam-guides" className="text-link">
            Or talk to us about a specialty path first →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FGApply;