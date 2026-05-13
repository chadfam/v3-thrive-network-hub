const BizApply = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 md:px-10 py-16 md:py-32 text-center">
        <span className="block mx-auto section-accent" aria-hidden />
        <h2 className="mt-10 font-serif-display text-slate-ink tracking-section" style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", lineHeight: 1.05 }}>
          Apply once.<br />The network opens.
        </h2>
        <p className="mt-8 mx-auto max-w-[640px] text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          The application takes about ten minutes. We review every one. If there's category alignment in your market, we'll set up a conversation.
        </p>
        <div className="mt-10 flex flex-col items-center gap-5">
          <a
            href="/apply"
            className="btn-primary">
            Apply now →
          </a>
          <a href="/profit-partners" className="text-link">
            See what's included first →
          </a>
        </div>
      </div>
    </section>
  );
};

export default BizApply;