const LeadWhy = () => {
  return (
    <section style={{ backgroundColor: "#2563EB" }} className="text-white">
      <div className="mx-auto max-w-[1080px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display mx-auto max-w-[860px]"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          The work of strengthening families already runs through{" "}
          <span className="ppx-italic" style={{ color: "#FBBF24" }}>trusted people</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.7] text-white/90">
          Coaches, connectors, and category experts already shape how the families around them live. Most of that work happens informally, on the side.
        </p>

        <p className="mt-6 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.7] text-white/90">
          Three roles inside the WEcosystem give that work a name, a network, and a way to earn through the impact it creates. One application opens all three.
        </p>
      </div>
    </section>
  );
};

export default LeadWhy;
