type Service = { name: string; desc: string };
type Area = {
  num: string;
  slug: string;
  name: string;
  image: string;
  alt: string;
  services: Service[];
};

const areas: Area[] = [
  {
    num: "01",
    slug: "coaching-and-training",
    name: "Coaching and training",
    image: "https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?auto=format&fit=crop&q=80&w=1200",
    alt: "Two people in a private coaching conversation across a table in warm daylight.",
    services: [
      { name: "WER1 Success Club", desc: "Skills, systems, and community for entrepreneurs and families building sustainable income." },
      { name: "Rise Up Group Coaching", desc: "Mindset, leadership, and growth strategies in a peer group format." },
      { name: "Personal Accountability Coach", desc: "A dedicated coach for focus, follow-through, and weekly check-ins." },
      { name: "Abundance Opportunity Access", desc: "Introductions to vetted income, partnership, and investment opportunities." },
      { name: "Executive Coaching", desc: "One-on-one strategic coaching for founders and operators." },
      { name: "Strategic Sales Training", desc: "Structured sales training for value-driven conversations that convert." },
      { name: "WER1 Team Leadership Program", desc: "Team alignment, communication, and culture-building." },
    ],
  },
  {
    num: "02",
    slug: "marketing",
    name: "Marketing",
    image: "https://images.unsplash.com/photo-1702047063975-0841a0621b5a?auto=format&fit=crop&q=80&w=1200",
    alt: "A small marketing team at laptops around a table with a campaign on the screen behind them.",
    services: [
      { name: "Appendment AI", desc: "AI marketing and automation for lead capture, follow-up, and conversion." },
      { name: "Video Profile Production", desc: "Brand story videos that communicate credibility and value." },
      { name: "Campaign Creation", desc: "Sales-focused marketing campaigns, built and executed for you." },
      { name: "Social Media Management", desc: "Done-for-you planning, posting, and optimization across platforms." },
      { name: "Ad Management", desc: "Setup, management, and optimization of paid advertising." },
      { name: "Course Creation", desc: "End-to-end digital course design, production, and launch." },
    ],
  },
  {
    num: "03",
    slug: "finance",
    name: "Finance",
    image: "https://images.unsplash.com/photo-1709880945165-d2208c6ad2ec?auto=format&fit=crop&q=80&w=1200",
    alt: "A calculator on financial charts with a laptop in the background, clean planning workspace.",
    services: [
      { name: "Expense Optimization Audit", desc: "Analysis of business expenses to identify savings and improve cash flow." },
      { name: "Insurance Review", desc: "Cost versus coverage evaluation with tax-advantaged options." },
      { name: "Bookkeeping", desc: "Accurate, organized financial recordkeeping for clarity and compliance." },
      { name: "Personal Financial Planning", desc: "Strategy aligning income, investments, taxes, and long-term goals." },
      { name: "Financial Statements", desc: "Professional statements for performance, profitability, and growth tracking." },
      { name: "Tax Planning", desc: "Proactive strategies to legally minimize tax liability." },
      { name: "Tax Filing", desc: "Accurate preparation and filing of required tax returns." },
      { name: "Fractional CFO Services", desc: "High-level financial leadership without the full-time cost." },
    ],
  },
  {
    num: "04",
    slug: "legal",
    name: "Legal",
    image: "https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?auto=format&fit=crop&q=80&w=1200",
    alt: "A lawyer with two clients at a desk reviewing and signing a contract.",
    services: [
      { name: "Referral Rewards Agreements", desc: "Custom legal templates for referral terms, tracking, and compensation." },
      { name: "Partnership Agreements", desc: "Drafted agreements for strategic partnerships and joint ventures." },
      { name: "NDAs", desc: "Confidentiality protection for sensitive discussions and negotiations." },
      { name: "Succession Planning", desc: "Plans for smooth leadership and ownership transitions." },
      { name: "Merger and Acquisition Consulting", desc: "Guidance through buying, selling, or merging a business." },
      { name: "Estate Planning", desc: "Asset protection and legacy structuring." },
    ],
  },
  {
    num: "05",
    slug: "tech",
    name: "Technology",
    image: "https://images.unsplash.com/photo-1623281185000-6940e5347d2e?auto=format&fit=crop&q=80&w=1200",
    alt: "A dual-monitor developer workstation with code on screen, clean home-office setup.",
    services: [
      { name: "Tech Stack Review", desc: "Evaluation of tools and systems to align with growth." },
      { name: "Website Design and Hosting", desc: "Site creation and hosting focused on performance and conversion." },
      { name: "CRM and Automation Setup", desc: "CRM and automated workflows for follow-up and visibility." },
      { name: "Custom Integrations", desc: "System integrations connecting tools, data, and workflows." },
      { name: "AI Systems Optimization", desc: "AI tools and workflows optimized for productivity and decision-making." },
    ],
  },
];

const CCCatalog = () => {
  return (
    <section id="catalog">
      {/* Section intro */}
      <div className="bg-brand-blue/5 border-t border-slate-ink/10">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 pt-20 md:pt-32 pb-12 md:pb-16">
          <div className="max-w-[820px]">
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

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[640px]">
              Different specialties, different people. The standing is the same across the board.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[640px]">
              A coach for the leadership work. A marketer for the funnel. An accountant for the books. An attorney for the agreements. A technologist for the systems. Each one helping to build businesses worth recommending.
            </p>
          </div>
        </div>
      </div>

      {/* Five area sub-sections */}
      {areas.map((area, idx) => {
        const imageFirst = idx % 2 === 0;
        const bg = idx % 2 === 0 ? "bg-background" : "bg-brand-blue/5";
        return (
          <div
            key={area.slug}
            id={area.slug}
            className={`${bg} scroll-mt-24 border-t border-slate-ink/10`}
          >
            <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-24">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <div className={imageFirst ? "lg:order-1" : "lg:order-2"}>
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
                    <img
                      src={area.image}
                      srcSet={`${area.image.replace("w=1200", "w=640")} 640w, ${area.image} 1200w`}
                      sizes="(max-width: 1024px) 100vw, 600px"
                      alt={area.alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                  <p className="font-serif-display text-[28px] md:text-[32px] text-gradient-warm leading-none">
                    {area.num}
                  </p>
                  <h3
                    className="mt-3 font-serif-display text-slate-ink"
                    style={{
                      fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                      lineHeight: 1.05,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {area.name}
                  </h3>
                  <div className="mt-8 space-y-5">
                    {area.services.map((s) => (
                      <article key={s.name}>
                        <h4 className="font-serif-display text-[18px] md:text-[20px] text-slate-ink leading-snug">
                          {s.name}
                        </h4>
                        <p className="mt-1 text-[14px] md:text-[15px] leading-relaxed text-[hsl(var(--slate-700))]">
                          {s.desc}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CCCatalog;
