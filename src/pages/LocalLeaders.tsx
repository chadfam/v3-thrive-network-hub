import { Helmet } from "react-helmet-async";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import LLHero from "@/components/local/LLHero";
import LLWhatTheyDo from "@/components/local/LLWhatTheyDo";
import LLFramework from "@/components/local/LLFramework";
import LLFambassador from "@/components/local/LLFambassador";
import LLExclusivity from "@/components/local/LLExclusivity";
import LLEarnings from "@/components/local/LLEarnings";
import LLTraining from "@/components/local/LLTraining";
import LLWhoFits from "@/components/local/LLWhoFits";
import LLApply from "@/components/local/LLApply";

const LocalLeaders = () => {
  return (
    <div className="min-h-screen bg-background text-slate-ink">
      <Helmet>
        <title>Local Leaders | United to Thrive</title>
        <meta
          name="description"
          content="One Local Leader per industry per zip code. Be the trusted connector your community already gives you. Guide, gather, grow. Earn through introductions, memberships, and partnerships."
        />
      </Helmet>
      <Header />
      <main>
        <LLHero />
        <LLWhatTheyDo />
        <LLFramework />
        <LLFambassador />
        <LLExclusivity />
        <LLEarnings />
        <LLTraining />
        <LLWhoFits />
        <LLApply />
      </main>
      <Footer />
    </div>
  );
};

export default LocalLeaders;