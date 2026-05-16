const included = [
  "An established set of partners across coaching, marketing, finance, legal, and tech",
  "Each one vetted through direct working relationship",
  "Consistent quality across every front",
  "A partner you can bring back next time",
  "One source for the help you need next",
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
              What's included with <span className="text-brand-blue ppx-italic">membership</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Members can call on the same partners we engage with in our own work, across coaching, marketing, finance, legal, and tech.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Each one is someone we've worked with directly. The trust is established before the introduction is made.
            </p>

            <p className="mt-10 font-serif-display italic text-slate-ink text-[18px] md:text-[22px] leading-snug max-w-[560px]">
              An established board. Available across every front.
            </p>
          </div>

          <div>
            <div
              className="rounded-2xl bg-white p-7 sm:p-9 md:p-10"
              style={{ border: "1px solid #E0E3E7" }}
            >
              <h3 className="font-serif-display text-[22px] md:text-[24px] text-slate-ink leading-tight">
                Included
              </h3>
              <ul className="mt-7 space-y-5">
                {included.map((b) => (
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
