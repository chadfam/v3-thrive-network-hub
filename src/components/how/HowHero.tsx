const HowHero = () => {
  return (
    <section style={{ backgroundColor: "#0B1F3F" }} className="text-white">
      <div className="mx-auto max-w-[880px] px-6 sm:px-8 md:px-10 pt-20 md:pt-32 pb-16 md:pb-24 text-center">
        <h1
          className="font-serif-display text-white"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
        >
          How one introduction
          <br /> pays four people.
        </h1>
        <p
          className="mx-auto mt-8 text-white/90"
          style={{ fontSize: "clamp(17px, 1.5vw, 21px)", lineHeight: 1.55, maxWidth: 720 }}
        >
          WER1 is the referral platform we own. It tracks every introduction inside the United to Thrive network and pays the four people whose work made the deal happen. The family who recommended. The leader who connected. The partner who introduced. The promoter who shared. The mechanics are below.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/apply?role=promoter"
            className="btn-on-dark"
          >
            Become a promoter
          </a>
          <a
            href="/businesses"
            className="btn-secondary-on-dark"
          >
            See the programs
          </a>
        </div>

        <div className="mt-16 flex justify-center">
          <svg
            viewBox="0 0 500 500"
            className="w-[320px] md:w-[480px] h-auto"
            role="img"
            aria-label="Five circles connected by thin lines. One complete path through the network is highlighted in a warm gradient."
          >
            <defs>
              <linearGradient id="howWarmDiag" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1D4ED8" />
                <stop offset="25%" stopColor="#1D4ED8" />
                <stop offset="55%" stopColor="#1D4ED8" />
                <stop offset="85%" stopColor="#1D4ED8" />
                <stop offset="100%" stopColor="#1D4ED8" />
              </linearGradient>
            </defs>
            <line x1="80" y1="260" x2="200" y2="140" stroke="rgba(255,255,255,0.3)" strokeWidth="1.25" />
            <line x1="80" y1="260" x2="240" y2="380" stroke="rgba(255,255,255,0.3)" strokeWidth="1.25" />
            <line x1="200" y1="140" x2="280" y2="240" stroke="rgba(255,255,255,0.3)" strokeWidth="1.25" />
            <line x1="240" y1="380" x2="280" y2="240" stroke="rgba(255,255,255,0.3)" strokeWidth="1.25" />
            <line x1="240" y1="380" x2="420" y2="320" stroke="rgba(255,255,255,0.3)" strokeWidth="1.25" />
            <line x1="200" y1="140" x2="420" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="1.25" />

            <line x1="80" y1="260" x2="280" y2="240" stroke="url(#howWarmDiag)" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="280" y1="240" x2="420" y2="120" stroke="url(#howWarmDiag)" strokeWidth="2.5" strokeLinecap="round" />

            <circle cx="200" cy="140" r="16" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
            <circle cx="240" cy="380" r="14" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
            <circle cx="420" cy="320" r="12" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
            <circle cx="80" cy="260" r="18" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.75" />
            <circle cx="280" cy="240" r="14" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" />
            <circle cx="420" cy="120" r="22" fill="url(#howWarmDiag)" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HowHero;