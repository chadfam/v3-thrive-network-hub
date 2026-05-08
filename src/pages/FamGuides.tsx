import Layout from "@/components/site/Layout";
import FGHero from "@/components/famguides/FGHero";
import FGWhatTheyDo from "@/components/famguides/FGWhatTheyDo";
import FGSpecialty from "@/components/famguides/FGSpecialty";
import FGBusinessModel from "@/components/famguides/FGBusinessModel";
import FGPlatform from "@/components/famguides/FGPlatform";
import FGTraining from "@/components/famguides/FGTraining";
import FGWhoFits from "@/components/famguides/FGWhoFits";
import FGApply from "@/components/famguides/FGApply";

const FamGuides = () => (
  <Layout
    title="FAM Guides"
    description="A family coaching practice with a platform underneath. Four specialty paths. Recurring revenue model. The platform handles billing, scheduling, and family matching while you handle the coaching."
    canonical="/fam-guides"
  >
    <FGHero />
    <FGWhatTheyDo />
    <FGSpecialty />
    <FGBusinessModel />
    <FGPlatform />
    <FGTraining />
    <FGWhoFits />
    <FGApply />
  </Layout>
);

export default FamGuides;
