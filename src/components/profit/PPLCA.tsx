const steps = [
  { n: "01", name: "Activate", desc: "Audit and segment your existing client database. Identify the relationships most likely to refer or rebuy." },
  { n: "02", name: "Convert", desc: "Run structured outreach campaigns through the LCA playbook. Past clients become repeat clients and active referrers." },
  { n: "03", name: "Compound", desc: "Integrate LCA into your ongoing co-marketing and referral campaigns through the alliance. Each new client adds to the system instead of starting it over." },
];

const PPLCA = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32 grid md:grid-cols-[55fr_45fr] gap-12 md:gap-20 items-start">
        <div>
          <h2 className="font-serif-display text-slate-ink tracking-section" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
            Activate the clients you already have.
          </h2>
          <p className="mt-8 max-w-[540px] text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            Most businesses spend years acquiring clients and then quietly let those relationships fade. The Lifetime Client Agency™ system is the operating playbook for not doing that.
          </p>
          <p className="mt-6 max-w-[540px] text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            LCA gives Profit Partners members a structured way to wake up the database, generate repeat business, and turn past clients into ongoing referral sources. It's included with every Profit Partners membership, with the depth of deployment shaped to your business.
          </p>
        </div>
        <ol className="space-y-8">
          {steps.map((s) => (
            <li key={s.n} className="flex gap-6 items-start">
              <span aria-hidden className="font-serif-display text-[40px] leading-none text-transparent bg-clip-text bg-brand-blue flex-shrink-0">
                {s.n}
              </span>
              <div>
                <p className="font-serif-display text-[22px] text-slate-ink leading-tight">{s.name}</p>
                <p className="mt-2 text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default PPLCA;