const steps = [
  {
    num: "01",
    name: "Census and savings analysis",
    body: "We review your payroll census and calculate what the plan is worth in actual dollars to the business and your employees. Non-intrusive, requires minimal information.",
  },
  {
    num: "02",
    name: "Plan documentation",
    body: "We draft the written plan document, summary plan description, and supporting paperwork the IRS expects for a properly documented pre-tax wellness benefit plan.",
  },
  {
    num: "03",
    name: "Payroll integration",
    body: "We coordinate with your existing payroll provider to set up the pre-tax deduction codes and wellness benefit codes. Most setups are complete within two weeks.",
  },
  {
    num: "04",
    name: "Employee enrollment",
    body: "We provide enrollment materials, host an explainer session for your team, and run the open-enrollment window. Employees opt in voluntarily.",
  },
];

const TWHHowItWorks = () => {
  return (
    <section className="bg-[hsl(220_30%_98%)] border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display text-slate-ink mx-auto max-w-[820px]"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          Four steps. Four to six weeks. <span className="text-brand-blue ppx-italic">Plan live</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[640px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          We handle the structuring, documentation, and compliance. You handle informing your team. The plan integrates with your existing payroll provider.
        </p>

        <div className="mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 text-left">
          {steps.map((s) => (
            <article
              key={s.num}
              className="rounded-2xl bg-white p-7 md:p-8 border border-slate-ink/10 flex flex-col"
            >
              <span className="font-serif-display text-brand-blue text-[18px] tracking-tight">
                {s.num}
              </span>
              <h3 className="mt-5 font-serif-display text-[20px] md:text-[22px] leading-tight text-slate-ink">
                {s.name}
              </h3>
              <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TWHHowItWorks;
