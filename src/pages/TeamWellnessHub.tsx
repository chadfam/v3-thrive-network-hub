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
    description="A supplemental, pre-tax wellness program: better health benefits for your team, $1,500+ more in employee take-home pay, and around $640 a year per employee in payroll-tax savings for the business. Sits alongside existing health insurance with no disruption."
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
