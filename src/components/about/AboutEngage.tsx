const cards = [
  { label: "If you run a business", heading: "Apply to Profit Partners.", body: "The flagship program and front door for owners building referral revenue.", button: "Apply now →", route: "/apply" },
  { label: "If you lead a community", heading: "Apply for a leadership role.", body: "Local Leaders, FAM Guides, and Expert Faculty applications go through the same form.", button: "Apply now →", route: "/apply" },
  { label: "If you just want to share", heading: "Become a WER1 promoter.", body: "Share what you love. One magic link, every program, paid when people buy.", button: "Become a promoter →", route: "/apply?role=promoter" },
];

const AboutEngage = () => {
  return (
    <section className="relative bg-background">
      <div className="absolute inset-0 pointer-events-none" aria-hidden style={{ backgroundImage: "none" }} />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32">
        <div className="text-center max-w-[720px] mx-auto">
          <div className="mx-auto mb-8 section-accent" aria-hidden />
          <h2 className="font-serif-display text-slate-ink section-headline tracking-section">How to engage.</h2>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">Three ways in, depending on what you do.</p>
        </div>
        <div className="mt-14 md:mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((c) => (
            <article key={c.label} className="flex flex-col rounded-2xl border border-[hsl(var(--slate)/0.12)] bg-background p-8 md:p-10">
              <div className="text-[14px] text-[hsl(var(--slate-700))]">{c.label}</div>
              <h3 className="mt-4 font-serif-display text-slate-ink text-[24px] md:text-[28px] leading-tight">{c.heading}</h3>
              <p className="mt-4 text-[17px] leading-relaxed text-[hsl(var(--slate-700))] flex-1">{c.body}</p>
              <a href={c.route} className="btn-primary text-[14px] py-3 px-5 min-h-0 mt-8 self-start">
            {c.button}
          </a>
            </article>
          ))}
        </div>
        <p className="mt-16 text-center text-[16px] italic text-[hsl(var(--slate-500))]">
          Or if you have a business that needs a referral platform of its own, talk to us about white-label.{" "}
          <a href="/contact?topic=white-label" className="not-italic underline underline-offset-4 text-slate-ink hover:opacity-70">
            Talk to us about white-label →
          </a>
        </p>
      </div>
    </section>
  );
};

export default AboutEngage;