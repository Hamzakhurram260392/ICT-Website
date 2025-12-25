"use client";
import Image from "next/image";
import React, { useState } from 'react';

// ---------------- FAQ DATA ----------------
const faqItems = [
  {
    id: 1,
    question: 'Who should join this course?',
    answer: "This course is ideal for students, fresh graduates, business analysts, professionals in finance or marketing, and anyone interested in learning how to analyze data using AI-powered tools and platforms.",
  },
  {
    id: 2,
    question: 'What skills will I gain from this course?',
    answer: 'You’ll learn data collection, cleaning, transformation, analysis, and visualization using Excel, Power BI, Python, and AI-based tools. You’ll also develop skills in deriving actionable business insights from real-world datasets.',
  },
  {
    id: 3,
    question: 'Does the course include training on AI tools?',
    answer: 'Yes. The course covers modern AI-driven platforms and tools that assist in automating data analysis, forecasting, trend identification, and visualization — even for those without advanced coding skills.',
  },
  {
    id: 4,
    question: 'Is any technical background required?',
    answer: 'No prior programming experience is necessary. The course starts from the basics and gradually introduces tools like Python and Power BI, making it suitable even for non-technical learners.',
  },
  {
    id: 5,
    question: 'Will I get a certificate after completing the course?',
    answer: 'Yes. After successful completion, you’ll receive an AI Data Analyst Certification from ICT, which will help strengthen your professional profile in data-driven industries.',
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
  { title: "Foundations of Data Analytics & AI", desc: "Learn the fundamentals of data analysis, machine learning, and AI, along with the roles of an AI Data Analyst—a strong base for AI-driven analytics." },
  { title: "Data Collection & Cleaning Techniques", desc: "Learn to collect data from APIs, websites, and databases, and clean it using Python, Excel, and Power Query, preparing it for meaningful analysis." },
  { title: "Introduction to Machine Learning for Analysts", desc: "Gain hands-on experience with supervised and unsupervised learning, learning how clean, structured data supports ML models—bridging analysis with practical AI." },
  { title: "Exploratory Data Analysis (EDA)", desc: "Use Python with Pandas and Matplotlib to analyze data, spot trends, and gain insights.s." },
  { title: "Build dashboards and visual reports with Power BI, Tableau, and Matplotlib, presenting complex data clearly to drive informed decisions." },
  { title: "Apply machine learning and time-series tools to forecast sales, customer behavior, and market trends, turning data into strategic business insights." },
  { title: "Working with Big Data Tools & Platforms", desc: "Learn to use SQL, Google BigQuery, and cloud storage to manage and query large datasets efficiently, preparing you for enterprise-level data work." },
  { title: "Career Pathways", desc: "Complete hands-on AI projects to build a portfolio and prepare for data and AI roles." },
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


// ---------------- MAIN PAGE ----------------
export default function UKTaxesPage() {
  return (
    <>
      {/* SECTION 1 */}
      <section className="w-full bg-linear-to-r from-[#f7f7f7] via-[#eef6fb] to-[#dfe7f3] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#3c3f9e]">
            Build Real Skills in  <br />
              <span className="text-[#18a957]">Data Analysis</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              Learn the tools, techniques, and real workflows used in the data industry. This course takes you from basics to advanced skills with hands-on projects that prepare you for practical work.
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
              <Image src="/da1.png" alt="UK Taxes" width={400} height={400} className="w-full h-full object-cover" />
            </div>

            <div className=" overflow-hidden">
              <Image src="/da2.png" alt="Income Tax" width={400} height={400} className="w-full h-full object-cover" />
            </div>

            <div className=" overflow-hidden">
              <Image src="/da3.png" alt="Tax Relief" width={400} height={400} className="w-full h-full object-cover" />
            </div>

            <div className=" overflow-hidden ">
              <Image src="/da4.png" alt="Tax Growth" width={400} height={400} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="w-full bg-linear-to-r from-[#f4f6f8] via-[#eaf5fa] to-[#dff1f1] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex gap-2">
            <div className="w-[48%] rounded-4xl overflow-hidden shadow-lg">
              <Image src="/da5.png" alt="Tax on Mobile" width={500} height={700} className="w-full h-full object-cover" />
            </div>
            <div className="w-[52%]  overflow-hidden shadow-xl mt-16">
              <Image src="/da6.png" alt="Tax Dashboard" width={500} height={700} className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-[#1aa35b] rounded-full"></span>
              <h4 className="text-xl font-semibold text-[#3c3f9e]">
                Certified Data Analyst Course
              </h4>
            </div>

            <p className="text-lg text-gray-800 font-bold mb-6">
              ICT offers the AI Data Analyst Certification Course for aspiring data professionals in Pakistan. The training covers AI-based data collection, cleaning, analysis, and visualization using Excel, Power BI, Python, and modern AI tools.
            </p>

            <p className="text-lg text-gray-800 mb-10">
              Participants learn to manage datasets, automate workflows, and build interactive dashboards. The course also introduces data modeling, machine learning basics, and real-time analytics to help you start or grow your career in data analysis.
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
        Certified Data Analyst Course Benefits
      </h2>

      <p className="text-gray-600 max-w-xl mb-12">
      Acquire key data analysis skills, gain hands-on experience, and prepare for entry- and mid-level roles locally and internationally.
      </p>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
        {/* 1 */}
        <div>
          <span className="text-4xl font-bold text-[#3c3f9e]">1.</span>
          <h4 className="text-lg font-semibold text-black mt-2">
            Industry-Relevant, In-Demand Skills
          </h4>
          <p className="text-gray-600 mt-2 text-sm">
            Learn Excel, Power BI, Python, and AI tools to analyze data, create visuals, and automate tasks for in-demand jobs.
          </p>
        </div>

        {/* 2 */}
        <div>
          <span className="text-4xl font-bold text-[#3c3f9e]">2.</span>
          <h4 className="text-lg font-semibold text-black mt-2">
           Career Opportunities Across Multiple Sectors
          </h4>
          <p className="text-gray-600 mt-2 text-sm">
            This certification prepares you for entry- and mid-level data analyst roles across finance, marketing, healthcare, e-commerce, and more, locally and internationally.
          </p>
        </div>

        {/* 3 */}
        <div>
          <span className="text-4xl font-bold text-[#3c3f9e]">3.</span>
          <h4 className="text-lg font-semibold text-black mt-2">
            Practical, Hands-On Training
          </h4>
          <p className="text-gray-600 mt-2 text-sm">
            Get hands-on experience with projects and case studies, learning to clean, analyze, and present data using AI to solve real business problems.
          </p>
        </div>

        {/* 4 */}
        <div>
          <span className="text-4xl font-bold text-[#3c3f9e]">4.</span>
          <h4 className="text-lg font-semibold text-black mt-2">
            Ideal for Freelancers, Professionals & Students
          </h4>
          <p className="text-gray-600 mt-2 text-sm">
           Whether upskilling, switching careers, or starting in analytics, this course provides a solid foundation with job-ready tools and techniques.
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
            src="/da7.png"
            alt="Growth Chart"
            width={300}
            height={220}
            className="rounded-2xl object-cover"
          />

          <Image
            src="/da8.png"
            alt="Success Growth"
            width={300}
            height={220}
            className="rounded-2xl object-cover"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col -mt-20 gap-4">
          <Image
            src="/da9.png"
            alt="Career Growth"
            width={300}
            height={300}
            className="rounded-2xl object-cover h-[350px]"
          />

          <Image
            src="/da10.png"
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