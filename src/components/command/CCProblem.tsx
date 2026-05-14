const CCProblem = () => {
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
              Built for <span className="text-brand-blue ppx-italic">trust</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Most owners spend years cycling through vendors. The marketing person who didn't deliver. The bookkeeper who left at tax season. The lawyer who billed for the call where they said hello.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              By the third or fourth one you stop trusting recommendations entirely. Eventually you give up and pay full retail at a name-brand firm. That solves the trust problem and creates a billing problem.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Command Central is the response. Your own board of advisors, experts, and service providers across the disciplines you actually need. Every one of them is someone we've personally worked with.
            </p>

            <p className="mt-10 font-serif-display italic text-slate-ink text-[18px] md:text-[22px] leading-snug max-w-[560px]">
              The right people. Already trusted.
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
