import Layout from "@/components/site/Layout";
import LeadHero from "@/components/leaders/LeadHero";
import LeadArgument from "@/components/leaders/LeadArgument";
import LeadWhy from "@/components/leaders/LeadWhy";
import LeadProcess from "@/components/leaders/LeadProcess";
import LeadPrograms from "@/components/leaders/LeadPrograms";
import LeadWer1Band from "@/components/leaders/LeadWer1Band";
import LeadApply from "@/components/leaders/LeadApply";
import LeadOutro from "@/components/leaders/LeadOutro";

const Leaders = () => (
  <Layout
    title="For Leaders"
    description="Local Leaders, FAM Guides, and Expert Faculty. Three paid roles for the coaches, connectors, and category experts whose work is already changing how families live."
    canonical="/leaders"
  >
    <LeadHero />
    <LeadArgument />
    <LeadWhy />
    <LeadProcess />
    <LeadPrograms />
    <LeadWer1Band />
    <LeadApply />
    <LeadOutro />
  </Layout>
);

export default Leaders;
