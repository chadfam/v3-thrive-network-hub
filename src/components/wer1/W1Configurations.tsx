const configs = [
  {
    name: "Single-tier affiliate",
    body: "A standard affiliate program. One commission level. Affiliates share links, customers buy, affiliates earn. Simple, fast to deploy.",
    fit: "Brands looking to launch their first affiliate program quickly.",
  },
  {
    name: "Two-tier referral",
    body: "Affiliates earn directly. They also earn a smaller commission when they bring in another affiliate who closes business. The first wave only.",
    fit: "Coaching businesses, course creators, and service businesses with active communities.",
  },
  {
    name: "Multi-tier Waves of Pay",
    body: "The full WER1 model. Wave 1 direct earnings, Wave 2 from people you brought in, Wave 3 and outward at decreasing percentages.",
    fit: "Businesses where word of mouth keeps building outward and the customer base spreads through introductions.",
  },
  {
    name: "Family-unit loyalty",
    body: "Earnings flow to a family account rather than an individual. Multiple users on one account contribute to the same earnings pool. The configuration we use across United to Thrive.",
    fit: "Family-oriented brands, multi-generational businesses, household subscription products.",
  },
];

const W1Configurations = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2
            className="font-serif-display text-slate-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            Common configurations.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[720px] mx-auto">
            The platform supports several reference configurations. Most businesses start with one of the four below. Custom structures are available for businesses with specific needs.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {configs.map((c) => (
            <div key={c.name} className="bg-white border border-[#E0E3E7] rounded-xl p-8 flex flex-col">
              <div className="w-8 h-[2px] bg-gradient-warm" />
              <h3 className="mt-5 font-serif-display text-slate-ink text-[22px]" style={{ letterSpacing: "-0.01em" }}>
                {c.name}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[hsl(var(--slate-700))] flex-1">{c.body}</p>
              <p className="mt-6 italic text-[13px] text-[hsl(var(--slate-500))]">FIT FOR: {c.fit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default W1Configurations;