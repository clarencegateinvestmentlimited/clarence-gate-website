import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed
import { ArrowUpRight } from "lucide-react";

// --- Types ---
interface ServicePoint {
  title: string;
  description: string;
}

interface CaseStudy {
  title: string;
  description: string;
  imageUrl: string;
  link: string; // Added link property
}

// --- Sub-Components ---
const ServiceCard: React.FC<{ title: string; points: ServicePoint[] }> = ({ title, points }) => (
  <div className="border border-white/60 p-8 h-full bg-transparent flex flex-col">
    <h3 className="text-xl font-bold mb-6 text-white leading-tight">{title}</h3>
    <ul className="space-y-4 flex-grow">
      {points.map((point, index) => (
        <li key={index} className="flex gap-2 text-[13px] text-gray-200 leading-relaxed">
          <span className="text-white mt-1">•</span>
          <span>
            <strong className="text-white font-semibold">{point.title}:</strong> {point.description}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const CaseStudyCard: React.FC<CaseStudy> = ({ title, description, imageUrl, link }) => (
  // Added h-full to the wrapper
  <div className="flex flex-col h-full group cursor-pointer">
    <div className="aspect-video overflow-hidden mb-6">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <h3 className="text-lg font-bold text-white mb-4 leading-snug">
      {title}
    </h3>
    {/* flex-grow ensures this paragraph pushes the button down */}
    <p className="text-sm text-gray-300 mb-6 leading-relaxed flex-grow">
      {description}
    </p>

    {/* mt-auto keeps the button at the bottom margin */}
    <div className="mt-auto border-b border-white pb-1 w-fit transition-colors group-hover:border-[#76B82D]">
      <Link to={link} className="flex items-center gap-2 text-white text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-[#76B82D]">
        View More <ArrowUpRight size={14} />
      </Link>
    </div>
  </div>
);

// --- Main Component ---
const Organization: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'organization' | 'case-studies'>('organization');

  return (
    <div className="min-h-screen bg-[#1A1F22] text-white px-8 py-12 md:px-20 lg:px-40 font-sans selection:bg-[#76B82D]/30">
      
      {/* Navigation Tabs */}
      <nav className="flex justify-center gap-10 mb-20">
        <button 
          onClick={() => setActiveTab('organization')}
          className={`pb-2 text-sm font-semibold tracking-widest uppercase transition-all border-b-2 ${
            activeTab === 'organization' ? 'border-[#76B82D] text-white' : 'border-transparent text-gray-500 hover:text-white'
          }`}
        >
          Organization
        </button>
        <button 
          onClick={() => setActiveTab('case-studies')}
          className={`pb-2 text-sm font-semibold tracking-widest uppercase transition-all border-b-2 ${
            activeTab === 'case-studies' ? 'border-[#76B82D] text-white' : 'border-transparent text-gray-500 hover:text-white'
          }`}
        >
          Case Studies
        </button>
      </nav>

      {/* Organization Tab Content */}
      {activeTab === 'organization' && (
        <div className="animate-in fade-in duration-500">
          <section className="grid md:grid-cols-2 gap-16 items-start mb-20">
            <div className="w-full">
              <img 
                src="https://caladiumconsulting.com/wp-content/uploads/2025/01/executive-reviewing-notes-1-1024x683.jpg" 
                alt="Consulting Lead" 
                className="w-full grayscale brightness-90"
              />
            </div>
            <div className="pt-4">
              <h1 className="text-2xl lg:text-4xl font-bold leading-tight mb-8">
                Organizational <br />
                <span className="text-[#76B82D]">Development</span>
              </h1>
              <p className="text-sm text-gray-300 leading-relaxed max-w-md">
                At Caladium Consulting, we facilitate the evolution from founder-led to robust, 
                scalable, and governance-aligned organizational structures.
              </p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <ServiceCard 
              title="Organizational Transformation"
              points={[
                { title: "Scalability and Structure", description: "Transition to structures that support scalability and operational efficiency." },
                { title: "Alignment with Governance", description: "Implement governance frameworks that align with both industry standards and strategic objectives." },
                { title: "Sustainability Focus", description: "Ensure transformations support long-term sustainability and resilience." }
              ]}
            />
            <ServiceCard 
              title="Organization Structuring & Governance"
              points={[
                { title: "Growth-Supportive Structures", description: "Create organizational designs that facilitate growth and adaptability." },
                { title: "Governance Models Implementation", description: "Integrate governance models that enhance decision-making and compliance." },
                { title: "Risk Management Strategies", description: "Develop and implement risk management strategies to safeguard organizational interests." }
              ]}
            />
          </section>
        </div>
      )}

      {/* Case Studies Tab Content */}
      {activeTab === 'case-studies' && (
        <div className="animate-in fade-in duration-500">
          {/* items-stretch ensures columns have equal height */}
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <CaseStudyCard 
              imageUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
              title="The Dutum Culture and Enterprise Transformation Experience"
              description="Dutum Company Limited is a nearly 4-decade-old family construction company with legacy footprints across Nigeria."
              link="/https://caladiumconsulting.com/case-studies-dutum/"
            />
            <CaseStudyCard 
              imageUrl="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop"
              title="The Review and Transformation of Organization-Wide Processes of Sanlam Life Insurance"
              description="Streamlining for success: Sanlam revamps processes, accelerates claims, and elevates customer satisfaction in Nigerian insurance."
              link="https://caladiumconsulting.com/case-studies-sanlam-life/"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Organization;