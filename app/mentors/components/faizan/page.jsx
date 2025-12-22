import React from "react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative container mx-auto px-20 py-12 md:py-16 lg:py-25 grid grid-cols-1 lg:grid-cols-2 gap-9 items-center">
        
        {/* Left Content */}
        <div className="relative">
          <div className="mb-10 mt-[-25px] h-20">
            <span className="inline-block px-6 py-2 text-[20px] font-bold border-2 rounded-lg text-[#3D4098] border-[#3D4098] bg-white">
              Mr. Faizan Ali
            </span>
          </div>

          <div className="max-w-[600px] mb-9 mt-[-40]" >
            <h1
              className="font-sans font-gray
                         text-[20px] md:text-[19.74px]
                         leading-[126%]
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
Chartered Accountant and Taxation Expert with <span className="text-[#15A959]  font-extrabold">9+ years</span> of cross-border experience in UAE & Pakistan. He specializes in corporate tax, VAT, IFRS reporting, and regulatory compliance—bridging finance and business with practical advisory.           </h1>
          </div>

          <button className="bg-[#3D4098] hover:bg-[#2f327a] mb-3 mt-10 text-white px-6 py-3 rounded-lg shadow transition-all duration-200">
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
              src="/faizan.png"
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

      {/* About & Expertise Section */}
      <section className="container mx-auto px-20 py-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* LEFT: About */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-6 h-[3px] bg-green-600"></span>
            <h2 className="font-extrabold text-[#3D4098]">
              About Faizan Ali
            </h2>
          </div>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            Mr. Faizan Ali is a <span className="text-[#15A959]  font-extrabold">Chartered Accountant (CA)</span> and seasoned Taxation & Financial Advisory Expert with over nine years of cross-border experience in Pakistan and the UAE. He is recognized for his expertise in tax compliance, corporate structuring, and financial management across diverse sectors in the GCC region.
          </p>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            As Co-Founder & Managing Partner at Quick Ashford Auditing (Dubai) and Partner – Tax & Advisory at Swift Ashford Tax Consultants L.L.C., Mr. Ali leads strategic initiatives in UAE Corporate Tax, VAT, ESR, ICV, offshore incorporation, and IFRS-based financial reporting. His leadership has helped numerous businesses—from startups to multinational firms—stay compliant and tax-optimized.
          </p>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
           He began his career at Riaz Ahmad & Co. (Islamabad) and held key roles at Dubai Holding, ANK Global, and MMS Nonwoven. His experience spans financial reporting, VAT advisory, cost control, payroll, and audit coordination.
          </p>

         <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            Known for simplifying complex tax laws and designing strong internal controls, Mr. Ali also contributes to professional development through workshops and publications. He holds a <span className="text-[#15A959]  font-extrabold">Certificate in Accounting and Finance (CAF)</span> and is a member of the Institute of Chartered Accountants of Pakistan (ICAP).
          </p>

          

          {/* Industries */}
          <ul className="space-y-2 mt-8 font-semibold text-black">
  <li className="mt-8 font-extrabold text-[#3D4098]">
    Industries Served:
  </li>

  <li className="flex items-start gap-3">
    <span className="w-6 h-6 min-w-6 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs shrink-0 mt-1">
      ✓
    </span>
    Real Estate & Construction
  </li>

  <li className="flex items-start gap-3">
    <span className="w-6 h-6 min-w-6 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs shrink-0 mt-1">
      ✓
    </span>
    Aviation, Logistics & Freight Forwarding
  </li>

  <li className="flex items-start gap-3">
    <span className="w-6 h-6 min-w-6 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs shrink-0 mt-1">
      ✓
    </span>
    Manufacturing & Industrial Products
  </li>

  <li className="flex items-start gap-3">
    <span className="w-6 h-6 min-w-6 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs shrink-0 mt-1">
      ✓
    </span>
    Retail, Hospitality & Professional Services
  </li>

  <li className="flex items-start gap-3">
    <span className="w-6 h-6 min-w-6 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs shrink-0 mt-1">
      ✓
    </span>
    Offshore & Holding Structures
  </li>
</ul>


          {/* Memberships */}
          <ul className="space-y-2 mt-8 font-semibold text-black">
  <li className="space-y-2 mt-8 font-extrabold text-[#3D4098]">
    Professional Memberships:
  </li>

  <li className="flex items-start  gap-3">
    <span className="w-6 h-6 min-w-6 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs shrink-0 mt-1">
      ✓
    </span>
    Member – Institute of Chartered Accountants of Pakistan (ICAP)
  </li>

  <li className="flex items-start gap-3">
    <span className="w-6 h-6 min-w-6 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs shrink-0 mt-1">
      ✓
    </span>
    Member – Tax Professionals Forum (UAE Chapter)
  </li>

  <li className="flex items-start gap-3">
    <span className="w-6 h-6 min-w-6 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs shrink-0 mt-1">
      ✓
    </span>
    Contributor – Regional Tax Compliance Roundtables & Workshops
  </li>
</ul>

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
            {[
              ["/coro.png", "UAE & International Taxation"],
              ["/adv.png", "Corporate Tax Implementation & Advisory"],
              ["/vato.png", "VAT Compliance, Registration & Return Filing"],
              ["/oll.png", "Economic Substance Regulation (ESR) Analysis & Filing"],
              ["/icv.png", "In-Country Value (ICV) Certification Advisory"],
              ["/buss.png", "Offshore Company Formation (RAK, ADGM, DMCC, BVI, Seychelles)"],
              ["/rego.png", "Regulatory & Corporate Compliance"],
              ["/ifrs.png", "IFRS-Based Financial Statement Preparation"],
              ["/cash.png", "Budgeting, Cash Flow Forecasting & Treasury Controls"],
              ["/io.png", "Audit Planning, Execution & External Auditor Coordination"],
              ["/lga.png", "Drafting of Tax Filings, Legal Opinions & Advisory Notes"],
            ].map(([icon, text], i) => (
              <li
      key={i}
      className="flex items-center gap-4 pb-4 border-b border-white/60"
    >
      <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
        <img
          src={icon}
          alt={text}
          className="w-[18px] h-[18px] object-contain"
        />
      </span>
      {text}
    </li>
  ))}
</ul>
        </div>
      </section>
    </div>
  );
}
