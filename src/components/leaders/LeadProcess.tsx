const steps = [
  {
    num: "01",
    name: "Apply and get matched",
    body: "Submit a short application. We talk through your background, your community, and the role that fits. Apply once; we route from there.",
  },
  {
    num: "02",
    name: "Get trained and certified",
    body: "Role-specific training on the platform, the framework, and the standards we hold practitioners to. Most paths take four to eight weeks.",
  },
  {
    num: "03",
    name: "Lead the work you're already doing",
    body: "Local introductions, family coaching cohorts, or expert content distributed across the network. The platform handles billing, scheduling, and family matching.",
  },
  {
    num: "04",
    name: "Earn through impact",
    body: "WER1 attributes every connection back to its source. Recurring monthly revenue from the work you're doing well.",
  },
];

const LeadProcess = () => {
  return (
    <section className="bg-[hsl(220_30%_98%)] border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display text-slate-ink mx-auto max-w-[820px]"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          Four steps. One application. <span className="text-brand-blue ppx-italic">Real impact</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[640px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          A clear path from the work you're already doing informally to a paid position with platform support.
        </p>

        <div className="mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 text-left">
          {steps.map((s) => (
            <article
              key={s.num}
              className="rounded-2xl bg-white p-7 md:p-8 border border-slate-ink/10 flex flex-col"
            >
              <span className="font-serif-display text-brand-blue text-[18px] tracking-tight">
                {s.num}
              </span>
              <h3 className="mt-5 font-serif-display text-[20px] md:text-[22px] leading-tight text-slate-ink">
                {s.name}
              </h3>
              <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadProcess;
