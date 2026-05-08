const useCases = [
  "Coaching businesses with affiliate programs",
  "E-commerce brands with referral incentives",
  "Service businesses paying their best customers for word of mouth",
  "Membership platforms that need a built-in affiliate layer",
  "Authors and creators tracking referrals across multiple revenue streams",
  "Local franchises tracking introductions across markets",
  "Conference and event hosts paying ambassadors",
];

const HowWhiteLabel = () => {
  return (
    <section style={{ backgroundColor: "#0B1F3F" }} className="text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32 grid md:grid-cols-[55fr_45fr] gap-12 md:gap-16">
        <div>
          <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-white/70">
            WHITE-LABEL
          </p>
          <h2
            className="mt-6 font-serif-display text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            Run WER1 as the engine behind your business.
          </h2>
          <div className="mt-8 space-y-6 max-w-[480px]">
            <p className="text-[19px] leading-relaxed text-white/90">
              If you have a business that needs an affiliate or referral program, we can configure WER1 to run it. Same platform you see here, branded for your company.
            </p>
            <p className="text-[19px] leading-relaxed text-white/90">
              Your customers become your promoters. Your promoters become your sales team. The Waves of Pay model means a single happy customer can move outward through their network and keep generating attribution back to your business for years.
            </p>
          </div>

          <a href="/contact?topic=white-label" className="mt-8 text-link-on-dark">
            Talk to us about white-label →
          </a>
        </div>

        <div>
          <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-white/70">
            COMMON USE CASES
          </p>
          <ul className="mt-6 space-y-4">
            {useCases.map((u) => (
              <li key={u} className="flex gap-4 text-[18px] leading-relaxed text-white">
                <span className="bullet-dot" />
                <span>{u}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowWhiteLabel;