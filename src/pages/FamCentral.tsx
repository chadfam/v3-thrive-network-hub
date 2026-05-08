import Layout from "@/components/site/Layout";

const FamCentral = () => (
  <Layout
    title="FAM Central"
    description="The family engagement platform inside the United to Thrive network. Coming soon."
    canonical="/fam-central"
    noindex
  >
    <section style={{ backgroundColor: "#0B1F3F" }} className="text-white">
      <div className="mx-auto max-w-[840px] px-6 sm:px-8 md:px-10 pt-24 md:pt-32 pb-24 md:pb-32 text-center">
        <p className="text-[13px] tracking-[0.18em] uppercase text-white/70">FAM CENTRAL</p>
        <h1
          className="mt-6 font-serif-display text-white"
          style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
        >
          Built for the families inside the network.
        </h1>
        <p className="mt-8 text-[17px] md:text-[21px] leading-relaxed text-white/90">
          FAM Central is the family engagement platform we're building underneath the United to Thrive network. It's where families connect with Local Leaders, discover Expert Faculty content, find the businesses worth their recommendation, and live more intentionally together.
        </p>
        <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-white/80">
          The platform is in development. This page is a placeholder while the product comes together. If you want to be notified when FAM Central launches, send us a note.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <a href="/contact?topic=fam-central" className="btn-on-dark">
            Stay informed
          </a>
          <a href="/about" className="btn-secondary-on-dark">
            Learn about the network
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default FamCentral;
