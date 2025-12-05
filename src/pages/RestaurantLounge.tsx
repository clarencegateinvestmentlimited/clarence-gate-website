import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const RestaurantLounge = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const properties = [
    {
      id: 1,
      image: "/Images/Card401.jpg",
    },
    {
      id: 3,
      image: "/Images/R101.png",
    },
    {
      id: 2,
      image: "/Images/R102.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HEADER SECTION */}
      <header className="container mx-auto lg:mx-[100px] pt-[150px] px-4 lg:pt-40">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8 lg:mr-24">
          {/* Logo & Title */}
          <div
            className={`flex items-center gap-4 transition-all duration-700 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center backdrop-blur-sm">
              <img
                className="rounded-full lg:h-[80px] h-[70px] w-[80px] lg:w-24"
                src="/Images/355-restaurant-logo.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold leading-tight">
                355 Restaurant &
              </h1>
              <p className="text-base lg:text-2xl leading-tight text-muted-foreground">
                Lounge
              </p>
            </div>
          </div>

          {/* Info Card */}
          <Card
            className={`bg-transparent border-border p-6 w-full lg:max-w-md transition-all duration-700 delay-300 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <h3 className="text-lg font-semibold mb-3">About</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              355 Restaurant & Lounge is a modern dining and lifestyle space offering a blend of continental and Nigerian cuisine, premium drinks, and an upscale lounge experience designed for socializing, relaxation, and entertainment.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Category</p>
                <p className="text-sm font-medium">Hospitality</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Date</p>
                <p className="text-sm font-medium">2013</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Website</p>
                <a
                  href="https://355group.com/"
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
          className={`max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 transition-all duration-700 delay-500 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 lg:mb-0 lg:w-1/3">
            About the
            <br />
            company
          </h2>

          <div className="lg:w-2/3 space-y-4 text-base lg:text-lg text-muted-foreground leading-relaxed">
            <p>
              355 Restaurant & Lounge is an upscale dining and entertainment destination that combines exceptional cuisine with a vibrant social atmosphere.
            </p>
            <p>
              Beyond dining, the lounge offers a stylish space for leisure, networking, and nightlife experiences.
            </p>
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

      // 👉 Normal images (1 and 2)
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
            {/* Next Button */}
            <div className="w-full md:w-auto flex justify-center md:justify-start">
              <Link to="/villa-monument">
                <Button variant="ghost" className="text-primary hover:text-white flex items-center gap-2">
                  <span className="text-sm sm:text-base font-medium flex items-center gap-4">
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </Link>
            </div>

            {/* Footer Company Info (KEEPING unless you want removed) */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-10 text-center md:text-right w-full md:w-auto">
              <div className="space-y-2">
                <p className="text-2xl text-start font-semibold">Villa Monument Villa</p>
                <p className="text-[17px] text-start text-muted-foreground">2009</p>
              </div>

              <div className="w-54 h-28 sm:w-56 sm:h-36 md:w-[350px] md:h-[180px] rounded-xl overflow-hidden shadow-md flex items-center justify-center">
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src="/Images/Villa-monument-logo.png"
                  alt=""
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

export default RestaurantLounge;
