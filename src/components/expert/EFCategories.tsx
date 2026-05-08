const tiles = [
  { name: "Parenting and family dynamics", desc: "Raising kids, sibling relationships, generational patterns" },
  { name: "Faith and values", desc: "Spiritual life, values transmission, community traditions" },
  { name: "Health and wellness", desc: "Physical health, mental health, family routines" },
  { name: "Financial literacy", desc: "Personal finance, family money systems, generational wealth" },
  { name: "Relationships and marriage", desc: "Couples work, communication, lifelong partnership" },
  { name: "Education and personal growth", desc: "Learning, character development, life skills" },
];

const EFCategories = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2 className="font-serif-display tracking-section text-slate-ink" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
            The categories families come for.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[720px] mx-auto">
            FAM Central organizes Expert Faculty content into six categories. Most experts focus on one or two. Some span more.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {tiles.map((t) => (
            <div key={t.name} className="rounded-xl bg-background border border-[hsl(var(--slate)/0.12)] p-7 text-center">
              <div className="mx-auto h-[2px] w-8 bg-gradient-warm" />
              <h3 className="mt-5 font-serif-display text-[22px] text-slate-ink leading-tight">{t.name}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[hsl(var(--slate-700))]">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EFCategories;