const CCProblem = () => {
  return (
    <section className="bg-background border-t border-slate-ink/10">
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
              Trust transfers from the person who sent them.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              The relationships are already in place. The introductions come with the trust already attached.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              The advisors and the members are part of the same network. A network built around one idea. Businesses become famous for the families they serve.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              When someone reaches for Command Central, they're reaching for help that's anchored in that purpose.
            </p>
          </div>

          <div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496267526-08a69e46a409?auto=format&fit=crop&q=80&w=1200"
                srcSet="https://images.unsplash.com/photo-1573496267526-08a69e46a409?auto=format&fit=crop&q=80&w=640 640w, https://images.unsplash.com/photo-1573496267526-08a69e46a409?auto=format&fit=crop&q=80&w=1200 1200w"
                sizes="(max-width: 1200px) 100vw, 600px"
                alt="A business owner and a trusted advisor in a one-on-one working session, both taking notes at a sunlit office table."
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

export default CCProblem;
