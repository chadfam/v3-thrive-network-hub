const cards = [
  {
    label: "Path one",
    heading: "For promoters.",
    body: "Sign up, share what you love, and earn when people buy. One magic link works across every program in the network, so you get paid no matter which one people choose.",
    highlights: [
      "No business of your own required",
      "One link, every program",
      "Get paid for the recommendations you already make",
    ],
    cta: "Become a promoter →",
    href: "/apply?role=promoter",
  },
  {
    label: "Path two",
    heading: "For businesses.",
    body: "Run your entire affiliate, referral, or customer-loyalty program on top of the WER1 platform. Branded for your business. Configured for your structure. Built so every introduction gets attributed back to its source and paid automatically.",
    highlights: [
      "White-labeled for your brand",
      "Single-tier or multi-tier configurations",
      "Family-unit attribution available",
    ],
    cta: "Talk to us about white-label →",
    href: "/contact?topic=white-label",
  },
];

const W1TwoWays = () => {
  return (
    <section id="two-ways" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2
            className="font-serif-display text-slate-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            Two ways to use WER1.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[720px] mx-auto">
            The platform serves two distinct audiences. Promoters share what they trust and earn through the network. Businesses run their entire affiliate or referral program on the platform we built. Both paths use the same engine underneath: every introduction tracked, every payout automatic.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((c) => (
            <div key={c.label} className="bg-white border border-[#E0E3E7] rounded-2xl p-10 md:p-14 flex flex-col">
              <p className="text-[14px] text-[hsl(var(--slate-700))]">{c.label}</p>
              <h3 className="mt-6 font-serif-display text-slate-ink" style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", letterSpacing: "-0.01em" }}>
                {c.heading}
              </h3>
              <p className="mt-6 text-[17px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[380px]">{c.body}</p>
              <ul className="mt-8 space-y-3">
                {c.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-[16px] text-[hsl(var(--slate-700))]">
                    <span className="bullet-dot" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <a
                  href={c.href}
                  className="btn-primary">
            {c.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default W1TwoWays;