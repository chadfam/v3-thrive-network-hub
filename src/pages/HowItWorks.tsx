import Layout from "@/components/site/Layout";
import HowHero from "@/components/how/HowHero";
import HowFourPeople from "@/components/how/HowFourPeople";
import HowWavesOfPay from "@/components/how/HowWavesOfPay";
import HowTracks from "@/components/how/HowTracks";
import HowWhiteLabel from "@/components/how/HowWhiteLabel";
import HowWalkthrough from "@/components/how/HowWalkthrough";
import HowWhy from "@/components/how/HowWhy";
import HowPromoter from "@/components/how/HowPromoter";

const HowItWorks = () => (
  <Layout
    title="How It Works"
    description="WER1 is the referral platform behind every program in the United to Thrive network. One introduction pays four people. Here's how the mechanics work."
    canonical="/how-it-works"
  >
    <HowHero />
    <HowFourPeople />
    <HowWavesOfPay />
    <HowTracks />
    <HowWhiteLabel />
    <HowWalkthrough />
    <HowWhy />
    <HowPromoter />
  </Layout>
);

export default HowItWorks;
