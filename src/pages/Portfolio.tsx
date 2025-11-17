import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const portfolioItems = [
    {
      id: 1,
      name: "Clarence Gate Investment Limited",
      category: "real-estate",
      year: "2020",
      image: "/Images/Card1.jpg",
      link: "/clarence-gate",
      objectFit: "cover", 
    },
    {
      id: 2,
      name: "Design Protocol Nigeria Limited",
      category: "real-estate",
      year: "2018",
      image: "/Images/dpupdated-logo2.jpg",
      link: "/design-protocol",
      objectFit: "contain",
    },
    {
      id: 3,
      name: "TurboServ Insurance Brokers Limited",
      category: "finance",
      year: "2022",
      image: "/Images/TURBOSERV_LOGO_4x-100-removebg-preview.png",
      link: "/turboserv",
      objectFit: "contain",
    },
    {
      id: 4,
      name: "55 Restaurant & Lounge",
      category: "hospitality",
      year: "2019",
      image: "/Images/Card4.jpg",
      link: "/55-restaurant",
      objectFit: "cover",
    },
    {
      id: 5,
      name: "Villa Monument Hotel",
      category: "hospitality",
      year: "2021",
      image: "/Images/Card5.jpg",
      link: "/villa-monument",
      objectFit: "cover",
    },
    {
      id: 6,
      name: "20B Limited",
      category: "technology",
      year: "2022",
      image: "/Images/Card8.jpg",
      link: "/20b-limited",
      objectFit: "cover",
    },
    {
      id: 7,
      name: "Dealo Global Services Limited",
      category: "real-estate",
      year: "2020",
      image: "/Images/Card9.jpg",
      link: "/dealo-global",
      objectFit: "cover",
    },
    {
      id: 8,
      name: "Dealo Energy Limited",
      category: "energy",
      year: "2018",
      image: "/Images/Card7.jpg",
      link: "/dealo-energy",
      objectFit: "cover",
    },
  ];

  const filters = [
    { id: "all", label: "All", category: "all" },
    { id: "real-estate", label: "Real Estate", category: "real-estate" },
    { id: "finance", label: "Finance & Insurance", category: "finance" },
    { id: "hospitality", label: "Hospitality", category: "hospitality" },
    { id: "trading", label: "Trading", category: "trading" },
    { id: "energy", label: "Energy & Infrastructure", category: "energy" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-black text-white font-raleway overflow-x-hidden min-h-screen">
      <Header />

      {/* Portfolio Intro Section */}
      <section className="px-[6%] pt-[140px] md:pt-[200px] text-white bg-black">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 items-center max-w-7xl mx-auto">
          {/* Left Text */}
          <div className="md:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
            <p className="text-white/70 leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet consectetur. Sed molestie odio lectus
              venenatis proin nunc donec venenatis. Egestas enim a quam sed
              magna quis vehicula.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row md:col-span-2 gap-8 lg:gap-24 md:justify-end">
            <div>
              <h3 className="text-4xl md:text-6xl font-bold">
                <span className="text-white">10</span>
                <span className="text-[#4ecdc4]">+</span>
              </h3>
              <p className="text-white/70 text-sm mt-1">Companies</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-6xl font-bold">
                <span className="text-white">5</span>
                <span className="text-[#4ecdc4]">+</span>
              </h3>
              <p className="text-white/70 text-sm mt-1">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="px-[6%] py-16 md:pt-[160px]">
        {/* Filter Buttons */}
        <motion.div
          className="flex justify-start flex-wrap gap-3 mb-12"
          initial="hidden"
          animate="show"
          variants={{
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.category)}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full border text-sm md:text-base transition-all ${
                activeFilter === filter.category
                  ? "bg-[#4ecdc4] border-[#4ecdc4] text-black font-medium"
                  : "bg-transparent border-white/30 text-white hover:bg-[#4ecdc4] hover:border-[#4ecdc4] hover:text-black"
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="relative z-[1]">
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <Link key={item.id} to={item.link}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="relative bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden transition-all hover:-translate-y-2 hover:border-[#4ecdc4] hover:shadow-[0_10px_30px_rgba(78,205,196,0.2)] group cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                        item.objectFit === "cover"
                          ? "object-cover"
                          : "object-contain"
                      }`}
                    />
                  </div>

                  {/* Text Content */}
                  <div className="p-6 bg-black">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-[#4ecdc4] transition-colors flex-1 pr-2">
                        {item.name}
                      </h3>
                      <span className="text-white/60 group-hover:text-[#4ecdc4] transition-colors">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </span>
                    </div>
                    <p className="text-white/50 text-xs md:text-sm">
                      {item.year}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-white/60 text-lg">
              No items found in this category.
            </p>
          </motion.div>
        )}
      </section>

      {/* Stats Section */}
      <section className="px-[6%] py-20 border-t border-[#333] text-center">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            { number: "10+", label: "Portfolio Companies" },
            { number: "5", label: "Core Sectors" },
            { number: "$50M+", label: "Total Investment" },
            { number: "100%", label: "Success Rate" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-xl border border-[#4ecdc4]/20 bg-gradient-to-br from-[#4ecdc4]/5 to-black/30"
            >
              <div className="text-[40px] md:text-[50px] font-bold text-[#4ecdc4] mb-2">
                {stat.number}
              </div>
              <div className="text-[16px] text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <div className="px-[6%] md:px-[8rem] mt-24 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#4ecdc4]/10 to-[#4ecdc4]/5 rounded-2xl p-10 md:p-16 text-center"
        >
          <h2 className="text-[32px] md:text-[48px] leading-[1.2] mb-6 font-bold">
            Ready to Partner With Us?
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[1.6] text-white/70 max-w-[600px] mx-auto mb-8">
            We're always looking for innovative opportunities and strategic
            partnerships that align with our vision.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#4ecdc4] text-black px-8 py-4 rounded-lg font-medium text-[18px] hover:opacity-90 transition-opacity"
          >
            Get in Touch <span>→</span>
          </a>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
