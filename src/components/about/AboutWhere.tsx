const AboutWhere = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32 grid md:grid-cols-12 gap-10 md:gap-16 md:items-start">
        <div className="md:col-span-7">
          <h2 className="font-serif-display text-slate-ink section-headline tracking-section">Where we are.</h2>
          <div className="mt-8 space-y-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[520px]">
            <p>United To Thrive LLC is headquartered in Tempe, Arizona. Phoenix is the original Profit Partners chapter and the first market where the full network is operating end to end. The Phoenix room has owners across financial services, real estate, mortgage, insurance, home services, professional services, construction, and the trades. Category exclusivity is one per industry per market.</p>
            <p>New chapters open as the network grows. The Local Leader and FAM Guide programs operate nationally. Expert Faculty distribution is national from day one. If you're in a market we haven't opened yet and you fit a category, the application puts you on the early list for that market.</p>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="rounded-2xl border border-[hsl(var(--slate)/0.12)] bg-background p-10 md:p-12 text-center">
            <div className="text-[13px] font-medium uppercase tracking-[0.16em] text-[hsl(var(--slate-500))]">HEADQUARTERS</div>
            <address className="not-italic mt-6 font-serif-display text-slate-ink text-[22px] md:text-[24px]" style={{ lineHeight: 1.4 }}>
              United To Thrive LLC<br />
              222 S Mill Ave, Suite 800<br />
              Tempe, AZ 85281
            </address>
            <div className="mx-auto my-8 h-px w-16" style={{ backgroundColor: "#E0E3E7" }} aria-hidden />
            <p className="text-[16px] text-[hsl(var(--slate-700))]">
              Arizona limited liability company. Phoenix is the founding Profit Partners chapter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhere;