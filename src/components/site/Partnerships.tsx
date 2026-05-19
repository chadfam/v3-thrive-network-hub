const Partnerships = () => {
  return (
    <section style={{ backgroundColor: "#264B73" }} className="text-white">
      <div className="mx-auto max-w-[1080px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display mx-auto max-w-[860px]"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          Grow through the families who already trust{" "}
          <span className="ppx-italic" style={{ color: "#FBBF24" }}>the people around you</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.7] text-white/90">
          Families lean on neighbors, friends, and trusted experts long before they trust a Facebook ad. Inside our network, owners recommend each other to the people they already serve, and trust travels with the recommendation.
        </p>

        <p className="mt-6 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.7] text-white/90">
          Three parents at school pickup beat ten Facebook clicks. That's the engine behind every offering inside the WEcosystem.
        </p>

        <p className="mt-12 font-serif-display italic text-white text-[20px] md:text-[26px] leading-snug">
          Partnerships over advertising.
        </p>
      </div>
    </section>
  );
};

export default Partnerships;
