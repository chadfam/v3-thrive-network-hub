import { Link } from "react-router-dom";

const ppImage = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200";
const ppImageSrcSet = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=640 640w, https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200 1200w";

const points = [
  "Monthly masterminds with your alliance partners",
  "Co-marketing campaigns and partner introductions",
  "Mastermind Passport and Command Central access",
  "Lifetime Client Agency™ to turn past clients into referrals",
  "Your business promoted to families inside FAM Central",
];

const BizProfitPartners = () => {
  return (
    <section style={{ backgroundColor: "#E9EFFB" }}>
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
              Profit Partners™ turns complementary businesses into a{" "}
              <span className="text-brand-blue ppx-italic">working alliance</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              A circle of complementary owners who actively recommend each other to the families they already serve. Trust transfers from the person who sent them.
            </p>

            <ul className="mt-7 space-y-2.5">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <span aria-hidden className="bullet-dot mt-[9px]" />
                  <span className="text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                    {p}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/profit-partners"
              className="group mt-8 inline-flex items-center text-[15px] font-semibold text-brand-blue"
            >
              More on Profit Partners
              <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src={ppImage}
                srcSet={ppImageSrcSet}
                sizes="(max-width: 1024px) 100vw, 600px"
                alt="Business owners in a working session around a table in warm daylight."
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

export default BizProfitPartners;
