const disciplines = [
  { name: "Coaching and Training", desc: "Executive coaching, sales training, group coaching, leadership programs." },
  { name: "Marketing", desc: "Campaign creation, ad management, social media, video production, AI tools." },
  { name: "Sales", desc: "Strategic sales training, conversion systems, prospecting frameworks." },
  { name: "Operations", desc: "Systems, hiring, fractional executives, process design." },
  { name: "Technology", desc: "Stack audits, automation, CRM setup, AI implementation." },
  { name: "Legal", desc: "Business formation, contracts, IP, employment, compliance." },
  { name: "Finance", desc: "Bookkeeping, tax strategy, expense audits, capital planning." },
  { name: "Wealth and Insurance", desc: "Retirement planning, business insurance, succession, estate." },
];

const BizCommandCentral = () => {
  return (
    <section id="command-central" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32 grid md:grid-cols-[45fr_55fr] gap-12 md:gap-16 items-start">
        <div>
          <p className="font-serif-display text-[28px] text-[hsl(var(--slate-500))] leading-none">03</p>
          <h2 className="mt-2 font-serif-display text-slate-ink tracking-section" style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", lineHeight: 1.05 }}>
            Command Central™
          </h2>
          <p className="mt-6 max-w-[440px] text-[17px] md:text-[19px] font-medium text-slate-ink">
            Your own board of advisors, experts, and service providers: pre-screened, with set pricing, accountable to the network.
          </p>
          <p className="mt-8 max-w-[440px] text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">
            The real problem isn't finding help. It's knowing who to trust. Most owners spend years cycling through vendors. The marketing person who didn't deliver. The bookkeeper who left at tax season. The lawyer who didn't return calls. By the third or fourth one you stop trusting recommendations entirely.
          </p>
          <p className="mt-6 max-w-[440px] text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">
            Command Central is the answer. In effect, your own board of directors: vetted partners across the disciplines you actually need, each accountable to the network because their next referral depends on the last one going well. You skip the vendor casino. You get a partner with skin in the game.
          </p>
          <p className="mt-6 max-w-[440px] italic text-[15px] text-[hsl(var(--slate-500))]">
            Included with Profit Partners membership.
          </p>
          <a href="/command-central" className="mt-8 text-link">
            Command Central details →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {disciplines.map((d) => (
            <article
              key={d.name}
              className="rounded-xl bg-white p-7"
              style={{ border: "1px solid #E0E3E7" }}
            >
              <h3 className="font-serif-display text-[24px] leading-snug text-slate-ink">
                {d.name}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[hsl(var(--slate-700))]">
                {d.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BizCommandCentral;