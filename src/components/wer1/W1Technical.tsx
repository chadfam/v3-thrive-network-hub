const caps = [
  { name: "Tracking and attribution", body: "Every link, click, signup, and purchase ties back to its source automatically. The chain is auditable from the moment a link is shared." },
  { name: "Multi-tier calculation", body: "The platform calculates payouts across multiple waves per transaction in real time. No manual reconciliation. No spreadsheets." },
  { name: "Real-time dashboards", body: "Promoters and program operators see earnings, performance, and chain health updates the moment a transaction closes." },
  { name: "Branded sharing links", body: "Custom-branded short links and landing pages. Optional vanity domains. Trackable across email, social, and direct sharing." },
  { name: "Automated payouts", body: "Direct deposit, PayPal, or platform credit. Payment scheduling configurable per program. Tax documentation generated annually." },
  { name: "Security and compliance", body: "SOC 2 controls, encrypted data, audit logs, and configurable data retention. Built to handle the scale of multi-tier programs." },
];

const W1Technical = () => {
  return (
    <section id="technical-layer" className="relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-brand-blue opacity-[0.04] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2
            className="font-serif-display text-slate-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            What the platform does underneath.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[720px] mx-auto">
            The technical capabilities that make every introduction count. Built into every WER1 deployment.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {caps.map((c) => (
            <div key={c.name} className="bg-white border border-[#E0E3E7] rounded-xl p-7">
              <h3 className="font-serif-display text-slate-ink text-[20px]" style={{ letterSpacing: "-0.01em" }}>
                {c.name}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[hsl(var(--slate-700))]">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default W1Technical;