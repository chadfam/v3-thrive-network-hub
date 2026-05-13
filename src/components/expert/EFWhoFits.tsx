const profile = [
  "Authors and speakers with established audiences",
  "Coaches with active practices",
  "Podcast hosts with engaged listenerships",
  "Educators and former educators",
  "Faith-based leaders and mentors",
  "Health, wellness, and relationship practitioners",
  "Financial advisors and personal finance educators",
  "Founders whose work has shaped a category",
];

const EFWhoFits = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32 grid md:grid-cols-12 gap-10 md:gap-16 md:items-start">
        <div className="md:col-span-7">
          <h2 className="font-serif-display tracking-section text-slate-ink" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
            Who tends to apply.
          </h2>
          <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[540px]">
            The role fits experts who already have the work and the audience. Authors with books that families read. Speakers whose audiences book them year after year. Coaches and counselors with established practices. Podcast hosts with engaged listeners. Educators with credibility families trust. The platform is built to amplify what's already working, not to launch a brand from zero.
          </p>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[540px]">
            We prioritize substance over reach. A counselor with a small but loyal audience often delivers more value to FAM Central families than an influencer with a million followers chasing engagement. The selection is curated by the platform team based on category fit, work quality, and the kind of voice families want to learn from over time.
          </p>
        </div>
        <div className="md:col-span-5">
          <p className="font-serif-display text-[20px] text-slate-ink">
            Who tends to apply
          </p>
          <ul className="mt-6 space-y-4">
            {profile.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[17px] text-[hsl(var(--slate-700))]">
                <span className="bullet-dot" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 italic text-[15px] text-[hsl(var(--slate-500))]">
            Plus practitioners whose work clearly belongs even if they don't fit a tidy category.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EFWhoFits;