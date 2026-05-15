import Layout from "@/components/site/Layout";
import CCHero from "@/components/command/CCHero";
import CCProblem from "@/components/command/CCProblem";
import CCCatalog from "@/components/command/CCCatalog";
import CCVetting from "@/components/command/CCVetting";
import CCApply from "@/components/command/CCApply";

const CommandCentral = () => (
  <Layout
    title="Command Central"
    description="Your own board of advisors. Vetted experts across coaching, marketing, finance, legal, and technology, inside the WEcosystem."
    canonical="/command-central"
  >
    <CCHero />
    <CCProblem />
    <CCCatalog />
    <CCVetting />
    <CCApply />
  </Layout>
);

export default CommandCentral;
