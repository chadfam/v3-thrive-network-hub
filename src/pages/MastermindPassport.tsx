import Layout from "@/components/site/Layout";
import PassHero from "@/components/passport/PassHero";
import PassProblem from "@/components/passport/PassProblem";
import PassHowItWorks from "@/components/passport/PassHowItWorks";
import PassRooms from "@/components/passport/PassRooms";
import PassExperience from "@/components/passport/PassExperience";
import PassMath from "@/components/passport/PassMath";
import PassWhoFor from "@/components/passport/PassWhoFor";
import PassAccess from "@/components/passport/PassAccess";
import PassApply from "@/components/passport/PassApply";

const MastermindPassport = () => (
  <Layout
    title="Mastermind Passport"
    description="Guest access into elite mastermind communities through one membership. Genius Network, Strategic Coach, GoBundance, Flight Club, and more. Walk in introduced."
    canonical="/mastermind-passport"
  >
    <PassHero />
    <PassProblem />
    <PassHowItWorks />
    <PassRooms />
    <PassExperience />
    <PassMath />
    <PassWhoFor />
    <PassAccess />
    <PassApply />
  </Layout>
);

export default MastermindPassport;
