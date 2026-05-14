import Layout from "@/components/site/Layout";
import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import AboutNetwork from "@/components/about/AboutNetwork";
import AboutBeliefs from "@/components/about/AboutBeliefs";
import AboutCompanies from "@/components/about/AboutCompanies";
import AboutProvenSystem from "@/components/about/AboutProvenSystem";
import AboutTeam from "@/components/about/AboutTeam";
import AboutOutro from "@/components/about/AboutOutro";

const About = () => (
  <Layout
    title="About"
    description="United to Thrive is the company behind Profit Partners, FAM Central, Local Leaders, and the WER1 referral platform. Headquartered in Tempe, Arizona. Built around the principle that the chain is the point."
    canonical="/about"
  >
    <AboutHero />
    <AboutStats />
    <AboutNetwork />
    <AboutBeliefs />
    <AboutCompanies />
    <AboutProvenSystem />
    <AboutTeam />
    <AboutOutro />
  </Layout>
);

export default About;
