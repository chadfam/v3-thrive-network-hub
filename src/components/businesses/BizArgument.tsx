const sources = [
  { label: "Customers", desc: "The families you already serve, recommending you by name." },
  { label: "Partners", desc: "Complementary businesses sending you their best clients." },
  { label: "Experts", desc: "Trusted voices in your category putting your name in front of buyers." },
  { label: "Causes", desc: "Mission-aligned organizations monetizing their community through you." },
];

const BizArgument = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[860px] px-6 sm:px-8 md:px-10 py-16 md:py-32 text-center">
        <span className="block mx-auto section-accent" aria-hidden />
        <h2 className="mt-10 font-serif-display section-headline text-slate-ink">
          What this network actually does.
        </h2>

        <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          Ask any owner what their biggest problem is and you'll hear the same answer: getting customers.
        </p>
        <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          The owners who keep growing solved it the same way. They stopped buying attention and started getting recommended. Referrals close at a far higher rate than any ad, because trust transfers from the person who sent them.
        </p>

        <p className="mt-10 font-serif-display text-slate-ink text-[20px] md:text-[24px] leading-snug">
          United to Thrive gives you the one thing most businesses don't have: a real referral engine.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-5 md:gap-6 text-left">
          {sources.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white p-6 md:p-7 border border-brand-blue/15"
            >
              <p className="font-serif-display text-[20px] md:text-[22px] text-brand-blue">
                {s.label}
              </p>
              <p className="mt-3 text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          Profit Partners is the alliance at the center of it. Mastermind Passport, Command Central, and Team Wellness Hub layer on from there. WER1 runs underneath, tracking every introduction and paying everyone in the chain.
        </p>

        <p className="mt-8 font-serif-display italic text-slate-ink text-[18px] md:text-[20px]">
          You apply once, to Profit Partners. Once you're in, the rest opens up.
        </p>
      </div>
    </section>
  );
};

export default BizArgument;
