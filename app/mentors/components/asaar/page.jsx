import React from "react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative container mx-auto px-20 py-12 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-9 items-center">
        {/* Left Content */}
        <div className="relative">
          {/* Name Badge */}
          <div className="mb-40">
            <span className="inline-block px-6 py-2 text-[20px] font-bold border-2 rounded-lg text-[#3D4098] border-[#3D4098] bg-white">
              Mr. Syed Asaar Uz-Zaman
            </span>
          </div>

          {/* Heading */}
          <div className="max-w-[460px] mb-9 mt-[-120]">
            <h1
              className="font-sans font-gray
              text-[20px] md:text-[20.74px]
              leading-[132%]
              tracking-[-0.02em]
              text-black
              mb-4
              [text-shadow:
                0.8px_0_0_#3D4098,
                -0.8px_0_0_#3D4098,
                0_0.8px_0_#3D4098,
                0_-0.8px_0_#3D4098
              ]"
            >
              ACCA and certified US Tax Preparer with 12+ years in US taxation,
              payroll, and advanced financial analytics.
            </h1>
          </div>

          {/* CTA */}
          <button
            className="
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
            "
          >
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
              src="/asaar.png"
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
            <h2 className="font-sans font-extrabold text-[#3D4098]">
              About Syed Asaar Uz-Zaman
            </h2>
          </div>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            Mr Syed Asaar Uz-Zaman is a dynamic finance and taxation professional
            with over 12 years of diverse experience across industries like
            manufacturing, retail, construction, and e-commerce. He currently
            serves as Manager Tax & Payroll at a US-based firm and also teaches
            US Taxation, Bookkeeping, and Payroll as a part-time faculty member.
          </p>

          <p className="font-sans font-extrabold text-[18.39px] leading-[136%] tracking-[0.02em] text-black mt-6">
            Asaar’s expertise lies in:
          </p>

          <ul className="space-y-3 text-gray-800 mt-6 font-extrabold">
            {[
              "US Tax Returns (1040, 1120, 1120S, 1065)",
              "Payroll tax compliance and state filings",
              "LLC & C-Corp registrations (EIN / ITIN)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs mt-1">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            Previously, Asaar held key roles like Accounts In-Charge at Rachena
            Corporation and Assistant Accounts Manager at{" "}
            <span className="text-[#15A959] font-bold">PITCO</span> & Engine Brand.
            He has contributed to ERP implementations, audit coordination,
            inventory control, and regulatory compliance.
          </p>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            He is a qualified ACCA member, a Certified US Tax Preparer, and trained
            in SAP FICO, Advanced Excel, and Data Analytics. With his practical
            knowledge and ability to deliver real-world solutions, Asaar is
            widely respected as both a trainer and finance consultant.
          </p>
        </div>

        {/* RIGHT: Expertise Card */}
        <div className="bg-[#3D4098] rounded-2xl py-8 px-12 mt-6 text-white shadow-xl">
          <h3 className="text-center mb-10 mt-[-30]">
            <span
              className="
                inline-flex items-center justify-center
                font-sans font-extrabold
                px-10 w-[440px] h-[90px]
                text-[32px] md:text-[40px]
                border-l border-r border-b
                border-white rounded-b-3xl
              "
            >
              Expertise & Skills
            </span>
          </h3>

          <ul className="font-sans space-y-6 pb-6">
            {[
              ["tt.png", "US Individual & Corporate Tax Filing"],
              ["pay.png", "Payroll Tax Returns & State Compliance"],
              ["qui.png", "QuickBooks, TaxSlayer, Proconnect"],
              ["sap.png", "SAP FICO, Sage, Tally, Peachtree, Xero"],
              ["sql.png", "Power BI & SQL for Data Analytics"],
              ["fin.png", "Financial Reporting & Data Visualization"],
              ["acco.png", "ACCA (UK) Qualified"],
              ["erp.png", "ERP Implementation & Regulatory Compliance"],
              ["audoo.png", "Audit Coordination & Inventory Management"],
              ["train.png", "Practical Training & Faculty Expertise"],
            ].map(([icon, label], i) => (
              <li
                key={i}
                className="flex items-center gap-4 pb-4 border-b border-white/60"
              >
                <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                  <img src={`/${icon}`} alt={label} className="w-4 h-4" />
                </span>
                <span className="font-sans font-medium">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
