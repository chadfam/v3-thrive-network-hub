const PassWhy = () => {
  return (
    <section style={{ backgroundColor: "#0B1F3F" }} className="text-white">
      <div className="mx-auto max-w-[1080px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display mx-auto max-w-[860px]"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          One membership opens the rooms you could not reach{" "}
          <span className="ppx-italic" style={{ color: "#FBBF24" }}>alone</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.7] text-white/90">
          The mastermind communities where operators, investors, and category leaders gather are curated and invitation-only. Reaching even one of them on your own takes persistence and the right introduction.
        </p>

        <p className="mt-6 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.7] text-white/90">
          Mastermind Passport carries the introduction. One curated membership, guest access across the network, and a seat in the conversations that move a business forward.
        </p>
      </div>
    </section>
  );
};

export default PassWhy;
