const CCTrust = () => {
  return (
    <section className="bg-brand-blue/5 border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <h2
              className="font-serif-display text-slate-ink"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.025em",
              }}
            >
              Trust transfers from the{" "}
              <span className="text-brand-blue ppx-italic">person who sent them</span>
              .
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))]">
              Every advisor inside Command Central came in through someone already in the network. Members refer their advisors. Advisors refer their peers. Each introduction carries the weight of the relationship behind it.
            </p>
            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))]">
              The result is a board that's a network of people who already work with each other, already vouch for each other, and already share a standard for what good work looks like.
            </p>
            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))]">
              When a member reaches an advisor, the conversation usually starts a few steps in. The introduction does the warm-up.
            </p>
            <p className="mt-10 font-serif-display italic text-slate-ink text-[20px] md:text-[24px] leading-snug">
              Person by person.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCTrust;
