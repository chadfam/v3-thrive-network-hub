const PPApply = () => {
  return (
    <section className="relative bg-background">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{ backgroundImage: "none" }}
      />
      <div className="relative mx-auto max-w-3xl px-6 sm:px-8 md:px-10 py-20 md:py-32 text-center">
        <span className="block mx-auto h-[2px] w-20 bg-gradient-warm" aria-hidden />
        <h2 className="mt-10 font-serif-display text-slate-ink tracking-section" style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", lineHeight: 1.05 }}>
          Apply at the tier<br />that fits your business.
        </h2>
        <p className="mt-8 mx-auto max-w-[640px] text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          The application takes about ten minutes. We follow up within five business days. If category alignment in your market works out, we'll set up a conversation.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="/apply"
            className="group relative inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-[15px] font-medium text-white bg-slate-ink overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Apply now →</span>
          </a>
          <a href="/contact" className="text-[14px] text-slate-ink">
            <span className="hover:bg-gradient-warm hover:bg-clip-text hover:text-transparent">
              Or talk to us first →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PPApply;