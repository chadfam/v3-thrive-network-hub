import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Argument from "@/components/site/Argument";
import ThreePaths from "@/components/site/ThreePaths";
import FullNetwork from "@/components/site/FullNetwork";
import HowWer1Works from "@/components/site/HowWer1Works";
import TheRoom from "@/components/site/TheRoom";
import WhyFamilies from "@/components/site/WhyFamilies";
import NextStep from "@/components/site/NextStep";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-slate-ink">
      <Header />
      <main>
        <Hero />
        <Argument />
        <ThreePaths />
        <HowWer1Works />
        <FullNetwork />
        <TheRoom />
        <WhyFamilies />
        <NextStep />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
