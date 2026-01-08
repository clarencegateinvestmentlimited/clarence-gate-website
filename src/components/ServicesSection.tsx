import React, { useRef, useState, MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Monitor, Store, Smartphone, BarChart3, ArrowUpRight, LucideIcon } from 'lucide-react';

// 1. Define types for our Service data
interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: Service[] = [
  {
    title: "Strategic Planning and Execution",
    description: "We create strategies that ensure measurable success by blending global frameworks with local insights.",
    icon: Monitor,
  },
  {
    title: "Organizational Development",
    description: "We facilitate the evolution from founder-led to robust, scalable, and governance-aligned organizational structures.",
    icon: Store,
  },
  {
    title: "Market and Operational Strategy",
    description: "We guide your strategic entry and expansion into new markets with precision and in-depth market insight.",
    icon: Smartphone,
  },
  {
    title: "Financial Advisory and Transactions",
    description: "Caladium Consulting provides comprehensive financial advisory services, ensuring organizations navigate complexities effectively.",
    icon: BarChart3,
  },
];

// 2. Typed Props for the Card Component
interface CardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<CardProps> = ({ service, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Subtle spotlight effect following the mouse
  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.21, 0.45, 0.32, 0.9] }}
      viewport={{ once: true }}
      className="group relative p-10 border border-zinc-800 bg-zinc-950 overflow-hidden"
    >
      {/* Spotlight Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.08),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10">
        <service.icon 
          size={40} 
          strokeWidth={1} 
          className="text-emerald-500 mb-8 group-hover:scale-110 transition-transform duration-500" 
        />
        
        <h3 className="text-2xl font-light text-zinc-100 mb-5 tracking-tight group-hover:text-emerald-500 transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-zinc-400 leading-relaxed mb-10 text-base font-light">
          {service.description}
        </p>

        <a 
          href="#" 
          className="inline-flex items-center text-[10px] uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-all duration-300 group/link"
        >
          Explore Service 
          <ArrowUpRight size={14} className="ml-2 transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

export default function ServicesSection() {
  return (
    <section className="bg-black text-white py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-emerald-500 text-xs uppercase tracking-[0.4em] mb-4"
            >
              Expertise
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-light tracking-tighter"
            >
              Caladium Consulting <br />
              <span className="font-serif italic text-zinc-500">Service Categories</span>
            </motion.h2>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}