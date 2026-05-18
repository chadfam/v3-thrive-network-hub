const feel = [
  {
    name: "Families",
    body: "Find trusted people, businesses, experts, and experiences that strengthen real life at home.",
  },
  {
    name: "Entrepreneurs",
    body: "Grow through the families who already trust you and the partners who serve them.",
  },
  {
    name: "Experts",
    body: "Reach the audience your work was made for. Get rewarded for impact, not just impressions.",
  },
  {
    name: "Love (Charities)",
    body: "Causes monetize community by recommending the people and resources families already need.",
  },
];

const Feel = () => {
  return (
    <section className="border-t border-slate-ink/10" style={{ backgroundColor: "#E9EFFB" }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2
              className="font-serif-display text-slate-ink"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              Help families <span className="text-brand-blue ppx-italic">F.E.E.L.</span> again.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[480px]">
              Four words that shape what we do for every member of the network.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[480px]">
              F.E.E.L. is the framework beneath everything we build. One network, aligned around the families everyone in it shares.
            </p>
          </div>

          <div
            className="rounded-2xl bg-white p-7 sm:p-9 md:p-10"
            style={{ border: "1px solid #E0E3E7" }}
          >
            <ul className="space-y-6">
              {feel.map((f) => (
                <li key={f.name}>
                  <h3 className="font-serif-display text-[20px] md:text-[22px] leading-tight text-slate-ink">
                    {f.name}
                  </h3>
                  <p className="mt-2 text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                    {f.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feel;
