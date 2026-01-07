import React, { useRef } from 'react';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

const teamMembers: TeamMember[] = [
  { 
    name: "Ayo Bankole Akintujoye", 
    role: "Lead Strategist | CEO", 
    image: "Images/ay-profile.jpeg", 
    linkedin: "#", 
    twitter: "#" 
  },
  { 
    name: "Chetachukwu Odii", 
    role: "Strategy Manager", 
    image: "/Images/Odii-profile.jpg", 
    linkedin: "#" 
  },
  { 
    name: "Ishioma Odigwe", 
    role: "Senior Strategy Analyst", 
    image: "/Images/Isioma-profile.jpeg", 
    linkedin: "#" 
  },
];

const TeamSection: React.FC = () => {
  const animationDuration = 3.2;
  const keyframes = [0, 0.2, 0.8, 1]; 
  const splitDistance = 40; 

  return (
    <section className="bg-black text-white py-12 md:py-20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        <div className="mb-12 md:mb-16">
           <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="text-[#94257a] text-[10px] font-bold tracking-[0.5em] uppercase">Network</span>
            <div className="w-12 h-[1px] bg-zinc-800" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-zinc-500">Team</span>
          </h2>
          <p className="text-zinc-500 text-base sm:text-lg max-w-2xl font-light">
            Our firm is made up of dozens of dedicated multi-disciplinary professionals who are committed to exceptional client services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="group flex flex-col">
              
              <div className="relative w-full aspect-square mb-6 bg-[#050505] rounded-sm overflow-hidden select-none">
                
                {/* 1. THE FLOATING ROLE */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: [0, 1, 1, 0] }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ 
                            duration: animationDuration, 
                            times: keyframes,
                            repeat: Infinity,
                            repeatDelay: 2,
                            delay: index * 0.1
                        }}
                        className="text-center px-2"
                    >
                        <p className="text-[#94257a] font-bold text-xs md:text-sm uppercase tracking-[0.2em] -rotate-45 leading-none whitespace-nowrap">
                            {member.role}
                        </p>
                    </motion.div>
                </div>

                {/* 2. TOP-LEFT TRIANGLE */}
                <motion.div 
                  initial={{ x: 0, y: 0 }}
                  whileInView={{ 
                    x: [0, -splitDistance, -splitDistance, 0], 
                    y: [0, -splitDistance, -splitDistance, 0] 
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ 
                    duration: animationDuration, 
                    times: keyframes,
                    ease: [0.22, 1, 0.36, 1],
                    repeat: Infinity,
                    repeatDelay: 2,
                    delay: index * 0.1
                  }}
                  className="absolute inset-0 z-20"
                  /* FIX: polygon extended to 101% and scale added to remove the seam line */
                  style={{ 
                    clipPath: 'polygon(0 0, 101% 0, 0 101%)',
                    transform: 'scale(1.01)'
                  }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover" 
                  />
                </motion.div>

                {/* 3. BOTTOM-RIGHT TRIANGLE */}
                <motion.div 
                  initial={{ x: 0, y: 0 }}
                  whileInView={{ 
                    x: [0, splitDistance, splitDistance, 0], 
                    y: [0, splitDistance, splitDistance, 0] 
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ 
                    duration: animationDuration, 
                    times: keyframes,
                    ease: [0.22, 1, 0.36, 1],
                    repeat: Infinity,
                    repeatDelay: 2,
                    delay: index * 0.1
                  }}
                  className="absolute inset-0 z-10"
                  /* FIX: Coordinates slightly expanded (-1% and 101%) to overlap the diagonal seam */
                  style={{ 
                    clipPath: 'polygon(101% -1%, 101% 101%, -1% 101%)',
                    transform: 'scale(1.01)'
                  }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover" 
                  />
                </motion.div>
              </div>

              <div className="flex justify-between items-start gap-4 mb-3">
                <h3 className="text-xl font-bold tracking-tight text-white uppercase">
                  {member.name}
                </h3>
                <div className="flex gap-2">
                  {member.linkedin && (
                    <a href={member.linkedin} className="text-zinc-500 hover:text-[#94257a] transition-colors">
                      <FaLinkedinIn size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="overflow-hidden">
                  <motion.p 
                    initial={{ opacity: 1, x: 0 }}
                    whileInView={{ 
                        opacity: [1, 0, 0, 1], 
                        x: [0, -10, -10, 0]
                    }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ 
                        duration: animationDuration, 
                        times: keyframes,
                        repeat: Infinity,
                        repeatDelay: 2,
                        delay: index * 0.1
                    }}
                    className="text-white text-[13px] font-black uppercase"
                  >
                    {member.role}
                  </motion.p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;