import { Helmet } from "react-helmet-async";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutNetwork from "@/components/about/AboutNetwork";
import AboutBeliefs from "@/components/about/AboutBeliefs";
import AboutCompanies from "@/components/about/AboutCompanies";
import AboutWhere from "@/components/about/AboutWhere";
import AboutEngage from "@/components/about/AboutEngage";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-slate-ink">
      <Helmet>
        <title>About | United to Thrive</title>
        <meta name="description" content="United to Thrive is the company behind Profit Partners, FAM Central, Local Leaders, and the WER1 Impact Network. Headquartered in Tempe, Arizona. Built around the principle that the chain is the point." />
        <link rel="canonical" href="/about" />
      </Helmet>
      <Header />
      <main>
        <AboutHero />
        <AboutNetwork />
        <AboutBeliefs />
        <AboutCompanies />
        <AboutWhere />
        <AboutEngage />
      </main>
      <Footer />
    </div>
  );
};

export default About;