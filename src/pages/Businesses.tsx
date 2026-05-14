import Layout from "@/components/site/Layout";
import BizHero from "@/components/businesses/BizHero";
import BizArgument from "@/components/businesses/BizArgument";
import BizPowerTeam from "@/components/businesses/BizPowerTeam";
import BizProcess from "@/components/businesses/BizProcess";
import BizPrograms from "@/components/businesses/BizPrograms";
import BizWer1Band from "@/components/businesses/BizWer1Band";
import BizApply from "@/components/businesses/BizApply";
import BizOutro from "@/components/businesses/BizOutro";

const Businesses = () => (
  <Layout
    title="For Businesses"
    description="Profit Partners, Mastermind Passport, and Command Central. The core programs for business owners who grow through introductions instead of ads."
    canonical="/businesses"
  >
    <BizHero />
    <BizArgument />
    <BizPowerTeam />
    <BizProcess />
    <BizPrograms />
    <BizWer1Band />
    <BizApply />
    <BizOutro />
  </Layout>
);

export default Businesses;
