import { Helmet } from "react-helmet-async";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import PassHero from "@/components/passport/PassHero";
import PassProblem from "@/components/passport/PassProblem";
import PassHowItWorks from "@/components/passport/PassHowItWorks";
import PassRooms from "@/components/passport/PassRooms";
import PassExperience from "@/components/passport/PassExperience";
import PassMath from "@/components/passport/PassMath";
import PassWhoFor from "@/components/passport/PassWhoFor";
import PassAccess from "@/components/passport/PassAccess";
import PassApply from "@/components/passport/PassApply";

const MastermindPassport = () => {
  return (
    <div className="min-h-screen bg-background text-slate-ink">
      <Helmet>
        <title>Mastermind Passport | United to Thrive</title>
        <meta name="description" content="Guest access into 40+ elite mastermind communities through one membership. Genius Network, Strategic Coach, GoBundance, Flight Club, and more. Walk in introduced." />
        <link rel="canonical" href="/mastermind-passport" />
      </Helmet>
      <Header />
      <main>
        <PassHero />
        <PassProblem />
        <PassHowItWorks />
        <PassRooms />
        <PassExperience />
        <PassMath />
        <PassWhoFor />
        <PassAccess />
        <PassApply />
      </main>
      <Footer />
    </div>
  );
};

export default MastermindPassport;