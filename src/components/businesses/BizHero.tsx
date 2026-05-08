const anchors = [
  { label: "Profit Partners", id: "profit-partners" },
  { label: "Mastermind Passport", id: "mastermind-passport" },
  { label: "Command Central", id: "command-central" },
  { label: "Team Wellness Hub", id: "team-wellness-hub" },
];

const BizHero = () => {
  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="hero-fullbleed bg-background">
      <img
        className="hero-fullbleed-img"
        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2400&q=80"
        alt="Business owners in candid conversation around a table."
        loading="eager"
      />
      <div className="hero-fullbleed-scrim" />
      <div className="hero-fullbleed-content mx-auto max-w-7xl px-6 sm:px-8 md:px-10 pt-16 md:pt-28 pb-20 md:pb-32 grid md:grid-cols-12">
        <div className="md:col-span-7">
          <h1 className="font-serif-display hero-headline text-slate-ink">
            Where <span className="ppx-italic">partnerships</span><br />replace ads.
          </h1>
          <p className="mt-8 max-w-[540px] text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            Four programs and one referral platform for business owners who'd rather earn a recommendation than buy attention. Apply to Profit Partners. The rest unlocks from there.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="/apply"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-[15px] font-medium text-white bg-brand-blue hover:bg-brand-blue-hover transition-colors"
            >
              Apply as a Profit Partner
            </a>
            <a
              href="#profit-partners"
              onClick={(e) => handleAnchor(e, "profit-partners")}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-[15px] font-medium text-slate-ink border border-[hsl(var(--slate-200))] hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              See the four programs
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] font-medium text-[hsl(var(--slate-500))]">
            {anchors.map((a, i) => (
              <span key={a.id} className="inline-flex items-center gap-3">
                <a
                  href={`#${a.id}`}
                  onClick={(e) => handleAnchor(e, a.id)}
                  className="hover:text-brand-blue transition-colors"
                >
                  {a.label}
                </a>
                {i < anchors.length - 1 && <span aria-hidden>·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BizHero;