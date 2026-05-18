const items = [
  {
    lead: "The Local Leader Playbook.",
    body: "The operating framework for the role, start to finish.",
  },
  {
    lead: "Certification and onboarding.",
    body: "A clear path from new Leader to confident one.",
  },
  {
    lead: "Monthly group coaching calls.",
    body: "Regular time with the people running the role alongside you.",
  },
  {
    lead: "A private community of Local Leaders.",
    body: "",
  },
  {
    lead: "WER1 platform support.",
    body: "Tracking and attribution for the introductions you make.",
  },
  {
    lead: "A featured presence on FAM Central.",
    body: "Your name in the local hub, in your area.",
  },
];

const LLSupport = () => {
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
              A role with a playbook, a platform, and{" "}
              <span className="text-brand-blue ppx-italic">people behind it</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              The role is supported end to end. A Local Leader steps into a position that already has structure underneath it.
            </p>
          </div>

          <div className="lg:order-1">
            <article className="rounded-2xl overflow-hidden bg-white shadow-[0_10px_30px_-4px_rgba(15,23,42,0.12)]">
              <div aria-hidden className="h-1" style={{ backgroundColor: "#2563EB" }} />
              <div className="p-7 sm:p-9 md:p-10">
                <h3 className="font-serif-display text-[22px] md:text-[24px] leading-tight text-slate-ink">
                  What every Local Leader has
                </h3>
                <ul className="mt-7 space-y-5">
                  {items.map((item) => (
                    <li key={item.lead} className="flex items-start gap-3">
                      <span aria-hidden className="bullet-dot mt-[9px]" />
                      <span className="text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                        <span className="font-semibold text-slate-ink">{item.lead}</span>
                        {item.body ? ` ${item.body}` : ""}
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

export default LLSupport;
