import { Link } from "react-router-dom";
import familyDinner from "@/assets/family-dinner.jpg";

const Outro = () => {
  return (
    <section className="bg-[#F8F9FB]">
      <div className="relative w-full h-[36vh] min-h-[260px] md:h-[44vh] md:min-h-[360px] overflow-hidden">
        <img
          src={familyDinner}
          alt="A family at the dinner table together in warm light."
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,23,42,0.10) 0%, rgba(15,23,42,0) 50%, rgba(248,249,251,0.85) 92%, rgba(248,249,251,1) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1080px] px-6 sm:px-10 md:px-16 pt-12 pb-24 md:pt-16 md:pb-36 text-center">
        <h2
          className="font-serif-display text-slate-ink mx-auto max-w-[820px]"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          Step into something <span className="text-brand-blue ppx-italic">better</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          You weren't meant to do this alone. Step in where your business grows, your relationships deepen, and your work strengthens the families you serve.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/apply"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-brand-blue text-white text-[15px] font-semibold tracking-tight hover:bg-brand-blue/90 transition-colors shadow-sm"
          >
            Apply to Profit Partners
          </Link>
          <Link
            to="/about#meet-the-team"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-white text-slate-ink text-[15px] font-semibold border-2 border-slate-ink/15 hover:border-brand-blue hover:text-brand-blue transition-colors"
          >
            Meet the team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Outro;
