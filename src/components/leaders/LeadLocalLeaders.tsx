import { Link } from "react-router-dom";

const llImage =
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=1200";
const llImageSrcSet =
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=640 640w, https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=1200 1200w";

const points = [
  "Recommend the businesses and experts families can rely on",
  "Bring families together at events and gatherings",
  "Build a network of trusted partners across the WEcosystem",
];

const LeadLocalLeaders = () => {
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
              Local Leaders are the trusted connector in your{" "}
              <span className="text-brand-blue ppx-italic">area</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              One Local Leader per industry per area. If you're the person neighbors already turn to for recommendations, the role gives that work a name, a playbook, and a network behind it.
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
              to="/local-leaders"
              className="group mt-8 inline-flex items-center text-[15px] font-semibold text-brand-blue"
            >
              More on Local Leaders
              <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="lg:order-1">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src={llImage}
                srcSet={llImageSrcSet}
                sizes="(max-width: 1024px) 100vw, 600px"
                alt="Neighbors gathered together outdoors in warm daylight."
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

export default LeadLocalLeaders;
