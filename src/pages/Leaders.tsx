import { Helmet } from "react-helmet-async";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import LeadHero from "@/components/leaders/LeadHero";
import LeadWhy from "@/components/leaders/LeadWhy";
import LeadLocalLeaders from "@/components/leaders/LeadLocalLeaders";
import LeadFamGuides from "@/components/leaders/LeadFamGuides";
import LeadExpertFaculty from "@/components/leaders/LeadExpertFaculty";
import LeadWhichRole from "@/components/leaders/LeadWhichRole";
import LeadWer1Band from "@/components/leaders/LeadWer1Band";
import LeadExperts from "@/components/leaders/LeadExperts";
import LeadApply from "@/components/leaders/LeadApply";

const Leaders = () => {
  return (
    <div className="min-h-screen bg-background text-slate-ink">
      <Helmet>
        <title>For Leaders | United to Thrive</title>
        <meta
          name="description"
          content="Local Leaders, FAM Guides, and Expert Faculty. Three programs and one referral platform for the connectors, coaches, and experts whose work is already changing how families live."
        />
      </Helmet>
      <Header />
      <main>
        <LeadHero />
        <LeadWhy />
        <LeadLocalLeaders />
        <LeadFamGuides />
        <LeadExpertFaculty />
        <LeadWhichRole />
        <LeadWer1Band />
        <LeadExperts />
        <LeadApply />
      </main>
      <Footer />
    </div>
  );
};

export default Leaders;