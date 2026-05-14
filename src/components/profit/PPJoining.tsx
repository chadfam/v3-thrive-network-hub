import heroMastermind from "@/assets/hero-mastermind.jpg";

const PPJoining = () => {
  return (
    <section className="bg-brand-blue/5 border-t border-slate-ink/10">
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
              What you're <span className="text-brand-blue ppx-italic">joining</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              A working alliance of complementary owners building customer loyalty through the families they already serve. Members commit annually. Monthly masterminds. Co-marketing campaigns. Deal flow that compounds across the room.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Each tier opens more of the alliance: the rooms, the bench, the introductions. Most owners spend more on customer acquisition than they need to because they haven't built a real referral system. We did. You bring the business and the families you serve.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Trust over attention. Loyalty over acquisition. Community over campaigns.
            </p>

            <p className="mt-10 font-serif-display italic text-slate-ink text-[18px] md:text-[22px] leading-snug max-w-[560px]">
              Apply once. The rest of the WEcosystem opens up from there.
            </p>
          </div>

          <div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src={heroMastermind}
                alt="Business owners in a mastermind session around a wooden table in warm daylight."
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

export default PPJoining;
