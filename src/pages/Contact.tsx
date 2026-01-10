import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const { firstName, email, subject, message } = formData;
    setIsValid(Boolean(firstName && email && subject && message));
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    alert("✅ Strategic enquiry received. We will contact you shortly.");
  };

  return (
    <div className="bg-[#050505] text-white font-raleway overflow-x-hidden selection:bg-[#94257a]/30">
      <Header />

      {/* Contact Section */}
      <section className="relative min-h-screen px-[8%] pt-32 pb-24 lg:pt-48 border-t border-white/5 overflow-hidden">
        
        {/* --- MOVING BACKGROUND IMAGE --- */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, x: "-2%" }}
            animate={{ 
              x: ["-2%", "2%", "-2%"],
              y: ["-1%", "1%", "-1%"] 
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute inset-0 w-[105%] h-[105%]"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069" // Replace with your image path
              alt="Background"
              className="w-full h-full object-cover opacity-20 grayscale brightness-75" 
            />
          </motion.div>

          {/* Overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#94257a]/10 blur-[120px] rounded-full pointer-events-none z-20" />

        {/* Content - Wrapped in relative z-30 to appear above background */}
        <div className="relative z-30 grid md:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto">
          
          {/* Left Side — Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-5xl font-bold mb-8 tracking-tighter">
              <Typewriter
                words={['Contact Us']}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={100}
              />
            </h2>
            
            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-md font-light italic">
              Ready to take the first step towards reaching your goals? Get in touch with us today! Should you have a question, a comment, or just want to say hello, we're always here to listen.
            </p>

            <div className="space-y-6 mb-12">
               <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">Headquarters</span>
                  <p className="text-zinc-200">D24 Dolphin Plaza, Dolphin Estate, Ikoyi, Lagos</p>
               </div>
               
               <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">Digital / Voice</span>
                  <div className="flex items-center gap-4 text-zinc-200">
                    <a href="mailto:enquiries@caladiumconsulting.com" className="hover:text-[#94257a] transition-colors underline decoration-white/10 underline-offset-4">enquiries@caladiumconsulting.com</a>
                    <span className="text-zinc-700">/</span>
                    <a href="tel:+2348024332000" className="hover:text-[#94257a] transition-colors">+234 802 433 2000</a>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Right Side — Form */}
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <input
                type="text"
                placeholder="What is your name?"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#94257a] transition-all duration-500 placeholder:text-zinc-600"
                required
              />
              <div className="absolute bottom-0 left-0 h-[1px] bg-[#94257a] w-0 group-focus-within:w-full transition-all duration-500" />
            </div>

            <div className="relative group">
              <input
                type="email"
                placeholder="What is your email?"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#94257a] transition-all duration-500 placeholder:text-zinc-600"
                required
              />
              <div className="absolute bottom-0 left-0 h-[1px] bg-[#94257a] w-0 group-focus-within:w-full transition-all duration-500" />
            </div>

            <div className="relative group">
              <input
                type="text"
                placeholder="What is your company?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#94257a] transition-all duration-500 placeholder:text-zinc-600"
              />
              <div className="absolute bottom-0 left-0 h-[1px] bg-[#94257a] w-0 group-focus-within:w-full transition-all duration-500" />
            </div>

            <div className="relative group">
              <textarea
                rows={4}
                placeholder="Enter your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#94257a] transition-all duration-500 placeholder:text-zinc-600 resize-none"
                required
              ></textarea>
              <div className="absolute bottom-0 left-0 h-[1px] bg-[#94257a] w-0 group-focus-within:w-full transition-all duration-500" />
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={!isValid}
                className={`group relative flex items-center gap-6 text-[11px] font-black tracking-[0.4em] uppercase transition-all duration-500 ${
                  isValid ? "text-white" : "text-zinc-700 pointer-events-none"
                }`}
              >
                <span>Initiate Submission</span>
                <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${isValid ? "group-hover:border-[#94257a] group-hover:bg-[#94257a]" : ""}`}>
                  <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform" />
                </div>
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;