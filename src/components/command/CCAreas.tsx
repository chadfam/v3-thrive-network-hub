import { Users, Megaphone, Calculator, Scale, Code } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Item = { name: string; desc: string };
type Area = {
  num: string;
  slug: string;
  name: string;
  scope: string;
  Icon: LucideIcon;
  image: string;
  alt: string;
  intro: string[];
  items: Item[];
};

const areas: Area[] = [
  {
    num: "01",
    slug: "coaching-and-training",
    name: "Coaching and training",
    scope: "Leadership, sales, accountability.",
    Icon: Users,
    image: "https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?auto=format&fit=crop&q=80&w=1200",
    alt: "Two people in a private coaching conversation across a table in warm daylight.",
    intro: [
      "Coaching is where most members start, because the work of running a business presses on the owner long before it presses on anything else. Time, focus, leadership patterns, follow-through, the conversations the owner is or isn't having.",
      "The advisors here include executive coaches, peer group facilitators, accountability partners, and sales trainers. Engagements range from one-on-one work to peer-group formats to ongoing accountability.",
    ],
    items: [
      { name: "WER1 Success Club", desc: "A community-based program with skills, systems, and shared learning for entrepreneurs and families building sustainable income." },
      { name: "Rise Up Group Coaching", desc: "A peer-group coaching format covering mindset, leadership, and growth strategies." },
      { name: "Personal Accountability Coach", desc: "A dedicated coach for focus, follow-through, and weekly check-ins." },
      { name: "Abundance Opportunity Access", desc: "Introductions to income, partnership, and investment opportunities inside the network." },
      { name: "Executive Coaching", desc: "One-on-one strategic coaching for founders and operators." },
      { name: "Strategic Sales Training", desc: "Structured training for value-based sales conversations." },
      { name: "WER1 Team Leadership Program", desc: "Team alignment, communication, and culture-building for growing teams." },
    ],
  },
  {
    num: "02",
    slug: "marketing",
    name: "Marketing",
    scope: "Campaigns, video, ads, content.",
    Icon: Megaphone,
    image: "https://images.unsplash.com/photo-1702047063975-0841a0621b5a?auto=format&fit=crop&q=80&w=1200",
    alt: "A small marketing team at laptops around a table with a campaign on the screen behind them.",
    intro: [
      "Marketing covers the work between an audience and a purchase. Campaigns, videos, ads, social posting, course production, and the systems underneath all of it.",
      "The advisors here include campaign builders, ad managers, video producers, social operators, and the people who design the marketing systems that hold everything together.",
    ],
    items: [
      { name: "Appendment AI", desc: "AI-driven marketing and automation for lead capture and follow-up." },
      { name: "Video Profile Production", desc: "Brand story videos covering origin, work, and category position." },
      { name: "Campaign Creation", desc: "Marketing campaigns from concept to launch across the relevant channels." },
      { name: "Social Media Management", desc: "Planning, posting, and optimization across the relevant platforms." },
      { name: "Ad Management", desc: "Setup, management, and optimization of paid advertising." },
      { name: "Course Creation", desc: "Digital course design, production, and launch." },
    ],
  },
  {
    num: "03",
    slug: "finance",
    name: "Finance",
    scope: "Books, taxes, CFO oversight.",
    Icon: Calculator,
    image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?auto=format&fit=crop&q=80&w=1200",
    alt: "Four people in business attire gathered at a table, reviewing a printed financial document together.",
    intro: [
      "Finance is where the work of a business meets the math. Bookkeeping, financial statements, tax planning, expense audits, insurance reviews, cash-flow modeling, fractional CFO oversight.",
      "The advisors here include bookkeepers, CFOs, tax preparers, financial planners, and analysts. Questions range from this month's cash to next year's tax strategy to the architecture of an eventual exit.",
    ],
    items: [
      { name: "Expense Optimization Audit", desc: "Analysis of business expenses to identify savings and improve cash flow." },
      { name: "Insurance Review", desc: "Cost-versus-coverage evaluation with tax-advantaged options." },
      { name: "Bookkeeping", desc: "Accurate, organized financial recordkeeping for clarity and compliance." },
      { name: "Personal Financial Planning", desc: "Strategy aligning income, investments, taxes, and long-term goals." },
      { name: "Financial Statements", desc: "Prepared statements for ongoing performance and profitability tracking." },
      { name: "Tax Planning", desc: "Proactive strategies to legally minimize tax liability." },
      { name: "Tax Filing", desc: "Accurate preparation and filing of required tax returns." },
      { name: "Fractional CFO", desc: "Fractional CFO support covering financial strategy, oversight, and reporting." },
    ],
  },
  {
    num: "04",
    slug: "legal",
    name: "Legal",
    scope: "Agreements, partnerships, estate.",
    Icon: Scale,
    image: "https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80&w=1200",
    alt: "Two women in an office reviewing and signing documents at a desk.",
    intro: [
      "Legal coverage shows up in agreements, contracts, partnerships, succession plans, and estate plans. The work is often invisible until a question lands that requires it.",
      "The advisors here are practicing attorneys across business, transactions, and estate. The scope depends on what the member's situation calls for.",
    ],
    items: [
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
    scope: "Sites, CRM, integrations, AI.",
    Icon: Code,
    image: "https://images.unsplash.com/photo-1623281185000-6940e5347d2e?auto=format&fit=crop&q=80&w=1200",
    alt: "A dual-monitor developer workstation with code on screen, clean home-office setup.",
    intro: [
      "Technology underwrites how a business operates day to day. Websites, hosting, CRM, automation, integration, AI tooling.",
      "The advisors here include developers, systems architects, CRM specialists, and AI practitioners. The work ranges from auditing a tech stack to building integrations that connect tools and data across the business.",
    ],
    items: [
      { name: "Tech Stack Review", desc: "Evaluation of tools and systems to fit the work of the business." },
      { name: "Website Design and Hosting", desc: "Site creation and hosting focused on speed and visibility." },
      { name: "CRM and Automation Setup", desc: "CRM and automated workflows for follow-up and visibility." },
      { name: "Custom Integrations", desc: "System integrations connecting tools, data, and workflows." },
      { name: "AI Systems Optimization", desc: "AI tools and workflows configured for productivity and decision quality." },
    ],
  },
];

const CCAreas = () => {
  return (
    <section id="catalog">
      {/* Section intro */}
      <div className="bg-brand-blue/5 border-t border-slate-ink/10">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 pt-20 md:pt-32 pb-16 md:pb-20">
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
              The board's expertise lives across coaching, marketing, finance, legal, and technology. Each area has its own depth, its own advisors, and its own scope of work.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[640px]">
              Each section below describes the area, the kinds of advisors who stand in it, and the work that typically falls inside it.
            </p>
          </div>

          {/* 5-up area grid */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {areas.map((area) => {
              const Icon = area.Icon;
              return (
                <a
                  key={area.slug}
                  href={`#${area.slug}`}
                  className="group rounded-2xl bg-background border border-slate-ink/10 p-5 md:p-6 hover:border-brand-blue/40 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="w-7 h-7 text-brand-blue/80 group-hover:text-brand-blue transition-colors" strokeWidth={1.5} />
                    <span className="font-serif-display text-[20px] md:text-[22px] text-gradient-warm leading-none">
                      {area.num}
                    </span>
                  </div>
                  <p className="mt-5 font-serif-display text-[17px] md:text-[19px] text-slate-ink leading-snug group-hover:text-brand-blue transition-colors">
                    {area.name}
                  </p>
                  <p className="mt-2 text-[13px] md:text-[14px] leading-relaxed text-[hsl(var(--slate-700))]">
                    {area.scope}
                  </p>
                </a>
              );
            })}
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
            <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-28">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <div className={imageFirst ? "lg:order-1" : "lg:order-2"}>
                  <div className="lg:sticky lg:top-24">
                    <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl">
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
                </div>
                <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                  <div className="flex items-baseline gap-4">
                    <p className="font-serif-display text-[28px] md:text-[32px] text-gradient-warm leading-none">
                      {area.num}
                    </p>
                    <area.Icon className="w-6 h-6 text-brand-blue/70" strokeWidth={1.5} />
                  </div>
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
                  {area.intro.map((p, i) => (
                    <p
                      key={i}
                      className={`${i === 0 ? "mt-6" : "mt-4"} text-[16px] md:text-[17px] leading-[1.7] text-[hsl(var(--slate-700))]`}
                    >
                      {p}
                    </p>
                  ))}
                  <div className="mt-10 space-y-5 pt-8 border-t border-slate-ink/10">
                    {area.items.map((s) => (
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

export default CCAreas;
