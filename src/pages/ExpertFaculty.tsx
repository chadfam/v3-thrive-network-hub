import Layout from "@/components/site/Layout";
import EFHero from "@/components/expert/EFHero";
import EFWhy from "@/components/expert/EFWhy";
import EFDistribution from "@/components/expert/EFDistribution";
import EFStreams from "@/components/expert/EFStreams";
import EFCategories from "@/components/expert/EFCategories";
import EFHowItWorks from "@/components/expert/EFHowItWorks";
import EFWhoFits from "@/components/expert/EFWhoFits";
import EFExperts from "@/components/expert/EFExperts";
import EFApply from "@/components/expert/EFApply";

const ExpertFaculty = () => (
  <Layout
    title="Expert Faculty"
    description="Five income streams for the expertise you've already built. Expert Faculty connects authors, speakers, coaches, and category leaders to families who came to FAM Central looking for trusted experts."
    canonical="/expert-faculty"
  >
    <EFHero />
    <EFWhy />
    <EFDistribution />
    <EFStreams />
    <EFCategories />
    <EFHowItWorks />
    <EFWhoFits />
    <EFExperts />
    <EFApply />
  </Layout>
);

export default ExpertFaculty;
