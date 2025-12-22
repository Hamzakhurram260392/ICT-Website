import React from "react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative container mx-auto px-20 py-12 md:py-16 lg:py-25 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left Content */}
        <div className="relative">
          {/* Name Badge */}
          <div className="mb-14 -mt-10 h-20">
            <span className="inline-block px-6 py-2 text-[20px] font-bold border-2 rounded-lg text-[#3D4098] border-[#3D4098] bg-white">
              Mr. Naseer Ud Din
            </span>
          </div>

          {/* Tagline */}
          <div className="max-w-[600px] mb-9 mt-[-40]" >
            <h1
              className="font-sans font-gray
                         text-[20px] md:text-[20.74px]
                         leading-[132%]
                         tracking-[-0.02em]
                        text-gray-900
                         mb-4 
                         [text-shadow:
                           0.8px_0_0_#3D4098,
                           -0.8px_0_0_#3D4098,
                           0_0.8px_0_#3D4098,
                           0_-0.8px_0_#3D4098
                         ]"
            >
Expert in US & Canadian taxation, helping individuals and businesses manage cross-border compliance with confidence​​            </h1>
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
            className="absolute -top-16 -left-[-20] w-[420px] md:w-[520px] lg:w-[612px] h-[360px] md:h-[460px] lg:h-[525px] bg-no-repeat bg-contain"
            style={{ backgroundImage: "url('/bg.png')" }}
          />
         <div className="relative z-10 rounded-2xl overflow-hidden translate-x-8 translate-[-26px]">
            <img
              src="/baqir.png"
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
      <section className="container mx-auto px-20 py-1 grid grid-cols-1 lg:grid-cols-2 gap-10 ms-start">
        {/* LEFT: About */}
        <div>
          <div className="flex items-center gap-1 mb-6">
            <span className="w-6 h-[3px] bg-green-600"></span>
            <h2 className="font-extrabold text-[#3D4098]">
              About Naseer Ud Din
            </h2>
          </div>

         <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            Naseer Ud Din is a seasoned Tax Accountant specializing in US and Canadian Taxation with over 8 years of hands-on experience in personal and corporate tax compliance, cross-border taxation, and financial reconciliation. He currently serves at Vision Village Pvt. Ltd., the sub-office of GTA Accounting, Canada, where he handles complex tax matters for both resident and non-resident clients across North America.
          </p>

          
<p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            Naseer’s expertise covers a broad range of tax services including T1/T2/T3 filings, <span className="text-[#15A959]
font-bold">
    HST/GST
  </span> returns, and cross-border tax planning. He has deep knowledge of non-resident returns (NR5, NR6, 216, 217) and dual-filing requirements under CRA and IRS regulations. His client base includes individuals, corporations, e-commerce businesses, and trusts/estates.
          </p>

        

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            Holding a Master’s degree in Banking & Finance, Naseer combines technical accounting skills with real-world insights to advise on tax-saving strategies, dividend vs salary planning, and management fee optimization. He is also an active mentor to junior professionals and frequently conducts virtual consultations to support client compliance and planning needs.
          </p>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            His prior roles at Tracon Services and Service Sales <span className="text-[#15A959] font-bold
">
    Corporation
  </span> equipped him with strong foundations in bookkeeping, financial reconciliation, and operational finance—strengthening his ability to deliver holistic tax solutions.
          </p>
        </div>

       {/* RIGHT */}
        <div className="bg-[#3D4098] rounded-xl py-8 px-12 mt-6 text-white shadow-xl">

  {/* Title */}
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

          <ul className="space-y-6">
            <li className="flex items-center gap-4 pb-4 border-b border-white/60">
              <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
    <img
      src="/usc.png"   // 🔁 adjust path if needed
      alt="Business & Tax Law Teaching"
      className="w-5 h-5 opacity-100 rotate-0"
    />
  </span>
              US & Canadian Taxation
            </li>

            <li className="flex items-center gap-4 pb-4 border-b border-white/60">
              <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
    <img
      src="/sol.png"   // 🔁 adjust path if needed
      alt="Business & Tax Law Teaching"
      className="w-5 h-5 opacity-100 rotate-0"
    />
  </span>
              Personal & Corporate Tax Compliance
            </li>

            <li className="flex items-center gap-4 pb-4 border-b border-white/60">
            <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
    <img
      src="/cro.png"   // 🔁 adjust path if needed
      alt="Business & Tax Law Teaching"
      className="w-5 h-5 opacity-100 rotate-0"
    />
  </span>
              Cross-Border Taxation & Planning
            </li>

            <li className="flex items-center gap-4 pb-4 border-b border-white/60">
              <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
    <img
      src="/tabl.png"   // 🔁 adjust path if needed
      alt="Business & Tax Law Teaching"
      className="w-5 h-5 opacity-100 rotate-0"
    />
  </span>
              Non-Resident Tax Returns (NR5, NR6, 216, 217)
            </li>

            <li className="flex items-center gap-4 pb-4 border-b border-white/60">
              <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
    <img
      src="/ol.png"   // 🔁 adjust path if needed
      alt="Business & Tax Law Teaching"
      className="w-5 h-5 opacity-100 rotate-0"
    />
  </span>
              CRA & IRS Dual-Filing Requirements
            </li>

            <li className="flex items-center gap-4 pb-4 border-b border-white/60">
              <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
    <img
      src="/t1.png"   // 🔁 adjust path if needed
      alt="Business & Tax Law Teaching"
      className="w-[30px] h-[30px] opacity-100 rotate-0"
    />
  </span>
              T1 / T2 / T3 Filings
            </li>

            <li className="flex items-center gap-4 pb-4 border-b border-white/60">
              <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
    <img
      src="/hst.png"   // 🔁 adjust path if needed
      alt="Business & Tax Law Teaching"
      className="w-5 h-5 opacity-100 rotate-0"
    />
  </span>
              HST / GST Returns
            </li>

            <li className="flex items-center gap-4 pb-4 border-b border-white/60">
              <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
    <img
      src="/flu.png"   // 🔁 adjust path if needed
      alt="Business & Tax Law Teaching"
      className="w-5 h-5 opacity-100 rotate-0"
    />
  </span>
              Financial Reconciliation
            </li>

            <li className="flex items-center gap-4 pb-4 border-b border-white/60">
              <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
    <img
      src="/tabl.png"   // 🔁 adjust path if needed
      alt="Business & Tax Law Teaching"
      className="w-5 h-5 opacity-100 rotate-0"
    />
  </span>
              Tax-Saving Strategies & Planning
            </li>

            <li className="flex items-center gap-4 pb-4 border-b border-white/60">
             <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
    <img
      src="/boo.png"   // 🔁 adjust path if needed
      alt="Business & Tax Law Teaching"
      className="w-5 h-5 opacity-100 rotate-0"
    />
  </span> 
              Bookkeeping & Operational Finance
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
