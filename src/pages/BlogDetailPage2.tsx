import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const BlogDetailPage2 = () => {
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
                                Nigeria’s Entertainment Industry in 2024:  <br />
                                <span className="italic font-serif text-gray-500">Trends, Challenges, and Growth Opportunities</span>
                            </h1>

                            {/* Featured Image */}
                            <div className="rounded-2xl overflow-hidden mb-12 shadow-2xl">
                                <img
                                    src="https://caladiumconsulting.com/wp-content/uploads/2025/03/entertainment-industry-caladium-blog-image-600x373.png"
                                    alt="Oil and Gas Industry"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Article Body Content */}
                            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-12 dm-sans">
                                <section>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase tracking-tight">Navigating a Transforming Energy Sector</h2>
                                    <p>Nigeria’s entertainment sector continues to dominate Africa’s creative economy, driven by Nollywood, Afrobeats, and the rapid expansion of digital content platforms. As one of the world’s fastest-growing media industries, it contributes significantly to the economy, creating jobs and boosting international cultural influence. However, rising production costs, piracy, and monetization challenges remain hurdles that industry players must overcome to sustain growth.

                                        The demand for Nigerian films, music, and digital content is at an all-time high, with streaming services and social media providing global exposure. The sector’s adaptability, particularly in leveraging technology and innovative revenue models, has made it a powerhouse in the African entertainment space.</p>

                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase tracking-tight">Government Support and Industry Investments</h2>
                                    <p>The Nigerian government has acknowledged the entertainment industry’s economic impact, implementing policies that promote local content production and intellectual property rights protection. Grants and funding initiatives aim to help filmmakers, musicians, and content creators scale their businesses while ensuring fair monetization of creative works.

                                        Investment in streaming platforms and digital distribution channels has increased, with global and local players competing for a share of Nigeria’s entertainment audience. Platforms like Netflix, Amazon Prime, and local services such as IrokoTV and Startimes are reshaping how Nigerians consume media, driving the shift from traditional cinema and television to on-demand conten</p>
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
                                    <img src="https://caladiumconsulting.com/wp-content/uploads/2025/03/oilandgas-blog-image-600x363.png" className="rounded-lg  mb-4" alt="Related" />
                                    <h3 className="text-xl text-zinc-900 dm-sans font-medium ">Nigeria’s Oil & Gas Industry in 2024: Growth, Challenges, and Future Prospects</h3>
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
                            <h4 className="text-sm font-bold text-gray-900 mb-6 border-l-4 border-[#76B82D] pl-4">Categories</h4>
                            <ul className="space-y-3 text-sm text-gray-600 dm-sans">
                                {['Analysis', 'Business', 'Economy', 'Industry', 'Uncategorized'].map((cat) => (
                                    <li key={cat} className="hover:text-[#76B82D] cursor-pointer transition-colors flex justify-between items-center group">
                                        <span>{cat}</span>
                                        <span className="text-[10px] bg-gray-50 px-2 py-1 rounded group-hover:bg-[#76B82D]/10 text-gray-400 group-hover:text-[#76B82D]">12</span>
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

export default BlogDetailPage2;