const HowWhy = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto px-6 sm:px-8 md:px-10 py-16 md:py-32 text-center" style={{ maxWidth: 760 }}>
        <div className="mx-auto h-[2px] w-20 bg-gradient-warm" />
        <h2
          className="mt-8 font-serif-display text-slate-ink"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
        >
          Why we built it this way.
        </h2>
        <div className="mt-8 space-y-6">
          <p className="text-[19px] leading-relaxed text-slate-700">
            Most affiliate networks were built to extract value from one person's audience. The platform takes a cut. The brand pays a commission. The affiliate gets paid. Everyone else in the chain is invisible. The mom who actually made the recommendation is invisible. The local leader who connected the rooms is invisible. The friend who got the affiliate involved in the first place is invisible.
          </p>
          <p className="text-[19px] leading-relaxed text-slate-700">
            We built WER1 because the chain is the point. The family who recommends a business is more important than the affiliate who shared a link. The local leader who knows everyone is more important than the funnel that captured an email. When the platform pays everyone in the chain, the chain holds together. People keep making introductions. The network grows because doing the work pays.
          </p>
        </div>
        <p className="mt-10 font-serif-display italic text-slate-ink" style={{ fontSize: 24, lineHeight: 1.3 }}>
          It's also why we own the platform instead of running on someone else's.
        </p>
      </div>
    </section>
  );
};

export default HowWhy;