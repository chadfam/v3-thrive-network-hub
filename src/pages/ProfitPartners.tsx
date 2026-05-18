import Layout from "@/components/site/Layout";
import PPHero from "@/components/profit/PPHero";
import PPReferrals from "@/components/profit/PPReferrals";
import PPPowerTeam from "@/components/profit/PPPowerTeam";
import PPInside from "@/components/profit/PPInside";
import PPLifetimeClient from "@/components/profit/PPLifetimeClient";
import PPApply from "@/components/profit/PPApply";

const ProfitPartners = () => (
  <Layout
    title="Profit Partners"
    description="Profit Partners is the working alliance of complementary business owners who actively recommend each other to the families they already serve."
    canonical="/profit-partners"
  >
    <PPHero />
    <PPReferrals />
    <PPPowerTeam />
    <PPInside />
    <PPLifetimeClient />
    <PPApply />
  </Layout>
);

export default ProfitPartners;
