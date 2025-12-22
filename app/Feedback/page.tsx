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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Your <span className="text-green-600">Class Information</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Complete the form to receive course, fee, and batch information.
            </p>
            <div className="w-20 h-1 bg-green-600 mb-10"></div>

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
                className="w-full py-4 bg-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-800 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* RIGHT IMAGES - Placeholder (you can replace with actual images later) */}
          <div className="relative w-full h-[420px]">
            {/* TOP IMAGE */}
            <div className="absolute top-0 left-0 w-[70%] h-[260px] bg-gray-200 rounded-2xl shadow-md"></div>

            {/* BOTTOM IMAGE */}
            <div className="absolute bottom-0 right-0 w-[75%] h-[280px] bg-gray-300 rounded-2xl shadow-md"></div>
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
              <svg width="220" height="220" viewBox="0 0 220 220" className="absolute inset-0">
                <path
                  d="M110 10 L200 190 L20 190 Z"
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
              <div className="w-48 h-64 bg-gray-200 rounded-lg"></div>
            </div>
            {/* Name Badge */}
            <div className="bg-gradient-to-r from-green-500 to-blue-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 font-semibold">
              Dilip Kumar
              <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                <span className="text-lg">▶</span>
              </div>
            </div>
          </div>

          {/* Student 2 - Waqas Muhammad */}
          <div className="relative flex flex-col items-center">
            <div className="relative mb-6">
              <svg width="220" height="220" viewBox="0 0 220 220" className="absolute inset-0">
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
              <div className="w-48 h-64 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-blue-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 font-semibold">
              Waqas Muhammad
              <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                <span className="text-lg">▶</span>
              </div>
            </div>
          </div>

          {/* Student 3 - Asma Hashmi */}
          <div className="relative flex flex-col items-center">
            <div className="relative mb-6">
              <svg width="220" height="220" viewBox="0 0 220 220" className="absolute inset-0">
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
              <div className="w-48 h-64 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-blue-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 font-semibold">
              Asma Hashmi
              <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                <span className="text-lg">▶</span>
              </div>
            </div>
          </div>

          {/* Student 4 - Maryam Khan */}
          <div className="relative flex flex-col items-center">
            <div className="relative mb-6">
              <svg width="220" height="220" viewBox="0 0 220 220" className="absolute inset-0">
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
              <div className="w-48 h-64 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-blue-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 font-semibold">
              Maryam Khan
              <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                <span className="text-lg">▶</span>
              </div>
            </div>
          </div>

          {/* Student 5 - M. Osama Arshad Ali */}
          <div className="relative flex flex-col items-center">
            <div className="relative mb-6">
              <svg width="220" height="220" viewBox="0 0 220 220" className="absolute inset-0">
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
              <div className="w-48 h-64 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-blue-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 font-semibold">
              M. Osama Arshad Ali
              <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                <span className="text-lg">▶</span>
              </div>
            </div>
          </div>

          {/* Student 6 - Alina Wakeel */}
          <div className="relative flex flex-col items-center">
            <div className="relative mb-6">
              <svg width="220" height="220" viewBox="0 0 220 220" className="absolute inset-0">
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
              <div className="w-48 h-64 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-blue-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 font-semibold">
              Alina Wakeel
              <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                <span className="text-lg">▶</span>
              </div>
            </div>
          </div>

        </div>

        {/* Read More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:bg-blue-800 transition">
            Read More
          </button>
        </div>
      </section>

    </div>

    </div>
  );
}