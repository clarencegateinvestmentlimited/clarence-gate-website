import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string[];
  index: number;
}

const ProcessStep = ({ number, title, description, index }: ProcessStepProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  // Mouse position for the spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const yTranslate = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <div ref={ref} className="relative md:mb-32 mb-10 last:mb-0">
      {/* Central Timeline Point */}
      <motion.div 
        style={{ opacity, scale: scrollYProgress }}
        className="absolute left-1/2 -translate-x-1/2 top-12 w-3 h-3 rounded-full border-2 border-[#94257a] bg-[#020202] z-20 hidden lg:block" 
      />

      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start`}>
        <motion.div 
          style={{ y: yTranslate, opacity }}
          onMouseMove={handleMouseMove}
          className="w-full lg:w-[45%] px-4 group cursor-default"
        >
          {/* Main Card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-zinc-900/50 to-zinc-950 p-8 md:p-12 transition-all duration-500 hover:border-[#94257a]/40">
            
            {/* Spotlight Overlay */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
              style={{
                background: useTransform(
                  [mouseX, mouseY],
                  ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(148,37,122,0.1), transparent 40%)`
                ),
              }}
            />

            <div className="relative z-10">
              {/* Header Row: Removed redundant "Step" text */}
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-3">
                   {/* Minimalist Phase Indicator */}
                   <div className="h-[1px] w-8 bg-[#94257a]" />
                   <span className="text-zinc-500 font-sans font-semibold text-[11px] tracking-[0.2em] uppercase">
                    Phase
                  </span>
                </div>
                
                {/* Large Stylized Number */}
                <motion.span 
                  className="text-white/10 font-sans font-black text-7xl leading-none italic group-hover:text-[#94257a]/20 transition-colors duration-700"
                >
                  {number}
                </motion.span>
              </div>

              <h3 className="font-sans font-bold text-2xl md:text-3xl text-white mb-6 group-hover:translate-x-2 transition-transform duration-500">
                {title}
              </h3>

              <div className="space-y-4">
                {description.map((para, idx) => (
                  <p key={idx} className="text-zinc-500 text-base md:text-lg font-light leading-relaxed group-hover:text-zinc-400 transition-colors duration-500">
                    {para}
                  </p>
                ))}
              </div>

              {/* Decorative Corner Accent that appears on hover */}
              <div className="mt-8 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#94257a]" />
                  <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">In Progress</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* This creates the gap in the center */}
        <div className="hidden lg:block lg:w-[10%]" />
        <div className="hidden lg:block lg:w-[45%]" />
      </div>
    </div>
  );
};

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const steps = [
    {
      number: "01",
      title: "Insight & Diagnosis",
      description: [
        "We leverage deep market research to understand the real hurdles facing African businesses.",
        "Diagnostic assessments uncover operational gaps and market opportunities ripe for transformation.",
      ],
    },
    {
      number: "02",
      title: "Strategy & Design",
      description: [
        "We craft tailored strategic frameworks and capacity-building curriculums.",
        "We develop bespoke growth strategies that align global expertise with local realities.",
      ],
    },
    {
      number: "03",
      title: "Execution & Growth",
      description: [
        "We move from planning to impact, delivering hands-on training to over 10,000 SMEs.",
        "Implementing transformative strategies to drive stability and long-term success.",
      ],
    },
  ];

  return (
    <section ref={containerRef} id="processSection" className="relative bg-[#050505] py-40 px-6 md:px-[5%] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <header className="md:mb-28 mb-9 flex items-end gap-6">
          <div className="flex flex-col">
            <h2 className="font-sans font-bold text-3xl md:text-5xl text-white tracking-tighter mb-2">
              Our <span className="text-zinc-400 italic font-extralight">Workflow</span>
            </h2>
            <div className="h-[2px] w-full bg-gradient-to-r from-[#94257a] to-transparent" />
          </div>
          <span className="text-zinc-400 font-sans text-sm mb-4 hidden md:block tracking-widest uppercase">
            3 Phases of Excellence
          </span>
        </header>

        <div className="relative">
          {/* Subtle Spine Background */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/5 hidden lg:block" />
          
          {/* Growing Progress Line */}
          <motion.div 
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-[#94257a] hidden lg:block z-10 shadow-[0_0_15px_#94257a]" 
          />

          <div className="md:space-y-4 space-y-2">
            {steps.map((step, index) => (
              <ProcessStep key={index} {...step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;