import Layout from "@/components/site/Layout";
import FGHero from "@/components/famguides/FGHero";
import FGPlan from "@/components/famguides/FGPlan";
import FGSupport from "@/components/famguides/FGSupport";
import FGWhoFits from "@/components/famguides/FGWhoFits";
import FGConnected from "@/components/famguides/FGConnected";
import FGApply from "@/components/famguides/FGApply";

const FamGuides = () => (
  <Layout
    title="FAM Guides"
    description="FAM Guides are coaches with a plan, a practice, and a platform. Help families feel more connected through the FAM Plan, and build a coaching practice inside the WEcosystem."
    canonical="/fam-guides"
  >
    <FGHero />
    <FGPlan />
    <FGSupport />
    <FGWhoFits />
    <FGConnected />
    <FGApply />
  </Layout>
);

export default FamGuides;
