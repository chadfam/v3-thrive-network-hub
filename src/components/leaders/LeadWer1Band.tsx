const LeadWer1Band = () => {
  return (
    <section style={{ backgroundColor: "#0B1F3F" }} className="text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-12 md:py-16 grid md:grid-cols-[70fr_30fr] gap-8 md:gap-10 items-center">
        <p className="text-[17px] md:text-[19px] leading-relaxed">
          All three programs run on WER1, the patented referral platform we own. Every introduction inside the network gets attributed to its source and paid automatically. Earning isn't a side feature. It's how the whole community is wired.
        </p>
        <div className="md:text-right">
          <a
            href="/how-it-works"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-[15px] font-medium border border-white text-white hover:bg-white hover:text-slate-ink transition-colors"
          >
            How WER1 works →
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeadWer1Band;