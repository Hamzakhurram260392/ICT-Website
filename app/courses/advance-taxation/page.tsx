"use client";
import Image from "next/image";
import React, { useState } from 'react';

// ---------------- FAQ DATA ----------------
const faqItems = [
  {
    id: 1,
    question: 'Who should enroll in the ATL program?',
    answer: "This course is ideal for experienced accountants, tax consultants, lawyers, and professionals who want to deepen their expertise in taxation, tax litigation, and compliance within Pakistan.",
  },
  {
    id: 2,
    question: 'What does this program cover?',
    answer: 'YThe ATL program provides advanced training in income tax, sales tax, federal excise, tax audit procedures, appeal mechanisms, tribunal practices, legal drafting, and handling FBR notices and litigation cases.',
  },
  {
    id: 3,
    question: 'Will the course include practical training in dealing with tax appeals and notices?',
    answer: 'Yes. The course emphasizes real-world scenarios, equipping participants to handle tax assessments, file appeals, respond to show cause notices, and prepare for hearings in tax tribunals.',
  },
  {
    id: 4,
    question: 'Do I need prior tax knowledge to join this course?',
    answer: 'Yes, a basic understanding of taxation or prior experience in tax practice is recommended, as the course is designed for intermediate to advanced level professionals.',
  },
  {
    id: 5,
    question: 'Will I receive a certificate after completing the program?',
    answer: 'Yes. Participants will be awarded a certificate from the Institute of Corporate and Taxation (ICT) upon successful completion, which can strengthen their credibility in the field of taxation and litigation.',
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
                    Find answers to common questions about the Advance Taxation & Litigation Course, including eligibility, course content, certification, and career opportunities. Get the clarity you need to start your tax career with confidence.
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
  { title: "Filing of Appeals on Different Platforms", desc: "Get a clear overview of advanced taxation and litigation in Pakistan, covering key laws, procedures, and authorities." },
  { title: "Replies to Notices under Ordinance Provisions", desc: "Learn to draft professional responses to tax notices, including their purpose, structure, and strategy, preparing you for real-world tax correspondence." },
  { title: "Filing of Appeals on Different Platforms", desc: "Understand VAT registration, returns, input/output tax, and compliance rules. Essential knowledge for businesses handling goods or services in the UAE." },
  { title: "Filing of Different Applications", desc: "Understand how to prepare and submit refund, revision, and exemption cases properly." },
  { title: "Withholding Tax: Income & Sales", desc:"This module teaches LLC formation, covering tax implications, entity classification, and compliance requirements for smooth operation." },
  { title: "Compliances Under ITO 2001", desc:"Learn mandatory filings, deadlines, and legal duties under the Income Tax Ordinance 2001, with practical tips to avoid penalties." },
  { title: "Litigation Strategies and Case Law Analysis", desc: "Learn business obligations under the Sales Tax Act, including returns, invoices, and input/output adjustments for accurate compliance." },
  { title: "Litigation Strategies and Case Law Analysis", desc: "Learn to build effective litigation strategies by analyzing tax case laws and landmark judgments for better appeal outcomes." },
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
      <div className="max-w-6xl mx-auto px-6 space-y-24">

        {/* ================= INSTRUCTOR CARD ================= */}

          <section className=" py-20">
      {/* Section Heading */}
      <div className="flex justify-center items-center gap-3 mb-14">
        <span className="w-10 h-[3px] bg-green-500 rounded-full"></span>
        <p className="text-sm font-semibold text-[#3c3f9e]">
          About Instructor
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        
        {/* Card 1 */}
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
          {/* Image Wrapper */}
          <div className="relative w-full flex justify-center mb-6">
            <div className=" w-[200px] h-[230px] flex items-end justify-center overflow-hidden">
              <Image
                src="/a11.png"
                alt="Mr. Rai Basharat Ali"
                width={180}
                height={220}
                className="object-contain"
              />
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Mr. Rai Basharat Ali
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Mr. Shaheer Mirza is a dedicated taxation professional with expertise
            in income tax, sales tax, and corporate compliance under Pakistan
            tax laws. His CTA training emphasizes theoretical foundations and
            hands-on application of tax rules.
          </p>

          <button className="bg-[#3c3f9e] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition">
            Explore more
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
          {/* Image Wrapper */}
          <div className="relative w-full flex justify-center mb-6">
            <div className=" w-[200px] h-[230px] flex items-end justify-center overflow-hidden">
              <Image
                src="/a12.png"
                alt="Mr. Hassan Mahmood"
                width={180}
                height={220}
                className="object-contain"
              />
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Mr. Hassan Mahmood
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Specializing in tax planning, audit handling, and public sector
            compliance, Mr. Hassan Mahmood delivers comprehensive training based
            on real-world tax practices and tools.
          </p>

          <button className="bg-[#3c3f9e] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition">
            Explore more
          </button>
        </div>

      </div>
    </section>

        {/* ================= CERTIFICATION SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* Certificate Image */}
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden max-w-[600px]">
              <Image
                src="/62.png"
                alt="ICT Certificate"
                width={600}
                height={300}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Earn A <br />
              <span className="text-[#3c3f9e]">Certification</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              Upon successful completion of our Advance Taxation & Litigation Course, you’ll
              receive an official certification from ICT, validating your
              expertise and strengthening your professional profile in the
              field of UK tax laws.
            </p>

            <button className="bg-[#3c3f9e] text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:opacity-90 transition">
              Apply Now For This Course
            </button>
          </div>
        </div>

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
          Advance Taxation &  <br />
              <span className="text-[#18a957]">Litigation Course</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">
             Master complex tax laws and dispute resolution. Gain practical skills in audits, assessments, appeals, and litigation to become an expert tax advisor.
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
              <Image src="/a1.png" alt="UK Taxes" width={400} height={400} className="w-full h-full object-cover" />
            </div>

            <div className=" overflow-hidden">
              <Image src="/a3.png" alt="Income Tax" width={400} height={400} className="w-full h-full object-cover" />
            </div>

            <div className=" overflow-hidden">
              <Image src="/a2.png" alt="Tax Relief" width={400} height={400} className="w-full h-full object-cover" />
            </div>

            <div className=" overflow-hidden ">
              <Image src="/a4.png" alt="Tax Growth" width={400} height={400} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="w-full bg-linear-to-r from-[#f4f6f8] via-[#eaf5fa] to-[#dff1f1] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex gap-2">
            <div className="w-[48%] rounded-4xl overflow-hidden shadow-lg">
              <Image src="/a5.png" alt="Tax on Mobile" width={500} height={700} className="w-full h-full object-cover" />
            </div>
            <div className="w-[52%]  overflow-hidden shadow-xl mt-16">
              <Image src="/a6.png" alt="Tax Dashboard" width={500} height={700} className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-[#1aa35b] rounded-full"></span>
              <h4 className="text-xl font-semibold text-[#3c3f9e]">
               Advance Taxation & Litigation Course
              </h4>
            </div>

            <p className="text-lg text-gray-800 font-bold mb-6">
            Advance Your Career in Taxation & Litigation
            </p>

            <p className="text-lg text-gray-800 mb-10">
              Join Pakistan’s premier Advance Taxation & Litigation Course (ATL) to master tax laws, audits, appeals, and compliance. Gain hands-on skills in filing, representation, and litigation under Pakistani tax regulations—perfect for accountants, consultants, lawyers, and professionals aiming to excel in tax advisory and advocacy.
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
      Advance Taxation & Litigation Benefits
      </h2>

      <p className="text-gray-600 max-w-xl mb-12">
    This course equips you with advanced skills in taxation and litigation, including handling audits, drafting appeals, representing clients before authorities, and managing complex compliance cases. It’s designed to boost your expertise and confidence for specialized tax advisory and advocacy roles.
      </p>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
        {/* 1 */}
        <div>
          <span className="text-4xl font-bold text-[#3c3f9e]">1.</span>
          <h4 className="text-lg font-semibold text-black mt-2">
           Master Complex Tax Laws & Procedures
          </h4>
          <p className="text-gray-600 mt-2 text-sm">
           Gain in-depth knowledge of Pakistan’s income and corporate tax laws, including audits, to confidently manage complex tax cases.
          </p>
        </div>

        {/* 2 */}
        <div>
          <span className="text-4xl font-bold text-[#3c3f9e]">2.</span>
          <h4 className="text-lg font-semibold text-black mt-2">
      Specialize in Appeals & Tax Litigation
          </h4>
          <p className="text-gray-600 mt-2 text-sm">
          Learn to draft appeals, represent clients, and handle tax litigation effectively—key skills for lawyers and tax consultants.
          </p>
        </div>

        {/* 3 */}
        <div>
          <span className="text-4xl font-bold text-[#3c3f9e]">3.</span>
          <h4 className="text-lg font-semibold text-black mt-2">
          Career Advancement & Professional Growth
          </h4>
          <p className="text-gray-600 mt-2 text-sm">
           The ATL certification boosts your profile as a tax expert, opening opportunities in accounting firms, legal practices, and corporate tax departments.
          </p>
        </div>

        {/* 4 */}
        <div>
          <span className="text-4xl font-bold text-[#3c3f9e]">4.</span>
          <h4 className="text-lg font-semibold text-black mt-2">
           Serve High-Value Clients with Confidence
          </h4>
          <p className="text-gray-600 mt-2 text-sm">
          With expertise in advanced taxation and litigation, you can handle high-profile clients, manage sensitive compliance matters, and offer premium advisory services.
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
            src="/a7.png"
            alt="Growth Chart"
            width={300}
            height={220}
            className="rounded-2xl object-cover"
          />

          <Image
            src="/a8.png"
            alt="Success Growth"
            width={300}
            height={220}
            className="rounded-2xl object-cover"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col -mt-20 gap-4">
          <Image
            src="/a9.png"
            alt="Career Growth"
            width={300}
            height={300}
            className="rounded-2xl object-cover h-[350px]"
          />

          <Image
            src="/a10.png"
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