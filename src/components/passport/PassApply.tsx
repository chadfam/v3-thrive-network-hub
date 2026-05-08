const PassApply = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 md:px-10 py-20 md:py-32 text-center">
        <span className="block mx-auto h-[2px] w-20 bg-gradient-warm" aria-hidden />
        <h2 className="mt-10 font-serif-display text-slate-ink tracking-section" style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", lineHeight: 1.05 }}>
          The right rooms find you<br />once you're in the network.
        </h2>
        <p className="mt-8 mx-auto max-w-[640px] text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          Apply for the Passport directly, or apply to Profit Partners at the Mastermind tier and the Passport comes with it. Either path puts you in front of the rooms most owners spend years trying to reach.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="/apply?program=mastermind-passport"
            className="group relative inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-[15px] font-medium text-white bg-slate-ink overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Apply for the Passport →</span>
          </a>
          <a href="/profit-partners" className="text-[14px] text-slate-ink">
            <span className="hover:bg-gradient-warm hover:bg-clip-text hover:text-transparent">
              Or join through Profit Partners →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PassApply;