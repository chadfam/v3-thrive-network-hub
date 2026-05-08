const BizWer1Band = () => {
  return (
    <section className="navy-cta-band">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-28 text-center">
        <h2 className="font-serif-display section-headline">
          One platform. <span className="ppx-italic">Every introduction.</span>
        </h2>
        <p className="mt-6 mx-auto max-w-2xl text-[17px] md:text-[19px] leading-relaxed text-white/80">
          All three programs run on WER1, the referral platform we own. Every introduction inside the network gets attributed to its source and paid automatically.
        </p>
        <div className="mt-12 grid grid-cols-3 gap-6 md:gap-12 max-w-3xl mx-auto">
          <div>
            <div className="gold-stat-num">3</div>
            <p className="mt-3 text-[13px] md:text-[14px] text-white/70">Programs running on one engine</p>
          </div>
          <div>
            <div className="gold-stat-num">100%</div>
            <p className="mt-3 text-[13px] md:text-[14px] text-white/70">Of introductions tracked &amp; paid automatically</p>
          </div>
          <div>
            <div className="gold-stat-num">0</div>
            <p className="mt-3 text-[13px] md:text-[14px] text-white/70">Spreadsheets you have to keep up</p>
          </div>
        </div>
        <div className="mt-12">
          <a
            href="/how-it-works"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-[15px] font-medium bg-white text-brand-navy hover:bg-brand-gold hover:text-brand-navy transition-colors"
          >
            How WER1 works →
          </a>
        </div>
      </div>
    </section>
  );
};

export default BizWer1Band;