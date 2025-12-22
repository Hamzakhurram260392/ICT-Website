import React from "react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden ">
      {/* Hero Section */}
      <section className="relative container mx-auto px-20 py-12 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-9 items-center">
        {/* Left Content */}
        <div className="relative">
          {/* Name Badge */}
          <div className="mb-8">
            <span
              className="inline-block px-6 py-2 text-[20px]
              font font-bold border-2 rounded-lg
              text-[#3D4098] border-[#3D4098]
              bg-white"
            >
              Mr. Rai Basharat Ali
            </span>
          </div>

          {/* Heading */}
          <div className="max-w-[700px]">
            <h1
              className="font-sans font-black
              text-[50px] md:text-[28.74px]
              leading-[140%]
              tracking-[-0.02em]
              text-[#3D4098]
              mb-4
              [text-shadow:
                0.8px_0_0_#3D4098,
                -0.8px_0_0_#3D4098,
                0_0.8px_0_#3D4098,
                0_-0.8px_0_#3D4098
              ]"
            >
              [ACA (ICAEW), LLB, MSc (Eco),
              <br /> Pursuing LLM
              (University of London)]
            </h1>
          </div>

          {/* Description */}
          <p className="text-black max-w-100 mb-10">
            Corporate law and taxation expert with 10+ years of legal, academic,
            and advisory excellence across Pakistan.
          </p>

          {/* CTA Button */}
          <button
            className="bg-[#3D4098] hover:bg-[#2f327a] mb-3 mt-5
            text-white
            px-7 py-2
            rounded-lg
            shadow
            transition-all duration-200"
          >
            Enroll Now
          </button>
        </div>

        {/* Right Image with Decorative Background */}
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
              src="/profile.png"
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
        {/* LEFT: About Content */}
        <div>
          {/* Section Title */}
          <div className="flex items-center gap-2 mb-6 mt-[-1]">
            <span className="w-6 h-[3px] bg-green-600"></span>
            <h2 className="font font-extrabold text-[#3D4098]">
              About Basharat Ali
            </h2>
          </div>

          {/* Paragraphs */}
          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            Mr. Rai Basharat Ali is a leading expert in Corporate Law and
            Taxation, bringing over a decade of experience in legal consultancy,
            academia, and professional training. He is the Founder and Chief
            Executive Officer of Basharat Ali & Company, a respected legal and
            tax advisory firm serving a wide range of clients across Pakistan.
          </p>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            Currently, Mr. Rai serves as Visiting Faculty at{" "}
            <span className="text-[#15A959] font-bold">
              the International Islamic University Islamabad
            </span>
            , where he contributes to the academic development of future legal
            professionals. He has also previously served as a Lecturer at{" "}
            <span className="text-[#15A959] font-bold">
              PMAS-Arid Agriculture University Rawalpindi
            </span>{" "}
            and taught at{" "}
            <span className="text-[#15A959] font-bold">
              SBM Islamabad
            </span>.
          </p>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            In addition to his legal practice and academic roles, Mr. Rai is the
            Head of the Institute of Corporate and Taxation, where he leads
            comprehensive training programs for professionals in corporate law,
            taxation, and regulatory compliance.
          </p>

          {/* Bullet List */}
          <ul className="space-y-3 text-gray-800 mt-9">
            <li className="flex items-start gap-3 font-extrabold">
              <span className="w-5 h-5 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs mt-1">
                ✓
              </span>
              Corporate and commercial law
            </li>

            <li className="flex items-start gap-3 font-extrabold">
              <span className="w-5 h-5 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs mt-1">
                ✓
              </span>
              Tax planning, compliance, and advisory
            </li>

            <li className="flex items-start gap-3 font-extrabold">
              <span className="w-5 h-5 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs mt-1">
                ✓
              </span>
              Legal drafting and regulatory affairs
            </li>

            <li className="flex items-start gap-3 font-extrabold">
              <span className="w-5 h-5 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs mt-1">
                ✓
              </span>
              Professional training and curriculum development
            </li>
          </ul>

          {/* Membership */}
          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            He is a proud member of the Institute of Chartered Accountants in
            England and Wales (ICAEW), the Lahore High Court Bar Association, and
            the Dipalpur Bar Council. Mr. Rai Basharat Ali is widely recognized
            for his ability to seamlessly bridge the gap between academic theory
            and practical legal application, establishing himself as a trusted
            mentor, educator, and advisor in the field of corporate law and
            taxation.
          </p>
        </div>

        {/* RIGHT: Expertise Card */}
        <div className="bg-[#3D4098] rounded-2xl h-230 py-8 px-12 mt-6 text-white shadow-xl">
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

          {/* Skills List */}
          <ul className="space-y-6 pb-6">
            <li className="flex items-center gap-4 pb-4 border-b border-white/60">
              <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                <img src="/mo.png" alt="Corporate Law Icon" className="w-5 h-5" />
              </span>

              <span className="font-sans font-bold text-[15.39px] leading-[136%] tracking-[0.02em] text-white">
                Corporate Law & Business Incorporation
              </span>
            </li>

            <li className="flex items-center gap-4 pb-4 border-b border-white/60">
              <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                <img src="/0.png" alt="Income & Sales Tax Icon" className="w-5 h-5" />
              </span>

              <span className="font-sans font-bold text-[15.39px] leading-[136%] tracking-[0.02em] text-white">
                Income Tax & Sales Tax Advisory
              </span>
            </li>

            <li className="flex items-center gap-4 pb-4 border-b border-white/60">
              <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                <img src="/bb.png" alt="Company Compliance & SECP Filings" className="w-5 h-5" />
              </span>

              <span className="font-sans font-bold text-[15.39px] leading-[136%] tracking-[0.02em] text-white">
                Company Compliance & SECP Filings
              </span>
            </li>

            <li className="flex items-center gap-4 pb-4 border-b border-white/60">
              <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                <img src="/ifrs.png" alt="IFRS & Financial Regulation" className="w-5 h-5" />
              </span>

              <span className="font-sans font-bold text-[15.39px] leading-[136%] tracking-[0.02em] text-white">
                IFRS & Financial Regulation
              </span>
            </li>

            <li className="flex items-center gap-4 pb-4 border-b border-white/60">
              <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                <img src="/leg.png" alt="Legal Drafting" className="w-5 h-5" />
              </span>

              <span className="font-sans font-bold text-[15.39px] leading-[136%] tracking-[0.02em] text-white">
                Legal Drafting (MoUs, Agreements, NDAs)
              </span>
            </li>

            <li className="flex items-center gap-4 pb-4 border-b border-white/60">
              <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                <img src="/llb.png" alt="Business & Tax Law Teaching" className="w-5 h-5" />
              </span>

              <span className="font-sans font-bold text-[15.39px] leading-[136%] tracking-[0.02em] text-white">
                Business & Tax Law Teaching (ICAEW, LLB Curriculum)
              </span>
            </li>

            <li className="flex items-center gap-4 pb-4 border-b border-white/60">
              <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                <img src="/qq.png" alt="Case Law Research" className="w-5 h-5" />
              </span>

              <span className="font-sans font-bold text-[15.39px] leading-[136%] tracking-[0.02em] text-white">
                Case Law Research & Litigation Support​
              </span>
            </li>

            <li className="flex items-center gap-4 pb-4 border-b border-white/60">
              <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                <img src="/ww.png" alt="Academic Writing" className="w-5 h-5" />
              </span>

              <span className="font-sans font-bold text-[15.39px] leading-[136%] tracking-[0.02em] text-white">
                Academic Writing & Legal Curriculum Design​
              </span>
            </li>

            <li className="flex items-center gap-4 pb-4 border-b border-white/60">
              <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                <img src="/dis.png" alt="Tax Dispute Resolution" className="w-5 h-5" />
              </span>

              <span className="font-sans font-bold text-[15.39px] leading-[136%] tracking-[0.02em] text-white">
                Tax Dispute Resolution & Representation​
              </span>
            </li>

            <li className="flex items-center gap-4 pb-4 border-b border-white/60">
              <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                <img src="/rr.png" alt="Member" className="w-5 h-5" />
              </span>

              <span className="font-sans font-bold text-[15.39px] leading-[136%] tracking-[0.02em] text-white">
                Member: ICAEW, Lahore High Court Bar,
                <br />
                Dipalpur Bar Council
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
