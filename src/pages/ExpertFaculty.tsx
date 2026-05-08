import { Helmet } from "react-helmet-async";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import EFHero from "@/components/expert/EFHero";
import EFWhy from "@/components/expert/EFWhy";
import EFDistribution from "@/components/expert/EFDistribution";
import EFStreams from "@/components/expert/EFStreams";
import EFCategories from "@/components/expert/EFCategories";
import EFHowItWorks from "@/components/expert/EFHowItWorks";
import EFWhoFits from "@/components/expert/EFWhoFits";
import EFExperts from "@/components/expert/EFExperts";
import EFApply from "@/components/expert/EFApply";

const ExpertFaculty = () => {
  return (
    <div className="min-h-screen bg-background text-slate-ink">
      <Helmet>
        <title>Expert Faculty | United to Thrive</title>
        <meta
          name="description"
          content="Five income streams for the expertise you've already built. Expert Faculty connects authors, speakers, coaches, and category leaders to families who came to FAM Central looking for trusted experts."
        />
      </Helmet>
      <Header />
      <main>
        <EFHero />
        <EFWhy />
        <EFDistribution />
        <EFStreams />
        <EFCategories />
        <EFHowItWorks />
        <EFWhoFits />
        <EFExperts />
        <EFApply />
      </main>
      <Footer />
    </div>
  );
};

export default ExpertFaculty;