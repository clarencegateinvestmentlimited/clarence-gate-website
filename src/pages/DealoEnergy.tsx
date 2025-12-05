import { useState, useEffect } from "react";
import { ArrowRight, ArrowRightLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useNavigate } from "react-router-dom"; // ⬅️ Add this to your imports (top of file)

const DealoEnergy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const properties = [
    {
      id: 1,
      title: "",
      image:
        "/Images/Card801.jpg",
    },
    {
      id: 2,
      title: "",
      image:
        "/Images/Card802.jpg",
    },
    {
      id: 3,
      title: "",
      image:
        "/Images/Card803.jpg",
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
      <header className="container mx-auto lg:mx-[100px] pt-[150px] px-4 lg:pt-40">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center lg:mr-24  gap-8 ">
          {/* Logo & Title */}
          <div
            className={`flex items-center gap-4 transition-all duration-700 ${isVisible ? "animate-fade-in" : "opacity-0"
              }`}
          >
            <div className="w-14 h-14 lg:w-16 lg:h-12  flex items-center justify-center backdrop-blur-sm">
              <img
                className="rounded-full lg:h-[65px] h-[60px] w-[60px] lg:w-24"
                src="/Images/Card7.jpg"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold leading-tight">
                Dealo Energy Limited
              </h1>
              {/* <p className="text-base lg:text-lg text-muted-foreground">
                Nigeria Limited
              </p> */}
            </div>
          </div>

          {/* Info Card */}
          <Card
            className={`bg-transparent border-border p-6 w-full lg:max-w-md transition-all duration-700 delay-300 ${isVisible ? "animate-slide-in-right" : "opacity-0"
              }`}
          >
            <h3 className="text-lg font-semibold mb-3">About</h3>
            <p className="text-sm xl:text-md text-muted-foreground mb-4 leading-relaxed">
              Dealo Energy Limited is a forward-thinking oil servicing company focused on delivering integrated solutions across the energy value chain. The company offers a wide range of services including oilfield support, engineering design, procurement, and construction, alongside the supply of specialized equipment and expert project management. Its operations are built on technical competence, service quality, and a commitment to supporting efficient and safe energy operations.

            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Category</p>
                <p className="text-sm font-medium">Energy
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Date</p>
                <p className="text-sm font-medium">2025</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Website</p>
                <a
                  href="#"
                  className="text-sm hover:underline inline-flex items-center gap-1 transition-colors"
                >
                  Visit Website <ArrowRight className="w-3 h-3" />
                </a>
              </div>
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
            <p>Beyond core oilfield and EPC services, Dealo Energy Limited is strategically positioned in energy logistics, infrastructure development, and emerging alternative energy solutions. With an emphasis on innovation and sustainable practices, the company aims to meet the evolving needs of Nigeria’s energy sector by providing reliable, cost-effective, and future-ready services to operators, partners, and stakeholders.</p>
          </div>
        </div>
      </section>

      {/* PROPERTY GALLERY */}
     {/* PROPERTY GALLERY */}
<section className="container mx-auto px-4 pb-16 lg:pb-24 flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-6xl w-full">
    {properties.map((property, index) => (
      <div
        key={property.id}
        className={`group relative overflow-hidden rounded-2xl 
          ${index === 2 ? "sm:col-span-2 aspect-[16/5]" : "aspect-[4/3] sm:aspect-[16/7]"}
          transition-all duration-700 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
        style={{ animationDelay: `${700 + index * 100}ms` }}
      >
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-semibold text-white">
              {property.title}
            </h3>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6">
            {/* ✅ Previous Button (centered on mobile) */}
            <div className="w-full md:w-auto flex justify-center md:justify-start">
              <Link to="/dealo-global">
                <Button
                  variant="ghost"
                  className="text-primary hover:text-white flex items-center gap-2"
                >
                  <ArrowRightLeftIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  <span className="text-sm sm:text-base font-medium">
                    Previous
                  </span>
                </Button>
              </Link>
            </div>

            {/* ✅ Company Info & Image */}
            <div className="flex flex-col-reverse md:flex-row items-center md:items-center lg:items-center gap-6 md:gap-10 text-center md:text-right w-full md:w-auto">
              {/* Company Text */}
              <div className="space-y-2">
                <p className="text-2xl text-start font-semibold">Dealo Global Services</p>
                <p className="text-2xl text-start font-semibold">Investment Limited</p>
                <p className="text-[17px] text-start text-muted-foreground">2022</p>
              </div>

              {/* Company Image Card */}
              <div className="w-54 h-28 sm:w-56 sm:h-36 md:w-[350px] md:h-[180px] rounded-xl flex items-center justify-center bg-orange-500 overflow-hidden shadow-md">
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src="/Images/Card9.jpg"
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

export default DealoEnergy;
