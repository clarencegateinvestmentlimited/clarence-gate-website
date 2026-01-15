import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SohcahtoaCaseStudy: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoId = "9r9hQTzipj8"; // Extracted from your URL

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    return (
        <>
            <Header />
             <section className="bg-[#1f242c] py-20 flex justify-center items-center">
          <h1 className="text-white pt-12 text-2xl text-start md:text-4xl font-light dm-sans tracking-tight">
            Sohcahtoa Holdings
          </h1>
        </section>
            <div className="max-w-5xl mx-auto px-6 py-12 font-sans text-gray-800 overflow-hidden">

                {/* Header Section */}
                <motion.header
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mb-12 text-center md:text-left"
                >
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-200 leading-tight">
                        Driving Growth through Strategic Execution: A Case Study of <span className="text-[#94257a]">Sohcahtoa Holdings</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-200 italic border-l-4 border-[#94257a] pl-4">
                        Strategic execution propels Sohcahtoa: Innovative solutions, streamlined operations, and market leadership fuel remarkable growth.
                    </p>
                </motion.header>

                {/* Video Hero Section with Play Trigger */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl mb-16 bg-black group cursor-pointer"
                    onClick={() => !isPlaying && setIsPlaying(true)}
                >
                    <AnimatePresence mode="wait">
                        {!isPlaying ? (
                            <motion.div
                                key="thumbnail"
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="relative w-full h-full"
                            >
                                {/* Using high-res YouTube Thumbnail or your custom image */}
                                <img
                                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                    alt="Sohcahtoa Case Study Video Thumbnail"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                                />

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white shadow-xl"
                                    >
                                        <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="video"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="w-full h-full"
                            >
                                <iframe
                                    className="w-full h-full"
                                    // Added &rel=0 to the end of the URL
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                                    title="Sohcahtoa Holdings Case Study Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Main Content Sections */}
                <div className="space-y-20">
                    <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="w-8 h-px bg-[#94257a] mr-4"></span> <p className='text-white'>Background</p>
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-200 max-w-4xl">
                            Sohcahtoa Holdings has been a trailblazer in the industry, offering cutting-edge and customer-centric
                            solutions that empower clients to navigate the complex and ever-evolving financial landscape. With a
                            diverse portfolio of subsidiaries, Sohcahtoa has established itself as a formidable player in the market.
                        </p>
                    </motion.section>

                    <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="w-8 h-px bg-[#94257a] mr-4"></span> <p className='text-white'> The</p> <span className="text-[#94257a] ml-2">Challenge</span>
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-200 max-w-4xl">
                            Sohcahtoa’s leadership recognized that to facilitate sustainable growth and stay ahead of the competition,
                            the company needed to drive execution of its strategic initiatives and improve operational efficiency.
                            While the core business was thriving, Sohcahtoa acknowledged the importance of continuous
                            improvement and innovation to maintain its market leadership.
                        </p>
                    </motion.section>

                    <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="w-8 h-px bg-[#94257a] mr-4"></span> <p className='text-white'>Solution</p>
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-200 max-w-4xl">
                            To address this challenge, Sohcahtoa engaged Caladium for a comprehensive strategy retreat, aimed at
                            reassessing and refining their strategy, and identifying key areas for improvement. Additionally,
                            Caladium provided post-strategy implementation and execution support to ensure successful execution of
                            the agreed-upon initiatives.
                        </p>
                    </motion.section>

                    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="pt-10 border-t border-gray-100">
                        <motion.h2 variants={fadeInUp} className="text-2xl font-bold mb-10"> <span className="text-white">Results</span></motion.h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-[#94257a]">
                                <p className="text-gray-700 text-lg italic">
                                    "With Caladium Consulting, our business execution process has really improved; it has become easier and more effective."
                                </p>
                            </motion.div>
                            <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-[#94257a]">
                                <p className="text-gray-700 text-lg">
                                    Achieved enhanced innovation and market leadership by focusing on strategic objectives and their achievement.
                                </p>
                            </motion.div>
                        </div>
                    </motion.section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SohcahtoaCaseStudy;