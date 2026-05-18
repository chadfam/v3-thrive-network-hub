const membersImage = "https://images.unsplash.com/photo-1714974528757-f63c72154a1b?auto=format&fit=crop&q=80&w=1200";
const membersImageSrcSet = "https://images.unsplash.com/photo-1714974528757-f63c72154a1b?auto=format&fit=crop&q=80&w=640 640w, https://images.unsplash.com/photo-1714974528757-f63c72154a1b?auto=format&fit=crop&q=80&w=1200 1200w";

const PassMembers = () => {
  return (
    <section style={{ backgroundColor: "#E9EFFB" }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 md:px-16 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="lg:order-2">
            <h2
              className="font-serif-display text-slate-ink"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              What members get with the{" "}
              <span className="text-brand-blue ppx-italic">Passport</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Curated mastermind invitations and introductions. Private events spanning entrepreneur masterminds, investor gatherings, strategic networking, private retreats, and global collaboration events.
            </p>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              A searchable directory by industry, expertise, investment focus, and partnership interest. Strategic introductions to other qualified members. The room is the relationship.
            </p>
          </div>

          <div className="lg:order-1">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src={membersImage}
                srcSet={membersImageSrcSet}
                sizes="(max-width: 1024px) 100vw, 600px"
                alt="Executives in conversation around a small lounge table in a private meeting setting."
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassMembers;
