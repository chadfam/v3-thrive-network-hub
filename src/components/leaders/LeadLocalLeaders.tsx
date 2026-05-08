import React from "react";

const stages = [
  { num: "01", name: "Guide", body: "Become the trusted resource. Share local recommendations. Highlight events, classes, and opportunities. Educate families on what's available in their neighborhood." },
  { num: "02", name: "Gather", body: "Bring people together. Invite families to events. Host or co-host gatherings. Make introductions between families and between families and the businesses worth knowing." },
  { num: "03", name: "Grow", body: "Multiply your impact. Build a network of trusted partners. Create introductions between businesses and families. Earn through the relationships you build." },
];

const LeadLocalLeaders = () => {
  return (
    <section id="local-leaders" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32 grid md:grid-cols-12 gap-10 md:gap-16 md:items-start">
        <div className="md:col-span-5">
          <div className="font-serif-display text-[28px] text-[hsl(var(--slate-500))]">01</div>
          <h2 className="mt-2 font-serif-display tracking-section text-slate-ink" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1.05 }}>
            Local Leaders
          </h2>
          <p className="mt-6 text-[19px] font-medium text-slate-ink max-w-[440px]">
            The trusted connector in your zip code, one per industry.
          </p>
          <p className="mt-8 text-[17px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[440px]">
            Local Leaders are the people families turn to when they need a recommendation. The mortgage broker who knows the school board. The realtor who knows the kids' coaches. The wellness practitioner who knows everyone's pediatrician. You probably already know who you'd call in your neighborhood for each of these. United to Thrive turns that role into a position.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[440px]">
            Each Local Leader holds one industry in one zip code. When that category is claimed, it's claimed. You become the recognized connector in your category, featured at FAM Central events in your area, and you earn when families in your network make decisions through your introductions.
          </p>
          <div className="mt-6">
            <span className="inline-block bg-gradient-warm text-white text-[12px] font-medium uppercase tracking-[0.12em] px-1.5 py-1 rounded">
              ONE LEADER PER INDUSTRY PER ZIP CODE
            </span>
          </div>
          <p className="mt-4 italic text-[15px] text-[hsl(var(--slate-500))]">
            Most active Local Leaders earn $3,000 to $10,000 per month within their first year.
          </p>
          <a href="/local-leaders" className="group mt-6 inline-flex items-center text-[15px] font-medium text-slate-ink">
            <span className="group-hover:text-gradient-warm transition-colors">Local Leaders details →</span>
          </a>
        </div>

        <div className="md:col-span-7">
          <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-8 md:gap-4 items-start">
            {stages.map((s, i) => (
              <React.Fragment key={s.num}>
                <div>
                  <div className="font-serif-display text-[56px] leading-none text-gradient-warm">{s.num}</div>
                  <div className="mt-4 font-serif-display text-[28px] text-slate-ink">{s.name}</div>
                  <p className="mt-3 text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">{s.body}</p>
                </div>
                {i < stages.length - 1 && (
                  <div className="hidden md:block self-center w-6 h-px bg-gradient-warm mt-10" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadLocalLeaders;