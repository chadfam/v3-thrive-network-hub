const inside = [
  "Monthly masterminds with your alliance partners",
  "Co-marketing campaigns",
  "Referral partner introductions and facilitation",
  "Mastermind Passport access",
  "Command Central access",
  "Lifetime Client Agency™ client-reactivation system",
  "12-month commitment, with the first 60 to 90 days focused on activating partnerships",
  "Promotion to the families inside the FAM Central app",
];

const PPInside = () => {
  return (
    <section className="border-t border-slate-ink/10" style={{ backgroundColor: "#E9EFFB" }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2
              className="font-serif-display text-slate-ink"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              Activate partnerships in your first 60 to 90{" "}
              <span className="text-brand-blue ppx-italic">days</span>.
            </h2>

            <p className="mt-10 font-serif-display italic text-slate-ink text-[18px] md:text-[22px] leading-snug max-w-[480px]">
              We customize the program to fit your business. Applications are reviewed before invitation.
            </p>
          </div>

          <div
            className="rounded-2xl bg-white p-7 sm:p-9 md:p-10"
            style={{ border: "1px solid #E0E3E7" }}
          >
            <h3 className="font-serif-display text-[22px] md:text-[24px] leading-tight text-slate-ink">
              What's inside the alliance
            </h3>
            <ul className="mt-7 space-y-4">
              {inside.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span aria-hidden className="bullet-dot mt-[9px]" />
                  <span className="text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PPInside;
