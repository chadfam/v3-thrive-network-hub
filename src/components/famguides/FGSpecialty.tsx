const cards = [
  {
    label: "Path one",
    name: "Routines and Habits",
    body: "Help families build the small repeatable patterns that hold a household together. The work that families say they want to do and then don't get around to without someone running it with them.",
    examples: [
      "Family routine resets, weekly or monthly",
      "Phone-free habit cohorts",
      "Bedtime and morning rhythm coaching",
      "Weekly family meeting design",
      "Seasonal habit sprints",
    ],
  },
  {
    label: "Path two",
    name: "Parenting",
    body: "Coach parents through the conversations they don't have a script for. The work of parenting deliberately when the culture is pulling in the other direction.",
    examples: [
      "Tough conversation coaching for parents of teens",
      "Values-based parenting cohorts",
      "Sibling dynamics and family fairness",
      "Screen time and digital boundary work",
      "Faith and values transmission",
    ],
  },
  {
    label: "Path three",
    name: "Couples and Marriage",
    body: "Work with couples in cohort or one-on-one formats. Long-term marriages and early-stage ones both need real practitioners, not just retreat experiences.",
    examples: [
      "Pre-marriage and early-marriage cohorts",
      "Mid-life marriage rebuilds",
      "Communication and conflict coaching",
      "Couples leading a family business",
      "Date-night and rhythm restoration",
    ],
  },
  {
    label: "Path four",
    name: "Family Transitions",
    body: "The big shifts. The transitions where most families need a guide they didn't have before and can't easily find on their own.",
    examples: [
      "Empty nest and post-college transition",
      "Blended family integration",
      "Divorce navigation focused on the children",
      "Family business succession with the next generation",
      "Aging parent and elder care coaching",
    ],
  },
];

const FGSpecialty = () => {
  return (
    <section id="specialty-paths" style={{ backgroundColor: "#0B1F3F" }} className="text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2
            className="font-serif-display tracking-section"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
          >
            Four specialty paths. One umbrella.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] text-white/90 leading-relaxed">
            Most FAM Guides build a practice around one or two specialty areas. Some run general practices that cover multiple. The platform routes families to the right Guide based on what they need.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((c) => (
            <div key={c.label} className="bg-background text-slate-ink rounded-2xl p-10 md:p-12">
              <p className="text-[14px] text-[hsl(var(--slate-700))]">
                {c.label}
              </p>
              <h3 className="mt-3 font-serif-display text-slate-ink text-[28px]">{c.name}</h3>
              <p className="mt-4 text-[16px] text-[hsl(var(--slate-700))] leading-relaxed">
                {c.body}
              </p>
              <ul className="mt-6 space-y-3">
                {c.examples.map((e) => (
                  <li
                    key={e}
                    className="flex items-start gap-3 text-[16px] text-[hsl(var(--slate-700))]"
                  >
                    <span className="bullet-dot" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 mx-auto max-w-[720px] italic text-[16px] text-white/70 text-center">
          Plus whatever specialty you build on top of these. The role bends to the practice you want to run.
        </p>
      </div>
    </section>
  );
};

export default FGSpecialty;