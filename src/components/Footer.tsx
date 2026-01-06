import { Link } from "react-router-dom";
import { toast } from "sonner";
import { motion } from "framer-motion";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Successfully subscribed to our intelligence brief.");
  };

  return (
    <footer className="relative bg-[#010101] pt-32 pb-12 px-6 md:px-[6%] overflow-hidden border-t border-white/5">
      {/* Dynamic Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#94257a]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          
          {/* Section 1: Brand & Purpose */}
          <div className="lg:col-span-6">
            <Link to="/" className="inline-block mb-10 group">
              <img
                src="Images/Caladium-Logo_5-2-1-1536x457.png"
                alt="Logo"
                className="h-[28px] md:h-[32px] w-auto brightness-0 invert transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            <h2 className="text-zinc-400 text-xl md:text-[20px] font-light leading-relaxed max-w-xl italic">
              Empowering the next generation of <span className="text-white font-normal not-italic">African Enterprise</span> through rigorous strategy and data-driven insights.
            </h2>
          </div>

          {/* Section 2: Navigation Map */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#94257a] mb-10">
              Directory
            </h3>
            <nav className="flex flex-col gap-5">
              {[
                { to: "/", label: "Overview" },
                { to: "/about", label: "Corporate Profile" },
                { to: "/founder", label: "Our Leadership" },
                { to: "/portfolio", label: "SME Portfolio" },
                { to: "/contact", label: "Connect" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-zinc-200 hover:text-white transition-all duration-300 text-sm font-medium tracking-wide flex items-center group"
                >
                  <span className="w-0 group-hover:w-6 h-[1px] bg-[#94257a] transition-all duration-500 mr-0 group-hover:mr-3"></span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Section 3: Intelligence Subscription */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#94257a] mb-10">
              Intelligence Brief
            </h3>
            <p className="text-zinc-200 text-xs mb-8 font-light leading-relaxed">
              Join our network to receive the latest updates on the Nigerian SME Ecosystem.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="relative group">
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-zinc-800 focus:outline-none focus:border-[#94257a] transition-all duration-500 font-light text-sm"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-4 text-zinc-600 hover:text-[#94257a] transition-colors"
                aria-label="Subscribe"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-current">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Cinematic Watermark Section */}
        {/* <div className="relative py-24 border-t border-white/5 overflow-hidden group">
           <motion.h2 
            initial={{ x: "0%" }}
            animate={{ x: "-10%" }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear", repeatType: "mirror" }}
            className="text-[15vw] font-black text-white/[0.02] whitespace-nowrap leading-none tracking-tighter select-none"
           >
             STRATEGY DATA SCALE GROWTH INSIGHT
           </motion.h2>
        </div> */}

        {/* Global Presence & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          {/* <div className="flex items-center gap-10">
            {[ "Lagos", "Abuja", "London" ].map((city) => (
              <div key={city} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#94257a]/40" />
                <span className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase font-bold">{city}</span>
              </div>
            ))}
          </div> */}
          
          <div className="flex flex-col md:items-end gap-2">
            <p className="text-zinc-200 text-[9px] tracking-[0.2em] uppercase font-bold">
              © {new Date().getFullYear()} Caladium Consulting Limited
            </p>
            {/* <p className="text-[#94257a]/40 text-[8px] tracking-[0.4em] uppercase font-black">
              Excellence Driven by Data
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;