const llImage =
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1200";
const llImageSrcSet =
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=640 640w, https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1200 1200w";

const points = [
  {
    lead: "Guide.",
    body: "Become the trusted resource. Share recommendations, highlight events, and educate families on raising kids in a connected community.",
  },
  {
    lead: "Gather.",
    body: "Bring people together. Invite families to events, host or co-host gatherings, and encourage participation.",
  },
  {
    lead: "Grow.",
    body: "Expand your impact. Build a network of trusted partners, introduce businesses to families, and encourage referrals across the WEcosystem.",
  },
];

const LLFramework = () => {
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
              The work breaks down into three things you{" "}
              <span className="text-brand-blue ppx-italic">already do</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              The Local Leader role has a simple shape. Three kinds of work, each one something a natural connector already does.
            </p>

            <ul className="mt-7 space-y-4">
              {points.map((p) => (
                <li key={p.lead} className="flex items-start gap-3">
                  <span aria-hidden className="bullet-dot mt-[9px]" />
                  <span className="text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                    <span className="font-semibold text-slate-ink">{p.lead}</span> {p.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src={llImage}
                srcSet={llImageSrcSet}
                sizes="(max-width: 1024px) 100vw, 600px"
                alt="A community gathering with neighbors in conversation in warm daylight."
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LLFramework;
