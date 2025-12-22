import React from "react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative container mx-auto px-20 py-12 md:py-16 lg:py-25 grid grid-cols-1 lg:grid-cols-2 gap-9 items-center">

        {/* Left Content */}
        <div className="relative">

          {/* Name Badge */}
          <div className="mb-20">
            <span className="inline-block px-6 py-2 text-[20px] font-bold border-2 rounded-lg text-[#3D4098] border-[#3D4098] bg-white">
              Mr. Muhammad Waqas
            </span>
          </div>

          {/* Heading */}
          <div className="max-w-[420px] mb-9 mt-[-20]">
            <h1
              className="font-sans
                         text-[20px] md:text-[20.74px]
                         leading-[132%]
                         tracking-[-0.02em]
                         text-black
                         [text-shadow:
                           0.8px_0_0_#3D4098,
                           -0.8px_0_0_#3D4098,
                           0_0.8px_0_#3D4098,
                           0_-0.8px_0_#3D4098
                         ]"
            >
              UK accounting specialist with 5+ years in FRS 102/105, corporation tax, VAT, and compliance management.
            </h1>
          </div>

          {/* CTA */}
         <button className="
  bg-[#3D4098]
  hover:bg-[#2f327a]
  mb-3 mt-10
  text-white
  px-7 py-2
  rounded-lg
  shadow-lg
  hover:shadow-xl
  transition-all
  duration-200
">
  Enroll Now
</button>

        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <div
            className="absolute -top-16 -left-[-20]
                       w-[420px] md:w-[520px] lg:w-[613px]
                       h-[360px] md:h-[460px] lg:h-[525px]
                       bg-no-repeat bg-contain"
            style={{ backgroundImage: "url('/bg.png')" }}
          />
          <div className="relative z-10 rounded-2xl overflow-hidden translate-x-8 translate-[-26px]">
            <img
              src="/waqar.png"
              alt="Profile"
              className="
  w-[220px] h-[520px]
  md:w-[400px] md:h-[420px]
  lg:w-[424px] lg:h-[458px]
  object-cover
"

            />
          </div>
        </div>
      </section>

      {/* About & Expertise */}
      <section className="container mx-auto px-20 py-1 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* LEFT */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-6 h-[3px] bg-green-600"></span>
            <h2 className="font-extrabold text-[#3D4098]">
              About Muhammad Waqas
            </h2>
          </div>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
           Mr Muhammad Waqas is a dedicated UK-based accounting professional with over</p>

<p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
5 years of practical experience in<span className="text-[#15A959]
 font-bold">
  UK 
  </span>accounting, taxation, and compliance services. Throughout his career, he has served in roles such as Assistant Manager, Senior Accountant, and Practice Accountant for well-reputed UK accounting firms operating from Pakistan.
          </p>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
           He is currently working as an Assistant Manager at 
Isaacs Accountants, where he leads the preparation of:
          </p>

         

          <ul className="space-y-3 text-gray-800 mt-6 font-extrabold">
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#15A959]  flex items-center justify-center text-white text-xs">
        ✓
      </span>
              Financial Statements (FRS 102 / 105)
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#15A959]  flex items-center justify-center text-white text-xs">
        ✓
      </span>
              Corporation tax returns (CT600)
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs">
        ✓
      </span>
              Self-assessment tax filings
            </li>
          </ul>

         <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            He also manages a team responsible for serving a diverse portfolio of clients with multi-entity structures, and regularly collaborates with HMRC to ensure compliance and timely submissions.Muhammad Waqas is technically skilled in several industry-standard tools, including:
          </p>
          <ul className="space-y-3 text-gray-800 mt-10 font-extrabold">
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-white text-xs">
        ✓
      </span>
              QuickBooks (ProAdvisor Certified)

            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-white text-xs">
        ✓
      </span>
              Xero (ProAdvisor Certified)

            </li>
            <li className="flex items-center gap-6 font-extrabold">
  {["Capium", "IRIS", "TaxCalc", "Dext"].map((item) => (
    <span key={item} className="flex items-center gap-2">
      <span className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-white text-xs">
        ✓
      </span>
      {item}
    </span>
  ))}
</li>


          </ul>
         <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
           He has also successfully handled VAT returns, payroll processing, and confirmation statements for a broad range of UK-based businesses.
          </p>
        <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
          Academically, he has completed the FIA program and is an ACCA Finalist. He is well-regarded for his analytical skills, client handling abilities, and leadership in practice environments. His adaptability to changing UK accounting standards makes him a valuable asset for any outsourced accounting firm.
          </p>
          
        </div>

        {/* RIGHT: Expertise Card */}
        <div className="bg-[#3D4098] rounded-2xl py-8 h-255 px-12 mt-10 text-white shadow-xl">

          <h3 className="text-center mb-10 mt-[-30]">
  <div>
  <span
    className="
      inline-flex
      items-center
      font-sans
      justify-center
      px-10
      w-[440px]
      pb-4
      pl-10
      h-[90px]
      text-[32px] md:text-[40px] 
      font-extrabold
      border-l border-r border-b  
      border-white rounded-b-3xl
    "
  >
    Expertise & Skills
  </span>
  </div>
</h3>


          <ul className="space-y-4 pb-1">

  {/* 1 */}
  <li className="pb-4 border-b border-white/60 font-sans">
    <div className="flex items-center gap-4">
      <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
        <img src="/state.png" alt="" className="w-[18px] h-[18px]" />
      </span>
      <span className="font-sans">
        Financial Statements Preparation (FRS 102/105)
      </span>
    </div>
  </li>

  {/* 2 */}
  <li className="pb-4 border-b border-white/60">
    <div className="flex items-center gap-4">
      <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
        <img src="/pay.png" alt="" className="w-[18px] h-[18px]" />
      </span>
      <span className="font-sans">
        Corporation Tax (CT600) & Self-Assessment Filing
      </span>
    </div>
  </li>

  {/* 3 */}
  <li className="pb-4 border-b border-white/60">
    <div className="flex items-center gap-4">
      <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
        <img src="/vatt.png" alt="" className="w-[18px] h-[18px]" />
      </span>
      <span className=" font-sans">
        UK VAT Returns & Payroll Processing (Xero, Moneysoft, FreeAgent)
      </span>
    </div>
  </li>

  {/* 4 */}
  <li className="pb-4 border-b border-white/60">
    <div className="flex items-center gap-4">
      <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
        <img src="/qui.png" alt="" className="w-[18px] h-[18px]" />
      </span>
      <span className=" font-sans">
        QuickBooks (ProAdvisor Certified)
      </span>
    </div>
  </li>

  {/* ⭐ 5 — SPECIAL ROW */}
  <li className="py-4 border-b border-white/60 font-sans">
    <div className="flex items-center justify-center gap-10">

      {/* Capium */}
      <div className="flex items-center gap-3">
        <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
          <img src="/capium.png" alt="Capium" className="w-[18px] h-[18px]" />
        </span>
        <span className="font-sans">Capium</span>
      </div>

      {/* IRIS (with left & right border) */}
      <div className="flex items-center gap-3 px-8 border-l border-r border-white/60">
        <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
          <img src="/iris.png" alt="IRIS" className="w-[18px] h-[18px]" />
        </span>
        <span className="font-sans">IRIS</span>
      </div>

      {/* TaxCalc */}
      <div className="flex items-center gap-3">
        <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
          <img src="/taxclac.png" alt="TaxCalc" className="w-[18px] h-[18px]" />
        </span>
        <span className="font-sans">TaxCalc</span>
      </div>

    </div>
  </li>

  {/* 6 */}
  <li className="pb-4 border-b border-white/60">
    <div className="flex items-center gap-4">
      <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
        <img src="/xero.png" alt="" className="w-[18px] h-[18px]" />
      </span>
      <span className="font-sans">
        Xero (ProAdvisor Certified)
      </span>
    </div>
  </li>

  {/* 7 */}
  <li className="pb-4 border-b border-white/60">
    <div className="flex items-center gap-4">
      <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
        <img src="/bank.png" alt="" className="w-[18px] h-[18px]" />
      </span>
      <span className="font-sans">
        Bank & Balance Sheet Reconciliations
      </span>
    </div>
  </li>

  {/* 8 */}
  <li className="pb-4 border-b border-white/60">
    <div className="flex items-center gap-4">
      <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
        <img src="/year.png" alt="" className="w-[18px] h-[18px]" />
      </span>
      <span className="font-sans">
        Year-End Closings & Adjustments
      </span>
    </div>
  </li>

  {/* 9 */}
  <li className="pb-4 border-b border-white/60">
    <div className="flex items-center gap-4">
      <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
        <img src="/hmrc.png" alt="" className="w-[18px] h-[18px]" />
      </span>
      <span className="font-sans">
        HMRC Liaison & Companies House Filings
      </span>
    </div>
  </li>

  {/* 10 */}
  <li className="pb-4 border-b border-white/60">
    <div className="flex items-center gap-4">
      <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
        <img src="/client.png" alt="" className="w-[18px] h-[18px]" />
      </span>
      <span className="font-sans">
        Client Communication & Advisory
      </span>
    </div>
  </li>  
  {/* 10 */}
  <li className="pb-4 border-b border-white/60">
    <div className="flex items-center gap-4">
      <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
        <img src="/tice.png" alt="" className="w-[18px] h-[18px]" />
      </span>
      <span className="font-sans">
        Practice Team Management
      </span>
    </div>
  </li>
  {/* 10 */}
  <li className="pb-4 border-b border-white/60">
    <div className="flex items-center gap-4">
      <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
        <img src="/adh.png" alt="" className="w-[18px] h-[18px]" />
      </span>
      <span className="font-sans">
        Adherence to UK Accounting & Compliance 
Standardss
      </span>
    </div>
  </li>
</ul>

        </div>
      </section>
    </div>
  );
}
