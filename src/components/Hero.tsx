import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const bgX = useTransform(smoothX, [-500, 500], [20, -20]);
  const bgY = useTransform(smoothY, [-500, 500], [20, -20]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const textBlur = {
    hidden: { opacity: 0, filter: "blur(20px)", scale: 1.1 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-[#020202] text-white overflow-hidden"
    >
      {/* BACKGROUND */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#94257a]/10 blur-[160px] rounded-full" />
      </motion.div>

      <div className="relative z-20 max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Cinematic Headline */}
        <motion.h1
          variants={textBlur}
          className="text-center font-raleway font-bold text-[40px] md:text-[65px] leading-[1.05] tracking-[-0.04em] mb-8"
        >
          Read the 2024 Caladium <br />
          <span className="relative inline-block text-[#94257a]">
            Nigerian SME Report
            <motion.div 
               initial={{ scaleX: 0 }}
               animate={{ scaleX: 1 }}
               transition={{ delay: 1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
               className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#94257a] to-transparent origin-center" 
            />
          </span>
        </motion.h1>

        {/* Sophisticated Paragraph with Offset Text */}
        <motion.p
          variants={fadeInUp}
          className="text-center text-white text-lg md:text-[22px] max-w-2xl font-light leading-relaxed mb-14"
        >
          Access insights, trends, challenges and outlook about the Nigerian SME 
          <span className="block text-left text-white">
            Ecosystem.
          </span>
        </motion.p>

        {/* Action Row */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center gap-10"
        >
          <Link
            to="/portfolio"
            className="group relative px-12 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Apply for Current Caladium Job Openings</span>
            <div className="absolute inset-0 bg-[#94257a] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
          </Link>
          
          <Link
            to="/contact"
            className="group flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase
 text-zinc-300 hover:text-white transition-all"
          >
            2024 Caladium Nigerian SME Report
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 group-hover:border-[#94257a] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Side Detail */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.5 }}
        className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2"
      >
        <div className="h-20 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <p className="text-[9px] tracking-[0.6em] text-white/30 uppercase mt-4 mb-4" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Insight. Data. Scale.
        </p>
        <div className="h-20 w-[1px] bg-gradient-to-t from-transparent via-white/20 to-transparent" />
      </motion.div>
      
      {/* <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#020202] to-transparent z-10" /> */}
    </motion.section>
  );
};

export default Hero;