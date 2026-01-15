import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import TestimonialSlider from "@/components/TestimonialSlider";
import TeamSection from "@/components/TeamSection";

// --- HELPER FOR CUBIC MOVEMENT ---
const CubicSection = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <div style={{ perspective: "1500px" }} className={className}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// --- UPGRADED COUNTER ---
const AnimatedCounter = ({ target }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 40, damping: 20 });
  const [display, setDisplay] = useState("0");

  useEffect(() => { if (isInView) count.set(target); }, [isInView, target, count]);
  useEffect(() => rounded.on("change", (v) => setDisplay(Math.floor(v).toLocaleString())), [rounded]);

  return <span ref={ref}>{display}</span>;
};

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="bg-[#020202] text-white overflow-x-hidden font-sans selection:bg-[#94257a]/30">
      <Header />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>

        {/* --- HERO SECTION --- */}
<section className="relative overflow-hidden">
  {/* Moving Background Layer */}
  <div className="absolute inset-0 z-0">
    <motion.div
      initial={{ scale: 1.1, x: "-1%" }}
      animate={{ 
        x: ["-1%", "1%", "-1%"],
        y: ["-0.5%", "0.5%", "-0.5%"] 
      }}
      transition={{ 
        duration: 20, 
        repeat: Infinity, 
        ease: "linear" 
      }}
      className="absolute inset-0 w-[105%] h-[105%]"
    >
      <img 
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071" 
        alt="Background"
        className="w-full h-full object-cover opacity-20 grayscale" 
      />
    </motion.div>
    {/* Gradients to preserve your exact look and readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-[#020202]/40 to-transparent z-10" />
    <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202] z-10" />
  </div>

  {/* Your Original CubicSection and Content */}
  <CubicSection className="relative z-20">
    <section className="px-6 md:px-[10%] pt-[160px] md:pt-[120px] pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#94257a]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl relative z-10">
        
        {/* THE UNIQUE HEADER DESIGN - Unchanged */}
        <div className="relative mb-16 mt-0">
          <motion.h1 
            variants={fadeInUp} 
            initial="hidden" 
            animate="show"
            className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.85]"
          >
            <span className="block text-white">About</span>
            <span className="block text-[#94257a] italic font-light ml-[10%] md:ml-[12%] mt-4">
              <Typewriter 
                words={['Us.', 'The Firm.', 'Our Legacy.']} 
                loop={0} 
                cursor 
                cursorStyle="_" 
                typeSpeed={80} 
                deleteSpeed={50}
              />
            </span>
          </motion.h1>
        </div>

        {/* Content Grid - Unchanged */}
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-9 space-y-10 text-zinc-200 text-lg md:text-xl font-light leading-relaxed text-justify">
            <p>
              Founded in 2010, <span className="text-white font-medium">Caladium Consulting Limited</span> has established itself as a leader in strategy consulting across Africa. Our mission is clear: to leverage global expertise and deliver unparalleled value to local enterprises. We have supported over 300 SMEs and large enterprises, driving their growth and stability through transformative strategies.
            </p>
            <p>
              At the heart of our efforts is the Caladium SME Community, an initiative that empowers over 10,000 SMEs through key programs such as the Caladium Lagos SME Bootcamp, the Caladium SME Fellowship Programme, and the 2024 Caladium Nigeria SME Report.
            </p>
            <p>
              While we have expanded our reach and impact over the years, our core mission remains unchanged: to deliver strategic advisory services that produce tangible, lasting results for African organizations.
            </p>
          </div>
          
          <div className="md:col-span-3 flex md:justify-end items-start pt-2">
             <Link to="/contact" className="group flex flex-col items-start md:items-end gap-5">
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#94257a] group-hover:bg-[#94257a]/5 transition-all duration-700">
                  <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <span className="text-[9px] font-bold tracking-[0.5em] uppercase text-white/30 group-hover:text-white transition-colors duration-500">
                  Network
                </span>
             </Link>
          </div>
        </div>
      </div>
    </section>
  </CubicSection>
</section>

        {/* STATS SECTION */}
        <CubicSection className="px-6 md:px-[8%] py-24 bg-white/[0.01] border-y border-white/5">
          <div className="flex flex-wrap justify-around items-center gap-12">
            {[{ num: 10, label: "Network Size", suffix: "k+" }, { num: 300, label: "Projects Delivered", suffix: "+" }, { num: 200, label: "Strategic Partners", suffix: "+" }, { num: 21, label: "Industry Awards", suffix: "+" }].map((item, i) => (
              <motion.div key={i} className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="text-5xl md:text-7xl font-light text-white mb-2 flex items-baseline justify-center gap-1">
                  <AnimatedCounter target={item.num} /><span className="text-[#94257a] text-2xl font-bold">{item.suffix}</span>
                </div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 font-bold">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </CubicSection>

        {/* MISSION & VISION */}
        <section className="px-6 md:px-[10%] py-32 space-y-40">
          <CubicSection>
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-[1px] bg-[#94257a]" />
                  <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Our Mission</h2>
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed font-light italic">Our mission is to bring world-class strategy advisory services to African organizations, Providing high-level insights typically available to global enterprises.</p>
              </div>
              <div className="order-1 md:order-2 overflow-hidden rounded-2xl aspect-[4/3] border border-white/5">
                <img src="/Images/Mission_img.jpeg" alt="Mission" className="w-full h-full object-cover grayscale-0 hover:grayscale transition-all duration-700" />
              </div>
            </div>
          </CubicSection>

          <CubicSection>
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="overflow-hidden rounded-2xl aspect-[4/3] border border-white/5">
                <img src="/Images/Vison_img.jpeg" alt="Vision" className="w-full h-full object-cover grayscale-0 hover:grayscale transition-all duration-700" />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-[1px] bg-[#94257a]" />
                  <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Our Vision</h2>
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed font-light italic">By 2028, Caladium Consulting aims to be among the top five strategy and business advisory brands in Nigeria, empowering sustainable growth through innovation.</p>
              </div>
            </div>
          </CubicSection>
        </section>

        <TeamSection />
        <TestimonialSlider />
        <Footer />
      </motion.div>
    </div>
  );
}