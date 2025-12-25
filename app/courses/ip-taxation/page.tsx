"use client";
import Image from "next/image";
import React, { useState } from 'react';

// ---------------- FAQ DATA ----------------
const faqItems = [
  {
    id: 1,
    question: 'Who should enroll in this course?',
    answer: "This course is ideal for lawyers, legal students, entrepreneurs, brand owners, content creators, and innovators who want to protect and manage their intellectual property in Pakistan and abroad.",
  },
  {
    id: 2,
    question: 'What key areas does the course cover?',
    answer: 'The course offers practical training in trademarks, copyrights, patents, industrial designs, and trade secrets—focusing on registration, protection, licensing, infringement, and legal remedies.',
  },
  {
    id: 3,
    question: 'Will the course include hands-on experience with IP registration?',
    answer: 'Yes. You will receive practical guidance on filing applications for trademarks, copyrights, and patents through IPO Pakistan and international platforms like WIPO.',
  },
  {
    id: 4,
    question: 'Is this course relevant for startups and business owners?',
    answer: 'Absolutely. It’s especially valuable for startups, freelancers, and business owners seeking to secure their brand identity, protect inventions, and avoid legal pitfalls related to IP.',
  },
  {
    id: 5,
    question: 'Do participants receive a certificate?',
    answer: 'Yes. Upon successful completion, you’ll receive a certification from ICT that demonstrates your knowledge of intellectual property law and strengthens your credentials in legal or business fields.',
  },
];

