const tiles = [
  { name: "Coaching and Training", desc: "Sharper leadership, selling, and follow-through." },
  { name: "Marketing", desc: "Getting the business in front of the right people." },
  { name: "Finance", desc: "Clear books and money that works harder." },
  { name: "Legal", desc: "Protection for agreements, ownership, and what you've built." },
  { name: "Tech", desc: "Tools and systems that carry their weight." },
];

const CCDisciplines = () => {
  return (
    <section className="bg-brand-blue/5 border-t border-slate-ink/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className="font-serif-display text-slate-ink tracking-section"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
          >
            Coverage across the work you can't do <span className="text-brand-blue ppx-italic">alone</span>.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            A business owner makes decisions every week in areas far outside their own training. Command Central covers the ground where getting outside help wrong is expensive.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {tiles.map((t, i) => (
            <article
              key={t.name}
              className={`rounded-xl bg-white p-8 text-center ${
                i === 4 ? "sm:col-span-2 sm:max-w-sm sm:mx-auto sm:w-full lg:col-span-1 lg:max-w-none" : ""
              }`}
              style={{ border: "1px solid #E0E3E7" }}
            >
              <div className="mx-auto h-[2px] w-8 bg-brand-blue" />
              <h3 className="mt-5 font-serif-display text-[24px] leading-snug text-slate-ink">
                {t.name}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[hsl(var(--slate-500))]">
                {t.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CCDisciplines;
