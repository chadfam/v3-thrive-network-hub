const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-baseline py-3 border-b" style={{ borderColor: "#E0E3E7" }}>
    <span className="text-[15px] font-medium text-slate-ink">{label}</span>
    <span className="text-[15px] text-[hsl(var(--slate-700))]">{value}</span>
  </div>
);

const TWHMath = () => {
  return (
    <section id="the-math" style={{ backgroundColor: "#0B1F3F" }} className="text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-white/70">
              THE MATH
            </p>
            <h2
              className="mt-6 font-serif-display tracking-section"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
            >
              What pre-tax actually means.
            </h2>
            <p className="mt-8 text-[17px] md:text-[19px] text-white/90 leading-relaxed max-w-[480px]">
              A Section 125 cafeteria plan lets an employee redirect a portion of their pre-tax compensation toward qualified wellness benefits. The dollars come out of their gross pay before federal income tax and FICA are calculated. The employee's taxable income drops. Their take-home pay rises by the tax that would otherwise have been withheld.
            </p>
            <p className="mt-6 text-[17px] md:text-[19px] text-white/90 leading-relaxed max-w-[480px]">
              At the same time, the employer's FICA obligation drops because the employer's share of FICA is calculated on the same lower taxable wage base. The math works for both sides because the IRS structures it that way. The cost of the wellness benefits comes out of the savings, not out of new payroll.
            </p>
          </div>

          <div className="bg-background text-slate-ink rounded-2xl p-8 md:p-10">
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-[hsl(var(--slate-500))]">
              WORKED EXAMPLE, ONE EMPLOYEE
            </p>
            <div className="mt-6">
              <Row label="Annual gross pay" value="$60,000" />
              <Row label="Pre-tax wellness allocation" value="$6,000" />
              <Row label="New taxable wages" value="$54,000" />
            </div>
            <div className="my-4 h-[2px] w-full bg-brand-blue" />
            <div>
              <Row label="Federal income tax saved (22% bracket)" value="$1,320" />
              <Row label="Employee FICA saved (7.65%)" value="$459" />
              <Row label="Total annual employee savings" value="$1,779" />
            </div>
            <div className="border-t my-2" style={{ borderColor: "#E0E3E7" }} />
            <div>
              <Row label="Employer FICA saved per employee (7.65%)" value="$459" />
            </div>
            <p className="mt-6 italic text-[14px] text-[hsl(var(--slate-500))]">
              Numbers shown are illustrative for an employee in the 22% federal bracket. Actual results vary by income, state, and participation level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TWHMath;