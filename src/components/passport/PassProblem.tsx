
const PassProblem = () => {
  return (
    <section className="bg-brand-blue/5 border-t border-slate-ink/10">
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
              The problem with <span className="text-brand-blue ppx-italic">masterminds</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Most rooms worth being in are invite-only, hard to discover, and limited to small circles. The names you've heard of are gated by application, sponsorship, or someone vouching for you. The names you haven't heard of are often the ones that change a business the most. They're impossible to find from the outside.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Then there's the math. Annual membership in any one of these communities runs into the tens of thousands. Most owners can't afford to test three or four to find out which one fits. They commit to one, hope it's the right one, and find out a year and twenty thousand dollars later that it wasn't.
            </p>

            <p className="mt-10 font-serif-display italic text-slate-ink text-[18px] md:text-[22px] leading-snug max-w-[560px]">
              The Passport gets you introduced. To all of them. For less than the cost of testing one alone.
            </p>
          </div>

          <div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1598284444079-ab715eed2b88?auto=format&fit=crop&q=80&w=1200"
                srcSet="https://images.unsplash.com/photo-1598284444079-ab715eed2b88?auto=format&fit=crop&q=80&w=640 640w, https://images.unsplash.com/photo-1598284444079-ab715eed2b88?auto=format&fit=crop&q=80&w=1200 1200w"
                sizes="(max-width: 1200px) 100vw, 600px"
                alt="An intimate, exclusive winery dinner: a server pouring wine at a candlelit table set for a small group of guests in business-casual attire."
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

export default PassProblem;
