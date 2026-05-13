const items = [
  "Professionals and business owners",
  "Entrepreneurial individuals and families",
  "Community-minded leaders and connectors",
  "Active parents with strong neighborhood networks",
  "Real estate, mortgage, financial, and wellness professionals",
  "Coaches, counselors, and educators",
];

const LLWhoFits = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-7">
            <h2
              className="font-serif-display text-slate-ink tracking-section"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
            >
              Who fits the role.
            </h2>
            <p className="mt-8 max-w-[540px] text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
              The role is built for people who already do this work informally. The realtor whose neighbors text her about contractors. The financial advisor whose clients ask for restaurant recommendations. The pediatrician's wife who runs the school auction every year. You don't need to be a marketer or a salesperson. You need to be the person your community already calls.
            </p>
            <p className="mt-6 max-w-[540px] text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
              We're looking for connectors and community-minded leaders, not affiliate promoters. Selection prioritizes character, presence in the community, and a genuine interest in helping families. Income is the consequence of the work, not the reason to do it.
            </p>
          </div>
          <div className="md:col-span-5">
            <ul className="mt-6 space-y-4">
              {items.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-3 text-[17px] text-[hsl(var(--slate-700))]"
                >
                  <span className="bullet-dot" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 italic text-[15px] text-[hsl(var(--slate-500))]">
              Plus the people who don't fit a category but are obviously the connector in their area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LLWhoFits;