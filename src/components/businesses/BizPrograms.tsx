import { Link } from "react-router-dom";

type Offering = {
  name: string;
  body: string;
  benefits: string[];
  to: string;
};

const offerings: Offering[] = [
  {
    name: "Profit Partners™",
    body: "A working alliance of complementary business owners actively recommending each other to the families they already serve.",
    benefits: [
      "Monthly mastermind days with values-aligned owners",
      "Co-marketing campaigns across the alliance",
      "Promoted inside FAM Central to the families already using it",
      "Category exclusivity, one per industry per market",
    ],
    to: "/profit-partners",
  },
  {
    name: "Mastermind Passport™",
    body: "Walk into the elite mastermind rooms most owners spend years trying to find.",
    benefits: [
      "Curated access to top mastermind communities",
      "Peer operators, investors, and partners in every room",
      "Quarterly strategy sessions and partner introductions",
      "Proximity to where capital and deals actually move",
    ],
    to: "/mastermind-passport",
  },
  {
    name: "Command Central™",
    body: "Your own board of advisors, experts, and service providers, vetted with set pricing across the disciplines you actually need.",
    benefits: [
      "Marketing, sales, finance, legal, and technology partners",
      "Pre-vetted, accountable to the network on every referral",
      "Set pricing visible in advance, no vendor casino",
      "Access scales with your tier in the alliance",
    ],
    to: "/command-central",
  },
];

const BizPrograms = () => {
  return (
    <section className="bg-white border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display text-slate-ink mx-auto max-w-[820px]"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          Inside the <span className="text-brand-blue ppx-italic">alliance</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          Apply once. The alliance opens from there, with access scaling by tier as you grow into the work.
        </p>

        <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-6 md:gap-7 text-left">
          {offerings.map((o) => (
            <article
              key={o.name}
              className="rounded-2xl bg-white p-7 md:p-8 border border-slate-ink/10 flex flex-col hover:border-brand-blue/30 transition-colors"
            >
              <h3 className="font-serif-display text-[22px] md:text-[26px] leading-tight text-slate-ink">
                {o.name}
              </h3>
              <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                {o.body}
              </p>

              <ul className="mt-6 space-y-3 flex-1">
                {o.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span aria-hidden className="bullet-dot" />
                    <span className="text-[14px] md:text-[15px] leading-relaxed text-[hsl(var(--slate-700))]">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to={o.to}
                className="group mt-7 inline-flex items-center text-[14px] font-semibold text-brand-blue"
              >
                Learn more
                <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BizPrograms;
