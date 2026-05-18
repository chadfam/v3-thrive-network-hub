import { Link } from "react-router-dom";

const efImage =
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200";
const efImageSrcSet =
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=640 640w, https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200 1200w";

const points = [
  "Distribution across in-app feeds, community hubs, and email campaigns",
  "A place in events, member challenges, and curated learning paths",
  "More income streams than a single offer can produce",
];

const LeadExpertFaculty = () => {
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
              Expert Faculty reach the audience their{" "}
              <span className="text-brand-blue ppx-italic">work is for</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Authors, speakers, coaches, podcast hosts, and category leaders whose work helps families thrive. Inside the network, that work reaches the families who came looking for it.
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
              to="/expert-faculty"
              className="group mt-8 inline-flex items-center text-[15px] font-semibold text-brand-blue"
            >
              More on Expert Faculty
              <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src={efImage}
                srcSet={efImageSrcSet}
                sizes="(max-width: 1024px) 100vw, 600px"
                alt="A writer working on content at a desk in warm daylight."
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

export default LeadExpertFaculty;
