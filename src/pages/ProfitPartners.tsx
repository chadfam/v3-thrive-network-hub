import { Helmet } from "react-helmet-async";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import PPHero from "@/components/profit/PPHero";
import PPJoining from "@/components/profit/PPJoining";
import PPTiers from "@/components/profit/PPTiers";
import PPTierOne from "@/components/profit/PPTierOne";
import PPTierTwo from "@/components/profit/PPTierTwo";
import PPTierThree from "@/components/profit/PPTierThree";
import PPLCA from "@/components/profit/PPLCA";
import PPPhoenix from "@/components/profit/PPPhoenix";
import PPApplication from "@/components/profit/PPApplication";
import PPApply from "@/components/profit/PPApply";

const ProfitPartners = () => {
  return (
    <div className="min-h-screen bg-background text-slate-ink">
      <Helmet>
        <title>Profit Partners | United to Thrive</title>
        <meta name="description" content="The flagship working alliance of business owners building predictable referral revenue together. Three annual tiers starting at $10,000. Apply by category in your market." />
        <link rel="canonical" href="/profit-partners" />
      </Helmet>
      <Header />
      <main>
        <PPHero />
        <PPJoining />
        <PPTiers />
        <PPTierOne />
        <PPTierTwo />
        <PPTierThree />
        <PPLCA />
        <PPPhoenix />
        <PPApplication />
        <PPApply />
      </main>
      <Footer />
    </div>
  );
};

export default ProfitPartners;