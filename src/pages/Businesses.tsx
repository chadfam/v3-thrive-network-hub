import Layout from "@/components/site/Layout";
import BizHero from "@/components/businesses/BizHero";
import BizArgument from "@/components/businesses/BizArgument";
import BizProfitPartners from "@/components/businesses/BizProfitPartners";
import BizMastermindPassport from "@/components/businesses/BizMastermindPassport";
import BizCommandCentral from "@/components/businesses/BizCommandCentral";
import BizWer1Band from "@/components/businesses/BizWer1Band";
import BizApply from "@/components/businesses/BizApply";
import BizOutro from "@/components/businesses/BizOutro";

const Businesses = () => (
  <Layout
    title="For Businesses"
    description="An overview of Profit Partners, Mastermind Passport, and Command Central. The three partnerships behind business owners who grow through introductions instead of ads."
    canonical="/businesses"
  >
    <BizHero />
    <BizArgument />
    <BizProfitPartners />
    <BizMastermindPassport />
    <BizCommandCentral />
    <BizWer1Band />
    <BizApply />
    <BizOutro />
  </Layout>
);

export default Businesses;
