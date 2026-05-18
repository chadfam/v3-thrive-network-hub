import { Link } from "react-router-dom";

const CCApply = () => {
  return (
    <section className="bg-white border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1080px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display text-slate-ink mx-auto max-w-[820px]"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          Join our <span className="text-brand-blue ppx-italic">WEcosystem</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          One application. Tell us what you're building and which parts of the network fit. We'll be in touch within two to three business days.
        </p>

        <div className="mt-12 flex justify-center">
          <Link
            to="/apply"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-brand-blue text-white text-[15px] font-semibold tracking-tight hover:bg-brand-blue-hover transition-colors shadow-sm"
          >
            Join our WEcosystem
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CCApply;
