const categories = [
  "Financial Services",
  "Real Estate",
  "Mortgage",
  "Insurance",
  "Home Services",
  "Professional Services",
  "Construction",
  "Automotive",
  "The Trades",
  "Health and Wellness",
  "Legal",
  "Tax and Accounting",
];

const Dot = () => (
  <span aria-hidden className="bullet-dot" />
);

const PPPhoenix = () => {
  return (
    <section className="relative bg-background">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{ backgroundImage: "none" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32 grid md:grid-cols-[55fr_45fr] gap-12 md:gap-20 items-start">
        <div>
          <p className="text-[13px] font-medium tracking-[0.14em] uppercase text-[hsl(var(--slate-500))]">THE FIRST CHAPTER</p>
          <h2 className="mt-6 font-serif-display text-slate-ink tracking-section" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
            What the Phoenix room actually looks like.
          </h2>
          <p className="mt-8 max-w-[540px] text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            Phoenix is the original Profit Partners chapter, and the first market where the full network is operating end to end.
          </p>
          <p className="mt-5 max-w-[540px] text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            The Phoenix room has owners across financial services, real estate, mortgage, insurance, home services, professional services, construction, automotive, and the trades.
          </p>
          <p className="mt-6 max-w-[540px] text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            Category exclusivity at the Mastermind tier and above means one partner per industry in the Phoenix market.
          </p>
          <p className="mt-5 max-w-[540px] text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            The result is a room built to send each other business instead of compete for the same customer. Members typically know each other a quarter in and have moved at least one referral by month four.
          </p>
          <p className="mt-6 max-w-[540px] text-[15px] italic text-[hsl(var(--slate-500))]">
            New chapters open as the network grows. If you fit a category in a market we haven't opened yet, the application puts you on the early list for that market.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-10" style={{ border: "1px solid #E0E3E7" }}>
          <p className="text-[13px] font-medium tracking-[0.14em] uppercase text-[hsl(var(--slate-500))]">PHOENIX CHAPTER CATEGORIES</p>
          <ul className="mt-6 space-y-3">
            {categories.map((c) => (
              <li key={c} className="flex gap-3 items-start">
                <Dot />
                <span className="text-[17px] text-[hsl(var(--slate-700))]">{c}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[14px] italic text-[hsl(var(--slate-500))]">
            And expanding. Some categories are open. Some are claimed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PPPhoenix;