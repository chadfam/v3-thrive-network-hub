const cards = [
  {
    n: "01",
    name: "Local business referrals",
    body: "When a family in your hub does business with a Profit Partner or local business you introduced, you earn on the deal. The platform attributes it through your account.",
  },
  {
    n: "02",
    name: "FAM Central memberships",
    body: "When a family joins FAM Central through your local hub, you earn on the membership and ongoing platform activity tied to that account.",
  },
  {
    n: "03",
    name: "Event and partnership revenue",
    body: "Hosted gatherings, partner-funded events, and community sponsorships can include revenue share for the Leader in the area.",
  },
  {
    n: "04",
    name: "WER1 wave attribution",
    body: "When you bring another Local Leader, FAM Guide, or member into the network, you earn through the Waves of Pay compensation model on their network activity over time.",
  },
];

const LLEarnings = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2
            className="font-serif-display text-slate-ink tracking-section"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
          >
            How Local Leaders earn.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
            Most active Local Leaders earn between $3,000 and $10,000 per month within their first year. The income is built from four streams that the WER1 platform tracks and pays automatically.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((c) => (
            <div
              key={c.n}
              className="bg-background rounded-2xl p-8 border"
              style={{ borderColor: "#E0E3E7" }}
            >
              <p
                className="font-serif-display text-gradient-warm"
                style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", lineHeight: 1 }}
              >
                {c.n}
              </p>
              <h3 className="mt-4 font-serif-display text-slate-ink text-[22px]">{c.name}</h3>
              <p className="mt-4 text-[15px] text-[hsl(var(--slate-700))] leading-relaxed">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 mx-auto max-w-[720px] italic text-[16px] text-[hsl(var(--slate-500))] text-center">
          Specific commission structures, payout schedules, and tier configurations are visible inside the platform after onboarding. Real earnings depend on the activity in your area and the work you put in.
        </p>
      </div>
    </section>
  );
};

export default LLEarnings;