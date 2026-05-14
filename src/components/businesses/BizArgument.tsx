const stats = [
  {
    value: "3-5x",
    label: "Higher close rate from referred leads vs. cold outreach.",
  },
  {
    value: "92%",
    label: "Of B2B buyers prefer working with someone they were referred to.",
  },
  {
    value: "$0",
    label: "Ad spend required to grow when the network is doing the work for you.",
  },
];

const BizArgument = () => {
  return (
    <section className="bg-brand-blue/5 border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1080px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display text-slate-ink mx-auto max-w-[920px]"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          Got <span className="text-brand-blue ppx-italic">partnerships</span>?
        </h2>

        <p className="mt-8 mx-auto max-w-[720px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          Customer acquisition is every owner's biggest problem. The owners who keep growing solved it the same way: they stopped buying attention and started getting recommended.
        </p>

        <div className="mt-16 md:mt-20 grid sm:grid-cols-3 gap-10 md:gap-8">
          {stats.map((s) => (
            <div key={s.value}>
              <p
                className="font-serif-display text-brand-blue leading-none"
                style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", letterSpacing: "-0.02em" }}
              >
                {s.value}
              </p>
              <p className="mt-4 mx-auto max-w-[260px] text-[14px] md:text-[15px] leading-relaxed text-[hsl(var(--slate-700))]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BizArgument;
