// import Link from "next/link";
// import { client } from "@/sanity/lib/client";
// import { singleBlogQuery } from "@/sanity/lib/queries";

// import { FiTwitter } from "react-icons/fi";
// import { LuYoutube } from "react-icons/lu";
// import { FaFacebookF } from "react-icons/fa6";
// import { AiOutlineInstagram } from "react-icons/ai";

// // ================= FETCH BLOGS =================
// async function getBlogs() {
//   return await client.fetch(singleBlogQuery);
// }

// // ================= TYPES =================
// interface BlogPost {
//   _id: string;
//   title: string;
//   excerpt: string;
//   publishedAt: string;
//   slug: { current: string };
//   imageUrl: string;
//   author?: {
//     name: string;
//   };
// }

// // ================= BLOG CARD =================
// const BlogCard = ({ post }: { post: BlogPost }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-xl overflow-hidden transition hover:scale-[1.02]">
      
//       <div className="relative h-48 w-full">
//         <img
//           src={post.imageUrl}
//           alt={post.title}
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//       </div>

//       <div className="p-6 space-y-4">
//         <h3 className="text-xl font-bold text-gray-900">
//           <Link
//             href={`/blogs/${post.slug.current}`}
//             className="hover:text-[#3D4098] flex justify-between items-center"
//           >
//             {post.title}
//             <span className="text-[#3D4098] ml-2">↗</span>
//           </Link>
//         </h3>

//         <p className="text-gray-600">{post.excerpt}</p>

//         <div className="pt-3 border-t text-sm text-gray-500">
//           By {post.author?.name || "Admin"} •{" "}
//           {new Date(post.publishedAt).toDateString()}
//         </div>
//       </div>
//     </div>
//   );
// };

// // ================= BLOG SECTION =================
// const BlogSection = async () => {
//   const blogs: BlogPost[] = await getBlogs();

//   return (
//     <div className="bg-gray-50 pb-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">

