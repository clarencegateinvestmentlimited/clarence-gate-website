import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

// 1. Added 'path' to the interface
interface BlogPost {
  id: string;
  title: string;
  category: string;
  image: string;
  day: string;
  month: string;
  path: string; // The specific custom URL for each post
}

// 2. Data with your specific unique links
const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    category: 'Analysis | Economy',
    title: "Nigeria's Oil & Gas Industry in 2024: Growth, Challenges, and Future Prospects",
    image: 'https://caladiumconsulting.com/wp-content/uploads/2025/03/oilandgas-blog-image-600x363.png',
    day: '14',
    month: 'Mar',
    path: '/blogs-detail', // First image link
  },
  {
    id: '2',
    category: 'Industry',
    title: "Nigeria's Entertainment Industry in 2024: Trends and Opportunities",
    image: 'https://caladiumconsulting.com/wp-content/uploads/2025/03/entertainment-industry-caladium-blog-image-600x373.png',
    day: '14',
    month: 'Mar',
    path: '/blogs-det', // Second image link
  },
  {
    id: '3',
    category: 'Finance',
    title: "The 2024 Credit and Banking Industry Factsheet",
    image: 'https://caladiumconsulting.com/wp-content/uploads/2025/03/credit-industry-factsheet-600x399.png',
    day: '05',
    month: 'Mar',
    path: '/credit-industry', // Third image link
  },
  {
    id: '4',
    category: 'Analysis | Industry',
    title: "Nigeria's Construction Industry in 2024",
    image: 'https://caladiumconsulting.com/wp-content/uploads/2025/02/caladium-blog-600x250.png',
    day: '25',
    month: 'Feb',
    path: '/construction-industry', // Fourth image link
  },
];

const BlogsPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white px-6 py-12 md:px-12 lg:px-24">
        <header className="mb-16 border-b border-gray-100 pb-8">
          <h1 className="text-4xl text-[#76B82D] font-bold pt-32 pb-2 dm-sans tracking-[0.1em]">Blogs</h1>
          <p className="mt-2 text-xl dm-sans text-gray-500">Insights, analysis, and industry updates.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-16">
          {BLOG_POSTS.map((post) => (
            /* FIX: We now simply use post.path which is unique for every item */
            <Link key={post.id} to={post.path} className="block group cursor-pointer">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative overflow-hidden rounded-lg bg-gray-100 shadow-sm aspect-[16/10]">
                  {/* Glassmorphism Date Badge */}
                  <div className="absolute top-4 left-4 z-20 flex flex-col items-center justify-center w-12 h-14 bg-black/40 backdrop-blur-md border border-white/20 rounded-md text-white shadow-lg">
                    <span className="text-lg font-bold leading-none dm-sans">{post.day}</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider dm-sans">{post.month}</span>
                  </div>

                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>

                <div className="mt-6">
                  <span className="text-xs font-semibold uppercase tracking-widest font-bold dm-sans text-[#76B82D]">
                    {post.category}
                  </span>
                  <h3 className="mt-3 text-xl dm-sans font-medium leading-snug text-gray-900 group-hover:text-zinc-600 transition-colors">
                    {post.title}
                  </h3>
                  <div className="mt-4 flex items-center text-sm dm-sans font-medium text-gray-400 group-hover:text-gray-600 transition-colors">
                    Read Article
                    <svg
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogsPage;