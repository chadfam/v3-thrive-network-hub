import Layout from "@/components/site/Layout";
import CCHero from "@/components/command/CCHero";
import CCBoard from "@/components/command/CCBoard";
import CCAreas from "@/components/command/CCAreas";
import CCTrust from "@/components/command/CCTrust";
import CCMission from "@/components/command/CCMission";
import CCApply from "@/components/command/CCApply";

const CommandCentral = () => (
  <Layout
    title="Command Central"
    description="Your own board of advisors, experts, and service providers. Coaching, marketing, finance, legal, and technology, inside the WEcosystem."
    canonical="/command-central"
  >
    <CCHero />
    <CCBoard />
    <CCAreas />
    <CCTrust />
    <CCMission />
    <CCApply />
  </Layout>
);

export default CommandCentral;
