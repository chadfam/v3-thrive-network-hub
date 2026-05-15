const cards = [
  {
    label: "PROMOTER PATH",
    heading: "Start as a promoter.",
    body: "No fees to join. Get your branded links and start sharing within minutes. The platform handles the rest, including the Waves of Pay attribution.",
    cta: "Become a promoter →",
    href: "/apply?role=promoter",
  },
  {
    label: "WHITE-LABEL PATH",
    heading: "Talk to us about your business.",
    body: "A 30-minute conversation about what you'd configure WER1 to do, your business structure, and a rough sense of timeline. We follow up with implementation specifics.",
    cta: "Talk to us about white-label →",
    href: "/contact?topic=white-label",
  },
];

const W1Apply = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-brand-blue opacity-[0.04] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <div className="mx-auto section-accent" />
          <h2
            className="mt-8 font-serif-display text-slate-ink"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            Two paths. Pick the one that fits.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[640px] mx-auto">
            The promoter side is open enrollment. The white-label side starts with a conversation about your business and what you'd configure WER1 to do.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((c) => (
            <div key={c.label} className="bg-white border border-[#E0E3E7] rounded-2xl p-10 md:p-12 flex flex-col">
              <h3 className="font-serif-display text-slate-ink text-[28px]" style={{ letterSpacing: "-0.01em" }}>
                {c.heading}
              </h3>
              <p className="mt-5 text-[17px] leading-relaxed text-[hsl(var(--slate-700))] flex-1">{c.body}</p>
              <div className="mt-8">
                <a
                  href={c.href}
                  className="btn-primary">
            {c.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center italic text-[16px] text-[hsl(var(--slate-500))]">
          Or visit the standalone WER1 site for the platform-specific deep dive.{" "}
          <a href="https://wer1.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-ink transition-colors">
            WER1.com →
          </a>
        </p>
      </div>
    </section>
  );
};

export default W1Apply;