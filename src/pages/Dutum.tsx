import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Dutum: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoId = "vxF5eRcLrHQ"; // Extracted from your URL

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
                    Dutum
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
                        The Dutum Culture and   <span className="text-[#94257a]">Enterprise Transformation Experience</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-200 italic border-l-4 border-[#94257a] pl-4">
                        Dutum Company Limited is a nearly 4-decade-old family construction company with legacy footprints across Nigeria.
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
                            Dutum Company Limited is a nearly 4-decade-old family construction company with legacy
                            footprints across Nigeria. Built by a passionate father and sustained by a generation of believers
                            in nation-building through infrastructures that mark landscapes, Dutum Company Limited
                            maintains offices in Ibadan (its founding place), FCT Abuja, its northern coordinating office and
                            Lagos, its office in the South West.
                        </p>
                    </motion.section>

                    <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="w-8 h-px bg-[#94257a] mr-4"></span> <p className='text-white'> The</p> <span className="text-[#94257a] ml-2">Challenge</span>
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-200 max-w-4xl">
                            As a legacy business, Dutum required a transformation of its business model, operating structure
                            and leadership. Whilst Temitope Runsewe, the now MD of Dutum had inherited a legacy brand.
                            The requisite systems, processes and policies, and procedures required for it to compete and
                            become a known name amongst indigenous construction firms were lacking. This was a concern
                            as the leadership of Durum must ensure its sustainability. At the time, the brand barely had a
                            functional office space and just about 9 members of staff.
                        </p>
                    </motion.section>

                    <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="w-8 h-px bg-[#94257a] mr-4"></span> <p className='text-white'>Solution</p>
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-200 max-w-4xl">
                            Dutum engaged Caladium Consulting at the recommendation of a happy client. The nature of
                            this engagement covered a 360° enterprise transformation which covered extensive internal and
                            external diagnostics, culture change, rigorous strategy deliberations and planning, the design of
                            organization structure, corporate image rebranding, performance management, financial
                            modeling, staff competency assessment, overhaul, strategy execution, policy and process
                            development and more.
                        </p>
                    </motion.section>

                    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="pt-10 border-t border-gray-100">
                        <motion.h2 variants={fadeInUp} className="text-2xl font-bold mb-10"> <span className="text-white">Results</span></motion.h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Result 1: Structural Evolution */}
                            <motion.div
                                variants={fadeInUp}
                                whileHover={{ y: -8 }}
                                className="bg-white/5 p-10 rounded-2xl border border-white/10 border-t-4 border-t-[#94257a] backdrop-blur-sm"
                            >
                                <p className="text-gray-200 text-lg leading-relaxed">
                                    Evolved from a legacy heritage to a top-tier indigenous construction firm,
                                    transitioning from a one-man-led pool of artisans to an <strong>expert-led
                                        engineering management organization</strong> with standardized global systems.
                                </p>
                            </motion.div>

                            {/* Result 2: Portfolio & Influence */}
                            <motion.div
                                variants={fadeInUp}
                                whileHover={{ y: -8 }}
                                className="bg-white/5 p-10 rounded-2xl border border-white/10 border-t-4 border-t-[#94257a] backdrop-blur-sm"
                            >
                                <p className="text-gray-200 text-lg leading-relaxed">
                                    Significant growth in project volume, maintaining <strong>no less than 14
                                        consecutive projects</strong> at any given time with established brand
                                    influence across every region in Nigeria.
                                </p>
                            </motion.div>
                        </div>

                        {/* Sustained Engagement Highlight */}
                        <motion.div
                            variants={fadeInUp}
                            className="mt-12 p-8 rounded-2xl bg-[#94257a]/10 border border-[#94257a]/20"
                        >
                            <p className="text-xl font-medium text-gray-100 text-center leading-relaxed">
                                "For the value Caladium brings, Dutum Company Limited has sustained and expanded
                                its engagement for over 3 years, consulting on critical interests well
                                beyond the initial scope."
                            </p>
                        </motion.div>
                    </motion.section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Dutum;