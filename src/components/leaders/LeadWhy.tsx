const LeadWhy = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[760px] px-6 sm:px-8 md:px-10 py-16 md:py-32 text-center">
        <div className="mx-auto mb-10 section-accent" />
        <h2 className="font-serif-display tracking-section text-slate-ink" style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)", lineHeight: 1.05 }}>
          Why we built this for leaders.
        </h2>
        <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          The work of strengthening families used to happen in church basements, school PTAs, and around the kitchen table. It still does. But the connectors who hold those rooms together usually do it for free, on the side, while their day jobs absorb most of their attention. The people best at building community end up with the least time to build it.
        </p>
        <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
          United to Thrive is the network behind that work. Local Leaders get paid to do what they're already doing in their area. FAM Guides get paid to help families feel more connected — the work most parents don't have a guide for. Expert Faculty get paid for the knowledge they've already spent decades building. The platform underneath, WER1, attributes every connection back to its source so the right people earn from the right introductions.
        </p>
        <p className="mt-10 font-serif-display italic text-slate-ink text-[20px] md:text-[24px] leading-snug">
          If your work already looks like this, the question is whether to keep doing it on the side or step into it.
        </p>
      </div>
    </section>
  );
};

export default LeadWhy;