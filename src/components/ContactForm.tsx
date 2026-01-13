import { useState, useRef } from "react";
import { toast } from "sonner";
import { motion, useMotionValue, useSpring } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({ email: "", name: "", message: "" });
  const [activeField, setActiveField] = useState<string | null>(null);
  
  const buttonRef = useRef<HTMLButtonElement>(null);
  const mX = useMotionValue(0);
  const mY = useMotionValue(0);
  const springX = useSpring(mX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    mX.set((clientX - centerX) * 0.3);
    mY.set((clientY - centerY) * 0.3);
  };

  const resetMouse = () => {
    mX.set(0);
    mY.set(0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Strategic inquiry received.");
    setFormData({ email: "", name: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section 
      className="bg-[#020202] text-white py-12 lg:py-20 relative overflow-hidden" 
      id="contact"
      onMouseMove={handleMouseMove}
    >
      {/* 1. Subtle Grain & Background Depth */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#94257a]/5 blur-[120px] rounded-full -mr-64 -mt-64" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-10 border border-white/10 rounded-[2.5rem] overflow-hidden bg-zinc-950/50 backdrop-blur-2xl"
        >
          
          {/* Left Side: Dense Branding (Col-span 4) */}
          <div className="lg:col-span-4 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-between bg-zinc-900/10">
            <div>
              {/* <div className="flex items-center gap-2 mb-8"> */}
                {/* <span className="relative flex h-2 w-2"> */}
                  {/* <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#94257a] opacity-75"></span> */}
                  {/* <span className="relative inline-flex rounded-full h-2 w-2 bg-[#94257a]"></span> */}
                {/* </span> */}
                {/* <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-500">Global Operations Active</span> */}
              {/* </div> */}
              
              <h2 className="text-4xl font-sans font-bold tracking-tighter leading-tight mb-4">
                Let's Start a <br />
                <span className="text-[#94257a] italic font-light tracking-normal">Dialogue.</span>
              </h2>
              <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-[240px]">
                Providing bespoke strategy for enterprises scaling across African markets.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <div className="group transition-all">
                <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-600 mb-1 group-hover:text-[#94257a]">Correspondence</p>
                <a href="mailto:enquiries@caladiumconsulting.com" className="text-sm font-light text-zinc-300 hover:text-white transition-colors">
                  enquiries@caladiumconsulting.com
                </a>
              </div>
              
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-600">Location</p>
                  <p className="text-xs text-zinc-400">Lagos, NG</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-600">Timezone</p>
                  <p className="text-xs text-zinc-400">GMT +1</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Optimized Form (Col-span 6) */}
          <div className="lg:col-span-6 p-8 lg:p-20">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    onFocus={() => setActiveField("name")}
                    onBlur={() => setActiveField(null)}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-zinc-800 py-2 text-sm font-light focus:outline-none placeholder-transparent peer"
                  />
                  <label className="absolute left-0 top-2 text-zinc-600 text-xs transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-[#94257a] peer-valid:-top-4">
                    FULL NAME
                  </label>
                  <motion.div animate={{ scaleX: activeField === "name" ? 1 : 0 }} className="absolute bottom-0 left-0 h-[1px] w-full bg-[#94257a] origin-left shadow-[0_0_10px_#94257a]" />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    onFocus={() => setActiveField("email")}
                    onBlur={() => setActiveField(null)}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-zinc-800 py-2 text-sm font-light focus:outline-none placeholder-transparent peer"
                  />
                  <label className="absolute left-0 top-2 text-zinc-600 text-xs transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-[#94257a] peer-valid:-top-4">
                    EMAIL ADDRESS
                  </label>
                  <motion.div animate={{ scaleX: activeField === "email" ? 1 : 0 }} className="absolute bottom-0 left-0 h-[1px] w-full bg-[#94257a] origin-left shadow-[0_0_10px_#94257a]" />
                </div>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  required
                  onFocus={() => setActiveField("message")}
                  onBlur={() => setActiveField(null)}
                  onChange={handleChange}
                  rows={2}
                  className="w-full bg-transparent border-b border-zinc-800 py-2 text-sm font-light focus:outline-none placeholder-transparent peer resize-none"
                />
                <label className="absolute left-0 top-2 text-zinc-600 text-xs transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-[#94257a] peer-valid:-top-4">
                  MESSAGE
                </label>
                <motion.div animate={{ scaleX: activeField === "message" ? 1 : 0 }} className="absolute bottom-0 left-0 h-[1px] w-full bg-[#94257a] origin-left shadow-[0_0_10px_#94257a]" />
              </div>

              <div className="pt-4 flex justify-end">
                <motion.button
                  ref={buttonRef}
                  style={{ x: springX, y: springY }}
                  onMouseLeave={resetMouse}
                  type="submit"
                  className="group relative px-8 py-4 rounded-xl border border-[#94257a]/30 bg-zinc-950 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[#94257a] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                    Transmit
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;