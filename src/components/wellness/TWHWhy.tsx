import roomMastermind from "@/assets/room-mastermind.jpg";

const bullets = [
  "The existing vendors price administration like enterprise software, so most small and mid-sized businesses skip it.",
  "Setup feels like another HR project: paperwork, payroll changes, employee questions, compliance documentation.",
  "The math is hard to see clearly without someone walking you through it, and most owners don't want to ask their CPA for a favor.",
];

const TWHWhy = () => {
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
              Why most owners <span className="text-brand-blue ppx-italic">haven't set this up</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Pre-tax wellness benefit plans have been in the tax code since the 1970s. The savings are real, the structure is well-defined, and most large employers have used some version of one for decades.
            </p>

            <ul className="mt-10 space-y-4 max-w-[560px]">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span aria-hidden className="bullet-dot" />
                  <span className="text-[16px] md:text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-10 font-serif-display italic text-slate-ink text-[18px] md:text-[20px] leading-snug max-w-[560px]">
              Team Wellness Hub is the response. A flat administrative fee, a plan structure that any W-2 business can adopt, and we handle the rest.
            </p>
          </div>

          <div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src={roomMastermind}
                alt="A professional office setting with business owners around a table."
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

export default TWHWhy;
