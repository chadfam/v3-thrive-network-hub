const CCMission = () => {
  return (
    <section
      style={{ backgroundColor: "#0B1F3F" }}
      className="text-white border-t border-slate-ink/10"
    >
      <div className="mx-auto max-w-[820px] px-6 sm:px-8 md:px-10 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display tracking-section"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
        >
          Inside the{" "}
          <span className="ppx-italic" style={{ color: "#FBBF24" }}>
            WEcosystem
          </span>
          .
        </h2>

        <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-white/90">
          Command Central is one piece of a larger network. The same network includes Profit Partners, Mastermind Passport, FAM Guides, Local Leaders, and the experts whose work reaches families across the country.
        </p>

        <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-white/90">
          Everyone in it is working toward the same thing. Businesses that families recommend. Communities built around the people who serve them well. The board of advisors is part of how that happens.
        </p>
      </div>
    </section>
  );
};

export default CCMission;
