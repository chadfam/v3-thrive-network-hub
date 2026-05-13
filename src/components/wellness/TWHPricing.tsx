const milestones = [
  "Day 0: Census submitted, savings analysis runs",
  "Week 1: Analysis returned, plan structure proposed",
  "Week 2-3: Plan documentation drafted and reviewed",
  "Week 3-4: Payroll integration completed",
  "Week 5-6: Open enrollment runs, plan goes live",
];

const TWHPricing = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[760px] px-6 sm:px-8 md:px-10 py-16 md:py-32 text-center">
        <h2
          className="font-serif-display text-slate-ink tracking-section"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
        >
          What it costs and when it pays back.
        </h2>
        <p className="mt-8 text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
          The Hub charges a flat administrative fee per participating employee per month. The fee is typically less than ten percent of the FICA savings the business sees on those employees, which means the plan covers its own cost in the first quarter for most businesses.
        </p>
        <p className="mt-6 text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
          Specific fee structure depends on the size of your team and which payroll provider you use. We give you the exact numbers in the savings analysis after reviewing your census. Most plans are signed within thirty days of that conversation.
        </p>

        <div
          className="mt-16 mx-auto max-w-[640px] bg-background rounded-2xl p-10 border text-left"
          style={{ borderColor: "#E0E3E7" }}
        >
          <ul className="mt-6 space-y-3">
            {milestones.map((m) => (
              <li key={m} className="flex items-start gap-3 text-[16px] text-[hsl(var(--slate-700))]">
                <span className="bullet-dot" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TWHPricing;