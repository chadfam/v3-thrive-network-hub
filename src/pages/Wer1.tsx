import Layout from "@/components/site/Layout";
import W1Hero from "@/components/wer1/W1Hero";
import W1TwoWays from "@/components/wer1/W1TwoWays";
import W1PromoterHow from "@/components/wer1/W1PromoterHow";
import W1Earnings from "@/components/wer1/W1Earnings";
import W1WhiteLabel from "@/components/wer1/W1WhiteLabel";
import W1Configurations from "@/components/wer1/W1Configurations";
import W1Technical from "@/components/wer1/W1Technical";
import W1WhyOwn from "@/components/wer1/W1WhyOwn";
import W1Apply from "@/components/wer1/W1Apply";

const Wer1 = () => (
  <Layout
    title="WER1"
    description="WER1 is the referral platform behind United to Thrive. One universal link, your magic link, to promote any program in the network and get paid when people buy, no matter which one. Also available as a white-label engine for partner businesses."
    canonical="/wer1"
  >
    <W1Hero />
    <W1TwoWays />
    <W1PromoterHow />
    <W1Earnings />
    <W1WhiteLabel />
    <W1Configurations />
    <W1Technical />
    <W1WhyOwn />
    <W1Apply />
  </Layout>
);

export default Wer1;
