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
            Your affiliate program. Our patented platform.
          </h2>
          <div className="mt-8 space-y-6 max-w-[540px]">
            <p className="text-[17px] md:text-[19px] leading-relaxed text-white/90">
              If you have a business that needs an affiliate program, a referral program, or a customer-loyalty engine, we can configure WER1 to run it. Branded for your company. Hosted on your domain or ours. Configured for your specific structure.
            </p>
            <p className="text-[17px] md:text-[19px] leading-relaxed text-white/90">
              The patent on Waves of Pay is real intellectual property. Most off-the-shelf affiliate tools can't replicate it because they don't have rights to it. Your customers become promoters. Your promoters earn from the people they bring in. The result is a referral program that gets stronger over time instead of plateauing at the first ring of advocates.
            </p>
          </div>
          <a href="/contact?topic=white-label" className="group mt-8 inline-flex items-center gap-2 text-[16px] text-white">
            <span className="relative">
              <span className="bg-gradient-warm bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0">
                Talk to us about white-label →
              </span>
              <span className="group-hover:opacity-0 transition-opacity duration-300">
                Talk to us about white-label →
              </span>
            </span>
          </a>
        </div>

        <div className="bg-white rounded-2xl p-10">
          <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-[hsl(var(--slate-500))]">
            WHAT'S INCLUDED IN A WHITE-LABEL DEPLOYMENT
          </p>
          <ul className="mt-6 space-y-3">
            {included.map((i) => (
              <li key={i} className="flex gap-3 text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                <span className="mt-2 shrink-0 w-2 h-2 rounded-full bg-gradient-warm" />
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