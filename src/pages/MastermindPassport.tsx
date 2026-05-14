import Layout from "@/components/site/Layout";
import PassHero from "@/components/passport/PassHero";
import PassProblem from "@/components/passport/PassProblem";
import PassHowItWorks from "@/components/passport/PassHowItWorks";
import PassExperience from "@/components/passport/PassExperience";
import PassMath from "@/components/passport/PassMath";
import PassWhoFor from "@/components/passport/PassWhoFor";
import PassApply from "@/components/passport/PassApply";

const MastermindPassport = () => (
  <Layout
    title="Mastermind Passport"
    description="Guest access into elite mastermind communities through one membership. Walk in introduced. Apply to see if you qualify."
    canonical="/mastermind-passport"
  >
    <PassHero />
    <PassProblem />
    <PassHowItWorks />
    <PassExperience />
    <PassMath />
    <PassWhoFor />
    <PassApply />
  </Layout>
);

export default MastermindPassport;
