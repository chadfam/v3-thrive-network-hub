const communities = [
  "Genius Network",
  "Strategic Coach",
  "GoBundance",
  "Flight Club",
  "Speakeasy Mastermind",
  "Optimus AI",
  "Liberty Spenders",
  "Driven Mastermind",
  "Mavericks 1000",
  "Jets and Capital",
  "Hero Club",
  "Board of Advisors",
  "Dream Team 100",
  "No BS Inner Circle",
  "San Juan Social Club",
  "Four Rooms",
  "Epic Network",
  "Flow",
];

const BizMastermindPassport = () => {
  return (
    <section id="mastermind-passport" style={{ backgroundColor: "#0B1F3F" }} className="text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div>
          <p className="font-serif-display text-[28px] text-white/50 leading-none">02</p>
          <h2 className="mt-2 font-serif-display tracking-section" style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", lineHeight: 1.05 }}>
            Mastermind Passport™
          </h2>
          <p className="mt-6 max-w-[440px] text-[17px] md:text-[19px] font-medium">
            Guest access into 40+ elite mastermind communities through one membership.
          </p>
          <p className="mt-8 max-w-[440px] text-[17px] leading-relaxed text-white/90">
            Most of the rooms worth being in are invite-only, hard to find, and expensive to test. People spend years getting into the right one and end up paying retail to figure out it wasn't the right one.
          </p>
          <p className="mt-6 max-w-[440px] text-[17px] leading-relaxed text-white/90">
            The Passport is a single membership that gets you guest invitations into a curated set of those rooms. You walk in introduced. You meet the room. You find out which one fits without committing to any of them.
          </p>
          <a href="/mastermind-passport" className="mt-8 inline-block text-[15px] text-white">
            <span className="hover:bg-gradient-warm hover:bg-clip-text hover:text-transparent">
              Mastermind Passport details →
            </span>
          </a>
        </div>
        <div>
          <ul className="space-y-2">
            {communities.map((c) => (
              <li key={c} className="text-[16px] md:text-[19px] font-medium text-white/80">
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-6 italic text-[15px] text-white/60">
            And more, added as the network grows.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BizMastermindPassport;