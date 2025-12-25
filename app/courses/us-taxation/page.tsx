"use client";
import Image from "next/image";
import React, { useState } from 'react';

// ---------------- FAQ DATA ----------------
const faqItems = [
  {
    id: 1,
    question: 'Who should enroll in the US Taxation Course?',
    answer: "This course is ideal for aspiring tax advisors, accountants, bookkeepers, entrepreneurs, and finance professionals who want to understand the US tax system or work with US-based clients.",
  },
  {
    id: 2,
    question: 'What professional certifications are required for taxation jobs?',
    answer: 'The ATT (Association of Taxation Technicians) and CTA (Chartered Tax Adviser) certifications are highly recommended for taxation careers in the US and globally.',
  },
  {
    id: 3,
    question: 'How long does the LMS Technical Support take?',
    answer: 'Most technical issues are resolved within 2-4 hours during business days. Complex issues involving third-party software may take up to 24 hours.',
  },
  {
    id: 4,
    question: 'Can I get a refund if I drop out of the course?',
    answer: 'Our refund policy is detailed in the terms and conditions. Generally, a partial refund is available within the first 7 days, provided you have accessed less than 10% of the course content.',
  },
  {
    id: 5,
    question: 'Are the course materials updated for the current tax year?',
    answer: 'Yes, all our course modules are rigorously updated every tax year (usually by April) to ensure compliance with the latest HMRC rules and regulations.',
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
    <div className="border border-black rounded-xl shadow-md overflow-hidden bg-white mb-4 transition-all duration-300">
      
      <button 
        onClick={toggle}
        className="flex justify-between items-center w-full p-6 text-left"
      >
        <div className="flex items-center space-x-4">
          <span className={`text-xl  font-bold ${isOpen ? 'text-indigo-800' : 'text-gray-500'}`} >
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
                    Find answers to common questions about the US Taxation Course, including eligibility, course content, certification, and career opportunities. Get the clarity you need to start your tax career with confidence.
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
  { title: "Individual Taxation", desc: "Learn individual tax rules, including income reporting, deductions, and credits. This module also teaches you how to file accurate Form 1040 returns. " },
  { title: "Business Taxation", desc: "Learn business tax rules for corporations and partnerships, along with practical tax planning methods to manage and reduce tax liabilities." },
  { title: "Payroll Processing", desc: "Learn how to register a company through Companies House and protect your brand with trademarks, linking setup and brand security." },
  { title: "QuickBooks", desc: "Understand how to use QuickBooks to organize finances, track activity, and generate reports that make tax preparation easier and more efficient." },
  { title: "Sales Tax Return Filing", desc: "Understand taxable sales, exemptions, and filing requirements, and learn to handle sales tax returns correctly." },
  { title: "Franchise Taxation", desc: "Learn how franchise taxes work and how to manage deductions, credits, and reporting to optimize compliance and savings." },
  { title: "Practice on Tax Software", desc: "Get hands-on training with tax software, from navigating the interface to preparing returns and solving common problems for efficient tax work." },
  { title: "LLC Formation", desc: "Learn to handle HMRC notices, understand triggers, and avoid penalties." },
];

// ---------------- COURSE OUTLINE ----------------
const CourseOutline = () => {
  return (
    <section className="w-full bg-[#262A7B] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 border border-white/30">
        <div className="flex items-center justify-center border-b md:border-b-0 md:border-r border-white/30 p-10">
          <h2 className="text-white text-4xl font-bold">Course <br /> Outline</h2>
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
              <Image src="/k11.png" alt="Mr Muhammad Waqas" width={320} height={380} className="object-contain" />
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-[3px] bg-green-500 rounded-full"></span>
              <p className="text-sm font-semibold text-[#3c3f9e]">About Instructor</p>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-black">Mr. Syed Asaar Uz-Zaman</h2>

            <p className="text-gray-600 text-justify pr-15 mb-4">Mr. Syed Asaar Uz-Zaman is a U.S. taxation expert with extensive experience in individual and corporate tax filing, IRS compliance, and federal tax planning. He brings both technical knowledge and practical insight, helping learners understand the complexities of the U.S. tax system with clarity.<br/> <br/>His sessions are focused on real-world applications, including tax return filing, forms handling, and regulatory requirements, making him a trusted mentor for professionals and aspiring tax consultants alike.
</p>
            

            <button className="bg-[#3c3f9e] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition">
              Explore more
            </button>

            <span className="hidden lg:block absolute right-[-95px] top-1/2 -translate-y-1/2 text-gray-200 text-6xl font-bold rotate-90">
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
                
                <span className="text-[#3c3f9e]">Earn A <br />Certification</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
               Upon successful completion of our US Taxation Course, you'll receive an official certification from ICT, validating your expertise and strengthening your professional profile in the field of US tax laws.

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
export default function USTaxesPage() {
  return (
    <>
      {/* SECTION 1 */}
      <section className="w-full bg-gradient-to-r from-[#f7f7f7] via-[#eef6fb] to-[#dfe7f3] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#3c3f9e]">
              Your Guide to Understanding <br />
              <span className="text-[#18a957]">US Taxes</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              A clear and simple guide to understanding key US taxes, including income tax, business tax, and VAT. Learn the essentials, stay compliant, and manage your finances with confidence.
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
            <div className="w-full aspect-square rounded-full overflow-hidden shadow-lg">
              <Image src="/k1.png" alt="US Taxes" width={400} height={400} className="w-full h-full object-cover" />
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image src="/k2.png" alt="Income Tax" width={400} height={400} className="w-full h-full object-cover" />
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image src="/k3.png" alt="Tax Relief" width={400} height={400} className="w-full h-full object-cover" />
            </div>

            <div className="rounded-[95px] overflow-hidden shadow-lg">
              <Image src="/k4.png" alt="Tax Growth" width={400} height={400} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="w-full bg-gradient-to-r from-[#f4f6f8] via-[#eaf5fa] to-[#dff1f1] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex gap-2">
            <div className="w-[48%]  overflow-hidden shadow-lg">
              <Image src="/k5.png" alt="Tax on Mobile" width={500} height={700} className="w-full h-full object-cover" />
            </div>
            <div className="w-[52%]  overflow-hidden shadow-xl mt-16">
              <Image src="/k6.png" alt="Tax Dashboard" width={500} height={700} className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-[#1aa35b] rounded-full"></span>
              <h4 className="text-xl font-semibold text-[#3c3f9e]">
                US Taxation Course
              </h4>
            </div>

            

            <p className="text-lg text-gray-800 mb-10">
              You’ll learn Income Tax, National Insurance, Corporation Tax, VAT, Capital Gains Tax, and Inheritance Tax. The course focuses on practical learning through case studies, assignments, and real HMRC tools. By the end, you’ll be able to manage tax compliance and apply smart tax planning strategies for both individuals and businesses, whether you want to work with US clients or offer global remote tax services.
            </p>

            <button className="bg-[#3c3f9e] text-white px-10 py-4 rounded-2xl font-semibold shadow-md hover:opacity-90 transition">
              Attempt Quiz
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: US Taxation Benefits */}
<section className="w-full bg-white py-20">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-4xl font-bold text-black mb-4">
        US Taxation Benefits
      </h2>

      <p className="text-gray-600 max-w-xl mb-12">
        Gain expertise in US taxation and open doors to high-demand career opportunities. Learn how to handle federal and state taxes, support businesses and individuals, and provide accurate advisory services. This knowledge helps you secure repeat clients, offer remote services, and advance your career in accounting or finance.
      </p>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
        {/* 1 */}
        <div>
          <span className="text-4xl font-bold text-[#3c3f9e]">1.</span>
          <h4 className="text-lg font-semibold text-black mt-2">
            High Demand in the USA

          </h4>
          <p className="text-gray-600 mt-2 text-sm">
            U.S. businesses and freelancers must file taxes every year. This creates high demand for skilled tax professionals worldwide, especially those who understand U.S. tax laws and forms.
          </p>
        </div>

        {/* 2 */}
        <div>
          <span className="text-4xl font-bold text-[#3c3f9e]">2.</span>
          <h4 className="text-lg font-semibold text-black mt-2">
            Remote & Freelance Opportunities
          </h4>
          <p className="text-gray-600 mt-2 text-sm">
           Work remotely with US clients or BPOs. Offer services via Upwork and Fiverr.
          </p>
        </div>

        {/* 3 */}
        <div>
          <span className="text-4xl font-bold text-[#3c3f9e]">3.</span>
          <h4 className="text-lg font-semibold text-black mt-2">
            Good Income & Repeat Clients
          </h4>
          <p className="text-gray-600 mt-2 text-sm">
            Tax services bring repeat business yearly. U.S. clients pay well for accurate work, and you can earn more by offering bookkeeping, compliance, and advisory services.
          </p>
        </div>

        {/* 4 */}
        <div>
          <span className="text-4xl font-bold text-[#3c3f9e]">4.</span>
          <h4 className="text-lg font-semibold text-black mt-2">
            Career Growth & Global Scope
          </h4>
          <p className="text-gray-600 mt-2 text-sm">
            With U.S. tax skills, you can become a remote tax specialist, join global firms, or start your own agency. This course builds a foundation for a long-term international career.
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
            src="/k7.png"
            alt="Growth Chart"
            width={300}
            height={220}
            className="rounded-2xl object-cover"
          />

          <Image
            src="/k9.png"
            alt="Success Growth"
            width={300}
            height={220}
            className="rounded-2xl object-cover"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col -mt-20 gap-4">
          <Image
            src="/k8.png"
            alt="Career Growth"
            width={300}
            height={300}
            className="rounded-2xl object-cover h-[350px]"
          />

          <Image
            src="/k10.png"
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