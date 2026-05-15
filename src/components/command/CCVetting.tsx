const CCVetting = () => {
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
          Strong communities start with{" "}
          <span className="ppx-italic" style={{ color: "#FBBF24" }}>
            strong families
          </span>
          .
        </h2>

        <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-white/90">
          Command Central is part of the WEcosystem, a family-first network of businesses, community leaders, and trusted experts. The advisors and the members are all working toward the same thing. Businesses that families recommend. Communities built around the people who serve them well.
        </p>

        <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-white/90">
          That's the mission. Command Central exists inside it.
        </p>
      </div>
    </section>
  );
};

export default CCVetting;
