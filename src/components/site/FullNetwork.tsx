import { Link } from "react-router-dom";

type Tile = { name: string; desc: string; cta: string; to: string };

const groupA: Tile[] = [
  { name: "Profit Partners™", desc: "A curated alliance of business owners building referral revenue together. Three tiers, all annual.", cta: "Learn more →", to: "/profit-partners" },
  { name: "Mastermind Passport™", desc: "Guest invitations into 40+ elite mastermind communities. Genius Network. Strategic Coach. GoBundance. Flight Club.", cta: "Learn more →", to: "/mastermind-passport" },
  { name: "Command Central™", desc: "A vetted bench of experts across marketing, sales, finance, legal, and tech. Included from Mastermind tier and above.", cta: "Learn more →", to: "/command-central" },
  { name: "Team Wellness Hub", desc: "A Section 125 wellness program. Saves the business taxes. Adds $1,500+ to employee take-home pay. No insurance disruption.", cta: "Learn more →", to: "/team-wellness-hub" },
];

const groupB: Tile[] = [
  { name: "Local Leaders", desc: "The trusted connector in your zip code, one per industry. Lead families. Connect businesses. Earn through impact.", cta: "Learn more →", to: "/local-leaders" },
  { name: "FAM Guides", desc: "Coach families through the work of being more present. Real outcomes, recurring income, mission-driven.", cta: "Learn more →", to: "/fam-guides" },
  { name: "Expert Faculty", desc: "Share your expertise with families nationwide. Featured across the FAM Central platform. Five income streams.", cta: "Learn more →", to: "/expert-faculty" },
];

const TileCard = ({ tile, large = false }: { tile: Tile; large?: boolean }) => (
  <article
    className={`card-surface card-surface-hover rounded-2xl flex flex-col p-6 md:p-7`}
  >
    <h3 className={`font-serif-display text-slate-ink leading-tight ${large ? "text-[24px] md:text-[26px]" : "text-[22px]"}`}>
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
  <p className="flex items-center text-[13px] tracking-[0.18em] uppercase text-[hsl(var(--slate-500))] mb-6">
    <span className="inline-block w-2 h-2 rounded-full bg-gradient-warm-diag mr-3" aria-hidden />
    {children}
  </p>
);

const FullNetwork = () => {
  return (
    <section id="for-businesses" className="surface-muted">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-14 md:py-20">
        <h2 className="font-serif-display section-headline text-slate-ink text-center">
          Seven programs. One community. One engine.
        </h2>
        <p className="mt-6 mx-auto max-w-[600px] text-center text-[17px] text-[hsl(var(--slate-700))]">
          Each program serves a specific need. They're built to compound. Members in one are usually members in others.
        </p>

        <div className="mt-16 md:mt-20">
          <GroupHeader>For Businesses</GroupHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {groupA.map((t) => <TileCard key={t.name} tile={t} />)}
          </div>
        </div>

        <div id="for-leaders" className="mt-16 md:mt-20 scroll-mt-24">
          <GroupHeader>For Leaders</GroupHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {groupB.map((t) => <TileCard key={t.name} tile={t} />)}
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <GroupHeader>The Engine</GroupHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="sm:col-span-2 lg:col-span-2">
              <TileCard
                tile={{
                  name: "WER1",
                  desc: "The referral and rewards platform behind every program above. Members, partners, and promoters all earn from the same system.",
                  cta: "See how it works →",
                  to: "/wer1",
                }}
                large
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullNetwork;