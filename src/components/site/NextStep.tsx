import { Link } from "react-router-dom";
import heroMastermind from "@/assets/hero-mastermind.jpg";

type Accent = "blue" | "gold";

const cards: { heading: string; body: string; btn: string; to: string; accent: Accent }[] = [
  {
    heading: "Grow your business.",
    body: "Apply to Profit Partners or browse the rest of the business programs.",
    btn: "Apply",
    to: "/apply",
    accent: "blue",
  },
  {
    heading: "Lead your community.",
    body: "Apply to Local Leaders, FAM Guides, or Expert Faculty.",
    btn: "Apply",
    to: "/apply",
    accent: "gold",
  },
  {
    heading: "Get paid for what you already do.",
    body: "You're already recommending the people and products you trust. Get your WER1 magic link and start earning from it.",
    btn: "Become a promoter",
    to: "/apply?role=promoter",
    accent: "blue",
  },
];

const accentBorder: Record<Accent, string> = {
  blue: "border-brand-blue",
  gold: "border-brand-gold",
};

const accentText: Record<Accent, string> = {
  blue: "text-brand-blue",
  gold: "text-[#B45309]",
};

const NextStep = () => {
  return (
    <section id="next-step" className="bg-background scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="block h-0.5 w-20 bg-brand-gold rounded-full mb-8" aria-hidden />
            <h2 className="font-serif-display section-headline text-slate-ink">
              Ready to step in?
            </h2>
            <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[560px]">
              Pick the path that matches the work you're already doing.
            </p>

            <div className="mt-10 space-y-5">
              {cards.map((c) => (
                <article
                  key={c.heading}
                  className={`rounded-2xl bg-white p-7 md:p-8 border-l-[3px] ${accentBorder[c.accent]} border-y border-r border-slate-ink/10`}
                >
                  <h3 className="font-serif-display text-[20px] md:text-[24px] leading-tight text-slate-ink">
                    {c.heading}
                  </h3>
                  <p className="mt-3 text-[16px] md:text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">
                    {c.body}
                  </p>
                  <Link
                    to={c.to}
                    className={`group mt-5 inline-flex items-center text-[15px] font-semibold ${accentText[c.accent]}`}
                  >
                    {c.btn}
                    <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl lg:sticky lg:top-24">
              <img
                src={heroMastermind}
                alt="Business owners in conversation around a wooden table in warm daylight."
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextStep;
