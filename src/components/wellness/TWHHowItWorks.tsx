const steps = [
  {
    n: "01",
    name: "Census and savings analysis",
    body: "We review your payroll census and calculate what the plan is worth in actual dollars to the business and your employees. Non-intrusive, requires minimal information.",
  },
  {
    n: "02",
    name: "Plan documentation",
    body: "We draft the written plan document, summary plan description, and supporting paperwork the IRS expects for a properly documented pre-tax wellness benefit plan.",
  },
  {
    n: "03",
    name: "Payroll integration",
    body: "We coordinate with your existing payroll provider to set up the pre-tax deduction codes and wellness benefit codes. Most setups are complete within two weeks.",
  },
  {
    n: "04",
    name: "Employee enrollment",
    body: "We provide enrollment materials, host an explainer session for your team, and run the open-enrollment window. Employees opt in voluntarily.",
  },
];

const TWHHowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2
            className="font-serif-display text-slate-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            How a plan gets set up.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[720px] mx-auto">
            We handle the structuring, documentation, and compliance. You handle informing your team. The plan integrates with your existing payroll provider.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-12 md:gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div
                className="font-serif-display text-gradient-warm"
                style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", lineHeight: 1 }}
              >
                {s.n}
              </div>
              <h3
                className="mt-4 font-serif-display text-slate-ink text-[24px]"
                style={{ letterSpacing: "-0.01em" }}
              >
                {s.name}
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[240px]">
                {s.body}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 right-[-12px] w-6 h-px bg-brand-blue" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TWHHowItWorks;
