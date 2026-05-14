type FacultyMember = {
  name: string;
  category: string;
  bio: string;
  photo?: string;
  initials: string;
};

// Confirmed-yes Expert Faculty go here. Names called out on the calls so far:
// Alex, Brad Hart, Jerry Conti (2026-05-07); Kyle Levitt, Chris Webb, Dan Van Orman,
// Derek Truly, Jeff Erickson, Jeff Boyle, Charles Berg (2026-05-12). Bios and photos
// still need to come from Chad. Until each entry has a confirmed name + bio + photo,
// the placeholder card renders.
const faculty: FacultyMember[] = [
  { name: "Faculty name",  category: "Category",                 initials: "FN", bio: "Short bio. What they teach, who they help, what families know them for." },
  { name: "Faculty name",  category: "Category",                 initials: "FN", bio: "Short bio. The expertise they bring to the network and the families it serves." },
  { name: "Faculty name",  category: "Category",                 initials: "FN", bio: "Short bio. What they teach, who they help, what families know them for." },
  { name: "Faculty name",  category: "Category",                 initials: "FN", bio: "Short bio. The expertise they bring to the network and the families it serves." },
];

const EFFaculty = () => {
  return (
    <section id="faculty" className="surface-muted scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-24">
        <div className="text-center max-w-[720px] mx-auto">
          <h2 className="font-serif-display text-slate-ink section-headline tracking-section">
            Faculty already in the network.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            A curated mix of authors, coaches, and category leaders whose work helps families thrive. Each profile has bio, photo, and a way to connect through the network.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {faculty.map((m, i) => (
            <article
              key={`${m.name}-${i}`}
              className="bg-white rounded-2xl border border-[#E0E3E7] p-6 flex flex-col items-start"
            >
              <div className="w-16 h-16 rounded-full bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center overflow-hidden">
                {m.photo ? (
                  <img src={m.photo} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
                ) : (
                  <span className="font-serif-display text-brand-blue text-[18px]">{m.initials}</span>
                )}
              </div>
              <h3 className="mt-4 font-serif-display text-[20px] leading-tight text-slate-ink">{m.name}</h3>
              <p className="mt-1 text-[13px] text-[hsl(var(--slate-500))]">{m.category}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-[hsl(var(--slate-700))]">{m.bio}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center italic text-[14px] text-[hsl(var(--slate-500))]">
          Placeholder cards. Confirmed-yes faculty names and bios drop in here.
        </p>
      </div>
    </section>
  );
};

export default EFFaculty;
