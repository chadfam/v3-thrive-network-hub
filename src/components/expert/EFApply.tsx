import { Link } from "react-router-dom";

const EFApply = () => {
  return (
    <section
      id="apply"
      className="scroll-mt-24 text-white"
      style={{ backgroundColor: "#0B1F3F" }}
    >
      <div className="mx-auto max-w-[880px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          Join our <span className="ppx-italic" style={{ color: "#FBBF24" }}>WEcosystem</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[640px] text-[17px] md:text-[19px] leading-relaxed text-white/90">
          Rewarded for impact, not just impressions. The audience that engages with your work is the audience the network already serves.
        </p>

        <p className="mt-6 mx-auto max-w-[640px] text-[17px] md:text-[19px] leading-relaxed text-white/90">
          One application. Tell us what you're building and which parts of the network fit, and we'll be in touch within two to three business days.
        </p>

        <div className="mt-12 flex justify-center">
          <Link
            to="/apply"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-white text-slate-ink text-[15px] font-semibold tracking-tight hover:bg-white/90 transition-colors shadow-sm"
          >
            Join our WEcosystem
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EFApply;
