import React from "react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative container mx-auto px-20 py-12 md:py-16 lg:py-25 grid grid-cols-1 lg:grid-cols-2 gap-1 items-center">

        {/* Left Content */}
        <div className="relative">
          <div className="mb-10 mt-[-25px] h-20">
            <span className="inline-block px-6 py-2 text-[20px] font-bold border-2 rounded-lg text-[#3D4098] border-[#3D4098] bg-white">
              Mr. Mehmood Ul Hassan
            </span>
          </div>

           <div className="max-w-[600px] mb-9 mt-[-40]" >
            <h1
              className="font-sans font-gray
                         text-[20px] md:text-[20.74px]
                         leading-[125%]
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
KSA VAT, Corporate Tax & Compliance Specialist | CMA & Data Analytics
              Certified Financial Expert
              <br />
              <span className="font-normal">
                Financial Reporting, Budgeting & ERP Systems | <span className="text-[#15A959]  font-extrabold">15+ Years</span> in Management Accounting & Taxation Roles
              </span></h1>
          </div>

          <button className="bg-[#3D4098] hover:bg-[#2f327a] mb-3 mt-10 text-white px-8 py-3 rounded-lg shadow transition-all duration-200">
            Enroll Now
          </button>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <div
            className="absolute -top-16 -left-[-20] w-[420px] md:w-[520px] lg:w-[612px] h-[360px] md:h-[460px] lg:h-[525px] bg-no-repeat bg-contain"
            style={{ backgroundImage: "url('/bg.png')" }}
          />
          <div className="relative z-10 rounded-2xl overflow-hidden translate-x-10 translate-[-26px]">
            <img
              src="/mehmood.png"
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
              About Mehmood Ul Hassan
            </h2>
          </div>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            Mr. Mehmood Ul Hassan has a strong financial background, evidenced by his
            <strong className= "text-green-600"> Certified Management Accountant (CMA)</strong> designation and
            specialized certifications in <strong className= "text-green-600">IMA Data Analytics & Visualization Fundamentals</strong>,
            along with expertise in <strong className= "text-green-600">Excel PowerQuery</strong> and
            <strong className= "text-green-600"> Microsoft Power BI Desktop</strong>.
          </p>

          <ul className="space-y-3 font-semibold text-gray-800 mt-8">
  {[
    "Financial Management",
    "Taxation & Compliance",
    "Accounting Operations",
    "Software & Tools",
    "Manager Taxation at Ashford Management Consultants",
    "Management Accountant at SFM Corporate Services",
    "Accountant at Haus & Haus Holiday Rental",
    "Assistant Manager at Fixit Consultancy",
  ].map((item, index) => (
    <li key={index} className="flex items-start gap-3">
      <span className="w-6 h-6 min-w-5 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs shrink-0 mt-1">
        ✓
      </span>
      {item}
    </li>
  ))}
</ul>


         <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            A results-driven finance professional with a strong analytical mindset, Mr. Mehmood
            combines technical expertise in accounting, taxation, and financial reporting with
            hands-on experience in <strong className= "text-green-600">ERP systems and data analytics</strong>. He is adept at
            streamlining financial processes, ensuring compliance, and delivering data-backed
            insights to support strategic decision-making.
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
            {[
              ["/coro.png", "Certified Management Accountant (CMA)"],
              ["/exc.png", "Complete Introduction to Excel PowerQuery"],
              ["/micr.png", "Microsoft Power BI Desktop for Business Intelligence"],
              ["/erp.png", "IMA Data Analytics & Visualization Fundamentals"],
              ["/cha.png", "Chartered Accountancy Foundation"],
              ["/exc.png", "Excel Fundamentals – Formulas for Finance"],
              ["/train.png", "Training Junior Staff"],
              ["/cor.png", "Corporate Tax Registration"],
              ["/cash.png", "VAT Registration & De-registration"],
              ["/traa.png", "VAT Return Filing"],
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
