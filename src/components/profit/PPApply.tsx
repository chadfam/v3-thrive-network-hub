const PPApply = () => {
  return (
    <section className="relative bg-background">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{ backgroundImage: "none" }}
      />
      <div className="relative mx-auto max-w-3xl px-6 sm:px-8 md:px-10 py-20 md:py-32 text-center">
        <span className="block mx-auto section-accent" aria-hidden />
        <h2 className="mt-10 font-serif-display text-slate-ink tracking-section" style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", lineHeight: 1.05 }}>
          Apply once.<br />The network opens.
        </h2>
        <p className="mt-8 mx-auto max-w-[640px] text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          The application takes about ten minutes. We follow up within five business days. If category alignment in your market works out, we'll set up a conversation.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="/apply"
            className="btn-primary">
            Apply now →
          </a>
          <a href="/contact" className="text-link">
            Or talk to us first →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PPApply;