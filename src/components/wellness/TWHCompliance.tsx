const facts = [
  {
    value: "1970s",
    label: "Pre-tax wellness benefit plans have been in the IRS code since the 1970s.",
  },
  {
    value: "$2,100+",
    label: "Combined annual savings per employee, between business payroll-tax savings and employee take-home pay.",
  },
  {
    value: "1Q",
    label: "Most plans pay back the administrative fee in the first quarter from FICA savings alone.",
  },
];

const TWHCompliance = () => {
  return (
    <section id="compliance" style={{ backgroundColor: "#0B1F3F" }} className="text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32 grid md:grid-cols-[55fr_45fr] gap-12 md:gap-16 items-start">
        <div>
          <h2
            className="font-serif-display text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            Set up the way{" "}
            <span style={{ color: "#FBBF24" }}>the IRS expects</span>.
          </h2>
          <div className="mt-8 space-y-6 max-w-[540px]">
            <p className="text-[17px] md:text-[19px] leading-relaxed text-white/90">
              This is a pre-tax benefit plan with a defined structure in the IRS code, the same kind of plan large employers have used for decades. Every plan we administer is documented in writing, follows the qualified-benefit definitions, and runs the required annual nondiscrimination testing.
            </p>
          </div>
          <p className="mt-8 italic text-[13px] md:text-[14px] text-white/60 max-w-[540px]">
            This page is informational, not tax advice. Tax outcomes depend on individual circumstances and current IRS regulations. Plans are administered in coordination with qualified benefits and tax professionals. Talk to your CPA before adopting any benefit plan.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-10">
          <h3 className="font-serif-display text-[22px] md:text-[24px] text-slate-ink leading-tight">
            The plan in brief
          </h3>
          <div className="mt-6 divide-y divide-[#E0E3E7]">
            {facts.map((f) => (
              <div
                key={f.value}
                className="py-5 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-3 sm:gap-5"
              >
                <div
                  className="font-serif-display text-brand-blue leading-none"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", letterSpacing: "-0.02em" }}
                >
                  {f.value}
                </div>
                <div className="text-[14px] md:text-[15px] leading-relaxed text-[hsl(var(--slate-700))]">
                  {f.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TWHCompliance;
