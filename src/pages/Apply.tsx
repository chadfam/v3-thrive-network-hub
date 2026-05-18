import { cloneElement, useId, type ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/site/Layout";

// Areas of interest, alphabetized. Checkbox group: applicants pick all that apply.
const AREA_OPTIONS = [
  "Expert Faculty",
  "FAM Guide",
  "Local Leader",
  "Mastermind Passport",
  "Profit Partners",
  "Team Wellness Hub",
  "WER1 promoter",
];

const STEPS = [
  {
    n: "1",
    name: "Apply",
    body: "Complete the short application below and pick the areas of the WEcosystem you're interested in. Choose as many as fit.",
  },
  {
    n: "2",
    name: "Book a call",
    body: "As soon as you submit, you'll choose a time for a call with our team.",
  },
  {
    n: "3",
    name: "Talk through the fit",
    body: "We walk through where you fit in the network and what joining looks like for you.",
  },
];

// Background image for the form section. Sourced from Unsplash, visually verified.
const FORM_BG = "https://images.unsplash.com/photo-1651514645933-c26e0eb4ace3";

const Apply = () => {
  const navigate = useNavigate();

  return (
    <Layout
      title="Join the WEcosystem"
      description="Join the United to Thrive WEcosystem. Complete a short application, then book a call with our team."
      canonical="/apply"
    >
      {/* Section 1 — intro and what to expect */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1080px] px-6 sm:px-10 md:px-16 pt-24 md:pt-32 pb-20 md:pb-28">
          <div className="max-w-[680px]">
            <h1
              className="font-serif-display text-slate-ink"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
            >
              Join our <span className="text-brand-blue ppx-italic">WEcosystem</span>.
            </h1>
            <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
              United to Thrive connects business owners, community leaders, and trusted experts to the families they serve. Whichever part of the network fits you, joining starts with one short application.
            </p>
          </div>

          <div className="mt-16 md:mt-20">
            <h2
              className="font-serif-display text-slate-ink"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 1.875rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              What to expect.
            </h2>
            <div className="mt-8 md:mt-10 grid md:grid-cols-3 gap-10 md:gap-12">
              {STEPS.map((s) => (
                <div key={s.n}>
                  <div className="font-serif-display text-brand-blue" style={{ fontSize: 48, lineHeight: 1 }}>
                    {s.n}
                  </div>
                  <div aria-hidden className="mt-4 h-px w-10" style={{ backgroundColor: "#2563EB" }} />
                  <h3 className="mt-4 font-serif-display text-slate-ink text-[20px] md:text-[22px] leading-tight">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-[15px] md:text-[16px] leading-relaxed text-[hsl(var(--slate-700))]">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — the application form (middle), on a scrimmed photo background */}
      <section className="relative overflow-hidden">
        <img
          src={`${FORM_BG}?auto=format&fit=crop&q=80&w=1600`}
          srcSet={`${FORM_BG}?auto=format&fit=crop&q=80&w=640 640w, ${FORM_BG}?auto=format&fit=crop&q=80&w=1280 1280w, ${FORM_BG}?auto=format&fit=crop&q=80&w=1920 1920w`}
          sizes="100vw"
          alt="A small group of people in conversation at an outdoor community gathering at golden hour."
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden className="absolute inset-0" style={{ backgroundColor: "rgba(11,31,63,0.82)" }} />

        <div className="relative mx-auto max-w-2xl px-6 sm:px-10 md:px-16 py-20 md:py-28">
          <div className="text-center">
            <h2
              className="font-serif-display text-white"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
            >
              Your application.
            </h2>
            <p className="mt-3 text-[15px] md:text-[16px] leading-relaxed text-white/75">
              It takes a few minutes. Fields marked with an asterisk are required.
            </p>
          </div>

          <article className="mt-10 rounded-2xl overflow-hidden bg-white shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)]">
            <div aria-hidden className="h-1.5" style={{ backgroundColor: "#2563EB" }} />
            <div className="p-6 sm:p-8 md:p-10">
              {/*
                Placeholder application form. Replace this <form> with the embedded GHL form
                when provided. Configure the GHL form to redirect to /booking on submit.
              */}
              <form
                onSubmit={(e) => { e.preventDefault(); navigate("/booking"); }}
                className="grid gap-6"
              >
                <Field label="Full name" required><input required type="text" autoComplete="name" className={inputCls} /></Field>
                <Field label="Email address" required><input required type="email" autoComplete="email" inputMode="email" className={inputCls} /></Field>
                <Field label="Phone number"><input type="tel" autoComplete="tel" inputMode="tel" className={inputCls} /></Field>
                <Field label="Business name (if applicable)"><input type="text" autoComplete="organization" className={inputCls} /></Field>
                <Field label="Website"><input type="url" autoComplete="url" inputMode="url" className={inputCls} /></Field>

                <fieldset>
                  <legend className="block text-[13px] font-medium text-slate-ink">
                    Areas of interest <span className="text-[hsl(var(--slate-500))]" aria-hidden>*</span>
                    <span className="sr-only"> (required)</span>
                  </legend>
                  <p className="mt-1 mb-3 text-[14px] text-[hsl(var(--slate-500))]">
                    Select all that apply.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                    {AREA_OPTIONS.map((opt) => (
                      <label key={opt} className="flex items-center gap-3 text-[15px] text-slate-ink cursor-pointer">
                        <input
                          type="checkbox"
                          name="areas-of-interest"
                          value={opt}
                          className="h-[18px] w-[18px] shrink-0 cursor-pointer accent-[#2563EB]"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <Field label="Brief description of your business or background">
                  <textarea rows={5} className={inputCls} />
                </Field>

                <button type="submit" className="btn-primary mt-2 w-full sm:w-auto sm:self-start">
                  Submit application →
                </button>
              </form>
            </div>
          </article>
        </div>
      </section>

      {/* Section 3 — values close */}
      <section style={{ backgroundColor: "#E9EFFB" }}>
        <div className="mx-auto max-w-[820px] px-6 sm:px-10 md:px-16 py-20 md:py-28 text-center">
          <h2
            className="font-serif-display text-slate-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Inside the <span className="text-brand-blue ppx-italic">WEcosystem</span>.
          </h2>
          <p className="mt-8 mx-auto max-w-[640px] text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))]">
            The network runs on trusted recommendation instead of advertising. The people inside it earn their reputation the honest way, by genuinely serving the families around them.
          </p>
          <p
            className="mt-10 font-serif-display italic text-slate-ink"
            style={{ fontSize: "clamp(1.25rem, 2.4vw, 1.5rem)" }}
          >
            Family first. Connection over addiction. Ownership over consumption.
          </p>
        </div>
      </section>
    </Layout>
  );
};

const inputCls = "w-full min-h-[48px] rounded-lg border border-slate-ink/20 bg-white px-4 py-3 text-[16px] text-slate-ink focus:outline-none focus:border-slate-ink transition-colors";

const Field = ({ label, required, children }: { label: string; required?: boolean; children: ReactElement<{ id?: string }> }) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-medium text-slate-ink mb-2">
        {label} {required && <span className="text-[hsl(var(--slate-500))]" aria-hidden>*</span>}
        {required && <span className="sr-only"> (required)</span>}
      </label>
      {cloneElement(children, { id })}
    </div>
  );
};

export default Apply;
