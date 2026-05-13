const rows = [
  { tier: "Profit Partner", access: "Selected services on request, case-by-case" },
  { tier: "Mastermind", access: "Selected services on request, case-by-case" },
  { tier: "Inner Circle", access: "Full bench, on-demand, all five disciplines" },
];

const CCAccess = () => {
  return (
    <section className="relative bg-background">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "none",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 sm:px-8 md:px-10 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display text-slate-ink tracking-section"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
        >
          How to access Command Central.
        </h2>
        <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          Command Central is included at the Inner Circle tier of Profit Partners. Members at that tier have on-demand access across all five disciplines without per-engagement upcharges from the network.
        </p>
        <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          Specific partners may have their own service fees. Those are pre-priced and visible inside the platform before any work begins.
        </p>
        <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          For members at the Profit Partner and Mastermind tiers who occasionally need a partner on a specific engagement, individual services can be requested on a case-by-case basis. The full bench unlocks at Inner Circle.
        </p>

        <div
          className="mt-16 mx-auto max-w-[640px] rounded-2xl bg-white p-6 sm:p-8 md:p-10 text-left"
          style={{ border: "1px solid #E0E3E7" }}
        >
          <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[hsl(var(--slate-500))] text-center">
            COMMAND CENTRAL ACCESS BY TIER
          </p>
          <div className="mt-6">
            {rows.map((r, i) => (
              <div
                key={r.tier}
                className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-4 py-4"
                style={i > 0 ? { borderTop: "1px solid #E0E3E7" } : undefined}
              >
                <span className="text-[16px] font-medium text-slate-ink">{r.tier}</span>
                <span className="text-[16px] text-[hsl(var(--slate-700))]">{r.access}</span>
              </div>
            ))}
          </div>
        </div>

        <a href="/profit-partners" className="mt-10 text-link">
          See more on Profit Partners →
        </a>
      </div>
    </section>
  );
};

export default CCAccess;