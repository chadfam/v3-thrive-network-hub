const roles = [
  { name: "Local Leader", def: "The connector in your zip code.", fit: "A fit if you're already the person your neighborhood asks for recommendations and you'd rather lead a community than scale to a national audience." },
  { name: "FAM Guide", def: "The coach who works with families one at a time.", fit: "A fit if you're a coach, counselor, or mentor at heart and you want recurring revenue without rebuilding your offer every month." },
  { name: "Expert Faculty", def: "The expert whose content reaches the whole network.", fit: "A fit if you've built expertise families benefit from and you'd rather your reach grow through a platform than chase algorithm changes." },
];

const LeadWhichRole = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <div className="mx-auto mb-10 h-[2px] w-20 bg-gradient-warm" />
          <h2 className="font-serif-display tracking-section text-slate-ink" style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
            Which role fits.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[720px] mx-auto">
            Most leaders fit cleanly into one of the three. It's not unusual to be in two at once. A Local Leader who's also Expert Faculty. A FAM Guide who connects families to local businesses through Local Leaders in her network. The roles share an audience and a referral platform underneath.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {roles.map((r) => (
            <div key={r.name} className="bg-white rounded-2xl p-8" style={{ border: "1px solid #E0E3E7" }}>
              <div className="font-serif-display text-[28px] text-slate-ink">{r.name}</div>
              <p className="mt-4 text-[16px] font-medium text-[hsl(var(--slate-700))]">{r.def}</p>
              <p className="mt-3 text-[16px] text-[hsl(var(--slate-700))]">{r.fit}</p>
            </div>
          ))}
        </div>
        <p className="mt-14 text-center font-serif-display italic text-slate-ink text-[20px] md:text-[22px]">
          Apply once. The application asks which role fits, and we route from there.
        </p>
      </div>
    </section>
  );
};

export default LeadWhichRole;