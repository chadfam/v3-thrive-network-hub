const groups = [
  {
    title: "ALLIANCE PARTICIPATION (everything in Tier One, plus)",
    items: [
      "Monthly mastermind meetings focused on strategy, partnerships, and deal flow",
      "Group advisory sessions and collaborative deal-making",
      "Enhanced visibility in campaigns, events, and promotions",
    ],
  },
  {
    title: "PARTNERSHIP SUPPORT",
    items: [
      "Assigned Referral Partner Manager",
      "Priority introductions to high-value referral and JV partners",
    ],
  },
  {
    title: "REFERRAL SYSTEMS",
    items: [
      "Lifetime Client Agency™ enhanced implementation and optimization",
      "LCA integrated into referral and co-marketing strategies",
      "Two user licenses",
    ],
  },
  {
    title: "EXCLUSIVITY",
    items: [
      "One partner per industry per defined market",
      "Contingent on participation, performance, and alignment",
    ],
  },
];

const Dot = () => (
  <span aria-hidden className="inline-block w-2 h-2 rounded-full bg-gradient-warm flex-shrink-0 mt-[8px]" />
);

const PPTierTwo = () => {
  return (
    <section className="relative bg-background">
      <div className="absolute inset-0 warm-tint-bg pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div>
          <p className="text-[13px] font-medium tracking-[0.14em] uppercase text-[hsl(var(--slate-500))] flex items-center gap-2">
            <span aria-hidden className="inline-block w-2 h-2 rounded-full bg-gradient-warm" />
            TIER TWO, MOST APPLIED TO
          </p>
          <h2 className="mt-2 font-serif-display text-slate-ink tracking-section" style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", lineHeight: 1.05 }}>
            Mastermind
          </h2>
          <div className="mt-8">
            <p className="font-serif-display text-slate-ink" style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.25rem)", lineHeight: 1 }}>
              $25,000 annually
            </p>
            <p className="mt-2 text-[14px] text-[hsl(var(--slate-500))]">
              or $2,500 monthly with a 12-month commitment
            </p>
          </div>
          <p className="mt-8 max-w-[480px] text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">
            This is where most members start. The Mastermind tier is the level where category exclusivity kicks in, monthly mastermind meetings begin, and the Mastermind Passport opens up access to the elite communities most owners spend years trying to find.
          </p>
          <p className="mt-6 max-w-[480px] text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">
            You're assigned a Referral Partner Manager whose job is to support your introductions, alignment, and follow-through. The Lifetime Client Agency™ system is enhanced at this tier and integrated into the referral and co-marketing strategies you run with the alliance. Two user licenses included.
          </p>
          <p className="mt-4 max-w-[480px] text-[15px] italic text-[hsl(var(--slate-500))]">
            The Mastermind Passport access alone is valued at $10,000.
          </p>
          <a href="/apply?tier=mastermind" className="mt-8 inline-block text-[15px] text-slate-ink">
            <span className="hover:bg-gradient-warm hover:bg-clip-text hover:text-transparent">
              Apply at Tier Two →
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

export default PPTierTwo;