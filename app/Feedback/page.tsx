import React from "react";

export default function ICTPage() {
  return (
    <div className="w-full min-h-screen bg-white text-black font-sans">
      {/* Previous sections remain unchanged... */}
      {/* ... (Hero, Principal Message, Features, Why Choose ICT, 4 Cards, Campuses, Regulatory + Reviews section, Form section) */}

      {/* NEW SECTION: Find Your Class Information Form */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Form Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 lg:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D4098] mb-4">
              Find Your Class <span className="text-green-600"> Information</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Complete the form to receive course, fee, and batch information.
            </p>
            <div className="w-90 h-1 ml-10 -mt-5 bg-green-600 mb-10"></div>

            <form className="space-y-8">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>

              {/* Course */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                  Course
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent appearance-none bg-white">
                  <option>Select</option>
                  <option>Corporate Taxation</option>
                  <option>Import & Export</option>
                  <option>Financial Accounting</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              {/* Mode */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4 uppercase tracking-wider">
                  Mode
                </label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="mode" className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700">On-Campus Classes</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="mode" className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700">Live Virtual Classes</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="mode" className="w-5 h-5 text-green-600" defaultChecked />
                    <span className="text-gray-700">On-Demand Classes</span>
                  </label>
                </div>
              </div>

              {/* Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                  Number
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-gray-500">
                    +92
                  </span>
                  <input
                    type="tel"
                    placeholder=""
                    className="w-full px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#3D4098] text-white font-semibold rounded-lg shadow-lg hover:bg-[#3D4098] transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* RIGHT IMAGES - Placeholder (you can replace with actual images later) */}
          <div className="relative w-full h-[420px]">
            {/* TOP IMAGE */}
            <div className="absolute top-0 left-0 w-[65%] h-[260px] shadow-md"><img src="40.png" alt="" /></div>

            {/* BOTTOM IMAGE */}
            <div className="absolute -bottom-14 -right-6 w-[65%] h-[280px] shadow-md"><img src="41.png" alt="" /></div>
          </div>
        </div>
      </section>

      <div className="w-full min-h-screen bg-white text-black font-sans">
      {/* All previous sections remain unchanged (Hero, Principal, Features, Why Choose, Features Cards, Campuses) */}
      {/* ... previous code ... */}

      {/* STUDENT SUCCESS STORIES SECTION - Exactly like the picture */}
      <section className="w-full max-w-6xl mx-auto px-6 py-20">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-green-600 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-green-500"></span>
            Student Success Stories
          </p>
          <h2 className="text-3xl font-bold text-blue-800 mt-2">
            Hear From Our Graduates
          </h2>
        </div>

        {/* Students Grid - 3 columns on medium+, 2 on small, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
          
          {/* Student 1 - Dilip Kumar */}
          <div className="relative flex flex-col items-center">
            <div className="relative mb-6">
              {/* Triangle Frame - Gradient from blue to teal */}
              <svg width="270" height="280" viewBox="0 0 220 220" className="absolute inset-0 -m-6 rotate-45 rounded-3xl">
                <path
                  d="M110 10 L200 190 L5 190 Z"
                  fill="none"
                  stroke="url(#triangleGradient)"
                  strokeWidth="12"
                  className="drop-shadow-lg"
                />
                <defs>
                  <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E40AF" /> {/* Dark Blue */}
                    <stop offset="100%" stopColor="#14B8A6" /> {/* Teal */}
                  </linearGradient>
                </defs>
              </svg>
              {/* Student Image Placeholder */}
              <div className="w-48 h-64 pt-2 rounded-lg z-10 relative"><img src="42.png" alt="" /></div>
            </div>
            {/* Name Badge */}
            <div className="bg-gradient-to-r from-[#15A959] to-[#3D4098] text-white px-6 py-3 -mt-10 z-10 rounded-full shadow-lg flex items-center gap-3 font-semibold">
              Dilip Kumar
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-lg">▶</span>
              </div>
            </div>
          </div>

          {/* Student 2 - Waqas Muhammad */}
          <div className="relative flex flex-col items-center">
            <div className="relative mb-6">
              <svg width="270" height="280" viewBox="0 0 220 220" className="absolute inset-0 -m-6 rotate-45 rounded-3xl">
                <path
                  d="M110 10 L200 190 L20 190 Z"
                  fill="none"
                  stroke="url(#triangleGradient)"
                  strokeWidth="12"
                  className="drop-shadow-lg"
                />
                <defs>
                  <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E40AF" />
                    <stop offset="100%" stopColor="#14B8A6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="w-48 h-64 pt-2 rounded-lg z-10 relative"><img src="42.png" alt="" /></div>
            </div>
            <div className="bg-gradient-to-r from-[#15A959] to-[#3D4098] text-white px-6 py-3 rounded-full -mt-10 z-10  shadow-lg flex items-center gap-3 font-semibold">
              Waqas Muhammad
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-lg">▶</span>
              </div>
            </div>
          </div>

          {/* Student 3 - Asma Hashmi */}
          <div className="relative flex flex-col items-center">
            <div className="relative mb-6">
             <svg width="270" height="280" viewBox="0 0 220 220" className="absolute inset-0 -m-6 rotate-45 rounded-3xl">
                <path
                  d="M110 10 L200 190 L20 190 Z"
                  fill="none"
                  stroke="url(#triangleGradient)"
                  strokeWidth="12"
                  className="drop-shadow-lg"
                />
                <defs>
                  <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E40AF" />
                    <stop offset="100%" stopColor="#14B8A6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="w-48 h-64 pt-2 rounded-lg z-10 relative"><img src="42.png" alt="" /></div>
            </div>
            <div className="bg-gradient-to-r from-[#15A959] to-[#3D4098] text-white px-6 py-3 rounded-full shadow-lg -mt-10 z-10  flex items-center gap-3 font-semibold">
              Asma Hashmi
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-lg">▶</span>
              </div>
            </div>
          </div>

          {/* Student 4 - Maryam Khan */}
          <div className="relative flex flex-col items-center">
            <div className="relative mb-6">
             <svg width="270" height="280" viewBox="0 0 220 220" className="absolute inset-0 -m-6 rotate-45 rounded-3xl">
                <path
                  d="M110 10 L200 190 L20 190 Z"
                  fill="none"
                  stroke="url(#triangleGradient)"
                  strokeWidth="12"
                  className="drop-shadow-lg"
                />
                <defs>
                  <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E40AF" />
                    <stop offset="100%" stopColor="#14B8A6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="w-48 h-64 pt-2 rounded-lg z-10 relative"><img src="42.png" alt="" /></div>
            </div>
            <div className="bg-gradient-to-r from-[#15A959] to-[#3D4098] text-white px-6 py-3 rounded-full shadow-lg -mt-10 z-10  flex items-center gap-3 font-semibold">
              Maryam Khan
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-lg">▶</span>
              </div>
            </div>
          </div>

          {/* Student 5 - M. Osama Arshad Ali */}
          <div className="relative flex flex-col items-center">
            <div className="relative mb-6">
            <svg width="270" height="280" viewBox="0 0 220 220" className="absolute inset-0 -m-6 rotate-45 rounded-3xl">
                <path
                  d="M110 10 L200 190 L20 190 Z"
                  fill="none"
                  stroke="url(#triangleGradient)"
                  strokeWidth="12"
                  className="drop-shadow-lg"
                />
                <defs>
                  <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E40AF" />
                    <stop offset="100%" stopColor="#14B8A6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="w-48 h-64 pt-2 rounded-lg z-10 relative"><img src="42.png" alt="" /></div>
            </div>
            <div className="bg-gradient-to-r from-[#15A959] to-[#3D4098] text-white px-6 py-3 rounded-full shadow-lg -mt-10 z-10  flex items-center gap-3 font-semibold">
              M. Osama Arshad Ali
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-lg">▶</span>
              </div>
            </div>
          </div>

          {/* Student 6 - Alina Wakeel */}
          <div className="relative flex flex-col items-center">
            <div className="relative mb-6">
             <svg width="270" height="280" viewBox="0 0 220 220" className="absolute inset-0 -m-6 rotate-45 rounded-3xl">
                <path
                  d="M110 10 L200 190 L20 190 Z"
                  fill="none"
                  stroke="url(#triangleGradient)"
                  strokeWidth="12"
                  className="drop-shadow-lg"
                />
                <defs>
                  <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E40AF" />
                    <stop offset="100%" stopColor="#14B8A6" />
                  </linearGradient>
                </defs>
              </svg>
             <div className="w-48 h-64 pt-2 rounded-lg z-10 relative"><img src="42.png" alt="" /></div>
            </div>
            <div className="bg-gradient-to-r from-[#15A959] to-[#3D4098] text-white px-6 py-3 rounded-full shadow-lg -mt-10 z-10  flex items-center gap-3 font-semibold">
              Alina Wakeel
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-lg">▶</span>
              </div>
            </div>
          </div>

        </div>

        {/* Read More Button */}
        <div className="text-center mt-12">
          <button className="px-10 py-3  bg-[#3D4098] text-white font-semibold rounded-md shadow-lg transition">
            Read More
          </button>
        </div>
      </section>

    </div>

    </div>
  );
}