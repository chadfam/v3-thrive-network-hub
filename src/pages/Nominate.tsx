import { cloneElement, useId, useState, type ReactElement } from "react";
import Layout from "@/components/site/Layout";

const Nominate = () => {
  const [submitted, setSubmitted] = useState(false);
  const [anon, setAnon] = useState(false);

  return (
    <Layout
      title="Nominate a Local Leader"
      description="Nominate the connector who's already leading their community. We reach out, explain the role, and walk them through the application."
      canonical="/nominate"
    >
      <section className="relative bg-background overflow-hidden">
        <div className="absolute inset-0 hero-warm-glow-strong opacity-[0.04] pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 sm:px-8 md:px-10 pt-24 md:pt-32 pb-12 md:pb-16">
          <h1 className="font-serif-display text-slate-ink" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            Tell us who's already leading.
          </h1>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[640px]">
            If you know the person who's already the connector in your community, nominate them. We reach out, explain the role, and walk them through the application if they're interested. You can stay anonymous or be credited.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-2xl px-6 sm:px-8 md:px-10 pb-24 md:pb-32">
          {submitted ? (
            <div className="rounded-2xl border border-slate-ink/10 p-10 text-center">
              <p className="font-serif-display text-[28px] text-slate-ink">Thank you, we'll take it from here.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="grid gap-6">
              <Field label="Your name (optional)">
                <input type="text" autoComplete="name" disabled={anon} className={inputCls} />
              </Field>
              <label className="flex items-center gap-3 text-[15px] text-slate-ink min-h-[44px] py-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={anon}
                  onChange={(e) => setAnon(e.target.checked)}
                  className="h-6 w-6 accent-brand-blue cursor-pointer"
                />
                Keep me anonymous
              </label>
              <Field label="Your email" required>
                <input required type="email" autoComplete="email" inputMode="email" className={inputCls} />
              </Field>

              <div className="mt-2 pt-6 border-t border-slate-ink/10">
                <p className="font-serif-display text-[20px] text-slate-ink mb-4">Who you're nominating</p>
              </div>

              <Field label="Full name" required><input required type="text" autoComplete="off" className={inputCls} /></Field>
              <Field label="Their email or phone" required><input required type="text" autoComplete="off" className={inputCls} /></Field>
              <Field label="Their zip code or city" required><input required type="text" autoComplete="off" className={inputCls} /></Field>
              <Field label="Their industry or category" required><input required type="text" autoComplete="off" className={inputCls} /></Field>
              <Field label="Why this person" required>
                <textarea required rows={5} placeholder="Briefly tell us why this person is the right Local Leader for their community" className={inputCls} />
              </Field>
              <button type="submit" className="btn-primary mt-2 w-full sm:w-auto sm:self-start">
                Send nomination →
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

const inputCls = "w-full min-h-[48px] rounded-lg border border-slate-ink/20 bg-white px-4 py-3 text-[16px] text-slate-ink focus:outline-none focus:border-slate-ink transition-colors disabled:opacity-50";

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

export default Nominate;
