import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    link: string;
}

// --- Sub-Components ---
const ServiceCard: React.FC<{ title: string; points: ServicePoint[] }> = ({ title, points }) => (
    <div className="border border-white/40 p-6 md:p-8 h-full bg-transparent flex flex-col group hover:border-[#76B82D] transition-colors duration-500">
        <h3 className="text-lg md:text-xl font-bold mb-6 text-white leading-tight uppercase tracking-tight">{title}</h3>
        <ul className="space-y-4 flex-grow">
            {points.map((point, index) => (
                <li key={index} className="flex gap-2 text-[12px] md:text-[13px] text-gray-300 leading-relaxed">
                    <span className="text-[#76B82D] mt-1.5 h-1 w-1 rounded-full bg-[#76B82D] shrink-0" />
                    <span>
                        <strong className="text-white font-semibold uppercase text-[10px] tracking-wider block mb-0.5">{point.title}</strong>
                        {point.description}
                    </span>
                </li>
            ))}
        </ul>
    </div>
);

const CaseStudyCard: React.FC<CaseStudy> = ({ title, client, imageUrl, link }) => (
    <div className="flex flex-col h-full group cursor-pointer">
        <div className="aspect-video overflow-hidden mb-6 relative">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 group-hover:scale-105"
            />
        </div>
        
        <span className="text-[#76B82D] text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-bold mb-3 block">
            {client}
        </span>
        
        <h3 className="text-lg md:text-xl font-bold text-white mb-6 leading-snug group-hover:text-[#76B82D] transition-colors flex-grow">
            {title}
        </h3>
        
        <div className="mt-auto border-b border-white pb-1 w-fit group-hover:border-[#76B82D] transition-colors">
            <Link to={link} className="flex items-center gap-2 text-white text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-[#76B82D]">
                View Case Study <ArrowUpRight size={14} />
            </Link>
        </div>
    </div>
);

// --- Main Component ---
const HumanCapital: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'people' | 'case-studies'>('people');

    return (
        <div className="min-h-screen bg-[#020205] text-white px-6 py-12 md:px-16 lg:px-24 xl:px-40 font-sans selection:bg-[#76B82D]/30 overflow-x-hidden">

            {/* Navigation Tabs - Sticky-ready and responsive text */}
            <nav className="flex justify-center gap-6 md:gap-12 mb-12 md:mb-20">
                {['people', 'case-studies'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab as any)}
                        className={`pb-2 text-[11px] md:text-sm font-bold tracking-[0.2em] uppercase transition-all border-b-2 ${
                            activeTab === tab ? 'border-[#76B82D] text-white' : 'border-transparent text-gray-500 hover:text-white'
                        }`}
                    >
                        {tab === 'people' ? 'Strategies' : 'Case Studies'}
                    </button>
                ))}
            </nav>

            {/* Human Capital Content */}
            {activeTab === 'people' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-16 md:mb-24">
                        <div className="w-full grayscale brightness-75 overflow-hidden rounded-sm order-2 lg:order-1">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                                alt="Human Capital Team"
                                className="w-full object-cover aspect-square md:aspect-video lg:aspect-[4/3] hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                        <div className="flex flex-col order-1 lg:order-2">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-transparent mb-1"
                                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
                                Strategic <br className="hidden md:block"/> Planning &
                            </h1>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-[#76B82D] leading-none mb-8">
                                Execution
                            </h2>
                            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl font-light">
                                At Caladium Consulting, we create strategies that ensure measurable success by blending <span className="text-white font-normal">global frameworks</span> with <span className="text-white font-normal">local insights</span>.
                            </p>
                        </div>
                    </section>

                    {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <ServiceCard
                            title="Strategy Development"
                            points={[
                                { title: "Integration of Insights", description: "We combine global strategic frameworks with deep local market analysis." },
                                { title: "Comprehensive Business Planning", description: "Methodical planning aligned with long-term goals." },
                                { title: "Transformative Organizational Change", description: "Restructure organizations to enhance agility." },
                                { title: "Robust Performance Management", description: "Establish systems to monitor performance." },
                                { title: "In-depth Market Research", description: "Conduct research to stay ahead of market trends." }
                            ]}
                        />
                        <ServiceCard
                            title="Strategy Execution"
                            points={[
                                { title: "Resource Optimization", description: "Align resources to support strategic initiatives effectively." },
                                { title: "Detailed Execution Roadmaps", description: "Develop clear execution plans with defined milestones." },
                                { title: "Continuous Performance Monitoring", description: "Rigorously track effectiveness of strategies." },
                                { title: "Driving Organizational Growth", description: "Ensure strategies actively drive organizational growth." }
                            ]}
                        />
                        <ServiceCard
                            title="Strategic Brand Communication"
                            points={[
                                { title: "Message Development", description: "Create resonant messages that reflect brand values." },
                                { title: "Network Utilization", description: "Use a vast network of channels effectively." },
                                { title: "Adapting to Market Dynamics", description: "Responsively adjust strategies based on market conditions." },
                                { title: "Engaging Target Audiences", description: "Develop captivating content to build brand loyalty." }
                            ]}
                        />
                    </section>
                </div>
            )}

            {/* Case Studies Content */}
            {activeTab === 'case-studies' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 items-stretch">
                        <CaseStudyCard
                            imageUrl="https://caladiumconsulting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-21-at-11.23.48-AM-1-1024x683.jpeg"
                            client="Sohcahtoa Holdings"
                            title="Strategic execution propels Sohcahtoa: Innovative solutions, streamlined operations, and market leadership fuel remarkable growth."
                            link="/case-studies-sohcahtoa-holdings"
                        />
                        <CaseStudyCard
                            imageUrl="https://caladiumconsulting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-21-at-11.28.42-AM-1024x683.jpeg"
                            client="Stretford Hill Limited"
                            title="Reimagining engineering excellence and expanding the quality of indigenous structural construction practices in Nigeria."
                            link="/case-studies-stretford-hill-limited-shl"
                        />
                        <CaseStudyCard
                            imageUrl="https://caladiumconsulting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-21-at-11.19.59-AM-1.jpeg"
                            client="So Fresh"
                            title="Innovative healthy options fuel growth: So Fresh expands menu, boosts revenue, and reaches new customers across Nigeria."
                            link="/case-studies-so-fresh"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default HumanCapital;