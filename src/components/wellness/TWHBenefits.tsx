const tiles = [
  {
    name: "Physical wellness",
    body: "Annual physicals and screenings, health coaching, nutrition counseling, smoking cessation, weight management, and telehealth services.",
  },
  {
    name: "Mental wellness",
    body: "Counseling, therapy, employee assistance programs, stress management, sleep and recovery coaching, mindfulness and meditation.",
  },
  {
    name: "Financial wellness",
    body: "Personal financial planning, debt management coaching, retirement planning education, tax planning support, estate and protection planning.",
  },
  {
    name: "Preventive care",
    body: "Services that fall outside what most insurance covers in full, or that employees use frequently enough to make pre-tax allocation worthwhile.",
  },
  {
    name: "Eligible employees",
    body: "Any W-2 employee can participate. Plans must comply with IRS nondiscrimination testing so benefits are available across the workforce.",
  },
  {
    name: "Reviewed annually",
    body: "Every plan we administer is documented in writing, follows the qualified-benefit definitions, and runs annual nondiscrimination testing.",
  },
];

const TWHBenefits = () => {
  return (
    <section className="bg-white border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display text-slate-ink mx-auto max-w-[820px]"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          What the wellness benefits <span className="text-brand-blue ppx-italic">include</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          The plan funds qualified preventive wellness benefits across three categories. Employees use what's relevant to them. Unused dollars don't accumulate or pay out as cash.
        </p>

        <div className="mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 text-left">
          {tiles.map((t) => (
            <article
              key={t.name}
              className="rounded-2xl bg-white p-7 md:p-8 border border-slate-ink/10 flex flex-col hover:border-brand-blue/30 transition-colors"
            >
              <h3 className="font-serif-display text-[22px] md:text-[24px] leading-tight text-slate-ink">
                {t.name}
              </h3>
              <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))] flex-1">
                {t.body}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-12 mx-auto max-w-[720px] italic text-[14px] text-[hsl(var(--slate-500))]">
          Specific benefits and providers are listed in the plan document. The plan must comply with IRS qualified-benefit definitions and is reviewed annually for compliance.
        </p>
      </div>
    </section>
  );
};

export default TWHBenefits;
