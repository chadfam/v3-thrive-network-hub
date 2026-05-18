import { Link } from "react-router-dom";

const included = [
  "The full WER1 platform configured for your business",
  "Your branding on dashboards, links, and member-facing pages",
  "Payout configuration matched to your business structure",
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
          <h2
            className="font-serif-display text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            Your affiliate program. Our platform.
          </h2>
          <div className="mt-8 space-y-6 max-w-[540px]">
            <p className="text-[17px] md:text-[19px] leading-relaxed text-white/90">
              If you have a business that needs an affiliate program, a referral program, or a customer-loyalty engine, we can configure WER1 to run it. Branded for your company. Hosted on your domain or ours. Configured for your specific structure.
            </p>
            <p className="text-[17px] md:text-[19px] leading-relaxed text-white/90">
              Off-the-shelf affiliate tools weren't built for the integrated tracking and attribution your business needs. WER1 was. We can configure it for your specific compensation structure, brand, and rules.
            </p>
            <p className="text-[17px] md:text-[19px] leading-relaxed text-white/90">
              The result is a referral program that gets stronger over time, instead of plateauing at the first ring of advocates.
            </p>
          </div>
          <Link to="/apply" className="mt-8 text-link-on-dark">
            Join our WEcosystem
          </Link>
        </div>

        <div className="bg-white rounded-2xl p-10">
          <h3 className="font-serif-display text-[22px] md:text-[24px] text-slate-ink leading-tight">
            What's included in a white-label deployment
          </h3>
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