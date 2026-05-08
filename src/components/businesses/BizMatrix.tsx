type Row = { label: string; state: "yes" | "no" | "addon" | "yesNote"; note?: string };

type Col = { title: string; rows: Row[] };

const cols: Col[] = [
  {
    title: "TIER ONE",
    rows: [
      { label: "Profit Partners alliance", state: "yes" },
      { label: "Lifetime Client Agency™", state: "yesNote", note: "1 user license" },
      { label: "Co-marketing campaigns", state: "yes" },
      { label: "Mastermind Passport", state: "no" },
      { label: "Command Central", state: "no" },
      { label: "Team Wellness Hub", state: "addon" },
    ],
  },
  {
    title: "TIER TWO · MASTERMIND",
    rows: [
      { label: "Profit Partners alliance", state: "yes" },
      { label: "Lifetime Client Agency™", state: "yesNote", note: "2 user licenses" },
      { label: "Co-marketing campaigns", state: "yes" },
      { label: "Mastermind Passport", state: "yesNote", note: "1 pass" },
      { label: "Monthly masterminds", state: "yes" },
      { label: "Category exclusivity in your market", state: "yes" },
      { label: "Command Central", state: "no" },
      { label: "Team Wellness Hub", state: "addon" },
    ],
  },
  {
    title: "TIER THREE · INNER CIRCLE",
    rows: [
      { label: "Profit Partners alliance", state: "yes" },
      { label: "Lifetime Client Agency™", state: "yesNote", note: "10 user licenses" },
      { label: "Co-marketing campaigns", state: "yesNote", note: "done-with-you" },
      { label: "Mastermind Passport", state: "yesNote", note: "primary plus partner pass" },
      { label: "Monthly masterminds plus private inner circle sessions", state: "yes" },
      { label: "Category exclusivity, premium", state: "yes" },
      { label: "Command Central", state: "yes" },
      { label: "Team Wellness Hub", state: "addon" },
      { label: "Founder one-on-ones", state: "yes" },
    ],
  },
];

const Mark = ({ state }: { state: Row["state"] }) => {
  if (state === "no") {
    return <span aria-hidden className="inline-block w-4 h-[2px] bg-[#CDD2D8] flex-shrink-0 mt-3" />;
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" className="flex-shrink-0 mt-1.5" aria-hidden>
      <defs>
        <linearGradient id="warmCheck" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="25%" stopColor="#1D4ED8" />
          <stop offset="55%" stopColor="#1D4ED8" />
          <stop offset="85%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
      <path d="M3 8.5L6.5 12L13 4.5" stroke="url(#warmCheck)" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const stateLabel = (r: Row) => {
  if (r.state === "addon") return "available as add-on";
  if (r.state === "yesNote") return r.note;
  return null;
};

const BizMatrix = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center">
          <span className="block mx-auto h-[2px] w-20 bg-gradient-warm" aria-hidden />
          <h2 className="mt-10 mx-auto font-serif-display section-headline text-slate-ink">
            Apply once.<br />The rest unlocks from there.
          </h2>
          <p className="mt-8 mx-auto max-w-[640px] text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            Profit Partners is the front door. Each tier opens more of the network.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
          {cols.map((col) => (
            <div key={col.title} className="rounded-xl p-7" style={{ border: "1px solid #E0E3E7" }}>
              <p className="text-[12px] font-medium tracking-[0.12em] text-[hsl(var(--slate-500))]">
                {col.title}
              </p>
              <ul className="mt-6 space-y-4">
                {col.rows.map((r) => {
                  const label = stateLabel(r);
                  return (
                    <li key={r.label} className="flex gap-3 items-start">
                      <Mark state={r.state} />
                      <div>
                        <p className="text-[15px] leading-snug text-slate-ink">{r.label}</p>
                        {label && (
                          <p className="mt-1 text-[13px] italic text-[hsl(var(--slate-500))]">
                            {label}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center font-serif-display italic text-[20px] md:text-[22px] text-slate-ink">
          Most owners enter at the middle tier and grow into the top one.
        </p>
      </div>
    </section>
  );
};

export default BizMatrix;