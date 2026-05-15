const items = [
  "Coaches with established practices",
  "Therapists and counselors transitioning toward coaching",
  "Pastors, clergy, and faith-based mentors",
  "Educators with strong family backgrounds",
  "Parent educators and parenting authors",
  "Marriage and family practitioners",
  "People with deep personal experience in family transitions",
];

const FGWhoFits = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-7">
            <h2
              className="font-serif-display text-slate-ink tracking-section"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
            >
              Who fits the role.
            </h2>
            <p className="mt-8 max-w-[540px] text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
              The role is built for practitioners who already do this work, or want to.
            </p>
            <p className="mt-5 max-w-[540px] text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
              Coaches who have spent years building a practice and are tired of the operational layer. Counselors and clergy whose pastoral work is closer to coaching than they admit. Educators who naturally end up running family workshops on the side. Parents who built unusual rhythms in their own household and want to help others do the same.
            </p>
            <p className="mt-6 max-w-[540px] text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
              We prioritize character, real experience with families, and the kind of grounded presence the work requires.
            </p>
            <p className="mt-5 max-w-[540px] text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
              Credentials matter where they matter. Platform mechanics and the FAM Guides framework can be taught. Wisdom about families either shows up in the conversation or it doesn't.
            </p>
          </div>
          <div className="md:col-span-5">
            <h3 className="font-serif-display text-[22px] md:text-[24px] text-slate-ink leading-tight">
              Who tends to apply
            </h3>
            <ul className="mt-6 space-y-4">
              {items.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-3 text-[17px] text-[hsl(var(--slate-700))]"
                >
                  <span className="bullet-dot" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 italic text-[15px] text-[hsl(var(--slate-500))]">
              Plus practitioners whose specialty doesn't fit a category but whose work clearly belongs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FGWhoFits;