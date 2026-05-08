const waves = [
  { label: "WAVE 1 (DIRECT)", body: "You share a link. Someone clicks and buys. You earn the full first-wave commission on that transaction." },
  { label: "WAVE 2 (INDIRECT)", body: "That person becomes a promoter, signs up someone else, who buys. You earn a smaller second-wave commission. The first promoter earns the direct commission." },
  { label: "WAVE 3 (OUTWARD)", body: "The chain keeps extending. Each wave pays a smaller percentage. You stay attributed for as long as the chain you started keeps producing." },
];

const W1Earnings = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-warm opacity-[0.04] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div>
          <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-[hsl(var(--slate-500))]">
            THE WAVES OF PAY MODEL
          </p>
          <h2
            className="mt-6 font-serif-display text-slate-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            Earnings move outward. And they don't stop.
          </h2>
          <div className="mt-8 space-y-6 max-w-[480px]">
            <p className="text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
              A typical affiliate platform pays you when someone clicks your link and buys. That's it. The relationship ends with the first transaction. The person who clicked your link goes on to introduce three other people, and you never see any of it.
            </p>
            <p className="text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
              WER1's patented Waves of Pay model works differently. The first wave is direct: someone clicks your link, they buy, you earn. The second wave is the people they bring in: you earn a smaller percentage. The third wave is the next layer out. The percentages decrease as the wave moves outward, but they don't zero out. The platform tracks the chain and pays accordingly.
            </p>
            <p className="text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
              Promoters who bring in active people early often build a stream of small payments that rolls in for years. The work was making the introduction. The payment keeps coming because the introduction keeps producing.
            </p>
          </div>
        </div>

        <div className="bg-white border border-[#E0E3E7] rounded-2xl p-6 sm:p-8 md:p-10">
          <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-[hsl(var(--slate-500))]">
            EARNINGS WAVE EXAMPLE
          </p>
          <div className="mt-6 divide-y divide-[#E0E3E7]">
            {waves.map((w) => (
              <div key={w.label} className="py-4 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-3">
                <div className="text-[15px] font-medium text-slate-ink">{w.label}</div>
                <div className="text-[14px] leading-relaxed text-[hsl(var(--slate-700))]">{w.body}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 italic text-[14px] text-[hsl(var(--slate-500))]">
            Specific commission percentages and wave depth are visible in your promoter dashboard after signup. They depend on the partner program and the offer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default W1Earnings;