// ---------------- FAQ ITEM COMPONENT ----------------
interface FAQItemProps {
  item: (typeof faqItems)[0];
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ item, isOpen, toggle }) => {
  return (
    <div className="border border-gray-300 rounded-xl shadow-md overflow-hidden  mb-4 transition-all duration-300">
      
      <button 
        onClick={toggle}
        className="flex justify-between items-center w-full p-6 text-left"
      >
        <div className="flex items-center space-x-4">
          <span className={`text-xl font-bold ${isOpen ? 'text-indigo-800' : 'text-gray-500'}`}>
            {item.id.toString().padStart(2, '0')}
          </span>
          <h3 className="text-lg font-semibold text-gray-800">
            {item.question}
          </h3>
        </div>

        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-indigo-800' : 'bg-indigo-600 hover:bg-indigo-700'}`}>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M20 12H4" : "M12 4v16m8-8H4"} />
          </svg>
        </div>
      </button>

      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-gray-600 border-t border-gray-100 pt-4">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

// ---------------- FAQ LIST SECTION ----------------
const FAQListSection: React.FC = () => {
    const [openId, setOpenId] = useState<number | null>(1);

    const toggleItem = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="w-full bg-white py-20">
            <div className="text-center mb-12">
                <p className="text-lg font-medium text-green-600 uppercase tracking-wider">— FAQs</p>
                <h2 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
                    Frequently Asked Questions
                </h2>
                <p className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto">
                    Find answers to common questions about the UK Taxation Course, including eligibility, course content, certification, and career opportunities. Get the clarity you need to start your tax career with confidence.
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {faqItems.map((item) => (
                    <FAQItem 
                        key={item.id}
                        item={item}
                        isOpen={item.id === openId}
                        toggle={() => toggleItem(item.id)}
                    />
                ))}
            </div>
        </section>
    );
};

// ---------------- COURSE DATA ----------------
const courseData = [
  { title: "Introduction to Intellectual Property (IP)", desc: "Learn the fundamentals of data analysis, machine learning, and AI, along with the roles of an AI Data Analyst—a strong base for AI-driven analytics." },
  { title: "Trademark Law & Brand Protection", desc: "Learn how trademarks protect logos, names, and branding, including registration, enforcement, and opposition—essential for brand managers and entrepreneurs." },
  { title: "Patent Law & Innovation Rights", desc: "Learn about patentable inventions, the filing process, and how patents protect technical ideas—ideal for inventors, engineers, and product developers." },
  { title: "Copyright Law", desc: "Get the essentials of copyright to safeguard literary, artistic, and digital works." },
  { title: "Trade Secrets & Confidential Information", desc: "Build dashboards and visual reports with Power BI, Tableau, and Matplotlib, presenting complex data clearly to drive informed decisions." },
  { title: "IP Registration & Enforcement Procedures", desc: "Learn how to register IP rights locally and internationally, and handle enforcement, cease & desist letters, and legal remedies—preparing you for real-world IP protection." },
  { title: "International IP Treaties & WIPO", desc: "Learn global IP systems like WIPO, TRIPS, and the Madrid Protocol, and how international rules affect local rights—essential for cross-border businesses." },
  { title: "IP Projects", desc: "Explore real IP disputes, registrations, and brand strategies in practice." },
];

// ---------------- COURSE OUTLINE ----------------
const CourseOutline = () => {
  return (
    <section className="w-full bg-[#262A7B] py-16">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-4 border border-white/30">
        <div className="flex items-center justify-center border-b md:border-b-0 md:border-r border-white/30 p-10">
          <h2 className="text-white text-5xl font-bold">Course <br /> Outline</h2>
        </div>

        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {courseData.map((item, index) => (
            <div key={index} className="border border-white/30 p-6 text-white">
              <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------------- INSTRUCTOR SECTION ----------------
// const InstructorSection = () => {
//   return (
//     <section className="w-full bg-[#f6f6f6] py-20">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="bg-white rounded-3xl shadow-lg p-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
//           <div className="flex justify-center">
//             <div className=" rounded-2xl overflow-hidden w-[320px] h-[380px] flex items-end justify-center">
//               <Image src="/61.png" alt="Mr Muhammad Waqas" width={320} height={380} className="object-contain" />
//             </div>
//           </div>

//           <div className="relative">
//             <div className="flex items-center gap-3 mb-3">
//               <span className="w-10 h-[3px] bg-green-500 rounded-full"></span>
//               <p className="text-sm font-semibold text-[#3c3f9e]">About Instructor</p>
//             </div>

//             <h2 className="text-3xl font-bold mb-4 text-black">Mr. Tahir Aziz</h2>

//             <p className="text-gray-600 mb-4">Mr. Tahir Aziz is an experienced trainer and data specialist in <br></br> advanced Excel, covering complex formulas, dashboards, <br></br> pivot tables, and macros. His practical, business-focused <br></br> approach helps learners apply Excel for data analysis, <br></br> reporting, and process optimization, boosting professional <br></br>  efficiency and decision-making.</p>

//             <button className="bg-[#3c3f9e] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition">
//               Explore more
//             </button>

//             <span className="hidden lg:block absolute right-[-90px] top-1/2 -translate-y-1/2 text-gray-200 text-6xl font-bold rotate-90">
//               ICT ICT
//             </span>
            
//           </div>
//         </div>

//         <section className="w-full  py-20">
//           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div className="relative flex justify-center">
//               <div className="rounded-2xl overflow-hidden ">
//                 <Image src="/62.png" alt="ICT Certificate" width={700} height={300} className="w-full h-full object-contain" />
//               </div>
//             </div>

//             <div>
//               <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
//                 Earn A <br />
//                 <span className="text-[#3c3f9e]">Certification</span>
//               </h2>

//               <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
//                 Upon successful completion of our UK Taxation Course, you’ll receive an official certification from ICT, validating your expertise and strengthening your professional profile in the field of UK tax laws.
//               </p>

//               <button className="bg-[#3c3f9e] text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:opacity-90 transition">
//                 Apply Now For this Course
//               </button>
//             </div>
//           </div>
//         </section>
//       </div>
//     </section>
//   );
// };

// ---------------- MAIN PAGE ----------------
export default function UKTaxesPage() {
  return (
    <>
      {/* SECTION 1 */}
      <section className="w-full bg-gradient-to-r from-[#f7f7f7] via-[#eef6fb] to-[#dfe7f3] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#3c3f9e]">
             Master Intellectual  <br />
              <span className="text-[#18a957]">Property Law</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              Gain a deep understanding of patents, trademarks, copyrights, and trade secrets. Learn how to protect, manage, and enforce intellectual property in today’s business and innovation landscape.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-[#3c3f9e] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition">
                Enroll Now
              </button>
              <button className="border-2 border-[#3c3f9e] text-[#3c3f9e] px-8 py-3 rounded-xl font-semibold hover:bg-[#3c3f9e] hover:text-white transition">
                Explore
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 relative">
            <div className="w-full aspect-square  overflow-hidden">
              <Image src="/63.png" alt="UK Taxes" width={400} height={400} className="w-full h-full object-cover" />
            </div>

            <div className=" overflow-hidden">
              <Image src="/69.png" alt="Income Tax" width={400} height={400} className="w-full h-full object-cover" />
            </div>

            <div className=" overflow-hidden">
              <Image src="/70.png" alt="Tax Relief" width={400} height={400} className="w-full h-full object-cover" />
            </div>

            <div className=" overflow-hidden ">
              <Image src="/64.png" alt="Tax Growth" width={400} height={400} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="w-full bg-gradient-to-r from-[#f4f6f8] via-[#eaf5fa] to-[#dff1f1] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex gap-2">
            <div className="w-[48%] rounded-[32px] overflow-hidden shadow-lg">
              <Image src="/65.png" alt="Tax on Mobile" width={500} height={700} className="w-full h-full object-cover" />
            </div>
            <div className="w-[52%]  overflow-hidden shadow-xl mt-16">
              <Image src="/66.png" alt="Tax Dashboard" width={500} height={700} className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-[#1aa35b] rounded-full"></span>
              <h4 className="text-xl font-semibold text-[#3c3f9e]">
                Intellectual Property Law Course​
              </h4>
            </div>

            <p className="text-lg text-gray-800 font-bold mb-6">
              Protect and Leverage Your Intellectual Property
            </p>

            <p className="text-lg text-gray-800 mb-10">
              ICT’s Intellectual Property Law Course equips legal professionals, entrepreneurs, and creatives with practical knowledge of trademarks, copyrights, patents, and trade secrets. Learn how to register, enforce, and manage IP locally and internationally, handle infringement cases, and implement brand protection and licensing strategies to maximize the value of your innovations.
            </p>

            <button className="bg-[#3c3f9e] text-white px-10 py-4 rounded-2xl font-semibold shadow-md hover:opacity-90 transition">
              Attempt Quiz
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: UK Taxation Benefits */}
<section className="w-full bg-white py-20">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-4xl font-bold text-black mb-4">
        Intellectual Property Law Course​ Benefits
      </h2>

      <p className="text-gray-600 max-w-xl mb-12">
       Learn how to choose the right jurisdiction, set up compliant structures, and complete filings without errors. Build the skills to launch your own LLC or support clients professionally.
      </p>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
        {/* 1 */}
        <div>
          <span className="text-4xl font-bold text-[#3c3f9e]">1.</span>
          <h4 className="text-lg font-semibold text-black mt-2">
            Protect Your Ideas, Brands & Creations
          </h4>
          <p className="text-gray-600 mt-2 text-sm">
            Learn to legally protect your brand, inventions, designs, and creative work with trademarks, copyrights, patents, and trade secrets.
          </p>
        </div>

        {/* 2 */}
        <div>
          <span className="text-4xl font-bold text-[#3c3f9e]">2.</span>
          <h4 className="text-lg font-semibold text-black mt-2">
           Practical Skills for Legal & Business Professionals
          </h4>
          <p className="text-gray-600 mt-2 text-sm">
            Acquire practical skills in IP registration, enforcement, licensing, and dispute resolution—vital for lawyers, startups, agencies, and creatives.
          </p>
        </div>

        {/* 3 */}
        <div>
          <span className="text-4xl font-bold text-[#3c3f9e]">3.</span>
          <h4 className="text-lg font-semibold text-black mt-2">
            Career & Consultancy Opportunities
          </h4>
          <p className="text-gray-600 mt-2 text-sm">
            IP expertise is in demand across law firms, media, tech startups, and export businesses, enabling you to provide specialized services in a growing field.
          </p>
        </div>

        {/* 4 */}
        <div>
          <span className="text-4xl font-bold text-[#3c3f9e]">4.</span>
          <h4 className="text-lg font-semibold text-black mt-2">
            Global Understanding of IP Laws
          </h4>
          <p className="text-gray-600 mt-2 text-sm">
           Learn local and international IP laws, including WIPO guidelines, to protect intellectual assets globally and ensure compliance.
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT IMAGES */}
    <div className="relative">

      {/* Enroll Button */}
      <button className="absolute -top-6 right-0 bg-[#3c3f9e] text-white px-6 py-2 rounded-lg shadow-lg">
        Enroll Now
      </button>

      <div className="grid grid-cols-2 gap-4 mt-40">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-4">
          <Image
            src="/72.png"
            alt="Growth Chart"
            width={300}
            height={220}
            className="rounded-2xl object-cover"
          />

          <Image
            src="/71.png"
            alt="Success Growth"
            width={300}
            height={220}
            className="rounded-2xl object-cover"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col -mt-20 gap-4">
          <Image
            src="/68.png"
            alt="Career Growth"
            width={300}
            height={300}
            className="rounded-2xl object-cover h-[350px]"
          />

          <Image
            src="/69.png"
            alt="Finance Data"
            width={300}
            height={220}
            className="rounded-2xl object-cover"
          />
        </div>

      </div>
    </div>

  </div>
</section>


      {/* COURSE OUTLINE */}
      <CourseOutline />

      {/* INSTRUCTOR SECTION */}
      {/* <InstructorSection /> */}

      {/* ================= FAQ SECTION AT THE END ================= */}
      <FAQListSection />
    </>
  );
}