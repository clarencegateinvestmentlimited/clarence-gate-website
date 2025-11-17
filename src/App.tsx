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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
