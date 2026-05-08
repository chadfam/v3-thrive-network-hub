import { Link } from "react-router-dom";

const cards = [
  {
    headline: "Grow through partnerships, not ads.",
    body: "Profit Partners is the flagship program for owners ready to build a referral-driven business that compounds. Add Team Wellness Hub to retain your team. Add Mastermind Passport to put yourself in rooms where capital and partnerships move. Add Command Central when you need a vetted bench instead of a vendor list.",
    meta: "Profit Partners™ · Team Wellness Hub · Mastermind Passport™ · Command Central™",
    link: "Explore for businesses →",
    to: "/businesses",
  },
  {
    headline: "Lead the room you're already in.",
    body: "Local Leaders are the trusted connectors in their zip code, one per industry. FAM Guides coach families through the work of being more present. Expert Faculty share what they know with the families who need it.",
    meta: "Local Leaders · FAM Guides · Expert Faculty",
    link: "Explore for leaders →",
    to: "/leaders",
  },
  {
    headline: "Powered by WER1.",
    body: "The whole network runs on WER1, a referral and rewards platform we own. Anyone in the system can earn from the people they bring into it. If you'd rather earn by sharing than buy by hiring, this is your path.",
    meta: "WER1 Referral Engine · Affiliate Programs · Partner Rewards",
    link: "How WER1 works →",
    to: "/how-it-works",
  },
] as const;

const ThreePaths = () => {
  return (
    <section className="surface-muted">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-14 md:py-20">
        <h2 className="font-serif-display section-headline text-slate-ink text-center">Three ways in.</h2>
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