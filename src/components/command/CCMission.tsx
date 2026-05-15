const CCMission = () => {
  return (
    <section
      style={{ backgroundColor: "#0B1F3F" }}
      className="text-white border-t border-slate-ink/10"
    >
      <div className="mx-auto max-w-[760px] px-6 sm:px-8 md:px-10 py-20 md:py-28 text-center">
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
          Command Central is one piece of a network built around businesses that families recommend.
        </p>

        <p
          className="mt-10 font-serif-display italic text-white"
          style={{ fontSize: "clamp(1.25rem, 2.4vw, 1.5rem)" }}
        >
          Famous for families.
        </p>
      </div>
    </section>
  );
};

export default CCMission;
