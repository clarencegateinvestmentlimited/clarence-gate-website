import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import TestimonialSlider from "@/components/TestimonialSlider";
import TeamSection from "@/components/TeamSection";

// --- UPGRADED COUNTER COMPONENT ---
const AnimatedCounter = ({ target, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 40, damping: 20 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) count.set(target);
  }, [isInView, target, count]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      setDisplay(Math.floor(latest).toLocaleString());
    });
  }, [rounded]);

  return <span ref={ref}>{display}</span>;
};

export default function AboutPage() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  return (
    <div className="bg-[#020202] text-white overflow-x-hidden font-raleway selection:bg-[#94257a]/30">
      <Header />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* --- HERO SECTION --- */}
        <section className="px-6 md:px-[10%] pt-[160px] md:pt-[220px] pb-24 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#94257a]/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-5xl relative z-10">
            {/* <motion.div variants={fadeInUp} initial="hidden" animate="show" className="mb-6">
              <span className="text-[#94257a] text-[10px] font-bold tracking-[0.6em] uppercase">Overview</span>
              <div className="w-12 h-[1px] bg-zinc-800 mt-2" />
            </motion.div> */}

            <motion.h1 
              variants={fadeInUp} 
              initial="hidden" 
              animate="show"
              className="text-5xl md:text-5xl font-black mb-12 tracking-tighter"
            >
              <Typewriter
                words={['About Us']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={300}
                deleteSpeed={200}
              />
            </motion.h1>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8 text-zinc-400 md:text-zinc-200 text-lg md:text-xl  leading-relaxed text-justify"
            >
              <motion.p variants={fadeInUp}>
                Founded in 2010, <span className="text-white font-normal">Caladium Consulting Limited</span> has established itself as a leader in strategy consulting across Africa. Our mission is clear: to leverage global expertise and deliver unparalleled value to local enterprises. We have supported over 300 SMEs and large enterprises, driving their growth and stability through transformative strategies.
              </motion.p>
              <motion.p variants={fadeInUp}>
                At the heart of our efforts is the <span className="text-white font-normal text-italic italic">Caladium SME Community</span>, an initiative that empowers over 10,000 SMEs through key programs such as the Caladium Lagos SME Bootcamp, the Caladium SME Fellowship Programme, and the 2024 Caladium Nigeria SME Report. The SME Bootcamp brings together thousands of SMEs for networking, expert-led sessions, and capacity building. 
              </motion.p>
              <motion.p variants={fadeInUp}>
                The Caladium Nigeria SME Report interviewed over 1,500 businesses and industry experts to uncover the real challenges and opportunities of doing business in Nigeria, providing valuable insights for entrepreneurs and policymakers alike. Our core mission remains unchanged: to deliver strategic advisory services that produce tangible, lasting results for African organizations.
              </motion.p>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Link to="/contact" className="group inline-flex items-center gap-6 mt-12">
                <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-white/50 group-hover:text-white transition-colors underline underline-offset-8 decoration-[#94257a]">
                  Initiate Conversation
                </span>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#94257a] group-hover:bg-[#94257a]/5 transition-all duration-500">
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* --- STATS SECTION --- */}
        <section className="px-6 md:px-[8%] py-24 bg-white/[0.01] border-y border-white/5">
          <div className="flex flex-wrap justify-around items-center gap-12">
            {[
              { num: 10, label: "Network Size", suffix: "k+" },
              { num: 300, label: "Projects Delivered", suffix: "+" },
              { num: 200, label: "Strategic Partners", suffix: "+" },
              { num: 21, label: "Industry Awards", suffix: "+" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl md:text-7xl font-light text-white mb-2 flex items-baseline justify-center gap-1">
                  <AnimatedCounter target={item.num} />
                  <span className="text-[#94257a] text-2xl font-bold">{item.suffix}</span>
                </div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 group-hover:text-zinc-300 transition-colors font-bold">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        <TeamSection/>

        {/* --- MISSION & VISION --- */}
        <section className="px-6 md:px-[10%] py-32 space-y-40">
          {/* Mission */}
          <motion.div 
            className="grid md:grid-cols-2 gap-20 items-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeInUp} className="order-2 md:order-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-[1px] bg-[#94257a]" />
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Our Mission</h2>
              </div>
              <p className="text-zinc-400 text-lg leading-relaxed font-light italic">
                Our mission is to bring world-class strategy advisory services to African organizations, providing high-level insights typically available to global enterprises. We help African companies achieve their full potential in an increasingly competitive world.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="order-1 md:order-2 relative group">
              <div className="absolute inset-0 bg-[#94257a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl z-10" />
              <div className="overflow-hidden rounded-2xl aspect-[4/3] border border-white/5">
                <img src="/Images/Mission_img.jpeg" alt="Mission" className="w-full h-full object-cover  transition-all duration-700 scale-110 group-hover:scale-100" />
              </div>
            </motion.div>
          </motion.div>

          {/* Vision */}
          <motion.div 
            className="grid md:grid-cols-2 gap-20 items-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeInUp} className="relative group">
              <div className="absolute inset-0 bg-[#94257a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl z-10" />
              <div className="overflow-hidden rounded-2xl aspect-[4/3] border border-white/5">
                <img src="/Images/Vison_img.jpeg" alt="Vision" className="w-full h-full object-cover  transition-all duration-700 scale-110 group-hover:scale-100" />
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-[1px] bg-[#94257a]" />
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Our Vision</h2>
              </div>
              <p className="text-zinc-400 text-lg leading-relaxed font-light italic">
                By 2028, Caladium Consulting aims to be among the top five strategy and business advisory brands in Nigeria, empowering businesses to achieve sustainable success and lasting growth through innovation.
              </p>
            </motion.div>
          </motion.div>
        </section>

        <TestimonialSlider />
        <Footer />
      </motion.div>
    </div>
  );
}