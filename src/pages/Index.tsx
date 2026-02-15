import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Map from "@/components/Map";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FocusesSection from "@/components/FocusesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="lg:h-[750px] md:h-[500px]">
          <Hero />
        </div>
        <About />
        {/* <Industries /> */}
        <FocusesSection />
        <Process />
        <Map />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
