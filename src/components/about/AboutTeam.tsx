type Member = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  initials: string;
  link?: { href: string; label: string };
};

const team: Member[] = [
  {
    name: "Brandon Barnum",
    role: "CEO",
    bio: "Refer.com co-founder (5M+ members, exited 2019), Brandon personally closed $500M+ in referral-driven sales before founding HOA.com. He brings his proven Raving Referrals partnership and community-platform growth expertise to United to Thrive.",
    photo: "/team/brandon-barnum.jpg",
    initials: "BB",
    link: { href: "https://ravingreferrals.com", label: "ravingreferrals.com" },
  },
  {
    name: "Jashin Howell",
    role: "President",
    bio: "Ecosystem builder and growth strategist who helps scale startups, recruit top talent, and build community-driven platforms, while advocating for strong families and impact-focused leadership.",
    photo: "/team/jashin-howell.jpg",
    initials: "JH",
    link: { href: "https://famfunpass.com", label: "famfunpass.com" },
  },
  {
    name: "Chris Lange",
    role: "CEO, Hownd",
    bio: "Marketing technology executive with 25+ years building automated promotion platforms that help local businesses drive customer engagement, retention, and measurable revenue growth. Leads Hownd, a FAM Project subsidiary.",
    photo: "/team/chris-lange.jpg",
    initials: "CL",
    link: { href: "https://hownd.com", label: "hownd.com" },
  },
  {
    name: "Nathan Leavitt",
    role: "CTO",
    bio: "Seasoned software architect with 15+ years building scalable SaaS platforms. Co-founder of CustomerHub and technology leader behind cloud-native systems serving thousands of businesses and millions of users.",
    photo: "/team/nathan-leavitt.jpg",
    initials: "NL",
  },
  {
    name: "Chris Webb",
    role: "CFO",
    bio: "Founder of Cash Flow Mechanics and financial strategist specializing in cash flow optimization, profitability planning, and financial systems for growing companies. Brings capital strategy and operational finance to support scalable growth.",
    photo: "/team/chris-webb.jpg",
    initials: "CW",
    link: { href: "https://yourpersonalaccountant.org", label: "yourpersonalaccountant.org" },
  },
  {
    name: "Veronica Sommer",
    role: "Director of Community Engagement",
    bio: "Community engagement leader with a background in sponsorship sales, recruiting, and partnership development. Experienced in building strategic relationships and activating communities. Leads Local Leader onboarding and partner engagement.",
    photo: "/team/veronica-sommer.jpg",
    initials: "VS",
  },
  {
    name: "Kirk Weisler",
    role: "Chief Learning Officer",
    bio: "Leadership and culture architect turning insight into action. Expert in experiential learning, coaching, and leadership development. Designs engaging programs that drive ownership and results. Curriculum used by 125,000+ leaders worldwide.",
    photo: "/team/kirk-weisler.jpg",
    initials: "KW",
    link: { href: "https://kirkweisler.com", label: "kirkweisler.com" },
  },
  {
    name: "Chad Garrison",
    role: "Head of Revenue & Operations",
    bio: "18+ years helping small and mid-sized businesses scale without adding headcount. Specializes in practical AI systems that automate workflows, optimize CRMs, and streamline operations. Builds solutions that save time, boost efficiency, and drive measurable growth.",
    photo: "/team/chad-garrison.jpg",
    initials: "CG",
  },
];

const AboutTeam = () => {
  return (
    <section id="meet-the-team" className="scroll-mt-24 bg-white border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display text-slate-ink mx-auto max-w-[820px]"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          Meet the <span className="text-brand-blue ppx-italic">team</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          The operators behind United to Thrive. Each one carries a slice of the work: the network, the platforms, the families, the partnerships.
        </p>

        <div className="mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 text-left">
          {team.map((m) => (
            <article
              key={m.name}
              className="rounded-2xl bg-white p-7 md:p-8 border border-slate-ink/10 flex flex-col items-start hover:border-brand-blue/30 transition-colors"
            >
              <div className="w-20 h-20 rounded-full bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center overflow-hidden">
                {m.photo ? (
                  <img src={m.photo} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
                ) : (
                  <span className="font-serif-display text-brand-blue text-[22px]">{m.initials}</span>
                )}
              </div>
              <h3 className="mt-5 font-serif-display text-[22px] md:text-[24px] leading-tight text-slate-ink">
                {m.name}
              </h3>
              <p className="mt-1 text-[14px] text-[hsl(var(--slate-500))]">{m.role}</p>
              <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">{m.bio}</p>
              {m.link && (
                <a
                  href={m.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-[14px] font-semibold text-brand-blue hover:underline underline-offset-4"
                >
                  {m.link.label} →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
