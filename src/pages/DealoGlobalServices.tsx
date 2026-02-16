import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useNavigate } from "react-router-dom"; // ⬅️ Add this to your imports (top of file)

const DealoGlobalServices = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const properties = [
    {
      id: 1,
      title: "",
      image:
        "/Images/Card701.jpg",
    },
    {
      id: 2,
      title: "Modern Interior",
      image:
        "/Images/Card702.jpg",
    },
    {
      id: 3,
      title: "Elegant Dining Space",
      image:
        "/Images/Card703.jpg",
    },
    // {
    //   id: 4,
    //   title: "Contemporary Living",
    //   image:
    //     "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    // },
    // {
    //   id: 5,
    //   title: "Architectural Model",
    //   image:
    //     "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    // },
    // {
    //   id: 6,
    //   title: "Modern Building",
    //   image:
    //     "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&q=80",
    // },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HEADER SECTION */}
      <header className="container mx-auto mx-[120px] pt-[150px] px-4 lg:pt-40">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:mx-20 lg:my-0 lg:mr-24">
          {/* Logo & Title */}
          <div
            className={`flex items-center gap-4 transition-all duration-700 ${isVisible ? "animate-fade-in" : "opacity-0"
              }`}
          >
            <div className="w-[70px] h-16 lg:w-20 lg:h-20 flex items-center justify-center backdrop-blur-sm">
              <img
                className="rounded-full h-[70px] lg:w-24 "src="/Images/Card9.jpg"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold leading-tight">
                Dealo Global
              </h1>
              <p className="text-base lg:text-2xl text-muted-foreground">
                Services Limited
              </p>
            </div>
          </div>

          {/* Info Card */}
          <Card
            className={`bg-transparent border-border p-6 w-full lg:max-w-md transition-all duration-700 delay-300 ${isVisible ? "animate-slide-in-right" : "opacity-0"
              }`}
          >
            <h3 className="text-lg font-semibold mb-3">About</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Dealo Global Services Limited is a dedicated financing and management platform established to develop, enhance, and operate essential public assets. As a specialized management company committed to the development and stewardship of public infrastructure, we focus exclusively on long-term value and community impact, bridging the gap between public need and sustainable, high-quality infrastructure solutions. Our model is built around the long-term success of essential assets, ensuring they are financed responsibly and managed efficiently to serve current and future generations, building and maintaining the foundations that allow communities to thrive.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Category</p>
                <p className="text-sm font-medium"> Energy & Infrastructure
</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Date</p>
                <p className="text-sm font-medium">2020</p>
              </div>
              {/* <div>
                <p className="text-xs text-muted-foreground mb-1">Website</p>
                <a
                  href="#"
                  className="text-sm  hover:underline inline-flex items-center gap-1 transition-colors"
                >
                  Visit Website <ArrowRight className="w-3 h-3" />
                </a>
              </div> */}
            </div>
          </Card>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section className="container mx-auto px-4 py-16 lg:py-32">
        <div
          className={`max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 transition-all duration-700 delay-500 ${isVisible ? "animate-fade-in" : "opacity-0"
            }`}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 lg:mb-0 lg:w-1/3">
            About the
            <br />
            company
          </h2>

          <div className="lg:w-2/3 space-y-4 text-base lg:text-lg text-muted-foreground leading-relaxed">
            <p>

              Beyond property acquisition, the company is positioned to provide long-term value through efficient ownership structures, development capabilities, and sound investment practices. Dealo Global Services Limited aims to contribute to the growth of the real estate sector while offering clients and partners reliable, well-managed assets that align with their financial and development goals.
            </p>
            {/* <p>
              At lorem ipsum ac magna. Quis cursus sem nibh pulvinar mollis sed
              arcu faucibus pellentesque. Dui sagittis odio mauris urna blandit
              proin vitass etiam viverra. Tristique tellus nisl ullamcorper
              placerat seniat vitae integer. Morbi sit tincidunt faucibus vitass
              et nibh integer. Duis sed in arcu. Vel eget eros sit aliquismeu
              semper sit in purus ultricies. Facilisi tellus imperdiet dui
              posuere.
            </p> */}
          </div>
        </div>
      </section>

      {/* PROPERTY GALLERY */}
      {/* PROPERTY GALLERY */}
<section className="container mx-auto px-4 pb-16 lg:pb-24 flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-6xl w-full">
    {properties.map((property, index) => {
      
      // 👉 Make the 3rd image full width
      if (index === 2) {
        return (
          <div
            key={property.id}
            className={`group relative overflow-hidden rounded-2xl sm:col-span-2 aspect-[4/3] sm:aspect-[16/5] transition-all duration-700 ${
              isVisible ? "animate-scale-in" : "opacity-0"
            }`}
            style={{ animationDelay: `${700 + index * 100}ms` }}
          >
            <img
              src={property.image}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        );
      }

      // 👉 Normal images (1 & 2)
      return (
        <div
          key={property.id}
          className={`group relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/7] transition-all duration-700 ${
            isVisible ? "animate-scale-in" : "opacity-0"
          }`}
          style={{ animationDelay: `${700 + index * 100}ms` }}
        >
          <img
            src={property.image}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      );
    })}
  </div>
</section>


      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6">
            {/* ✅ Previous Button (centered on mobile) */}
            <div className="w-full md:w-auto flex justify-center md:justify-start">
              <Link to="/dealo-energy">
                <Button
                  variant="ghost"
                  className="text-primary flex hover:text-white flex items-center gap-2"
                >
                  <span className="text-sm flex gap-4 items-center sm:text-base font-medium">
                    Next
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </div>

            {/* ✅ Company Info & Image */}
            <div className="flex flex-col-reverse md:flex-row items-center md:items-center lg:items-center gap-6 md:gap-10 text-center md:text-right w-full md:w-auto">
              {/* Company Text */}
              <div className="space-y-2">
                <p className="text-2xl font-semibold">Dealo Energy Limited</p>
                {/* <p className="text-2xl text-start font-semibold">Limited</p> */}
                <p className="text-[17px] text-start text-muted-foreground">2025</p>
              </div>

              {/* Company Image Card */}
              <div className="w-54 h-28 sm:w-56 sm:h-36 md:w-[350px] md:h-[180px] rounded-xl flex items-center justify-center overflow-hidden shadow-md">
                <img
                  className="w-full h-full object-contain rounded-xl"
                  src="/Images/Dealo Energy_LogoUpdated.png"
                  alt="Clarence Gate"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Footer />
    </div>
  );
};

export default DealoGlobalServices;
