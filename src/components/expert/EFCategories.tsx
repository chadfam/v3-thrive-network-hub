const categories = [
  "Parenting and family dynamics",
  "Faith and values",
  "Health and wellness",
  "Financial literacy",
  "Relationships and marriage",
  "Education and personal growth",
];

const EFCategories = () => {
  return (
    <section className="bg-white border-t border-slate-ink/10">
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
              Categories that mirror what families are{" "}
              <span className="text-brand-blue ppx-italic">asking for</span>.
            </h2>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.7] text-[hsl(var(--slate-700))] max-w-[560px]">
              Faculty content lives in six categories, each one a place families are already looking for help. Your work fits into the categories it was built for.
            </p>
          </div>

          <div className="lg:order-1">
            <article className="rounded-2xl overflow-hidden bg-white shadow-[0_10px_30px_-4px_rgba(15,23,42,0.12)]">
              <div aria-hidden className="h-1" style={{ backgroundColor: "#264B73" }} />
              <div className="p-7 sm:p-9 md:p-10">
                <h3 className="font-serif-display text-[22px] md:text-[24px] leading-tight text-slate-ink">
                  The six content categories
                </h3>
                <ul className="mt-7 space-y-5">
                  {categories.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span aria-hidden className="bullet-dot mt-[9px]" />
                      <span className="text-[15px] md:text-[16px] leading-relaxed text-slate-ink">
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EFCategories;
