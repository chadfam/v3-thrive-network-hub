const stages = [
  {
    n: "01",
    name: "Guide.",
    desc: "The first stage. You become the trusted resource. Your role is to lead with value, help families discover what's available in their area, and become known as the person who sends good recommendations.",
    sections: [
      {
        h: "WHAT YOU DO",
        items: [
          "Share trusted local recommendations",
          "Highlight events, classes, and opportunities families might not find on their own",
          "Educate families on proactive parenting and community engagement",
          "Curate the things worth knowing in your area, you don't have to create everything",
        ],
      },
      {
        h: "HOW YOU SHOW UP",
        items: [
          "Post consistently in your local network on whatever channels you already use",
          "Stay visible without being noisy",
          "Be known for helpful, relevant information instead of self-promotion",
        ],
      },
      {
        h: "SUCCESS LOOKS LIKE",
        items: [
          "People start asking you for recommendations",
          "You become the go-to in your community for your category",
          "Families trust your guidance enough to act on it",
        ],
      },
    ],
  },
  {
    n: "02",
    name: "Gather.",
    desc: "The second stage. Connection happens when people show up in person. Your role is to activate participation and create opportunities for families in your area to engage with each other and with the people worth knowing.",
    sections: [
      {
        h: "WHAT YOU DO",
        items: [
          "Invite families to events, classes, clubs, and causes worth their time",
          "Host or co-host small gatherings in your area",
          "Encourage participation in family challenges or seasonal activities",
          "Make introductions between families who would benefit from knowing each other",
        ],
      },
      {
        h: "HOW YOU SHOW UP",
        items: [
          "Be visible at events, even when you didn't host them",
          "Send personal invitations, not mass blasts",
          "Make introductions on the spot when you see two people who should know each other",
        ],
      },
      {
        h: "SUCCESS LOOKS LIKE",
        items: [
          "People attend things because you invited them",
          "Relationships start forming between families in your network",
          "Your presence creates energy and connection in the room",
        ],
      },
    ],
  },
  {
    n: "03",
    name: "Grow.",
    desc: "The third stage. As trust builds, your influence expands. Your role becomes connecting the families in your network to the businesses worth knowing, and growing the local network you're at the center of.",
    sections: [
      {
        h: "WHAT YOU DO",
        items: [
          "Build a network of trusted partners across the businesses families need",
          "Create introductions between local businesses and the families in your hub",
          "Encourage referrals and word of mouth between members",
          "Think long-term relationships, not transactions",
        ],
      },
      {
        h: "HOW YOU SHOW UP",
        items: [
          "Celebrate others publicly and share their wins",
          "Make business introductions through the WER1 platform so attribution is clean",
          "Treat the network like a long-term asset, not a quarterly campaign",
        ],
      },
      {
        h: "SUCCESS LOOKS LIKE",
        items: [
          "Local businesses know your name and the families you bring",
          "Members of your hub send each other business without you in the middle",
          "Your monthly earnings reflect the work the network is doing",
        ],
      },
    ],
  },
];

const LLFramework = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-16 md:py-32">
        <div className="text-center max-w-[760px] mx-auto">
          <h2
            className="font-serif-display text-slate-ink tracking-section"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
          >
            The framework. Guide. Gather. Grow.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
            Three stages of the work, in this order. Most Local Leaders move through them naturally over the first six to nine months.
          </p>
        </div>

        <div className="mt-16">
          {stages.map((s, idx) => (
            <div
              key={s.n}
              className={`py-16 ${idx > 0 ? "border-t" : ""}`}
              style={{ borderColor: "#E0E3E7" }}
            >
              <div className="grid md:grid-cols-12 gap-10 md:gap-12">
                <div className="md:col-span-4">
                  <p
                    className="font-serif-display text-gradient-warm"
                    style={{ fontSize: "clamp(3rem, 7vw, 5rem)", lineHeight: 1 }}
                  >
                    {s.n}
                  </p>
                  <h3 className="mt-2 font-serif-display text-slate-ink text-[28px] md:text-[36px]">
                    {s.name}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
                    {s.desc}
                  </p>
                  <div className="mt-10 space-y-8">
                    {s.sections.map((sub) => (
                      <div key={sub.h}>
                        <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[hsl(var(--slate-500))]">
                          {sub.h}
                        </p>
                        <ul className="mt-4 space-y-3">
                          {sub.items.map((it) => (
                            <li
                              key={it}
                              className="flex items-start gap-3 text-[16px] text-[hsl(var(--slate-700))]"
                            >
                              <span className="bullet-dot" />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LLFramework;