import Layout from "@/components/site/Layout";
import Hero from "@/components/site/Hero";
import FullNetwork from "@/components/site/FullNetwork";
import Argument from "@/components/site/Argument";
import HowWer1Works from "@/components/site/HowWer1Works";
import NextStep from "@/components/site/NextStep";
import Outro from "@/components/site/Outro";

const Index = () => (
  <Layout
    description="The network behind Profit Partners, Mastermind Passport, Command Central, and the WER1 referral engine. Where businesses become famous for families."
    canonical="/"
  >
    <Hero />
    <FullNetwork />
    <Argument />
    <HowWer1Works />
    <NextStep />
    <Outro />
  </Layout>
);

export default Index;
