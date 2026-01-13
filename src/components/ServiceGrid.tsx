import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react"; // install lucide-react if you haven't

const services = [
  {
    id: "01",
    title: "Strategy & Operations",
    description: "Aligning your business goals with actionable operational frameworks to drive efficiency.",
    category: "CONSULTING"
  },
  {
    id: "02",
    title: "Financial Advisory",
    description: "Expert guidance on capital structure, fundraising, and long-term financial health.",
    category: "FINANCE"
  },
  {
    id: "03",
    title: "Digital Transformation",
    description: "Integrating cutting-edge technology to modernize your SME's workflow and reach.",
    category: "TECHNOLOGY"
  },
  {
    id: "04",
    title: "Market Expansion",
    description: "Data-driven insights to help your business scale across new Nigerian markets.",
    category: "GROWTH"
  }
];

const ServiceGrid = () => {
  return (
    <section className="py-24 px-6 bg-white text-black font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[#94257a] font-bold text-xs uppercase tracking-[0.4em] mb-4"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-serif text-zinc-900 italic"
          >
            Service Categories
          </motion.h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-1 border-zinc-400">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-10 border-r border-b border-zinc-400 hover:bg-zinc-50 transition-colors duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-zinc-400 font-light text-sm tracking-widest">
                  {service.id}
                </span>
                <div className="p-2 rounded-full border border-zinc-200 group-hover:bg-[#94257a] group-hover:text-white transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] text-[#94257a] uppercase mb-3">
                  {service.category}
                </p>
                <h3 className="text-3xl font-serif mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h3>
                <p className="text-zinc-800 font-light leading-relaxed max-w-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;