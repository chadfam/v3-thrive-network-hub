const steps = [
  {
    n: "01",
    name: "Apply and assess",
    desc: "Submit the application. We assess your background, prior coaching or counseling experience, and the specialty path that fits.",
  },
  {
    n: "02",
    name: "Foundation training",
    desc: "A structured curriculum covering FAM Guides philosophy, platform mechanics, and the practitioner standards we hold across the network.",
  },
  {
    n: "03",
    name: "Specialty training",
    desc: "Focused training on the specialty path you're building toward, including the cohort and engagement formats that work in that area.",
  },
  {
    n: "04",
    name: "Certification and platform onboarding",
    desc: "Final certification, platform account activation, and your first family matches. Most Guides have their first paying engagement within the first month after certification.",
  },
];

const FGTraining = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <h2
              className="font-serif-display text-slate-ink tracking-section"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
            >
              Training and certification.
            </h2>
            <p className="mt-8 max-w-[480px] text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
              The FAM Guides certification covers the philosophy of family coaching, the platform's tools, and the structural patterns that work across the four specialty paths. Onboarding takes between four and eight weeks depending on prior experience and the specialty path you're building toward.
            </p>
            <p className="mt-6 max-w-[480px] text-[17px] md:text-[19px] text-[hsl(var(--slate-700))] leading-relaxed">
              Certification isn't a barrier to clinical practice. FAM Guides aren't therapists, and the work doesn't require a clinical license. What we certify is your fluency in the FAM Guides framework, the platform mechanics, and the standards we hold practitioners to with families on the platform.
            </p>
            <p className="mt-6 max-w-[480px] italic text-[14px] text-[hsl(var(--slate-500))]">
              FAM Guides offers coaching, not psychological or therapeutic services. Guides who hold clinical licenses operate under their own scope. Guides without clinical licenses do not provide diagnosis or treatment.
            </p>
          </div>
          <div className="space-y-8">
            {steps.map((s) => (
              <div key={s.n} className="flex items-start gap-6">
                <p
                  className="font-serif-display text-gradient-warm shrink-0"
                  style={{ fontSize: "32px", lineHeight: 1 }}
                >
                  {s.n}
                </p>
                <div>
                  <h3 className="font-serif-display text-slate-ink text-[20px] leading-tight">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-[14px] text-[hsl(var(--slate-700))] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FGTraining;