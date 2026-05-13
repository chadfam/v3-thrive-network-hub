const items = [
  "Written plan document",
  "Summary plan description",
  "Annual nondiscrimination testing",
  "Qualified-benefit verification",
  "Payroll integration setup",
  "Employee enrollment materials",
  "Annual plan review and updates",
  "Recordkeeping and reporting support",
];

const TWHCompliance = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-7">
            <h2
              className="font-serif-display text-slate-ink tracking-section"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
            >
              Set up the way the IRS expects.
            </h2>
            <p className="mt-8 text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed max-w-[540px]">
              This is a pre-tax benefit plan with a defined structure in the IRS code, the same kind of plan large employers have used for decades. Every plan we administer is documented in writing, follows the qualified-benefit definitions, and runs the required annual nondiscrimination testing so benefits are available across the workforce, not just to highly compensated employees.
            </p>
            <p className="mt-6 text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed max-w-[540px]">
              The structure is well understood by the IRS, payroll providers, and benefits attorneys. The administrative work is what trips up most small businesses, not the law itself. So we handle the documentation, the testing, and the paperwork, and the plan gets set up and run properly.
            </p>
            <p className="mt-6 italic text-[14px] text-[hsl(var(--slate-500))] max-w-[540px]">
              This page is informational, not tax advice. Tax outcomes depend on individual circumstances and current IRS regulations. Plans are administered in coordination with qualified benefits and tax professionals. Talk to your CPA before adopting any benefit plan.
            </p>
          </div>
          <div className="md:col-span-5">
            <div
              className="bg-background rounded-2xl p-10 border"
              style={{ borderColor: "#E0E3E7" }}
            >
              <p className="font-serif-display text-[22px] text-slate-ink">
                What we handle for you
              </p>
              <ul className="mt-6 space-y-3">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-[16px] text-[hsl(var(--slate-700))]">
                    <span className="bullet-dot" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TWHCompliance;