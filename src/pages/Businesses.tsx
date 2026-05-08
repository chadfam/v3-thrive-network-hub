import { Helmet } from "react-helmet-async";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import BizHero from "@/components/businesses/BizHero";
import BizArgument from "@/components/businesses/BizArgument";
import BizProfitPartners from "@/components/businesses/BizProfitPartners";
import BizMastermindPassport from "@/components/businesses/BizMastermindPassport";
import BizCommandCentral from "@/components/businesses/BizCommandCentral";
import BizTeamWellness from "@/components/businesses/BizTeamWellness";
import BizMatrix from "@/components/businesses/BizMatrix";
import BizWer1Band from "@/components/businesses/BizWer1Band";
import BizWhoInside from "@/components/businesses/BizWhoInside";
import BizApply from "@/components/businesses/BizApply";

const Businesses = () => {
  return (
    <div className="min-h-screen bg-background text-slate-ink">
      <Helmet>
        <title>For Businesses | United to Thrive</title>
        <meta
          name="description"
          content="Profit Partners, Mastermind Passport, Command Central, and Team Wellness Hub. Four programs and one referral platform for business owners who grow through introductions instead of ads."
        />
      </Helmet>
      <Header />
      <main>
        <BizHero />
        <BizArgument />
        <BizProfitPartners />
        <BizMastermindPassport />
        <BizCommandCentral />
        <BizTeamWellness />
        <BizMatrix />
        <BizWer1Band />
        <BizWhoInside />
        <BizApply />
      </main>
      <Footer />
    </div>
  );
};

export default Businesses;
