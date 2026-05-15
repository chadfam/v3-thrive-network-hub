import Layout from "@/components/site/Layout";
import CCHero from "@/components/command/CCHero";
import CCProblem from "@/components/command/CCProblem";
import CCDisciplines from "@/components/command/CCDisciplines";
import CCCatalog from "@/components/command/CCCatalog";
import CCVetting from "@/components/command/CCVetting";
import CCAccess from "@/components/command/CCAccess";
import CCApply from "@/components/command/CCApply";

const CommandCentral = () => (
  <Layout
    title="Command Central"
    description="Your own board of advisors, experts, and service providers across coaching, marketing, finance, legal, and tech. Pre-vetted and personally worked with."
    canonical="/command-central"
  >
    <CCHero />
    <CCProblem />
    <CCDisciplines />
    <CCCatalog />
    <CCVetting />
    <CCAccess />
    <CCApply />
  </Layout>
);

export default CommandCentral;
