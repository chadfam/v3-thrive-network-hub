type Service = { name: string; desc: string };
type Discipline = { num: string; name: string; services: Service[] };

const disciplines: Discipline[] = [
  {
    num: "01",
    name: "Coaching and Training",
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
    name: "Marketing",
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
    name: "Finance",
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
    name: "Legal",
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
    name: "Tech",
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
    <section id="catalog" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-10 py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className="font-serif-display text-slate-ink tracking-section"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
          >
            Inside the <span className="text-brand-blue ppx-italic">bench</span>.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            Every service available through the network. Members request what they need through the platform and get routed to the right partner.
          </p>
        </div>

        <div className="mt-20">
          {disciplines.map((d, idx) => (
            <div key={d.num}>
              {idx > 0 && (
                <div className="my-16" style={{ borderTop: "1px solid #E0E3E7" }} />
              )}
              <div className="flex items-baseline gap-5">
                <span className="font-serif-display text-[28px] md:text-[32px] text-gradient-warm">
                  {d.num}
                </span>
                <h3
                  className="font-serif-display text-slate-ink tracking-section"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.05 }}
                >
                  {d.name}
                </h3>
              </div>
              <div className="mt-10 grid md:grid-cols-2 gap-x-8 gap-y-6">
                {d.services.map((s) => (
                  <article key={s.name}>
                    <h4 className="font-serif-display text-[20px] text-slate-ink leading-snug">
                      {s.name}
                    </h4>
                    <p className="mt-1 text-[14px] leading-relaxed text-[hsl(var(--slate-700))]">
                      {s.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CCCatalog;