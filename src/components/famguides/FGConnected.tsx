const FGConnected = () => {
  return (
    <section style={{ backgroundColor: "#0B1F3F" }} className="text-white">
      <div className="mx-auto max-w-[760px] px-6 sm:px-10 md:px-16 py-20 md:py-28 text-center">
        <h2
          className="font-serif-display"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          Feel more <span className="ppx-italic" style={{ color: "#FBBF24" }}>connected</span>.
        </h2>

        <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-white/90">
          The plan, the practice, and the network behind every Guide all answer to the same goal.
        </p>
      </div>
    </section>
  );
};

export default FGConnected;
