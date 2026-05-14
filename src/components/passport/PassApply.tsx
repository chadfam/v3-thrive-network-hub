const PassApply = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 md:px-10 py-20 md:py-32 text-center">
        <span className="block mx-auto section-accent" aria-hidden />
        <h2 className="mt-10 font-serif-display text-slate-ink tracking-section" style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", lineHeight: 1.05 }}>
          The right <span className="text-brand-blue ppx-italic">rooms</span> find you<br />once you're in the network.
        </h2>
        <p className="mt-8 mx-auto max-w-[640px] text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          Apply for the Passport directly, or apply to Profit Partners at the Mastermind tier and the Passport comes with it. Either path puts you in front of the rooms most owners spend years trying to reach.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="/apply?program=mastermind-passport"
            className="btn-primary">
            Apply for the Passport →
          </a>
          <a href="/profit-partners" className="text-link">
            Or join through Profit Partners →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PassApply;