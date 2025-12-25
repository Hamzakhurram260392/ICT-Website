"use client";

import React, { useState } from "react";
import Link from "next/link";

// ================= COURSE DATA =================
const courses = [
  { title: "UK TAXATION", image: "UK.png", link: "/courses/uk-taxation", flag: "🇬🇧", description: "Understand UK tax rules with expert-led professional guidance." },
  { title: "USA TAXATION", image: "USA.png", link: "/courses/us-taxation", flag: "🇺🇸", description: "Master complex US tax laws and compliance procedures." },
  { title: "UAE TAXATION", image: "UAE.png", link: "#", flag: "🇦🇪", description: "Get clarity on UAE VAT, Corporate Tax, and regulations." },
  { title: "SAUDI TAXATION", image: "SAUDI.png", link: "#", flag: "🇸🇦", description: "Explore Saudi Arabia’s Zakat, VAT, and Income Tax." },
  { title: "CERTIFIED TAX ADVISOR", image: "fbr.png", link: "#", flag: "📜", description: "Become a certified tax consultant." },
  { title: "ADVANCE TAXATION AND LITIGATION", image: "advance-tax.png", link: "#", flag: "⚖️", description: "Advanced strategies for tax disputes." },
  { title: "MASTER SALES TAX", image: "sales-tax.png", link: "#", flag: "💰", description: "Complete sales tax & VAT knowledge." },
  { title: "CANADIAN TAXATION", image: "canada.png", link: "#", flag: "🇨🇦", description: "Canadian federal & provincial taxes." },
  { title: "MASTER IMPORT & EXPORT", image: "import.png", link: "#", flag: "🚢", description: "Global trade & documentation." },
  { title: "COMPANY SECRETARY COURSE", image: "sec.png", link: "#", flag: "👔", description: "Corporate governance & compliance." },
  { title: "LLC FORMATION COURSE", image: "llc.png", link: "#", flag: "🏢", description: "LLC formation step‑by‑step." },
  { title: "ADVANCED EXCEL COURSE", image: "excel.png", link: "#", flag: "📊", description: "Advanced Excel & financial models." },
  { title: "MASTERING THE STOCK MARKET", image: "stock.png", link: "#", flag: "📈", description: "Stock market strategies." },
  { title: "INTELLECTUAL PROPERTY", image: "IP.png", link: "#", flag: "📈", description: "Intellectual property rights." },
];

// ================= HERO SECTION =================
const CoursesHeroSection = () => (
  <section className="relative overflow-hidden bg-white py-24 px-44">
    <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
      {/* LEFT CONTENT */}
      <div className="space-y-6">
        <h1 className="text-5xl font-extrabold leading-tight text-indigo-900">
          Learn the Skills That Move <br />
          <span className="text-green-500">Your Career Forward</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-xl">
          Explore courses designed to give you practical knowledge in taxation, corporate affairs,
          finance, and business. Each program helps you build confidence and real-world skills.
        </p>
        <div className="flex gap-4 pt-4">
          <button className="px-8 py-3 bg-[#3D4098] text-white font-semibold rounded-lg shadow-md hover:bg-indigo-800">
            Enroll Now
          </button>
          <button className="px-8 py-2 border-2 border-[#3D4098] text-[#3D4098] font-semibold rounded-lg hover:bg-indigo-50">
            Explore
          </button>
        </div>
      </div>

      {/* RIGHT IMAGES (MATCHING DESIGN) */}
      <div className="relative w-full h-[520px] hidden lg:block">
        <div className="absolute top-6 right-34 mt-14 w-56 h-72 rounded-[60px] overflow-hidden shadow-xl">
          <img src="28.png" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 right-0 w-36 h-36 rounded-full overflow-hidden shadow-lg">
          <img src="25.png" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-40 right-0 w-30 h-72 rounded-full overflow-hidden shadow-xl">
          <img src="29.png" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-52 right-78 mt-20 w-36 h-36 rounded-full overflow-hidden shadow-lg">
          <img src="26.png" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 right-38 w-34 h-34 rounded-3xl overflow-hidden shadow-xl">
          <img src="27.png" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>

    {/* BACKGROUND WAVES */}
    <div className="absolute bottom-0 left-0 w-full h-64 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-100/60 via-transparent to-transparent"></div>
  </section>
);

// ================= COURSE CARD (SIMPLE GRID VERSION) =================
const SimpleCourseCard = ({ course }: any) => (
  <Link href={`/courses/${course.slug}`} className="group block">
    <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
      <div className="relative h-[220px]">
        <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition" />
      </div>
      <div className="absolute bottom-0 w-full text-center pb-3">
        <h3 className="text-white text-sm font-bold">{course.title}</h3>
      </div>
      <div className="absolute inset-0 bg-white flex flex-col justify-center items-center px-4 text-center opacity-0 group-hover:opacity-100 transition">
        <h4 className="text-indigo-900 font-bold text-sm mb-2">{course.title}</h4>
        <p className="text-xs text-gray-600 mb-3">{course.description}</p>
        <span className="text-indigo-600 font-semibold text-sm">Read More</span>
      </div>
    </div>
  </Link>
);

// ================= BUILD YOUR SKILLS SECTION (REPLACED) =================
const BuildYourSkillsSection = () => (
  <section className="pb-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 pt-10">Build Your Skills</h2>
        <p className="mt-4 text-black font-bold -mb-6 max-w-2xl mx-auto">From taxation to corporate affairs, our courses <br></br> help you grow with clear, practical learning</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {courses.map((course, i) => (
          <SimpleCourseCard key={i} course={course} />
        ))}
        <Link href="#" className="group block">
          <div className="h-full rounded-xl border-2 border-indigo-200 p-6 bg-white shadow-lg flex flex-col justify-center text-center">
            <h3 className="font-bold text-indigo-900">Intellectual Property</h3>
            <p className="text-sm text-gray-600 mt-3">Learn patents, copyrights & trademarks.</p>
            <span className="mt-3 text-indigo-600 font-semibold">Read More</span>
          </div>
        </Link>
      </div>
    </div>
  </section>
);

// ================= FINAL PAGE =================
export default function CompleteCoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      <CoursesHeroSection />
      <BuildYourSkillsSection />
    </div>
  );
}
