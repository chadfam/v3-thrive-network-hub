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
    description="Command Central is the operating bench underneath Profit Partners. Pre-vetted experts and service providers across coaching, marketing, finance, legal, and tech. Five disciplines, thirty-plus services."
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
