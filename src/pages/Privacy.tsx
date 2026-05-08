import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

const Privacy = () => (
  <div className="min-h-screen bg-background text-slate-ink">
    <Helmet>
      <title>Privacy Policy | United to Thrive</title>
      <meta name="description" content="How United To Thrive LLC collects, uses, and protects information about visitors and members." />
    </Helmet>
    <Header />
    <main>
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 md:px-10 pt-24 md:pt-32 pb-12 md:pb-16">
          <h1 className="font-serif-display text-slate-ink" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            Privacy policy.
          </h1>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[640px]">
            How United To Thrive LLC collects, uses, and protects information about visitors and members.
          </p>
          <p className="mt-4 italic text-[14px] text-[hsl(var(--slate-500))]">Last updated: November 2026</p>
        </div>
      </section>
      <section className="bg-background">
        <div className="mx-auto max-w-[760px] px-6 sm:px-8 md:px-10 pb-24 md:pb-32">
          <div className="rounded-2xl border border-slate-ink/10 bg-white p-10">
            <p className="text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">
              This privacy policy is being finalized and will be published shortly. For questions about how we handle data in the meantime, contact us at the address listed in the footer or through our contact form.
            </p>
            <Link to="/contact?topic=privacy" className="mt-8 inline-block text-[15px] text-slate-ink hover:underline underline-offset-4">
              Contact us about privacy →
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Privacy;
