import Layout from "@/components/site/Layout";
import BizHero from "@/components/businesses/BizHero";
import BizWhy from "@/components/businesses/BizWhy";
import BizProfitPartners from "@/components/businesses/BizProfitPartners";
import BizMastermindPassport from "@/components/businesses/BizMastermindPassport";
import BizCommandCentral from "@/components/businesses/BizCommandCentral";
import BizApply from "@/components/businesses/BizApply";

const Businesses = () => (
  <Layout
    title="For Businesses"
    description="Profit Partners, Mastermind Passport, and Command Central: three offerings that put your business in front of the families your community already trusts."
    canonical="/businesses"
  >
    <BizHero />
    <BizWhy />
    <BizProfitPartners />
    <BizMastermindPassport />
    <BizCommandCentral />
    <BizApply />
  </Layout>
);

export default Businesses;
