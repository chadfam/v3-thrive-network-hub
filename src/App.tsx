import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Businesses from "./pages/Businesses.tsx";
import Leaders from "./pages/Leaders.tsx";
import HowItWorks from "./pages/HowItWorks.tsx";
import About from "./pages/About.tsx";
import ProfitPartners from "./pages/ProfitPartners.tsx";
import MastermindPassport from "./pages/MastermindPassport.tsx";
import CommandCentral from "./pages/CommandCentral.tsx";
import TeamWellnessHub from "./pages/TeamWellnessHub.tsx";
import LocalLeaders from "./pages/LocalLeaders.tsx";
import FamGuides from "./pages/FamGuides.tsx";
import ExpertFaculty from "./pages/ExpertFaculty.tsx";
import Wer1 from "./pages/Wer1.tsx";
import PromoEngine from "./pages/PromoEngine.tsx";
import FamCentral from "./pages/FamCentral.tsx";
import Apply from "./pages/Apply.tsx";
import Contact from "./pages/Contact.tsx";
import Nominate from "./pages/Nominate.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/businesses" element={<Businesses />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/profit-partners" element={<ProfitPartners />} />
          <Route path="/mastermind-passport" element={<MastermindPassport />} />
          <Route path="/command-central" element={<CommandCentral />} />
          <Route path="/team-wellness-hub" element={<TeamWellnessHub />} />
          <Route path="/local-leaders" element={<LocalLeaders />} />
          <Route path="/fam-guides" element={<FamGuides />} />
          <Route path="/expert-faculty" element={<ExpertFaculty />} />
          <Route path="/wer1" element={<Wer1 />} />
          <Route path="/promo-engine" element={<PromoEngine />} />
          <Route path="/fam-central" element={<FamCentral />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nominate" element={<Nominate />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
