type Pillar = { title: string; body: string };

const pillars: Pillar[] = [
  {
    title: "It's in place from day one.",
    body: "Coaching, marketing, finance, legal, and technology. Covered from the start of membership.",
  },
  {
    title: "The advisors know each other.",
    body: "They share a network and a standard. Introductions across areas carry context.",
  },
  {
    title: "The work compounds.",
    body: "Each conversation builds on the ones that came before. Over time, the board knows the member's business well.",
  },
];

const CCBoard = () => {
  return (
    <section className="bg-background border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-28">
        {/* Landscape banner image */}
        <div className="aspect-[16/9] md:aspect-[2/1] w-full overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80&w=2400"
            srcSet="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80&w=1200 1200w, https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80&w=2400 2400w"
            sizes="(max-width: 1280px) 100vw, 1280px"
            alt="A group of business owners gathered around a wooden table, laptops open, working through their day together in natural light."
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 2-col text */}
        <div className="mt-12 md:mt-16 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <h2
              className="font-serif-display text-slate-ink"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.025em",
              }}
            >
              A board already in place.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))]">
              Membership comes with a board already in place. Known voices across the major areas of running a business, sitting inside the same network as the member.
            </p>
            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))]">
              The advisors are familiar. The conversations build on what came before. Each new question can pick up where the last one left off.
            </p>
            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))]">
              Over time, the advisors come to know the member's business well, and the work moves faster.
            </p>
          </div>
        </div>

        {/* 3-up pillar strip */}
        <div className="mt-16 md:mt-20 pt-12 md:pt-14 border-t border-slate-ink/10 grid md:grid-cols-3 gap-10 md:gap-12">
          {pillars.map((p) => (
            <div key={p.title}>
              <h3 className="font-serif-display text-slate-ink text-[20px] md:text-[22px] leading-snug">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CCBoard;
