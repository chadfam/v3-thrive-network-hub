import { Helmet } from "react-helmet-async";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FGHero from "@/components/famguides/FGHero";
import FGWhatTheyDo from "@/components/famguides/FGWhatTheyDo";
import FGSpecialty from "@/components/famguides/FGSpecialty";
import FGBusinessModel from "@/components/famguides/FGBusinessModel";
import FGPlatform from "@/components/famguides/FGPlatform";
import FGTraining from "@/components/famguides/FGTraining";
import FGWhoFits from "@/components/famguides/FGWhoFits";
import FGApply from "@/components/famguides/FGApply";

const FamGuides = () => {
  return (
    <div className="min-h-screen bg-background text-slate-ink">
      <Helmet>
        <title>FAM Guides | United to Thrive</title>
        <meta
          name="description"
          content="A family coaching practice with a platform underneath. Four specialty paths. Recurring revenue model. The platform handles billing, scheduling, and family matching while you handle the coaching."
        />
      </Helmet>
      <Header />
      <main>
        <FGHero />
        <FGWhatTheyDo />
        <FGSpecialty />
        <FGBusinessModel />
        <FGPlatform />
        <FGTraining />
        <FGWhoFits />
        <FGApply />
      </main>
      <Footer />
    </div>
  );
};

export default FamGuides;