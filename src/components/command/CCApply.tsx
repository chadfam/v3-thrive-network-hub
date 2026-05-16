const steps = [
  { num: "1", text: "Apply with one short application." },
  { num: "2", text: "The team reviews it and matches you to the right conversation." },
  { num: "3", text: "You hear back within two to three business days." },
];

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
          Join our <span className="text-brand-blue ppx-italic">WEcosystem</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          One application. Tell us what you're building and which parts of the network fit.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3 mx-auto max-w-[880px] text-left">
          {steps.map((s) => (
            <div
              key={s.num}
              className="rounded-2xl bg-white p-7"
              style={{ border: "1px solid #E0E3E7" }}
            >
              <p className="font-serif-display text-[28px] md:text-[32px] text-gradient-warm leading-none">
                {s.num}
              </p>
              <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                {s.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/apply"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-brand-blue text-white text-[15px] font-semibold tracking-tight hover:bg-brand-blue/90 transition-colors shadow-sm"
          >
            Join our WEcosystem
          </a>
        </div>
      </div>
    </section>
  );
};

export default CCApply;
