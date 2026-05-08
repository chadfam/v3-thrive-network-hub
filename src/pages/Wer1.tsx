import { Helmet } from "react-helmet-async";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import W1Hero from "@/components/wer1/W1Hero";
import W1TwoWays from "@/components/wer1/W1TwoWays";
import W1PromoterHow from "@/components/wer1/W1PromoterHow";
import W1Earnings from "@/components/wer1/W1Earnings";
import W1WhiteLabel from "@/components/wer1/W1WhiteLabel";
import W1Configurations from "@/components/wer1/W1Configurations";
import W1Technical from "@/components/wer1/W1Technical";
import W1WhyOwn from "@/components/wer1/W1WhyOwn";
import W1Apply from "@/components/wer1/W1Apply";

const Wer1 = () => {
  return (
    <div className="min-h-screen bg-background text-slate-ink">
      <Helmet>
        <title>WER1 | The Patented Affiliate Platform Behind United to Thrive</title>
        <meta
          name="description"
          content="WER1 is a patented affiliate and referral platform built on a Waves of Pay model that pays multiple people per transaction. Available as a promoter platform and as a white-label engine for partner businesses."
        />
        <link rel="canonical" href="/wer1" />
      </Helmet>
      <Header />
      <main>
        <W1Hero />
        <W1TwoWays />
        <W1PromoterHow />
        <W1Earnings />
        <W1WhiteLabel />
        <W1Configurations />
        <W1Technical />
        <W1WhyOwn />
        <W1Apply />
      </main>
      <Footer />
    </div>
  );
};

export default Wer1;