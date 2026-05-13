type Member = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  initials: string;
};

// TODO: Replace placeholder members with the real team (from wefunder.com/the.fam.project).
// For each: full name, title, 1-3 sentence bio, and a square portrait at public/team/<slug>.jpg.
// When photos arrive, set photo: "/team/<slug>.jpg". Until then, the initials avatar shows.
const team: Member[] = [
  { name: "Team member name",  role: "Founder & CEO",        initials: "TM", bio: "Short 1-2 sentence bio. What they built, what they're known for, and why they're at the middle of this work." },
  { name: "Team member name",  role: "Co-founder & President", initials: "TM", bio: "Short bio. Operating background, the part of the business they own." },
  { name: "Team member name",  role: "Chief Operating Officer", initials: "TM", bio: "Short bio. What part of the system they run day to day." },
  { name: "Team member name",  role: "Head of Partnerships",  initials: "TM", bio: "Short bio. The relationships they build and who they bring in." },
  { name: "Team member name",  role: "Head of Product",        initials: "TM", bio: "Short bio. The platforms underneath the network." },
  { name: "Team member name",  role: "Head of Family Programs", initials: "TM", bio: "Short bio. The FAM-side leadership and the work with families." },
];

const AboutTeam = () => {
  return (
    <section id="meet-the-team" className="bg-background scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32">
        <div className="text-center max-w-[720px] mx-auto">
          <div className="mx-auto mb-8 section-accent" aria-hidden />
          <h2 className="font-serif-display text-slate-ink section-headline tracking-section">
            Meet the team.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            The operators behind United to Thrive. Each name below carries a slice of the work, from the network and the platforms to the families and the partnerships.
          </p>
        </div>

        <div className="mt-14 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.map((m, i) => (
            <article
              key={`${m.name}-${i}`}
              className="card-surface card-surface-hover rounded-2xl p-7 md:p-8 flex flex-col items-start"
            >
              <div className="w-20 h-20 rounded-full bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center overflow-hidden">
                {m.photo ? (
                  <img src={m.photo} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
                ) : (
                  <span className="font-serif-display text-brand-blue text-[22px]">{m.initials}</span>
                )}
              </div>
              <h3 className="mt-5 font-serif-display text-[22px] leading-tight text-slate-ink">{m.name}</h3>
              <p className="mt-1 text-[14px] text-[hsl(var(--slate-500))]">{m.role}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-[hsl(var(--slate-700))]">{m.bio}</p>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center italic text-[14px] text-[hsl(var(--slate-500))]">
          Placeholder profiles. Real names, photos, and bios from wefunder.com/the.fam.project drop in here.
        </p>
      </div>
    </section>
  );
};

export default AboutTeam;
