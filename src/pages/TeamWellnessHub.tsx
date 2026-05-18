import Layout from "@/components/site/Layout";
import TWHHero from "@/components/wellness/TWHHero";
import TWHStats from "@/components/wellness/TWHStats";
import TWHWhy from "@/components/wellness/TWHWhy";
import TWHHowItWorks from "@/components/wellness/TWHHowItWorks";
import TWHBenefits from "@/components/wellness/TWHBenefits";
import TWHCompliance from "@/components/wellness/TWHCompliance";
import TWHApply from "@/components/wellness/TWHApply";

const TeamWellnessHub = () => (
  <Layout
    title="Team Wellness Hub"
    description="A supplemental, pre-tax wellness program. Real wellness benefits for your team, $1,500+ more take-home pay per employee, and ~$640 per employee per year in payroll-tax savings for the business. Sits alongside existing insurance with no disruption."
    canonical="/team-wellness-hub"
  >
    <TWHHero />
    <TWHStats />
    <TWHWhy />
    <TWHHowItWorks />
    <TWHBenefits />
    <TWHCompliance />
    <TWHApply />
  </Layout>
);

export default TeamWellnessHub;
