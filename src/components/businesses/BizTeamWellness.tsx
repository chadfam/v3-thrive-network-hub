const stats = [
  { number: "$1,500+", label: "ADDED TO EMPLOYEE TAKE-HOME PAY ANNUALLY" },
  { number: "0", label: "DISRUPTION TO EXISTING INSURANCE" },
  { number: "100%", label: "TAX-COMPLIANT UNDER SECTION 125" },
];

const BizTeamWellness = () => {
  return (
    <section id="team-wellness-hub" className="relative bg-background">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "none",
        }}
      />
      <div className="relative mx-auto max-w-[880px] px-6 sm:px-8 md:px-10 py-16 md:py-32 text-center">
        <p className="font-serif-display text-[28px] text-[hsl(var(--slate-500))] leading-none">04</p>
        <h2 className="mt-2 font-serif-display text-slate-ink tracking-section" style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", lineHeight: 1.05 }}>
          Team Wellness Hub
        </h2>
        <p className="mt-6 mx-auto max-w-[640px] text-[17px] md:text-[21px] font-medium text-slate-ink">
          A Section 125 wellness program that pays for itself within the first quarter.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-10 md:gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-serif-display text-gradient-warm" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", lineHeight: 1 }}>
                {s.number}
              </p>
              <p className="mt-3 text-[12px] font-medium tracking-[0.12em] text-[hsl(var(--slate-500))]">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 mx-auto max-w-[720px]">
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            Section 125 of the IRS code lets businesses redirect a portion of payroll into pre-tax wellness benefits. The business saves on payroll taxes. Employees keep more of their paycheck. The math works because the savings are real and the law is forty years old.
          </p>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            Most owners haven't set this up because the existing wellness vendors price it like enterprise software. The Hub runs it for a flat fee that's covered by the savings in the first quarter. It sits on top of whatever insurance you already offer. There's no enrollment disruption, no plan switching, no benefits committee.
          </p>
          <a href="/team-wellness-hub" className="mt-8 inline-block text-[15px] text-slate-ink">
            <span className="hover:bg-gradient-warm hover:bg-clip-text hover:text-transparent">
              Team Wellness Hub details →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BizTeamWellness;