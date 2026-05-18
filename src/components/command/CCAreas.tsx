const areas = [
  {
    name: "Coaching & Training",
    desc: "Executive and group coaching, strategic sales training, accountability coaching, leadership development.",
  },
  {
    name: "Marketing",
    desc: "Campaign creation, social media and ad management, video production, course creation, AI marketing tools.",
  },
  {
    name: "Finance",
    desc: "Bookkeeping, fractional CFO services, tax planning and filing, expense optimization, financial statements, insurance review.",
  },
  {
    name: "Legal",
    desc: "Partnership and referral rewards agreements, NDAs, succession planning, mergers and acquisitions, estate planning.",
  },
  {
    name: "Tech",
    desc: "Tech stack reviews, website design and hosting, CRM and automation setup, custom integrations, AI systems optimization.",
  },
];

const CCAreas = () => {
  return (
    <section className="bg-white border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display text-slate-ink mx-auto max-w-[820px]"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          Coverage across the work owners can't do{" "}
          <span className="text-brand-blue ppx-italic">alone</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          A board of advisors, experts, and service providers across the five areas owners turn to most.
        </p>

        <div className="mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 text-left">
          {areas.map((a) => (
            <article
              key={a.name}
              className="rounded-2xl overflow-hidden bg-white flex flex-col shadow-[0_10px_30px_-4px_rgba(15,23,42,0.12)]"
            >
              <div aria-hidden className="h-1" style={{ backgroundColor: "#2563EB" }} />
              <div className="flex flex-col flex-1 p-7 md:p-8">
                <h3 className="font-serif-display text-[20px] md:text-[22px] leading-tight text-slate-ink">
                  {a.name}
                </h3>
                <p className="mt-3 text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                  {a.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CCAreas;
