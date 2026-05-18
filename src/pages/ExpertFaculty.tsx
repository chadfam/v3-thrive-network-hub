import Layout from "@/components/site/Layout";
import EFHero from "@/components/expert/EFHero";
import EFDistribution from "@/components/expert/EFDistribution";
import EFCategories from "@/components/expert/EFCategories";
import EFStreams from "@/components/expert/EFStreams";
import EFApply from "@/components/expert/EFApply";

const ExpertFaculty = () => (
  <Layout
    title="Expert Faculty"
    description="Expert Faculty is a curated network of trusted experts whose content reaches families across the WEcosystem. More income streams than a single offer, rewarded for impact."
    canonical="/expert-faculty"
  >
    <EFHero />
    <EFDistribution />
    <EFCategories />
    <EFStreams />
    <EFApply />
  </Layout>
);

export default ExpertFaculty;
