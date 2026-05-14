import { Link } from "react-router-dom";

const tiles = [
  {
    name: "Profit Partners™",
    body: "A working alliance of complementary business owners actively recommending each other to the families they already serve.",
    to: "/profit-partners",
  },
  {
    name: "Mastermind Passport™",
    body: "Proximity is power. Walk into the elite mastermind rooms most owners spend years trying to find.",
    to: "/mastermind-passport",
  },
  {
    name: "Command Central™",
    body: "Your own board of advisors, experts, and service providers. Vetted, with set pricing, across five disciplines.",
    to: "/command-central",
  },
  {
    name: "Lifetime Client Agency™",
    body: "Activate your past clients. Generate repeat business. Turn old relationships into ongoing referral sources.",
    to: "/profit-partners",
  },
  {
    name: "FAM Central promotion",
    body: "Members get promoted inside the FAM Central app to the families using it every day.",
    to: "/profit-partners",
  },
  {
    name: "Team Wellness Hub",
    body: "Real wellness benefits for your team that save you payroll taxes. Adds $1,500+ to employee take-home pay annually.",
    to: "/team-wellness-hub",
  },
];

const BizPrograms = () => {
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
          What your year inside <span className="text-brand-blue ppx-italic">Profit Partners</span> includes.
        </h2>

        <p className="mt-8 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          Six programs and tools, one application, one alliance. Tier-based access opens more of the network as you go deeper.
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
      </div>
    </section>
  );
};

export default BizPrograms;
