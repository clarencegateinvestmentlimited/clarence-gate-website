import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Map from "@/components/Map";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FocusesSection from "@/components/FocusesSection";
import TeamSection from "@/components/TeamSection";
import ServicesSection from "@/components/ServicesSection";
import ExpertiseAccordion from "@/components/ExpertiseAccordion";
import ServiceGrid from "@/components/ServiceGrid";
import CaaSPricing from "@/components/CaaSPricing";
import TestimonialSlider from "@/components/TestimonialSlider";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="lg:h-[550px] md:h-[500px]">
          <Hero />
        </div>
        <About />
        {/* <Industries /> */}
        {/* <FocusesSection /> */}
        <TeamSection/>
        {/* <ServicesSection/> */}
        <ServiceGrid/>
        <Process />

        {/* <Map /> */}
        <ExpertiseAccordion/>
         <TestimonialSlider />
        {/* <ContactForm /> */}
      </main>
      <CaaSPricing/>
      <Footer />
    </div>
  );
};

export default Index;
