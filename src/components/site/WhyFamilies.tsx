const proofs = [
  "Referred prospects already know you, like you, and trust you before the first call.",
  "Trust transfers from the person who sent them. The relationship starts ahead.",
  "Customers who arrive through families tend to stay longer and refer more themselves.",
];

const WhyFamilies = () => {
  return (
    <section className="warm-tint-bg">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 md:px-10 py-14 md:py-20">
        <h2 className="font-serif-display section-headline text-slate-ink">
          A customer who recommends you to three other parents in the school pickup line beats ten Facebook clicks.
        </h2>

        <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          Most businesses don't have affiliates. They don't have customers actively sending them more business. They know that would change everything. Most never build it.
        </p>

        <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          We help you turn the families you serve into brand champions who recommend you by name.
        </p>

        <div className="mt-10 rounded-2xl bg-white p-8 md:p-10 border border-brand-gold/30">
          <p className="font-serif-display text-[18px] md:text-[20px] text-slate-ink">
            Why referrals win.
          </p>
          <ul className="mt-6 space-y-4">
            {proofs.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span aria-hidden className="bullet-dot" />
                <span className="text-[16px] md:text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          Our network skews toward owners who think in decades, not quarters. The ones who care about their kids, their community, and their reputation in twenty years. If that's you, you're already in the right room.
        </p>
      </div>
    </section>
  );
};

export default WhyFamilies;
