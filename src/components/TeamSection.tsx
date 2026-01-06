import React from 'react';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

// 1. Define the Data Interface
interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

// 2. Mock Data
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
  return (
    <section className="bg-black text-white py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-green-500">Team</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
            Our firm is made up of dedicated professionals committed to exceptional client services.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="group flex flex-col">
              
              {/* Animated Image Container */}
              <div className="relative w-full aspect-square mb-5 bg-gray-900 rounded-sm overflow-hidden select-none">
                
                {/* Top-Left Triangle 
                    - whileInView with once:false allows it to trigger every time you scroll to it
                    - clipPath 101% avoids the sub-pixel "broken line" gap
                */}
                <motion.div 
                  initial={{ x: 0, y: 0 }}
                  whileInView={{ 
                    x: [-40, 0], 
                    y: [-40, 0] 
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ 
                    duration: 1.6, 
                    delay: index * 0.15, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="absolute inset-0 z-10"
                  style={{ 
                    clipPath: 'polygon(0 0, 101% 0, 0 101%)',
                    transform: 'scale(1.01)' 
                  }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top pointer-events-none" 
                  />
                </motion.div>

                {/* Bottom-Right Triangle */}
                <motion.div 
                  initial={{ x: 0, y: 0 }}
                  whileInView={{ 
                    x: [40, 0], 
                    y: [40, 0] 
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ 
                    duration: 1.6, 
                    delay: index * 0.15, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="absolute inset-0"
                  style={{ 
                    clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                    transform: 'scale(1.01)'
                  }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top pointer-events-none" 
                  />
                </motion.div>
              </div>

              {/* Info Details */}
              <div className="flex justify-between items-start gap-4 mb-2">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                  {member.name}
                </h3>
                <div className="flex gap-2 text-gray-400 shrink-0">
                  {member.linkedin && (
                    <a href={member.linkedin} className="hover:text-purple-500 transition-colors bg-gray-800 p-2 rounded-sm">
                      <FaLinkedinIn size={14} />
                    </a>
                  )}
                  {member.twitter && (
                    <a href={member.twitter} className="hover:text-purple-500 transition-colors bg-gray-800 p-2 rounded-sm">
                      <FaTwitter size={14} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-gray-400 text-sm font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;