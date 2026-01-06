import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string[];
  index: number;
}

const ProcessStep = ({ number, title, description, index }: ProcessStepProps) => {
  const ref = useRef(null);
  
  // Use scroll progress for individual element animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"],
  });

  // Sophisticated animations for scale, opacity, and blur
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], ["blur(10px)", "blur(0px)", "blur(10px)"]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  return (
    <motion.section
      ref={ref}
      style={{ scale, opacity, filter: blur, y }}
      className="relative min-h-[60vh] flex flex-col justify-center py-20 border-b border-white/5"
    >
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Number - The "Ghost" Accent */}
        <div className="lg:col-span-4">
          <span className="font-raleway font-black text-[100px] md:text-[150px] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent">
            {number}
          </span>
        </div>

        {/* Content */}
        <div className="lg:col-span-8 pt-4 md:pt-12">
          <div className="flex items-center gap-4 mb-6">
             <div className="w-8 h-[1px] bg-[#94257a]" />
             <h3 className="font-raleway font-bold text-2xl md:text-4xl text-white tracking-tight">
               {title}
             </h3>
          </div>
          
          <div className="space-y-6">
            {description.map((para, idx) => (
              <p key={idx} className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Insight & Diagnosis",
      description: [
        "We begin by leveraging deep market research such as our annual Nigeria SME Report to understand the real hurdles facing African businesses.",
        "For our corporate clients, we conduct thorough diagnostic assessments to uncover operational gaps, market opportunities, and areas ripe for strategic transformation.",
      ],
    },
    {
      number: "02",
      title: "Strategy & Design",
      description: [
        "We craft tailored strategic frameworks and capacity-building curriculums. This involves designing expert led sessions for the Caladium Lagos SME Bootcamp.",
        "We develop bespoke growth strategies that align global expertise with local realities, ensuring our solutions are actionable and relevant.",
      ],
    },
    {
      number: "03",
      title: "Execution & Growth",
      description: [
        "We move from planning to impact. We deliver hands-on training to over 10,000 SMEs and provide ongoing advisory support to large enterprises.",
        "By implementing transformative strategies, we drive tangible stability, scalability, and long-term success for every organization.",
      ],
    },
  ];

  return (
    <section id="processSection" className="relative bg-[#020202] px-6 md:px-[10%] py-32 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#94257a]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-24 flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="text-[#94257a] text-[10px] font-bold tracking-[0.5em] uppercase">Workflow</span>
            <div className="w-12 h-[1px] bg-zinc-800" />
          </motion.div>
          <h2 className="font-raleway font-bold text-4xl md:text-7xl text-white mb-0 tracking-tighter">
            Our <span className="text-zinc-700 italic font-light">Approach</span>
          </h2>
        </div>

        {/* Steps Container */}
        <div className="relative mt-0">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} index={index} />
          ))}
        </div>
        
        {/* Bottom Spacer for final scroll feel */}
        <div className="h-[10vh]" />
      </div>
    </section>
  );
};

export default Process;