import { Link } from "react-router-dom";

const advisorImage = "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&q=80&w=1200";
const advisorImageSrcSet = "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&q=80&w=640 640w, https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&q=80&w=1200 1200w";

const benefits = [
  "Marketing, sales, finance, legal, and technology partners",
  "Pre-vetted, accountable to the network on every referral",
  "Set pricing visible before any work begins",
  "Access scales with your tier in the alliance",
];

const BizCommandCentral = () => {
  return (
    <section id="command-central" className="scroll-mt-24 bg-white border-t border-slate-ink/10">
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
              Command Central™. <span className="text-brand-blue ppx-italic">Your own board of advisors</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              A vetted bench of advisors, experts, and service providers across the disciplines you actually need. Pre-screened. Set pricing. Accountable to the network on every introduction.
            </p>

            <ul className="mt-10 space-y-4 max-w-[560px]">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span aria-hidden className="bullet-dot" />
                  <span className="text-[16px] md:text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-10 font-serif-display italic text-slate-ink text-[18px] md:text-[20px] leading-snug max-w-[560px]">
              Skip the vendor casino. Get partners with skin in the game.
            </p>

            <Link
              to="/command-central"
              className="group mt-10 inline-flex items-center text-[15px] font-semibold text-brand-blue"
            >
              See Command Central
              <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src={advisorImage}
                srcSet={advisorImageSrcSet}
                sizes="(max-width: 1024px) 100vw, 600px"
                alt="An advisor and a business owner reviewing strategy on a tablet at a wooden table, exposed-brick studio in warm daylight."
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

export default BizCommandCentral;
