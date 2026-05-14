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
              A room of values-aligned owners who'd rather earn a reputation than rent attention. Family-first. Trust-driven. Tired of buying customers when the better ones come through introductions.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Inside, you find customer loyalty that compounds, referral revenue that grows with the community, peer counsel from owners running similar businesses, and a board of advisors when you need one. Promotion inside FAM Central to the families already using it daily.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              You're not just growing a business. You're joining a movement to help families F.E.E.L. again, with the people who already serve them at the center of strengthening real life at home.
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
