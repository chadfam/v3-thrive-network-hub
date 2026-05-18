import { Link } from "react-router-dom";

const TWHHero = () => {
  return (
    <section id="top" style={{ backgroundColor: "#2563EB" }} className="text-white">
      <div className="mx-auto max-w-[920px] px-6 sm:px-8 md:px-10 pt-24 md:pt-32 pb-20 md:pb-24 text-center">
        <h1
          className="font-serif-display text-white"
          style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
        >
          Your employees deserve better health. Your business deserves{" "}
          <span style={{ color: "#FBBF24" }}>lower taxes</span>.
        </h1>

        <p className="mt-8 text-[17px] md:text-[21px] leading-relaxed text-white/90 max-w-[720px] mx-auto">
          Team Wellness Hub gives your team real, supplemental wellness benefits, structured as a pre-tax benefit plan. Employees take home more pay. The business saves on payroll taxes. A raise for the team without raising payroll.
        </p>

        <p className="mt-5 text-[17px] md:text-[21px] leading-relaxed text-white/90 max-w-[720px] mx-auto">
          Most setups go live within four to six weeks, and the plan sits alongside whatever insurance you already offer.
        </p>

        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <Link to="/apply" className="btn-on-dark">
            Join our WEcosystem
          </Link>
        </div>

        <div className="mt-12 text-[14px] font-medium text-white/90 flex flex-wrap justify-center gap-x-3 gap-y-2">
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <span>·</span>
          <a href="#benefits" className="hover:text-white transition-colors">The benefits</a>
          <span>·</span>
          <a href="#compliance" className="hover:text-white transition-colors">Set up right</a>
        </div>
      </div>
    </section>
  );
};

export default TWHHero;
