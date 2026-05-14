import familyDinner from "@/assets/family-dinner.jpg";

const AboutOutro = () => {
  return (
    <section className="bg-[#F8F9FB]">
      <div className="relative w-full h-[36vh] min-h-[260px] md:h-[44vh] md:min-h-[360px] overflow-hidden">
        <img
          src={familyDinner}
          alt="A family at the dinner table together in warm light."
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
          A network that pays the <span className="text-brand-blue ppx-italic">relationships</span> back.
        </h2>

        <p className="mt-8 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          Three ways in: as a business owner applying to Profit Partners, as a leader stepping into a paid role, or as a promoter sharing what you already love through WER1.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/apply"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-brand-blue text-white text-[15px] font-semibold tracking-tight hover:bg-brand-blue/90 transition-colors shadow-sm"
          >
            Apply now
          </a>
          <a
            href="/contact?topic=white-label"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-white text-slate-ink text-[15px] font-semibold border-2 border-slate-ink/15 hover:border-brand-blue hover:text-brand-blue transition-colors"
          >
            Talk to us about white-label
          </a>
        </div>

        <p className="mt-10 text-[13px] tracking-wide text-[hsl(var(--slate-500))]">
          United To Thrive LLC · 222 S Mill Ave, Suite 800, Tempe, AZ 85281
        </p>
      </div>
    </section>
  );
};

export default AboutOutro;
