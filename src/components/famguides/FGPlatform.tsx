const cards = [
  {
    name: "Family matching",
    body: "Families on FAM Central looking for a Guide get routed to the right specialty path. You don't run lead generation, you run consultations.",
  },
  {
    name: "Billing and payments",
    body: "Recurring billing, cohort payment plans, refund handling, and tax-time documentation are all handled by the platform.",
  },
  {
    name: "Scheduling",
    body: "Calendar integration, group session coordination, rescheduling logistics, and reminders run through the platform's scheduling layer.",
  },
  {
    name: "Practice administration",
    body: "Engagement notes, family records, cohort progress tracking, and program templates live inside the Guide's account.",
  },
];

const FGPlatform = () => {
  return (
    <section className="relative bg-background">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "none",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2
            className="font-serif-display text-slate-ink tracking-section"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
          >
            What the platform handles for you.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
            The operational layer most coaches build themselves over years runs as a service inside the FAM Guides program.
          </p>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((c) => (
            <div
              key={c.name}
              className="bg-background rounded-xl p-8 border"
              style={{ borderColor: "#E0E3E7" }}
            >
              <div className="h-[2px] w-8 bg-gradient-warm" />
              <h3 className="mt-4 font-serif-display text-slate-ink text-[22px]">{c.name}</h3>
              <p className="mt-4 text-[15px] text-[hsl(var(--slate-700))] leading-relaxed">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FGPlatform;