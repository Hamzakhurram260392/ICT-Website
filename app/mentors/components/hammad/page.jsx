import React from "react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative container mx-auto px-20 py-12 md:py-16 lg:py-25 grid grid-cols-1 lg:grid-cols-2 gap-1 items-center">

        {/* Left Content */}
        <div className="relative">
          <div className="mb-10 mt-[-25px] h-20">
            <span className="inline-block px-7 py-2 text-[20px] font-bold border-2 rounded-lg text-[#3D4098] border-[#3D4098] bg-white">
              Mr. Hammad Aadi
            </span>
          </div>

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
          Expertise in International Trade
              <br />
              <span className="font-semibold text-green-600">
                & Strategic Leadership
              </span>
            </h1>
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
              src="/222.jpeg"
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
              About Hammad Aadi
            </h2>
          </div>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            With over two decades of hands-on experience in international trade,
            Mr. Hammad Aadi brings unmatched expertise in <span className="text-[#15A959]  font-extrabold">import</span> and<span className="text-[#15A959]  font-extrabold"> export
            operations.</span> Having served in multiple director-level positions,
            he has successfully managed global trade processes for a wide
            range of products.
          </p>

          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            Coming from a family deeply rooted in the trade business, he
            combines traditional insights with modern strategies to deliver
            sustainable and profitable results. His strong leadership and
            in-depth market knowledge make him a trusted professional in the
            industry.
          </p>

          <ul className="space-y-3 font-semibold text-gray-800 mt-8">
  <li className="flex items-start gap-3">
    <span className="w-6 h-6 min-w-6 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs shrink-0 mt-1">
      ✓
    </span>
    20+ Years of Experience in import and export operations
  </li>

  <li className="flex items-start gap-3">
    <span className="w-6 h-6 min-w-6 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs shrink-0 mt-1">
      ✓
    </span>
    Proven leadership with multiple director-level roles across diverse companies
  </li>

  <li className="flex items-start gap-3">
    <span className="w-6 h-6 min-w-6 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs shrink-0 mt-1">
      ✓
    </span>
    Comprehensive knowledge of global trade regulations, logistics, and compliance
  </li>

  <li className="flex items-start gap-3">
    <span className="w-6 h-6 min-w-6 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs shrink-0 mt-1">
      ✓
    </span>
    Family legacy in trade, providing a deep-rooted understanding of the industry
  </li>

  <li className="flex items-start gap-3">
    <span className="w-6 h-6 min-w-6 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs shrink-0 mt-1">
      ✓
    </span>
    Specialization in product diversification for international markets
  </li>
</ul>


          <p className="font-sans font-medium text-black text-[16px] md:text-[17.39px] leading-[136%] tracking-[0.02em] mt-6">
            Beyond his professional accomplishments, Mr. Hammad Aadi is
            recognized for his strategic vision and problem-solving approach
            in the dynamic world of international trade. His ability to
            identify new market opportunities, optimize operational processes,
            and build strong partnerships drives long-term growth and success.
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
              ["/cross.png", "International Trade & Global Market Strategies"],
              ["/coro.png", "Import & Export Operations Management"],
              ["/off.png", "Supply Chain & Logistics Optimization"],
              ["/rego.png", "Compliance & Regulatory Frameworks"],
              ["/cha.png", "Strategic Business Development"],
              ["/team.png", "Leadership & Team Management"],
              ["/rel.png", "Negotiation & Vendor Relations"],
              ["/char.png", "Market Analysis & Risk Assessment"],
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
