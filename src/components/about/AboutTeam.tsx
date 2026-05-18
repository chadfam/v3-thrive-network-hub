type Member = {
  name: string;
  role: string;
  bio: string;
  photo: string;
};

const team: Member[] = [
  {
    name: "Brandon Barnum",
    role: "CEO",
    bio: "A career built around referral networks and the relationships that drive them. Leads strategy and brand.",
    photo: "/team/brandon-barnum.jpg",
  },
  {
    name: "Jashin Howell",
    role: "President",
    bio: "Ecosystem builder and growth strategist, focused on how the network compounds for every member inside it.",
    photo: "/team/jashin-howell.jpg",
  },
  {
    name: "Chris Lange",
    role: "CEO of Hownd",
    bio: "Marketing-technology operator. Leads the consumer side of the FAM Project.",
    photo: "/team/chris-lange.jpg",
  },
  {
    name: "Nathan Leavitt",
    role: "CTO",
    bio: "SaaS technologist responsible for the platforms underneath every offering in the network.",
    photo: "/team/nathan-leavitt.jpg",
  },
  {
    name: "Chris Webb",
    role: "CFO",
    bio: "Finance leadership for the company and the offerings inside it.",
    photo: "/team/chris-webb.jpg",
  },
  {
    name: "Veronica Sommer",
    role: "Director of Community Engagement",
    bio: "Leads Local Leader onboarding and partner engagement across the WEcosystem.",
    photo: "/team/veronica-sommer.jpg",
  },
  {
    name: "Kirk Weisler",
    role: "Chief Learning Officer",
    bio: "Leadership and culture development for members, partners, and team alike.",
    photo: "/team/kirk-weisler.jpg",
  },
  {
    name: "Chad Garrison",
    role: "Head of Revenue and Operations",
    bio: "Connects business growth with how members move through the network.",
    photo: "/team/chad-garrison.jpg",
  },
];

const AboutTeam = () => {
  return (
    <section
      id="meet-the-team"
      className="scroll-mt-24 border-t border-slate-ink/10"
      style={{ backgroundColor: "#E9EFFB" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32 text-center">
        <h2
          className="font-serif-display text-slate-ink mx-auto max-w-[820px]"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          Meet the team behind the{" "}
          <span className="text-brand-blue ppx-italic">WEcosystem</span>.
        </h2>

        <p className="mt-8 mx-auto max-w-[680px] text-[17px] md:text-[19px] leading-[1.65] text-[hsl(var(--slate-700))]">
          Eight leaders connecting what families need with the people best positioned to serve them.
        </p>

        <div className="mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {team.map((m) => (
            <article
              key={m.name}
              className="rounded-2xl bg-white p-6 md:p-7 flex flex-col items-center text-center"
              style={{ border: "1px solid #E0E3E7" }}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-5 font-serif-display text-[20px] md:text-[22px] leading-tight text-slate-ink">
                {m.name}
              </h3>
              <p className="mt-1 text-[13px] md:text-[14px] text-[hsl(var(--slate-500))]">
                {m.role}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[hsl(var(--slate-700))]">
                {m.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
