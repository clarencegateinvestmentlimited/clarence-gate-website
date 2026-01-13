import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer'; // Added missing import

const ANALYSIS_REPORTS = [
  {
    id: '1',
    categories: 'Uncategorized',
    title: "Restoration of Dashed Hope",
    excerpt: "Nigeria’s 2025 budget, officially termed the “Budget of restoration” has been aptly named given the economic challenges of the previous year and the implementation outcomes o",
    path: '/construction-details'
  },
  {
    id: '2',
    categories: 'Uncategorized',
    title: "Nigeria’s Oil & Gas Industry in 2024: Growth, Challenges, and Future Prospects",
    excerpt: "Navigating a Transforming Energy Sector Nigeria’s oil and gas industry remains the backbone of the nation’s economy, playing a critical role in energy security, employment, and",
    path: '/construction-details'
  },
  {
    id: '3',
    categories: 'Uncategorized',
    title: "Nigeria’s Entertainment Industry in 2024: Trends, Challenges, and Growth Opportunities",
    excerpt: "Navigating a Booming Industry Nigeria’s entertainment sector continues to dominate Africa’s creative economy, driven by Nollywood, Afrobeats, and the rapid expansion of digital",
    path: '/construction-details'
  },
  // Add more analysis objects here as needed
];

const UncategorizedPage = () => {
  return (
    <> {/* Added Fragment to wrap multiple top-level elements */}
      <Header />
      <div className="bg-white min-h-screen">
        {/* 1. Dark Analysis Header */}
        <section className="bg-[#1f242c] py-20 flex justify-center items-center">
          <h1 className="text-white pt-12 text-4xl md:text-5xl font-light dm-sans tracking-tight">
            Uncategorized
          </h1>
        </section>

        {/* 2. Analysis Content List */}
        <main className="container mx-auto px-6 md:px-[15%] py-16">
          <div className="space-y-20">
            {ANALYSIS_REPORTS.map((report) => (
              <motion.div 
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                {/* Category Tags */}
                <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-bold dm-sans">
                  {report.categories}
                </span>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-medium text-gray-800 mt-3 mb-4 dm-sans leading-tight group-hover:text-[#76B82D] transition-colors duration-300">
                  {report.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-4xl dm-sans">
                  {report.excerpt}
                </p>

                {/* Action Buttons Row */}
                <div className="flex justify-between items-center border-b border-gray-100 pb-12">
                  <Link 
                    to={report.path} 
                    className="bg-[#1c2229] text-white px-8 py-3 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-[#76B82D] transition-all duration-300 group/btn"
                  >
                    Read More 
                    <span className="text-sm transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1">
                      ↗
                    </span>
                  </Link>

                  {/* Share Button */}
                  <button className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-gray-900 transition-colors">
                    <span>Share</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default UncategorizedPage;