import { Helmet } from "react-helmet-async";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import HowHero from "@/components/how/HowHero";
import HowFourPeople from "@/components/how/HowFourPeople";
import HowWavesOfPay from "@/components/how/HowWavesOfPay";
import HowTracks from "@/components/how/HowTracks";
import HowWhiteLabel from "@/components/how/HowWhiteLabel";
import HowWalkthrough from "@/components/how/HowWalkthrough";
import HowWhy from "@/components/how/HowWhy";
import HowPromoter from "@/components/how/HowPromoter";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background text-slate-ink">
      <Helmet>
        <title>How It Works | United to Thrive</title>
        <meta
          name="description"
          content="WER1 is the patented referral platform behind every program in the United to Thrive network. One introduction pays four people. Here's how the mechanics work."
        />
      </Helmet>
      <Header />
      <main>
        <HowHero />
        <HowFourPeople />
        <HowWavesOfPay />
        <HowTracks />
        <HowWhiteLabel />
        <HowWalkthrough />
        <HowWhy />
        <HowPromoter />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;