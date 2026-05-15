const configs = [
  {
    name: "Single-tier affiliate",
    body: "A standard affiliate setup. One commission level. Promoters share links, customers buy, promoters get paid. Simple, fast to deploy.",
    fit: "Brands launching their first affiliate program.",
  },
  {
    name: "Custom commission rules",
    body: "Custom rules per offer, per category, or per partner. The platform supports the structure your business already uses.",
    fit: "Coaching businesses, course creators, and service businesses with active communities.",
  },
  {
    name: "Network-wide attribution",
    body: "One magic link tracks across every offer in the network. When someone buys any program through it, the right promoter is paid.",
    fit: "Networks of complementary offers where one share could lead to many different purchases.",
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
              <div className="w-8 h-[2px] bg-brand-blue" />
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