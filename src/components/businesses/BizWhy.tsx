const BizWhy = () => {
  return (
    <section style={{ backgroundColor: "#16294C" }} className="text-white">
      <div className="mx-auto max-w-[1080px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display mx-auto max-w-[860px]"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          A recommendation outperforms any ad you could{" "}
          <span className="ppx-italic" style={{ color: "#FBBF24" }}>buy</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.7] text-white/90">
          When a parent recommends a business to another parent, the introduction arrives with trust already attached. No ad can manufacture that.
        </p>

        <p className="mt-6 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.7] text-white/90">
          The three offerings inside For Businesses are built to make those introductions happen on purpose. One application opens all of them.
        </p>
      </div>
    </section>
  );
};

export default BizWhy;
