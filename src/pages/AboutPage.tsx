import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";


export default function AboutPage() {
  const coreValues = [
    {
      icon: "💡",
      title: "Innovation",
      text: "We embrace forward-thinking approaches and cutting-edge solutions that drive progress and create competitive advantages.",
    },
    {
      icon: "🤝",
      title: "Integrity",
      text: "We conduct business with the highest ethical standards, transparency, and accountability in every decision we make.",
    },
    {
      icon: "🌱",
      title: "Sustainability",
      text: "We build enterprises designed to thrive for generations, creating value that extends beyond financial returns.",
    },
    {
      icon: "⚡",
      title: "Excellence",
      text: "We pursue operational excellence and best-in-class performance across every aspect of our portfolio.",
    },
    {
      icon: "🎯",
      title: "Strategic Focus",
      text: "We maintain disciplined investment criteria and concentrate our resources where we can create maximum impact.",
    },
    {
      icon: "🌍",
      title: "Community Impact",
      text: "We measure success not just in returns, but in the positive change we create in communities across Africa.",
    },
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className="bg-black text-white overflow-x-hidden font-raleway">
      <Header />

      {/* --- PAGE FADE-IN WRAPPER --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* --- HERO SECTION WITH ABOUT INTRO --- */}
        <motion.section
          className="px-[8%] md:pt-[190px] pt-[160px] pb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              About Us
            </h1>
            <div className="space-y-4 text-white/80 text-base md:text-lg leading-relaxed">
              <p>
                Clarence Gate is a diversified investment holding company committed to building enduring businesses across Africa's most dynamic sectors: Real Estate, Finance & Insurance, Hospitality, Trading, and Energy & Infrastructure.
              </p>
              <p>
                With a focus on sustainability, innovation, and long-term value creation, Clarence Gate identifies and develops high-growth opportunities that drive economic progress while delivering measurable impact for stakeholders.
              </p>
              <p>
                Through its investment & subsidiaries, the Group provides a platform for strategic partnerships, operational excellence, and responsible growth, positioning Clarence Gate as a trusted name in enterprise development and investment across the continent.
              </p>
              <p>
                Our brand stands for integrity, foresight, and resilience, the core principles guiding every decision, partnership, and venture within the Clarence Gate ecosystem.
              </p>
            </div>
            <motion.button
              className="mt-8 flex items-center gap-2 text-white hover:text-teal-300 transition-colors group"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Link to ="/contact">
              <span className="text-base md:text-lg">Get in Touch</span></Link>
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>
        </motion.section>

        {/* --- LARGE IMAGE SECTION --- */}
        <motion.section
          className="px-[8%] py-12"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[21/9] group">
            <img
              src="/Images/projects3.jpg"
              alt="Clarence Gate Building"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        </motion.section>

        {/* --- STATS SECTION --- */}
        <motion.section
          className="px-[8%] py-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {[
              { num: "10", label: "Companies", suffix: "+" },
              { num: "10", label: "Years", suffix: "+" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <div className="flex items-start justify-center mb-2">
                  <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-white">
                    {item.num}
                  </span>
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-300 mt-2">
                    {item.suffix}
                  </span>
                </div>
                <div className="text-white/70 text-lg md:text-xl font-medium">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- MISSION & VISION WITH IMAGES --- */}
        <motion.section
          className="px-[8%] py-20 border-t border-gray-700"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="space-y-16">
            {/* Mission */}
            <motion.div 
              className="grid md:grid-cols-2 gap-8 items-center"
              variants={fadeInUp}
            >
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <img src="/Images/Vector 2.png" alt="" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Our Mission
                  </h2>
                </div>
                <div className="p-6 rounded-lg">
                  <p className="text-base md:text-lg leading-7 text-white/90">
                    To identify, invest in, and nurture high-potential enterprises that deliver sustainable value, fostering economic growth, while fostering excellence and integrity across every venture within our portfolio.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group">
                  <img
                    src="/Images/projects2.jpg"
                    alt="Our Mission"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div 
              className="grid md:grid-cols-2 gap-8 items-center"
              variants={fadeInUp}
            >
              <div className="order-2">
                <div className="flex items-center gap-3 mb-6">
                   <img src="/Images/Vector 2.png" alt="" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Our Vision
                  </h2>
                </div>
                <p className="text-base md:text-lg leading-7 text-white/90">
                  To be a leading pan-African investment powerhouse recognized for shaping industries, empowering communities, and driving long-term value and sustainable transformation across generations.
                </p>
              </div>
              <div className="order-1">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group">
                  <img
                    src="/Images/projects5.jpg"
                    alt="Our Vision"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* --- OUR STORY TIMELINE --- */}
        <motion.section
          className="px-[8%] py-20 border-t border-gray-700"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <img src="/Images/Vector 2.png" alt="" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Our Story Behind the Firm
              </h2>
            </div>
            <p className="text-white/70 text-base md:text-lg max-w-3xl">
              Clarence Gate was founded on a simple yet powerful belief: that Africa's greatest opportunities lie in building sustainable enterprises that address real needs while generating exceptional returns.
            </p>
          </div>

          {/* Timeline Cards - Staggered Layout */}
          <div className="relative max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  year: "2025",
                  title: "Expansion & Innovation",
                  text: "Clarence Gate expands into technology and renewable energy sectors, positioning itself as a forward-thinking investment leader across Africa.",
                  offset: "lg:mt-16",
                },
                {
                  year: "2024",
                  title: "Strategic Growth",
                  text: "Diversified portfolio across finance, hospitality, and consulting. Established strategic partnerships with industry leaders to drive sustainable growth.",
                  offset: "lg:mt-12 lg:mb-4",
                },
                {
                  year: "2023",
                  title: "Foundation & Vision",
                  text: "Founded with a mission to transform Africa's business landscape. Initial investments in real estate and energy sectors laid the groundwork for future expansion.",
                  offset: "lg:mt-18 lg:mb-8",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`bg-gradient-to-br from-teal-900/30 to-teal-950/20 border border-teal-500/30 rounded-2xl p-6 md:p-8 hover:border-teal-400/50 transition-all duration-300 group ${item.offset}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors">
                    {item.year}
                  </h3>
                  <h4 className="text-xl md:text-2xl font-semibold text-teal-300 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-white/70 text-sm md:text-base leading-6">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* --- CORE VALUES (3D FLIP) --- */}
        <motion.section
          className="px-[8%] py-20 border-t border-gray-700 relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <style>{`
            .flip-card {
              perspective: 1200px;
              height: 260px;
            }
            .flip-card-inner {
              position: relative;
              width: 100%;
              height: 100%;
              transform-style: preserve-3d;
              transition: transform 0.8s ease;
            }
            .flip-card:hover .flip-card-inner {
              transform: rotateY(180deg);
            }
            .flip-card-front,
            .flip-card-back {
              position: absolute;
              width: 100%;
              height: 100%;
              backface-visibility: hidden;
              border-radius: 16px;
              overflow: hidden;
            }
            .flip-card-back {
              transform: rotateY(180deg);
            }
          `}</style>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold">
              Our Core Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="flip-card"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="flip-card-inner">
                  {/* FRONT SIDE */}
                  <div className="flip-card-front p-10 bg-[#1a1a1a] border h-full border-white/10 rounded-xl flex flex-col items-start justify-start transition hover:-translate-y-1">
                    <div className="w-14 bg-teal-300 rounded-full flex items-center h-20 justify-center mb-6 text-2xl">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <h5>{value.text}</h5>
                  </div>

                  {/* BACK SIDE */}
                  <div className="flip-card-back p-10 bg-[#0f1a1a] border border-teal-300/20 rounded-xl flex flex-col items-center justify-center text-center">
                    <h3 className="text-2xl font-semibold text-teal-300 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-white/70 text-base leading-7">
                      {value.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- OUR PROJECTS --- */}
        <motion.section
          className="px-3 md:px-[8%] py-20 border-t border-gray-700"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold">Our Projects</h2>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              A glimpse into some of the premium residential and commercial
              properties we've developed across Africa.
            </p>
          </div>

          <div className="space-y-20">
            {/* PROJECT GROUP 1 */}
            <motion.div
              className="flex flex-col lg:flex-row gap-8 items-stretch"
              variants={fadeInUp}
            >
              <div className="flex-1 relative group overflow-hidden rounded-2xl">
                <img
                  src="/Images/projects5.jpg"
                  alt="Project 1"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                  <h3 className="text-xl font-semibold text-white">
                    Lagos Smart Estate
                  </h3>
                </div>
              </div>

              <div className="flex flex-col gap-8 flex-1">
                {[
                  {
                    src: "/Images/projects2.jpg",
                    title: "Abuja Business Hub",
                  },
                  {
                    src: "/Images/projects3.jpg",
                    title: "Accra Luxury Homes",
                  },
                ].map((p, i) => (
                  <motion.div
                    key={i}
                    className="relative group overflow-hidden rounded-2xl h-1/2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={p.src}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                      <h3 className="text-xl font-semibold text-white">
                        {p.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* PROJECT GROUP 2 */}
            <motion.div
              className="flex flex-col lg:flex-row-reverse gap-8 items-stretch"
              variants={fadeInUp}
            >
              <div className="flex-1 relative group overflow-hidden rounded-2xl">
                <img
                  src="/Images/projects4.jpg"
                  alt="Project 4"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                  <h3 className="text-xl font-semibold text-white">
                    Nairobi Tech Towers
                  </h3>
                </div>
              </div>

              <div className="flex flex-col gap-8 flex-1">
                {[
                  {
                    src: "/Images/projects6.jpg",
                    title: "Cape Town Seaside Villas",
                  },
                  {
                    src: "/Images/projects5.jpg",
                    title: "Accra Green Residences",
                  },
                ].map((p, i) => (
                  <motion.div
                    key={i}
                    className="relative group overflow-hidden rounded-2xl h-1/2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={p.src}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                      <h3 className="text-xl font-semibold text-white">
                        {p.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* --- IMPACT STATS --- */}
        <motion.section
          className="px-[8%] py-20 border-t border-gray-700"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold">
              Our Impact in Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-4 max-w-5xl mx-auto">
            {[
              { num: "10+", label: "Portfolio Companies" },
              // { num: "$50M+", label: "Capital Deployed" },
              // { num: "5+", label: "Core Sectors" },
              { num: "10+", label: "Years of Excellence" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="lg:text-6xl text-[40px] font-bold text-teal-300 mb-2">
                  {item.num}
                </div>
                <div className="text-white/70 text-lg">{item.label}</div>
              </motion.div>
            ))}
          </div>
          
        </motion.section>
        
      </motion.div>
       <section className="bg-black text-white py-20 px-[8%]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {/* Section Title */}
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12"
          variants={fadeInUp}
        >
          Visit Our Office
        </motion.h2>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Image */}
          <motion.div
            className="relative group"
            variants={fadeInUp}
          >
            <div className="relative overflow-hidden rounded-2xl border-4 border-teal-500/60">
              <img
                src="/Images/projects2.jpg"
                alt="Office Interior"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </motion.div>

          {/* Right: Office Details */}
          <motion.div
            className="space-y-8"
            variants={fadeInUp}
          >
            {/* Location Title */}
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Lagos, Nigeria
              </h3>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Sed molestie odio lectus venenatis porttis nunc donec velit. Egestas enim a quam magna quis vehicula.
              </p>
            </div>

            {/* Contact Info Grid */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <motion.div
                className="space-y-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 text-white/80">
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">Email</span>
                </div>
                <a 
                  href="mailto:info@clarencegroup.com"
                  className="block text-white/90 hover:text-teal-300 transition-colors text-sm md:text-base"
                >
                  info@clarencegroup.com
                </a>
              </motion.div>

              {/* Location */}
              <motion.div
                className="space-y-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 text-white/80">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">Location</span>
                </div>
                <p className="text-white/90 text-sm md:text-base">
                  Lorem ipsum dolor street, Lagos Nigeria
                </p>
              </motion.div>

              {/* Phone Number */}
              <motion.div
                className="space-y-2 md:col-span-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 text-white/80">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">Phone number</span>
                </div>
                <a 
                  href="tel:+2348130402039"
                  className="block text-white/90 hover:text-teal-300 transition-colors text-sm md:text-base"
                >
                  (234) 81 3040 - 2039
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>

      <Footer />
    </div>
  );
}