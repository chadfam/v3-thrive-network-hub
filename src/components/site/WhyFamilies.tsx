import familyDinner from "@/assets/family-dinner.jpg";

const proofs = [
  "Referred prospects already know you, like you, and trust you before the first call.",
  "Trust transfers from the person who sent them. The relationship starts ahead.",
  "Customers who arrive through families tend to stay longer and refer more themselves.",
];

const WhyFamilies = () => {
  return (
    <section className="warm-tint-bg">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src={familyDinner}
                alt="A family at the dinner table together in warm light."
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="block h-0.5 w-20 bg-brand-gold rounded-full mb-8" aria-hidden />
            <h2 className="font-serif-display section-headline text-slate-ink">
              Three parents at school pickup beat ten Facebook clicks.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[600px]">
              Most businesses don't have affiliates. They don't have customers actively sending them more business. They know that would change everything. Most never build it.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[600px]">
              We help you turn the families you serve into brand champions who recommend you by name.
            </p>

            <div className="mt-8 rounded-2xl bg-white p-7 md:p-8 border border-brand-gold/30">
              <p className="font-serif-display text-[18px] md:text-[20px] text-slate-ink">
                Why referrals win.
              </p>
              <ul className="mt-5 space-y-4">
                {proofs.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span aria-hidden className="bullet-dot" />
                    <span className="text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 text-[16px] md:text-[18px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[600px]">
              Our network skews toward owners who think in decades, not quarters. If that's you, you're already in the right room.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFamilies;
