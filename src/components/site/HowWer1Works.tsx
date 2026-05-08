import { Link } from "react-router-dom";

const points: { lead: string; body: string }[] = [
  {
    lead: "For families.",
    body: "When a parent recommends a Local Leader's business and that business closes the deal, the family earns. WER1 is what turns family advocacy into actual income.",
  },
  {
    lead: "For members of any United to Thrive program.",
    body: "Every introduction inside the network is tracked back to its source. Earning isn't a side feature. It's how the whole community is wired.",
  },
  {
    lead: "For partners with their own businesses.",
    body: "We can configure WER1 as the affiliate or referral engine behind your business. The same platform you see here, branded for your company.",
  },
  {
    lead: "For promoters.",
    body: "Share what you love. Get paid when people buy. The Waves of Pay compensation model means you also earn from the introductions made by people you brought into the network.",
  },
];

const HowWer1Works = () => {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24"
      style={{ backgroundColor: "#0B1F3F" }}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-14 md:py-20 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="order-1">
          <h2
            className="font-serif-display text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            Most networks pay one person per deal.
            <br /> This one pays four.
          </h2>
          <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-white/90">
            WER1 is the affiliate and referral platform we acquired to power the entire United to Thrive network. When a referral turns into business, the platform pays four kinds of people automatically: the family who made the recommendation, the local leader who made the connection, the partner who made the introduction, and the promoter who made the share. Most B2B networks ask members to keep their own records and trust the rest. Ours doesn't ask. It runs.
          </p>

          <ul className="mt-10 space-y-6">
            {points.map((p) => (
              <li key={p.lead} className="flex gap-4 text-[17px] text-white leading-relaxed">
                <span className="bullet-dot-on-dark" />
                <span>
                  <span className="font-medium">{p.lead}</span>{" "}
                  <span className="text-white/90">{p.body}</span>
                </span>
              </li>
            ))}
          </ul>

          <Link to="/how-it-works" className="mt-10 text-link-on-dark">
            How WER1 works →
          </Link>
        </div>

        <div className="order-2">
          <svg
            viewBox="0 0 500 500"
            className="w-full h-auto"
            role="img"
            aria-label="Five circles connected by thin lines. One complete path through the network is highlighted in a warm gradient, ending at a circle filled with the same gradient."
          >
            <defs>
              <linearGradient id="warmDiag" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1D4ED8" />
                <stop offset="25%" stopColor="#1D4ED8" />
                <stop offset="55%" stopColor="#1D4ED8" />
                <stop offset="85%" stopColor="#1D4ED8" />
                <stop offset="100%" stopColor="#1D4ED8" />
              </linearGradient>
            </defs>

            {/* Organic positions for 5 circles */}
            {/* A: origin (left), B: upper-mid, C: center, D: lower-mid, E: destination (upper-right) */}
            {/* Faint white connecting lines */}
            <line x1="80" y1="260" x2="200" y2="140" stroke="rgba(255,255,255,0.5)" strokeWidth="1.25" />
            <line x1="80" y1="260" x2="240" y2="380" stroke="rgba(255,255,255,0.5)" strokeWidth="1.25" />
            <line x1="200" y1="140" x2="280" y2="240" stroke="rgba(255,255,255,0.5)" strokeWidth="1.25" />
            <line x1="240" y1="380" x2="280" y2="240" stroke="rgba(255,255,255,0.5)" strokeWidth="1.25" />
            <line x1="240" y1="380" x2="420" y2="320" stroke="rgba(255,255,255,0.5)" strokeWidth="1.25" />
            <line x1="200" y1="140" x2="420" y2="120" stroke="rgba(255,255,255,0.5)" strokeWidth="1.25" />

            {/* Highlighted path: A -> C -> E (gradient) */}
            <line x1="80" y1="260" x2="280" y2="240" stroke="url(#warmDiag)" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="280" y1="240" x2="420" y2="120" stroke="url(#warmDiag)" strokeWidth="2.5" strokeLinecap="round" />

            {/* Outlined white circles (others) */}
            <circle cx="200" cy="140" r="16" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" />
            <circle cx="240" cy="380" r="14" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" />
            <circle cx="420" cy="320" r="12" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" />

            {/* Origin circle (white outline, slightly emphasized) */}
            <circle cx="80" cy="260" r="18" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.75" />

            {/* Center pass-through node on highlighted path (white outline) */}
            <circle cx="280" cy="240" r="14" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" />

            {/* Destination circle filled with warm gradient */}
            <circle cx="420" cy="120" r="22" fill="url(#warmDiag)" />
            <circle cx="420" cy="120" r="22" fill="none" stroke="url(#warmDiag)" strokeWidth="8" opacity="0.2" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HowWer1Works;