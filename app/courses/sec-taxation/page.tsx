"use client";
import Image from "next/image";
import React, { useState } from 'react';

// ---------------- FAQ DATA ----------------
const faqItems = [
  {
    id: 1,
    question: 'Who should enroll in the Company Secretary Course?',
    answer: "This course is designed for finance professionals, law graduates, business students, entrepreneurs, and anyone interested in handling corporate compliance and governance responsibilities in Pakistan.",
  },
  {
    id: 2,
    question: 'What key skills will I learn in this course?',
    answer: 'You’ll gain hands-on training in SECP filings (Form A, 29, etc.), company incorporation, preparing board meeting minutes, maintaining statutory registers, and ensuring legal compliance for both private and public limited companies.',
  },
  {
    id: 3,
    question: 'Does this course cover practical SECP portal usage?',
    answer: 'Yes. The course provides real-time demonstrations on using the SECP eServices portal for filings, amendments, compliance tasks, and corporate updates.',
  },
  {
    id: 4,
    question: 'Can I work as a freelance or in-house Company Secretary after this course?',
    answer: 'Absolutely. The skills taught will allow you to pursue freelance secretarial services or take on in-house roles in corporate compliance and governance departments.',
  },
  {
    id: 5,
    question: 'Will I receive a certificate upon completion?',
    answer: 'Yes. You will be awarded a professional certificate from ICT, helping boost your profile for employment or consultancy opportunities in the corporate sector.',
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
                    Find answers to common questions about the Certified Company Secretary Course, including eligibility, course content, certification, and career opportunities. Get the clarity you need to start your tax career with confidence.
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
  { title: "Company Incorporation & Registration", desc: "Learn company formation from name reservation to incorporation, including business structures and legal documentation—a key foundation for corporate law." },
  { title: "Corporate Governance & Secretarial Duties", desc: "Master the Company Secretary’s role in governance and internal control, implementing policies and regulatory checks for ethical, compliant corporate conduct." },
  { title: "Shareholder & Board Meetings Management", desc: "Learn to schedule, manage, and document meetings, including quorum, resolutions, notices, and minutes, for structured and lawful decision-making." },
  { title: "The Companies Regulations 2024", desc: "Understand SECP registration and how each business type differs for tax purposes." },
  { title: "Risk Management & Fraud Prevention", desc:"Learn to identify risks like money laundering and payment fraud, and secure transactions for safe, sustainable trade." },
  { title: "Payment Compliance, Tax & Audit Coordination", desc:"Learn how company secretaries handle tax filings, audit coordination, and payment compliance, collaborating with finance and audit teams for effective governance." },
  { title: "Certification, Career Roadmap& Industry Readiness", desc: "Finish with assessments and earn a recognized certification. Learn to market your skills and pursue corporate roles for real-world success." },
  { title: "Legal Filings, Returns & Reporting", desc: "Understand SECP statutory filings, key forms, deadlines, and online submission." },
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
                src="/cs11.png"
                alt="Mr. Rai Basharat Ali"
                width={180}
                height={220}
                className="object-contain"
              />
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Mr. Kamran Ahmad
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
           Specializing in corporate governance, regulatory compliance, and board meeting protocols, Mr. Kamran Ahmad offers clear and practical insights into the role of a company secretary. His sessions emphasize accuracy, documentation, and legal responsibilities in alignment with SECP standards.
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
                src="/cs12.png"
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
         Specializing in tax planning, audit handling, and public sector compliance, Mr. Hassan Mahmood delivers comprehensive training based on real-world tax practice. His expertise bridges technical knowledge with practical tools, equipping learners for both employment and consultancy roles
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
          Become a Certified <br />
              <span className="text-[#18a957]">Company Secretary</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">
             Learn corporate governance, legal compliance, and board management to excel as a Company Secretary and manage corporate affairs effectively.
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
              <Image src="/cs1.png" alt="UK Taxes" width={400} height={400} className="w-full h-full object-cover" />
            </div>

            <div className=" overflow-hidden">
              <Image src="/cs2.png" alt="Income Tax" width={400} height={400} className="w-full h-full object-cover" />
            </div>

            <div className=" overflow-hidden">
              <Image src="/cs3.png" alt="Tax Relief" width={400} height={400} className="w-full h-full object-cover" />
            </div>

            <div className=" overflow-hidden ">
              <Image src="/cs4.png" alt="Tax Growth" width={400} height={400} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="w-full bg-linear-to-r from-[#f4f6f8] via-[#eaf5fa] to-[#dff1f1] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex gap-2">
            <div className="w-[48%] rounded-4xl overflow-hidden shadow-lg">
              <Image src="/cs5.png" alt="Tax on Mobile" width={500} height={700} className="w-full h-full object-cover" />
            </div>
            <div className="w-[52%]  overflow-hidden shadow-xl mt-16">
              <Image src="/cs6.png" alt="Tax Dashboard" width={500} height={700} className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-[#1aa35b] rounded-full"></span>
              <h4 className="text-xl font-semibold text-[#3c3f9e]">
               Company Secretary Course
              </h4>
            </div>

            <p className="text-lg text-gray-800 font-bold mb-6">
           Company Secretary Course
            </p>

            <p className="text-lg text-gray-800 mb-10">
              ICT’s Company Secretary Course trains finance, law, and business professionals in SECP filings, corporate governance, board documentation, and statutory compliance. Gain hands-on experience with company incorporation, statutory registers, board resolutions, and AGM/EGM procedures. Learn Companies Act 2017 applications, shareholding structures, director appointments, and regulatory reporting to SECP, preparing you for roles as a company secretary, legal advisor, or compliance officer.
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
      Company Secretary Course Benefits
      </h2>

      <p className="text-gray-600 max-w-xl mb-12">
    This course equips you with practical skills in corporate governance, SECP compliance, board management, and secretarial duties. It enhances your profile for roles as a company secretary, legal advisor, or corporate compliance professional.
      </p>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
        {/* 1 */}
        <div>
          <span className="text-4xl font-bold text-[#3c3f9e]">1.</span>
          <h4 className="text-lg font-semibold text-black mt-2">
           In-Demand Corporate Governance Expertise
          </h4>
          <p className="text-gray-600 mt-2 text-sm">
           Learn international trade laws, shipping documents, HS codes, customs clearance, and duties for effective cross-border transactions.
          </p>
        </div>

        {/* 2 */}
        <div>
          <span className="text-4xl font-bold text-[#3c3f9e]">2.</span>
          <h4 className="text-lg font-semibold text-black mt-2">
      Career Opportunities in Listed & Private Companies
          </h4>
          <p className="text-gray-600 mt-2 text-sm">
          Qualified Company Secretaries are in demand by public and private companies, corporate law firms, and financial institutions, offering roles in secretarial and compliance departments.
          </p>
        </div>

        {/* 3 */}
        <div>
          <span className="text-4xl font-bold text-[#3c3f9e]">3.</span>
          <h4 className="text-lg font-semibold text-black mt-2">
          Strong Knowledge of Company Law & Compliance
          </h4>
          <p className="text-gray-600 mt-2 text-sm">
           Learn practical skills in the Companies Act, MOA & AOA, shareholding structures, AGM/EGM procedures, and maintaining statutory records. </p>
        </div>

        {/* 4 */}
        <div>
          <span className="text-4xl font-bold text-[#3c3f9e]">4.</span>
          <h4 className="text-lg font-semibold text-black mt-2">
           Ideal for Accountants, Law Graduates & Entrepreneurs
          </h4>
          <p className="text-gray-600 mt-2 text-sm">
          Ideal for professionals handling corporate filings or advising clients, and entrepreneurs seeking full legal compliance for their businesses.
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
            src="/cs7.png"
            alt="Growth Chart"
            width={300}
            height={220}
            className="rounded-2xl object-cover"
          />

          <Image
            src="/cs9.png"
            alt="Success Growth"
            width={300}
            height={220}
            className="rounded-2xl object-cover"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col -mt-20 gap-4">
          <Image
            src="/cs8.png"
            alt="Career Growth"
            width={300}
            height={300}
            className="rounded-2xl object-cover h-[350px]"
          />

          <Image
            src="/cs10.png"
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