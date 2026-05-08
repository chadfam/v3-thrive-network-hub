const cards = [
  {
    label: "APPLY DIRECTLY",
    heading: "Step into the role.",
    body: "The application takes about ten minutes. We confirm your category is open in your zip code and follow up within five business days. If both sides agree the fit is right, certification and onboarding start immediately.",
    cta: "Apply now →",
    href: "/apply?role=local-leader",
  },
  {
    label: "NOMINATE A LEADER",
    heading: "Tell us who.",
    body: "If you know the person who's already the connector in your community, nominate them. We reach out, explain the role, and walk them through the application if they're interested. You can stay anonymous or be credited.",
    cta: "Nominate a leader →",
    href: "/nominate",
  },
];

const LLApply = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <div className="mx-auto h-[2px] w-20 bg-gradient-warm" />
          <h2
            className="mt-10 font-serif-display text-slate-ink tracking-hero"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", lineHeight: 1.05 }}
          >
            Apply for your area.
            <br />
            Or nominate someone.
          </h2>
          <p className="mt-8 mx-auto max-w-[640px] text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
            Two ways to fill the position. Apply directly if the work fits you. Nominate someone in your community if you know who the right person is.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {cards.map((c) => (
            <div
              key={c.label}
              className="bg-background rounded-2xl p-12 border flex flex-col"
              style={{ borderColor: "#E0E3E7" }}
            >
              <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-[hsl(var(--slate-500))]">
                {c.label}
              </p>
              <h3 className="mt-4 font-serif-display text-slate-ink text-[28px]">{c.heading}</h3>
              <p className="mt-4 text-[17px] text-[hsl(var(--slate-700))] leading-relaxed flex-1">
                {c.body}
              </p>
              <div className="mt-8">
                <a
                  href={c.href}
                  className="group relative inline-flex items-center justify-center px-6 py-3 rounded-lg text-[15px] font-medium text-white bg-slate-ink overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">{c.cta}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 mx-auto max-w-[720px] italic text-[16px] text-[hsl(var(--slate-500))] text-center">
          If your category is already claimed in your zip code, the application form puts you on the early list for the next opening.
        </p>
      </div>
    </section>
  );
};

export default LLApply;