import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// --- Sub-Component: Organization View ---
const OrganizationView = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start mb-20">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
            alt="Executive meeting"
            className="object-cover w-full h-full grayscale brightness-75 transition-all duration-1000"
          />
        </div>
        <div className="flex flex-col h-full justify-center">
          {/* Content from design image */}
          <h1 className="text-5xl lg:text-[75px] font-black uppercase tracking-tighter leading-[0.75] text-transparent"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>
            Organizational
          </h1>
          <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-[#76B82D] leading-none mb-8">
            Development
          </h2>
          <p className="text-zinc-400 text-sm md:text-[15px] leading-relaxed max-w-md font-light">
            At Caladium Consulting, we facilitate the evolution from founder-led to robust, 
            scalable, and governance-aligned organizational structures.
          </p>
        </div>
      </section>

      {/* Services Grid with updated content */}
      <section className="grid md:grid-cols-2 gap-0 border-t border-white/20">
        <div className="py-12 pr-10 lg:pr-16 border-b md:border-b-0 md:border-r border-white/20">
          <h3 className="text-2xl font-bold mb-8 text-white uppercase tracking-tight leading-tight">
            Organizational <br /> Transformation
          </h3>
          <ul className="space-y-6">
            {[
              { t: "Scalability and Structure", d: "Transition to structures that support scalability and operational efficiency." },
              { t: "Alignment with Governance", d: "Implement governance frameworks that align with both industry standards and strategic objectives." },
              { t: "Sustainability Focus", d: "Ensure transformations support long-term sustainability and resilience." }
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-[13px] text-zinc-400">
                <span className="text-white mt-1">•</span>
                <span>
                  <strong className="text-white font-semibold uppercase text-[11px] tracking-wider">{item.t}:</strong> {item.d}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-10 border-b border-white pb-1 w-fit">
            <a href="#" className="flex items-center gap-2 text-white text-[10px] uppercase tracking-[0.2em] font-bold">
              View More <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="py-12 pl-0 md:pl-10 lg:pl-16">
          <h3 className="text-2xl font-bold mb-8 text-white uppercase tracking-tight leading-tight">
            Organization Structuring <br /> & Governance
          </h3>
          <ul className="space-y-6">
            {[
              { t: "Growth-Supportive Structures", d: "Create organizational designs that facilitate growth and adaptability." },
              { t: "Governance Models Implementation", d: "Integrate governance models that enhance decision-making and compliance." },
              { t: "Risk Management Strategies", d: "Develop and implement risk management strategies to safeguard organizational interests." }
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-[13px] text-zinc-400">
                <span className="text-white mt-1">•</span>
                <span>
                  <strong className="text-white font-semibold uppercase text-[11px] tracking-wider">{item.t}:</strong> {item.d}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-10 border-b border-white pb-1 w-fit">
            <a href="#" className="flex items-center gap-2 text-white text-[10px] uppercase tracking-[0.2em] font-bold">
              View More <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Sub-Component: Case Study View ---
const CaseStudyView = () => (
  <div className="grid md:grid-cols-2 gap-16 py-6">
    {[
      {
        title: "The Futum Culture and Enterprise Transformation Experience",
        client: "Dutum Company Limited",
        img: "https://images.unsplash.com/photo-1541913007797-45f2824d318c?q=80&w=2070"
      },
      {
        title: "The Review and Transformation of Organization-Wide Processes of Sanlam Life Insurance",
        client: "Sanlam Life Insurance",
        img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070"
      }
    ].map((item, i) => (
      <div key={i} className="group cursor-pointer">
        <div className="overflow-hidden mb-6 aspect-video">
          <img
            src={item.img}
            className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            alt={item.title}
          />
        </div>
        <span className="text-[#76B82D] text-[10px] uppercase tracking-[0.3em] font-bold mb-3 block">
          {item.client}
        </span>
        <h3 className="text-2xl font-bold text-white mb-6 leading-snug group-hover:text-[#76B82D] transition-colors">
          {item.title}
        </h3>
        <div className="border-b border-white pb-2 w-fit group-hover:border-[#76B82D] transition-colors">
          <a href="#" className="flex items-center gap-2 text-white text-[10px] uppercase tracking-[0.2em] font-bold">
            View More <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    ))}
  </div>
);

const CaladiumDesign: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"org" | "case">("org");

  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-[#76B82D]/40 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-16 md:px-12 lg:px-20">

        {/* Navigation Tabs */}
        <nav className="flex justify-center gap-12 mb-20">
          {[
            { id: "org", label: "Organization" },
            { id: "case", label: "Case Studies" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as "org" | "case")}
              className={`pb-4 text-[11px] uppercase tracking-[0.4em] font-bold transition-all relative ${
                activeTab === tab.id ? "text-white" : "text-zinc-600 hover:text-white"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#76B82D]"
                />
              )}
            </button>
          ))}
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {activeTab === "org" ? <OrganizationView /> : <CaseStudyView />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CaladiumDesign;