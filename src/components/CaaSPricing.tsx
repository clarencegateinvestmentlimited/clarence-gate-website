import React from 'react';

// 1. TypeScript Interfaces
interface PricingPlan {
    price: string;
    period: string;
    title?: string;
    description?: string;
    features: string[];
    buttonText: string;
    isEnterprise?: boolean;
}

const plans: PricingPlan[] = [
    {
        price: "0.0",
        period: "Lifetime",
        features: ["Business Management", "Training Interactive", "Partnership Platform", "Business Mentorship Caladium", "Caladium SME Community"],
        buttonText: "Join Community",
    },
    {
        price: "200",
        period: "Per session",
        title: "Founders Clarity Session",
        description: "A mini strategy session designed specifically for founders and startup. We help founders get clear on their vision, overcome obstacles, and achieve strategic goals.",
        features: ["Gaining clarity on business vision and objectives", "Identify and overcome obstacles holding business back", "Develop a clear plan to achieve business goals", "Make informed decisions to drive growth and success"],
        buttonText: "Get Started",
    },
    {
        price: "2500",
        period: "One Time",
        features: ["Everything in Nano", "Business Setup Support", "Enterprise Technology Access", "Regulatory Compliance Services", "Organizational Design", "Business Pitch Deck", "Business Accounting Templates"],
        buttonText: "Get Started",
    },
    {
        price: "Enterprise",
        period: "Medium & Large Enterprises",
        isEnterprise: true,
        features: ["Customized Strategy Services / Solution", "Strategy Retreat", "Financial Planning", "Organization Structuring", "Governance and Compliance", "Market Research Customized Solution"],
        buttonText: "Schedule A Free Call",
    }
];

// 2. Reusable Card Component
const PricingCard: React.FC<PricingPlan> = ({ price, period, title, description, features, buttonText, isEnterprise }) => {
    return (
        <div className="flex flex-col h-full p-6 text-left">
            <div className="mb-4">
                {!isEnterprise ? (
                    <div className="flex justify-between items-baseline">
                        <h2 className="text-5xl font-light text-slate-800">
                            <span className="text-3xl font-normal">$</span>{price}
                        </h2>
                        <span className="text-slate-500 font-medium">{period}</span>
                    </div>
                ) : (
                    <h2 className="text-2xl font-medium text-slate-700 pb-2 border-b border-slate-300">
                        {period}
                    </h2>
                )}
                {!isEnterprise && <hr className="mt-4 border-slate-300" />}
            </div>

            <div className="flex-grow">
                {title && <h3 className="font-bold text-slate-700 mb-2">{title}</h3>}
                {description && <p className="text-sm text-slate-500 mb-4 leading-relaxed">{description}</p>}

                <ul className="space-y-3 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-slate-700">
                            <span className="mt-1">
                                <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

    // Inside PricingCard component
            <button className="group w-full bg-[#1A1A1A] text-white py-4 rounded-full font-medium 
                   transition-all duration-300 ease-in-out
                   hover:bg-black hover:scale-[1.02] hover:shadow-lg
                   flex justify-center items-center gap-2">
                {buttonText}
                {/* <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                </span> */}
            </button>
        </div>
    );
};

// 3. Main Layout
export default function CaaSPricing() {
    return (
        <div className="bg-white min-h-screen py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-16">
                    <h1 className="text-4xl font-medium text-slate-800">
                        CaaS for <span className="text-[#94257a] italic">Startups & SMEs</span>
                    </h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {plans.map((plan, index) => (
                        <PricingCard key={index} {...plan} />
                    ))}
                </div>
            </div>
        </div>
    );
}