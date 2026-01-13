import React, { useState } from 'react';
import { ArrowUpRight } from "lucide-react";

// --- Types ---
interface ServicePoint {
  title: string;
  description: string;
}

interface CaseStudy {
  title: string;
  client: string;
  imageUrl: string;
}

// --- Sub-Components ---
const ServiceCard: React.FC<{ title: string; points: ServicePoint[] }> = ({ title, points }) => (
  <div className="border border-white/60 p-8 h-full bg-transparent flex flex-col group">
    <h3 className="text-xl font-bold mb-6 text-white leading-tight uppercase tracking-tight">{title}</h3>
    <ul className="space-y-4 flex-grow">
      {points.map((point, index) => (
        <li key={index} className="flex gap-2 text-[13px] text-gray-200 leading-relaxed">
          <span className="text-white mt-1">•</span>
          <span>
            <strong className="text-white font-semibold uppercase text-[11px] tracking-wider">{point.title}:</strong> {point.description}
          </span>
        </li>
      ))}
    </ul>

    <div className="mt-8 border-b border-white pb-1 w-fit transition-colors group-hover:border-[#76B82D]">
      <a href="#" className="flex items-center gap-2 text-white text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-[#76B82D]">
        View More <ArrowUpRight size={14} />
      </a>
    </div>
  </div>
);

const CaseStudyCard: React.FC<CaseStudy> = ({ title, client, imageUrl }) => (
  <div className="flex flex-col group cursor-pointer">
    <div className="aspect-video overflow-hidden mb-6">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <span className="text-[#76B82D] text-[10px] uppercase tracking-[0.3em] font-bold mb-3 block">
      {client}
    </span>
    <h3 className="text-xl font-bold text-white mb-6 leading-snug group-hover:text-[#76B82D] transition-colors">
      {title}
    </h3>
    <div className="border-b border-white pb-1 w-fit group-hover:border-[#76B82D] transition-colors">
      <a href="#" className="flex items-center gap-2 text-white text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-[#76B82D]">
        View More <ArrowUpRight size={14} />
      </a>
    </div>
  </div>
);

// --- Main Component ---
const FinancialAdvisory: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'advisory' | 'case-studies'>('advisory');

  return (
    <div className="min-h-screen bg-[#1A1F22] text-white px-8 py-12 md:px-20 lg:px-40 font-sans selection:bg-[#76B82D]/30">

      {/* Navigation Tabs */}
      <nav className="flex justify-center gap-10 mb-20">
        <button
          onClick={() => setActiveTab('advisory')}
          className={`pb-2 text-sm font-semibold tracking-widest uppercase transition-all border-b-2 ${activeTab === 'advisory' ? 'border-[#76B82D] text-white' : 'border-transparent text-gray-500 hover:text-white'
            }`}
        >
          Financial Advisory
        </button>
        <button
          onClick={() => setActiveTab('case-studies')}
          className={`pb-2 text-sm font-semibold tracking-widest uppercase transition-all border-b-2 ${activeTab === 'case-studies' ? 'border-[#76B82D] text-white' : 'border-transparent text-gray-500 hover:text-white'
            }`}
        >
          Case Studies
        </button>
      </nav>

      {/* Advisory Tab Content */}
      {activeTab === 'advisory' && (
        <div className="animate-in fade-in duration-500">
          <section className="grid md:grid-cols-2 gap-16 items-start mb-20">
            <div className="w-full grayscale brightness-75 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070"
                alt="Financial Analysis"
                className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="flex flex-col h-full justify-center">
              <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.8] text-transparent"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>
                Corporate
              </h1>
              <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter text-[#76B82D] leading-none mb-8">
                Finance Advisory
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed max-w-md font-light">
                We provide expert guidance on capital structuring, investment appraisal, and financial risk management to ensure your organization’s long-term fiscal health.
              </p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              title="Capital & Investment Advisory"
              points={[
                { title: "Capital Raising", description: "Facilitating access to debt and equity markets to fund strategic growth initiatives." },
                { title: "Investment Appraisal", description: "Rigorous financial modeling and valuation to guide critical investment decisions." },
                { title: "Project Finance", description: "Structuring tailored financial solutions for large-scale infrastructure and enterprise projects." }
              ]}
            />
            <ServiceCard
              title="Transaction Advisory"
              points={[
                { title: "Due Diligence", description: "Comprehensive financial and operational reviews to mitigate risk in mergers and acquisitions." },
                { title: "Mergers & Acquisitions", description: "End-to-end support for buy-side and sell-side transactions to maximize value." },
                { title: "Valuation Services", description: "Providing independent and objective business valuations for regulatory and strategic purposes." }
              ]}
            />
          </section>
        </div>
      )}

      {/* Case Studies Tab Content */}
      {activeTab === 'case-studies' && (
        <div className="animate-in fade-in duration-500">
          <div className="grid md:grid-cols-2 gap-12">
            <CaseStudyCard
              imageUrl="https://caladiumconsulting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-21-at-11.19.59-AM-1.jpeg"
              client="Expanding So Fresh's Product Offerings and Amplifying Access to Healthy Food in Nigeria"
              title="Innovative healthy options fuel growth: So Fresh expands menu, boosts revenue, and reaches new customers."
              link="https://caladiumconsulting.com/case-studies-so-fresh/"
            />
            <CaseStudyCard
              imageUrl="https://caladiumconsulting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-21-at-11.23.48-AM-1-1024x683.jpeg"
              client="Driving Growth through Strategic Execution: A Case Study of Sohcahtoa Holdings"
              title="Strategic execution propels Sohcahtoa: Innovative solutions, streamlined operations, and market leadership fuel remarkable growth."
              link="https://caladiumconsulting.com/case-studies-sohcahtoa-holdings/"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialAdvisory;