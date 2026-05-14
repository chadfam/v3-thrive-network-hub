import { Link } from "react-router-dom";

const tiles = [
  {
    name: "Profit Partners™",
    body: "The flagship business alliance. A working referral network of complementary owners building joint ventures and partnerships.",
    to: "/profit-partners",
  },
  {
    name: "WER1",
    body: "The referral platform underneath every program. Tracks every introduction and pays everyone in the chain.",
    to: "/wer1",
  },
  {
    name: "FAM Central",
    body: "The family engagement platform. Where families connect with local leaders, expert content, and the businesses they trust.",
    to: "/fam-central",
  },
  {
    name: "Local Leaders + FAM Guides",
    body: "Community connector and family coaching roles. Paid positions for the leaders already doing the work informally.",
    to: "/leaders",
  },
  {
    name: "Expert Faculty",
    body: "Five income streams for authors, speakers, coaches, and category leaders whose work helps families thrive.",
    to: "/expert-faculty",
  },
  {
    name: "Mastermind Passport™ + Command Central™",
    body: "Elite mastermind access and your own vetted board of advisors. Both unlock through Profit Partners tier-based membership.",
    to: "/businesses",
  },
];

const also = [
  { name: "Team Wellness Hub", to: "/team-wellness-hub" },
  { name: "Promo Engine", to: "/promo-engine" },
];

const AboutCompanies = () => {
  return (
    <section className="bg-white border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display text-slate-ink mx-auto max-w-[820px]"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          Inside the <span className="text-brand-blue ppx-italic">WEcosystem</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          United to Thrive runs as a connected WEcosystem of programs and platforms. Each one was built or acquired to play a specific role in the network, and each one runs on the same referral engine underneath.
        </p>

        <div className="mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 text-left">
          {tiles.map((t) => (
            <article
              key={t.name}
              className="rounded-2xl bg-white p-7 md:p-8 border border-slate-ink/10 flex flex-col hover:border-brand-blue/30 transition-colors"
            >
              <h3 className="font-serif-display text-[22px] md:text-[24px] leading-tight text-slate-ink">
                {t.name}
              </h3>
              <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))] flex-1">
                {t.body}
              </p>
              <Link
                to={t.to}
                className="group mt-6 inline-flex items-center text-[14px] font-semibold text-brand-blue"
              >
                Learn more
                <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-slate-ink/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <p className="text-[14px] font-medium text-[hsl(var(--slate-500))]">
            Also operating:
          </p>
          {also.map((a, i) => (
            <span key={a.name} className="flex items-center">
              <Link to={a.to} className="text-[15px] text-slate-ink hover:text-brand-blue transition-colors">
                {a.name}
              </Link>
              {i < also.length - 1 && <span aria-hidden className="ml-6 text-slate-300">·</span>}
            </span>
          ))}
        </div>

        <p className="mt-10 mx-auto max-w-[640px] italic text-[14px] text-[hsl(var(--slate-500))]">
          Trademarks of United To Thrive LLC. The WEcosystem grows as new programs come into the family.
        </p>
      </div>
    </section>
  );
};

export default AboutCompanies;
