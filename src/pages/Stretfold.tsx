import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const StretfordCaseStudy: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoId = "9r9hQTzipj8";

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    return (
        <div className="min-h-screen">
            <Header />

            {/* Page Banner */}
            <section className="bg-[#1f242c] py-24 flex justify-center align-center items-center border-b border-gray-800">
                <h1 className="text-white pt-4 text-2xl md:text-4xl font-light dm-sans tracking-tight">
                    Stretford Hill Limited (SHL)
                </h1>
            </section>

            <div className="max-w-5xl mx-auto px-6 py-16 font-sans overflow-hidden">

                {/* Header Section */}
                <motion.header
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                        From Enterprise Restructuring to Strategy Execution; The Journey Through  <span className="text-[#94257a]">Stretford Hill’s Evolution</span>
                    </h2>
                    <p className="mt-6 text-lg text-gray-300 italic border-l-4 border-[#94257a] pl-4">
                        Stretford Hill Limited (SHL) was founded to reimagine engineering excellence and expand the quality of indigenous structural construction practices in Nigeria.
                    </p>
                </motion.header>

                {/* Video Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl mb-20 bg-black group cursor-pointer"
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
                                <img
                                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                    alt="Case Study Video Thumbnail"
                                    className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-2xl group-hover:bg-white/30 transition-all">
                                        <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2" />
                                    </div>
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
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                                    title="Sohcahtoa Holdings Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Content Sections */}
                <div className="space-y-24">
                    {/* Background */}
                    <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                            <span className="w-10 h-px bg-[#94257a] mr-4"></span> Background
                        </h3>
                        <p className="text-lg leading-relaxed text-gray-300">
                            Stretford Hill Limited (SHL) was founded to reimagine engineering excellence and expand the
                            quality of indigenous structural construction practices in Nigeria. Its chief executive officer,
                            Lakunle Runsewe, believes that the discipline of quality engineering is non-negotiable and
                            desires to build an institution of young engineers that reflects this belief while remaining cost
                            efficient.
                        </p>
                    </motion.section>

                    {/* Challenge */}
                    <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                            <span className="w-10 h-px bg-[#94257a] mr-4"></span> The <span className="text-[#94257a] ml-2">Challenge</span>
                        </h3>
                        <p className="text-lg leading-relaxed text-gray-300">
                            The scale of SHL engineering operations grew quite exponentially demanding an increase in
                            staff strength, consistency in quality of delivery and efficiency in the management of these
                            projects. As the scale of operations increased, the disparity between technical engineering
                            operations and engineering management was also apparent. Furthermore, the need to standardize
                            support functions and make them responsive to the increasing operational demands was also
                            heightened. All these culminated in the involvement of the CEO in operations making his office
                            ineffective.
                        </p>
                    </motion.section>

                    {/* Solution */}
                    <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                            <span className="w-10 h-px bg-[#94257a] mr-4"></span> The Solution
                        </h3>
                        <p className="text-lg leading-relaxed text-gray-300">
                            The restructuring of SHL has brought about standardization and consistency in its operational
                            and backend processes. This has provided it with the capacity to continuously expand its
                            capacity and to do more without the scare of its standard being corrupted. We essentially
                            achieved this by defining and instilling through a rigorous process who an SHL person is.
                            Through our painstaking implementation of the goals defined in the transformation engagement,
                            the company essentially function independently of the Founder and CEO.
                            This has allowed the CEO to focus on more strategic functions of business development. As a
                            result, its project portfolio has expanded reaching industrial, commercial and residential estate
                            projects and more. Achieving over 80% on-time completion of projects in its portfolio.

                            With the support of Caladium Consulting, Stretford Hill Limited has grown to become a
                            strategy-led organization three years post-organisational restructuring.
                        </p>
                    </motion.section>

                    {/* Results */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="pt-16 border-t border-gray-800"
                    >
                        <motion.h3 variants={fadeInUp} className="text-3xl font-bold mb-12 text-white text-center md:text-left">
                            Results
                        </motion.h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div variants={fadeInUp} whileHover={{ y: -8 }} className="bg-white/5 p-10 rounded-2xl border border-white/10 border-t-4 border-t-[#94257a] backdrop-blur-sm">
                                <p className="text-gray-200 text-lg italic leading-relaxed">
                                    "With Caladium Consulting, our business execution process has really improved; it has become easier and more effective over the years."
                                </p>
                            </motion.div>
                            <motion.div variants={fadeInUp} whileHover={{ y: -8 }} className="bg-white/5 p-10 rounded-2xl border border-white/10 border-t-4 border-t-[#94257a] backdrop-blur-sm">
                                <p className="text-gray-200 text-lg leading-relaxed">
                                    The strategy development process was detailed and tailored to meet their specific needs,
                                    leading to enhanced strategic planning and achievement of objectives.
                                </p>
                            </motion.div>
                        </div>
                    </motion.section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default StretfordCaseStudy;