const items = [
  {
    name: "Attribution",
    body: "Every introduction gets a tracked link. Every signup, click, conversion, and purchase ties back to its source. The chain is auditable from the source to the sale.",
  },
  {
    name: "Multi-tier payout",
    body: "The platform calculates and pays four people per transaction by default. Configurable when WER1 runs as the engine for an outside partner business.",
  },
  {
    name: "Family identity",
    body: "Family accounts can have multiple users including parents, teens, and grandparents. Earnings flow to the family unit, not just one logged-in person.",
  },
  {
    name: "Real-time reporting",
    body: "See earnings in the dashboard the moment a transaction closes. Withdraw on a regular schedule. No quarterly statements.",
  },
];

const HowTracks = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[720px] mx-auto">
          <h2
            className="font-serif-display text-slate-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            What the platform actually tracks.
          </h2>
          <p className="mt-6 text-[19px] leading-relaxed text-slate-700">
            The mechanics underneath. No spreadsheets. No honor system. No quarterly reconciliation calls.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((c) => (
            <div key={c.name} className="rounded-2xl border border-slate-200 bg-background p-8">
              <div className="h-[2px] w-8 bg-brand-blue" />
              <h3 className="mt-5 font-serif-display text-slate-ink" style={{ fontSize: 24, lineHeight: 1.2 }}>
                {c.name}
              </h3>
              <p className="mt-3 text-[16px] leading-relaxed text-slate-700">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowTracks;