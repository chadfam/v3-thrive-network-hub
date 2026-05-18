import Layout from "@/components/site/Layout";
import PassHero from "@/components/passport/PassHero";
import PassWhy from "@/components/passport/PassWhy";
import PassMembers from "@/components/passport/PassMembers";
import PassCommunities from "@/components/passport/PassCommunities";
import PassWhoFor from "@/components/passport/PassWhoFor";
import PassApply from "@/components/passport/PassApply";

const MastermindPassport = () => (
  <Layout
    title="Mastermind Passport"
    description="Mastermind Passport is a curated membership that opens guest invitations to multiple elite mastermind communities and entrepreneurial networks through one membership."
    canonical="/mastermind-passport"
  >
    <PassHero />
    <PassWhy />
    <PassMembers />
    <PassCommunities />
    <PassWhoFor />
    <PassApply />
  </Layout>
);

export default MastermindPassport;
