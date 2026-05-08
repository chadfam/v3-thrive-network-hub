import Layout from "@/components/site/Layout";
import BizHero from "@/components/businesses/BizHero";
import BizArgument from "@/components/businesses/BizArgument";
import BizProfitPartners from "@/components/businesses/BizProfitPartners";
import BizMastermindPassport from "@/components/businesses/BizMastermindPassport";
import BizCommandCentral from "@/components/businesses/BizCommandCentral";
import BizWer1Band from "@/components/businesses/BizWer1Band";
import BizTeamWellness from "@/components/businesses/BizTeamWellness";
import BizWhoInside from "@/components/businesses/BizWhoInside";
import BizApply from "@/components/businesses/BizApply";

const Businesses = () => (
  <Layout
    title="For Businesses"
    description="Profit Partners, Mastermind Passport, and Command Central. The core programs for business owners who grow through introductions instead of ads."
    canonical="/businesses"
  >
    <BizHero />
    <BizArgument />
    <BizProfitPartners />
    <BizMastermindPassport />
    <BizCommandCentral />
    <BizWer1Band />
    <BizTeamWellness />
    <BizWhoInside />
    <BizApply />
  </Layout>
);

export default Businesses;
