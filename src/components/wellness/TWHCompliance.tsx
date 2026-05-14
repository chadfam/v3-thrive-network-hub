const stats = [
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
    <section style={{ backgroundColor: "#0B1F3F" }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center text-white">
        <h2
          className="font-serif-display mx-auto max-w-[820px]"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          Set up the way <span className="ppx-italic" style={{ color: "#FBBF24" }}>the IRS expects</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[720px] text-[17px] md:text-[19px] leading-[1.65] text-white/85">
          This is a pre-tax benefit plan with a defined structure in the IRS code, the same kind of plan large employers have used for decades. Every plan we administer is documented in writing, follows the qualified-benefit definitions, and runs the required annual nondiscrimination testing.
        </p>

        <div className="mt-16 md:mt-20 grid sm:grid-cols-3 gap-12 md:gap-8">
          {stats.map((s) => (
            <div key={s.value}>
              <p
                className="font-serif-display leading-none"
                style={{
                  fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)",
                  letterSpacing: "-0.02em",
                  color: "#FBBF24",
                }}
              >
                {s.value}
              </p>
              <p className="mt-4 mx-auto max-w-[260px] text-[14px] md:text-[15px] leading-relaxed text-white/80">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 mx-auto max-w-[680px] italic text-[13px] md:text-[14px] text-white/60">
          This page is informational, not tax advice. Tax outcomes depend on individual circumstances and current IRS regulations. Plans are administered in coordination with qualified benefits and tax professionals. Talk to your CPA before adopting any benefit plan.
        </p>
      </div>
    </section>
  );
};

export default TWHCompliance;
