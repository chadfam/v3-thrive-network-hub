import { Link } from "react-router-dom";
import heroFamily from "@/assets/hero-family.jpg";

type Program = { name: string; to: string };
type Lane = {
  label: string;
  body: string;
  programs: Program[];
  accent: "blue" | "gold" | "slate";
};

const lanes: Lane[] = [
  {
    label: "For Businesses",
    body: "Grow through partnerships, masterminds, and a vetted board of advisors.",
    accent: "blue",
    programs: [
      { name: "Profit Partners™", to: "/profit-partners" },
      { name: "Mastermind Passport™", to: "/mastermind-passport" },
      { name: "Command Central™", to: "/command-central" },
    ],
  },
  {
    label: "For Leaders",
    body: "Paid roles for the connectors, coaches, and category experts already serving their community.",
    accent: "gold",
    programs: [
      { name: "Local Leaders", to: "/local-leaders" },
      { name: "FAM Guides", to: "/fam-guides" },
      { name: "Expert Faculty", to: "/expert-faculty" },
    ],
  },
  {
    label: "Solutions",
    body: "Tools that sit alongside the network for the work most businesses also have to do.",
    accent: "slate",
    programs: [
      { name: "Promo Engine", to: "/promo-engine" },
      { name: "Team Wellness Hub", to: "/team-wellness-hub" },
      { name: "WER1", to: "/wer1" },
    ],
  },
];

const accentDot: Record<Lane["accent"], string> = {
  blue: "bg-brand-blue",
  gold: "bg-brand-gold",
  slate: "bg-[hsl(var(--slate-700))]",
};

const FullNetwork = () => {
  return (
    <section id="for-businesses" className="surface-muted scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <span className="block h-0.5 w-20 bg-brand-gold rounded-full mb-8" aria-hidden />
            <h2 className="font-serif-display section-headline text-slate-ink">
              One network. Three lanes in.
            </h2>
            <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[560px]">
              Three core programs for businesses. Three leadership roles for connectors and coaches. Three solutions for the work that sits alongside.
            </p>

            <div className="mt-10 space-y-7">
              {lanes.map((lane) => (
                <div
                  key={lane.label}
                  className="rounded-2xl bg-white p-7 md:p-8 border border-slate-ink/10"
                >
                  <div className="flex items-center gap-3">
                    <span aria-hidden className={`inline-block w-2.5 h-2.5 rounded-full ${accentDot[lane.accent]}`} />
                    <h3 className="font-serif-display text-[20px] md:text-[22px] text-slate-ink leading-tight">
                      {lane.label}
                    </h3>
                  </div>
                  <p className="mt-3 text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                    {lane.body}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                    {lane.programs.map((p, i) => (
                      <span key={p.name} className="flex items-center">
                        <Link
                          to={p.to}
                          className="text-[15px] font-medium text-slate-ink hover:text-brand-blue transition-colors"
                        >
                          {p.name}
                        </Link>
                        {i < lane.programs.length - 1 && (
                          <span aria-hidden className="ml-5 text-slate-300">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl lg:sticky lg:top-24">
              <img
                src={heroFamily}
                alt="A family at home in soft daylight, the people the network is built to serve."
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

export default FullNetwork;
