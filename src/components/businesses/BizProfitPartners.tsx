const highlights = [
  "Working alliance of business owners building referral revenue together",
  "Co-marketing campaigns and structured joint ventures",
  "Quarterly mastermind days and monthly group sessions",
  "Your business promoted to families inside the FAM Central app",
  "Lifetime Client Agency™ system to activate past clients and databases",
  "Mastermind Passport™ access to elite mastermind communities",
  "Command Central™ access to your vetted board of advisors, experts, and service providers",
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
          <p className="mt-6 max-w-[520px] text-[17px] md:text-[19px] font-medium text-slate-ink">
            The flagship. The only program here you can apply to directly.
          </p>
          <p className="mt-8 max-w-[520px] text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">
            Think of it as your own power team. The businesses that already serve your customers, formally sending each other work. It runs on two engines: you promote and get promoted to the families inside the FAM Central app, and the other businesses in your alliance promote you to the families they serve every day. A private network of operators who trade deals instead of business cards.
          </p>
          <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">
            Membership is by application and category, with a private call to fit the right level of access to your business. Once you're in, the rest of the network opens up.
          </p>
          <a href="/profit-partners" className="mt-8 inline-block text-[15px] text-slate-ink hover:text-brand-blue transition-colors underline-offset-4 hover:underline">
            See what's included →
          </a>
        </div>
        <div className="rounded-2xl bg-white p-8 md:p-10" style={{ border: "1px solid #E0E3E7" }}>
          <p className="font-serif-display text-[20px] text-slate-ink">
            Inside the alliance
          </p>
          <ul className="mt-6 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex gap-3 items-start">
                <span aria-hidden className="inline-block w-2 h-2 rounded-full bg-brand-gold flex-shrink-0 mt-[8px]" />
                <span className="text-[16px] leading-snug text-[hsl(var(--slate-700))]">{h}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[14px] italic text-[hsl(var(--slate-500))]">
            And more. The full menu lives on the Profit Partners page.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BizProfitPartners;
