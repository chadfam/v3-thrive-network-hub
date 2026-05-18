const fgPlanImage =
  "https://images.unsplash.com/photo-1484665754804-74b091211472?auto=format&fit=crop&q=80&w=1200";
const fgPlanImageSrcSet =
  "https://images.unsplash.com/photo-1484665754804-74b091211472?auto=format&fit=crop&q=80&w=640 640w, https://images.unsplash.com/photo-1484665754804-74b091211472?auto=format&fit=crop&q=80&w=1200 1200w";

const FGPlan = () => {
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
              Families end up with a plan that{" "}
              <span className="text-brand-blue ppx-italic">belongs to them</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              The FAM Plan is the deliverable. Each family ends up with a clear picture of where they are, where they want to be, and how the people and resources around them help them get there.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              The Guide walks the family through it. The plan is the family's. The Guide is their thinking partner. The platform keeps the work organized between conversations, so every session picks up where the last one left off.
            </p>

            <p className="mt-10 font-serif-display italic text-slate-ink text-[18px] md:text-[22px] leading-snug max-w-[560px]">
              Connection is not a single conversation. It is a plan a family returns to, and a Guide who stays alongside them as it changes.
            </p>
          </div>

          <div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src={fgPlanImage}
                srcSet={fgPlanImageSrcSet}
                sizes="(max-width: 1024px) 100vw, 600px"
                alt="A family together outdoors in warm daylight."
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

export default FGPlan;
