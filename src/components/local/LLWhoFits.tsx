const items = [
  "Professionals and business owners with strong community ties",
  "Entrepreneurial individuals and families",
  "Community-minded leaders and connectors",
  "Active parents with strong neighborhood networks",
  "Real estate, mortgage, financial, and wellness professionals",
  "Coaches, counselors, and educators",
];

const LLWhoFits = () => {
  return (
    <section className="border-t border-slate-ink/10" style={{ backgroundColor: "#E9EFFB" }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2
              className="font-serif-display text-slate-ink"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              A formal role for work you're already doing{" "}
              <span className="text-brand-blue ppx-italic">informally</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              The role gives a name, a playbook, and a network to connecting work many people already do in their communities. It tends to fit a familiar set of people.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 sm:p-9 md:p-10" style={{ border: "1px solid #E0E3E7" }}>
            <h3 className="font-serif-display text-[22px] md:text-[24px] leading-tight text-slate-ink">
              Who the role tends to fit
            </h3>
            <ul className="mt-7 space-y-4">
              {items.map((it) => (
                <li key={it} className="flex items-start gap-3">
                  <span aria-hidden className="bullet-dot mt-[9px]" />
                  <span className="text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                    {it}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LLWhoFits;
