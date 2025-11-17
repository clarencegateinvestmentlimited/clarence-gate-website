import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from "react";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

// ✨ Animation Variants
const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Contact: React.FC = () => {
  // 🌟 Track form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isValid, setIsValid] = useState(false);

  // 🌟 Validate required fields
  useEffect(() => {
    const { firstName, lastName, email, subject, message } = formData;
    setIsValid(Boolean(firstName && lastName && email && subject && message));
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    alert("✅ Message sent successfully!");
  };

  return (
    <div className="bg-black md:pt-[140px] lg:pt-[100px] pt-[20px] text-white font-raleway overflow-x-hidden">
      <Header />

      {/* Contact Section */}
      <section className="px-[8%] py-24 bg-black text-white border-t border-[#333]">
        <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Left Side — Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in touch</h2>
            <p className="text-white/70 leading-relaxed mb-8 max-w-md">
              Lorem ipsum dolor sit amet consectetur. Sed molestie odio lectus
              venenatis proin nunc donec venenatis.
            </p>

            <p className="text-lg mb-8">
              <a
                href="mailto:Contact@clarencegategroup.com"
                className="font-medium hover:text-[#4ecdc4] text-white/40 transition"
              >
                Contact@clarencegategroup.com
              </a>
              <span className="mx-2 text-white/40">|</span>
              <a
                href="tel:+2348130402039"
                className="hover:text-[#4ecdc4] text-white/40 transition"
              >
                (234) 81 3040 - 2039
              </a>
            </p>

            <div className="border-t border-white/20 my-8 w-full"></div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-2xl bg-white hover:text-[#4ecdc4] transition">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="text-2xl hover:text-[#4ecdc4] transition">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" className="text-2xl hover:text-[#4ecdc4] transition">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="text-2xl hover:text-[#4ecdc4] transition">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Right Side — Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <input
              id="name"
              type="text"
              placeholder="What is your name?"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className="w-full bg-transparent border-b border-white/30 py-3 outline-none focus:border-[#4ecdc4] transition"
              required
            />

            <input
              id="email"
              type="email"
              placeholder="What's your email?"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-transparent border-b border-white/30 py-3 outline-none focus:border-[#4ecdc4] transition"
              required
            />

            <input
              id="company"
              type="text"
              placeholder="What's your company?"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full bg-transparent border-b border-white/30 py-3 outline-none focus:border-[#4ecdc4] transition"
            />

            <textarea
              id="message"
              rows={3}
              placeholder="Enter your message here..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-transparent border-b border-white/30 py-3 outline-none focus:border-[#4ecdc4] transition"
              required
            ></textarea>

            <div className="pt-4">
              <button
                type="submit"
                disabled={!isValid}
                className={`text-lg font-medium inline-flex items-center gap-2 transition ${
                  isValid
                    ? "text-white hover:text-[#4ecdc4]"
                    : "text-white/50 cursor-not-allowed"
                }`}
              >
                Send Message{" "}
                <span className="text-[#4ecdc4] text-xl">
                  <img src="/Images/arrow-right.png" alt="arrow icon" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>

      <div className="border-b border-white/20 my-8 mx-[100px]"></div>

      {/* Office Section */}
      <section className="bg-black text-white py-20 px-[8%]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12"
            variants={fadeInUp}
          >
            Visit Our Office
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <motion.div className="relative group" variants={fadeInUp}>
              <div className="relative overflow-hidden rounded-2xl border-4 border-teal-500/60">
                <img
                  src="/Images/projects2.jpg"
                  alt="Office Interior"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div className="space-y-8" variants={fadeInUp}>
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  Lagos, Nigeria
                </h3>
                <p className="text-white/70 text-base md:text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Sed molestie odio lectus
                  venenatis porttis nunc donec velit. Egestas enim a quam magna quis
                  vehicula.
                </p>
              </div>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="space-y-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 text-white/80">
                    <Mail className="w-5 h-5" />
                    <span className="font-semibold">Email</span>
                  </div>
                  <a
                    href="mailto:info@clarencegroup.com"
                    className="block text-white/90 hover:text-teal-300 transition-colors text-sm md:text-base"
                  >
                    info@clarencegroup.com
                  </a>
                </motion.div>

                <motion.div
                  className="space-y-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 text-white/80">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">Location</span>
                  </div>
                  <p className="text-white/90 text-sm md:text-base">
                    Lorem ipsum dolor street, Lagos Nigeria
                  </p>
                </motion.div>

                <motion.div
                  className="space-y-2 md:col-span-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 text-white/80">
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">Phone number</span>
                  </div>
                  <a
                    href="tel:+2348130402039"
                    className="block text-white/90 hover:text-teal-300 transition-colors text-sm md:text-base"
                  >
                    (234) 81 3040 - 2039
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <FAQ />
      <Footer />
    </div>
  );
};

export default Contact;
