import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ email: "", name: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      className="bg-black text-white px-[8%] py-24 border-t border-[#222]"
      id="contact"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <h2 className="text-[22px] md:text-[26px] font-medium mb-4">
          Send us a message at{" "}
          <span className="text-[#FFD300]">info@clarencegroup.com</span>
        </h2>
        <div className="h-[2px] w-[80px] bg-[#FFD300] mb-14"></div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border border-[#333] rounded-none px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#FFD300] transition-all"
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border border-[#333] rounded-none px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#FFD300] transition-all"
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={7}
            className="w-full bg-transparent border border-[#333] rounded-none px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#FFD300] transition-all resize-none"
          ></textarea>

          <button
            type="submit"
            className="group text-white text-[18px] font-medium flex items-center   pb-[2px] hover:gap-3 transition-all"
          >
           <p className="border-b border-white"> Send{" "}</p>
            <span className="transform group-hover:translate-x-1 transition-transform">
              <img src="/Images/arrow-right.png" alt="" />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
