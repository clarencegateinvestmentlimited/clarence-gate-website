import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
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
    <div className="bg-[#020202] text-white font-raleway overflow-x-hidden selection:bg-[#94257a]/30">
      <Header />

      {/* Contact Section */}
      <section className="px-[8%] pt-32 pb-24 lg:pt-48 border-t border-white/5 relative">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#94257a]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto">
          
          {/* Left Side — Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-5xl font-bold mb-8 tracking-tighter">
              <Typewriter
                words={['Contact Us']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={250}
                deleteSpeed={200}
              />
            </h2>
            
            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-md font-light italic">
              Ready to take the first step towards reaching your goals? Get in touch with us today! Should you have a question, a comment, or just want to say hello, we're always here to listen. Fill out our contact form now and one of our representatives will get back to you as soon as possible. We can't wait to hear from you!
            </p>

            <div className="space-y-6 mb-12">
               <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Headquarters</span>
                  <p className="text-zinc-300">D24 Dolphin Plaza, Dolphin Estate, Ikoyi, Lagos</p>
               </div>
               
               <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Digital / Voice</span>
                  <div className="flex items-center gap-4 text-zinc-300">
                    <a href="mailto:enquiries@caladiumconsulting.com" className="hover:text-[#94257a] transition-colors">enquiries@caladiumconsulting.com</a>
                    <span className="text-zinc-800">/</span>
                    <a href="tel:+2348024332000" className="hover:text-[#94257a] transition-colors">+234 802 433 2000</a>
                  </div>
               </div>
            </div>

            {/* Social Links — Modern Monochromatic Style */}
            {/* <div className="flex items-center gap-5 pt-8 border-t border-white/5">
              {['facebook-f', 'x-twitter', 'instagram', 'linkedin-in'].map((icon) => (
                <a 
                  key={icon} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-[#94257a] hover:bg-[#94257a]/5 transition-all duration-500"
                >
                  <i className={`fa-brands fa-${icon} text-sm`}></i>
                </a>
              ))}
            </div> */}
          </motion.div>

          {/* Right Side — Form */}
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-10"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <input
                type="text"
                placeholder="What is your name?"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#94257a] transition-all duration-500 placeholder:text-zinc-700"
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
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#94257a] transition-all duration-500 placeholder:text-zinc-700"
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
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#94257a] transition-all duration-500 placeholder:text-zinc-700"
              />
              <div className="absolute bottom-0 left-0 h-[1px] bg-[#94257a] w-0 group-focus-within:w-full transition-all duration-500" />
            </div>

            <div className="relative group">
              <textarea
                rows={4}
                placeholder="Enter your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#94257a] transition-all duration-500 placeholder:text-zinc-700 resize-none"
                required
              ></textarea>
              <div className="absolute bottom-0 left-0 h-[1px] bg-[#94257a] w-0 group-focus-within:w-full transition-all duration-500" />
            </div>

            {/* <div className="pt-6">
              <button
                type="submit"
                disabled={!isValid}
                className={`group relative flex items-center gap-6 text-[11px] font-black tracking-[0.4em] uppercase transition-all duration-500 ${
                  isValid ? "text-white" : "text-zinc-800 pointer-events-none"
                }`}
              >
                <span>Initiate Submission</span>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#94257a] group-hover:bg-[#94257a] transition-all duration-500">
                  <img src="/Images/arrow-right.png" alt="" className="w-5 h-5 brightness-0 invert transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            </div> */}
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;