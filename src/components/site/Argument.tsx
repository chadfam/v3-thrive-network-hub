const points = [
  {
    title: "Acquisition is the problem.",
    body: "Ask any owner what their biggest problem is and the answer is the same: getting customers. Almost no one has a real referral engine, even though everyone says they want one.",
  },
  {
    title: "Referrals are the answer.",
    body: "Referred prospects close at a far higher rate than anyone who came through an ad, because the trust transfers from the person who sent them.",
  },
  {
    title: "Growth becomes a habit.",
    body: "When the families you serve recommend you, and the businesses that serve them do too, growth stops being a chase. It becomes a rhythm.",
  },
];

const Argument = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 lg:gap-20 items-start">
          <div className="md:col-span-12 lg:col-span-5">
            <span className="block h-0.5 w-16 bg-brand-gold rounded-full mb-8" aria-hidden />
            <h2 className="font-serif-display section-headline text-slate-ink">
              The best businesses are the ones families recommend.
            </h2>
            <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
              We built United to Thrive to connect business owners, community leaders, and trusted experts into a single network that runs on relationships and referrals, not ads.
            </p>
          </div>

          <div className="md:col-span-12 lg:col-span-6 lg:col-start-7 lg:border-l lg:border-brand-gold/40 lg:pl-10">
            <ol className="space-y-9 md:space-y-12">
              {points.map((p, i) => (
                <li key={p.title} className="grid grid-cols-[auto_1fr] gap-5 md:gap-6 items-baseline">
                  <span
                    aria-hidden
                    className="font-serif-display text-brand-blue leading-none"
                    style={{ fontSize: "clamp(2.25rem, 4.5vw, 3rem)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif-display text-[22px] md:text-[24px] text-slate-ink leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[16px] md:text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Argument;
