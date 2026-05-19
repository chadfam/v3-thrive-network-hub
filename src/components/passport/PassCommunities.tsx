const communities = [
  "Board of Advisors",
  "C-Suite Network Hero Club",
  "Dream Team 100",
  "Flight Club",
  "Flow",
  "Jets & Capital",
  "Liberty Spenders",
  "Optimus AI",
  "Speakeasy Mastermind",
  "Profit Partners",
  "WER1 Global Events",
];

const PassCommunities = () => {
  return (
    <section className="bg-white border-t border-slate-ink/10">
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
              Eleven communities. One{" "}
              <span className="text-brand-blue ppx-italic">Passport</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              One curated membership opens guest invitations across every community in the network. New rooms get added as the network grows.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden bg-white shadow-[0_10px_30px_-4px_rgba(15,23,42,0.12)]">
            <div aria-hidden className="h-1" style={{ backgroundColor: "#16294C" }} />
            <div className="p-7 sm:p-9 md:p-10">
              <h3 className="font-serif-display text-[22px] md:text-[24px] leading-tight text-slate-ink">
                Curated access to eleven communities
              </h3>
              <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
                {communities.map((c) => (
                  <li key={c} className="flex items-start gap-2.5">
                    <span aria-hidden className="bullet-dot mt-[9px]" />
                    <span className="text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassCommunities;
