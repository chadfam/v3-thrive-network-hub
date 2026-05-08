import Layout from "@/components/site/Layout";
import TWHHero from "@/components/wellness/TWHHero";
import TWHStats from "@/components/wellness/TWHStats";
import TWHWhy from "@/components/wellness/TWHWhy";
import TWHMath from "@/components/wellness/TWHMath";
import TWHBenefits from "@/components/wellness/TWHBenefits";
import TWHHowItWorks from "@/components/wellness/TWHHowItWorks";
import TWHCompliance from "@/components/wellness/TWHCompliance";
import TWHPricing from "@/components/wellness/TWHPricing";
import TWHApply from "@/components/wellness/TWHApply";

const TeamWellnessHub = () => (
  <Layout
    title="Team Wellness Hub"
    description="A Section 125 cafeteria plan that increases employee take-home pay and reduces employer FICA payroll taxes through pre-tax wellness benefits. Sits alongside existing health insurance with no disruption."
    canonical="/team-wellness-hub"
  >
    <TWHHero />
    <TWHStats />
    <TWHWhy />
    <TWHMath />
    <TWHBenefits />
    <TWHHowItWorks />
    <TWHCompliance />
    <TWHPricing />
    <TWHApply />
  </Layout>
);

export default TeamWellnessHub;
