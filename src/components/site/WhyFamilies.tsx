const WhyFamilies = () => {
  return (
    <section className="warm-tint-bg">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 lg:gap-20 items-start">
          <div className="md:col-span-12 lg:col-span-7">
            <div className="relative">
              <span
                aria-hidden
                className="absolute font-serif-display text-brand-gold leading-none select-none pointer-events-none"
                style={{
                  fontSize: "clamp(5rem, 12vw, 9rem)",
                  left: "-0.4rem",
                  top: "-3rem",
                  opacity: 0.85,
                }}
              >
                &ldquo;
              </span>
              <h2
                className="relative font-serif-display text-slate-ink"
                style={{
                  fontSize: "clamp(2.25rem, 6vw, 4rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.01em",
                }}
              >
                Three parents at school pickup beat ten Facebook clicks.
              </h2>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-6 md:gap-8 max-w-[640px]">
              <div>
                <div className="font-serif-display text-brand-blue text-[40px] md:text-[44px] leading-none">3</div>
                <p className="mt-2 text-[14px] leading-snug text-[hsl(var(--slate-700))]">parents in line, recommending you by name</p>
              </div>
              <div>
                <div className="font-serif-display text-brand-blue text-[40px] md:text-[44px] leading-none">10</div>
                <p className="mt-2 text-[14px] leading-snug text-[hsl(var(--slate-700))]">cold clicks that almost certainly don't convert</p>
              </div>
              <div>
                <div className="font-serif-display text-brand-blue text-[40px] md:text-[44px] leading-none">20</div>
                <p className="mt-2 text-[14px] leading-snug text-[hsl(var(--slate-700))]">years out, the owners who'll still be growing</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-12 lg:col-span-5">
            <p className="text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
              Most businesses don't have affiliates. They don't have customers actively sending them more business. They know that would change everything. Most never build it.
            </p>
            <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
              We do. We help you turn the families you serve into brand champions who recommend you by name. Referred prospects show up already knowing, liking, and trusting you, so they close at a far higher rate than anyone who found you through an ad.
            </p>
            <p className="mt-8 pt-6 border-t border-slate-ink/10 text-[15px] md:text-[16px] italic leading-relaxed text-[hsl(var(--slate-500))]">
              Our network skews toward owners who think about their kids, their community, and their reputation in twenty years. People who'd rather earn a recommendation than buy attention. If that's you, you're already in the right room.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFamilies;
