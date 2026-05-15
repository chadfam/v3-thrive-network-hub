const steps = [
  { n: "01", name: "Sign up", body: "Create a promoter account in about five minutes. Tell us what you'd be sharing and the audience you reach. No fees to join." },
  { n: "02", name: "Get your links", body: "Receive branded sharing links for the businesses, programs, and offers in the network. Each link tracks back to your account." },
  { n: "03", name: "Share", body: "Share what's relevant to your audience. Social posts, email, conversations. We don't dictate the format. The platform tracks the activity." },
  { n: "04", name: "Get paid", body: "When someone buys through your link, you earn. Through the Waves of Pay model, you also earn from the people they bring in, indefinitely." },
];

const W1PromoterHow = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2
            className="font-serif-display text-slate-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            For promoters, how it works.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[720px] mx-auto">
            The promoter side of WER1 is the simplest way to engage with the platform. No business required. No quotas. You share what you trust and earn from the activity that follows.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-12 md:gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="font-serif-display text-gradient-warm" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", lineHeight: 1 }}>
                {s.n}
              </div>
              <h3 className="mt-4 font-serif-display text-slate-ink text-[24px]" style={{ letterSpacing: "-0.01em" }}>
                {s.name}
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[240px]">{s.body}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 right-[-12px] w-6 h-px bg-brand-blue" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default W1PromoterHow;