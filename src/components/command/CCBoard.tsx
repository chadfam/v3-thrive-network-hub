type Row = { num: string; slug: string; name: string; line: string };

const rows: Row[] = [
  { num: "01", slug: "coaching-and-training", name: "Coaching and training", line: "Leadership, follow-through, peer accountability, sales." },
  { num: "02", slug: "marketing", name: "Marketing", line: "Campaigns, video, ads, social, course production." },
  { num: "03", slug: "finance", name: "Finance", line: "Bookkeeping, planning, taxes, CFO-level oversight." },
  { num: "04", slug: "legal", name: "Legal", line: "Agreements, partnerships, succession, estate." },
  { num: "05", slug: "tech", name: "Technology", line: "Stack reviews, sites, CRM, integrations, AI." },
];

const CCBoard = () => {
  return (
    <section className="bg-background border-t border-slate-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2
              className="font-serif-display text-slate-ink"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              A board already in place.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Membership comes with a board already in place. Known voices across the major areas of running a business, sitting inside the same network as the member.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              The advisors are familiar. The conversations build on what came before. Each new question can pick up where the last one left off.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Over time, the advisors come to know the member's business well, and the work moves faster as a result.
            </p>
          </div>

          <div>
            <div className="rounded-2xl bg-brand-blue/5 border border-slate-ink/10 p-8 md:p-10">
              <ul className="space-y-6">
                {rows.map((row) => (
                  <li key={row.slug}>
                    <a href={`#${row.slug}`} className="group flex gap-5 items-start">
                      <span className="font-serif-display text-[22px] md:text-[24px] text-gradient-warm leading-none shrink-0 w-9">
                        {row.num}
                      </span>
                      <div>
                        <p className="font-serif-display text-[18px] md:text-[20px] text-slate-ink leading-snug group-hover:text-brand-blue transition-colors">
                          {row.name}
                        </p>
                        <p className="mt-1 text-[14px] md:text-[15px] leading-relaxed text-[hsl(var(--slate-700))]">
                          {row.line}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCBoard;
