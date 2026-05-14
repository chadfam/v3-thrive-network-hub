const stats = [
  {
    value: "4",
    label: "Audiences inside F.E.E.L.: Families, Entrepreneurs, Experts, and Love (Charities).",
  },
  {
    value: "10",
    label: "Programs and platforms operating inside the WEcosystem.",
  },
  {
    value: "1",
    label: "Movement, not a marketing campaign. Connection over attention.",
  },
];

const AboutStats = () => {
  return (
    <section className="bg-brand-blue/5 border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1080px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display text-slate-ink mx-auto max-w-[920px]"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          Four audiences. One <span className="text-brand-blue ppx-italic">WEcosystem</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[720px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          United to Thrive runs a connected WEcosystem organized around helping people F.E.E.L. again: Families, Entrepreneurs, Experts, and Love. Every program plays a specific role. Every program runs on the same referral engine underneath.
        </p>

        <div className="mt-16 md:mt-20 grid sm:grid-cols-3 gap-10 md:gap-8">
          {stats.map((s) => (
            <div key={s.value}>
              <p
                className="font-serif-display text-brand-blue leading-none"
                style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", letterSpacing: "-0.02em" }}
              >
                {s.value}
              </p>
              <p className="mt-4 mx-auto max-w-[260px] text-[14px] md:text-[15px] leading-relaxed text-[hsl(var(--slate-700))]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
