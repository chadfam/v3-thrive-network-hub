import { Helmet } from "react-helmet-async";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import TWHHero from "@/components/wellness/TWHHero";
import TWHStats from "@/components/wellness/TWHStats";
import TWHWhy from "@/components/wellness/TWHWhy";
import TWHMath from "@/components/wellness/TWHMath";
import TWHBenefits from "@/components/wellness/TWHBenefits";
import TWHHowItWorks from "@/components/wellness/TWHHowItWorks";
import TWHCompliance from "@/components/wellness/TWHCompliance";
import TWHPricing from "@/components/wellness/TWHPricing";
import TWHApply from "@/components/wellness/TWHApply";

const TeamWellnessHub = () => {
  return (
    <div className="min-h-screen bg-background text-slate-ink">
      <Helmet>
        <title>Team Wellness Hub | United to Thrive</title>
        <meta
          name="description"
          content="A Section 125 cafeteria plan that increases employee take-home pay and reduces employer FICA payroll taxes through pre-tax wellness benefits. Sits alongside existing health insurance with no disruption."
        />
      </Helmet>
      <Header />
      <main>
        <TWHHero />
        <TWHStats />
        <TWHWhy />
        <TWHMath />
        <TWHBenefits />
        <TWHHowItWorks />
        <TWHCompliance />
        <TWHPricing />
        <TWHApply />
      </main>
      <Footer />
    </div>
  );
};

export default TeamWellnessHub;