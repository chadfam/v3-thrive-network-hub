import Layout from "@/components/site/Layout";
import LeadHero from "@/components/leaders/LeadHero";
import LeadWhy from "@/components/leaders/LeadWhy";
import LeadFamGuides from "@/components/leaders/LeadFamGuides";
import LeadLocalLeaders from "@/components/leaders/LeadLocalLeaders";
import LeadExpertFaculty from "@/components/leaders/LeadExpertFaculty";
import LeadWhichRole from "@/components/leaders/LeadWhichRole";
import LeadWer1Band from "@/components/leaders/LeadWer1Band";
import LeadApply from "@/components/leaders/LeadApply";

const Leaders = () => (
  <Layout
    title="For Leaders"
    description="FAM Guides, Local Leaders, and Expert Faculty. Three programs and one referral platform for the coaches, connectors, and experts whose work is already changing how families live."
    canonical="/leaders"
  >
    <LeadHero />
    <LeadWhy />
    <LeadFamGuides />
    <LeadLocalLeaders />
    <LeadExpertFaculty />
    <LeadWhichRole />
    <LeadWer1Band />
    <LeadApply />
  </Layout>
);

export default Leaders;
