import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface Feature {
  id: string;
  number: string;
  title: string;
  content: string;
}

const features: Feature[] = [
  {
    id: 'offering',
    number: '01',
    title: 'Our Offering',
    content: 'Comprehensive strategic solutions tailored to drive growth and efficiency across diverse business landscapes.'
  },
  {
    id: 'expertise',
    number: '02',
    title: 'Multi-Industry Expertise',
    content: 'Deep domain knowledge across finance, technology, and manufacturing sectors, enabling cross-pollinated innovation.'
  },
  {
    id: 'methodology',
    number: '03',
    title: 'Tested Approaches and Methodologies',
    content: 'Our frameworks are built on global best practices, refined through years of successful local implementations.'
  },
  {
    id: 'credentials',
    number: '04',
    title: 'Global Credentials',
    content: 'Our team is composed of industry-leading experts and certified professionals in finance and strategy.'
  }
];

export default function MinimalistExpertise() {
  const [expanded, setExpanded] = useState<string | false>('credentials');

  return (
    <section className="relative flex flex-col lg:flex-row min-h-screen bg-[#050505] text-zinc-100 overflow-hidden font-sans">
      
      {/* Visual Side - Using a live Unsplash image */}
      <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-screen">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Minimalist Architecture" 
          className="w-full h-full object-cover grayscale brightness-70"
        />
        {/* Subtle overlay to blend into the black background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050505] hidden lg:block" />
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 md:p-16 lg:p-24 bg-[#050505]">
        <div className="max-w-xl">
          <header className="mb-12">
            <h2 className="text-sm font-mono tracking-[0.4em] text-emerald-500 uppercase mb-4">
              FAQ
            </h2>
            <p className="text-3xl md:text-4xl font-light tracking-tight text-white italic font-serif">
              Why Choose Caladium?
            </p>
          </header>

          <div className="space-y-0">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className="border-t border-zinc-800 last:border-b transition-colors duration-500"
              >
                <button
                  onClick={() => setExpanded(expanded === feature.id ? false : feature.id)}
                  className="w-full py-8 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-8">
                    <span className="text-[10px] font-mono text-zinc-600 group-hover:text-emerald-500 transition-colors">
                      {feature.number}
                    </span>
                    <h3 className={`text-lg md:text-xl font-light tracking-wide transition-all ${
                      expanded === feature.id ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'
                    }`}>
                      {feature.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expanded === feature.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={expanded === feature.id ? 'text-emerald-500' : 'text-zinc-700'}
                  >
                    <ChevronDown size={18} strokeWidth={1} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expanded === feature.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="pb-8 pl-12 md:pl-16 text-zinc-400 leading-relaxed text-sm md:text-base max-w-md">
                        {feature.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}