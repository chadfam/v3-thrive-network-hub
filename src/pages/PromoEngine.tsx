import Layout from "@/components/site/Layout";

const features = [
  {
    title: "Centralized control",
    body: "Set strategy at the corporate level. Empower locations to execute within clear guidelines. Manage roles, permissions, and campaigns without slowing down operations.",
  },
  {
    title: "Brand consistency",
    body: "Maintain control over messaging, offers, and customer experience. Every campaign stays on-brand and aligned with your standards across every location.",
  },
  {
    title: "Total visibility",
    body: "See exactly how each location and campaign performs in real time. Track true revenue, not just clicks. Make smarter decisions backed by data.",
  },
  {
    title: "Drive repeat visits",
    body: "Turn one-time customers into repeat customers. Increase visit frequency and maximize the value of the traffic you already have.",
  },
  {
    title: "Built to scale",
    body: "Whether you have 5 locations or 500, Promo Engine grows with you. Launch campaigns across every location in minutes without adding complexity or headcount.",
  },
  {
    title: "Smarter decisions",
    body: "Access clear, actionable insights without digging through data. Understand performance at a glance and report on revenue with confidence.",
  },
];

const steps = [
  { n: "1", name: "Create it", body: "Use the builder to create your promotion as a buy-now offer or coupon. Set your terms, publish it instantly as its own dedicated landing page." },
  { n: "2", name: "Send it", body: "Promo Engine delivers offers through a variety of distribution channels, each with its own custom tracking links so you can reach customers wherever they engage." },
  { n: "3", name: "Earn it", body: "As soon as a customer purchases an offer, the payment is processed and deposited directly into your bank account." },
  { n: "4", name: "Track it", body: "Know exactly where revenue comes from with unique links for every channel. See which emails, texts, or posts are driving sales." },
  { n: "5", name: "Scale it", body: "Every purchaser is automatically added to your customer database. Build lasting loyalty through automated birthday offers, referral programs, and ongoing engagement." },
];

