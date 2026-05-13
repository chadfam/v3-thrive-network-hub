import Layout from "@/components/site/Layout";
import LLHero from "@/components/local/LLHero";
import LLWhatTheyDo from "@/components/local/LLWhatTheyDo";
import LLFramework from "@/components/local/LLFramework";
import LLFambassador from "@/components/local/LLFambassador";
import LLExclusivity from "@/components/local/LLExclusivity";
import LLEarnings from "@/components/local/LLEarnings";
import LLTraining from "@/components/local/LLTraining";
import LLWhoFits from "@/components/local/LLWhoFits";
import LLApply from "@/components/local/LLApply";

const LocalLeaders = () => (
  <Layout
    title="Local Leaders"
    description="One Local Leader per industry in their area. Be the trusted connector your community already turns to. Guide, gather, grow. Earn through introductions, memberships, and partnerships."
    canonical="/local-leaders"
  >
    <LLHero />
    <LLWhatTheyDo />
    <LLFramework />
    <LLFambassador />
    <LLExclusivity />
    <LLEarnings />
    <LLTraining />
    <LLWhoFits />
    <LLApply />
  </Layout>
);

export default LocalLeaders;
