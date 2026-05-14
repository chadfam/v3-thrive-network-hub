import roomMastermind from "@/assets/room-mastermind.jpg";

const BizHero = () => {
  return (
    <section
      id="top"
      className="relative bg-white overflow-hidden"
      style={{ minHeight: "720px" }}
    >
      {/* Desktop: image bleeds to the right edge of the viewport */}
      <div
        aria-hidden
        className="absolute top-0 bottom-0 right-0 hidden lg:block"
        style={{ width: "48%" }}
      >
        <img
          src={roomMastermind}
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

      {/* Mobile: image stacks above text */}
      <div className="lg:hidden">
        <img
          src={roomMastermind}
          alt="Business owners around a mastermind room table in warm daylight."
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
              Where <span className="text-brand-blue ppx-italic">partnerships</span> replace ads.
            </h1>

            <p className="mt-7 max-w-[520px] text-[15px] md:text-[16px] leading-[1.65] text-[hsl(var(--slate-700))]">
              Customer acquisition is every owner's biggest problem. Referrals and partnerships solve it, and close at a far higher rate than any ad ever will. Apply to Profit Partners. The rest of the network opens from there.
            </p>

            <div className="mt-9">
              <a
                href="/apply"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-brand-blue text-white text-[14px] font-semibold tracking-tight hover:bg-brand-blue/90 transition-colors"
              >
                Apply as a Profit Partner
              </a>
            </div>

            <p className="mt-8 text-[12px] tracking-wide text-[hsl(var(--slate-500))]">
              Applications reviewed weekly. One per industry per market.
            </p>
          </div>

          {/* Spacer for desktop right column where image bleed sits */}
          <div className="hidden lg:block lg:col-span-5" />
        </div>
      </div>
    </section>
  );
};

export default BizHero;
