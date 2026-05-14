import { Link } from "react-router-dom";

const tiles = [
  {
    name: "Profit Partners™",
    body: "A working alliance of complementary business owners who actively recommend each other to the families they already serve.",
    to: "/profit-partners",
  },
  {
    name: "Mastermind Passport™",
    body: "Proximity is power. Walk into the rooms most owners spend years trying to find.",
    to: "/mastermind-passport",
  },
  {
    name: "Command Central™",
    body: "Your own board of advisors, experts, and service providers. Vetted, with set pricing.",
    to: "/command-central",
  },
  {
    name: "Local Leaders",
    body: "The trusted connector in your area, one per industry. Earn through impact.",
    to: "/local-leaders",
  },
  {
    name: "FAM Guides",
    body: "Help families feel more connected through the FAM Plan. A coaching practice with a platform underneath.",
    to: "/fam-guides",
  },
  {
    name: "Expert Faculty",
    body: "Five income streams for authors, speakers, and category leaders whose work helps families thrive.",
    to: "/expert-faculty",
  },
];

const FullNetwork = () => {
  return (
    <section id="for-businesses" className="scroll-mt-24 bg-white border-t border-slate-ink/10">
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
          Three core programs for owners. Three roles for the leaders and experts who serve them. One platform underneath all of it.
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
            Also in the network:
          </p>
          <Link to="/promo-engine" className="text-[15px] text-slate-ink hover:text-brand-blue transition-colors">
            Promo Engine
          </Link>
          <span aria-hidden className="text-slate-300">·</span>
          <Link to="/team-wellness-hub" className="text-[15px] text-slate-ink hover:text-brand-blue transition-colors">
            Team Wellness Hub
          </Link>
          <span aria-hidden className="text-slate-300">·</span>
          <Link to="/wer1" className="text-[15px] text-slate-ink hover:text-brand-blue transition-colors">
            WER1
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FullNetwork;
