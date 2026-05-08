const cards = [
  {
    n: "01",
    role: "The family who recommended",
    body: "When a parent recommends a service to another parent in their community, WER1 tracks the introduction. When the recommended business closes the deal, the family earns. This is the most common path through the network.",
    example: "A mom recommends a wellness practitioner to another parent in her child's class. The new client books an appointment. The recommending family earns on that visit and every visit after it.",
  },
  {
    n: "02",
    role: "The leader who connected",
    body: "Local Leaders run community hubs that connect families to local businesses. When a family in a Local Leader's hub does business with a partner the leader introduced, the leader earns alongside the family.",
    example: "A Local Leader runs a monthly parenting cohort. A mom in the cohort hires a Profit Partner electrician for her home. The Local Leader earns on the deal.",
  },
  {
    n: "03",
    role: "The partner who introduced",
    body: "Profit Partners introduce each other to clients. When a partner sends a referral that closes, the introducing partner earns alongside the receiving partner. This is how the working alliance actually works.",
    example: "A real estate agent in the Phoenix Profit Partners chapter sends a homebuying client to a mortgage broker also in the chapter. Both earn from the closed loan.",
  },
  {
    n: "04",
    role: "The promoter who shared",
    body: "Anyone can become a WER1 promoter. Share what you love. Get paid when people buy. Through the Waves of Pay compensation model, you also earn from the introductions made by the people you brought into the network.",
    example: "A promoter shares a Profit Partners business on social media. Three people sign up through her link. Two of them buy from network businesses. She earns on those purchases and on the future earnings of everyone she brought in.",
  },
];

const HowFourPeople = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[720px] mx-auto">
          <h2
            className="font-serif-display text-slate-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            The four people who get paid.
          </h2>
          <p className="mt-6 text-[19px] leading-relaxed text-slate-700">
            Most affiliate networks pay one person, the one who shared the link. WER1 attributes the introduction back through the chain that actually made the deal happen.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((c) => (
            <div
              key={c.n}
              className="rounded-2xl border border-slate-200 bg-background p-10"
            >
              <div
                className="font-serif-display text-brand-blue"
                style={{ fontSize: 48, lineHeight: 1 }}
              >
                {c.n}
              </div>
              <h3 className="mt-4 font-serif-display text-slate-ink" style={{ fontSize: 28, lineHeight: 1.15 }}>
                {c.role}
              </h3>
              <p className="mt-4 text-[17px] leading-relaxed text-slate-700">{c.body}</p>
              <p className="mt-4 italic text-[16px] leading-relaxed text-slate-500">{c.example}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowFourPeople;