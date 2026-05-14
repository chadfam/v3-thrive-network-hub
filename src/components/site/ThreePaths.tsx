import { Link } from "react-router-dom";
import heroFounders from "@/assets/hero-founders.jpg";

const cards = [
  {
    headline: "Grow through partnerships, not ads.",
    body: "Profit Partners is a working alliance of complementary businesses that recommend each other to the families they already serve. Members also get promoted inside FAM Central.",
    meta: "Profit Partners™ · Mastermind Passport™ · Command Central™",
    link: "Explore for businesses",
    to: "/businesses",
    accent: "blue" as const,
  },
  {
    headline: "Lead the room you're already in.",
    body: "Local Leaders are the trusted connectors in their area, one per industry. FAM Guides help families feel more connected with the FAM Plan. Expert Faculty bring what they know to the families who need it.",
    meta: "Local Leaders · FAM Guides · Expert Faculty",
    link: "Explore for leaders",
    to: "/leaders",
    accent: "gold" as const,
  },
  {
    headline: "Get paid for what you already do.",
    body: "You already recommend the people and products you trust. WER1 gives you one magic link to share every program in the network, and you get paid when people buy, no matter which one they choose.",
    meta: "WER1 · One magic link · Every program",
    link: "See how WER1 works",
    to: "/wer1",
    accent: "blue" as const,
  },
];

const accentBorder: Record<"blue" | "gold", string> = {
  blue: "border-brand-blue",
  gold: "border-brand-gold",
};

const ThreePaths = () => {
  return (
    <section className="surface-muted">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl lg:sticky lg:top-24">
              <img
                src={heroFounders}
                alt="Founders together in conversation in warm light."
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="block h-0.5 w-20 bg-brand-gold rounded-full mb-8" aria-hidden />
            <h2 className="font-serif-display section-headline text-slate-ink">
              Three ways to win.
            </h2>
            <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[560px]">
              Three benefits, depending on what you're already doing well.
            </p>

            <div className="mt-10 space-y-5">
              {cards.map((c) => (
                <article
                  key={c.headline}
                  className={`rounded-2xl bg-white p-7 md:p-8 border-l-[3px] ${accentBorder[c.accent]} border-y border-r border-slate-ink/10`}
                >
                  <h3 className="font-serif-display text-[22px] md:text-[26px] leading-tight text-slate-ink">
                    {c.headline}
                  </h3>
                  <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">
                    {c.body}
                  </p>
                  <div className="mt-5 flex flex-wrap items-baseline justify-between gap-3">
                    <p className="text-[13px] text-[hsl(var(--slate-500))]">
                      {c.meta}
                    </p>
                    <Link
                      to={c.to}
                      className="group inline-flex items-center text-[15px] font-semibold text-brand-blue"
                    >
                      {c.link}
                      <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreePaths;
