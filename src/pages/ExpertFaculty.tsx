import Layout from "@/components/site/Layout";
import EFHero from "@/components/expert/EFHero";
import EFWhy from "@/components/expert/EFWhy";
import EFDistribution from "@/components/expert/EFDistribution";
import EFStreams from "@/components/expert/EFStreams";
import EFCategories from "@/components/expert/EFCategories";
import EFFaculty from "@/components/expert/EFFaculty";
import EFHowItWorks from "@/components/expert/EFHowItWorks";
import EFWhoFits from "@/components/expert/EFWhoFits";
import EFApply from "@/components/expert/EFApply";

const ExpertFaculty = () => (
  <Layout
    title="Expert Faculty"
    description="More income streams for the expertise you've already built. Expert Faculty connects authors, speakers, coaches, and category leaders to the families who came to the network looking for trusted experts."
    canonical="/expert-faculty"
  >
    <EFHero />
    <EFWhy />
    <EFDistribution />
    <EFStreams />
    <EFCategories />
    <EFFaculty />
    <EFHowItWorks />
    <EFWhoFits />
    <EFApply />
  </Layout>
);

export default ExpertFaculty;
