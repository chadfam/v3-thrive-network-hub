import Layout from "@/components/site/Layout";
import CCHero from "@/components/command/CCHero";
import CCProblem from "@/components/command/CCProblem";
import CCGuide from "@/components/command/CCGuide";
import CCDisciplines from "@/components/command/CCDisciplines";
import CCCatalog from "@/components/command/CCCatalog";
import CCAccess from "@/components/command/CCAccess";
import CCApply from "@/components/command/CCApply";

const CommandCentral = () => (
  <Layout
    title="Command Central"
    description="Command Central gives business owners a curated group of trusted advisors, experts, and service providers across coaching, marketing, finance, legal, and tech."
    canonical="/command-central"
  >
    <CCHero />
    <CCProblem />
    <CCGuide />
    <CCDisciplines />
    <CCCatalog />
    <CCAccess />
    <CCApply />
  </Layout>
);

export default CommandCentral;
