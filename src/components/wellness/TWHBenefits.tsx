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
    <section id="benefits" className="relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-brand-blue opacity-[0.04] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2
            className="font-serif-display text-slate-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            What the wellness benefits include.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[720px] mx-auto">
            The plan funds qualified preventive wellness benefits across three categories. Employees use what's relevant to them. Unused dollars don't accumulate or pay out as cash.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiles.map((t) => (
            <div key={t.name} className="bg-white border border-[#E0E3E7] rounded-xl p-8 flex flex-col">
              <div className="w-8 h-[2px] bg-brand-blue" />
              <h3
                className="mt-5 font-serif-display text-slate-ink text-[22px]"
                style={{ letterSpacing: "-0.01em" }}
              >
                {t.name}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[hsl(var(--slate-700))] flex-1">
                {t.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center italic text-[14px] text-[hsl(var(--slate-500))] max-w-[720px] mx-auto">
          Specific benefits and providers are listed in the plan document. The plan must comply with IRS qualified-benefit definitions and is reviewed annually for compliance.
        </p>
      </div>
    </section>
  );
};

export default TWHBenefits;
