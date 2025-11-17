import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Founder: React.FC = () => {
  return (
    <div className="bg-black text-white lg:pt-[100px] pt-[100px] font-['Raleway'] overflow-x-hidden">
      {/* Header */}
      {/* <header className="flex justify-between items-center py-8 px-[8%] bg-black">
        <div className="logo">
          <img src="./Images/Logo.png" alt="Clarence Gate Logo" className="h-[90px] w-auto" />
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="index.html" className="text-white hover:text-[#4ecdc4] transition-colors">Home</a>
          <a href="about.html" className="text-white hover:text-[#4ecdc4] transition-colors">About Us</a>
          <a href="portfolio.html" className="text-white hover:text-[#4ecdc4] transition-colors">Portfolio</a>
          <a href="founder.html" className="text-white hover:text-[#4ecdc4] transition-colors">Our Founder</a>
          <a href="contact.html" className="text-white hover:text-[#4ecdc4] transition-colors">Contact</a>
        </nav>
      </header> */}
      <Header/>

      {/* Founder Hero */}
      <section className="grid md:grid-cols-2 gap-20 items-center py-32 px-[8%]">
        <div className="w-full h-[600px] bg-gradient-to-br from-[#4ecdc4] to-[#0a4d3c] rounded-xl flex items-center justify-center text-[80px] shadow-[0_20px_60px_rgba(78,205,196,0.3)]">
          👤
        </div>
        <div>
          <h1 className="text-[60px] font-bold leading-[1.2] mb-4">John Clarence</h1>
          <p className="text-[#4ecdc4] text-2xl font-semibold mb-8">Founder & Chief Executive Officer</p>
          <p className="text-lg leading-8 text-white/85 mb-6">
            A visionary entrepreneur and strategic investor with over 15 years of experience building sustainable enterprises across Africa. John founded Clarence Gate with a mission to transform bold ideas into lasting impact.
          </p>
          <p className="text-lg leading-8 text-white/85">
            His leadership philosophy centers on patient capital, strategic foresight, and building businesses that create value for all stakeholders.
          </p>
          <div className="flex gap-6 mt-8">
            <a href="#" aria-label="LinkedIn" className="w-[50px] h-[50px] flex items-center justify-center border border-white/30 rounded-full text-2xl hover:bg-[#4ecdc4] hover:text-black hover:border-[#4ecdc4] transition-transform duration-300 hover:-translate-y-1">in</a>
            <a href="#" aria-label="Twitter" className="w-[50px] h-[50px] flex items-center justify-center border border-white/30 rounded-full text-2xl hover:bg-[#4ecdc4] hover:text-black hover:border-[#4ecdc4] transition-transform duration-300 hover:-translate-y-1">𝕏</a>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-20 px-[8%] border-t border-[#333]">
        <h2 className="text-[50px] font-semibold text-center mb-12">Biography</h2>
        <div className="max-w-[1000px] mx-auto space-y-8 text-lg leading-8 text-white/85">
          <p>John Clarence's journey in investment and entrepreneurship began with a simple observation: Africa's greatest opportunities often go unrealized due to a lack of patient, strategic capital. This insight would become the foundation of Clarence Gate Group.</p>
          <p>Before founding Clarence Gate, John gained extensive experience in financial services, real estate development, and strategic consulting across West Africa. He witnessed firsthand how the right combination of capital, expertise, and vision could transform promising ventures into industry leaders.</p>
          <p>Under his leadership, Clarence Gate has grown into a diversified investment holding company with interests spanning real estate, energy, finance, hospitality, technology, and consulting. The portfolio reflects John's belief in building enterprises that address real market needs while generating sustainable returns.</p>
          <p>John holds an MBA from Lagos Business School and a Bachelor's degree in Economics. He serves on several corporate boards and is a frequent speaker on entrepreneurship, investment strategy, and Africa's economic development.</p>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-20 px-[8%] border-t border-[#333]">
  <h2 className="text-[50px] font-semibold text-center mb-16">Professional Journey</h2>

  <div className="relative max-w-[1000px] mx-auto 
      before:content-[''] 
      before:hidden 
      md:before:block 
      before:absolute 
      before:left-1/2 
      before:top-0 
      before:bottom-0 
      before:w-[2px] 
      before:bg-gradient-to-b 
      before:from-[#4ecdc4] 
      before:to-transparent 
      before:-translate-x-1/2">
      
    {[
      { year: '2008', title: 'Early Career', desc: 'Began career in investment banking, gaining deep insights into capital markets and corporate finance across multiple sectors.' },
      { year: '2012', title: 'First Venture', desc: 'Co-founded first real estate development company, successfully delivering multiple residential and commercial projects.' },
      { year: '2015', title: 'Founded Clarence Gate', desc: 'Established Clarence Gate Group with a vision to build a diversified portfolio of sustainable African enterprises.' },
      { year: '2018', title: 'Portfolio Expansion', desc: 'Expanded investments into energy, hospitality, and technology sectors, building a truly diversified holding company.' },
      { year: '2024', title: 'Present Day', desc: 'Leading Clarence Gate Group with 10+ portfolio companies and over $50M in capital investments across five key sectors.' },
    ].map((item, i) => (
      <div key={i} className={`grid md:grid-cols-2 gap-16 mb-16 ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
        <div className={`text-[40px] font-bold text-[#4ecdc4] ${i % 2 === 1 ? 'md:text-right' : ''}`}>{item.year}</div>
        <div className="p-8 bg-[#1a1a1a] border border-white/10 rounded-xl hover:bg-[#0a4d3c] hover:border-[#4ecdc4] hover:-translate-y-1 transition-transform">
          <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
          <p className="text-white/70 leading-relaxed">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Leadership Philosophy */}
      <section className="py-20 px-[8%] border-t border-[#333]">
        <h2 className="text-[50px] font-semibold text-center mb-16">Leadership Philosophy</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: '🎯', title: 'Long-Term Vision', desc: 'Success is measured not in quarters, but in decades. We build enterprises designed to thrive for generations.' },
            { icon: '🤝', title: 'Partnership Approach', desc: 'We don\'t just invest capital—we invest time, expertise, and strategic guidance to help our portfolio companies succeed.' },
            { icon: '💡', title: 'Continuous Learning', desc: 'Markets evolve, industries transform. Staying ahead requires constant learning and adaptation to new realities.' },
            { icon: '🌍', title: 'Impact-Driven', desc: 'True success creates value for all stakeholders—investors, employees, customers, and communities.' },
            { icon: '⚖️', title: 'Disciplined Decision-Making', desc: 'Every investment must meet rigorous criteria for market potential, scalability, and alignment with our values.' },
            { icon: '🚀', title: 'Bold Execution', desc: 'Strategy without execution is just planning. We move decisively once opportunities are validated.' },
          ].map((card, i) => (
            <div key={i} className="p-10 rounded-xl bg-gradient-to-br from-[#4ecdc40d] to-black/30 border border-[#4ecdc433] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(78,205,196,0.2)] transition-transform">
              <div className="text-[50px] mb-6">{card.icon}</div>
              <h3 className="text-2xl font-semibold text-[#4ecdc4] mb-4">{card.title}</h3>
              <p className="text-white/70 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      {/* Quote Section */}
<section className="py-20 px-[8%] border-t border-[#333] text-center">
  <div className="max-w-[900px] mx-auto relative">
    <p className="text-[32px] italic text-[#4ecdc4] font-light leading-snug mb-6 relative before:text-[80px] before:absolute before:top-[-20px] before:left-[-40px] before:opacity-30">
      The greatest investments are those that transform not just balance sheets, but lives, communities, and futures.
    </p>
    <p className="text-xl font-semibold">— John Clarence</p>
  </div>
</section>

{/* Footer */}
{/* <footer className="border-t border-[#333] py-12 px-[8%] text-center text-white/60">
  <p>&copy; 2024 Clarence Gate Group. All rights reserved.</p>
</footer> */}
<Footer/>

    </div>
  );
};

export default Founder;
