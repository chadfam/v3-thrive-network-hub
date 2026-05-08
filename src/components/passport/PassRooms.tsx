const col1 = [
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
];
const col2 = [
  "Hero Club",
  "Board of Advisors",
  "Dream Team 100",
  "No BS Inner Circle",
  "San Juan Social Club",
  "Four Rooms",
  "Epic Network",
  "Flow",
  "C-Suite Thought Council",
  "Founder's Board",
];
const col3 = [
  "Circle of Influence",
  "Connected",
  "Business Builders",
  "Mentors",
  "Impact Mastermind",
  "12 Mavens",
  "Prosper 360",
  "MixerMind",
  "Business Makers Network",
  "Abundance 360",
  "And dozens more in the network",
];

const Col = ({ items }: { items: string[] }) => (
  <ul className="space-y-8">
    {items.map((name) => (
      <li key={name}>
        <p className="font-serif-display text-[22px] text-slate-ink leading-tight">{name}</p>
      </li>
    ))}
  </ul>
);

const PassRooms = () => {
  return (
    <section id="rooms" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2 className="font-serif-display text-slate-ink tracking-section" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
            Some of the rooms in the Passport.
          </h2>
          <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            Active partner communities receiving Passport-introduced guests. The full set updates as new partners join the network.
          </p>
        </div>

        <div
          className="mt-14 mx-auto rounded-3xl bg-gradient-purple p-8 sm:p-10 md:p-16 lg:px-16 lg:py-20"
          style={{ maxWidth: "1080px" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-2">
            <Col items={col1} />
            <Col items={col2} />
            <Col items={col3} />
          </div>
        </div>

        <p className="mt-8 mx-auto max-w-[720px] text-center italic text-[16px] text-[hsl(var(--slate-500))]">
          Each community has its own host, format, and selection criteria. The Passport coordinates the introduction. The host decides who attends.
        </p>
      </div>
    </section>
  );
};

export default PassRooms;