const names = [
  "Brad Sugars","Mark Victor Hansen","Joe Polish","Tommy Mello","Dan Kennedy","Eric Lofholm","Dan Martell","Verl Workman","Jeffrey Hayzlett","Charles Byrd","Perry Belcher","Roland Frazier","Jamie Gruber","Yanik Silver","Patrick Nahass","Daven Michaels","Ryan Lee","Chris Smith","Steve Harward","Aaron Young","Brad Hart","Brad Leavitt","Bryan Dulaney","Cameron Bawden","Catherine Bell","Chad Willardson","Glen Ledwell","Graham Youtsey","Jordan Hutchinson","Kurt Luidhardt","Linda Sidhu","Michael Bernoff","Mike Burnett","Russell Brunson","Alex Mont-Ros","Angela Bell","Ben Ward","Brady Edwards","Brady Hoggan","Brian Ford","Bryan Ferre","Casey Fleming","Chris Webb","Craig Perra","Dan Van Orman",
];

const EFExperts = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32 text-center">
        <div className="mx-auto mb-10 h-[2px] w-20 bg-gradient-warm" />
        <h2 className="font-serif-display tracking-section text-slate-ink" style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)", lineHeight: 1.05 }}>
          Some of the experts already on the platform.
        </h2>
        <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[720px] mx-auto">
          Expert Faculty includes founders, coaches, authors, and category leaders whose work has shaped how families think about money, parenting, health, and faith. Some are household names. Some are quietly influential inside specific fields. All are practitioners we've selected based on the work itself, not the size of their audience.
        </p>
        <div className="mt-12 mx-auto max-w-[1080px] rounded-3xl bg-gradient-purple p-6 sm:p-8 md:p-12 lg:p-16">
          <p className="text-[18px] font-medium text-slate-ink leading-relaxed">
            {names.map((n, i) => (
              <span key={n}>
                {n}
                {i < names.length - 1 && <span className="mx-2 text-slate-ink/60" aria-hidden> · </span>}
              </span>
            ))}
          </p>
        </div>
        <p className="mt-6 italic text-[15px] text-[hsl(var(--slate-500))]">
          And dozens more across all six categories. Faculty grows as the network does.
        </p>
      </div>
    </section>
  );
};

export default EFExperts;