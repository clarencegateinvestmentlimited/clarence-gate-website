import { motion } from "framer-motion";

const ServiceHero = () => {
  return (
    <section className="relative h-[100vh] w-full flex items-center overflow-hidden">
      {/* Background Image - Professional Corporate Architecture */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 md:px-[8%] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="text-[#76B82D] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
           Our Services
          </span>
          <h1 className="text-4xl md:text-7xl text-white font-light leading-[1.1] mb-8">
            Strategic solutions for <br />
            <span className="italic font-serif text-zinc-400">complex ecosystems.</span>
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            We provide the analytical rigor and deep market insights necessary to scale 
            African enterprises in an evolving global economy.
          </p>
        </motion.div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default ServiceHero;