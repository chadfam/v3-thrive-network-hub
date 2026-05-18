const cards = [
  {
    label: "PATH ONE",
    heading: "For promoters.",
    body: "Sign up, share what you love, and get paid when people buy. Your magic link tracks every introduction across the network so the payment lands automatically.",
    highlights: [
      "No business of your own required",
      "Branded sharing links and tracking",
      "One link covers every offer in the network",
    ],
    cta: "Become a promoter →",
    href: "/apply?role=promoter",
  },
  {
    label: "PATH TWO",
    heading: "For businesses.",
    body: "Run your entire affiliate, referral, or customer-loyalty program on top of the WER1 platform. Branded for your business. Configured for your structure.",
    highlights: [
      "White-labeled for your brand",
      "Configured for your compensation structure",
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
            The platform serves two distinct audiences. Promoters share what they trust and get paid through the network. Businesses run their entire affiliate or referral program on the platform we built. Same tracking and attribution under both paths.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((c) => (
            <div key={c.label} className="bg-white border border-[#E0E3E7] rounded-2xl p-10 md:p-14 flex flex-col">
              <h3 className="font-serif-display text-slate-ink" style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", letterSpacing: "-0.01em" }}>
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