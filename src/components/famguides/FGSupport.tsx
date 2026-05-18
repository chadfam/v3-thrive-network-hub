const items = [
  {
    lead: "The FAM Plan framework and materials.",
    body: "The structure every family works through, ready to use.",
  },
  {
    lead: "A supporting platform.",
    body: "It keeps each family's plan organized between sessions.",
  },
  {
    lead: "Recurring monthly relationships.",
    body: "An ongoing connection with the families you serve.",
  },
  {
    lead: "Connection across the WEcosystem.",
    body: "Local Leaders, Expert Faculty, and the businesses your families may need.",
  },
  {
    lead: "Coaching and ongoing development.",
    body: "Community and growth through the broader network.",
  },
];

const FGSupport = () => {
  return (
    <section className="bg-white border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="lg:order-2">
            <h2
              className="font-serif-display text-slate-ink"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              A coaching practice with a{" "}
              <span className="text-brand-blue ppx-italic">network underneath</span> it.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              A FAM Guide is never coaching alone. Every part of the role is backed by the WEcosystem and the people inside it.
            </p>
          </div>

          <div className="lg:order-1">
            <article className="rounded-2xl overflow-hidden bg-white shadow-[0_10px_30px_-4px_rgba(15,23,42,0.12)]">
              <div aria-hidden className="h-1" style={{ backgroundColor: "#2563EB" }} />
              <div className="p-7 sm:p-9 md:p-10">
                <h3 className="font-serif-display text-[22px] md:text-[24px] leading-tight text-slate-ink">
                  What every FAM Guide leans on
                </h3>
                <ul className="mt-7 space-y-5">
                  {items.map((item) => (
                    <li key={item.lead} className="flex items-start gap-3">
                      <span aria-hidden className="bullet-dot mt-[9px]" />
                      <span className="text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                        <span className="font-semibold text-slate-ink">{item.lead}</span>{" "}
                        {item.body}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FGSupport;
