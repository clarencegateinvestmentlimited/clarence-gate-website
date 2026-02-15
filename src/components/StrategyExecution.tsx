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
    description: string;
    imageUrl: string;
    link: string; // Added link to the interface
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
    </div>
);

const CaseStudyCard: React.FC<CaseStudy> = ({ title, client, description, imageUrl, link }) => (
    // Added h-full to wrapper
    <div className="flex flex-col h-full group cursor-pointer">
        <div className="aspect-video overflow-hidden mb-6">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-105"
            />
        </div>
        <span className="text-[#76B82D] text-[15px] uppercase tracking-[0.3em] font-bold mb-3 block">
            {client}
        </span>
        <h3 className="text-lg font-bold text-white mb-4 leading-snug group-hover:text-[#76B82D] transition-colors">
            {title}
        </h3>
        {/* flex-grow pushes the button area to the bottom */}
        <p className="text-xl text-gray-300 mb-6 leading-relaxed flex-grow font-light">
            {description}
        </p>
        {/* mt-auto ensures alignment across the grid row */}
        <div className="mt-auto border-b border-white pb-1 w-fit group-hover:border-[#76B82D] transition-colors">
            <a href={link} className="flex items-center gap-2 text-white text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-[#76B82D]">
                View More <ArrowUpRight size={14} />
            </a>
        </div>
    </div>
);

// --- Main Component ---
const StrategyExecution: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'strategy' | 'case-studies'>('strategy');

    return (
        <div className="min-h-screen bg-[#050505] text-white px-8 py-12 md:px-20 lg:px-40 font-sans selection:bg-[#76B82D]/30">

            {/* Navigation Tabs */}
            <nav className="flex justify-center gap-10 mb-20">
                <button
                    onClick={() => setActiveTab('strategy')}
                    className={`pb-2 text-sm font-semibold tracking-widest uppercase transition-all border-b-2 ${activeTab === 'strategy' ? 'border-[#76B82D] text-white' : 'border-transparent text-gray-500 hover:text-white'
                        }`}
                >
                    Strategy & Execution
                </button>
                <button
                    onClick={() => setActiveTab('case-studies')}
                    className={`pb-2 text-sm font-semibold tracking-widest uppercase transition-all border-b-2 ${activeTab === 'case-studies' ? 'border-[#76B82D] text-white' : 'border-transparent text-gray-500 hover:text-white'
                        }`}
                >
                    Case Studies
                </button>
            </nav>

            {/* Strategy Tab Content */}
            {activeTab === 'strategy' && (
                <div className="animate-in fade-in duration-500">
                    <section className="grid md:grid-cols-2 gap-16 items-start mb-20">
                        <div className="w-full grayscale brightness-75">
                            <img
                                src="https://caladiumconsulting.com/wp-content/uploads/2025/01/co-workers-having-positive-attitude-1-600x400.jpg"
                                alt="Strategy Planning"
                                className="w-full object-cover aspect-[4/3]"
                            />
                        </div>
                        <div className="pt-4">
                            <h1 className="text-2xl lg:text-4xl font-black tracking-tight mb-4">
                                Market & <span className='text-[#76B82D]'>Operational</span>
                            </h1>
                            <h2 className="text-2xl lg:text-4xl tracking-tight text-[#76B82D]  mb-8">
                                Strategy
                            </h2>
                            <p className="text-[15px] text-gray-300 leading-relaxed max-w-md font-light">
                                At Caladium Consulting, we guide your strategic entry and expansion into new markets with precision and in-depth market insight.
                            </p>
                        </div>
                    </section>

                    <section className="grid md:grid-cols-2 gap-8">
                        <ServiceCard
                            title="Strategic Planning & Advisory"
                            points={[
                                { title: "Market Entry & Expansion", description: "Guide strategic entry into new markets with precision and in-depth local market insight." },
                                { title: "Business Model Strategy", description: "Reimagining value propositions to align with evolving market demands and digital shifts." },
                                { title: "Execution Roadmaps", description: "Developing clear, milestone-driven plans with defined accountability and resource allocation." }
                            ]}
                        />
                        <ServiceCard
                            title="Performance & Monitoring"
                            points={[
                                { title: "Strategy Implementation", description: "Bridging the gap between high-level vision and daily operational excellence." },
                                { title: "KPI & Performance Tracking", description: "Rigorously monitoring the effectiveness of strategies with real-time data adjustments." },
                                { title: "Governance Frameworks", description: "Establishing oversight structures that ensure strategic targets are consistently met." }
                            ]}
                        />
                    </section>
                </div>
            )}

            {/* Case Studies Tab Content */}
            {activeTab === 'case-studies' && (
                <div className="animate-in fade-in duration-500">
                    {/* Added items-stretch to the grid */}
                    <div className="grid md:grid-cols-2 gap-12 items-stretch">
                        <CaseStudyCard
                            imageUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
                            client="Dutum Company Limited"
                            title="The Dutum Culture and Enterprise Transformation Experience"
                            description="Dutum Company Limited is a nearly 4-decade-old family construction company with legacy footprints across Nigeria."
                            link="dutum/"
                        />
                        <CaseStudyCard
                            imageUrl="https://caladiumconsulting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-21-at-11.19.59-AM-1.jpeg"
                            client="Expanding So Fresh's Product Offerings and Amplifying Access to Healthy Food in Nigeria"
                            title="Innovative healthy options fuel growth: So Fresh expands menu, boosts revenue, and reaches new customers."
                            link="https://caladiumconsulting.com/case-studies-so-fresh/"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default StrategyExecution;