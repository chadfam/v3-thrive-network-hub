const benefits = [
  "Guest invitations into curated mastermind communities",
  "Strategic introductions to other Passport members",
  "Curated networking events and entrepreneur retreats",
  "Investor gatherings and joint venture opportunities",
  "Access to the Mastermind Passport member directory",
  "Priority introductions to qualified leaders in your field",
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
            Guest access into elite mastermind communities through one membership.
          </p>
          <p className="mt-8 max-w-[440px] text-[17px] leading-relaxed text-white/90">
            Most of the rooms worth being in are invite-only, hard to find, and expensive to test. People spend years getting into the right one and end up paying retail to figure out it wasn't the right one.
          </p>
          <p className="mt-6 max-w-[440px] text-[17px] leading-relaxed text-white/90">
            The Passport is a single membership that gets you guest invitations into a curated set of those rooms. You walk in introduced. You meet the room. You find out which one fits without committing to any of them.
          </p>
          <a href="/mastermind-passport" className="mt-8 inline-block text-[15px] text-white hover:text-brand-gold transition-colors">
            Mastermind Passport details →
          </a>
        </div>
        <div>
          <p className="text-[13px] font-medium tracking-[0.14em] uppercase text-brand-gold">
            INSIDE THE PASSPORT
          </p>
          <ul className="mt-6 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex gap-3 items-start text-[16px] md:text-[18px] leading-relaxed text-white/90">
                <span aria-hidden className="mt-[10px] inline-block w-2 h-2 rounded-full bg-brand-gold flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 italic text-[15px] text-white/60">
            Specific community access is shared during the membership conversation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BizMastermindPassport;
