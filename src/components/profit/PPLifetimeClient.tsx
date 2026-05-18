const PPLifetimeClient = () => {
  return (
    <section className="bg-white border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1080px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display text-slate-ink mx-auto max-w-[860px]"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          Lifetime Client Agency™ turns past clients into your next{" "}
          <span className="text-brand-blue ppx-italic">referrals</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))]">
          Most businesses let past client relationships go quiet. The Lifetime Client Agency™ system, included for every Profit Partners member, is a structured way to bring those relationships back into motion.
        </p>

        <p className="mt-6 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))]">
          It reactivates the clients you've already served, generates repeat business from them, and turns them into a steady source of new referrals into your alliance.
        </p>

        <p className="mt-10 mx-auto max-w-[640px] font-serif-display italic text-slate-ink text-[18px] md:text-[22px] leading-snug">
          The clients you've already served are the warmest audience your business has.
        </p>
      </div>
    </section>
  );
};

export default PPLifetimeClient;
