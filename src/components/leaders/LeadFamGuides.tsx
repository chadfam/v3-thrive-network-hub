import { Link } from "react-router-dom";

const fgImage =
  "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1200";
const fgImageSrcSet =
  "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=640 640w, https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1200 1200w";

const points = [
  "The FAM Plan, a plan that belongs to the family",
  "A coaching practice with recurring monthly relationships",
  "A platform built to support the work between sessions",
];

const LeadFamGuides = () => {
  return (
    <section style={{ backgroundColor: "#E9EFFB" }}>
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
              FAM Guides help families{" "}
              <span className="text-brand-blue ppx-italic">feel more connected</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              A FAM Guide is a coach with a plan, a practice, and a platform underneath. Guides walk families through a plan that's genuinely theirs, built around the kind of connection most families say they want and few feel they have.
            </p>

            <ul className="mt-7 space-y-2.5">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <span aria-hidden className="bullet-dot mt-[9px]" />
                  <span className="text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                    {p}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/fam-guides"
              className="group mt-8 inline-flex items-center text-[15px] font-semibold text-brand-blue"
            >
              More on FAM Guides
              <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src={fgImage}
                srcSet={fgImageSrcSet}
                sizes="(max-width: 1024px) 100vw, 600px"
                alt="A parent and child together outdoors in warm daylight."
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

export default LeadFamGuides;
