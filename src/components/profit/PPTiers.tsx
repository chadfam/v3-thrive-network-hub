type Tier = {
  label: string;
  name: string;
  tagline: string;
  annual: string;
  monthly: string;
  inclusions: string[];
  href: string;
  flagship?: boolean;
};

const tiers: Tier[] = [
  {
    label: "TIER ONE",
    name: "Profit Partner",
    tagline: "The foundational alliance membership. Co-marketing, introductions, and the Lifetime Client Agency™ system.",
    annual: "$10,000 annually",
    monthly: "or $1,000 monthly with a 12-month commitment",
    inclusions: [
      "Co-marketing campaigns and community events",
      "Referral partner introductions across the network",
      "Lifetime Client Agency™ system (one user license)",
      "Networking and educational sessions",
    ],
    href: "/apply?tier=profit-partner",
  },
  {
    label: "MOST APPLIED TO",
    name: "Profit Partners Mastermind",
    tagline: "Category exclusivity, monthly masterminds, your first Mastermind Passport. Where most members start.",
    annual: "$25,000 annually",
    monthly: "or $2,500 monthly with a 12-month commitment",
    inclusions: [
      "Everything in Tier One",
      "Category exclusivity in your market",
      "Monthly mastermind meetings",
      "Mastermind Passport™ access (one pass, valued at $10,000)",
      "Assigned referral partner manager",
      "Lifetime Client Agency™ enhanced (two user licenses)",
    ],
    href: "/apply?tier=mastermind",
    flagship: true,
  },
  {
    label: "TIER THREE",
    name: "Inner Circle",
    tagline: "The execution layer. Command Central, founder one-on-ones, done-with-you partnership work.",
    annual: "$100,000 annually",
    monthly: "or $10,000 monthly with a 12-month commitment",
    inclusions: [
      "Everything in Tier Two",
      "Command Central™ access across all disciplines",
      "Dedicated referral partner manager",
      "One-on-one access to the founder",
      "Lifetime Client Agency™ advanced (ten user licenses)",
      "Done-with-you partnership strategy and execution",
      "First right of refusal on new markets and opportunities",
    ],
    href: "/apply?tier=inner-circle",
  },
];

const Dot = () => (
  <span aria-hidden className="inline-block w-2 h-2 rounded-full bg-gradient-warm flex-shrink-0 mt-[8px]" />
);

const PPTiers = () => {
  return (
    <section id="tiers" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2 className="font-serif-display text-slate-ink tracking-section" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
            Three tiers.<br />All annual.
          </h2>
          <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            The structure scales with the level of access you want into the network and the depth of operating support you need on the partnership work.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl ${t.flagship ? "md:-translate-y-2" : ""}`}
              style={
                t.flagship
                  ? {
                      padding: "2px",
                      backgroundImage: "var(--gradient-warm)",
                      boxShadow: "0 24px 48px -16px hsl(var(--slate) / 0.28)",
                    }
                  : { border: "1px solid #E0E3E7" }
              }
            >
              <div className={`flex flex-col h-full bg-white rounded-2xl p-10 md:p-12`}>
                <p
                  className={`text-[13px] font-medium tracking-[0.14em] uppercase ${t.flagship ? "text-transparent bg-clip-text bg-gradient-warm" : "text-[hsl(var(--slate-500))]"}`}
                >
                  {t.label}
                </p>
                <h3 className="mt-4 font-serif-display text-slate-ink" style={{ fontSize: "clamp(1.6rem, 2.4vw, 2rem)", lineHeight: 1.15 }}>
                  {t.name}
                </h3>
                <p className="mt-3 text-[16px] font-medium text-[hsl(var(--slate-700))]">
                  {t.tagline}
                </p>
                <div className="my-6 h-px w-full bg-[#E0E3E7]" />
                <p className="font-serif-display text-slate-ink" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: 1 }}>
                  {t.annual}
                </p>
                <p className="mt-2 text-[14px] text-[hsl(var(--slate-500))]">
                  {t.monthly}
                </p>
                <p className="mt-8 text-[13px] font-medium tracking-[0.14em] uppercase text-[hsl(var(--slate-500))]">
                  WHAT YOU GET
                </p>
                <ul className="mt-5 space-y-3 flex-grow">
                  {t.inclusions.map((i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <Dot />
                      <span className="text-[16px] leading-snug text-[hsl(var(--slate-700))]">{i}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={t.href}
                  className="group relative mt-8 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-[15px] font-medium text-white bg-slate-ink overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">Apply at this tier</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-14 mx-auto max-w-[640px] text-center italic text-[16px] text-[hsl(var(--slate-500))]">
          All tiers are 12-month commitments. Annual payment in full or monthly with 12-month financial commitment. Membership is by application and reviewed for category alignment in your market.
        </p>
      </div>
    </section>
  );
};

export default PPTiers;