const PromoEngine = () => (
  <Layout
    title="Promo Engine"
    description="Sell high-converting promotions online and capture revenue before customers walk in. Built for in-person businesses with one location or five hundred. Part of the United to Thrive network."
    canonical="/promo-engine"
  >
    <section style={{ backgroundColor: "#0B1F3F" }} className="text-white">
      <div className="mx-auto max-w-[920px] px-6 sm:px-8 md:px-10 pt-24 md:pt-32 pb-20 md:pb-24 text-center">
        <h1
          className="font-serif-display text-white"
          style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
        >
          Turn future visits into <span style={{ color: "#FBBF24" }}>revenue today</span>.
        </h1>
        <p className="mt-8 text-[17px] md:text-[21px] leading-relaxed text-white/90 max-w-[720px] mx-auto">
          Promo Engine is a promotional marketing platform built to turn customer demand into immediate, trackable revenue by allowing in-person businesses to sell high-converting promotions before the visit ever happens.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <a
            href="https://promoengine.com/?ref=unitedtothrive"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-on-dark"
          >
            Visit promoengine.com →
          </a>
          <a href="/contact?topic=promo-engine" className="btn-secondary-on-dark">
            Book a demo
          </a>
        </div>
        <div className="mt-16 md:mt-20 mx-auto max-w-[760px]">
          <svg viewBox="0 0 760 300" className="w-full h-auto" role="img" aria-label="A promo offer published as its own landing page, distributed across email, text, and social channels, with revenue tracked back to each source.">
            <defs>
              <linearGradient id="peCard" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#EEF3FB" />
              </linearGradient>
            </defs>
            {/* offer card (left) */}
            <rect x="20" y="40" width="220" height="220" rx="14" fill="url(#peCard)" />
            <rect x="20" y="40" width="220" height="56" rx="14" fill="#2563EB" />
            <rect x="20" y="82" width="220" height="14" fill="#2563EB" />
            <circle cx="44" cy="68" r="5" fill="#FFFFFF" opacity="0.85" />
            <rect x="58" y="63" width="120" height="10" rx="5" fill="#FFFFFF" opacity="0.85" />
            <rect x="40" y="118" width="180" height="14" rx="7" fill="#0F172A" opacity="0.85" />
            <rect x="40" y="142" width="140" height="10" rx="5" fill="#0F172A" opacity="0.35" />
            <rect x="40" y="176" width="180" height="34" rx="17" fill="#FBBF24" />
            <rect x="76" y="188" width="108" height="10" rx="5" fill="#0F172A" opacity="0.8" />
            <rect x="40" y="226" width="100" height="10" rx="5" fill="#0F172A" opacity="0.25" />
            {/* connectors */}
            <path d="M240 150 H320" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="2" />
            <path d="M320 150 C 360 150, 360 90, 400 90" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="2" fill="none" />
            <path d="M320 150 H400" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="2" />
            <path d="M320 150 C 360 150, 360 210, 400 210" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="2" fill="none" />
            <circle cx="320" cy="150" r="5" fill="#FBBF24" />
            {/* channel chips */}
            {[{ y: 76, label: "Email" }, { y: 138, label: "Text" }, { y: 200, label: "Social" }].map((c) => (
              <g key={c.label}>
                <rect x="400" y={c.y} width="150" height="34" rx="17" fill="#FFFFFF" opacity="0.12" />
                <circle cx="422" cy={c.y + 17} r="6" fill="#FBBF24" />
                <rect x="438" y={c.y + 12} width="92" height="10" rx="5" fill="#FFFFFF" opacity="0.7" />
              </g>
            ))}
            {/* revenue node (right) */}
            <path d="M550 93 H 620" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="2" />
            <path d="M550 155 H 620" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="2" />
            <path d="M550 217 H 620" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="2" />
            <rect x="620" y="110" width="120" height="80" rx="14" fill="#FBBF24" />
            <rect x="640" y="132" width="80" height="14" rx="7" fill="#0F172A" opacity="0.85" />
            <rect x="640" y="156" width="56" height="10" rx="5" fill="#0F172A" opacity="0.5" />
          </svg>
        </div>
      </div>
    </section>

    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2 className="font-serif-display text-slate-ink tracking-section" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
            Enterprise ready.<br />Location proven.
          </h2>
          <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            Whether your internal marketing team wants full control to create, launch, and optimize campaigns across locations, or you prefer a more hands-off approach, our team can handle everything from strategy and execution to reporting on revenue and performance.
          </p>
        </div>

        <div className="mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((f) => (
            <div key={f.title} className="card-surface card-surface-hover rounded-2xl p-7 md:p-8">
              <h3 className="font-serif-display text-slate-ink text-[22px] leading-tight">{f.title}</h3>
              <p className="mt-4 text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="surface-muted">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2 className="font-serif-display text-slate-ink tracking-section" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
            From offer to revenue.<br />And beyond.
          </h2>
        </div>
        <div className="mt-16 md:mt-20 grid md:grid-cols-5 gap-6 md:gap-8">
          {steps.map((s) => (
            <div key={s.n} className="bg-white rounded-2xl p-7 md:p-8 border border-[hsl(var(--slate-200))]">
              <div className="font-serif-display text-brand-blue" style={{ fontSize: 48, lineHeight: 1 }}>
                {s.n}
              </div>
              <h3 className="mt-4 font-serif-display text-slate-ink text-[20px] leading-tight">{s.name}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[hsl(var(--slate-700))]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="navy-cta-band">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 md:px-10 py-16 md:py-24 text-center">
        <h2 className="font-serif-display text-white" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}>
          See exactly how Promo Engine can generate revenue <span className="text-brand-gold">before the customer walks in</span>.
        </h2>
        <p className="mt-6 text-[17px] md:text-[19px] text-white/80 leading-relaxed">
          In just a few minutes, we'll walk you through how it works and what it could look like for your locations.
        </p>
        <div className="mt-10">
          <a href="/contact?topic=promo-engine" className="btn-on-dark">
            Book a demo & strategy session
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default PromoEngine;
