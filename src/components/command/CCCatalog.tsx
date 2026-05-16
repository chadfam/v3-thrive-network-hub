type Service = { name: string; desc: string };
type Discipline = {
  num: string;
  slug: string;
  name: string;
  image: string;
  alt: string;
  services: Service[];
};

const disciplines: Discipline[] = [
  {
    num: "01",
    slug: "coaching-and-training",
    name: "Coaching and Training",
    image: "https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?auto=format&fit=crop&q=80&w=1200",
    alt: "Two people in a private coaching conversation across a table in warm daylight.",
    services: [
      { name: "WER1 Success Club", desc: "Skills, systems, and community for building sustainable income at home." },
      { name: "Rise Up Group Coaching", desc: "Mindset, leadership, and growth strategies in a peer group format." },
      { name: "Personal Accountability Coach", desc: "A dedicated coach for follow-through, focus, and consistency." },
      { name: "Abundance Opportunity Access", desc: "Introductions to vetted income, partnership, and investment opportunities." },
      { name: "Executive Coaching", desc: "1:1 strategic coaching for founders and operators." },
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
      { name: "Appendment AI", desc: "AI-powered marketing and automation for lead capture, follow-up, and conversion." },
      { name: "Video Profile Production", desc: "Brand-story videos produced for credibility and visibility." },
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
      { name: "Insurance Review", desc: "Cost-vs-coverage evaluation with tax-advantaged options." },
      { name: "Bookkeeping", desc: "Accurate, organized financial recordkeeping for clarity and compliance." },
      { name: "Personal Financial Planning", desc: "Strategy aligning income, investments, taxes, and long-term goals." },
      { name: "Tax Planning", desc: "Proactive strategies to legally minimize tax liability." },
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
    name: "Tech",
    image: "https://images.unsplash.com/photo-1623281185000-6940e5347d2e?auto=format&fit=crop&q=80&w=1200",
    alt: "A dual-monitor developer workstation with code on screen, clean home-office setup.",
    services: [
      { name: "Tech Stack Review", desc: "Evaluation of tools and systems to eliminate redundancy and align with growth." },
      { name: "Website Design and Hosting", desc: "Site creation and hosting focused on performance, branding, and conversion." },
      { name: "CRM and Automation Setup", desc: "Implementation of CRM and automated workflows for follow-up and visibility." },
      { name: "Custom Integrations", desc: "System integrations connecting tools, data, and workflows." },
      { name: "AI Systems Optimization", desc: "Optimization of AI tools and workflows for productivity and decision-making." },
    ],
  },
];

const CCCatalog = () => {
  return (
    <section id="catalog">
      {/* Intro */}
      <div className="bg-background border-t border-slate-ink/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pt-20 md:pt-32 pb-4 md:pb-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2
              className="font-serif-display text-slate-ink tracking-section"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
            >
              Inside your <span className="text-brand-blue ppx-italic">board of advisors</span>.
            </h2>
            <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
              What the board can take on, from coaching to tech.
            </p>
          </div>
        </div>
      </div>

      {/* Disciplines */}
      {disciplines.map((d, idx) => {
        const imageFirst = idx % 2 === 0;
        const bg = idx % 2 === 0 ? "bg-background" : "bg-brand-blue/5";
        return (
          <div key={d.slug} id={d.slug} className={`${bg} scroll-mt-24 border-t border-slate-ink/10`}>
            <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-24">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className={imageFirst ? "lg:order-1" : "lg:order-2"}>
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
                    <img
                      src={d.image}
                      srcSet={`${d.image.replace("w=1200", "w=640")} 640w, ${d.image} 1200w`}
                      sizes="(max-width: 1024px) 100vw, 600px"
                      alt={d.alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                  <p className="font-serif-display text-[28px] md:text-[32px] text-gradient-warm leading-none">
                    {d.num}
                  </p>
                  <h3
                    className="mt-3 font-serif-display text-slate-ink"
                    style={{
                      fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                      lineHeight: 1.05,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {d.name}
                  </h3>
                  <div className="mt-8 space-y-5">
                    {d.services.map((s) => (
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
