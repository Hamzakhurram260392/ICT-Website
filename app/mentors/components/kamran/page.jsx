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
              Mr. Kamran Ahmad
            </span>
          </div>

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
Expert in corporate advisory, taxation, and regulatory compliance with strong leadership in finance and business strategy.           </h1>
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
              src="/kamran.png"
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
              About Kamran Ahmad
            </h2>
          </div>

          <p className="font-sans font-bold text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
           Kamran Ahmad is a seasoned <span className="text-green-600 font-extrabold">Finance</span> and <span className="text-[#15A959] font-extrabold">Taxation</span> expert with over a decade of rich and diverse experience across corporate advisory, taxation, regulatory compliance, strategic financial planning, and business consulting.
          </p>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-0">
           
Currently, he serves as the Chief Executive Officer and Director of KK Consultant (SMC-PVT) Ltd., a role he has held since 2017. In addition, he leads Blue Solutions (Pvt.) Ltd. as CEO and contributes his strategic insights as an Independent Director on the board of Hafiz Limited for the term 2021–2027. His leadership across multiple organizations reflects a strong command over corporate governance and operational excellence in financial consultancy and advisory services.
          </p>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
           Academically, Kamran holds an MS in Finance from Bahria University and a BBA (Hons.) in Finance from Arid Agriculture University. He is a<span className="text-[#15A959] font-extrabold"> Certified Management Accountant (CMA-Cont.)</span> since 2019, further strengthening his analytical and decision-making capabilities in finance. His qualifications also include certifications in English language and computer software applications, enhancing his communication and technical skills. Moreover, he is a SECP Certified Director (DTP-64), and a Registered Intermediary and Tax Practitioner, underscoring his credibility and compliance with national financial regulatory frameworks.
          </p>

         <p className="font-sans font-bold text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6"> Kamran’s professional affiliations are equally notable, demonstrating his commitment to <span className="text-[#15A959] font-extrabold">leadership</span> and industry-wide engagement </p>
          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-1">He serves as the <span className="text-[#15A959]  font-extrabold">SV President</span> and <span className="text-green-600 font-extrabold">General Secretary</span> of the Corporate & Industrial Advisory Professionals (CIAP) and holds life membership in the Rawalpindi Islamabad Tax Bar Association. As a corporate member of both RCCI and ICCI, he actively contributes to business community development. Kamran is also a founder and core member of the All Pakistan Income Tax Practitioners Association and maintains an active presence in the Global CXO Forum, where he collaborates with industry leaders on strategic and policy matters. Kamran’s professional affiliations are equally notable, demonstrating his commitment to leadership and industry-wide engagement 
           </p>
          
        </div>

        {/* RIGHT: Expertise */}
        <div className="bg-[#3D4098] rounded-2xl h-240 py-8 px-12 mt-6 text-white shadow-xl">

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
    ["/coro.png", "Corporate Advisory"],
    ["/taxo.png", "Taxation (Income Tax)"],
    ["/rego.png", "Regulatory Compliance"],
    ["/acc.png", "Accounting & Finance"],
    ["/buss.png", "Business Strategy & Formation"],
    ["/com.png", "Company Secretarial Services"],
    ["/sece.png", "SECP Compliance & Certifications"],
    ["/cons.png", "Consulting for Multiple Sectors"],
    ["/res.png", "Research & Academia"],
    ["/prof.png", "Professional Networking & Associations"],
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
