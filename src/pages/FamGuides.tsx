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
    description="Help families feel more connected with the FAM Plan, a plan that's theirs. A coaching practice with a platform underneath: specialty paths, a recurring revenue model, and the platform handles billing, scheduling, and family matching while you handle the coaching."
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
