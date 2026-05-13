const steps = [
  { num: "01", name: "Apply", desc: "Share your background, audience, content samples, and the categories you'd contribute to. About fifteen minutes." },
  { num: "02", name: "Get approved", desc: "Our editorial team reviews applications for category alignment, content quality, and the kind of trust families on the platform are looking for." },
  { num: "03", name: "Upload and integrate content", desc: "We help you upload or connect existing content, organize it into categories and learning paths, and optimize it for engagement on the platform." },
  { num: "04", name: "Get distributed and earn", desc: "Your content gets pushed across the five distribution surfaces. The five income streams activate as families engage with what you've put in." },
];

const EFHowItWorks = () => {
  return (
    <section className="relative bg-background">
      <div className="absolute inset-0 warm-tint-bg pointer-events-none" aria-hidden style={{ opacity: 0.8 }} />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2 className="font-serif-display tracking-section text-slate-ink" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
            How to get in.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[720px] mx-auto">
            Membership is by application. We review every applicant for category fit, content quality, and alignment with the platform mission.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              <div className="font-serif-display text-[56px] leading-none text-gradient-warm">{s.num}</div>
              <h3 className="mt-4 font-serif-display text-[24px] text-slate-ink leading-tight">{s.name}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[240px]">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 -right-3 h-px w-6 bg-brand-blue" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EFHowItWorks;