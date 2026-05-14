import roomMastermind from "@/assets/room-mastermind.jpg";

const items = [
  "Families who feel disconnected, distracted, and pulled apart by screens.",
  "Owners who'd rather build reputation than rent attention.",
  "Experts whose work changes lives but gets buried by algorithms.",
  "Causes that need community, not another corporate logo.",
];

const WhyFamilies = () => {
  return (
    <section className="bg-white border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2
              className="font-serif-display text-slate-ink"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              Built for the people <span className="text-brand-blue ppx-italic">the algorithm forgot</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              We replaced paid attention with real partnerships. Owners get recommended by the families they already serve. Leaders become the trusted connector in their area. Experts reach the audience their work was built for. Causes monetize community by recommending what families already need.
            </p>

            <ul className="mt-10 space-y-4 max-w-[560px]">
              {items.map((it) => (
                <li key={it} className="flex items-start gap-3">
                  <span aria-hidden className="bullet-dot" />
                  <span className="text-[16px] md:text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">
                    {it}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-10 font-serif-display italic text-slate-ink text-[18px] md:text-[20px] leading-snug max-w-[560px]">
              A customer who recommends you to three other parents in the school pickup line beats ten Facebook clicks every time.
            </p>
          </div>

          <div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src={roomMastermind}
                alt="Business owners around a mastermind room in warm daylight."
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

export default WhyFamilies;
