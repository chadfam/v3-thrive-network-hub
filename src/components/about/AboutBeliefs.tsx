const principles = [
  {
    label: "PRINCIPLE 01",
    headline: "The chain is the point.",
    body: "Most networks pay one person per deal. Most platforms extract value from a single audience. The mom who recommended the business, the local leader who introduced the family, and the person who got the affiliate involved in the first place are all part of the chain. When the platform pays everyone in the chain, the chain holds together.",
  },
  {
    label: "PRINCIPLE 02",
    headline: "Reputation is a twenty-year asset.",
    body: "Marketing tactics depreciate the moment the algorithm changes. Reputation accumulates. Most of the owners in our network are past needing more attention and are tired of paying for it. They're focused on who recommends them in 2045, not who clicks in Q4.",
  },
  {
    label: "PRINCIPLE 03",
    headline: "Families are the math.",
    body: "Most B2B networks treat families as an afterthought, customers, or noise. We treat them as the math. The customer who recommends you to three other parents in the school pickup line is worth more than ten Facebook clicks. The Local Leader who introduces fifteen households a year is worth more than a whole funnel. We built the network around that arithmetic.",
  },
  {
    label: "PRINCIPLE 04",
    headline: "Movement, not campaigns.",
    body: "We don't run marketing campaigns. We don't pay influencers per post. We build connected economies where introductions move outward through the network and the platform pays everyone the introduction touched. We call it movement-driven commerce because it's a movement first, and commerce because that's how movements scale.",
  },
];

const AboutBeliefs = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32">
        <div className="text-center max-w-[720px] mx-auto">
          <h2 className="font-serif-display text-slate-ink section-headline tracking-section">What we believe.</h2>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            Four principles that show up in the way the network is built and the way it runs.
          </p>
        </div>
        <div className="mt-14 md:mt-20 grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {principles.map((p) => (
            <article key={p.label} className="rounded-2xl border border-[hsl(var(--slate)/0.12)] bg-background p-8 md:p-12">
              <div className="text-[13px] font-medium uppercase tracking-[0.16em] text-[hsl(var(--slate-500))]">{p.label}</div>
              <h3 className="mt-4 font-serif-display text-slate-ink text-[26px] md:text-[32px] leading-tight">{p.headline}</h3>
              <p className="mt-5 text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutBeliefs;