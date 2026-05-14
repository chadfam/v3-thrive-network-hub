import heroFounders from "@/assets/hero-founders.jpg";

const BizOutro = () => {
  return (
    <section className="bg-[#F8F9FB]">
      <div className="relative w-full h-[36vh] min-h-[260px] md:h-[44vh] md:min-h-[360px] overflow-hidden">
        <img
          src={heroFounders}
          alt="Founders together in conversation in warm light."
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,23,42,0.10) 0%, rgba(15,23,42,0) 50%, rgba(248,249,251,0.85) 92%, rgba(248,249,251,1) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1080px] px-6 sm:px-10 md:px-16 pt-12 pb-24 md:pt-16 md:pb-36 text-center">
        <h2
          className="font-serif-display text-slate-ink mx-auto max-w-[820px]"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          Build a business that <span className="text-brand-blue ppx-italic">grows itself</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          Stop chasing attention. Start earning recommendations. Join the alliance built for the owners who'd rather be famous for families than loud on the internet.
        </p>

        <div className="mt-10">
          <a
            href="/apply"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-brand-blue text-white text-[15px] font-semibold tracking-tight hover:bg-brand-blue/90 transition-colors shadow-sm"
          >
            Apply as a Profit Partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default BizOutro;
