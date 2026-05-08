const steps = [
  {
    n: "01",
    name: "Census and savings analysis",
    desc: "We review your payroll census and calculate exactly what the plan is worth to your business and your employees. Quick, non-intrusive, requires minimal information.",
  },
  {
    n: "02",
    name: "Plan documentation",
    desc: "We draft the written plan document, summary plan description, and supporting paperwork required by the IRS for a compliant Section 125 cafeteria plan.",
  },
  {
    n: "03",
    name: "Payroll integration",
    desc: "We coordinate with your existing payroll provider to set up the pre-tax deduction codes and wellness benefit codes. Most setups are complete within two weeks.",
  },
  {
    n: "04",
    name: "Employee enrollment",
    desc: "We provide the enrollment materials, host an explainer session for your team, and run the open-enrollment window. Employees opt in voluntarily.",
  },
];

const TWHHowItWorks = () => {
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
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2
            className="font-serif-display text-slate-ink tracking-section"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
          >
            How a plan gets stood up.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
            We handle the structuring, documentation, and compliance work. You handle informing your team. The plan integrates with your existing payroll provider.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-12 md:gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <p
                className="font-serif-display text-gradient-warm"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: 1 }}
              >
                {s.n}
              </p>
              <h3 className="mt-4 font-serif-display text-slate-ink text-[24px]">{s.name}</h3>
              <p className="mt-4 text-[16px] text-[hsl(var(--slate-700))] leading-relaxed max-w-[240px]">
                {s.desc}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 -right-3 w-6 h-px bg-gradient-warm" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TWHHowItWorks;