import Layout from "@/components/site/Layout";
import Hero from "@/components/site/Hero";
import Argument from "@/components/site/Argument";
import ThreePaths from "@/components/site/ThreePaths";
import FullNetwork from "@/components/site/FullNetwork";
import HowWer1Works from "@/components/site/HowWer1Works";
import WhyFamilies from "@/components/site/WhyFamilies";
import NextStep from "@/components/site/NextStep";

const Index = () => (
  <Layout
    description="The network behind Profit Partners, Mastermind Passport, Command Central, and the WER1 referral engine. Where businesses become famous for families."
    canonical="/"
  >
    <Hero />
    <Argument />
    <ThreePaths />
    <HowWer1Works />
    <FullNetwork />
    <WhyFamilies />
    <NextStep />
  </Layout>
);

export default Index;
