import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

type Ctx = { label: string; headline: string; preselect?: string };

const ROLE_MAP: Record<string, Ctx> = {
  promoter:           { label: "WER1 PROMOTER",        headline: "Apply to become a WER1 promoter.",  preselect: "WER1 promoter" },
  "local-leader":     { label: "LOCAL LEADER",         headline: "Apply to become a Local Leader.",   preselect: "Local Leader" },
  "fam-guide":        { label: "FAM GUIDE",            headline: "Apply to become a FAM Guide.",      preselect: "FAM Guide" },
  "expert-faculty":   { label: "EXPERT FACULTY",       headline: "Apply to Expert Faculty.",          preselect: "Expert Faculty" },
};
const TIER_MAP: Record<string, Ctx> = {
  "profit-partner":   { label: "TIER ONE · PROFIT PARTNER", headline: "Apply at Tier One: Profit Partner.", preselect: "Profit Partner" },
  "mastermind":       { label: "TIER TWO · MASTERMIND",     headline: "Apply at Tier Two: Mastermind.",     preselect: "Mastermind tier" },
  "inner-circle":     { label: "TIER THREE · INNER CIRCLE", headline: "Apply at Tier Three: Inner Circle.", preselect: "Inner Circle tier" },
};
const PROGRAM_MAP: Record<string, Ctx> = {
  "mastermind-passport": { label: "MASTERMIND PASSPORT", headline: "Apply for the Mastermind Passport.", preselect: "Mastermind Passport" },
};

const ROLE_OPTIONS = [
  "Profit Partner",
  "Mastermind tier",
  "Inner Circle tier",
  "Local Leader",
  "FAM Guide",
  "Expert Faculty",
  "WER1 promoter",
  "Mastermind Passport",
];

const Apply = () => {
  const [params] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);

  const role = params.get("role") ?? "";
  const tier = params.get("tier") ?? "";
  const program = params.get("program") ?? "";

  const ctx: Ctx =
    ROLE_MAP[role] ??
    TIER_MAP[tier] ??
    PROGRAM_MAP[program] ??
    { label: "APPLY", headline: "Apply to United to Thrive." };

  return (
    <div className="min-h-screen bg-background text-slate-ink">
      <Helmet>
        <title>Apply | United to Thrive</title>
        <meta name="description" content="Apply to a United to Thrive program. We review every application and follow up within five business days." />
      </Helmet>
      <Header />
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-4xl px-6 sm:px-8 md:px-10 pt-24 md:pt-32 pb-12 md:pb-16">
            <p className="text-[13px] tracking-[0.18em] uppercase text-[hsl(var(--slate-500))]">{ctx.label}</p>
            <h1 className="mt-6 font-serif-display text-slate-ink" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              {ctx.headline}
            </h1>
            <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[640px]">
              The application takes about ten minutes. We review every one and follow up within five business days. If there's a fit, we set up a 30-minute conversation.
            </p>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto max-w-2xl px-6 sm:px-8 md:px-10 pb-24 md:pb-32">
            {submitted ? (
              <div className="rounded-2xl border border-slate-ink/10 p-10 text-center">
                <p className="font-serif-display text-[28px] text-slate-ink">Thank you, we'll be in touch within five business days.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="grid gap-6"
              >
                <Field label="Full name" required><input required type="text" className={inputCls} /></Field>
                <Field label="Email address" required><input required type="email" className={inputCls} /></Field>
                <Field label="Phone number"><input type="tel" className={inputCls} /></Field>
                <Field label="Business name (if applicable)"><input type="text" className={inputCls} /></Field>
                <Field label="Website"><input type="url" className={inputCls} /></Field>
                <Field label="Role of interest">
                  <select defaultValue={ctx.preselect ?? ""} className={inputCls}>
                    <option value="" disabled>Select a role</option>
                    {ROLE_OPTIONS.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </Field>
                <Field label="Brief description of your business or background">
                  <textarea rows={5} className={inputCls} />
                </Field>
                <button type="submit" className="mt-2 inline-flex items-center justify-center w-full sm:w-auto sm:self-start min-h-[48px] px-6 py-3.5 rounded-lg text-[15px] font-medium text-white bg-slate-ink hover:opacity-90 transition-opacity">
                  Submit application →
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const inputCls = "w-full min-h-[48px] rounded-lg border border-slate-ink/20 bg-white px-4 py-3 text-[16px] text-slate-ink focus:outline-none focus:border-slate-ink transition-colors";

const Field = ({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) => (
  <label className="block">
    <span className="block text-[13px] font-medium text-slate-ink mb-2">
      {label} {required && <span className="text-[hsl(var(--slate-500))]">*</span>}
    </span>
    {children}
  </label>
);

export default Apply;