//         <div className="text-center mb-16">
//           <h2 className="text-base font-semibold text-[#3D4098] uppercase">
//             Our Latest Insights
//           </h2>
//           <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
//             Stay Ahead in Business and Taxation
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {blogs.map((post) => (
//             <BlogCard key={post._id} post={post} />
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// // ================= HERO / CONTACT SECTION =================
// const OriginalContactSection = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-6 py-16">
//           <div className="flex justify-start px-28 py-10 gap-14">
                
//                         <div>
//                           <h1 className="rotate-270 text-lg -ml-1 font-extrabold text-[#15A959]">ICT</h1>
//                           <p className="w-1 h-28 font-bold bg-black ml-3 mt-3 mb-3"></p>
                
//                                 <a className="mt-5 flex text-[#3D4098] ml-1 text-lg" href=""><FaFacebookF/></a> 
//                                 <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href=""><FiTwitter /></a> 
//                                 <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href=""><AiOutlineInstagram /></a> 
//                                 <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href=""><LuYoutube /></a> 
                          
//                           <p className="w-1 h-54 bg-black ml-3 mt-3 mb-3"></p>
//                           </div>
//                         <div>
//                           <h1 className=" text-5xl  text-[#15A959] mt-30 font-extrabold ">Explore <span className="text-[#3D4098]">Our Articles</span> </h1> 
//                           <p className="text-2xl font-sans mt-9 ">Dive into helpful articles, tips, and  <br></br>updates created to guide you in your journey. </p>
//                           <div className="mt-12 gap-4 flex">
//                             <a className="bg-[#3D4098] py-4 px-10 text-white font-bold text-xl rounded-lg" href="">Enroll Now</a>
//                           <a className="py-3 px-12 border-[#3D4098] border-3 text-[#3D4098] font-bold text-xl rounded-lg" href="">Explore</a>
//                           </div>
//                           </div> 
//                         <div><img className="h-96 w-72 mt-14" src="34.png" alt="" /></div>
//                         <div>
//                           <div><img className="h-46 w-72 mt-14 -ml-8" src="36.png" alt="" /></div>
//                          <div><img className="h-46 w-72 -ml-8 mt-4" src="37.png" alt="" /></div>
//                         </div>
//                       </div>
//             {/* Main Grid Container: Left Text & Right Image Structure */}
          
//         </div>
//   );
// };

// // ================= PAGE =================
// export default async function BlogPage() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <OriginalContactSection />
//       <BlogSection />
//     </div>
//   );
// }

 import { FiTwitter } from "react-icons/fi";
 import { LuYoutube } from "react-icons/lu";
 import { FaFacebookF } from "react-icons/fa6";
 import { AiOutlineInstagram } from "react-icons/ai";
import { client } from "@/sanity/lib/client";
import { blogsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

import Link from "next/link";

async function getBlogs() {
  return client.fetch(blogsQuery); // ✅ NO slug here
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div>
      <div className="bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-6 py-16">
           <div className="flex justify-start px-28 py-10 gap-14">
                
                         <div>
                           <h1 className="rotate-270 text-lg -ml-1 font-extrabold text-[#15A959]">ICT</h1>
                           <p className="w-1 h-28 font-bold bg-black ml-3 mt-3 mb-3"></p>
                
                                 <a className="mt-5 flex text-[#3D4098] ml-1 text-lg" href=""><FaFacebookF/></a> 
                                 <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href=""><FiTwitter /></a> 
                                 <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href=""><AiOutlineInstagram /></a> 
                                 <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href=""><LuYoutube /></a> 
                          
                           <p className="w-1 h-54 bg-black ml-3 mt-3 mb-3"></p>
                           </div>
                         <div>
                           <h1 className=" text-5xl  text-[#15A959] mt-30 font-extrabold ">Explore <span className="text-[#3D4098]">Our Articles</span> </h1> 
                           <p className="text-2xl font-sans mt-9 ">Dive into helpful articles, tips, and  <br></br>updates created to guide you in your journey. </p>
                           <div className="mt-12 gap-4 flex">
                             <a className="bg-[#3D4098] py-4 px-10 text-white font-bold text-xl rounded-lg" href="">Enroll Now</a>
                           <a className="py-3 px-12 border-[#3D4098] border-3 text-[#3D4098] font-bold text-xl rounded-lg" href="">Explore</a>
                           </div>
                           </div> 
                         <div><img className="h-96 w-72 mt-14" src="34.png" alt="" /></div>
                         <div>
                           <div><img className="h-46 w-72 mt-14 -ml-8" src="36.png" alt="" /></div>
                          <div><img className="h-46 w-72 -ml-8 mt-4" src="37.png" alt="" /></div>
                         </div>
                       </div>
             {/* Main Grid Container: Left Text & Right Image Structure */}
          
         </div>
    <div className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-3 gap-8">
      {blogs.map((blog: any) => (
        <Link key={blog._id} href={`/blogs/${blog.slug}`}>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img
  src={
    blog.mainImage
      ? urlFor(blog.mainImage).width(600).height(400).url()
      : "/placeholder.jpg"
  }
  alt={blog.title}
  className="w-full h-48 object-cover"
/>

            {/* <div className="p-5">
              <h3 className="font-bold text-xl">{blog.title}</h3>
              <p className="text-gray-500">{blog.excerpt}</p>
            </div> */}
             {/* CONTENT */}
      <div className="p-6">
        {/* CATEGORY (optional static like image) */}
        <span className="text-sm text-[#3D4098] font-semibold">
          {blog.category || "Corporate"}
        </span>

        {/* TITLE */}
        <h3 className="mt-2 text-xl font-bold text-gray-900 leading-snug">
          {blog.title}
        </h3>

        {/* EXCERPT */}
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {blog.excerpt}
        </p>

        {/* AUTHOR + DATE */}
        <div className="flex items-center gap-3 mt-6">
          <img
            src="/avatar.png"
            alt="Author"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="text-sm">
            <p className="font-semibold text-gray-800">
              {blog.author?.name || "Admin"}
            </p>
            <p className="text-gray-400 text-xs">
              {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
}












// import React from 'react';
// import Link from 'next/link';
// import { FiTwitter } from "react-icons/fi";
// import { LuYoutube } from "react-icons/lu";
// import { FaFacebookF } from "react-icons/fa6";
// import { AiOutlineInstagram } from "react-icons/ai";

// // --- Blog Card Data ---
// const blogPosts = [
//   {
//     category: 'Corporate',
//     title: 'Corporate Law Knowledge',
//     summary: 'Corporate law knowledge empowers business advisors to guide startups, navigate mergers, and provide strategic, risk-aware solutions.',
//     author: 'Meer',
//     date: 'December 05, 2025',
//     link: '/blogs/Corporate', // Placeholder link
//     imageSrc: '38.png', // Placeholder for the Corporate Law image
//   },
//   {
//     category: 'Taxation',
//     title: 'Master UK Taxation Quickly',
//     summary: 'Master UK taxation fast and unlock global career opportunities with HMRC-approved courses like ATT.',
//     author: 'Muntazir Ali Shan',
//     date: 'December 4, 2025',
//     link: '#',
//     imageSrc: '39.png', // Placeholder for the Taxation image
//   },
//   {
//     category: 'FBR',
//     title: "FBR's Digital Transformation",
//     summary: "FBR's digital transformation is changing tax administration. Professionals must adapt to e-filing, automated compliance, and data-driven reporting to stay ahead in 2025.",
//     author: 'Javid Khan',
//     date: 'December 3, 2025',
//     link: '#',
//     imageSrc: 'fbr.png', // Placeholder for the FBR building image
//   },
//   // Duplicates added as requested in your input
//   {
//     category: 'Corporate',
//     title: 'Corporate Law Knowledge',
//     summary: 'Corporate law knowledge empowers business advisors to guide startups, navigate mergers, and provide strategic, risk-aware solutions.',
//     author: 'Asma',
//     date: 'December 05, 2025',
//     link: "/blogs/blog1", 
//     imageSrc: '38.png', 
//   },
//   {
//     category: 'Taxation',
//     title: 'Master UK Taxation Quickly',
//     summary: 'Master UK taxation fast and unlock global career opportunities with HMRC-approved courses like ATT.',
//     author: 'Muntazir Ali Shan',
//     date: 'December 4, 2025',
//     link: '#',
//     imageSrc: '39.png', 
//   },
//   {
//     category: 'FBR',
//     title: "FBR's Digital Transformation",
//     summary: "FBR's digital transformation is changing tax administration. Professionals must adapt to e-filing, automated compliance, and data-driven reporting to stay ahead in 2025.",
//     author: 'Javid Khan',
//     date: 'December 3, 2025',
//     link: '#',
//     imageSrc: 'fbr.png', 
//   },
// ];

// // --- Single Blog Card Component ---
// interface BlogCardProps {
//   post: (typeof blogPosts)[0];
// }

// const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:shadow-2xl hover:scale-[1.02]">
      
//       {/* Image Container */}
//       <div className="relative h-48 w-full overflow-hidden">
//         <img
//           src={post.imageSrc}
//           alt={post.title}
//           className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-6 space-y-4">
        
//         {/* Category */}
//         <p className="text-sm font-semibold text-[#3D4098] uppercase tracking-widest">
//           {post.category}
//         </p>

//         {/* Title and Link Icon */}
//         <h3 className="text-xl font-bold text-gray-900 leading-snug">
//           <Link href={post.link} className="hover:text-[#3D4098] flex items-center justify-between">
//             {post.title}
//             <span className="text-[#3D4098] ml-2">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
//             </span>
//           </Link>
//         </h3>

//         {/* Summary */}
//         <p className="text-gray-600 text-base">
//           {post.summary}
//         </p>

//         {/* Author and Date */}
//         <div className="flex items-center space-x-4 pt-3 border-t border-gray-100">
          
//           {/* Author Avatar (Placeholder) */}
//           <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
//              {/* You can replace this with an actual author image */}
//              <svg className="w-6 h-6 text-[#3D4098]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.98 5.98 0 0010 16a5.979 5.979 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
//           </div>
          
//           <div>
//             <p className="text-sm font-medium text-gray-800">{post.author}</p>
//             <p className="text-xs text-gray-500">{post.date}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// // --- Blog Section Component (The section you requested to add) ---
// const BlogSection: React.FC = () => {
//   return (
//     <div className="bg-gray-50 pb-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Main Heading/Introduction */}
//         <div className="text-center mb-16">
//           <h2 className="text-base font-semibold text-[#3D4098] tracking-wide uppercase">
//             Our Latest Insights
//           </h2>
//           <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//             Stay Ahead in Business and Taxation
//           </p>
//         </div>

//         {/* The Card Grid (now 6 cards) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {blogPosts.map((post, index) => (
//             <BlogCard key={index} post={post} />
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };


// // --- Original Contact Section Component ---
// const OriginalContactSection: React.FC = () => {
//     return (
//         <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-6 py-16">
//           <div className="flex justify-start px-28 py-10 gap-14">
                
//                         <div>
//                           <h1 className="rotate-270 text-lg -ml-1 font-extrabold text-[#15A959]">ICT</h1>
//                           <p className="w-1 h-28 font-bold bg-black ml-3 mt-3 mb-3"></p>
                
//                                 <a className="mt-5 flex text-[#3D4098] ml-1 text-lg" href=""><FaFacebookF/></a> 
//                                 <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href=""><FiTwitter /></a> 
//                                 <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href=""><AiOutlineInstagram /></a> 
//                                 <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href=""><LuYoutube /></a> 
                          
//                           <p className="w-1 h-54 bg-black ml-3 mt-3 mb-3"></p>
//                           </div>
//                         <div>
//                           <h1 className=" text-5xl  text-[#15A959] mt-30 font-extrabold ">Explore <span className="text-[#3D4098]">Our Articles</span> </h1> 
//                           <p className="text-2xl font-sans mt-9 ">Dive into helpful articles, tips, and  <br></br>updates created to guide you in your journey. </p>
//                           <div className="mt-12 gap-4 flex">
//                             <a className="bg-[#3D4098] py-4 px-10 text-white font-bold text-xl rounded-lg" href="">Enroll Now</a>
//                           <a className="py-3 px-12 border-[#3D4098] border-3 text-[#3D4098] font-bold text-xl rounded-lg" href="">Explore</a>
//                           </div>
//                           </div> 
//                         <div><img className="h-96 w-72 mt-14" src="34.png" alt="" /></div>
//                         <div>
//                           <div><img className="h-46 w-72 mt-14 -ml-8" src="36.png" alt="" /></div>
//                          <div><img className="h-46 w-72 -ml-8 mt-4" src="37.png" alt="" /></div>
//                         </div>
//                       </div>
//             {/* Main Grid Container: Left Text & Right Image Structure */}
          
//         </div>
//     );
// }

// // --- Combined Complete Page Component ---
// export default function CompletePage() {
//     return (
//         // Poore page ko wrap karne ke liye
//         <div className="min-h-screen bg-gray-50">
            
//             {/* -------------------------------------
//               SECTION 1: ORIGINAL CONTACT SECTION
//               ------------------------------------- 
//             */}
//             <OriginalContactSection />

//             {/* -------------------------------------
//               SECTION 2: BLOG SECTION (Aapki Latest Request)
//               ------------------------------------- 
//             */}
//             <BlogSection />

//         </div>
//     );
// }





// import React from "react";
// import Link from "next/link";
// import { client } from "@/sanity/lib/client";
// import { blogsQuery } from "@/sanity/lib/queries";

// import { FiTwitter } from "react-icons/fi";
// import { LuYoutube } from "react-icons/lu";
// import { FaFacebookF } from "react-icons/fa6";
// import { AiOutlineInstagram } from "react-icons/ai";

// // ---------------- BLOG CARD ----------------
// const BlogCard = ({ post }: any) => {
//   return (
//     <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:shadow-2xl hover:scale-[1.02]">

//       {/* Image */}
//       <div className="relative h-48 w-full overflow-hidden">
//         <img
//           src={post.imageSrc}
//           alt={post.title}
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-6 space-y-4">
//         <p className="text-sm font-semibold text-[#3D4098] uppercase tracking-widest">
//           {post.category}
//         </p>

//         <h3 className="text-xl font-bold text-gray-900 leading-snug">
//           <Link
//             href={`/blogs/${post.slug.current}`}
//             className="hover:text-[#3D4098] flex items-center justify-between"
//           >
//             {post.title}
//           </Link>
//         </h3>

//         <p className="text-gray-600 text-base">
//           {post.excerpt}
//         </p>

//         <div className="flex items-center space-x-4 pt-3 border-t border-gray-100">
//           <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
//             👤
//           </div>
//           <div>
//             <p className="text-sm font-medium text-gray-800">
//               {post.author}
//             </p>
//             <p className="text-xs text-gray-500">
//               {new Date(post.publishedAt).toDateString()}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ---------------- BLOG SECTION ----------------
// const BlogSection = async () => {
//   const blogPosts = await client.fetch(blogsQuery);

//   return (
//     <div className="bg-gray-50 pb-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">

//         <div className="text-center mb-16">
//           <h2 className="text-base font-semibold text-[#3D4098] uppercase">
//             Our Latest Insights
//           </h2>
//           <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
//             Stay Ahead in Business and Taxation
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {blogPosts.map((post: any) => (
//             <BlogCard key={post._id} post={post} />
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// // ---------------- ORIGINAL CONTACT SECTION ----------------
// const OriginalContactSection = () => {
//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center">
//       {/* Your existing code stays SAME */}
//       {/* I did not touch this section */}
//     </div>
//   );
// };

// // ---------------- FINAL PAGE ----------------
// export default function CompletePage() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <OriginalContactSection />
//       {/* Sanity Blogs */}
//       <BlogSection />
//     </div>
//   );
// }


// import { client } from "@/sanity/lib/client";
// import { blogsQuery } from "@/sanity/lib/queries";
// import Link from "next/link";

// async function getBlogs() {
//   return await client.fetch(blogsQuery);
// }

// export default async function BlogPage() {
//   const blogs = await getBlogs();

//   return (
//     <div className="bg-gray-50 pb-20 px-4">
//       <div className="max-w-7xl mx-auto">

//         <div className="text-center mb-16">
//           <h2 className="text-base font-semibold text-[#3D4098] uppercase">
//             Our Latest Insights
//           </h2>
//           <p className="text-3xl font-extrabold text-gray-900">
//             Stay Ahead in Business and Taxation
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {blogs.map((post: any) => (
//             <div key={post._id} className="bg-white rounded-lg shadow-xl overflow-hidden">

//               <img
//                 src={post.imageUrl}
//                 alt={post.title}
//                 className="h-48 w-full object-cover"
//               />

//               <div className="p-6 space-y-4">
//                 <h3 className="text-xl font-bold">
//                   <Link href={`/blogs/${post.slug.current}`}>
//                     {post.title}
//                   </Link>
//                 </h3>

//                 <p className="text-gray-600">{post.excerpt}</p>

//                 <p className="text-sm text-gray-500">
//                   By {post.author?.name} •{" "}
//                   {new Date(post.publishedAt).toDateString()}
//                 </p>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }
