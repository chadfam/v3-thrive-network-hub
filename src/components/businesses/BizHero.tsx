import { Link } from "react-router-dom";

const heroImage = "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?auto=format&fit=crop&q=80&w=1600";
const heroImageSrcSet = "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?auto=format&fit=crop&q=80&w=800 800w, https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?auto=format&fit=crop&q=80&w=1600 1600w";

const BizHero = () => {
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
          src={heroImage}
          srcSet={heroImageSrcSet}
          sizes="(max-width: 1280px) 100vw, 1600px"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        {/* Left-edge fade into white */}
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
          src={heroImage}
          srcSet={heroImageSrcSet}
          sizes="100vw"
          alt="Two business owners working together at a laptop in warm daylight."
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
              Grow through the families your community{" "}
              <span className="text-brand-blue ppx-italic">already trusts</span>.
            </h1>

            <p className="mt-7 max-w-[520px] text-[15px] md:text-[16px] leading-[1.65] text-[hsl(var(--slate-700))]">
              Three offerings work together to put your business in front of the people most likely to choose you, recommend you, and stay with you.
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

          {/* Spacer for desktop right column where image bleed sits */}
          <div className="hidden lg:block lg:col-span-5" />
        </div>
      </div>
    </section>
  );
};

export default BizHero;
