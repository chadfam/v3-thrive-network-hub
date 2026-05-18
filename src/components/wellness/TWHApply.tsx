import { Link } from "react-router-dom";

const TWHApply = () => {
  return (
    <section id="apply" className="scroll-mt-24 relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-brand-blue opacity-[0.04] pointer-events-none" />
      <div className="relative mx-auto max-w-[760px] px-6 sm:px-8 md:px-10 py-20 md:py-32 text-center">
        <div className="mx-auto section-accent" />
        <h2
          className="mt-8 font-serif-display text-slate-ink"
          style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
        >
          Talk to us about setting it up.
        </h2>
        <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[640px] mx-auto">
          The savings analysis is the no-commitment first step. We review your payroll census and tell you exactly what the plan is worth to you and your team. If the math doesn't work for your situation, we say so.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/apply" className="btn-primary">
            Join our WEcosystem
          </Link>
        </div>

        <p className="mt-10 italic text-[14px] text-[hsl(var(--slate-500))]">
          Most plans go live within four to six weeks of the savings analysis.
        </p>
      </div>
    </section>
  );
};

export default TWHApply;
