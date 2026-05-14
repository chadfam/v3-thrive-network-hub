import Layout from "@/components/site/Layout";
import AboutHero from "@/components/about/AboutHero";
import AboutNetwork from "@/components/about/AboutNetwork";
import AboutBeliefs from "@/components/about/AboutBeliefs";
import AboutTeam from "@/components/about/AboutTeam";
import AboutCompanies from "@/components/about/AboutCompanies";
import AboutWhere from "@/components/about/AboutWhere";
import AboutEngage from "@/components/about/AboutEngage";

const About = () => (
  <Layout
    title="About"
    description="United to Thrive is the company behind Profit Partners, FAM Central, Local Leaders, and the WER1 Impact Network. Headquartered in Tempe, Arizona. Built around the principle that the chain is the point."
    canonical="/about"
  >
    <AboutHero />
    <AboutNetwork />
    <AboutBeliefs />
    <AboutTeam />
    <AboutCompanies />
    <AboutWhere />
    <AboutEngage />
  </Layout>
);

export default About;
