const areas = [
  { name: "Coaching and training", services: "mentorship, group coaching, executive coaching, leadership development" },
  { name: "Marketing", services: "automation, video, campaigns, social, ads, course creation" },
  { name: "Finance", services: "bookkeeping, financial planning, taxes, fractional CFO, expense audits, insurance review" },
  { name: "Legal", services: "partnership agreements, NDAs, succession planning, M&A consulting, estate planning, referral rewards" },
  { name: "Technology", services: "tech stack review, websites, CRM and automation, integrations, AI systems" },
];

const CCCatalog = () => {
  return (
    <section id="catalog" className="bg-brand-blue/5 border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2
              className="font-serif-display text-slate-ink"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              Coverage in every area.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Different specialties, different people. The standing is the same across the board.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              A coach for the leadership work. A marketer for the funnel. An accountant for the books. An attorney for the agreements. A technologist for the systems.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Each one helping to build businesses worth recommending.
            </p>
          </div>

          <div
            className="rounded-2xl bg-white p-7 sm:p-9 md:p-10"
            style={{ border: "1px solid #E0E3E7" }}
          >
            <ul className="space-y-6">
              {areas.map((area) => (
                <li key={area.name}>
                  <h3 className="font-serif-display text-[20px] md:text-[22px] text-slate-ink leading-snug">
                    {area.name}
                  </h3>
                  <p className="mt-2 text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                    {area.services}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCCatalog;
