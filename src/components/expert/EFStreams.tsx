const streams = [
  {
    num: "01",
    label: "Stream one",
    name: "Content consumption rewards.",
    body: "You get paid as families view, listen to, or complete your content. Blogs, podcasts, videos, courses, and learning modules all qualify. The platform tracks engagement at the family level and pays out monthly based on actual consumption, not impressions or clicks.",
    items: [
      "Article views and reading completion",
      "Podcast plays and completion rate",
      "Video watch time and full views",
      "Course module completion",
      "Learning path progress",
    ],
  },
  {
    num: "02",
    label: "Stream two",
    name: "The Expert Faculty Fund.",
    body: "A percentage of overall platform revenue is allocated to a shared pool distributed across Expert Faculty members. Your share of the Fund grows with your engagement metrics over time. The pool exists so that even content that doesn't directly drive paid actions still rewards experts whose work shapes the broader culture of the platform.",
    items: [
      "Total engagement across your content library",
      "Watch time and completion rates",
      "Family retention on your content",
      "Cross-category influence",
    ],
  },
  {
    num: "03",
    label: "Stream three",
    name: "Course and program revenue.",
    body: "Feature your premium courses, programs, or coaching cohorts directly inside FAM Central. The platform handles enrollment, billing, and delivery infrastructure. You set the price and program structure, the platform integrates it into the broader content network.",
    items: [
      "Direct course enrollments",
      "Cohort program seats",
      "Bundled inclusion in family learning paths",
      "Premium tier offerings",
    ],
  },
  {
    num: "04",
    label: "Stream four",
    name: "Affiliate and referral earnings.",
    body: "Participate in the WER1 affiliate platform with one magic link that covers every program in the network. Earn commissions when families upgrade or buy through your influence, no matter which program they choose. The platform keeps attribution intact so the right people get paid.",
    items: [
      "Direct affiliate commissions on family upgrades and purchases",
      "One magic link works across every program in the network",
      "Automatic attribution on every introduction you make",
      "WER1 promoter activity tied to your account",
    ],
  },
  {
    num: "05",
    label: "Stream five",
    name: "Sponsorship and brand opportunities.",
    body: "Get selected for paid campaigns with brands that align with the platform's mission. Lead featured content series, host events, run challenges with sponsor backing, or co-create programs around specific themes. Selection is curated by the platform team based on category fit, audience match, and brand alignment.",
    items: [
      "Brand-funded content series",
      "Sponsored events and challenges",
      "Co-branded programs",
      "Speaking and appearance fees through the network",
    ],
  },
];

const EFStreams = () => {
  return (
    <section id="income-streams" style={{ backgroundColor: "#0B1F3F" }} className="text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2 className="font-serif-display tracking-section text-white" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
            The five income streams.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-white/90 max-w-[720px] mx-auto">
            The five ways Expert Faculty earn from the platform. Most active members earn from three or four of the five concurrently. The structure is built so that the more your content reaches families, the more streams activate.
          </p>
        </div>
        <div className="mt-16 space-y-20">
          {streams.map((s, i) => (
            <div key={s.num}>
              {i > 0 && <div className="h-px w-full bg-white/20 mb-20" />}
              <div className="grid md:grid-cols-12 gap-8 md:gap-10">
                <div className="md:col-span-3">
                  <div className="font-serif-display text-[80px] leading-none text-brand-gold">{s.num}</div>
                  <div className="mt-3 text-[14px] text-white/80">{s.label}</div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-serif-display text-[28px] md:text-[32px] text-white leading-tight">{s.name}</h3>
                  <p className="mt-5 text-[17px] leading-relaxed text-white/90 max-w-[640px]">{s.body}</p>
                  <ul className="mt-6 space-y-3">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] text-white/80">
                        <span className="bullet-dot" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EFStreams;