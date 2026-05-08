const steps = [
  {
    n: "01",
    name: "Sarah runs a parenting cohort.",
    body: "Sarah is a Local Leader in Mesa, Arizona. She runs a monthly parenting cohort through the Local Leaders program. Six families show up regularly.",
  },
  {
    n: "02",
    name: "Amanda mentions she needs a financial advisor.",
    body: "One of the moms in Sarah's cohort, Amanda, mentions she's been looking for a financial advisor. She's tired of getting passed around by big firms.",
  },
  {
    n: "03",
    name: "Sarah introduces Amanda to Chris.",
    body: "Sarah introduces Amanda to Chris, a financial advisor in the Phoenix Profit Partners chapter. Sarah knows him from a Profit Partners networking event. The introduction goes through the WER1 platform so it's tracked.",
  },
  {
    n: "04",
    name: "Amanda hires Chris.",
    body: "Amanda hires Chris for a financial planning engagement. The deal closes inside the platform.",
  },
  {
    n: "05",
    name: "Four people get paid automatically.",
    body: "WER1 attributes the deal to four people. Amanda's family earns on the engagement because the recommendation flowed through her account. Sarah the Local Leader earns because she made the introduction. The promoter who originally signed Sarah up to WER1 earns through Waves of Pay. And the partner who referred Chris into the Phoenix chapter earns through Waves of Pay on the partner side. All four payouts happen the same day the deal closes.",
  },
];

const HowWalkthrough = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[720px] mx-auto">
          <h2
            className="font-serif-display text-slate-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            Walk through one transaction.
          </h2>
          <p className="mt-6 text-[19px] leading-relaxed text-slate-700">
            A single referral inside the network. Five steps. Four people paid.
          </p>
        </div>

        <ol className="mt-16 max-w-3xl mx-auto">
          {steps.map((s, i) => (
            <li key={s.n} className="relative grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-6 pb-12 last:pb-0">
              {i < steps.length - 1 && (
                <span
                  className="absolute left-[30px] md:left-[40px] top-[60px] bottom-0 w-px bg-brand-blue opacity-40"
                  aria-hidden
                />
              )}
              <div
                className="font-serif-display text-brand-blue text-center"
                style={{ fontSize: "clamp(36px, 5vw, 48px)", lineHeight: 1 }}
              >
                {s.n}
              </div>
              <div>
                <h3 className="font-serif-display text-slate-ink" style={{ fontSize: 24, lineHeight: 1.2 }}>
                  {s.name}
                </h3>
                <p className="mt-3 text-[17px] leading-relaxed text-slate-700 max-w-[640px]">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 mx-auto text-center italic text-[16px] leading-relaxed text-slate-500" style={{ maxWidth: 640 }}>
          Specific commission percentages, payout schedules, and tier configurations live inside the platform. Members and promoters see their earnings in real time.
        </p>
      </div>
    </section>
  );
};

export default HowWalkthrough;