import heroFounders from "@/assets/hero-founders.jpg";

const LeadHero = () => {
  return (
    <section
      id="top"
      className="relative bg-white overflow-hidden"
      style={{ minHeight: "720px" }}
    >
      {/* Desktop: image bleeds to right edge */}
      <div
        aria-hidden
        className="absolute top-0 bottom-0 right-0 hidden lg:block"
        style={{ width: "48%" }}
      >
        <img
          src={heroFounders}
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

      {/* Mobile: image stacks above text */}
      <div className="lg:hidden">
        <img
          src={heroFounders}
          alt="Community leaders together in conversation, warm daylight."
          className="w-full h-[260px] sm:h-[320px] object-cover"
          loading="eager"
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 lg:px-20">
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
              Lead the room <span className="text-brand-blue ppx-italic">you're already in</span>.
            </h1>

            <p className="mt-7 max-w-[520px] text-[15px] md:text-[16px] leading-[1.65] text-[hsl(var(--slate-700))]">
              Three paid roles for the connectors, coaches, and category experts whose work is already changing how families live. Apply, and we'll match you to the role that fits.
            </p>

            <div className="mt-9">
              <a
                href="/apply"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-brand-blue text-white text-[14px] font-semibold tracking-tight hover:bg-brand-blue/90 transition-colors"
              >
                Apply now
              </a>
            </div>

            <p className="mt-8 text-[12px] tracking-wide text-[hsl(var(--slate-500))]">
              Applications reviewed weekly. Local Leaders are one per industry per area.
            </p>
          </div>

          <div className="hidden lg:block lg:col-span-5" />
        </div>
      </div>
    </section>
  );
};

export default LeadHero;
