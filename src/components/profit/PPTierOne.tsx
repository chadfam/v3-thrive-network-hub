const groups = [
  {
    title: "ALLIANCE PARTICIPATION",
    items: [
      "Coordinated co-marketing campaigns",
      "Referral partner introductions across the network (non-exclusive in your category)",
      "Inclusion in community events and promotions",
      "Networking and educational sessions",
    ],
  },
  {
    title: "REFERRAL SYSTEMS",
    items: [
      "Referral Partner Playbook (group-level guidance)",
      "Lifetime Client Agency™ system, foundational deployment",
      "Foundational systems to activate past clients, databases, and relationships",
      "One user license",
    ],
  },
  {
    title: "EXCLUSIVITY",
    items: ["None at this tier"],
  },
];

const Dot = () => (
  <span aria-hidden className="inline-block w-2 h-2 rounded-full bg-gradient-warm flex-shrink-0 mt-[8px]" />
);

const PPTierOne = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div>
          <p className="text-[13px] font-medium tracking-[0.14em] uppercase text-[hsl(var(--slate-500))]">TIER ONE</p>
          <h2 className="mt-2 font-serif-display text-slate-ink tracking-section" style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", lineHeight: 1.05 }}>
            Profit Partner
          </h2>
          <div className="mt-8">
            <p className="font-serif-display text-slate-ink" style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.25rem)", lineHeight: 1 }}>
              $10,000 annually
            </p>
            <p className="mt-2 text-[14px] text-[hsl(var(--slate-500))]">
              or $1,000 monthly with a 12-month commitment
            </p>
          </div>
          <p className="mt-8 max-w-[480px] text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">
            The foundational tier of Profit Partners. You join the alliance, you show up to the events, and you start receiving introductions across the network. Tier One is non-exclusive in your category, which means it's a fit for owners testing the alliance before committing to category exclusivity at the Mastermind tier.
          </p>
          <p className="mt-6 max-w-[480px] text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">
            The Lifetime Client Agency™ system is included at this tier with one user license. Most owners apply this to their existing client database in the first 60 days and start generating measurable referral activity from past customers within the first quarter.
          </p>
          <a href="/apply?tier=profit-partner" className="mt-8 inline-block text-[15px] text-slate-ink">
            <span className="hover:bg-gradient-warm hover:bg-clip-text hover:text-transparent">
              Apply at Tier One →
            </span>
          </a>
        </div>
        <div className="space-y-8">
          {groups.map((g) => (
            <div key={g.title}>
              <p className="text-[13px] font-medium tracking-[0.14em] uppercase text-[hsl(var(--slate-500))]">{g.title}</p>
              <ul className="mt-4 space-y-3">
                {g.items.map((i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Dot />
                    <span className="text-[16px] leading-snug text-[hsl(var(--slate-700))]">{i}</span>
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

export default PPTierOne;