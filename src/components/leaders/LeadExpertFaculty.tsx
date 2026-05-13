const streams = [
  { num: "01", name: "Content consumption rewards", body: "Get paid as families view, listen to, or complete your content. Blogs, podcasts, videos, courses." },
  { num: "02", name: "Revenue share pool", body: "A percentage of platform revenue is allocated to Expert Faculty. Your share grows with engagement and watch time." },
  { num: "03", name: "Course and program revenue", body: "Feature your premium courses inside FAM Central. Earn directly from enrollments and bundled learning paths." },
  { num: "04", name: "Affiliate and referral earnings", body: "Participate in the WER1 affiliate platform. Earn when families upgrade through your influence." },
  { num: "05", name: "Sponsorship and brand opportunities", body: "Get selected for paid campaigns with aligned brands. Lead featured content series and challenges." },
];

const LeadExpertFaculty = () => {
  return (
    <section id="expert-faculty" className="relative bg-background">
      <div className="absolute inset-0 warm-tint-bg pointer-events-none" aria-hidden style={{ opacity: 0.8 }} />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32 grid md:grid-cols-12 gap-10 md:gap-16 md:items-start">
        <div className="md:col-span-5">
          <div className="font-serif-display text-[28px] text-[hsl(var(--slate-500))]">03</div>
          <h2 className="mt-2 font-serif-display tracking-section text-slate-ink" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1.05 }}>
            Expert Faculty
          </h2>
          <p className="mt-6 text-[19px] font-medium text-slate-ink max-w-[440px]">
            Five income streams for experts whose work is already helping families.
          </p>
          <p className="mt-8 text-[17px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[440px]">
            If you've spent years building expertise in parenting, faith, health, finance, or relationships, you've probably already built an audience. The problem most experts run into isn't the work or the audience. It's that platforms reward attention instead of impact. You spend your time chasing the algorithm and your income depends on whether the algorithm liked you that month.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[440px]">
            Expert Faculty is built differently. The network has a built-in audience of families who joined the platform specifically to find experts they can trust. Your content gets distributed across the FAM Central app, local community hubs, email campaigns, and events. You earn five different ways for the work you're already doing.
          </p>
          <p className="mt-6 italic text-[15px] text-[hsl(var(--slate-500))] max-w-[440px]">
            Categories include parenting and family dynamics, faith and values, health and wellness, financial literacy, relationships and marriage, and education.
          </p>
          <a href="/expert-faculty" className="group mt-6 inline-flex items-center text-[15px] font-medium text-slate-ink">
            <span className="group-hover:text-gradient-warm transition-colors">Expert Faculty details →</span>
          </a>
        </div>
        <div className="md:col-span-7">
          <ul className="mt-6 space-y-8">
            {streams.map((s) => (
              <li key={s.num} className="flex items-start gap-6">
                <div className="font-serif-display text-[40px] leading-none text-gradient-warm shrink-0 w-14">{s.num}</div>
                <div>
                  <div className="font-serif-display text-[22px] text-slate-ink">{s.name}</div>
                  <p className="mt-1 text-[16px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[360px]">{s.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LeadExpertFaculty;