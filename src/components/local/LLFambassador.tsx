const items = [
  "Represent FAM Central at local events",
  "Help host and support family-focused gatherings in their area",
  "Encourage participation in activities and challenges that strengthen families",
];

const LLFambassador = () => {
  return (
    <section className="relative bg-background">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "none",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-[hsl(var(--slate-500))]">
              THE PUBLIC ROLE
            </p>
            <h2
              className="mt-6 font-serif-display text-slate-ink tracking-section"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
            >
              Local Leader. FAMbassador.
            </h2>
            <p className="mt-8 max-w-[480px] text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
              Local Leader is the operational role. FAMbassador is the public-facing one. As a FAMbassador, you represent FAM Central in your community and you help bring families together in real life. You're the face of the platform on the ground.
            </p>
            <p className="mt-6 max-w-[480px] text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
              The two roles are the same person. We use FAMbassador in public-facing materials because it's the role families recognize. We use Local Leader in the back-of-house framework because that's the work the role actually involves.
            </p>
          </div>
          <div className="bg-background rounded-2xl p-10 border" style={{ borderColor: "#E0E3E7" }}>
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-[hsl(var(--slate-500))]">
              WHAT FAMBASSADORS DO IN PUBLIC
            </p>
            <ul className="mt-6 space-y-5">
              {items.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-3 text-[17px] text-[hsl(var(--slate-700))]"
                >
                  <span className="bullet-dot" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 italic text-[15px] text-[hsl(var(--slate-500))]">
              Plus whatever fits your style and your community. The role bends to who you are.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LLFambassador;