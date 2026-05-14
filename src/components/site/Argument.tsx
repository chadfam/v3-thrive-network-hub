import heroFounders from "@/assets/hero-founders.jpg";

const feel = [
  {
    letter: "F",
    name: "Families",
    body: "Find trusted people, businesses, experts, and experiences that strengthen real life at home.",
  },
  {
    letter: "E",
    name: "Entrepreneurs",
    body: "Grow through the families who already trust you and the partners who serve them.",
  },
  {
    letter: "E",
    name: "Experts",
    body: "Reach the audience your work was built for. Get rewarded for impact, not just impressions.",
  },
  {
    letter: "L",
    name: "Love (Charities)",
    body: "Causes monetize community by recommending the people and resources families already need.",
  },
];

const Argument = () => {
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
              Help families <span className="text-brand-blue ppx-italic">F.E.E.L.</span> again.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              United to Thrive is a family-first community connecting business owners, community leaders, and trusted experts to the families they serve.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              We exist to help families reconnect, build meaningful relationships, and live stronger lives. Every introduction inside the network strengthens the people on both sides of it. Movement is the goal.
            </p>

            <p className="mt-8 font-serif-display italic text-slate-ink text-[16px] md:text-[18px] leading-snug max-w-[560px]">
              Family first. Connection over addiction. Ownership over consumption.
            </p>
          </div>

          <div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src={heroFounders}
                alt="Community leaders together in conversation, warm daylight."
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-28 pt-16 md:pt-20 border-t border-slate-ink/10">
          <h3
            className="font-serif-display text-slate-ink text-center mx-auto max-w-[820px]"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Inside <span className="text-brand-blue ppx-italic">F.E.E.L.</span>
          </h3>

          <p className="mt-6 mx-auto max-w-[680px] text-center text-[16px] md:text-[18px] leading-[1.65] text-[hsl(var(--slate-700))]">
            F.E.E.L. is the framework underneath everything we make. One community, aligned around the people they share.
          </p>

          <div className="mt-12 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 text-left">
            {feel.map((f) => (
              <article
                key={f.name}
                className="rounded-2xl bg-white p-7 md:p-8 border border-slate-ink/10 flex flex-col"
              >
                <span className="font-serif-display text-brand-blue text-[40px] md:text-[48px] leading-none tracking-tight">
                  {f.letter}
                </span>
                <h4 className="mt-5 font-serif-display text-[20px] md:text-[22px] leading-tight text-slate-ink">
                  {f.name}
                </h4>
                <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                  {f.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Argument;
