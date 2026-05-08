const included = [
  "The full WER1 platform configured for your business",
  "Your branding on dashboards, links, and member-facing pages",
  "Multi-tier payout configuration with Waves of Pay enabled",
  "Branded landing pages and tracked sharing links",
  "Family-unit attribution available as an option",
  "Real-time reporting dashboards for you and your promoters",
  "Automated payment processing and disbursement",
  "Tax documentation and compliance reporting",
  "Implementation support during setup",
  "Ongoing platform updates and security maintenance",
];

const W1WhiteLabel = () => {
  return (
    <section id="for-businesses" style={{ backgroundColor: "#0B1F3F" }} className="text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32 grid md:grid-cols-[55fr_45fr] gap-12 md:gap-16 items-start">
        <div>
          <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-white/70">
            WHITE-LABEL
          </p>
          <h2
            className="mt-6 font-serif-display text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            Your affiliate program. Our platform.
          </h2>
          <div className="mt-8 space-y-6 max-w-[540px]">
            <p className="text-[17px] md:text-[19px] leading-relaxed text-white/90">
              If you have a business that needs an affiliate program, a referral program, or a customer-loyalty engine, we can configure WER1 to run it. Branded for your company. Hosted on your domain or ours. Configured for your specific structure.
            </p>
            <p className="text-[17px] md:text-[19px] leading-relaxed text-white/90">
              The Waves of Pay compensation model is what most off-the-shelf affiliate tools don't do. Your customers become promoters. Your promoters earn from the people they bring in. The result is a referral program that gets stronger over time instead of plateauing at the first ring of advocates.
            </p>
          </div>
          <a href="/contact?topic=white-label" className="mt-8 text-link-on-dark">
            Talk to us about white-label →
          </a>
        </div>

        <div className="bg-white rounded-2xl p-10">
          <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-[hsl(var(--slate-500))]">
            WHAT'S INCLUDED IN A WHITE-LABEL DEPLOYMENT
          </p>
          <ul className="mt-6 space-y-3">
            {included.map((i) => (
              <li key={i} className="flex gap-3 text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                <span className="bullet-dot" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default W1WhiteLabel;