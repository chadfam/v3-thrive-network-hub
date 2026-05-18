const growImage =
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200";
const growImageSrcSet =
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=640 640w, https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200 1200w";

const AboutGrow = () => {
  return (
    <section className="bg-white border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="lg:order-2">
            <h2
              className="font-serif-display text-slate-ink"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              Partnerships over <span className="text-brand-blue ppx-italic">advertising</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              When a parent recommends an electrician to another parent, that introduction outperforms any ad the electrician could pay for. The family arrives already willing to trust, because the trust came with the introduction. We help business owners build the relationships that produce those introductions on purpose, instead of waiting for them to happen by luck.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              This is the worldview underneath everything we build. A business does not have to be the loudest one in the market to grow. It has to be the one families recommend.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              That idea runs through every offering. Profit Partners, Mastermind Passport, Command Central, FAM Guides, Local Leaders, Expert Faculty, and the solutions around them all answer to it.
            </p>
          </div>

          <div className="lg:order-1">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src={growImage}
                srcSet={growImageSrcSet}
                sizes="(max-width: 1024px) 100vw, 600px"
                alt="Business owners in a working conversation in warm daylight."
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGrow;
