"use client";
import Image from "next/image";
import React, { useState } from 'react';

// ---------------- FAQ DATA ----------------
const faqItems = [
  {
    id: 1,
    question: 'Who should take this Import & Export course?',
    answer: "This course is ideal for aspiring exporters, importers, entrepreneurs, business owners, and professionals in Pakistan looking to enter or grow in the global trading industry.",
  },
  {
    id: 2,
    question: 'What practical skills will I learn in this course?',
    answer: 'You’ll gain hands-on knowledge of international trade procedures, including import/export documentation, INCOTERMS, HS codes, shipping and freight processes, customs clearance, and trade compliance regulations.',
  },
  {
    id: 3,
    question: 'Does the course cover how to start an export business from Pakistan?',
    answer: 'Yes. The course includes step-by-step guidance on setting up a trading business, registering with relevant authorities, finding international buyers/suppliers, and managing logistics and documentation.',
  },
  {
    id: 4,
    question: 'Will I learn about international trade laws and compliance?',
    answer: 'Absolutely. You’ll understand essential trade laws, FBR & customs regulations, and how to comply with local and international requirements for smooth, legal trading operations.',
  },
  {
    id: 5,
    question: 'Will I get a certificate after completing the course?',
    answer: 'Yes. Upon successful completion, you’ll receive a certification from ICT that can help establish your credibility as an import/export professional and support business or freelance opportunities.',
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
                    Find answers to common questions about the LLC Taxation Course, including eligibility, course content, certification, and career opportunities. Get the clarity you need to start your tax career with confidence.
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
  { title: "Introduction to Canadian Tax System", desc: "Learn the structure of the CRA, T1 returns, and key federal and provincial tax brackets—a foundation for navigating Canada’s tax system." },
  { title: "Taxable Income and Income Tax Slips", desc: "Learn to report different income types, including rental, self-employment, and foreign income, using common tax slips—essential for accurate individual reporting." },
  { title: "Deductions, Credits, and Benefits", desc: "Learn to issue compliant tax invoices and use e-invoicing with approved formats and real-time integration for efficient tax operations." },
  { title: "Tax Filing for Special Groups", desc: "Learn to work with T2125, T776, T1135, and T1 summaries for accurate tax calculations." },
  { title: "Tax Forms and Return Computation", desc:"Gain hands-on experience with forms like T2125, T776, and T1135, and learn to calculate taxes using T1 summaries for accurate return preparation." },
  { title: "Step-by-Step Guide to Completing the T1 Return", desc:"Understand which entities qualify for tax exemptions and the conditions that apply. Essential for businesses operating in UAE Free Zones." },
  { title: "Common Tax Errors and Audit Triggers", desc: "Explore the most frequent tax mistakes and how to avoid them. Learn what can trigger a CRA audit and how to stay compliant. A critical module for reducing risk and filing with confidence." },
  { title: "Using Tax Software andOnline Filing (NETFILE)", desc: "Learn to use certified software and the NETFILE system for accurate, efficient, and paperless tax filing." },
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
const InstructorSection = () => {
  return (
    <section className="w-full bg-[#f6f6f6] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-lg p-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          <div className="flex justify-center">
            <div className=" rounded-2xl overflow-hidden w-[320px] h-[380px] flex items-end justify-center">
              <Image src="/c11.png" alt="Mr Muhammad Waqas" width={320} height={380} className="object-contain" />
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-[3px] bg-green-500 rounded-full"></span>
              <p className="text-sm font-semibold text-[#3c3f9e]">About Instructor</p>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-black">Mr. Naseer Ud Din</h2>

            <p className="text-gray-600 mb-4">Mr. Naseer Ud Din is an expert in Canadian income tax, CRA regulations, and corporate compliance. He provides practical training on residency-based taxation, personal and business returns, deductions, and credits, combining theory with hands-on skills for accurate, real-world application. His clear and organized approach ensures learners gain industry-relevant expertise.</p>

            <button className="bg-[#3c3f9e] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition">
              Explore more
            </button>

            <span className="hidden lg:block absolute right-[-90px] top-1/2 -translate-y-1/2 text-gray-200 text-6xl font-bold rotate-90">
              ICT ICT
            </span>
            
          </div>
        </div>

        <section className="w-full  py-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center">
              <div className="rounded-2xl overflow-hidden ">
                <Image src="/62.png" alt="ICT Certificate" width={700} height={300} className="w-full h-full object-contain" />
              </div>
            </div>

            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Earn A <br />
                <span className="text-[#3c3f9e]">Certification</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
                Upon successful completion of our UK Taxation Course, you’ll receive an official certification from ICT, validating your expertise and strengthening your professional profile in the field of UK tax laws.
              </p>

              <button className="bg-[#3c3f9e] text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:opacity-90 transition">
                Apply Now For this Course
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

// ---------------- MAIN PAGE ----------------
export default function UKTaxesPage() {
  return (
    <>
      {/* SECTION 1 */}
      <section className="w-full bg-linear-to-r from-[#f7f7f7] via-[#eef6fb] to-[#dfe7f3] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl lg:text-5xl font-bold leading-tight text-[#3c3f9e]">
          Master Canadian  <br />
              <span className="text-[#18a957]">Taxation</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              Learn Canadian tax laws, filing procedures, and CRA portal navigation. Gain practical skills for accurate compliance and return preparation for individuals and businesses.
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
              <Image src="/c1.png" alt="UK Taxes" width={400} height={400} className="w-full h-full object-cover" />
            </div>

            <div className=" overflow-hidden">
              <Image src="/c3.png" alt="Income Tax" width={400} height={400} className="w-full h-full object-cover" />
            </div>

            <div className=" overflow-hidden">
              <Image src="/c2.png" alt="Tax Relief" width={400} height={400} className="w-full h-full object-cover" />
            </div>

            <div className=" overflow-hidden ">
              <Image src="/c4.png" alt="Tax Growth" width={400} height={400} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="w-full bg-linear-to-r from-[#f4f6f8] via-[#eaf5fa] to-[#dff1f1] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex gap-2">
            <div className="w-[48%] rounded-4xl overflow-hidden shadow-lg">
              <Image src="/c5.png" alt="Tax on Mobile" width={500} height={700} className="w-full h-full object-cover" />
            </div>
            <div className="w-[52%]  overflow-hidden shadow-xl mt-16">
              <Image src="/c6.png" alt="Tax Dashboard" width={500} height={700} className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-[#1aa35b] rounded-full"></span>
              <h4 className="text-xl font-semibold text-[#3c3f9e]">
               Canadian Taxation Course
              </h4>
            </div>

            <p className="text-lg text-gray-800 font-bold mb-6">
            Canadian Taxation Course
            </p>

            <p className="text-lg text-gray-800 mb-10">
              ICT’s Canadian Taxation Course offers hands-on training for Pakistani professionals aspiring to work in international taxation. Learn Canadian T1 Income Tax filing, CRA compliance, tax brackets, credits, deductions, and benefits. Gain practical skills to serve Canadian clients, expand globally, or boost your career in finance.
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
      Canadian Taxation Benefits
      </h2>

      <p className="text-gray-600 max-w-xl mb-12">
    This course equips you with practical skills in Canadian tax laws and filing, enhancing your ability to serve clients, work internationally, and advance your career in global finance.
      </p>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
        {/* 1 */}
        <div>
          <span className="text-4xl font-bold text-[#3c3f9e]">1.</span>
          <h4 className="text-lg font-semibold text-black mt-2">
           High Demand in Canada
          </h4>
          <p className="text-gray-600 mt-2 text-sm">
           Canada’s regulated tax system requires annual filings, creating strong demand for skilled tax preparers and consultants nationwide.
          </p>
        </div>

        {/* 2 */}
        <div>
          <span className="text-4xl font-bold text-[#3c3f9e]">2.</span>
          <h4 className="text-lg font-semibold text-black mt-2">
       Job & Freelance Opportunities
          </h4>
          <p className="text-gray-600 mt-2 text-sm">
           Trained professionals can join Canadian firms, BPOs, or offer remote and freelance tax services through platforms like Upwork, Indeed, and LinkedIn.
          </p>
        </div>

        {/* 3 */}
        <div>
          <span className="text-4xl font-bold text-[#3c3f9e]">3.</span>
          <h4 className="text-lg font-semibold text-black mt-2">
          Strong Earning Potential
          </h4>
          <p className="text-gray-600 mt-2 text-sm">
           Tax professionals in Canada earn competitive incomes, with opportunities to expand services and build a steady, profitable practice.
          </p>
        </div>

        {/* 4 */}
        <div>
          <span className="text-4xl font-bold text-[#3c3f9e]">4.</span>
          <h4 className="text-lg font-semibold text-black mt-2">
           Immigration & Career Edge
          </h4>
          <p className="text-gray-600 mt-2 text-sm">
          Knowledge of Canadian tax laws boosts your profile for jobs, PR, and immigration, demonstrating professional readiness.
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
            src="/c7.png"
            alt="Growth Chart"
            width={300}
            height={220}
            className="rounded-2xl object-cover"
          />

          <Image
            src="/c8.png"
            alt="Success Growth"
            width={300}
            height={220}
            className="rounded-2xl object-cover"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col -mt-20 gap-4">
          <Image
            src="/c9.png"
            alt="Career Growth"
            width={300}
            height={300}
            className="rounded-2xl object-cover h-[350px]"
          />

          <Image
            src="/c10.png"
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
      <InstructorSection />

      {/* ================= FAQ SECTION AT THE END ================= */}
      <FAQListSection />
    </>
  );
}