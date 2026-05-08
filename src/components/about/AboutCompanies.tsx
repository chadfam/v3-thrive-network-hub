const programs = [
  { name: "Profit Partners™", desc: "The flagship business alliance. A working referral network of owners building joint ventures and partnerships. Three annual tiers." },
  { name: "WER1", desc: "The patented affiliate and referral platform we acquired. The technical layer underneath every program in the network. Available as white-label for partner businesses." },
  { name: "FAM Central", desc: "The family engagement platform. Where families connect with local leaders, expert content, and the businesses that earn their recommendation. Operates as a related property to United to Thrive." },
  { name: "Local Leaders", desc: "The community connector role. One leader per industry per zip code. Featured at FAM Central events. Earns through introductions made inside the local network." },
  { name: "FAM Guides", desc: "The family coaching role. Coaches who work with families one-on-one or in small cohorts on the work of being more present. Recurring monthly revenue." },
  { name: "Expert Faculty", desc: "The expertise role. Authors, speakers, coaches, and category leaders whose content gets distributed across the FAM Central platform. Five income streams." },
  { name: "Mastermind Passport™", desc: "Guest access into 40+ elite mastermind communities through one membership. Included from the Mastermind tier of Profit Partners." },
  { name: "Command Central™", desc: "A vetted bench of experts and service providers across coaching, marketing, sales, operations, technology, legal, and finance. Available to Profit Partners members at the Mastermind tier and above." },
  { name: "Team Wellness Hub", desc: "A Section 125 wellness program for businesses with W-2 employees. Saves the business in payroll taxes. Adds $1,500 or more to employee take-home pay." },
];

const AboutCompanies = () => {
  return (
    <section style={{ backgroundColor: "#0B1F3F" }} className="text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32">
        <div className="text-center max-w-[720px] mx-auto">
          <h2 className="font-serif-display text-white section-headline tracking-section">The companies inside.</h2>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-white/90">
            United To Thrive LLC owns and operates the programs and platforms below. Each was built or acquired to play a specific role in the network.
          </p>
        </div>
        <div className="mt-14 md:mt-20 max-w-[880px] mx-auto">
          {programs.map((p, idx) => (
            <div key={p.name}>
              <div className="flex items-start gap-6 py-8">
                <span className="mt-3 inline-block h-3 w-3 rounded-full bg-gradient-warm shrink-0" aria-hidden />
                <div className="min-w-0">
                  <h3 className="font-serif-display text-white text-[24px] md:text-[28px] leading-tight">{p.name}</h3>
                  <p className="mt-2 text-[17px] leading-relaxed text-white/80 max-w-[640px]">{p.desc}</p>
                </div>
              </div>
              {idx < programs.length - 1 && <div className="h-px w-full" style={{ backgroundColor: "rgba(224,227,231,0.2)" }} aria-hidden />}
            </div>
          ))}
        </div>
        <p className="mt-12 mx-auto max-w-[640px] text-center font-sans-ui italic text-[16px] text-white/60">
          Trademarks of United To Thrive LLC. Network grows as new programs come into the family.
        </p>
      </div>
    </section>
  );
};

export default AboutCompanies;