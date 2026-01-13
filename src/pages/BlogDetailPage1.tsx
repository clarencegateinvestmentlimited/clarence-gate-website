import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const BlogDetailPage1 = () => {
    return (
        <div className="bg-white min-h-screen font-sans selection:bg-[#76B82D] selection:text-white">
            <Header />

            <main className="container mx-auto px-6 md:px-[8%] pt-32 pb-24">
                {/* Main 2-Column Grid Wrapper */}
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* LEFT COLUMN: Article Content + Comments + Related */}
                    <div className="lg:w-2/3 w-full">
                        <motion.article
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Meta Info */}
                            <div className="flex items-center gap-3 text-sm text-gray-400 mb-6 dm-sans">
                                <span>March 14, 2024</span>
                                <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                                <span className="text-[#76B82D] font-semibold uppercase tracking-wider">Analysis | Economy</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-2xl md:text-4xl font-light leading-tight text-gray-900 mb-10 dm-sans">
                                Nigeria’s Oil & Gas Industry in 2024: <br />
                                <span className="italic font-serif text-gray-500">Growth, Challenges, and Future Prospects</span>
                            </h1>

                            {/* Featured Image */}
                            <div className="rounded-2xl overflow-hidden mb-12 shadow-2xl">
                                <img
                                    src="https://caladiumconsulting.com/wp-content/uploads/2025/03/oilandgas-blog-image-600x363.png"
                                    alt="Oil and Gas Industry"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Article Body Content */}
                            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-12 dm-sans">
                                <section>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase tracking-tight">Navigating a Transforming Energy Sector</h2>
                                    <p>Nigeria’s oil and gas industry remains the backbone of the nation’s economy, playing a critical role in energy security, employment, and government revenue. Despite global market volatility, the sector is showing signs of recovery and growth, driven by increased refining capacity, infrastructure investment, and technological advancements. In 2024, Nigeria’s crude oil production reached 1.5 million barrels per day (bpd), marking an upward trajectory that is projected to reach 1.7 million bpd in 2025.

                                        The industry is also experiencing a shift toward domestic refining, reducing reliance on expensive fuel imports. As refinery capacity utilization surged to 65% in 2024—up from 30% in 2023—Nigeria is strengthening its energy independence and cutting foreign exchange losses. However, challenges such as investment bottlenecks, fluctuating global oil prices, and environmental concerns continue to impact long-term sustainability.</p>
                                    {/* <p>The industry is also experiencing a shift toward domestic refining...</p> */}
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase tracking-tight">Government Policies and Sector Investments</h2>
                                    <p>The Nigerian government has been actively supporting local refining and oil production expansion through regulatory reforms and incentives for private sector participation. The rise of the Dangote Refinery, which holds 44.4% of Nigeria’s refining capacity, is a testament to this strategy, significantly improving the country’s ability to process crude oil locally. Other refineries, including Port Harcourt (27.8%), Warri (18.5%), and Kaduna (9.3%), are also contributing to the sector’s resilience.

                                        Investment in Nigeria’s oil and gas sector continues to grow, with refinery modernization and offshore drilling projects attracting both local and international stakeholders. However, Nigeria’s oil exports remain critical to revenue generation, with India (25.5%), Spain (18.4%), and the USA (10.2%) being the largest buyers of Nigerian crude. This highlights the global importance of Nigeria’s energy resources, even as local refining expands.</p>
                                </section>
                                <section>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase tracking-tight">Economic Impact and Job Creation</h2>
                                    <p>Economic Impact and Job Creation
                                        The oil and gas industry remains a major contributor to Nigeria’s GDP, with its share rising to 5.57% in 2024, up from 5.48% in 2023. This steady growth underscores the sector’s resilience and continued significance in the country’s economic structure.

                                        Employment in the sector is also rebounding, with direct jobs increasing from 60,000 in 2023 to 63,000 in 2024, while indirect employment grew from 220,000 to 240,000. As investments rise and production levels recover, the oil and gas industry continues to be a vital source of employment and economic stability.</p>
                                </section>
                                <section>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase tracking-tight">Key Industry Challenges and Strategic Responses</h2>
                                    <div>
                                        <ul className="list-disc ml-6 space-y-3 text-gray-600">
                                            <li>
                                                <strong>Oil Price Volatility:</strong> Global oil prices fluctuate due to geopolitical factors, affecting Nigeria’s revenue. Diversifying the energy mix and improving domestic refining can help stabilize earnings.
                                            </li>
                                            <li>
                                                <strong>Investment Gaps:</strong> Infrastructure projects and upstream development require significant funding. Encouraging private sector participation and foreign direct investment remains a priority.
                                            </li>
                                            <li>
                                                <strong>Environmental Concerns:</strong> Greenhouse gas emissions from Nigeria’s oil sector continue to pose sustainability challenges. Strengthening regulations and investing in clean energy initiatives will be key to balancing growth with environmental responsibility.
                                            </li>
                                        </ul>

                                        <p className="mt-4 text-gray-600">Despite these hurdles, Nigeria’s oil and gas sector is positioned for long-term growth, with rising local refining, expanding production, and increasing investments driving its future. The country’s ability to adapt to market dynamics while focusing on sustainable and efficient energy policies will determine the industry’s trajectory in the coming years.</p>
                                    </div>
                                </section>

                                <section className="bg-gray-50 p-8 rounded-xl border-l-4 border-[#76B82D]">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Want More Insights?</h3>
                                    <p className="mb-4">For a deeper analysis of Nigeria's oil and gas trends, download our 2024 Factsheet.</p>
                                    <button className="font-bold text-[#76B82D] hover:underline">[Download it here]</button>
                                </section>
                            </div>
                        </motion.article>

                        {/* COMMENT SECTION - Correctly placed inside the left column */}
                        <section className="mt-16 pt-16 border-t border-gray-100">
                            <h2 className="text-3xl font-light text-gray-900 mb-8 dm-sans">Leave a comment</h2>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-900 mb-2">Your Comment *</label>
                                    <textarea rows={6} className="w-full border border-gray-500 p-4 focus:border-[#76B82D] outline-none transition-colors" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input type="text" placeholder="Your Name *" className="border border-gray-500 p-3 focus:border-[#76B82D] outline-none" />
                                    <input type="email" placeholder="Your Email *" className="border border-gray-500 p-3 focus:border-[#76B82D] outline-none" />
                                    <input type="text" placeholder="Your Website *" className="border-gray-200 border-b p-3 focus:border-[#76B82D] outline-none" />
                                </div>
                                <button className="bg-[#1a1a1a] text-white px-8 dm-sans py-3 font-bold hover:bg-[#76B82D] transition-all">Send</button>
                            </form>
                        </section>

                        {/* RELATED POSTS - Correctly placed inside the left column */}
                        <section className="mt-24">
                            <h2 className="text-3xl font-light text-gray-900 mb-12 dm-sans">You may also like</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {/* Map related posts here as you did before */}
                                <div className="group">
                                    <img src="https://caladiumconsulting.com/wp-content/uploads/2025/03/entertainment-industry-caladium-blog-image-123x107.png" className="rounded-lg  mb-4" alt="Related" />
                                    <h3 className="text-xl text-zinc-900 dm-sans font-medium ">Nigeria’s Entertainment Industry in 2024: Trends, Challenges, and Growth Opportunities</h3>
                                    <Link to="/blogs-detail" className="text-sm text-[#76B82D] dm-sans font-bold mt-4 inline-block">Read More</Link>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* RIGHT COLUMN: Sidebar (Sticky) */}
                    {/* RIGHT COLUMN: Sidebar (Sticky) */}
                    <motion.aside
                        className="lg:w-1/3 w-full lg:sticky lg:top-32 space-y-12"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Search Bar */}
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full border-b border-gray-200 py-3 pr-10 focus:outline-none focus:border-[#76B82D] transition-colors dm-sans"
                            />
                            <svg className="absolute right-0 top-3 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        {/* Categories Map */}
                       <div>
  <h4 className="text-sm font-bold text-gray-900 mb-6 border-l-4 border-[#76B82D] pl-4">
    Categories
  </h4>
  <ul className="space-y-3 text-sm text-gray-600 dm-sans">
    {[
      { name: 'Analysis', path: '/analysis' },
      { name: 'Business', path: '/business' },
      { name: 'Economy', path: '/economy' },
      { name: 'Industry', path: '/industry' },
      { name: 'Uncategorized', path: '/uncategorized' },
    ].map((cat) => (
      <li key={cat.name} className="border-b border-gray-50 pb-2 last:border-0">
        <Link 
          to={cat.path} 
          className="hover:text-[#76B82D] cursor-pointer transition-colors flex justify-between items-center group"
        >
          <span>{cat.name}</span>
          {/* Optional: Add an arrow or count that appears on hover */}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#76B82D] text-xs">
            ↗
          </span>
        </Link>
      </li>
    ))}
  </ul>
</div>

                        {/* Latest Posts Map */}
                        <div>
                            <h4 className="text-sm font-bold text-gray-900 mb-6 border-l-4 border-[#76B82D] pl-4">Latest Posts</h4>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Restoration of Dashed Hope",
                                        date: "April 22, 2025",
                                        path: "/blog-restoration",
                                        image: "https://caladiumconsulting.com/wp-content/uploads/2025/04/restoration-of-dashed-hope-thumbnail.png"
                                    },
                                    {
                                        title: "Nigeria's Oil & Gas Industry in 2024",
                                        date: "March 14, 2025",
                                        path: "/blogs-detail",
                                        image: "https://caladiumconsulting.com/wp-content/uploads/2025/03/oilandgas-blog-image-600x363.png"
                                    },
                                    {
                                        title: "Nigeria's Entertainment Industry in 2024",
                                        date: "March 14, 2025",
                                        path: "/blogs-det",
                                        image: "https://caladiumconsulting.com/wp-content/uploads/2025/03/entertainment-industry-caladium-blog-image-600x373.png"
                                    }
                                ].map((post, index) => (
                                    <Link key={index} to={post.path} className="flex gap-4 group items-start">
                                        {/* Thumbnail */}
                                        <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                                            <img
                                                src={post.image}
                                                alt=""
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        {/* Text content */}
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-gray-400 mb-1">{post.date}</span>
                                            <h5 className="text-[13px] font-medium leading-tight text-gray-800 group-hover:text-[#76B82D] transition-colors">
                                                {post.title}
                                            </h5>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.aside>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BlogDetailPage1;