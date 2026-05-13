const anchors = [
  { label: "Profit Partners", id: "profit-partners" },
  { label: "Mastermind Passport", id: "mastermind-passport" },
  { label: "Command Central", id: "command-central" },
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
        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
        srcSet="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=640 640w, https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200 1200w, https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2400 2400w"
        sizes="(max-width: 640px) 100vw, (max-width: 1200px) 100vw, 2400px"
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
            Customer acquisition is every owner's biggest problem. Referrals and partnerships solve it — and close at a far higher rate than any ad ever will. Apply to Profit Partners. The rest of the network opens from there.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="/apply" className="btn-primary">
              Apply as a Profit Partner
            </a>
            <a
              href="#profit-partners"
              onClick={(e) => handleAnchor(e, "profit-partners")}
              className="btn-secondary"
            >
              See the three programs
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