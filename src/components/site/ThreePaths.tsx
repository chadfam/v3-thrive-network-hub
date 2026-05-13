import { Link } from "react-router-dom";

const cards = [
  {
    headline: "Grow through partnerships, not ads.",
    body: "Stop spending blind money on cold traffic. Profit Partners is a working alliance where complementary businesses promote each other to the families they already serve. Referrals close at a far higher rate than any ad ever will.",
    meta: "Profit Partners™ · Mastermind Passport™ · Command Central™",
    link: "Explore for businesses →",
    to: "/businesses",
  },
  {
    headline: "Lead the room you're already in.",
    body: "Local Leaders are the trusted connectors in their area, one per industry. FAM Guides help families feel more connected, with a plan that's actually theirs. Expert Faculty bring what they know to the families who need it.",
    meta: "Local Leaders · FAM Guides · Expert Faculty",
    link: "Explore for leaders →",
    to: "/leaders",
  },
  {
    headline: "Get paid for what you already do.",
    body: "You already recommend the people and products you trust. WER1 gives you one magic link to promote any program in the network, and you get paid when people buy, no matter which one they choose.",
    meta: "WER1 · One link · Every program",
    link: "See how WER1 works →",
    to: "/wer1",
  },
] as const;

const ThreePaths = () => {
  return (
    <section className="surface-muted">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-14 md:py-20">
        <h2 className="font-serif-display section-headline text-slate-ink text-center">Three ways to win.</h2>
        <div className="mt-14 md:mt-20 grid md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((c) => (
            <article
              key={c.headline}
              className="relative card-surface card-surface-hover rounded-2xl p-6 md:p-8 flex flex-col"
            >
              <h3 className="font-serif-display text-[26px] md:text-[28px] leading-[1.15] text-slate-ink">
                {c.headline}
              </h3>
              <p className="mt-5 text-[17px] leading-relaxed text-[hsl(var(--slate-700))] flex-1">
                {c.body}
              </p>
              <p className="mt-6 text-[13px] text-[hsl(var(--slate-500))] leading-relaxed">{c.meta}</p>
              <Link
                to={c.to}
                className="mt-6 inline-block text-[16px] text-slate-ink hover:underline underline-offset-4"
              >
                {c.link}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePaths;
