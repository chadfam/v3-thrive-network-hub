type Group = {
  title: string;
  items: string[];
};

const groups: Group[] = [
  {
    title: "ALLIANCE PARTICIPATION",
    items: [
      "Coordinated co-marketing campaigns and community promotions",
      "Referral partner introductions across the network",
      "Inclusion in community events and signature gatherings",
      "Networking, educational sessions, and group advisory",
      "Monthly mastermind meetings focused on strategy, partnerships, and deal flow",
      "Private Inner Circle sessions for senior partners",
      "Speaking, media, and premium positioning opportunities",
    ],
  },
  {
    title: "PARTNERSHIP SUPPORT",
    items: [
      "Assigned Referral Partner Manager",
      "Priority introductions to high-value referral and joint venture partners",
      "Done-with-you partnership strategy and execution support",
      "Co-marketing campaign planning and execution",
      "Strategic deal structuring across joint venture, referral, and revenue-share models",
      "Priority deal flow and partnership opportunities",
    ],
  },
  {
    title: "REFERRAL SYSTEMS",
    items: [
      "Lifetime Client Agency™ system deployed across your business",
      "Referral Partner Playbook",
      "Systems to activate past clients, databases, and relationships",
      "Integration into the WER1 referral platform",
    ],
  },
  {
    title: "COMMAND CENTRAL ACCESS",
    items: [
      "Vetted experts and service providers in Marketing",
      "Sales",
      "Operations",
      "Technology",
      "Legal",
      "Financial",
    ],
  },
  {
    title: "FOUNDER & LEADERSHIP ACCESS",
    items: [
      "One-on-one access to the CEO and Founder for strategy, deal review, and growth acceleration",
      "Dedicated Referral Partner Manager at senior levels",
      "First right of refusal on new markets, partnerships, and revenue opportunities",
    ],
  },
  {
    title: "EXCLUSIVITY & POSITIONING",
    items: [
      "Category exclusivity in your defined market",
      "Premium positioning across campaigns, events, and the Profit Partners network",
      "Mastermind Passport™ access into elite communities",
      "Partner Pass options for additional team members",
    ],
  },
];

const Dot = () => (
  <span aria-hidden className="inline-block w-2 h-2 rounded-full bg-brand-blue flex-shrink-0 mt-[8px]" />
);

const PPBenefits = () => {
  return (
    <section id="benefits" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2 className="mt-6 font-serif-display text-slate-ink tracking-section" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
            One alliance.<br />Built around your business.
          </h2>
          <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            Profit Partners is one program with one purpose: build a referral-driven business that compounds. The benefits below are the full menu of what the alliance brings. We work with you on a private call to fit the right blend to your stage, market, and goals.
          </p>
        </div>

        <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-8 md:gap-10">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl bg-white p-8 md:p-10 border border-[hsl(var(--slate-200))]">
              <p className="text-[14px] text-[hsl(var(--slate-700))]">
                {g.title}
              </p>
              <ul className="mt-6 space-y-3">
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

        <div className="mt-16 md:mt-20 mx-auto max-w-[680px] text-center">
          <h3 className="font-serif-display text-slate-ink" style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", lineHeight: 1.1 }}>
            We customize the program to fit your business.
          </h3>
          <p className="mt-6 text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">
            Every Profit Partner relationship is shaped on a private call. We talk through where you are, what you need, and what makes sense to invest in. The right starting point depends on your business, and that's the conversation we'd rather have together than predict on a webpage.
          </p>
          <a href="/apply" className="btn-primary mt-10">
            Apply to Profit Partners
          </a>
        </div>
      </div>
    </section>
  );
};

export default PPBenefits;
