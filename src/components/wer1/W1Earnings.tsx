const scenarios = [
  { label: "Direct purchase", body: "Someone clicks your link and buys. You get paid for that purchase." },
  { label: "Different offer", body: "Someone clicks your link, looks around, and buys a different program in the network. Still attributed to your link." },
  { label: "Later purchase", body: "Someone clicks your link, doesn't buy that day, and comes back later. Still attributed." },
];

const W1Earnings = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-brand-blue opacity-[0.04] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div>
          <h2
            className="font-serif-display text-slate-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            How payments work.
          </h2>
          <div className="mt-8 space-y-6 max-w-[480px]">
            <p className="text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
              Your magic link is the universal link. Every share, every click, every purchase across the network ties back to it.
            </p>
            <p className="text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
              When someone buys an offer in the network through your link, you get paid for that purchase. Whichever program they choose.
            </p>
            <p className="text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
              Payments are processed automatically. You see what came in and from which offer inside your dashboard.
            </p>
          </div>
        </div>

        <div className="bg-white border border-[#E0E3E7] rounded-2xl p-6 sm:p-8 md:p-10">
          <h3 className="font-serif-display text-[22px] md:text-[24px] text-slate-ink leading-tight">
            What gets attributed
          </h3>
          <div className="mt-6 divide-y divide-[#E0E3E7]">
            {scenarios.map((s) => (
              <div key={s.label} className="py-4 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-3">
                <div className="text-[15px] font-medium text-slate-ink">{s.label}</div>
                <div className="text-[14px] leading-relaxed text-[hsl(var(--slate-700))]">{s.body}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 italic text-[14px] text-[hsl(var(--slate-500))]">
            Specific commission percentages are visible in your promoter dashboard after signup. They depend on the partner program and the offer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default W1Earnings;
