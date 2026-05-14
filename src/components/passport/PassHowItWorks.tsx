const steps = [
  { n: "01", name: "Apply", desc: "Submit the Passport application. We confirm fit with the network and the kinds of rooms you want to be in." },
  { n: "02", name: "Get matched", desc: "Our team reviews which mastermind communities align with your industry, stage, and goals. We map you to the right ones first." },
  { n: "03", name: "Receive invitations", desc: "We coordinate guest invitations directly with the partner communities. Sessions, events, retreats, and curated experiences." },
  { n: "04", name: "Walk in introduced", desc: "You arrive as a guest of the Mastermind Passport network. The host already knows who you are. You skip the cold-outreach stage entirely." },
];

const PassHowItWorks = () => {
  return (
    <section className="relative bg-background">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{ backgroundImage: "none" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2 className="font-serif-display text-slate-ink tracking-section" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
            How the <span className="text-brand-blue ppx-italic">Passport</span> works.
          </h2>
          <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            You don't have to find the rooms or get yourself invited. The membership runs that work for you.
          </p>
        </div>

        <div className="mt-16 flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-4">
          {steps.map((s, idx) => (
            <div key={s.n} className="flex md:flex-col items-start gap-6 md:gap-0 flex-1">
              <div className="md:w-full">
                <p aria-hidden className="font-serif-display text-transparent bg-clip-text bg-brand-blue" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: 1 }}>
                  {s.n}
                </p>
                <p className="mt-4 font-serif-display text-[24px] text-slate-ink leading-tight">{s.name}</p>
                <p className="mt-3 max-w-[240px] text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">{s.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <span aria-hidden className="hidden md:block self-center mt-12 mx-2 h-px w-6 bg-brand-blue flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PassHowItWorks;