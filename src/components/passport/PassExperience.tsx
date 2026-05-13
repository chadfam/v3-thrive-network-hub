const cards = [
  {
    n: "01",
    heading: "Curated mastermind invitations",
    body: "Invitations and introductions to select mastermind sessions and events hosted by partner communities. Members find themselves in rooms with CEOs, founders, investors, authors, and category leaders they wouldn't otherwise reach.",
  },
  {
    n: "02",
    heading: "Private events and experiences",
    body: "Entrepreneur masterminds. Investor gatherings. Strategic networking experiences. Private retreats. Global collaboration events. Profit Partners and WER1 live experiences. The Passport opens up the calendar.",
  },
  {
    n: "03",
    heading: "The Passport Directory",
    body: "A members-only directory of entrepreneurs, investors, mentors, and collaborators across the network. Search by industry, stage, geography, or interest. The Directory makes the network reachable between events.",
  },
];

const PassExperience = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2 className="font-serif-display text-slate-ink tracking-section" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
            What members get.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((c) => (
            <div key={c.n} className="rounded-2xl bg-white p-10" style={{ border: "1px solid #E0E3E7" }}>
              <p aria-hidden className="font-serif-display text-[40px] leading-none text-transparent bg-clip-text bg-brand-blue">
                {c.n}
              </p>
              <h3 className="mt-5 font-serif-display text-[24px] text-slate-ink leading-tight">{c.heading}</h3>
              <p className="mt-4 text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PassExperience;