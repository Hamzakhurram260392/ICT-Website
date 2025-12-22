import React from "react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative container mx-auto px-6 md:px-20 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>

          {/* Name Badge */}
          <div className="mb-12">
            <span className="inline-block px-6 py-2 text-[18px] md:text-[20px] font-bold border-2 rounded-lg text-[#3D4098] border-[#3D4098] bg-white">
              Mr. Shaheer Mirza
            </span>
          </div>

          {/* Heading */}
          <div className="max-w-[420px] mb-8">
            <h1 className="font-sans text-[18px] md:text-[19.74px] leading-[132%] tracking-[-0.02em] text-black">
              Expert tax practitioner and corporate consultant with 8+ years in tax planning, SECP compliance, and practical return filing.
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
          {/* Decorative Background */}
          <div
            className="absolute -top-10 -left-[-20]
            w-[420px] md:w-[520px] lg:w-[613px]
            h-[360px] md:h-[460px] lg:h-[525px]
            bg-no-repeat bg-contain"
            style={{ backgroundImage: "url('/bg.png')" }}
          />

          {/* Profile Image */}
          <div className="relative z-10 rounded-2xl overflow-hidden translate-x-8 translate-[-5px]">
            <img
              src="/shoaib.png"
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
      <section className="container mx-auto px-6 md:px-20 py-4 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-6 h-[3px] bg-green-600"></span>
            <h2 className="font-bold font-sans text-[#3D4098]">
              About Shaheer Mirza
            </h2>
          </div>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
           Mr Shaheer Mirza is a seasoned Tax Practitioner and Corporate Consultant with over 8 years of extensive experience in tax consultancy, corporate compliance, financial reporting, and legal advisory. He has worked with a wide range of clients including individuals, companies, NGOs, travel agencies, and startups, helping them streamline their tax and regulatory responsibilities.


          </p>

         <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            He is the founder of SM Associates, where he offers expert services in:
          </p>

          <ul className="space-y-4 mt-10 font-bold">
            {[
              "Sales Tax (FBR & SRB)",
              "Wealth Statments",
              "SECP Compliance & Filings",
            ].map((item) => (
              <li key={item} className="flex text-black font-extrabold items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-white text-xs">
                  ✓
                </span>
                {item}
              </li>
              
              
            ))}
            
          </ul>
          <li className="flex items-center text-black gap-6 font-extrabold mt-4">
  {["Income Tax", "Dext", "TaxCalc"].map((item) => (
    <span key={item} className="flex items-center gap-2">
      <span className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-white text-xs">
        ✓
      </span>
      {item}
    </span>
  ))}
</li>
         <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
          Shaheer has deep knowledge of key regulations including the Income Tax Ordinance 2001, Sales Tax Act, and Companies Act 2017. Known for his practical and client-focused approach, he simplifies complex legal frameworks for actionable business decisions.He has trained over 200+ individuals and professionals in:

          </p>
          <ul className="space-y-4 mt-10 font-extrabold">
            {[
              "Practical tax return filing",
              "Tax planning strategies",
              "Business and legal compliance",
              "Presenting appeals before tax tribunals",
              "Facilitating IATA & tourism licensing",
              "Managing Trademark & Copyright filings",
            ].map((item) => (
              <li key={item} className="flex text-black items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-white text-xs">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
          Holds a Bachelor’s degree in Commerce, is an Associate Public Finance Accountant (APFA) with a Merit Certificate in Taxation, and has also completed an LLB. His certifications include:

          </p>
          <ul className="space-y-4 mt-10 font-bold">
            {[
              "QuickBooks Online",
              "Practical Taxation (Softax)",
            ].map((item) => (
              <li key={item} className="flex font-extrabold text-black items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-white text-xs">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>


        </div>

        {/* RIGHT: Expertise */}
        <div className="bg-[#3D4098] rounded-2xl h-270 py-7 px-6 mt-8 md:px-10 text-white shadow-xl">

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
              { icon: "/inc.png", text: "Income Tax & Sales Tax (FBR & SRB)" },
              { icon: "/sec.png", text: "SECP Company Incorporation & Compliance" },
              { icon: "/tax.png", text: "Tax Planning & Practical Return Filing" },
              { icon: "/wea.png", text: "Wealth Statement Preparation" },
              { icon: "/audoo.png", text: "Audit Handling under Section 177" },
              { icon: "/iat.png", text: "IATA Licensing & Travel Agency Compliance" },
              { icon: "/tra.png", text: "Trademark & Copyright Filing" },
              { icon: "/leg.png", text: "Legal Advisory under Companies Act 2017" },
              { icon: "/train.png", text: "Training & Mentoring in Practical Taxation" },
              { icon: "/exc.png", text:  "MS Excel, QuickBooks, Financial Statement Preparation (IAS & IFRS)" },
            ].map((item, i) => (
              <li key={i} className="pb-4 border-b border-white/60">
                <div className="flex items-center gap-4">
                  <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                    <img src={item.icon} alt="" className="w-[18px] h-[18px]" />
                  </span>
                  <span className="font-sans font-semibold text-sm md:text-base">
                    {item.text}
                  </span>
                </div>
              </li>
            ))}
          </ul>

        </div>
      </section>
    </div>
  );
}
