const CCVetting = () => {
  return (
    <section style={{ backgroundColor: "#0B1F3F" }} className="text-white">
      <div className="mx-auto max-w-[760px] px-6 sm:px-8 md:px-10 py-20 md:py-28 text-center">
        <h2
          className="font-serif-display tracking-section"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
        >
          Vetting isn't a checkbox. It's how <span className="ppx-italic" style={{ color: "#FBBF24" }}>trust compounds</span>.
        </h2>

        <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-white/90">
          Every advisor, expert, and service provider in Command Central is someone we've personally worked with and personally vetted.
        </p>

        <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-white/90">
          You're not getting recommendations from strangers. You're getting introductions to people we already trust, because we've already used them.
        </p>

        <p className="mt-10 font-serif-display italic text-white" style={{ fontSize: "clamp(1.25rem, 2.4vw, 1.5rem)" }}>
          Personally worked with. Personally vetted.
        </p>
      </div>
    </section>
  );
};

export default CCVetting;
