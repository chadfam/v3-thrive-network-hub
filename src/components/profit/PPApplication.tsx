const steps = [
  { n: "01", name: "Apply", desc: "Fill out the application. About ten minutes. We ask about your business and your goals." },
  { n: "02", name: "Review", desc: "We review the application within five business days. We confirm category alignment in your market and basic fit with the alliance." },
  { n: "03", name: "Conversation", desc: "A 30-minute conversation with someone from our team. We answer your questions and shape the right level of access to your business." },
  { n: "04", name: "Decide", desc: "If both sides agree it's a fit, we send the agreement and onboarding details. Membership begins right away." },
];

const PPApplication = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2 className="font-serif-display text-slate-ink tracking-section" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
            How to get in.
          </h2>
          <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            Membership is by application. We review every one. The process is structured so that both sides know whether the fit is right before any commitment.
          </p>
        </div>

        <div className="mt-16 flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-4">
          {steps.map((s, idx) => (
            <div key={s.n} className="flex md:flex-col md:items-start items-start gap-6 md:gap-0 flex-1">
              <div className="md:w-full">
                <p aria-hidden className="font-serif-display text-transparent bg-clip-text bg-brand-blue" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: 1 }}>
                  {s.n}
                </p>
                <p className="mt-4 font-serif-display text-[22px] text-slate-ink leading-tight">{s.name}</p>
                <p className="mt-3 max-w-[240px] text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">{s.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <span
                  aria-hidden
                  className="hidden md:block self-center mt-12 mx-2 h-px w-6 bg-brand-blue flex-shrink-0"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PPApplication;