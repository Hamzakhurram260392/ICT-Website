import React from 'react';
import Link from 'next/link';

// --- Blog Card Data ---
const blogPosts = [
  {
    category: 'Corporate',
    title: 'Corporate Law Knowledge',
    summary: 'Corporate law knowledge empowers business advisors to guide startups, navigate mergers, and provide strategic, risk-aware solutions.',
    author: 'Asma Khan',
    date: 'December 05, 2025',
    link: '#', // Placeholder link
    imageSrc: 'https://images.unsplash.com/photo-1505664194779-8beceb937060?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder for the Corporate Law image
  },
  {
    category: 'Taxation',
    title: 'Master UK Taxation Quickly',
    summary: 'Master UK taxation fast and unlock global career opportunities with HMRC-approved courses like ATT.',
    author: 'Muntazir Ali Shan',
    date: 'December 4, 2025',
    link: '#',
    imageSrc: 'https://images.unsplash.com/photo-1549721727-41443657751c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder for the Taxation image
  },
  {
    category: 'FBR',
    title: "FBR's Digital Transformation",
    summary: "FBR's digital transformation is changing tax administration. Professionals must adapt to e-filing, automated compliance, and data-driven reporting to stay ahead in 2025.",
    author: 'Javid Khan',
    date: 'December 3, 2025',
    link: '#',
    imageSrc: 'https://images.unsplash.com/photo-1596706979603-5188f57f6d49?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder for the FBR building image
  },
  // Duplicates added as requested in your input
  {
    category: 'Corporate',
    title: 'Corporate Law Knowledge',
    summary: 'Corporate law knowledge empowers business advisors to guide startups, navigate mergers, and provide strategic, risk-aware solutions.',
    author: 'Asma Khan',
    date: 'December 05, 2025',
    link: '#', 
    imageSrc: 'https://images.unsplash.com/photo-1505664194779-8beceb937060?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
  },
  {
    category: 'Taxation',
    title: 'Master UK Taxation Quickly',
    summary: 'Master UK taxation fast and unlock global career opportunities with HMRC-approved courses like ATT.',
    author: 'Muntazir Ali Shan',
    date: 'December 4, 2025',
    link: '#',
    imageSrc: 'https://images.unsplash.com/photo-1549721727-41443657751c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
  },
  {
    category: 'FBR',
    title: "FBR's Digital Transformation",
    summary: "FBR's digital transformation is changing tax administration. Professionals must adapt to e-filing, automated compliance, and data-driven reporting to stay ahead in 2025.",
    author: 'Javid Khan',
    date: 'December 3, 2025',
    link: '#',
    imageSrc: 'https://images.unsplash.com/photo-1596706979603-5188f57f6d49?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
  },
];

// --- Single Blog Card Component ---
interface BlogCardProps {
  post: (typeof blogPosts)[0];
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:shadow-2xl hover:scale-[1.02]">
      
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={post.imageSrc}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        
        {/* Category */}
        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">
          {post.category}
        </p>

        {/* Title and Link Icon */}
        <h3 className="text-xl font-bold text-gray-900 leading-snug">
          <Link href={post.link} className="hover:text-indigo-700 flex items-center justify-between">
            {post.title}
            <span className="text-indigo-600 ml-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </span>
          </Link>
        </h3>

        {/* Summary */}
        <p className="text-gray-600 text-base">
          {post.summary}
        </p>

        {/* Author and Date */}
        <div className="flex items-center space-x-4 pt-3 border-t border-gray-100">
          
          {/* Author Avatar (Placeholder) */}
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
             {/* You can replace this with an actual author image */}
             <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.98 5.98 0 0010 16a5.979 5.979 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
          </div>
          
          <div>
            <p className="text-sm font-medium text-gray-800">{post.author}</p>
            <p className="text-xs text-gray-500">{post.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Blog Section Component (The section you requested to add) ---
const BlogSection: React.FC = () => {
  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Heading/Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Our Latest Insights
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Stay Ahead in Business and Taxation
          </p>
        </div>

        {/* The Card Grid (now 6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>

      </div>
    </div>
  );
};


// --- Original Contact Section Component ---
const OriginalContactSection: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-6 py-16">
            {/* Main Grid Container: Left Text & Right Image Structure */}
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* -------------------------------------
                  LEFT SIDE: Text & Buttons
                  ------------------------------------- 
                */}
                <div className="text-center lg:text-left space-y-10">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-green-500">
                        We're Here to Help
                    </h1>

                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-md mx-auto lg:mx-0">
                        Have a question or need support? Send us a message and we'll respond as soon as possible.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                        <button className="px-10 py-4 bg-indigo-700 text-white font-semibold rounded-full shadow-2xl hover:bg-indigo-800 transition transform hover:scale-105">
                            Contact Us
                        </button>
                        <button className="px-10 py-4 bg-white text-indigo-700 font-semibold rounded-full border-2 border-indigo-700 shadow-2xl hover:bg-indigo-50 transition transform hover:scale-105">
                            Enroll Now
                        </button>
                    </div>
                </div>

                {/* -------------------------------------
                  RIGHT SIDE: Image Structure
                  ------------------------------------- 
                */}
                <div className="flex flex-col lg:flex-row gap-5 h-[500px] lg:h-[650px]">
                    
                    {/* 1. Left Side of the Image Block: Badi Image */}
                    <div className="flex-1 lg:flex-[2] min-h-[300px] lg:min-h-full"> 
                        <div className="h-full w-full rounded-3xl shadow-xl overflow-hidden">
                            <img
                                // Image 1: Phone Handset
                                src="https://images.unsplash.com/photo-1546736412-421711204646?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Retro phone receiver in hand"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    
                    {/* 2. Right Wrapper of the Image Block: Do Choti Images */}
                    <div className="flex-1 lg:flex-[1] flex flex-col gap-5">
                        
                        {/* Right Top Image (Flex: 1) */}
                        <div className="flex-1 rounded-3xl shadow-xl overflow-hidden">
                            <img
                                // Image 2: Contact Us Card
                                src="https://images.unsplash.com/photo-1524758870198-ed14798a7a92?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Contact Us card"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        {/* Right Bottom Image (Flex: 1) */}
                        <div className="flex-1 rounded-3xl shadow-xl overflow-hidden">
                            <img
                                // Image 3: Digital Contact
                                src="https://images.unsplash.com/photo-1596526131083-e8c5660d53c3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Digital contact interface"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
}

// --- Combined Complete Page Component ---
export default function CompletePage() {
    return (
        // Poore page ko wrap karne ke liye
        <div className="min-h-screen bg-gray-50">
            
            {/* -------------------------------------
              SECTION 1: ORIGINAL CONTACT SECTION
              ------------------------------------- 
            */}
            <OriginalContactSection />

            {/* -------------------------------------
              SECTION 2: BLOG SECTION (Aapki Latest Request)
              ------------------------------------- 
            */}
            <BlogSection />

        </div>
    );
}