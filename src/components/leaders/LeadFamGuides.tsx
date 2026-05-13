const items = [
  "Family routine resets, weekly or monthly",
  "Phone-free habit cohorts for parents",
  "Tough conversation coaching for parents of teens",
  "Values-based parenting cohorts",
  "One-on-one family coaching",
  "Group challenges and seasonal sprints",
  "Pre-marriage and early-marriage cohorts",
  "Empty nest transition coaching",
];

const LeadFamGuides = () => {
  return (
    <section id="fam-guides" style={{ backgroundColor: "#0B1F3F" }} className="text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32 grid md:grid-cols-2 gap-12 md:gap-16 md:items-start">
        <div>
          <div className="font-serif-display text-[28px] text-white/50">02</div>
          <h2 className="mt-2 font-serif-display tracking-section text-white" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1.05 }}>
            FAM Guides
          </h2>
          <p className="mt-6 text-[19px] font-medium text-white max-w-[440px]">
            Coach families through the work of being more present.
          </p>
          <p className="mt-8 text-[17px] leading-relaxed text-white/90 max-w-[440px]">
            Most parents are doing fine on the structural stuff. Health insurance. After-school activities. College savings.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-white/90 max-w-[440px]">
            What's missing is the connecting work that holds a family together. Phone-free dinners. Hard conversations with teenagers. Weekly rhythms that don't require an app to remember.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-white/90 max-w-[440px]">
            FAM Guides coach families through that work. One-on-one or in small cohorts.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-white/90 max-w-[440px]">
            The model is closer to a fitness coach than a therapist. Recurring, results-oriented, low-friction. The training is built around outcomes families can name out loud six months in.
          </p>
          <p className="mt-6 italic text-[15px] text-white/70 max-w-[440px]">
            Recurring monthly revenue. The platform handles billing, scheduling, and family matching so you spend your time coaching.
          </p>
          <a href="/fam-guides" className="group mt-6 inline-flex items-center text-[15px] font-medium text-white">
            <span className="group-hover:text-gradient-warm transition-colors">FAM Guides details →</span>
          </a>
        </div>
        <div>
          <div className="text-[13px] font-medium uppercase tracking-[0.14em] text-white/70">WHAT FAM GUIDES DO</div>
          <ul className="mt-6 space-y-4">
            {items.map((it) => (
              <li key={it} className="flex items-start gap-4 text-[18px] text-white">
                <span className="mt-2.5 inline-block w-2.5 h-2.5 rounded-full bg-brand-blue shrink-0" aria-hidden />
                <span>{it}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 italic text-[15px] text-white/60">
            And whatever specialty you build the practice around.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadFamGuides;