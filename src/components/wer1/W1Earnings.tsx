const points = [
  { label: "One link", body: "You get a single magic link to promote any program in the network. No juggling separate affiliate accounts, no choosing which one to share." },
  { label: "Every program", body: "Whatever someone buys (Profit Partners, Mastermind Passport, Team Wellness Hub, FAM Guides, Local Leaders, Expert Faculty, Promo Engine), the activity attributes back to you and you get paid." },
  { label: "Automatic attribution", body: "The platform tracks every click and every purchase back to its source. You don't keep records. You don't trust the rest. The system does." },
];

const W1Earnings = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-brand-blue opacity-[0.04] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div>
          <h2
            className="mt-6 font-serif-display text-slate-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            One link. Every program. Every payout, automatic.
          </h2>
          <div className="mt-8 space-y-6 max-w-[480px]">
            <p className="text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
              A typical affiliate platform makes you pick a program, register, copy a link, and remember which one goes where. If you recommend three different things, you juggle three different dashboards. Most people never start.
            </p>
            <p className="text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
              WER1 collapses all of it into one universal link. You share what you trust, in whatever channel makes sense, and the platform handles the rest. Every purchase that follows attributes back to you, no matter which program someone ends up buying.
            </p>
            <p className="text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
              The work is making the introduction. The platform does the bookkeeping.
            </p>
          </div>
        </div>

        <div className="bg-white border border-[#E0E3E7] rounded-2xl p-6 sm:p-8 md:p-10">
          <div className="mt-6 divide-y divide-[#E0E3E7]">
            {points.map((w) => (
              <div key={w.label} className="py-4 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-3">
                <div className="text-[15px] font-medium text-slate-ink">{w.label}</div>
                <div className="text-[14px] leading-relaxed text-[hsl(var(--slate-700))]">{w.body}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 italic text-[14px] text-[hsl(var(--slate-500))]">
            Commission rates and specific payout details are visible in your promoter dashboard after signup. They depend on the partner program and the offer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default W1Earnings;
