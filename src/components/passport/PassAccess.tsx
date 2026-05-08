const cards = [
  {
    label: "OPTION ONE",
    heading: "Through Profit Partners.",
    body: "Members at the Mastermind tier of Profit Partners receive one Passport pass at no additional cost. Members at the Inner Circle tier receive a primary plus partner pass. The Passport sits inside a broader alliance membership focused on referrals, joint ventures, and operating support.",
    cta: "See Profit Partners tiers →",
    href: "/profit-partners",
  },
  {
    label: "OPTION TWO",
    heading: "Standalone application.",
    body: "For owners and executives who want Passport access without joining the full Profit Partners alliance. Membership is annual. Application reviewed within five business days.",
    cta: "Apply for the Passport →",
    href: "/apply?program=mastermind-passport",
  },
];

const PassAccess = () => {
  return (
    <section className="relative bg-background">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{ backgroundImage: "none" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2 className="font-serif-display text-slate-ink tracking-section" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
            Two ways to access the Passport.
          </h2>
          <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            Through a Profit Partners membership at the Mastermind tier and above, or through standalone Passport application.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((c) => (
            <div key={c.label} className="flex flex-col rounded-2xl bg-white p-10 md:p-12" style={{ border: "1px solid #E0E3E7" }}>
              <p className="text-[13px] font-medium tracking-[0.14em] uppercase text-[hsl(var(--slate-500))]">{c.label}</p>
              <h3 className="mt-4 font-serif-display text-[28px] text-slate-ink leading-tight">{c.heading}</h3>
              <p className="mt-5 text-[17px] leading-relaxed text-[hsl(var(--slate-700))] flex-grow">{c.body}</p>
              <a
                href={c.href}
                className="btn-primary mt-8 self-start"
              >
            {c.cta}
          </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PassAccess;