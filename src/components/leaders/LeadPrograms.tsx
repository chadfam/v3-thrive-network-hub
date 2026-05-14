import { Link } from "react-router-dom";

const tiles = [
  {
    name: "Local Leaders",
    body: "The trusted connector in your area, one per industry. Lead families. Connect businesses. Earn through impact.",
    to: "/local-leaders",
  },
  {
    name: "FAM Guides",
    body: "Coach families through the FAM Plan, the family's own plan for feeling more connected. Recurring monthly revenue.",
    to: "/fam-guides",
  },
  {
    name: "Expert Faculty",
    body: "Five income streams for authors, speakers, coaches, and category leaders whose work helps families thrive.",
    to: "/expert-faculty",
  },
  {
    name: "FAM Plan deliverable",
    body: "The family's own plan, the core deliverable behind every FAM Guide engagement. Built once, lived for years.",
    to: "/fam-guides",
  },
  {
    name: "Training and certification",
    body: "Role-specific curriculum and standards. Most paths take four to eight weeks before your first paid engagement.",
    to: "/fam-guides",
  },
  {
    name: "WER1 magic link",
    body: "One link, every program. Earnings attributed automatically as your community moves through the network.",
    to: "/wer1",
  },
];

const LeadPrograms = () => {
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
          What you get when you <span className="text-brand-blue ppx-italic">step into the role</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          Three roles, three supporting pieces. One application; we match you to the path that fits.
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

export default LeadPrograms;
