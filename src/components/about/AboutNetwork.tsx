import roomMastermind from "@/assets/room-mastermind.jpg";

const bullets = [
  "Profit Partners had been running in Phoenix for years as a referral alliance for business owners.",
  "WER1, the affiliate and referral platform, had been built independently and needed a home network big enough to run on.",
  "FAM Central had been built around the principle that strong families build strong communities.",
  "Local Leaders, FAM Guides, Mastermind Passport, and Command Central had been operating in separate rooms.",
];

const AboutNetwork = () => {
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
              How the network <span className="text-brand-blue ppx-italic">came together</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Most companies start with one product and add features. United to Thrive started with the opposite problem: a set of working programs that needed a single front door.
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
              We put them under one roof. Introductions made in one program pay people in all the others.
            </p>
          </div>

          <div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src={roomMastermind}
                alt="Business owners and leaders together in a working session."
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

export default AboutNetwork;
