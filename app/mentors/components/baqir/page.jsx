import React from "react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative container mx-auto px-20 py-12 md:py-16 lg:py-25 grid grid-cols-1 lg:grid-cols-2 gap-1 items-center">
        
        {/* Left Content */}
        <div className="relative">
          
          {/* Name Badge */}
          <div className="mb-20">
            <span className="inline-block px-6 py-2 text-[20px] font-bold border-2 rounded-lg text-[#3D4098] border-[#3D4098] bg-white">
              Mr. Syed Baqir Raza
            </span>
          </div>

 <div className="max-w-[600px] mb-9 mt-[-40]" >
            <h1
              className="font-sans font-gray
                         text-[20px] md:text-[20.74px]
                         leading-[132%]
                         tracking-[-0.002em]
                        text-gray-900
                         mb-4 
                         [text-shadow:
                           0.8px_0_0_#3D4098,
                           -0.8px_0_0_#3D4098,
                           0_0.8px_0_#3D4098,
                           0_-0.8px_0_#3D4098
                         ]"
            >
Expert in tax compliance and appeals, Baqir Raza empowers businesses with proven strategies and hands-on leadership in corporate taxation.            </h1>
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
              src="/naseer.png"
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
      <section className="container mx-auto px-20 py-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-6 h-[3px] bg-green-600"></span>
            <h2 className="font-bold font-sans text-[#3D4098]">
              About Baqir Raza
            </h2>
          </div>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            Mr Syed Muhammad Baqir Raza is a veteran  <span className="text-[#15A959]
font-bold">
    Taxation
  </span> Professional and Trainer with over 23 years of experience in corporate tax planning, indirect taxation, tax audits, and legal compliance. He has served in senior tax roles across renowned industrial organizations in Pakistan, including:
          </p>
          <ul className="space-y-3 text-gray-800 mt-10">
  <li className="flex items-start gap-3 font-extrabold">
    <span className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-white text-xs mt-1">
      ✓
    </span>
    Taxation Manager at Kamal Mills Pvt. Ltd.

  </li>
  <li className="flex items-start gap-3 font-extrabold">
    <span className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-white text-xs mt-1">
      ✓
    </span>
   Sales Tax Manager at Ideal Group of Industries
  
  </li>

  <li className="flex items-start gap-3 font-extrabold">
    <span className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-white text-xs mt-1">
      ✓
    </span>
    Deputy Manager Audit & Taxation at Amtex Ltd.
  </li>

  <li className="flex items-start gap-3 font-extrabold">
    <span className="w-6 h-5 rounded-full bg-green-600 flex items-center justify-center text-white text-xs mt-1">
      ✓
    </span>
    Assistant Manager Accounts & Taxation at MSC 
Textiles Pvt. Ltd.
  </li>
</ul>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            Baqir brings deep knowledge of Pakistan’s tax laws and has successfully handled numerous tax audits, appeals, and tribunal-level proceedings. His practical expertise includes formulating tax strategies, implementing SOPs, and aligning compliance frameworks with evolving regulatory demands.
          </p>

          <ul className="space-y-4 text-gray-800 mt-10">

  <li className="flex items-start gap-3 font-extrabold">
    <span className="w-5 h-5 min-w-5 rounded-full bg-green-600 
                     flex items-center justify-center 
                     text-white text-xs mt-1">
      ✓
    </span>
    <span>
      Filing of Income Tax and Sales Tax returns
      <br />
      (monthly, quarterly, annual)
    </span>
  </li>

  <li className="flex items-start gap-3 font-extrabold">
    <span className="w-5 h-5 min-w-5 rounded-full bg-green-600 
                     flex items-center justify-center 
                     text-white text-xs mt-1">
      ✓
    </span>
    <span>
      Managing audit notices, appellate proceedings,
      <br />
      and coordination with consultants
    </span>
  </li>

  <li className="flex items-start gap-3 font-extrabold">
    <span className="w-5 h-5 min-w-5 rounded-full bg-green-600 
                     flex items-center justify-center 
                     text-white text-xs mt-1">
      ✓
    </span>
    <span>
      Annexure-H preparation, POS integration, and Sales
      <br />
      Tax Refund claims under Section 10 of the Sales Tax Act, 1990
    </span>
  </li>

</ul>


          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            Baqir holds an MSc in Mathematics, is highly proficient in Microsoft Office, and communicates fluently in both English and Urdu. He is currently seeking opportunities as a Trainer or Consultant to share his wealth of tax expertise with organizations or academic platforms.
          </p>

        
        </div>

        {/* RIGHT: Expertise */}
        <div className="bg-[#3D4098] rounded-2xl py-8 px-12 mt-6 text-white shadow-xl">

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
      <img src="/cor.png" className="w-[18px] h-[18px]" alt="" />
    </span>
    Corporate Tax Planning & Advisory
  </li>

  <li className="flex items-center gap-4 pb-4 border-b border-white/60">
    <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
      <img src="/lc.png" className="w-[18px] h-[18px]" alt="" />
    </span>
    Sales Tax, VAT & Indirect Taxation
  </li>

  <li className="flex items-center gap-4 pb-4 border-b border-white/60">
    <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
      <img src="/seco.png" className="w-[18px] h-[18px]" alt="" />
    </span>
    Income Tax Return Filing (Monthly / Annual)
  </li>

  <li className="flex items-center gap-4 pb-4 border-b border-white/60">
    <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
      <img src="/sale.png" className="w-[18px] h-[18px]" alt="" />
    </span>
    Sales Tax Refunds (Section 10) & Annexure-H
  </li>

  <li className="flex items-center gap-4 pb-4 border-b border-white/60">
    <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
      <img src="/cust.png" className="w-[18px] h-[18px]" alt="" />
    </span>
    Customs & POS Integration Compliance
  </li>

  <li className="flex items-center gap-4 pb-4 border-b border-white/60">
    <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
      <img src="/taxi.png" className="w-[18px] h-[18px]" alt="" />
    </span>
    Tax Audit & Legal Appeal Handling
  </li>

  <li className="flex items-center gap-4 pb-4 border-b border-white/60">
    <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
      <img src="/tab.png" className="w-[18px] h-[18px]" alt="" />
    </span>
    Interpretation of Finance Bills & SROs
  </li>

  <li className="flex items-center gap-4 pb-4 border-b border-white/60">
    <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
      <img src="/div.png" className="w-[18px] h-[18px]" alt="" />
    </span>
    Tax SOP Design & Compliance Frameworks
  </li>

  <li className="flex items-center gap-4 pb-4 border-b border-white/60">
    <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
      <img src="/set.png" className="w-[18px] h-[18px]" alt="" />
    </span>
    Tribunal & Court-Level Representation
  </li>

  <li className="flex items-center gap-4 pb-4 border-b border-white/60">
    <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
      <img src="/mic.png" className="w-[18px] h-[18px]" alt="" />
    </span>
    Microsoft Office Proficiency
  </li>

  <li className="flex items-center gap-4 pb-4 border-b border-white/60">
    <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
      <img src="/lang.png" className="w-[18px] h-[18px]" alt="" />
    </span>
    Bilingual Communication (English & Urdu)
  </li>

  <li className="flex items-center gap-4 pb-4 border-b border-white/60">
    <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
      <img src="/msc.png" className="w-[18px] h-[18px]" alt="" />
    </span>
    MSc (Mathematics)
  </li>

</ul>

        </div>


      </section>
    </div>
  );
}
