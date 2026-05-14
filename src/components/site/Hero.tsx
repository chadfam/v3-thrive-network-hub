import heroImg from "@/assets/hero-mastermind.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="top" className="relative bg-white overflow-hidden">
      <div className="relative mx-auto max-w-[1440px] grid lg:grid-cols-12 items-stretch min-h-[88vh]">
        <div className="lg:col-span-6 xl:col-span-7 relative z-10 px-6 sm:px-10 md:px-16 lg:px-20 py-20 lg:py-32 flex flex-col justify-center">
          <h1
            className="font-serif-display text-slate-ink"
            style={{
              fontSize: "clamp(2.75rem, 6vw, 5rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            Where businesses become{" "}
            <span className="text-brand-blue ppx-italic">famous for families</span>.
          </h1>

          <p className="mt-8 max-w-[560px] text-[17px] md:text-[19px] leading-[1.6] text-[hsl(var(--slate-700))]">
            A select network of values-aligned business leaders building trust, serving real families, and growing through referrals. The network behind the businesses families recommend by name.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
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

          <p className="mt-8 text-[13px] tracking-wide text-[hsl(var(--slate-500))]">
            Applications reviewed weekly. One per industry per market.
          </p>
        </div>

        <div className="lg:col-span-6 xl:col-span-5 relative min-h-[40vh] lg:min-h-0">
          <img
            src={heroImg}
            alt="Business owners around a wooden table in warm daylight."
            width={1200}
            height={1440}
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 15%, rgba(255,255,255,0) 35%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 lg:hidden"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 60%, rgba(255,255,255,1) 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
