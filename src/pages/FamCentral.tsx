import { Link } from "react-router-dom";
import Layout from "@/components/site/Layout";

const FamCentral = () => (
  <Layout
    title="FAM Central"
    description="The family engagement platform inside the United to Thrive network. Coming soon."
    canonical="/fam-central"
    noindex
  >
    <section style={{ backgroundColor: "#264B73" }} className="text-white">
      <div className="mx-auto max-w-[840px] px-6 sm:px-8 md:px-10 pt-24 md:pt-32 pb-24 md:pb-32 text-center">
        <h1
          className="font-serif-display text-white"
          style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
        >
          Built for the families inside the network.
        </h1>
        <p className="mt-8 text-[17px] md:text-[21px] leading-relaxed text-white/90">
          FAM Central is the family engagement platform we're building underneath the United to Thrive network. It's where families connect with Local Leaders, discover Expert Faculty content, find the businesses worth their recommendation, and live more intentionally together.
        </p>
        <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-white/90">
          The platform is in development. This page is a placeholder while the product comes together. If you want to be notified when FAM Central launches, send us a note.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <Link to="/apply" className="btn-on-dark">
            Join our WEcosystem
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default FamCentral;
