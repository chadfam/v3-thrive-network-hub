import Layout from "@/components/site/Layout";
import Hero from "@/components/site/Hero";
import Partnerships from "@/components/site/Partnerships";
import FamousForFamilies from "@/components/site/FamousForFamilies";
import Feel from "@/components/site/Feel";
import ThreeWays from "@/components/site/ThreeWays";
import ApplyCta from "@/components/site/ApplyCta";

const Index = () => (
  <Layout
    description="United to Thrive is the WEcosystem connecting business owners, community leaders, and trusted experts to the families they serve."
    canonical="/"
  >
    <Hero />
    <Partnerships />
    <FamousForFamilies />
    <Feel />
    <ThreeWays />
    <ApplyCta />
  </Layout>
);

export default Index;
