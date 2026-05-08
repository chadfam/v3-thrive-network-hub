import actioncoach from "@/assets/partners/actioncoach.svg";
import csuiteNetwork from "@/assets/partners/csuite-network.png";
import clickfunnels from "@/assets/partners/clickfunnels.svg";
import geniusNetwork from "@/assets/partners/genius-network.png";
import gobundance from "@/assets/partners/gobundance.png";
import strategicCoach from "@/assets/partners/strategic-coach.png";
import drivenMastermind from "@/assets/partners/driven-mastermind.png";
import maverick1000 from "@/assets/partners/maverick-1000.png";
import speakeasy from "@/assets/partners/speakeasy.png";
import optimus from "@/assets/partners/optimus.png";
import jetsCapital from "@/assets/partners/jets-capital.png";
import boardOfAdvisors from "@/assets/partners/board-of-advisors.svg";
import workmanSuccess from "@/assets/partners/workman-success.png";
import a1Garage from "@/assets/partners/a1-garage.png";
import pods from "@/assets/partners/pods.png";
import bbbs from "@/assets/partners/bbbs.svg";
import lightspeedvt from "@/assets/partners/lightspeedvt.svg";
import care from "@/assets/partners/care.svg";

type Partner = { name: string; logo?: string };

const partners: Partner[] = [
  { name: "ActionCoach", logo: actioncoach },
  { name: "C-Suite Network", logo: csuiteNetwork },
  { name: "ClickFunnels", logo: clickfunnels },
  { name: "Genius Network", logo: geniusNetwork },
  { name: "GoBundance", logo: gobundance },
  { name: "Strategic Coach", logo: strategicCoach },
  { name: "Driven Mastermind", logo: drivenMastermind },
  { name: "Maverick 1000", logo: maverick1000 },
  { name: "Liberty Spenders" },
  { name: "Flight Club" },
  { name: "Speakeasy", logo: speakeasy },
  { name: "Optimus", logo: optimus },
  { name: "Jets & Capital", logo: jetsCapital },
  { name: "Dream Team 100" },
  { name: "No BS Inner Circle" },
  { name: "Hero Club" },
  { name: "Board of Advisors", logo: boardOfAdvisors },
  { name: "Workman Success", logo: workmanSuccess },
  { name: "A1 Garage Doors", logo: a1Garage },
  { name: "Aflac" },
  { name: "PODS", logo: pods },
  { name: "Big Brothers Big Sisters", logo: bbbs },
  { name: "LightspeedVT", logo: lightspeedvt },
  { name: "Care.com", logo: care },
];

const advisors = [
  "Brad Sugars", "Mark Victor Hansen", "Joe Polish", "Tommy Mello", "Dan Kennedy", "Eric Lofholm",
  "Dan Martell", "Verl Workman", "Jeffrey Hayzlett", "Charles Byrd", "Perry Belcher", "Roland Frazier",
  "Jamie Gruber", "Yanik Silver", "Patrick Nahass", "Daven Michaels", "Ryan Lee", "Chris Smith", "Steve Harward",
];

const TheRoom = () => {
  const advisorLine = advisors.join(" · ");
  return (
    <section id="about" className="bg-background scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-14 md:py-20">
        <div className="max-w-3xl">
          <h2 className="font-serif-display section-headline text-slate-ink">
            Backed by relationships you've heard of.
          </h2>
          <p className="mt-6 text-[18px] md:text-[20px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[720px]">
            Mastermind Passport puts members inside the rooms most entrepreneurs spend years trying to find. Expert Faculty puts them in conversation with the people who built those rooms.
          </p>
        </div>

        {/* Partner logos - continuous marquee */}
        <div className="mt-16 md:mt-24 overflow-hidden">
          <div className="flex marquee-track items-center whitespace-nowrap">
            {[...partners, ...partners].map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="flex items-center justify-center px-8 md:px-12 shrink-0"
              >
                {p.logo ? (
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    loading="lazy"
                    className="max-h-11 md:max-h-14 w-auto object-contain"
                  />
                ) : (
                  <span className="font-serif-display text-slate-ink text-[18px] md:text-[20px] leading-tight tracking-tight">
                    {p.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Advisors - desktop marquee, mobile static block */}
        <div className="mt-16 md:mt-24">
          <div className="hidden md:block overflow-hidden">
            <div className="flex marquee-track whitespace-nowrap">
              <span className="font-sans-ui font-medium text-slate-ink text-[20px] pr-10">{advisorLine} · </span>
              <span className="font-sans-ui font-medium text-slate-ink text-[20px] pr-10" aria-hidden>{advisorLine} · </span>
            </div>
          </div>
          <p className="md:hidden font-sans-ui font-medium text-slate-ink text-[16px] leading-relaxed">
            {advisorLine}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheRoom;