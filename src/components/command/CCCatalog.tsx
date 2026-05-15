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
      { name: "WER1 Success Club", desc: "Training and mentorship for entrepreneurs and families building sustainable income through skills, systems, and community-based opportunities." },
      { name: "Rise Up Group Coaching", desc: "Group coaching focused on mindset, leadership, and growth strategies. Members break through limits and accelerate momentum together." },
      { name: "Personal Accountability Coach", desc: "A dedicated coach who helps you stay focused, implement priorities, and follow through on goals with structure and consistent check-ins." },
      { name: "Abundance Opportunity Access", desc: "Introductions to vetted income, partnership, and investment opportunities focused on long-term, values-aligned wealth building." },
      { name: "Executive Coaching", desc: "One-on-one strategic coaching for founders and executives focused on clarity, leadership effectiveness, and scalable growth." },
      { name: "Strategic Sales Training", desc: "Structured sales training that equips owners and operators to lead value-driven conversations and convert opportunities into revenue." },
      { name: "WER1 Team Leadership Program", desc: "Leadership development that helps teams align, communicate, and perform at higher levels while building culture and accountability." },
    ],
  },
  {
    num: "02",
    slug: "marketing",
    name: "Marketing",
    image: "https://images.unsplash.com/photo-1702047063975-0841a0621b5a?auto=format&fit=crop&q=80&w=1200",
    alt: "A small marketing team at laptops around a table with a campaign on the screen behind them.",
    services: [
      { name: "Appendment AI", desc: "AI-powered marketing and automation tools for lead capture, follow-up, personalization, and conversion across campaigns." },
      { name: "Video Profile Production", desc: "Professionally produced video assets that communicate your brand story, credibility, and value proposition to prospects and partners." },
      { name: "Campaign Creation", desc: "Sales-focused marketing campaigns built to attract qualified prospects, generate leads, and convert attention into revenue." },
      { name: "Social Media Management", desc: "Done-for-you social media planning, posting, and optimization to maintain consistent visibility across key platforms." },
      { name: "Ad Management", desc: "Professional setup, management, and optimization of paid advertising campaigns to maximize ROI and reduce wasted spend." },
      { name: "Course Creation", desc: "End-to-end support for designing, producing, and launching digital courses that monetize expertise and expand authority." },
    ],
  },
  {
    num: "03",
    slug: "finance",
    name: "Finance",
    image: "https://images.unsplash.com/photo-1709880945165-d2208c6ad2ec?auto=format&fit=crop&q=80&w=1200",
    alt: "A calculator on financial charts with a laptop in the background, clean planning workspace.",
    services: [
      { name: "Expense Optimization Audit", desc: "A detailed analysis of business expenses to identify cost savings, eliminate inefficiencies, and improve cash flow without sacrificing growth." },
      { name: "Insurance Review", desc: "Evaluation of insurance and benefits strategies to reduce costs while improving coverage through smarter, tax-advantaged solutions." },
      { name: "Bookkeeping", desc: "Accurate and organized financial recordkeeping that ensures clarity, compliance, and reliable data for better decisions." },
      { name: "Personal Financial Planning", desc: "Strategic planning that aligns income, investments, taxes, and long-term goals into a cohesive personal wealth strategy." },
      { name: "Financial Statements", desc: "Preparation and review of professional financial statements that provide insight into performance, profitability, and growth trends." },
      { name: "Tax Planning", desc: "Proactive tax strategies built to legally minimize tax liability and keep more money working for your business and family." },
      { name: "Tax Filing", desc: "Accurate preparation and filing of required tax returns to ensure compliance and reduce risk while maximizing eligible deductions." },
      { name: "Fractional CFO Services", desc: "High-level financial leadership providing forecasting, strategy, and insight without the cost of a full-time chief financial officer." },
    ],
  },
  {
    num: "04",
    slug: "legal",
    name: "Legal",
    image: "https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?auto=format&fit=crop&q=80&w=1200",
    alt: "A lawyer with two clients at a desk reviewing and signing a contract.",
    services: [
      { name: "Referral Rewards Agreements", desc: "Custom legal agreements that define referral terms, tracking, and compensation to protect all parties and ensure compliance." },
      { name: "Partnership Agreements", desc: "Professionally drafted agreements that establish expectations, responsibilities, and protections for strategic partnerships and joint ventures." },
      { name: "NDAs", desc: "Confidentiality agreements built to protect sensitive information during partnerships, negotiations, and strategic discussions." },
      { name: "Succession Planning", desc: "Strategic planning to ensure smooth leadership and ownership transitions while protecting business continuity and family interests." },
      { name: "Merger and Acquisition Consulting", desc: "Expert guidance through buying, selling, or merging businesses to maximize value and reduce risk throughout the transaction." },
      { name: "Estate Planning", desc: "Legal structuring to protect assets, provide for heirs, and ensure your legacy is preserved according to your wishes." },
    ],
  },
  {
    num: "05",
    slug: "tech",
    name: "Tech",
    image: "https://images.unsplash.com/photo-1623281185000-6940e5347d2e?auto=format&fit=crop&q=80&w=1200",
    alt: "A dual-monitor developer workstation with code on screen, clean home-office setup.",
    services: [
      { name: "Tech Stack Review", desc: "Evaluation of your current tools and systems to eliminate redundancy, improve efficiency, and align technology with growth goals." },
      { name: "Website Design and Hosting", desc: "Professional website creation and hosting focused on performance, branding, user experience, and conversion." },
      { name: "CRM and Automation Setup", desc: "Implementation of CRM systems and automated workflows that handle follow-up, improve visibility, and increase sales efficiency." },
      { name: "Custom Integrations", desc: "Tailored system integrations that connect your tools, data, and workflows for clean operations and better reporting." },
      { name: "AI Systems Optimization", desc: "Optimization of AI tools and workflows to improve productivity, personalization, decision-making, and scalable growth." },
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
              The advisors, experts, and service providers available through the network. Members request what they need and get routed to the right partner.
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
