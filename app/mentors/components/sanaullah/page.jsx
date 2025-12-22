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
              Mr. Sanaullah Khan Marwat
            </span>
          </div>

          <div className="max-w-[600px] mb-9 mt-[-40]" >
            <h1
              className="font-sans font-gray
                         text-[20px] md:text-[19.74px]
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
Senior Capital Markets Trainer
              <br />
              <span className="font-semibold text-green-600">
                27+ Years in Equity Research & Trading
              </span></h1>
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
          <div className="relative z-10 rounded-2xl overflow-hidden translate-x-10 translate-[-26px]">
            <img
              src="/sanaullah.png"
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
              Sanaullah Khan Marwat
            </h2>
          </div>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            Mr. Sanaullah Khan Marwat is a highly accomplished stock market expert with
            over <strong className= "text-green-600">27 years of hands-on experience</strong> in technical,
            fundamental, and psychological market analysis. He has held key leadership
            roles in Pakistan’s top brokerage firms, including:
          </p>

          <ul className="space-y-3 font-semibold text-gray-800 mt-8">
  <li className="flex items-start gap-3">
    <span className="w-6 h-6 min-w-6 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs shrink-0 mt-1">
      ✓
    </span>
    Regional Manager – KASB Securities
  </li>

  <li className="flex items-start gap-3">
    <span className="w-6 h-6 min-w-6 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs shrink-0 mt-1">
      ✓
    </span>
    Senior Manager – Arif Habib Limited
  </li>

  <li className="flex items-start gap-3">
    <span className="w-6 h-6 min-w-6 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs shrink-0 mt-1">
      ✓
    </span>
    Regional Manager – Askari Securities
  </li>

  <li className="flex items-start gap-3">
    <span className="w-6 h-6 min-w-6 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs shrink-0 mt-1">
      ✓
    </span>
    Vice President – Alfalah Securities Limited
  </li>

  <li className="flex items-start gap-3">
    <span className="w-6 h-6 min-w-6 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs shrink-0 mt-1">
      ✓
    </span>
    Current Consultant – MMK Securities Limited, Islamabad
  </li>
</ul>


          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            His vast industry experience spans client portfolio management, market
            forecasting, investor training, and identifying high-growth and
            dividend-yielding companies. Mr. Marwat is widely respected for simplifying
            complex market strategies and instilling long-term trading discipline.
          </p>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            A strong advocate of investor education over speculation, he has trained
            hundreds of professionals, students, and entrepreneurs across Pakistan,
            helping them build sustainable trading systems and financial independence
            through disciplined market participation.
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
              ["/coro.png", "Technical Analysis & Price Action Trading"],
              ["/jus.png", "Fundamental Analysis & Equity Valuation"],
              ["/sala.png", "Market Psychology & Behavioral Finance"],
              ["/long.png", "Long-Term Portfolio Building Strategies"],
              ["/traa.png", "Dividend Yield Stock Identification"],
              ["/secp.png", "Risk Management & Capital Allocation"],
              ["/acca.png", "Pakistan Stock Exchange (PSX) Operations"],
              ["/sap.png", "Client Investment Advisory & Market Insights"],
              ["/char.png", "Real-Time Charting Tools & Platforms"],
              ["/train.png", "Trainer & Mentor in Stock Market Education"],
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
