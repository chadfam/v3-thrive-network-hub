import { Link } from "react-router-dom";
import heroMastermind from "@/assets/hero-mastermind.jpg";

const AboutHero = () => {
  return (
    <section
      id="top"
      className="relative bg-white overflow-hidden lg:min-h-[720px]"
    >
      {/* Desktop: image bleeds to the right edge of the viewport */}
      <div
        aria-hidden
        className="absolute top-0 bottom-0 right-0 hidden lg:block"
        style={{ width: "48%" }}
      >
        <img
          src={heroMastermind}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 12%, rgba(255,255,255,0) 30%)",
          }}
        />
      </div>

      {/* Mobile: image shown above the text, stacked */}
      <div className="lg:hidden">
        <img
          src={heroMastermind}
          alt="The team together in a working session in warm daylight."
          className="w-full h-[260px] sm:h-[320px] object-cover"
          loading="eager"
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16">
        <div className="grid lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 py-16 lg:py-32">
            <h1
              className="font-serif-display text-slate-ink"
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              Build a world where every family{" "}
              <span className="text-brand-blue ppx-italic">thrives</span>.
            </h1>

            <p className="mt-7 max-w-[520px] text-[15px] md:text-[16px] leading-[1.65] text-[hsl(var(--slate-700))]">
              We're a team of operators, connectors, and educators who believe families do better when the people around them are doing better too.
            </p>

            <div className="mt-9">
              <Link
                to="/apply"
                className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-brand-blue text-white text-[15px] font-semibold tracking-tight hover:bg-brand-blue-hover transition-colors shadow-sm"
              >
                Join our WEcosystem
              </Link>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
