import { Link } from "react-router-dom";

type Tile = { name: string; desc: string; cta: string; to: string };

const businesses: Tile[] = [
  { name: "Profit Partners™", desc: "A working alliance of business owners building referral revenue together. Complementary businesses promoting each other to the families they already serve, plus promotion inside FAM Central.", cta: "Learn more →", to: "/profit-partners" },
  { name: "Mastermind Passport™", desc: "Proximity is power. Walk into the rooms most owners spend years trying to find, where capital, partnerships, and the right introductions move.", cta: "Learn more →", to: "/mastermind-passport" },
  { name: "Command Central™", desc: "Your own board of advisors, experts, and service providers. Vetted, with set pricing, across marketing, sales, finance, legal, and tech. So you stop guessing who to trust.", cta: "Learn more →", to: "/command-central" },
];

const leaders: Tile[] = [
  { name: "FAM Guides", desc: "Help families feel more connected with a FAM Plan that's actually theirs. A coaching practice with a platform underneath.", cta: "Learn more →", to: "/fam-guides" },
  { name: "Local Leaders", desc: "Become the trusted connector in your area, one per industry. Lead families. Connect businesses. Earn through impact.", cta: "Learn more →", to: "/local-leaders" },
  { name: "Expert Faculty", desc: "Bring what you know to the families who need it. Featured across the network, with more income streams than a single offer.", cta: "Learn more →", to: "/expert-faculty" },
];

const solutions: Tile[] = [
  { name: "Promo Engine", desc: "Sell high-converting promotions online and capture revenue before customers walk in. Built for in-person businesses.", cta: "Learn more →", to: "/promo-engine" },
  { name: "Team Wellness Hub", desc: "A supplemental wellness program: better health benefits for your team, $1,500+ more in employee take-home pay, and around $640 a year in tax savings per employee for the business.", cta: "Learn more →", to: "/team-wellness-hub" },
  { name: "WER1", desc: "One magic link to share every program in the network. Get paid when people buy, no matter which program they choose.", cta: "Learn more →", to: "/wer1" },
];

const TileCard = ({ tile }: { tile: Tile }) => (
  <article className="card-surface card-surface-hover rounded-2xl flex flex-col p-6 md:p-7">
    <h3 className="font-serif-display text-slate-ink leading-tight text-[22px]">
      {tile.name}
    </h3>
    <p className="mt-3 text-[16px] text-[hsl(var(--slate-700))] leading-relaxed flex-1">
      {tile.desc}
    </p>
    <Link to={tile.to} className="mt-5 inline-block text-[14px] text-slate-ink hover:underline underline-offset-4">
      {tile.cta}
    </Link>
  </article>
);

const GroupHeader = ({ children }: { children: string }) => (
  <p className="flex items-center font-serif-display text-[20px] text-slate-ink mb-6">
    <span className="inline-block w-2 h-2 rounded-full bg-brand-blue mr-3" aria-hidden />
    {children}
  </p>
);

const FullNetwork = () => {
  return (
    <section id="for-businesses" className="surface-muted">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-14 md:py-20">
        <h2 className="font-serif-display section-headline text-slate-ink text-center">
          One network. Three lanes in.
        </h2>
        <p className="mt-6 mx-auto max-w-[640px] text-center text-[17px] text-[hsl(var(--slate-700))]">
          Three core programs for businesses. Three leadership roles for connectors and coaches. Three solutions for the work that sits alongside.
        </p>

        <div className="mt-16 md:mt-20">
          <GroupHeader>For Businesses</GroupHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {businesses.map((t) => <TileCard key={t.name} tile={t} />)}
          </div>
        </div>

        <div id="for-leaders" className="mt-16 md:mt-20 scroll-mt-24">
          <GroupHeader>For Leaders</GroupHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {leaders.map((t) => <TileCard key={t.name} tile={t} />)}
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <GroupHeader>Solutions</GroupHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((t) => <TileCard key={t.name} tile={t} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullNetwork;
