const steps = [
  { num: "01", name: "Referred in", desc: "Advisors and service providers join Command Central through introduction by an existing network member or partner. Cold submissions don't make it onto the board." },
  { num: "02", name: "Vetted on work", desc: "We review their actual work, their pricing, and their track record before they receive their first referral from the network." },
  { num: "03", name: "Tested with the first introduction", desc: "The first referral they receive from the network is monitored on outcome and member feedback." },
  { num: "04", name: "Stays only if the work stays", desc: "Partners who deliver get more referrals. Partners who don't deliver don't stay. Member feedback runs the system." },
];

const CCVetting = () => {
  return (
    <section style={{ backgroundColor: "#0B1F3F" }} className="text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32 grid md:grid-cols-[55fr_45fr] gap-12 md:gap-16 items-start">
        <div>
          <h2
            className="font-serif-display tracking-section"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
          >
            Vetting isn't a checkbox. It's how <span className="ppx-italic" style={{ color: "#FBBF24" }}>trust compounds</span>.
          </h2>
          <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-white/90 max-w-[480px]">
            A vendor list works as long as you only need it once. Networks fall apart when partners stop being accountable to anyone. Command Central works the other way.
          </p>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-white/90 max-w-[480px]">
            Every advisor and provider on the board has a track record inside the network. They were referred in by an existing member or partner.
          </p>
          <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-white/90 max-w-[480px]">
            They were vetted on quality of work and how they handled past introductions. They stay on the board by being the kind of partner the next member wants referred to them.
          </p>
        </div>
        <ol className="space-y-8">
          {steps.map((s) => (
            <li key={s.num} className="flex gap-5">
              <span className="font-serif-display text-[28px] md:text-[32px] text-gradient-warm leading-none shrink-0">
                {s.num}
              </span>
              <div>
                <h3 className="font-serif-display text-[18px] text-white">{s.name}</h3>
                <p className="mt-1 text-[14px] leading-relaxed text-white/80">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default CCVetting;