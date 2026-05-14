import heroFamily from "@/assets/hero-family.jpg";

const bullets = [
  "The realtor whose neighbors text her about contractors. The pediatrician's wife who runs the school auction every year.",
  "The coach whose pastoral work is closer to family coaching than they admit. The educator who naturally runs family workshops on the side.",
  "The author or speaker whose audience already trusts them on parenting, faith, finance, or relationships.",
];

const LeadWhy = () => {
  return (
    <section className="bg-white border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2
              className="font-serif-display text-slate-ink"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              The work you're <span className="text-brand-blue ppx-italic">already doing</span>, now a position.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              The work of strengthening families used to happen in church basements, school PTAs, and around the kitchen table. It still does. The connectors who hold those rooms together usually do it for free, on the side.
            </p>

            <ul className="mt-10 space-y-4 max-w-[560px]">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span aria-hidden className="bullet-dot" />
                  <span className="text-[16px] md:text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-10 font-serif-display italic text-slate-ink text-[18px] md:text-[20px] leading-snug max-w-[560px]">
              If your work already looks like this, the question is whether to keep doing it on the side or step into it.
            </p>
          </div>

          <div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src={heroFamily}
                alt="A family together at home in soft daylight, the people leaders serve."
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

export default LeadWhy;
