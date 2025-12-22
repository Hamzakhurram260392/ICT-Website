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
              Mr. Tahir Aziz
            </span>
          </div>

          <div className="max-w-[600px] mb-9 mt-[-40]">
  <h1
    className="font-sans font-gray
               text-[20px] md:text-[20.74px]
               leading-[120%]
               tracking-[-0.002em]
               text-gray-900
               mb-2
               [text-shadow:
                 0.8px_0_0_#3D4098,
                 -0.8px_0_0_#3D4098,
                 0_0.8px_0_#3D4098,
                 0_-0.8px_0_#3D4098
               ]"
  >
    Senior Business Controller | Financial Data Analyst | Power BI Expert | Corporate Trainer
  </h1>

  <p className="text-[16px] md:text-[17px] font-semibold text-green-600">
    20+ Years Experience
  </p>
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
              src="/tahir.png"
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
              About Tahir Aziz
            </h2>
          </div>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            Mr. Tahir Aziz is a seasoned finance and data analytics professional with over
            <strong className= "text-green-600"> 20 years of experience</strong> in financial reporting, business intelligence,
            and performance management. He holds qualifications including
            <strong className= "text-green-600"> CPA, CMA (USA), and MS in Accounting & Finance</strong> and has served in senior
            management roles across industries such as airlines, logistics, and textiles.
          </p>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            Currently working at <strong className= "text-green-600">Saudi Airlines Cargo Company LLC</strong> as
            <strong> Senior Business Controller</strong> for budgeting, planning, and forecasting,
            Mr. Aziz plays a key role in enterprise-level ERP implementations and advanced
            financial reporting using tools like <strong className= "text-green-600">SAP ECC, SAP S/4HANA, and Microsoft Power BI</strong>.
          </p>

         <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            As a passionate trainer and mentor, Mr. Aziz has delivered corporate trainings
            at institutions such as <strong className= "text-green-600">ICAP, PIPFA</strong>, and several accounting firms.
            He is widely recognized for simplifying complex data into actionable insights
            through visual analytics, financial modeling, and automated reporting solutions.
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
              ["/fina.png", "Financial Data Analysis & Reporting"],
              ["/1111.png", "Power BI Dashboard Development"],
              ["/boo.png", "Data Modeling & DAX Calculations"],
              ["/com.png", "SAP ECC & SAP S/4HANA Implementation"],
              ["/fina.png", "Advanced Financial Reporting"],
              ["/coro.png", "Corporate Training & Professional Development"],
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
