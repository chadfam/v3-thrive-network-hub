import heroImg from "@/assets/hero-mastermind.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="top" className="relative bg-white">
      <div className="relative w-full h-[44vh] min-h-[320px] md:h-[58vh] md:min-h-[440px] overflow-hidden">
        <img
          src={heroImg}
          alt="Business owners around a wooden table in warm daylight."
          width={1920}
          height={1080}
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,23,42,0.10) 0%, rgba(15,23,42,0) 50%, rgba(255,255,255,0.85) 92%, rgba(255,255,255,1) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1080px] px-6 sm:px-10 md:px-16 pt-10 pb-24 md:pt-12 md:pb-36 text-center">
        <h1
          className="font-serif-display text-slate-ink mx-auto max-w-[920px]"
          style={{
            fontSize: "clamp(2.5rem, 6.5vw, 5rem)",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
          }}
        >
          Where businesses become{" "}
          <span className="text-brand-blue ppx-italic">famous for families</span>.
        </h1>

        <p className="mt-8 mx-auto max-w-[640px] text-[17px] md:text-[20px] leading-[1.55] text-[hsl(var(--slate-700))]">
          The network behind the businesses families recommend by name. Built on partnerships, masterminds, and a board of trusted advisors. Not on ads.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/apply"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-brand-blue text-white text-[15px] font-semibold tracking-tight hover:bg-brand-blue/90 transition-colors shadow-sm"
          >
            Apply to Profit Partners
          </Link>
          <Link
            to="/businesses"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-white text-slate-ink text-[15px] font-semibold border-2 border-slate-ink/15 hover:border-brand-blue hover:text-brand-blue transition-colors"
          >
            See the network
          </Link>
        </div>

        <p className="mt-10 text-[13px] tracking-wide text-[hsl(var(--slate-500))]">
          Based in Tempe, Arizona · Building markets across the country
        </p>
      </div>
    </section>
  );
};

export default Hero;
