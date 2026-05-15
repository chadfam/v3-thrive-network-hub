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
      { name: "WER1 Success Club", desc: "Build sustainable income at home through skills, systems, and a community already doing it." },
      { name: "Rise Up Group Coaching", desc: "Break through limits and accelerate momentum in a group of peers working on the same problems." },
      { name: "Personal Accountability Coach", desc: "Stay focused and follow through on what you said you'd do, with structured weekly check-ins." },
      { name: "Abundance Opportunity Access", desc: "Curated introductions to vetted income, partnership, and investment opportunities aligned with how you want to build wealth." },
      { name: "Executive Coaching", desc: "1:1 strategic coaching for founders and operators ready for the next level of leadership and clarity." },
      { name: "WER1 Team Leadership Program", desc: "Align your team, lift performance, and build the culture that holds it together." },
    ],
  },
  {
    num: "02",
    slug: "marketing",
    name: "Marketing",
    image: "https://images.unsplash.com/photo-1702047063975-0841a0621b5a?auto=format&fit=crop&q=80&w=1200",
    alt: "A small marketing team at laptops around a table with a campaign on the screen behind them.",
    services: [
      { name: "Appendment AI", desc: "AI-powered marketing and automation that captures, follows up, and converts leads without you in the loop." },
      { name: "Video Profile Production", desc: "Brand-story videos that communicate your credibility and value before you walk in the room." },
      { name: "Campaign Creation", desc: "Sales-focused campaigns that turn attention into revenue, designed and executed for you." },
      { name: "Social Media Management", desc: "Consistent visibility across the platforms that matter, handled for you." },
      { name: "Ad Management", desc: "Paid ad setup, management, and optimization that maximizes return and cuts wasted spend." },
      { name: "Course Creation", desc: "End-to-end help turning your expertise into a digital course you can sell." },
    ],
  },
  {
    num: "03",
    slug: "finance",
    name: "Finance",
    image: "https://images.unsplash.com/photo-1709880945165-d2208c6ad2ec?auto=format&fit=crop&q=80&w=1200",
    alt: "A calculator on financial charts with a laptop in the background, clean planning workspace.",
    services: [
      { name: "Expense Optimization Audit", desc: "Find the cost savings hiding in your business expenses and free up cash flow." },
      { name: "Insurance Review", desc: "Cut insurance and benefits costs while improving coverage, with tax-advantaged solutions." },
      { name: "Bookkeeping", desc: "Clean, organized financial records so you have clarity and reliable data when you need it." },
      { name: "Personal Financial Planning", desc: "Align income, investments, taxes, and long-term goals into one wealth strategy." },
      { name: "Tax Planning", desc: "Proactive strategy that legally minimizes tax liability and keeps more money working for you." },
      { name: "Fractional CFO Services", desc: "High-level financial leadership without the cost of a full-time CFO." },
    ],
  },
  {
    num: "04",
    slug: "legal",
    name: "Legal",
    image: "https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?auto=format&fit=crop&q=80&w=1200",
    alt: "A lawyer with two clients at a desk reviewing and signing a contract.",
    services: [
      { name: "Referral Rewards Agreements", desc: "Custom legal templates that define how referrals are tracked and rewarded so everyone gets paid right." },
      { name: "Partnership Agreements", desc: "Drafted agreements that set expectations and protect both sides of strategic partnerships and joint ventures." },
      { name: "NDAs", desc: "Confidentiality protection for the conversations that turn into deals." },
      { name: "Succession Planning", desc: "Smooth leadership and ownership transitions that protect business continuity and family interests." },
      { name: "Merger and Acquisition Consulting", desc: "Guidance through buying, selling, or merging a business to maximize value and reduce risk." },
      { name: "Estate Planning", desc: "Asset and legacy structuring that protects your family and your work." },
    ],
  },
  {
    num: "05",
    slug: "tech",
    name: "Tech",
    image: "https://images.unsplash.com/photo-1623281185000-6940e5347d2e?auto=format&fit=crop&q=80&w=1200",
    alt: "A dual-monitor developer workstation with code on screen, clean home-office setup.",
    services: [
      { name: "Tech Stack Review", desc: "Identify what to keep, consolidate, or replace so your tools align with growth instead of fighting it." },
      { name: "Website Design and Hosting", desc: "A site built and hosted for performance, brand, and conversion. Not just looks." },
      { name: "CRM and Automation Setup", desc: "Follow-up that runs itself, plus visibility into where every lead actually is." },
      { name: "Custom Integrations", desc: "Connect the tools and data already in your business so the workflow stops breaking." },
      { name: "AI Systems Optimization", desc: "AI tools and workflows tuned to your business so productivity, personalization, and decisions actually improve." },
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
              The advisors, experts, and service providers available through the network. Every one of them is someone we've personally worked with.
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
