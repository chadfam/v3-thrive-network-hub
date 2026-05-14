import { Link } from "react-router-dom";
import heroMastermind from "@/assets/hero-mastermind.jpg";

const benefits = [
  "Curated access to top mastermind communities",
  "Peer operators, investors, and partners in every room",
  "Quarterly strategy sessions",
  "Proximity to where deals and capital actually move",
];

const BizMastermindPassport = () => {
  return (
    <section id="mastermind-passport" className="scroll-mt-24 bg-[hsl(220_30%_98%)] border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="lg:order-2">
            <h2
              className="font-serif-display text-slate-ink"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              Mastermind Passport™. <span className="text-brand-blue ppx-italic">Proximity is power</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              The elite mastermind communities most owners spend years trying to find. We curate the rooms. You walk in.
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
              The rooms most owners can't get into without an introduction.
            </p>

            <Link
              to="/mastermind-passport"
              className="group mt-10 inline-flex items-center text-[15px] font-semibold text-brand-blue"
            >
              See Mastermind Passport
              <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="lg:order-1">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src={heroMastermind}
                alt="Business owners in a mastermind session around a wooden table in warm daylight."
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

export default BizMastermindPassport;
