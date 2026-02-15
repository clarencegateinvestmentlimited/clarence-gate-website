import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import AboutPage from "./pages/AboutPage";
import Founder from "./pages/Founder";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./lib/ScrollToTop";
import ClarenceGate from "./pages/ClarenceGate";
import DesignProtocolPage from "./pages/DesignProtocol";
import Turboserv from "./pages/TurboservPage";
import RestaurantLounge from "./pages/RestaurantLounge";
import VillaMonument from "./pages/VillaMonument";
import BLimited from "./pages/BLimited";
import DealoGlobalServices from "./pages/DealoGlobalServices";
import DealoEnergy from "./pages/DealoEnergy";
import ServicesSection from "./components/ServicesSection";
import ServiceHero from "./components/ServiceHero";
import ServiceSection from "./pages/ServiceSection";
// import BlogPage from "./components/BlogssPage";
import BlogsPage from "./pages/BlogsPage";
import BlogDetailPage from "./pages/BlogDetailPage1";
import BlogDetailPage1 from "./pages/BlogDetailPage1";
import BlogDetailPage2 from "./pages/BlogDetailPage2";
import CreditIndustry from "./pages/CreditIndustry";
import ConstructionIndustry from "./pages/ConstructionIndustry";
import AnalysisHero from "./pages/Analysis";
import BusinessPage from "./pages/Business";
import IndustryPage from "./pages/Industry";
import EconmyPage from "./pages/Economy";
import UncategorizedPage from "./pages/Uncategorized";
import DashedHope from "./pages/DashedHope";
import SohcahtoaCaseStudy from "./pages/SohcahtoaCaseStudy";
// import StretfordCaseStudy from "./pages/Stretfold";
import StretfordCaseStudy from "./pages/Stretfold";
import SoFresh from "./pages/SoFresh";
import Dutum from "./pages/Dutum";
import SalamLife from "./pages/SalamLife";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clarence-gate" element={<ClarenceGate />} />
          <Route path="/design-protocol" element={<DesignProtocolPage />} />
          <Route path="/turboserv" element={<Turboserv />} />
          <Route path="/55-restaurant" element={<RestaurantLounge />} />
          <Route path="/villa-monument" element={<VillaMonument />} />
          <Route path="/20b-limited" element={<BLimited />} />
          <Route path="/dealo-global" element={<DealoGlobalServices/>} />
          <Route path="/dealo-energy" element={<DealoEnergy/>} />
          <Route path="/services" element={<ServiceSection/>} />
          <Route path="/blogs" element={<BlogsPage/>} />
          <Route path="/blogs-detail" element={<BlogDetailPage1/>} />
          <Route path="/blogs-det" element={<BlogDetailPage2/>} />
          <Route path="/credit-industry" element={<CreditIndustry/>} />
          <Route path="/construction-industry" element={<ConstructionIndustry/>} />
          <Route path="/analysis" element={<AnalysisHero/>} />
          <Route path="/business" element={<BusinessPage/>} />
          <Route path="/industry" element={<IndustryPage/>} />
          <Route path="/economy" element={<EconmyPage/>} />
          <Route path="/uncategorized" element={<UncategorizedPage/>} />
          <Route path="/dashed-hope" element={<DashedHope/>} />
          <Route path="/sohcahtoa-holdings" element={<SohcahtoaCaseStudy/>} />
          <Route path="/stretford" element={<StretfordCaseStudy/>} />
          <Route path="/so-fresh" element={<SoFresh/>} />
          <Route path="/sanlam-life" element={<SalamLife/>} />
          <Route path="/dutum" element={<Dutum/>} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
