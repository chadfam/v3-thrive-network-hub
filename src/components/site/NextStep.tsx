import { Link } from "react-router-dom";

const cards = [
  { heading: "Grow your business.", body: "Apply to Profit Partners or browse the rest of the business programs.", btn: "Apply →", to: "/apply" },
  { heading: "Lead your community.", body: "Apply to Local Leaders, FAM Guides, or Expert Faculty.", btn: "Apply →", to: "/apply" },
  { heading: "Get paid for what you already do.", body: "You're already recommending the people and products you trust. Become a WER1 promoter and start earning from it.", btn: "Become a promoter →", to: "/apply?role=promoter" },
];

const NextStep = () => {
  return (
    <section id="next-step" className="surface-muted scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-14 md:py-20">
        <h2 className="font-serif-display section-headline text-slate-ink text-center">
          Ready to step in?
        </h2>

        <div className="mt-14 md:mt-20 grid md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((c) => (
            <article
              key={c.heading}
              className="card-surface card-surface-hover rounded-2xl p-6 md:p-8 flex flex-col"
            >
              <h3 className="font-serif-display text-[26px] md:text-[28px] leading-[1.15] text-slate-ink">
                {c.heading}
              </h3>
              <p className="mt-5 text-[17px] leading-relaxed text-[hsl(var(--slate-700))] flex-1">
                {c.body}
              </p>
              <Link
                to={c.to}
                className="group relative mt-6 inline-flex w-fit items-center justify-center px-5 py-3 rounded-lg text-[14px] font-medium text-white bg-slate-ink overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">{c.btn}</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextStep;