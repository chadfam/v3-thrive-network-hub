import familyImg from "@/assets/family-dinner.jpg";

const FamousForFamilies = () => {
  return (
    <section className="bg-white">
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
              Become the name families <span className="text-brand-blue ppx-italic">pass along</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Communities used to run on trusted people. The contractor a neighbor swore by. The pediatrician a sister recommended. A name carried weight because it came from someone who knew you.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              That trust is what the WEcosystem is built to make ordinary again. The owners, leaders, and experts inside it earn it the same way: by serving families well enough to be worth passing along.
            </p>

            <p className="mt-10 font-serif-display italic text-slate-ink text-[18px] md:text-[22px] leading-snug max-w-[560px]">
              Famous for families.
            </p>
          </div>

          <div className="lg:order-1">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src={familyImg}
                alt="A family together at the dinner table in warm light."
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

export default FamousForFamilies;
