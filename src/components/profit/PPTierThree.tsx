const groups = [
  {
    title: "ALLIANCE PARTICIPATION (everything in Tier Two, plus)",
    items: [
      "Private Inner Circle sessions in addition to monthly masterminds",
      "Partner Pass for monthly mastermind meetings",
      "Speaking, media, and premium positioning opportunities",
    ],
  },
  {
    title: "COMMAND CENTRAL ACCESS",
    items: [
      "On-demand access to vetted experts in Marketing",
      "Sales",
      "Operations",
      "Technology",
      "Legal",
      "Financial",
    ],
  },
  {
    title: "DONE-WITH-YOU EXECUTION",
    items: [
      "Done-with-you partnership strategy and execution support",
      "Co-marketing campaign planning AND execution support",
      "Strategic deal structuring support (joint venture, referral, and revenue-share models)",
      "Priority deal flow, introductions, and partnership opportunities",
    ],
  },
  {
    title: "FOUNDER ACCESS",
    items: [
      "Dedicated Referral Partner Manager (priority level support)",
      "One-on-one access to CEO and Founder for strategy, deal review, and growth acceleration",
    ],
  },
  {
    title: "REFERRAL SYSTEMS AND EXCLUSIVITY",
    items: [
      "Lifetime Client Agency™ advanced deployment, ten user licenses",
      "LCA full implementation across the member's business",
      "Mastermind Passport™ primary plus partner pass",
      "Premium category exclusivity with expanded influence and positioning",
      "First right of refusal on new markets, partnerships, and revenue opportunities",
    ],
  },
];

const Dot = () => (
  <span aria-hidden className="inline-block w-2 h-2 rounded-full bg-gradient-warm flex-shrink-0 mt-[8px]" />
);

const PPTierThree = () => {
  return (
    <section style={{ backgroundColor: "#0B1F3F" }} className="text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div>
          <p className="text-[13px] font-medium tracking-[0.14em] uppercase text-white/70">TIER THREE</p>
          <h2 className="mt-2 font-serif-display text-white tracking-section" style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", lineHeight: 1.05 }}>
            Inner Circle
          </h2>
          <div className="mt-8">
            <p className="font-serif-display text-white" style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.25rem)", lineHeight: 1 }}>
              $100,000 annually
            </p>
            <p className="mt-2 text-[14px] text-white/70">
              or $10,000 monthly with a 12-month commitment
            </p>
          </div>
          <p className="mt-8 max-w-[480px] text-[17px] leading-relaxed text-white/90">
            The execution-focused tier. Inner Circle members get done-with-you partnership work, dedicated support across all of Command Central, and one-on-one access to the founder for strategy, deal review, and growth acceleration. The Lifetime Client Agency™ system gets fully deployed across the member's business at this tier with up to ten user licenses.
          </p>
          <p className="mt-6 max-w-[480px] text-[17px] leading-relaxed text-white/90">
            This is the tier for owners who don't want to figure out the partnership strategy on their own. You get the playbook, the platform, the introductions, and a team helping you execute. First right of refusal applies on new markets, partnerships, and revenue opportunities the network creates.
          </p>
          <a href="/apply?tier=inner-circle" className="mt-8 inline-block text-[15px] text-white">
            <span className="hover:bg-gradient-warm hover:bg-clip-text hover:text-transparent">
              Apply at Tier Three →
            </span>
          </a>
        </div>
        <div className="space-y-8">
          {groups.map((g) => (
            <div key={g.title}>
              <p className="text-[13px] font-medium tracking-[0.14em] uppercase text-white/70">{g.title}</p>
              <ul className="mt-4 space-y-3">
                {g.items.map((i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Dot />
                    <span className="text-[16px] leading-snug text-white/90">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PPTierThree;