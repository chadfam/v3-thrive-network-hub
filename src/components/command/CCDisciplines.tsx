const tiles = [
  { name: "Coaching and Training", desc: "Mentorship and structure for the next level of you and your team." },
  { name: "Marketing", desc: "Get found, sell more, and stop guessing at your funnel." },
  { name: "Finance", desc: "Cash flow, tax strategy, and financial leadership done right." },
  { name: "Legal", desc: "Agreements that protect every deal you make." },
  { name: "Tech", desc: "Tools and systems that actually run your business." },
];

const CCDisciplines = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className="font-serif-display text-slate-ink tracking-section"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
          >
            Every discipline you <span className="text-brand-blue ppx-italic">need</span>.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            Each discipline opens a curated set of advisors, experts, and service providers. Members request what they need through the platform and get matched directly.
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