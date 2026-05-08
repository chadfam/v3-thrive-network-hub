import { Helmet } from "react-helmet-async";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import CCHero from "@/components/command/CCHero";
import CCProblem from "@/components/command/CCProblem";
import CCDisciplines from "@/components/command/CCDisciplines";
import CCCatalog from "@/components/command/CCCatalog";
import CCVetting from "@/components/command/CCVetting";
import CCAccess from "@/components/command/CCAccess";
import CCApply from "@/components/command/CCApply";

const CommandCentral = () => {
  return (
    <div className="min-h-screen bg-background text-slate-ink">
      <Helmet>
        <title>Command Central | United to Thrive</title>
        <meta name="description" content="Command Central is the operating bench underneath Profit Partners. Pre-vetted experts and service providers across coaching, marketing, finance, legal, and tech. Five disciplines, thirty-plus services." />
        <link rel="canonical" href="/command-central" />
      </Helmet>
      <Header />
      <main>
        <CCHero />
        <CCProblem />
        <CCDisciplines />
        <CCCatalog />
        <CCVetting />
        <CCAccess />
        <CCApply />
      </main>
      <Footer />
    </div>
  );
};

export default CommandCentral;