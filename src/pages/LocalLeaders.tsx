import Layout from "@/components/site/Layout";
import LLHero from "@/components/local/LLHero";
import LLFramework from "@/components/local/LLFramework";
import LLSupport from "@/components/local/LLSupport";
import LLWhoFits from "@/components/local/LLWhoFits";
import LLApply from "@/components/local/LLApply";

const LocalLeaders = () => (
  <Layout
    title="Local Leaders"
    description="Local Leaders are the trusted connector in their area, one per industry. Guide, gather, grow: bring families, businesses, and experts together, and earn through the impact you create."
    canonical="/local-leaders"
  >
    <LLHero />
    <LLFramework />
    <LLSupport />
    <LLWhoFits />
    <LLApply />
  </Layout>
);

export default LocalLeaders;
