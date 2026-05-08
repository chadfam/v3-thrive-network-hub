const cards = [
  {
    name: "Physical wellness",
    body: "Preventive care services that fall outside what most insurance covers in full or that employees use enough to make pre-tax allocation worthwhile.",
    examples: [
      "Annual physicals and screenings",
      "Health coaching and nutrition counseling",
      "Smoking cessation programs",
      "Weight management programs",
      "Telehealth services",
    ],
  },
  {
    name: "Mental wellness",
    body: "Counseling, therapy, and stress-management services that are increasingly part of how employees stay healthy and productive.",
    examples: [
      "Mental health counseling",
      "Stress management programs",
      "Employee assistance programs",
      "Sleep and recovery coaching",
      "Mindfulness and meditation",
    ],
  },
  {
    name: "Financial wellness",
    body: "Financial education and planning support that the IRS has classified as qualifying preventive care for purposes of certain plans.",
    examples: [
      "Personal financial planning",
      "Debt management and budgeting coaching",
      "Retirement planning education",
      "Tax planning support",
      "Estate and protection planning",
    ],
  },
];

const TWHBenefits = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2
            className="font-serif-display text-slate-ink tracking-section"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
          >
            What the wellness benefits actually are.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
            The plan funds qualified preventive wellness benefits across three categories. Employees use what's relevant to them. Unused dollars don't accumulate or pay out as cash.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((c) => (
            <div
              key={c.name}
              className="bg-background rounded-2xl p-10 border"
              style={{ borderColor: "#E0E3E7" }}
            >
              <div className="h-[2px] w-8 bg-brand-blue" />
              <h3 className="mt-6 font-serif-display text-slate-ink text-[24px]">{c.name}</h3>
              <p className="mt-4 text-[16px] text-[hsl(var(--slate-700))] leading-relaxed">
                {c.body}
              </p>
              <ul className="mt-6 space-y-3">
                {c.examples.map((e) => (
                  <li key={e} className="flex items-start gap-3 text-[16px] text-[hsl(var(--slate-700))]">
                    <span className="bullet-dot" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 mx-auto max-w-[720px] italic text-[16px] text-[hsl(var(--slate-500))] text-center">
          Specific benefits and providers are listed in the plan document. The plan must comply with IRS qualified-benefit definitions and is reviewed annually for compliance.
        </p>
      </div>
    </section>
  );
};

export default TWHBenefits;