const items = [
  "The Local Leader Playbook (full framework, templates, examples)",
  "Certification and structured onboarding",
  "Monthly group coaching calls with our team",
  "A private community of Local Leaders across markets",
  "WER1 platform access for tracking and attribution",
  "Featured presence on FAM Central in your area",
];

const LLTraining = () => {
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
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <h2
              className="font-serif-display text-slate-ink tracking-section"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
            >
              Training and support.
            </h2>
            <p className="mt-8 max-w-[480px] text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
              The Local Leader Playbook is the operating framework. It walks through the Guide, Gather, Grow stages, gives you templates and examples, and explains how to use the WER1 platform to track introductions. Onboarding is structured. Once you're certified, the work is yours to run.
            </p>
            <p className="mt-6 max-w-[480px] text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
              Support continues after onboarding through monthly coaching calls, a private community of other Local Leaders across markets, and platform updates as the role grows. We don't leave you to figure it out.
            </p>
          </div>
          <div className="bg-background rounded-2xl p-10 border" style={{ borderColor: "#E0E3E7" }}>
            <ul className="mt-6 space-y-4">
              {items.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-3 text-[16px] text-[hsl(var(--slate-700))]"
                >
                  <span className="bullet-dot" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LLTraining;