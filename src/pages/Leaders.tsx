import Layout from "@/components/site/Layout";
import LeadHero from "@/components/leaders/LeadHero";
import LeadWhy from "@/components/leaders/LeadWhy";
import LeadFamGuides from "@/components/leaders/LeadFamGuides";
import LeadLocalLeaders from "@/components/leaders/LeadLocalLeaders";
import LeadExpertFaculty from "@/components/leaders/LeadExpertFaculty";
import LeadApply from "@/components/leaders/LeadApply";

const Leaders = () => (
  <Layout
    title="For Leaders"
    description="FAM Guides, Local Leaders, and Expert Faculty. Three roles for the trusted people who serve the families around them, and earn through the impact they create."
    canonical="/leaders"
  >
    <LeadHero />
    <LeadWhy />
    <LeadFamGuides />
    <LeadLocalLeaders />
    <LeadExpertFaculty />
    <LeadApply />
  </Layout>
);

export default Leaders;
