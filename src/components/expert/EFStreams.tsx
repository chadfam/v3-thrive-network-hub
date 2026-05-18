const layers = [
  {
    lead: "Content consumption rewards.",
    body: "Earned as families view, listen to, and complete your content.",
  },
  {
    lead: "A revenue share pool for Faculty.",
    body: "",
  },
  {
    lead: "Course and program revenue.",
    body: "",
  },
  {
    lead: "Affiliate and referral earnings.",
    body: "Tracked through the WER1 platform.",
  },
  {
    lead: "Sponsorship and brand opportunities.",
    body: "Tied to the audience your work attracts.",
  },
];

const EFStreams = () => {
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
              More income streams than a{" "}
              <span className="text-brand-blue ppx-italic">single offer</span> can produce.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              A single offer reaches one slice of an audience. Inside the network, the same work earns through several layers at once.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              The path is sequential, and the platform handles the tracking. Apply, get approved, upload and integrate your content, then get distributed and earn.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 sm:p-9 md:p-10" style={{ border: "1px solid #E0E3E7" }}>
            <h3 className="font-serif-display text-[22px] md:text-[24px] leading-tight text-slate-ink">
              How income reaches Faculty
            </h3>
            <ul className="mt-7 space-y-5">
              {layers.map((layer) => (
                <li key={layer.lead} className="flex items-start gap-3">
                  <span aria-hidden className="bullet-dot mt-[9px]" />
                  <span className="text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                    <span className="font-semibold text-slate-ink">{layer.lead}</span>
                    {layer.body ? ` ${layer.body}` : ""}
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

export default EFStreams;
