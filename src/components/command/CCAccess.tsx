const benefits = [
  "Hours back from researching who to hire",
  "Confidence the work will actually get done",
  "Consistent quality across every discipline",
  "One platform for the help you need next",
  "Focus stays on the part only you can do",
];

const CCAccess = () => {
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
              What changes with a <span className="text-brand-blue ppx-italic">board</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              You stop comparing four quotes from people you don't know. You stop paying retail at a name-brand firm just because at least they show up. You stop hoping the next vendor will be different.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              You request the service through the platform. The right person picks up. The work gets done by someone we've personally worked with.
            </p>

            <p className="mt-10 font-serif-display italic text-slate-ink text-[18px] md:text-[22px] leading-snug max-w-[560px]">
              Less time guessing. More time building.
            </p>
          </div>

          <div>
            <div
              className="rounded-2xl bg-white p-7 sm:p-9 md:p-10"
              style={{ border: "1px solid #E0E3E7" }}
            >
              <h3 className="font-serif-display text-[22px] md:text-[24px] text-slate-ink leading-tight">
                What you get back
              </h3>
              <ul className="mt-7 space-y-5">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span aria-hidden className="bullet-dot" />
                    <span className="text-[16px] md:text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCAccess;
