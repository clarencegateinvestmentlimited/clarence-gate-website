import React, { useState } from 'react';

interface DetailCard {
  logo: string;
  title: string;
  year: string;
  logoClass?: string;
}

interface IndustryCard {
  icon: string;
  title: string;
  description: string;
  detailCards: DetailCard[];
}

const PortfolioSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const industries: IndustryCard[] = [
    {
      icon: '🏢',
      title: 'Real Estate',
      description: 'We are passionate about creating sustainable developments that redefine modern living and urban infrastructure.',
      detailCards: [
        {
          logo: '🏗️',
          title: 'Dealo Global Services Limited',
          year: '2022',
          logoClass: 'bg-white'
        },
        {
          logo: '⚡',
          title: 'Dealo Energy Limited',
          year: '2009',
          logoClass: 'bg-gray-100'
        }
      ]
    },
    {
      icon: '💰',
      title: 'Finance & Insurance',
      description: 'Empowering financial systems and providing innovative risk solutions.',
      detailCards: [
        {
          logo: '🛡️',
          title: 'Turboserv Insurance Limited',
          year: '2022',
          logoClass: 'bg-teal-400'
        }
      ]
    },
    {
      icon: '💡',
      title: 'Hospitality',
      description: "Building brands that deliver exceptional guest experiences across Africa's destinations.",
      detailCards: [
        {
          logo: '🏨',
          title: 'Dealo Global Services Limited',
          year: '2022',
          logoClass: 'bg-white'
        },
        {
          logo: '🍽️',
          title: 'Dealo Energy Limited',
          year: '2009',
          logoClass: 'bg-gray-100'
        }
      ]
    },
    {
      icon: '📊',
      title: 'Technology',
      description: 'Innovating digital solutions that transform businesses and empower communities.',
      detailCards: [
        {
          logo: '💻',
          title: '20B Limited',
          year: '2022',
          logoClass: 'bg-white'
        }
      ]
    },
    {
      icon: '📈',
      title: 'Consulting',
      description: 'Strategic advisory services that drive growth and operational excellence.',
      detailCards: [
        {
          logo: '🎯',
          title: 'Dealo Global Services Limited',
          year: '2022',
          logoClass: 'bg-white'
        },
        {
          logo: '📋',
          title: 'Dealo Energy Limited',
          year: '2009',
          logoClass: 'bg-gray-100'
        }
      ]
    }
  ];

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-32 bg-black text-white">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-8">
          <svg width="20" height="20" viewBox="0 0 20 20" className="text-white">
            <path d="M2 2 L18 2" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <h4 className="text-xl font-semibold" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Focuses
          </h4>
        </div>
        <h2 
          className="text-4xl sm:text-5xl font-semibold mb-12"
          style={{ fontFamily: 'Raleway, sans-serif', lineHeight: '1.16' }}
        >
          Industries We Invest In
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Top Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {industries.slice(0, 3).map((industry, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Main Card */}
              <div
                className={`w-full max-w-sm bg-[#1a1a1a] border border-white/20 rounded-xl p-8 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  activeIndex !== null && activeIndex !== index
                    ? 'opacity-50 blur-sm'
                    : ''
                } hover:bg-[#0a4d3c] hover:border-[#4ecdc4] hover:-translate-y-2`}
                style={{ height: '310px' }}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-3xl">{industry.icon}</span>
                  <span className="text-white">→</span>
                </div>

                <div>
                  <h2 
                    className="text-xl font-semibold mb-4 text-white"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    {industry.title}
                  </h2>
                  <p 
                    className="text-white/70 mb-6 text-base"
                    style={{ fontFamily: 'Raleway, sans-serif', lineHeight: '1.4' }}
                  >
                    {industry.description}
                  </p>
                  <a
                    href="#"
                    className="relative inline-block text-lg text-white/80 pb-1"
                    style={{
                      borderBottom: '2px solid gray',
                      fontFamily: 'Raleway, sans-serif'
                    }}
                  >
                    Learn more
                  </a>
                </div>
              </div>

              {/* Detail Cards */}
              <div
                className={`mt-4 flex gap-4 w-full max-w-4xl transition-all duration-400 ${
                  activeIndex === index
                    ? 'max-h-[800px] opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                {industry.detailCards.map((card, cardIndex) => (
                  <React.Fragment key={cardIndex}>
                    {cardIndex > 0 && (
                      <div className="w-px bg-white/30 hidden md:block" />
                    )}
                    <div className="flex-1 min-w-[250px] flex flex-col">
                      <div className={`w-full h-48 flex items-center justify-center ${card.logoClass} overflow-hidden`}>
                        <span className="text-6xl">{card.logo}</span>
                      </div>
                      <div className="flex justify-between items-center p-6 bg-black">
                        <div>
                          <h3 
                            className="font-semibold text-lg text-white mb-10"
                            style={{ fontFamily: 'Raleway, sans-serif', lineHeight: '1.3' }}
                          >
                            {card.title}
                          </h3>
                          <p 
                            className="text-base text-white/60"
                            style={{ fontFamily: 'Raleway, sans-serif' }}
                          >
                            {card.year}
                          </p>
                        </div>
                        <span className="text-white ml-4 flex-shrink-0">→</span>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {industries.slice(3, 5).map((industry, index) => (
            <div
              key={index + 3}
              className="relative flex flex-col items-center"
              onMouseEnter={() => handleMouseEnter(index + 3)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Main Card */}
              <div
                className={`w-full max-w-sm bg-[#1a1a1a] border border-white/20 rounded-xl p-8 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  activeIndex !== null && activeIndex !== index + 3
                    ? 'opacity-50 blur-sm'
                    : ''
                } hover:bg-[#0a4d3c] hover:border-[#4ecdc4] hover:-translate-y-2`}
                style={{ height: '310px' }}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-3xl">{industry.icon}</span>
                  <span className="text-white">→</span>
                </div>

                <div>
                  <h2 
                    className="text-xl font-semibold mb-4 text-white"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    {industry.title}
                  </h2>
                  <p 
                    className="text-white/70 mb-6 text-base"
                    style={{ fontFamily: 'Raleway, sans-serif', lineHeight: '1.4' }}
                  >
                    {industry.description}
                  </p>
                  <a
                    href="#"
                    className="relative inline-block text-lg text-white/80 pb-1"
                    style={{
                      borderBottom: '2px solid gray',
                      fontFamily: 'Raleway, sans-serif'
                    }}
                  >
                    Learn more
                  </a>
                </div>
              </div>

              {/* Detail Cards */}
              <div
                className={`mt-4 flex gap-4 w-full max-w-4xl transition-all duration-400 ${
                  activeIndex === index + 3
                    ? 'max-h-[800px] opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                {industry.detailCards.map((card, cardIndex) => (
                  <React.Fragment key={cardIndex}>
                    {cardIndex > 0 && (
                      <div className="w-px bg-white/30 hidden md:block" />
                    )}
                    <div className="flex-1 min-w-[250px] flex flex-col">
                      <div className={`w-full h-48 flex items-center justify-center ${card.logoClass} overflow-hidden`}>
                        <span className="text-6xl">{card.logo}</span>
                      </div>
                      <div className="flex justify-between items-center p-6 bg-black">
                        <div>
                          <h3 
                            className="font-semibold text-lg text-white mb-10"
                            style={{ fontFamily: 'Raleway, sans-serif', lineHeight: '1.3' }}
                          >
                            {card.title}
                          </h3>
                          <p 
                            className="text-base text-white/60"
                            style={{ fontFamily: 'Raleway, sans-serif' }}
                          >
                            {card.year}
                          </p>
                        </div>
                        <span className="text-white ml-4 flex-shrink-0">→</span>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;