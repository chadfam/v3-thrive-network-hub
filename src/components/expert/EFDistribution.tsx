const surfaces = [
  { name: "In-app content feeds", body: "Families browsing the FAM Central app see your content surfaced based on their interests, their stage of family life, and what they've engaged with before." },
  { name: "Local community hubs", body: "Local Leaders run hubs in their zip codes that surface relevant Expert Faculty content to the families in their network. Your content reaches the local layer." },
  { name: "Email campaigns", body: "The platform's regular email sends include featured Expert Faculty content. Reach families who don't open the app daily but read the email." },
  { name: "Events and challenges", body: "Live and virtual events, family challenges, and seasonal sprints frequently feature Expert Faculty as guides, hosts, and contributors." },
  { name: "Curated learning paths", body: "Multi-week structured journeys for families on specific topics. Your content gets bundled into the paths most relevant to your category." },
];

const EFDistribution = () => {
  return (
    <section className="relative bg-background">
      <div className="absolute inset-0 warm-tint-bg pointer-events-none" aria-hidden style={{ opacity: 0.8 }} />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2 className="font-serif-display tracking-section text-slate-ink" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
            Where your content goes.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[720px] mx-auto">
            Five distribution surfaces inside the FAM Central network. Your content gets pushed across all of them based on category fit and engagement.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {surfaces.map((s, i) => (
            <div
              key={s.name}
              className={`rounded-xl bg-background border border-[hsl(var(--slate)/0.12)] p-7 ${i === 4 ? "md:col-span-2 md:max-w-[50%] md:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0" : ""}`}
            >
              <div className="h-[2px] w-8 bg-brand-blue" />
              <h3 className="mt-5 font-serif-display text-[22px] text-slate-ink leading-tight">{s.name}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[hsl(var(--slate-700))]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EFDistribution;