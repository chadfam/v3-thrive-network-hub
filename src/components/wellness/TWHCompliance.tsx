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
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-[hsl(var(--slate-500))]">
              COMPLIANCE
            </p>
            <h2
              className="mt-6 font-serif-display text-slate-ink tracking-section"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
            >
              What the IRS requires.
            </h2>
            <p className="mt-8 text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed max-w-[540px]">
              A Section 125 cafeteria plan is a defined structure under IRS Code Section 125. Every plan we administer is documented in writing, follows the qualified-benefit definitions, and runs the required nondiscrimination testing each year to confirm benefits are available across the workforce, not just to highly compensated employees.
            </p>
            <p className="mt-6 text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed max-w-[540px]">
              The structure has been in place for over forty years and is well understood by the IRS, payroll providers, and benefits attorneys. The administrative work is what trips up most small businesses, not the law itself. We handle the administration. You get a compliant plan.
            </p>
            <p className="mt-6 italic text-[14px] text-[hsl(var(--slate-500))] max-w-[540px]">
              This page is informational. Tax outcomes depend on individual circumstances and current IRS regulations. Plans are administered in coordination with qualified benefits and tax professionals. Talk to your CPA before adopting any benefit plan.
            </p>
          </div>
          <div className="md:col-span-5">
            <div
              className="bg-background rounded-2xl p-10 border"
              style={{ borderColor: "#E0E3E7" }}
            >
              <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-[hsl(var(--slate-500))]">
                WHAT WE HANDLE FOR YOU
              </p>
              <ul className="mt-6 space-y-3">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-[16px] text-[hsl(var(--slate-700))]">
                    <span className="mt-[9px] inline-block w-2 h-2 rounded-full bg-gradient-warm shrink-0" />
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