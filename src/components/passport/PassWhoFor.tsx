const profile = [
  "Founders and CEOs of $1M+ businesses",
  "Multi-business operators",
  "Investors and family offices",
  "Authors, speakers, and thought leaders",
  "High-performing executives and partners",
  "People who have outgrown their current network",
];

const Dot = () => (
  <span aria-hidden className="bullet-dot" />
);

const PassWhoFor = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div>
          <h2 className="font-serif-display text-slate-ink tracking-section" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
            Who the Passport is for.
          </h2>
          <p className="mt-8 max-w-[480px] text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            The Passport is built for owners, executives, and investors who are past the stage where networking happens by accident. Most members run businesses doing $1M and up. Many are operating multiple ventures. They're not looking for general business education. They're looking for the room where the next deal, partnership, or investor conversation happens.
          </p>
          <p className="mt-6 max-w-[480px] text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            Membership is by application. We confirm fit before introducing you to partner communities, because the partner communities decide their own selection criteria. The Passport coordinates the introduction. The host decides who attends.
          </p>
        </div>
        <div>
          <ul className="mt-6 space-y-4">
            {profile.map((p) => (
              <li key={p} className="flex gap-3 items-start">
                <Dot />
                <span className="text-[17px] leading-snug text-[hsl(var(--slate-700))]">{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[15px] italic text-[hsl(var(--slate-500))]">
            And anyone in striking distance of these who's serious about being in the right rooms next year.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PassWhoFor;