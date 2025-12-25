export default function UkTaxationPage() {
  return (
    <main className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-indigo-50 to-cyan-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-800 leading-snug">
              Your Guide to Understanding <br />
              <span className="text-green-600">UK Taxes</span>
            </h1>

            <p className="mt-4 text-gray-600">
              A clear and simple guide to understanding UK income tax,
              business tax, and VAT.
            </p>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✔ Income Tax & VAT</li>
              <li>✔ Compliance & Case Studies</li>
              <li>✔ Career Focused Learning</li>
            </ul>

            <div className="flex gap-4 mt-6">
              <button className="bg-indigo-700 text-white px-6 py-2 rounded-lg">
                Enroll Now
              </button>
              <button className="border border-indigo-700 text-indigo-700 px-6 py-2 rounded-lg">
                Explore
              </button>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            <img src="/tax1.jpg" className="rounded-xl shadow" />
            <img src="/tax2.jpg" className="rounded-xl shadow" />
            <img src="/tax3.jpg" className="rounded-xl shadow" />
            <img src="/tax4.jpg" className="rounded-xl shadow" />
          </div>

        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">UK Taxation Benefits</h2>
            <button className="bg-indigo-700 text-white px-5 py-2 rounded">
              Enroll Now
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4 text-gray-600">
              <p>
                Understanding UK taxation opens doors to high-paying,
                globally recognized career opportunities.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div><b>1.</b> Constant Demand</div>
                <div><b>2.</b> Global Career Paths</div>
                <div><b>3.</b> Consistent Earnings</div>
                <div><b>4.</b> Career Progression</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img src="/benefit1.jpg" className="rounded-xl" />
              <img src="/benefit2.jpg" className="rounded-xl" />
              <img src="/benefit3.jpg" className="rounded-xl" />
              <img src="/benefit4.jpg" className="rounded-xl" />
            </div>
          </div>

        </div>
      </section>

      {/* ================= COURSE OUTLINE ================= */}
      <section className="bg-indigo-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Course Outline</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              "Basics of Taxation",
              "Tax Compliances",
              "Companies House & IPE Essentials",
              "Tax Notices",
              "Making Tax Digital (MTD)",
              "Self-Assessment & Tax Returns",
              "National Insurance & Payroll",
              "Gateway Account",
            ].map((item, i) => (
              <div key={i} className="bg-indigo-800 p-4 rounded-lg">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INSTRUCTOR ================= */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

          <img
            src="/instructor.png"
            className="rounded-xl shadow max-w-sm mx-auto"
          />

          <div>
            <span className="text-green-600 font-semibold">
              About Instructor
            </span>
            <h2 className="text-2xl font-bold mt-2">
              Mr. Muhammad Waqas
            </h2>
            <p className="text-gray-600 mt-4">
              Experienced UK taxation professional with hands-on
              industry expertise.
            </p>

            <button className="mt-6 bg-indigo-700 text-white px-6 py-2 rounded">
              Explore more
            </button>
          </div>

        </div>
      </section>

      {/* ================= CERTIFICATION ================= */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

          <img src="/certificate.jpg" className="rounded-xl shadow" />

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Earn a Certification
            </h2>
            <p className="text-gray-600 mb-6">
              Upon completion of the UK Taxation course, you’ll receive
              an industry-recognized certificate.
            </p>

            <button className="bg-indigo-700 text-white px-6 py-2 rounded">
              Apply Now for this Course
            </button>
          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-50 to-cyan-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>

          {[
            "Who should enroll in the UK Taxation Course?",
            "Is prior experience required?",
            "Will I receive a certificate?",
            "Is this course suitable for beginners?",
          ].map((q, i) => (
            <div
              key={i}
              className="bg-white p-4 mb-3 rounded shadow flex justify-between"
            >
              <span>{q}</span>
              <span className="font-bold">+</span>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
