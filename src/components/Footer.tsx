import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Linkedin, Twitter, Facebook, Instagram, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Successfully subscribed to our intelligence brief.");
  };

  const socials = [
    { icon: <Linkedin size={18} />, href: "https://ng.linkedin.com/company/caladium-consulting%C2%AE", label: "LinkedIn" },
    { icon: <Twitter size={18} />, href: "https://x.com/ConsultCaladium/", label: "Twitter" },
    { icon: <Facebook size={18} />, href: "https://web.facebook.com/CaladiumConsulting/?_rdc=1&_rdr#", label: "Facebook" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/caladiumconsulting/?igsh=MWMwM28ybzF6bjgzcg%3D%3D&utm_source=qr#", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-[#010101] pt-24 pb-12 px-6 md:px-[6%] overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#94257a]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Top Section: Brand & High-Level Statement */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20 items-start">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <img
                src="Images/Caladium-Logo_5-2-1-1536x457.png"
                alt="Caladium Consulting"
                className="h-8 md:h-10 w-auto"
              />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              We lead by developing tailored strategies for government bodies, 
              development institutions, NGOs, and businesses across Africa.
            </p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-white text-2xl md:text-3xl font-light leading-tight lg:pl-12 border-l border-white/10">
              We empower organizations to make <span className="text-zinc-400 font-medium">data-driven decisions</span> that fuel growth and success across industries.
            </h2>
          </div>
        </div>

        {/* Middle Section: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20 border-b border-white/5">
          
          {/* 1. Newsletter */}
          <div className="space-y-6">
            <h3 className="text-[11px] font-bold tracking-widest uppercase text-zinc-500">Stay Updated</h3>
            <form onSubmit={handleNewsletterSubmit} className="relative max-w-xs">
              <input
                type="email"
                placeholder="Your e-mail"
                required
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#94257a] transition-all text-sm"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-2 bg-white/5 hover:bg-[#94257a] text-white px-4 py-1.5 rounded-full text-xs flex items-center gap-2 transition-all group"
              >
                Send <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          </div>

          {/* 2. Contact */}
          <div className="space-y-6">
            <h3 className="text-[11px] font-bold tracking-widest uppercase text-zinc-500">Contact Us</h3>
            <div className="space-y-3 text-sm text-zinc-300">
              <a href="mailto:enquiries@caladiumconsulting.com" className="block hover:text-white transition-colors">enquiries@caladiumconsulting.com</a>
              <a href="tel:+2348024332000" className="block hover:text-white transition-colors">+234 802 4332 000</a>
            </div>
          </div>

          {/* 3. Address */}
          <div className="space-y-6">
            <h3 className="text-[11px] font-bold tracking-widest uppercase text-zinc-500">Our Address</h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              D24 Dolphin Plaza, Corporation Drive,<br />
              Dolphin Estate, Ikoyi, Lagos, Nigeria
            </p>
          </div>

          {/* 4. Socials */}
          <div className="space-y-6">
            <h3 className="text-[11px] font-bold tracking-widest uppercase text-zinc-500">Our Social</h3>
            <div className="flex gap-4">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-[#94257a] hover:text-white hover:border-[#94257a] transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 gap-6">
          <div className="flex gap-8">
            <Link to="https://caladiumconsulting.com/privacy-policy.html" className="text-[10px] uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-[10px] uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-medium">
            © {new Date().getFullYear()} Caladium LTD
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;