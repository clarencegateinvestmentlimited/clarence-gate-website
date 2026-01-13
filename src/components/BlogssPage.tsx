import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// 1. Define the TypeScript interface for our blog data
interface BlogPost {
  id: string;
  title: string;
  category: string;
  image: string;
  slug: string; 
  date?: string;
}

// 2. Dummy Data - Replace the 'image' links with your actual URLs
const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    category: 'Analysis | Economy',
    title: "Nigeria's Oil & Gas Industry in 2024: Growth, Challenges, and Future Prospects",
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    slug: 'oil-and-gas-2024',
  },
  {
    id: '2',
    category: 'Industry',
    title: "Nigeria's Entertainment Industry in 2024: Trends and Opportunities",
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop',
    slug: 'entertainment-trends-2024',
  },
  {
    id: '3',
    category: 'Finance',
    title: "The 2024 Credit and Banking Industry Factsheet",
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    slug: 'banking-factsheet',
  },
  {
    id: '4',
    category: 'Analysis | Industry',
    title: "Nigeria's Construction Industry in 2024",
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2070&auto=format&fit=crop',
    slug: 'construction-industry',
  },
];

const BlogPage: React.FC = () => {
  // Parallax effect for the background image
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* HERO SECTION (Mirrors ServiceHero) */}
      <section className="relative h-[70vh] w-full flex items-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: y1 // Moving background effect
          }}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-[1px]" />
        </motion.div>

        <div className="container mx-auto px-6 md:px-[8%] relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[#76B82D] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
              Knowledge Hub
            </span>
            <h1 className="text-4xl md:text-7xl text-white font-light leading-[1.1] mb-8">
              Insights & <br />
              <span className="italic font-serif text-zinc-400">Strategic Intelligence.</span>
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
              In-depth analysis of market trends, economic shifts, and industrial 
              growth across the African continent.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* BLOG GRID SECTION */}
      <div className="px-6 py-24 md:px-[8%] lg:px-[8%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {BLOG_POSTS.map((post) => (
            <motion.a
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group cursor-pointer block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Image Container with Hover Effect */}
              <div className="relative overflow-hidden aspect-[16/10] bg-zinc-900 border border-white/10 group-hover:border-[#76B82D]/50 transition-colors duration-500">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
                  whileHover={{ scale: 1.1 }}
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Section */}
              <div className="mt-8">
                <span className="text-[#76B82D] text-[10px] font-bold uppercase tracking-[0.3em]">
                  {post.category}
                </span>
                <h3 className="mt-4 text-2xl font-light leading-snug text-zinc-100 group-hover:text-white transition-colors">
                  {post.title}
                </h3>
                
                <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-[#76B82D] transition-colors duration-300">
                  Explore Report
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <svg
                      className="ml-3 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="py-20 flex justify-center opacity-20">
        <div className="h-[100px] w-[1px] bg-gradient-to-b from-[#76B82D] to-transparent" />
      </div>
    </div>
  );
};

export default BlogPage;