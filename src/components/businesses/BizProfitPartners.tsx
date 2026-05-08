const tiers = [
  {
    width: "w-4/5",
    label: "TIER ONE",
    summary: "Referral introductions and the Lifetime Client Agency™ system.",
    flagship: false,
  },
  {
    width: "w-[90%]",
    label: "TIER TWO · MASTERMIND",
    summary: "Category exclusivity, monthly masterminds, your first Mastermind Passport.",
    flagship: false,
  },
  {
    width: "w-full",
    label: "TIER THREE · INNER CIRCLE",
    summary: "Command Central access, dedicated partner manager, founder one-on-ones.",
    flagship: true,
  },
];

const BizProfitPartners = () => {
  return (
    <section id="profit-partners" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32 grid md:grid-cols-100 md:grid-cols-[55fr_45fr] gap-12 md:gap-16 items-start">
        <div>
          <p className="font-serif-display text-[28px] text-[hsl(var(--slate-500))] leading-none">01</p>
          <h2 className="mt-2 font-serif-display text-slate-ink tracking-section" style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", lineHeight: 1.05 }}>
            Profit Partners™
          </h2>
          <p className="mt-6 max-w-[480px] text-[17px] md:text-[19px] font-medium text-slate-ink">
            The flagship. Three annual tiers. The only program here you can apply to directly.
          </p>
          <p className="mt-8 max-w-[480px] text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">
            A working alliance of business owners building referral revenue together. Quarterly mastermind days. Structured joint ventures. Co-marketing campaigns. A private network of operators who trade deals instead of business cards.
          </p>
          <p className="mt-6 max-w-[480px] text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">
            Each tier opens up more of the network. The entry tier gives you the playbook, the introductions, and the Lifetime Client Agency™ system. The middle tier adds category exclusivity in your market, monthly masterminds, an assigned referral partner manager, and your first Mastermind Passport. The top tier adds Command Central, a dedicated partner manager, and direct one-on-one access to the founder.
          </p>
          <a href="/profit-partners" className="mt-8 inline-block text-[15px] text-slate-ink">
            <span className="hover:bg-gradient-warm hover:bg-clip-text hover:text-transparent">
              See the full tier comparison →
            </span>
          </a>
        </div>
        <div className="flex flex-col gap-4 items-end">
          {tiers.map((t) => (
            <div key={t.label} className={`${t.width} relative rounded-xl p-6`}
              style={
                t.flagship
                  ? { padding: "2px", backgroundImage: "var(--gradient-warm)" }
                  : { border: "1px solid #E0E3E7" }
              }
            >
              <div className={t.flagship ? "rounded-[10px] bg-white p-6" : ""}>
                <p className="text-[12px] font-medium tracking-[0.12em] text-[hsl(var(--slate-500))]">
                  {t.label}
                </p>
                <p className="mt-2 font-serif-display text-[22px] leading-snug text-slate-ink">
                  {t.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BizProfitPartners;