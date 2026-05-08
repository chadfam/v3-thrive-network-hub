import Layout from "@/components/site/Layout";
import PPHero from "@/components/profit/PPHero";
import PPJoining from "@/components/profit/PPJoining";
import PPBenefits from "@/components/profit/PPBenefits";
import PPLCA from "@/components/profit/PPLCA";
import PPPhoenix from "@/components/profit/PPPhoenix";
import PPApplication from "@/components/profit/PPApplication";
import PPApply from "@/components/profit/PPApply";

const ProfitPartners = () => (
  <Layout
    title="Profit Partners"
    description="The flagship working alliance of business owners building predictable referral revenue together. Co-marketing, introductions, the Lifetime Client Agency™ system, and more. Apply by category in your market."
    canonical="/profit-partners"
  >
    <PPHero />
    <PPJoining />
    <PPBenefits />
    <PPLCA />
    <PPPhoenix />
    <PPApplication />
    <PPApply />
  </Layout>
);

export default ProfitPartners;
