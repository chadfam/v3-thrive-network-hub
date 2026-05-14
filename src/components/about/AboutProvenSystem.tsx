const stats = [
  {
    value: "$500M+",
    label: "In referral-driven sales closed by our team across two decades.",
  },
  {
    value: "5M+",
    label: "Members in the prior networks our founders built and exited.",
  },
  {
    value: "20",
    label: "Years of relationship-driven growth methodology behind the network.",
  },
];

const AboutProvenSystem = () => {
  return (
    <section style={{ backgroundColor: "#0B1F3F" }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center text-white">
        <h2
          className="font-serif-display mx-auto max-w-[820px]"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          A proven system. <span className="ppx-italic" style={{ color: "#FBBF24" }}>Twenty years deep</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[720px] text-[17px] md:text-[19px] leading-[1.65] text-white/85">
          The Raving Referrals methodology has powered relationship-driven growth for two decades. United to Thrive brings that framework to every market we open, with the platforms underneath that make it run.
        </p>

        <div className="mt-16 md:mt-20 grid sm:grid-cols-3 gap-12 md:gap-8">
          {stats.map((s) => (
            <div key={s.value}>
              <p
                className="font-serif-display leading-none"
                style={{
                  fontSize: "clamp(3rem, 6vw, 4.5rem)",
                  letterSpacing: "-0.02em",
                  color: "#FBBF24",
                }}
              >
                {s.value}
              </p>
              <p className="mt-4 mx-auto max-w-[260px] text-[14px] md:text-[15px] leading-relaxed text-white/80">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProvenSystem;
