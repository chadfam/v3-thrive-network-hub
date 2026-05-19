const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-baseline py-3 border-b" style={{ borderColor: "#E0E3E7" }}>
    <span className="text-[15px] font-medium text-slate-ink">{label}</span>
    <span className="text-[15px] text-[hsl(var(--slate-700))]">{value}</span>
  </div>
);

const TWHMath = () => {
  return (
    <section id="the-math" style={{ backgroundColor: "#16294C" }} className="text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <h2
              className="font-serif-display tracking-section"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
            >
              What pre-tax means.
            </h2>
            <p className="mt-8 text-[17px] md:text-[19px] text-white/90 leading-relaxed max-w-[480px]">
              A pre-tax wellness plan lets an employee redirect part of their pre-tax compensation toward qualified wellness benefits.
            </p>
            <p className="mt-5 text-[17px] md:text-[19px] text-white/90 leading-relaxed max-w-[480px]">
              The dollars come out of gross pay before federal income tax and FICA are calculated. The employee's taxable income drops. Their take-home pay rises by the tax that would otherwise have been withheld.
            </p>
            <p className="mt-6 text-[17px] md:text-[19px] text-white/90 leading-relaxed max-w-[480px]">
              At the same time, the employer's FICA obligation drops on the same lower wage base. The math works for both sides because the IRS structures it that way.
            </p>
            <p className="mt-5 text-[17px] md:text-[19px] text-white/90 leading-relaxed max-w-[480px]">
              The cost of the wellness benefits comes out of the savings, not out of new payroll.
            </p>
          </div>

          <div className="bg-background text-slate-ink rounded-2xl p-8 md:p-10">
            <p className="font-serif-display text-[20px] text-slate-ink">
              Worked example: one employee
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