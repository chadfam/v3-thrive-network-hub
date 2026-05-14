import roomMastermind from "@/assets/room-mastermind.jpg";

const tenets = [
  {
    num: "01",
    title: "Acquisition is the problem.",
    body: "Every owner says it. Getting customers is the hardest part of running a business.",
  },
  {
    num: "02",
    title: "Referrals are the answer.",
    body: "A referred prospect already knows you, likes you, and trusts you. They close at a far higher rate because trust transfers.",
  },
  {
    num: "03",
    title: "The network does the work.",
    body: "Partners, customers, experts, and causes, all sending you business through the same alliance.",
  },
];

const Argument = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="block h-0.5 w-20 bg-brand-gold rounded-full mb-8" aria-hidden />
            <h2 className="font-serif-display section-headline text-slate-ink">
              The businesses that win aren't the loudest. They're the ones families recommend.
            </h2>
            <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[560px]">
              We built United to Thrive to connect business owners, community leaders, and trusted experts into a single network that runs on relationships and referrals, not ads.
            </p>

            <ol className="mt-10 space-y-5">
              {tenets.map((t) => (
                <li
                  key={t.num}
                  className="rounded-xl bg-white p-6 md:p-7 border border-brand-blue/15"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif-display text-brand-blue text-[28px] md:text-[32px] leading-none">
                      {t.num}
                    </span>
                    <h3 className="font-serif-display text-slate-ink text-[20px] md:text-[22px] leading-tight">
                      {t.title}
                    </h3>
                  </div>
                  <p className="mt-3 ml-[52px] text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                    {t.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src={roomMastermind}
                alt="Business owners in a mastermind room in warm daylight, sleeves rolled."
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

export default Argument;
