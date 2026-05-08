import { Link } from "react-router-dom";
import Layout from "@/components/site/Layout";

const Terms = () => (
  <Layout
    title="Terms of Service"
    description="The agreement between United To Thrive LLC and visitors, members, and partners using the United to Thrive platform and programs."
    canonical="/terms"
  >
    <section className="bg-background">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 md:px-10 pt-24 md:pt-32 pb-12 md:pb-16">
        <h1 className="font-serif-display text-slate-ink" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
          Terms of service.
        </h1>
        <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[hsl(var(--slate-700))] max-w-[640px]">
          The agreement between United To Thrive LLC and visitors, members, and partners using the United to Thrive platform and programs.
        </p>
        <p className="mt-4 italic text-[14px] text-[hsl(var(--slate-500))]">Last updated: November 2026</p>
      </div>
    </section>
    <section className="bg-background">
      <div className="mx-auto max-w-[760px] px-6 sm:px-8 md:px-10 pb-24 md:pb-32">
        <div className="rounded-2xl border border-slate-ink/10 bg-white p-10">
          <p className="text-[17px] leading-relaxed text-[hsl(var(--slate-700))]">
            These terms of service are being finalized and will be published shortly. Members and partners receive program-specific agreements at enrollment. For questions in the meantime, contact us through the footer.
          </p>
          <Link to="/contact" className="mt-8 inline-block text-[15px] text-slate-ink hover:underline underline-offset-4">
            Contact us →
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Terms;
