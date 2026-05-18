const missionImage =
  "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&q=80&w=1200";
const missionImageSrcSet =
  "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&q=80&w=640 640w, https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&q=80&w=1200 1200w";

const AboutMission = () => {
  return (
    <section className="border-t border-slate-ink/10" style={{ backgroundColor: "#E9EFFB" }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2
              className="font-serif-display text-slate-ink"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              Famous for families is <span className="text-brand-blue ppx-italic">a stance</span>, not a slogan.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Communities used to run on trusted people. The handyman a neighbor swore by. The pediatrician a sister recommended. The advisor a friend's parents had used for thirty years. A recommendation carried weight because it came from someone who knew you, and who had something to lose if they steered you wrong.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Somewhere along the way, finding a good business turned into a search problem instead of a trust problem. Reviews from strangers took the place of a word from someone you know.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              The WEcosystem exists to make trusted recommendation the default again. The businesses, leaders, and experts inside it earn their reputation the same way the handyman did: by genuinely serving the families around them, and being recommended by the people those families already trust.
            </p>
          </div>

          <div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src={missionImage}
                srcSet={missionImageSrcSet}
                sizes="(max-width: 1024px) 100vw, 600px"
                alt="People together in a warm community moment in daylight."
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

export default AboutMission;
