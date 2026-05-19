import { Link } from "react-router-dom";

const groups = [
  {
    title: "For Businesses",
    to: "/businesses",
    line: "Grow through the families your network already serves.",
    programs: [
      {
        name: "Profit Partners™",
        desc: "A working alliance of complementary owners who recommend each other to the families they serve.",
        to: "/profit-partners",
      },
      {
        name: "Mastermind Passport™",
        desc: "Guest access to elite mastermind communities and entrepreneurial networks through one membership.",
        to: "/mastermind-passport",
      },
      {
        name: "Command Central™",
        desc: "Your own board of advisors, experts, and service providers.",
        to: "/command-central",
      },
    ],
  },
  {
    title: "For Leaders",
    to: "/leaders",
    line: "Become the trusted connector for the families around you.",
    programs: [
      {
        name: "FAM Guides",
        desc: "Coaches who help families feel more connected through a plan that's theirs.",
        to: "/fam-guides",
      },
      {
        name: "Local Leaders",
        desc: "The trusted connector in your area. One Leader per industry.",
        to: "/local-leaders",
      },
      {
        name: "Expert Faculty",
        desc: "A curated network of experts whose content reaches families across the network.",
        to: "/expert-faculty",
      },
    ],
  },
  {
    title: "Solutions",
    to: null,
    line: "Tools that strengthen what you already do.",
    programs: [
      {
        name: "Promo Engine",
        desc: "Sell promotions online and capture revenue before customers walk in.",
        to: "/promo-engine",
      },
      {
        name: "Team Wellness Hub",
        desc: "A supplemental, pre-tax wellness benefit for W-2 employers.",
        to: "/team-wellness-hub",
      },
      {
        name: "WER1",
        desc: "One magic link that pays the right person when an introduction becomes a customer.",
        to: "/wer1",
      },
    ],
  },
];

const ThreeWays = () => {
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
          <span className="text-brand-blue ppx-italic">Three Ways to Win</span> inside the WEcosystem.
        </h2>

        <p className="mt-8 mx-auto max-w-[720px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          Whether you run a business, lead in your community, or share your work as an expert, there's a place for you here.
        </p>

        <div className="mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 text-left">
          {groups.map((g) => (
            <article
              key={g.title}
              className="rounded-2xl overflow-hidden bg-white flex flex-col shadow-[0_10px_30px_-4px_rgba(15,23,42,0.12)]"
            >
              <div aria-hidden className="h-1" style={{ backgroundColor: "#16294C" }} />
              <div className="flex flex-col flex-1 p-7 md:p-8">
                <h3 className="font-serif-display text-[22px] md:text-[24px] leading-tight text-slate-ink">
                  {g.to ? (
                    <Link to={g.to} className="hover:text-brand-blue transition-colors">
                      {g.title}
                    </Link>
                  ) : (
                    g.title
                  )}
                </h3>
                <p className="mt-2 text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                  {g.line}
                </p>

                <ul className="mt-7 space-y-5 border-t border-slate-ink/10 pt-7">
                  {g.programs.map((p) => (
                    <li key={p.name}>
                      <Link to={p.to} className="group inline-flex items-center">
                        <span className="font-serif-display text-[17px] md:text-[18px] leading-tight text-slate-ink group-hover:text-brand-blue transition-colors">
                          {p.name}
                        </span>
                        <span
                          aria-hidden
                          className="ml-1.5 text-brand-blue transition-transform group-hover:translate-x-0.5"
                        >
                          →
                        </span>
                      </Link>
                      <p className="mt-1 text-[14px] md:text-[15px] leading-relaxed text-[hsl(var(--slate-700))]">
                        {p.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeWays;
