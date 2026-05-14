const steps = [
  {
    num: "01",
    name: "Strategic partner matching",
    body: "We map your ideal client and connect you with values-aligned businesses already serving them. Every match is intentional, never random.",
  },
  {
    num: "02",
    name: "Co-marketing campaigns",
    body: "Coordinated email, social, and event marketing across partners. Your message reaches their audience. Their message reaches yours. Everyone wins.",
  },
  {
    num: "03",
    name: "Your referral playbook",
    body: "A custom strategy document showing exactly who to partner with, how to approach each conversation, and how to turn relationships into recurring revenue.",
  },
  {
    num: "04",
    name: "Community activation",
    body: "Quarterly masterminds, monthly partner intros, classes and clubs that bring your community together around your business.",
  },
];

const ThreePaths = () => {
  return (
    <section className="bg-[hsl(220_30%_98%)] border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display text-slate-ink mx-auto max-w-[820px]"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          Four steps. One year. <span className="text-brand-blue ppx-italic">Real growth</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[640px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          A clear path from where you are now to consistent, predictable referrals from partners who share your values.
        </p>

        <div className="mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 text-left">
          {steps.map((s) => (
            <article
              key={s.num}
              className="rounded-2xl bg-white p-7 md:p-8 border border-slate-ink/10 flex flex-col"
            >
              <span className="font-serif-display text-brand-blue text-[18px] tracking-tight">
                {s.num}
              </span>
              <h3 className="mt-5 font-serif-display text-[20px] md:text-[22px] leading-tight text-slate-ink">
                {s.name}
              </h3>
              <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePaths;
