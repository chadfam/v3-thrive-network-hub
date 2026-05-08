const cards = [
  { label: "IF YOU RUN A BUSINESS", heading: "Apply to Profit Partners.", body: "The flagship program and front door for owners building referral revenue.", button: "Apply now →", route: "/apply" },
  { label: "IF YOU LEAD A COMMUNITY", heading: "Apply for a leadership role.", body: "Local Leaders, FAM Guides, and Expert Faculty applications go through the same form.", button: "Apply now →", route: "/apply" },
  { label: "IF YOU JUST WANT TO SHARE", heading: "Become a WER1 promoter.", body: "Share what you love. Earn through the patented Waves of Pay model.", button: "Become a promoter →", route: "/apply?role=promoter" },
];

const AboutEngage = () => {
  return (
    <section className="relative bg-background">
      <div className="absolute inset-0 pointer-events-none" aria-hidden style={{ backgroundImage: "none" }} />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32">
        <div className="text-center max-w-[720px] mx-auto">
          <div className="mx-auto mb-8 h-[2px] w-20 bg-gradient-warm" aria-hidden />
          <h2 className="font-serif-display text-slate-ink section-headline tracking-section">How to engage.</h2>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">Three ways in, depending on what you do.</p>
        </div>
        <div className="mt-14 md:mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((c) => (
            <article key={c.label} className="flex flex-col rounded-2xl border border-[hsl(var(--slate)/0.12)] bg-background p-8 md:p-10">
              <div className="text-[13px] font-medium uppercase tracking-[0.16em] text-[hsl(var(--slate-500))]">{c.label}</div>
              <h3 className="mt-4 font-serif-display text-slate-ink text-[24px] md:text-[28px] leading-tight">{c.heading}</h3>
              <p className="mt-4 text-[17px] leading-relaxed text-[hsl(var(--slate-700))] flex-1">{c.body}</p>
              <a href={c.route} className="group relative mt-8 inline-flex items-center justify-center px-5 py-3 rounded-lg text-[14px] font-medium text-white bg-slate-ink overflow-hidden self-start">
                <span className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">{c.button}</span>
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