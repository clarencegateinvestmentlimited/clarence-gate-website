import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, BarChart3 } from "lucide-react";

// --- Sub-Component: Strategy Content ---
const StrategyView = () => {
  const strategyData = [
    {
      label: "Core Services",
      tag: "Strategy",
      title: "Strategy Development",
      description: "At Caladium Consulting, we create strategic success. We empower you to make informed decisions and optimize local insights through theoretical frameworks turned into actionable roadmaps.",
      points: [
        "Market Entry & Expansion Strategy",
        "Business Model Innovation",
        "Detailed Execution Roadmaps"
      ],
      image: "https://images.unsplash.com/photo-1454165833767-027ffea9e7a7?q=80&w=2070",
      imageLeft: true 
    },
    {
      label: "Core Services",
      tag: "Execution",
      title: "Strategy Execution",
      description: "Transforming plans into performance. We bridge the gap between ambitious goals and measurable results by aligning resources and ensuring governance.",
      points: [
        "Performance Management & Monitoring",
        "Resource Optimization",
        "Risk Management & Compliance"
      ],
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070",
      imageLeft: false
    }
  ];

  return (
    <div className="space-y-16">
      <div className="grid gap-16 md:gap-24">
        {strategyData.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20 group"
          >
            {/* Image Container */}
            <div className={`relative w-full lg:w-1/2 aspect-[4/3] overflow-hidden rounded-xl bg-zinc-900 ${!item.imageLeft ? 'lg:order-last' : ''}`}>
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute top-6 right-6">
                <span className="bg-black/40 backdrop-blur-xl text-white text-[9px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-white/10 font-bold">
                  {item.tag}
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center py-4">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-8 bg-[#76B82D]" />
                <span className="text-[#76B82D] text-[10px] uppercase tracking-[0.4em] font-bold">
                  {item.label}
                </span>
              </div>
              
              <h3 className="text-white text-3xl md:text-5xl font-light mb-8 leading-tight">
                {item.title}
              </h3>
              
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-10 font-light max-w-lg">
                {item.description}
              </p>
              
              <div className="grid gap-4">
                {item.points.map((point, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#76B82D] group-hover/item:scale-150 transition-transform" />
                    <span className="text-zinc-300 text-sm tracking-wide font-light group-hover/item:text-white transition-colors">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <motion.button 
                whileHover={{ x: 5 }}
                className="mt-12 flex items-center gap-2 text-white/50 text-[10px] uppercase tracking-[0.2em] font-bold hover:text-[#76B82D] transition-colors"
              >
                Inquire further <ArrowUpRight size={14} />
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Sub-Component: Case Study Content ---
const CaseStudyView = () => (
  <div className="grid md:grid-cols-2 gap-12">
    {[
      {
        title: "The Futum Culture and Enterprise Transformation Experience",
        client: "Dutum Company Limited",
        description: "Nearly 4-decade-old family construction company with legacy footprints across Nigeria.",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
      },
      {
        title: "The Review and Transformation of Organization-Wide Processes",
        client: "Sanlam Life Insurance",
        description: "Streamlining for success: Sanlam revamps processes, accelerates claims, and elevates customer satisfaction.",
        img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070"
      }
    ].map((item, i) => (
      <div key={i} className="group flex flex-col">
        <div className="relative aspect-video overflow-hidden rounded-xl mb-6 bg-zinc-900">
          <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt={item.title} />
        </div>
        <div className="flex flex-col flex-grow">
          <span className="text-[#76B82D] text-[10px] uppercase tracking-[0.3em] font-bold mb-3 block">{item.client}</span>
          <h3 className="text-xl text-white font-medium mb-4 group-hover:text-[#76B82D] transition-colors duration-300 leading-snug">{item.title}</h3>
          <p className="text-zinc-500 text-sm font-light mb-6 line-clamp-2">{item.description}</p>
          <div className="mt-auto border-b border-white/20 pb-1 w-fit">
            <a href="#" className="flex items-center gap-2 text-white text-[10px] uppercase tracking-widest font-bold">
              View More <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ServiceTabs = () => {
  const [activeTab, setActiveTab] = useState<"strategy" | "case-study">("strategy");

  return (
    <section className="bg-[#050505] py-24 px-6 md:px-[8%]">
      <div className="max-w-7xl mx-auto">
        
        {/* Tab Navigation */}
        <div className="flex justify-center gap-12 mb-24 border-b border-white/5 pb-6">
          {[
            { id: "strategy", label: "Strategy & Execution" },
            { id: "case-study", label: "Case Studies" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`relative text-[11px] uppercase tracking-[0.4em] font-bold transition-all duration-300 ${
                activeTab === tab.id ? "text-white" : "text-zinc-600 hover:text-zinc-400"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabBorder"
                  className="absolute -bottom-[26px] left-0 right-0 h-[2px] bg-[#76B82D]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Content Switching */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {activeTab === "strategy" ? <StrategyView /> : <CaseStudyView />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServiceTabs;