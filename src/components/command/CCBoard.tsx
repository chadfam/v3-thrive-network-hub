const boardImage = "https://images.unsplash.com/photo-1573496267526-08a69e46a409?auto=format&fit=crop&q=80&w=1200";
const boardImageSrcSet = "https://images.unsplash.com/photo-1573496267526-08a69e46a409?auto=format&fit=crop&q=80&w=640 640w, https://images.unsplash.com/photo-1573496267526-08a69e46a409?auto=format&fit=crop&q=80&w=1200 1200w";

const CCBoard = () => {
  return (
    <section className="border-t border-slate-ink/10" style={{ backgroundColor: "#E9EFFB" }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="lg:order-2">
            <h2
              className="font-serif-display text-slate-ink"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              A board of advisors already in place when you have a{" "}
              <span className="text-brand-blue ppx-italic">question</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Most owners build their expert relationships one painful introduction at a time. A coach here. An attorney there. A marketer that came recommended. A bookkeeper a friend mentioned. The board is rebuilt fresh for every decision.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Command Central gives you a board that's already there. The advisors, experts, and service providers across the areas owners turn to most are ready when you need them. Owners run better businesses for the families they serve when the people advising them are already known.
            </p>
          </div>

          <div className="lg:order-1">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src={boardImage}
                srcSet={boardImageSrcSet}
                sizes="(max-width: 1024px) 100vw, 600px"
                alt="A business owner and a trusted advisor in a one-on-one working session at a sunlit table."
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

export default CCBoard;
