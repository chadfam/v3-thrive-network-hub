const PassWhoFor = () => {
  return (
    <section className="border-t border-slate-ink/10" style={{ backgroundColor: "#E9EFFB" }}>
      <div className="mx-auto max-w-[1080px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display text-slate-ink mx-auto max-w-[860px]"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          A <span className="text-brand-blue ppx-italic">curated room</span> for entrepreneurs, CEOs, investors, and category leaders.
        </h2>

        <p className="mt-8 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          The Passport is curated. Applications are reviewed before acceptance. Qualified applicants may be invited to a short Passport Introduction Call.
        </p>

        <p className="mt-6 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          Visionary builders, business coaches, thought leaders, and strategic deal makers fit the rooms inside the Passport. They serve, build for, and invest in the families our network exists to support.
        </p>
      </div>
    </section>
  );
};

export default PassWhoFor;
