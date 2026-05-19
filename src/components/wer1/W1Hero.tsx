import { Link } from "react-router-dom";

const W1Hero = () => {
  return (
    <section style={{ backgroundColor: "#264B73" }} className="text-white">
      <div className="mx-auto max-w-[880px] px-6 sm:px-8 md:px-10 pt-24 md:pt-32 pb-20 md:pb-24 text-center">
        <div
          className="font-serif-display text-white leading-none"
          style={{ fontSize: "clamp(5rem, 14vw, 10rem)", letterSpacing: "-0.03em" }}
        >
          WER1<span style={{ color: "#FBBF24" }}>.</span>
        </div>
        <h1
          className="mt-8 font-serif-display text-white"
          style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
        >
          One magic link. Every program.
        </h1>
        <p className="mt-8 text-[17px] md:text-[21px] leading-relaxed text-white/90 max-w-[720px] mx-auto">
          WER1 gives you one universal link, your magic link, that you can share to promote any program in the United to Thrive network. When someone buys, you get paid, no matter which program they choose.
        </p>
        <p className="mt-5 text-[17px] md:text-[21px] leading-relaxed text-white/90 max-w-[720px] mx-auto">
          We use it to power every program in the network. We also offer it as a white-label engine for partner businesses that want to run their own affiliate or referral program on it.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <Link to="/apply" className="btn-on-dark">
            Join our WEcosystem
          </Link>
        </div>
        <div className="mt-12 text-[14px] font-medium text-white/90 flex flex-wrap justify-center gap-x-3 gap-y-2">
          <a href="#two-ways" className="hover:text-white transition-colors">For promoters</a>
          <span>·</span>
          <a href="#for-businesses" className="hover:text-white transition-colors">For businesses</a>
          <span>·</span>
          <a href="#technical-layer" className="hover:text-white transition-colors">The technical layer</a>
        </div>
      </div>
    </section>
  );
};

export default W1Hero;