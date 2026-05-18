import Layout from "@/components/site/Layout";
import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutGrow from "@/components/about/AboutGrow";
import AboutTeam from "@/components/about/AboutTeam";
import AboutApply from "@/components/about/AboutApply";

const About = () => (
  <Layout
    title="About"
    description="United to Thrive is the WEcosystem connecting business owners, community leaders, and trusted experts to the families they serve. Meet the team and the worldview behind it."
    canonical="/about"
  >
    <AboutHero />
    <AboutMission />
    <AboutGrow />
    <AboutTeam />
    <AboutApply />
  </Layout>
);

export default About;
