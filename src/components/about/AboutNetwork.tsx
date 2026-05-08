const AboutNetwork = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[760px] px-6 sm:px-8 md:px-10 py-16 md:py-32 text-center">
        <div className="mx-auto mb-10 h-[2px] w-20 bg-gradient-warm" aria-hidden />
        <h2 className="font-serif-display text-slate-ink section-headline tracking-section">
          How the network came together.
        </h2>
        <div className="mt-10 space-y-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          <p>Most companies start with one product and add features. United to Thrive started with the opposite problem. A set of working programs that needed a single front door.</p>
          <p>Profit Partners had been running in Phoenix for years, organized as a referral alliance for business owners. WER1, the affiliate and referral platform, had been built independently and was looking for a home network big enough to run on. FAM Central had been built around the principle that strong families build strong communities. Local Leaders had been operating as a community-connector role inside FAM Central. Mastermind Passport had been a separate offering for owners who needed access to the elite mastermind communities most of them couldn't get into on their own.</p>
          <p>These weren't competing products. They were pieces of the same idea running in different rooms. United to Thrive is what happened when we put them under one roof. We acquired what wasn't already ours, integrated the systems, and built a single network where introductions made in one program pay people in all the others.</p>
        </div>
        <p className="mt-10 font-serif-display italic text-slate-ink text-[20px] md:text-[24px] leading-snug">
          The result is a network that runs on relationships and a platform that pays the relationships back.
        </p>
      </div>
    </section>
  );
};

export default AboutNetwork;