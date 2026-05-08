import { cloneElement, useId, useState, type ReactElement } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/site/Layout";

type Ctx = { label: string; headline: string; preselect?: string };

const TOPIC_MAP: Record<string, Ctx> = {
  "white-label":                  { label: "WHITE-LABEL",                  headline: "Tell us about your business.",   preselect: "White-label" },
  "team-wellness-hub":            { label: "TEAM WELLNESS HUB",            headline: "Let's talk wellness benefits.",  preselect: "Team Wellness Hub" },
  "team-wellness-hub-analysis":   { label: "SAVINGS ANALYSIS",             headline: "Let's run the numbers.",         preselect: "Team Wellness Hub savings analysis" },
  "command-central":              { label: "COMMAND CENTRAL",              headline: "Let's talk about a service.",    preselect: "Command Central" },
  "fam-guides":                   { label: "FAM GUIDES",                   headline: "Let's talk specialty paths.",    preselect: "FAM Guides specialty paths" },
  "expert-faculty":               { label: "EXPERT FACULTY",               headline: "Let's talk categories.",         preselect: "Expert Faculty categories" },
  "promo-engine":                 { label: "PROMO ENGINE",                 headline: "Let's talk Promo Engine.",       preselect: "Promo Engine" },
  privacy:                        { label: "PRIVACY",                      headline: "Questions about privacy.",       preselect: "Privacy" },
};

const TOPIC_OPTIONS = [
  "General inquiry",
  "White-label",
  "Team Wellness Hub",
  "Team Wellness Hub savings analysis",
  "Promo Engine",
  "Command Central",
  "FAM Guides specialty paths",
  "Expert Faculty categories",
  "Privacy",
];

const Contact = () => {
  const [params] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);

  const topic = params.get("topic") ?? "";
  const ctx: Ctx = TOPIC_MAP[topic] ?? { label: "GET IN TOUCH", headline: "Get in touch." };

  return (
    <Layout
      title="Contact"
      description="Send us the details below. Someone from the team will follow up within two business days."
      canonical="/contact"
    >
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 md:px-10 pt-24 md:pt-32 pb-12 md:pb-16">
          <p className="text-[13px] tracking-[0.18em] uppercase text-[hsl(var(--slate-500))]">{ctx.label}</p>
          <h1 className="mt-6 font-serif-display text-slate-ink" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            {ctx.headline}
          </h1>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[640px]">
            Send us the details below. Someone from the team will follow up within two business days.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-2xl px-6 sm:px-8 md:px-10 pb-16">
          {submitted ? (
            <div className="rounded-2xl border border-slate-ink/10 p-10 text-center">
              <p className="font-serif-display text-[28px] text-slate-ink">Thank you, we'll be in touch within two business days.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="grid gap-6">
              <Field label="Full name" required><input required type="text" autoComplete="name" className={inputCls} /></Field>
              <Field label="Email address" required><input required type="email" autoComplete="email" inputMode="email" className={inputCls} /></Field>
              <Field label="Company or business name"><input type="text" autoComplete="organization" className={inputCls} /></Field>
              <Field label="Topic">
                <select defaultValue={ctx.preselect ?? "General inquiry"} className={inputCls}>
                  {TOPIC_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </Field>
              <Field label="Message" required><textarea required rows={5} className={inputCls} /></Field>
              <button type="submit" className="mt-2 inline-flex items-center justify-center w-full sm:w-auto sm:self-start min-h-[48px] px-6 py-3.5 rounded-lg text-[15px] font-medium text-white bg-slate-ink hover:opacity-90 transition-opacity">
                Send →
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-2xl px-6 sm:px-8 md:px-10 pb-24 md:pb-32">
          <div className="rounded-2xl border border-slate-ink/10 bg-white p-8">
            <p className="text-[12px] tracking-[0.18em] uppercase text-[hsl(var(--slate-500))]">HEADQUARTERS</p>
            <address className="mt-4 not-italic text-[16px] text-slate-ink leading-relaxed">
              United To Thrive LLC<br />
              222 S Mill Ave, Suite 800<br />
              Tempe, AZ 85281
            </address>
          </div>
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

export default Contact;
