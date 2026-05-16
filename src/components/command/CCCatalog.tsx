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
      { name: "WER1 Success Club", desc: "Skills, systems, and a peer community for building dependable income from a home-based business." },
      { name: "Rise Up Group Coaching", desc: "Mindset and leadership growth worked through with a small group of other owners." },
      { name: "Personal Accountability Coach", desc: "A dedicated coach who keeps focus and follow-through from slipping." },
      { name: "Abundance Opportunity Access", desc: "Introductions to reviewed income, partnership, and investment opportunities." },
      { name: "Executive Coaching", desc: "One-on-one strategic guidance for founders carrying the weight of the whole business." },
      { name: "Strategic Sales Training", desc: "Practical training that sharpens how a team sells and closes." },
      { name: "WER1 Team Leadership Program", desc: "Alignment, communication, and culture work for the people you lead." },
    ],
  },
  {
    num: "02",
    slug: "marketing",
    name: "Marketing",
    image: "https://images.unsplash.com/photo-1702047063975-0841a0621b5a?auto=format&fit=crop&q=80&w=1200",
    alt: "A small marketing team at laptops around a table with a campaign on the screen behind them.",
    services: [
      { name: "Appendment AI", desc: "AI-driven lead capture, follow-up, and conversion that runs without constant attention." },
      { name: "Video Profile Production", desc: "Brand-story video that builds credibility before a prospect ever talks to you." },
      { name: "Campaign Creation", desc: "Sales-focused marketing campaigns built and run on your behalf." },
      { name: "Social Media Management", desc: "Planning, posting, and refining your presence across platforms, handled for you." },
      { name: "Ad Management", desc: "Paid advertising set up, monitored, and adjusted toward results." },
      { name: "Course Creation", desc: "Digital courses designed, produced, and brought to launch end to end." },
    ],
  },
  {
    num: "03",
    slug: "finance",
    name: "Finance",
    image: "https://images.unsplash.com/photo-1709880945165-d2208c6ad2ec?auto=format&fit=crop&q=80&w=1200",
    alt: "A calculator on financial charts with a laptop in the background, clean planning workspace.",
    services: [
      { name: "Expense Optimization Audit", desc: "A close look at where money leaves the business and where it does not need to." },
      { name: "Insurance Review", desc: "Coverage weighed against cost, with tax-aware options on the table." },
      { name: "Bookkeeping", desc: "Records kept accurate and organized so the numbers can be trusted." },
      { name: "Personal Financial Planning", desc: "A strategy that ties income, investments, and taxes to long-term goals." },
      { name: "Financial Statements", desc: "Clear, current statements that show where the business stands." },
      { name: "Tax Planning", desc: "Forward-looking moves that lower the tax bill within the rules." },
      { name: "Tax Filing", desc: "Returns prepared and filed accurately and on time." },
      { name: "Fractional CFO Services", desc: "Senior financial leadership without a full-time salary attached." },
    ],
  },
  {
    num: "04",
    slug: "legal",
    name: "Legal",
    image: "https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?auto=format&fit=crop&q=80&w=1200",
    alt: "A lawyer with two clients at a desk reviewing and signing a contract.",
    services: [
      { name: "Referral Rewards Agreements", desc: "Written terms for how referrals are tracked and compensated." },
      { name: "Partnership Agreements", desc: "Agreements that put strategic partnerships and joint ventures on solid ground." },
      { name: "NDAs", desc: "Confidentiality protection for sensitive conversations and negotiations." },
      { name: "Succession Planning", desc: "A plan for handing off leadership and ownership without disruption." },
      { name: "Merger and Acquisition Consulting", desc: "Guidance through buying, selling, or combining a business." },
      { name: "Estate Planning", desc: "Structure that protects assets and the legacy behind them." },
    ],
  },
  {
    num: "05",
    slug: "tech",
    name: "Tech",
    image: "https://images.unsplash.com/photo-1623281185000-6940e5347d2e?auto=format&fit=crop&q=80&w=1200",
    alt: "A dual-monitor developer workstation with code on screen, clean home-office setup.",
    services: [
      { name: "Tech Stack Review", desc: "An audit of your tools to cut overlap and match what the business is growing into." },
      { name: "Website Design and Hosting", desc: "A site built and hosted for speed, brand, and conversion." },
      { name: "CRM and Automation Setup", desc: "A CRM and automated workflows put in place so follow-up never drops." },
      { name: "Custom Integrations", desc: "Separate tools and data connected into one working system." },
      { name: "AI Systems Optimization", desc: "AI tools tuned to genuinely save time and sharpen decisions." },
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
              A closer look at each <span className="text-brand-blue ppx-italic">area</span>.
            </h2>
            <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
              What each part of Command Central can take on, service by service.
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
