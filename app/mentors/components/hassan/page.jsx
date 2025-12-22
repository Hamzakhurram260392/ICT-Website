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
              Mr. Hassan Mehmood
            </span>
          </div>

          {/* Heading */}
          <div className="max-w-[420px] mb-9 mt-[-20]" >
            <h1
              className="font-sans font-gray
                         text-[20px] md:text-[19.74px]
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
          Is a Corporate & Tax Law expert with <span className="text-[#15A959]
 font-medium">
    11+ years’
  </span> experience in SECP compliance, IPO advisory, and audit. He delivers practical training bridging law and business.
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
            className="absolute -top-16 -left-[-20]
            w-[420px] md:w-[520px] lg:w-[613px]
            h-[360px] md:h-[460px] lg:h-[525px]
            bg-no-repeat bg-contain"
            style={{ backgroundImage: "url('/bg.png')" }}
          />

          {/* Profile Image */}
          <div className="relative z-10 rounded-2xl overflow-hidden translate-x-8 translate-[-26px]">
            <img
              src="/hassan.png"
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
            <h2 className="font-extrabold text-[#3D4098]">
              About Mr. Hassan Mahmood
            </h2>
          </div>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
           Mr Hassan Mahmood is a seasoned Corporate and Tax Law Consultant with over 11 years of experience blending legal expertise with financial acumen. He has held senior consultancy and audit roles at prestigious firms including<span className="text-[#15A959]
 font-bold">
  Crowe 
  </span>Hussain Chaudhury & Co., GLEAM Consulting, and BDO Ebrahim & Co..

          </p>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            Currently, he serves as a trainer and consultant at the <span className="text-[#15A959]
 font-bold">
 Institute of
            Corporate and Taxation
  </span>, Lahore, where he delivers practical training
            on corporate law, taxation, and intellectual property.
          </p>

          <ul className="space-y-2 font-extrabold text-black mt-3">
            His diverse legal background includes:

            <li className="flex items-start gap-3 mt-2 font-extrabold">
              <span className="
  w-6 h-6
  min-w-6
  rounded-full
  bg-[#15A959]
  flex
  items-center
  justify-center
  text-white
  text-xs
  mt-1
  shrink-0
">
  ✓
</span>

              Company incorporations & SECP licensing (including Section 42 NPOs
              and NBFCs)
            </li>
            <li className="flex items-start gap-3 font-extrabold">
            <span className="
  w-6 h-6
  min-w-6
  rounded-full
  bg-[#15A959]
  flex
  items-center
  justify-center
  text-white
  text-xs
  mt-1
  shrink-0
">
  ✓
</span>

              Foreign branch & liaison office registrations
            </li>
            <li className="flex items-start gap-3 font-extrabold">
            <span className="
  w-6 h-6
  min-w-6
  rounded-full
  bg-[#15A959]
  flex
  items-center
  justify-center
  text-white
  text-xs
  mt-1
  shrink-0
">
  ✓
</span>

              IPO advisory & regulatory compliance
            </li>
            <li className="flex items-start gap-3 font-extrbold">
             <span className="
  w-6 h-6
  min-w-6
  rounded-full
  bg-[#15A959]
  flex
  items-center
  justify-center
  text-white
  text-xs
  mt-1
  shrink-0
">
  ✓
</span>

              Legal drafting of joint ventures, shareholder agreements, and NDAs
            </li>
            <li className="flex items-start gap-3 font-extabold">
             <span className="
  w-6 h-6
  min-w-6
  rounded-full
  bg-[#15A959]
  flex
  items-center
  justify-center
  text-white
  text-xs
  mt-1
  shrink-0
">
  ✓
</span>

              Corporate governance & board performance evaluations
            </li>
            <li className="flex items-start gap-3 font-extrabold">
             <span className="
  w-6 h-6
  min-w-6
  rounded-full
  bg-[#15A959]
  flex
  items-center
  justify-center
  text-white
  text-xs
  mt-1
  shrink-0
">
  ✓
</span>

              CDC audits & legal due diligence
            </li>
          </ul>

         <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
Hassan holds an LL.B from the University of Punjab and is a CA Finalist (ICAP). His audit work includes engagements with high-profile clients such as Islamabad Stock Exchange, Fauji Cement, and Gammon Pakistan, combining legal precision with financial insight.As a mentor and trainer, he’s known for translating legal theory into practical, actionable knowledge tailored for professionals in finance, law, and corporate governance.          </p>

        </div>

        {/* RIGHT */}
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
        <img src="/leg.png" className="w-[18px] h-[18px]" alt="" />
      </span>
      Corporate & Tax Law Advisory
    </li>

    <li className="flex items-center gap-4 pb-4 border-b border-white/60">
      <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
        <img src="/inco.png" className="w-[18px] h-[18px]" alt="" />
      </span>
      Income Tax & Sales Tax Compliance
    </li>

    <li className="flex items-center gap-4 pb-4 border-b border-white/60">
      <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
        <img src="/seco.png" className="w-[18px] h-[18px]" alt="" />
      </span>
      SECP Licensing & Company Incorporation
    </li>

    <li className="flex items-center gap-4 pb-4 border-b border-white/60">
      <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
        <img src="/seci.png" className="w-[18px] h-[18px]" alt="" />
      </span>
      Section 42 NPO & NBFC Registration
    </li>

    <li className="flex items-center gap-4 pb-4 border-b border-white/60">
      <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
        <img src="/tm.png" className="w-[18px] h-[18px]" alt="" />
      </span>
      Trademark Registration & IP Filing
    </li>

    <li className="flex items-center gap-4 pb-4 border-b border-white/60">
      <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
        <img src="/logo.png" className="w-[18px] h-[18px]" alt="" />
      </span>
      Legal Drafting: JV Agreements, Shareholder Agreements, NDAs
    </li>

    <li className="flex items-center gap-4 pb-4 border-b border-white/60">
      <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
        <img src="/ipo.png" className="w-[18px] h-[18px]" alt="" />
      </span>
      IPO Advisory & Corporate Governance
    </li>

    <li className="flex items-center gap-4 pb-4 border-b border-white/60">
      <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
        <img src="/reg.png" className="w-[18px] h-[18px]" alt="" />
      </span>
      Regulatory Liaison (PTEA, PHMA, SBP)
    </li>

    <li className="flex items-center gap-4 pb-4 border-b border-white/60">
      <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
        <img src="/audo.png" className="w-[18px] h-[18px]" alt="" />
      </span>
      Audit & Assurance Services
    </li>

    <li className="flex items-center gap-4 pb-4 border-b border-white/60">
      <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
        <img src="/pro.png" className="w-[18px] h-[18px]" alt="" />
      </span>
      Professional Training & Legal Mentorship
    </li>
    <li className="flex items-center gap-4 pb-4 border-b border-white/60">
      <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
        <img src="/llb.png" className="w-[18px] h-[18px]" alt="" />
      </span>
LL.B – University of the Punjab    </li>

    <li className="flex items-center gap-4 pb-4 border-b border-white/60">
      <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
        <img src="/ca.png" className="w-[18px] h-[18px]" alt="" />
      </span>
      CA (Finalist) – ICAP | LL.B – University of the Punjab
    </li>

  </ul>
        </div>
      </section>
    </div>
  );
}
