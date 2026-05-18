import Layout from "@/components/site/Layout";
import CCHero from "@/components/command/CCHero";
import CCBoard from "@/components/command/CCBoard";
import CCAreas from "@/components/command/CCAreas";
import CCWhoFor from "@/components/command/CCWhoFor";
import CCApply from "@/components/command/CCApply";

const CommandCentral = () => (
  <Layout
    title="Command Central"
    description="Command Central gives business owners a standing board of trusted advisors, experts, and service providers across coaching, marketing, finance, legal, and tech."
    canonical="/command-central"
  >
    <CCHero />
    <CCBoard />
    <CCAreas />
    <CCWhoFor />
    <CCApply />
  </Layout>
);

export default CommandCentral;
