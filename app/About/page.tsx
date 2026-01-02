import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { LuYoutube } from "react-icons/lu";
import { TiTick } from "react-icons/ti";
import { MdCallEnd } from "react-icons/md";
import { RiMapPinLine } from "react-icons/ri";


export default function ICTPage() {
  return (
    <div className="w-full min-h-screen bg-white text-black font-sans">
      
      {/* HERO SECTION */}
   
      <div className="flex justify-start px-28 py-10 gap-10">

        <div>
          <h1 className="rotate-270 text-lg -ml-1 font-extrabold text-[#15A959]">ICT</h1>
          <p className="w-1 h-28 font-bold bg-black ml-3 mt-3 mb-3"></p>

                <a className="mt-5 flex text-[#3D4098] ml-1 text-lg" href=""><FaFacebookF/></a> 
                <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href=""><FiTwitter /></a> 
                <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href=""><AiOutlineInstagram /></a> 
                <a className="mt-5 flex ml-1.5 text-[#3D4098] text-lg" href=""><LuYoutube /></a> 
          
          <p className="w-1 h-54 bg-black ml-3 mt-3 mb-3"></p>
          </div>
        <div>
          <h1 className=" text-5xl text-[#3D4098] mt-12 font-extrabold ">Building Professionals <br></br> for <span className="text-[#15A959]">Tomorrow</span> </h1> 
          <p className="text-3xl font-sans mt-9 ">We provide practical, career-focused training  <br></br>in taxation corporate affairs, finance, and <br></br> business—shaping confident professionals <br></br> ready for today's market. </p>
          <div className="mt-12 gap-4 flex">
            <a className="bg-[#3D4098] py-4 px-10 text-white font-bold text-xl rounded-lg" href="">Enroll Now</a>
          <a className="py-3 px-12 border-[#3D4098] border-3 text-[#3D4098] font-bold text-xl rounded-lg" href="">Membership</a>
          </div>
          </div> 
        <div><img className="h-96 w-72 mt-44" src="pic4.png" alt="" /></div>
        <div><img className="h-84 w-72 mt-20 -ml-8" src="pic5.png" alt="" /></div>

        <div className="absolute -bottom-7 right-50 bg-green-600 text-white rounded-xl px-6 py-6 shadow-lg">
              <p className="flex items-center text-xl gap-2 font-semibold">
               <span className="text-3xl"><TiTick /></span> Sharpen Your Skills
              </p>
              <p className="flex items-center gap-2 text-xl mt-2 font-semibold">
                <span className="text-3xl"><TiTick /></span> Learn From Experts
              </p>
            </div>

      </div>

      {/* PRINCIPAL MESSAGE */}
      {/* <section className="w-full max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white rounded-xl shadow-md p-6 border">
          <div className="w-full h-60 bg-gray-200 rounded-lg mb-4"> <img className="h-96" src="pic6.png " alt="" /></div>
          <h3 className="text-lg font-bold">Rai Basharat Ali</h3>
          <p className="text-sm text-gray-500">Principal – Institute of Corporate and Taxation</p>
        </div>
     
        <div>
          <h3 className="text-xl font-bold mb-4">Principal Message</h3>
          <p className="text-gray-600 leading-relaxed">
            Welcome to the Institute of Corporate and Taxation. We’re committed to
            strong academics, professional growth, and practical learning. Our
            goal is to develop skilled professionals who can lead, advise, and
            innovate across industries.
          </p>
        </div>
      </section> */}

      <section className="w-full px-[250px] py-16 flex justify-center gap-20 items-start">
  
  {/* LEFT CARD */}
  <div className="bg-gradient-to-b w-[600px] from-indigo-900 to-indigo-900 rounded-2xl p-6 text-white shadow-lg max-w-sm">
    
    <div className="rounded-xl overflow-hidden mb-5">
      <img
        src="/pic6.webp"
        alt="Rai Basharat Ali"
        className="w-full h-80 object-cover"
      />
    </div>

    <h3 className="text-2xl font-extrabold text-center">
      Rai Basharat Ali
    </h3>
    <p className="text-lg text-white text-center mt-1">
      Principal <br />
      Institute of Corporate and Taxation
    </p>
  </div>

  {/* RIGHT CONTENT */}
  <div className="w-[1500px]">
    <div className="flex items-center gap-3 mb-4 pt-10">
      <span className="w-10 h-[2px] bg-green-500"></span>
      <h3 className="text-lg font-semibold text-[#3D4098]">
        Principal Message
      </h3>
    </div>

    <div className="space-y-4 text-black leading-relaxed font-bold">
      <p>
        Welcome to the Institute of Corporate and Taxation. We’re committed to
        strong academics, professional growth, and practical learning.
      </p>

      <p>
        Corporate governance, finance, and taxation are crucial in today’s
        economy. Our goal is to develop skilled professionals who can lead,
        advise, and make informed decisions in these areas.
      </p>

      <p>
        Our programs combine theory with real-world application. With experienced
        faculty, industry connections, and a focused curriculum, we prepare
        students for successful careers.
      </p>

      <p>
        As a growing center of excellence in Pakistan, we take pride in offering
        a disciplined, innovative, and supportive learning environment.
      </p>

      <p>
        I invite you to join us and move toward a future that is rewarding,
        responsible, and globally competitive.
      </p>
    </div>
  </div>

</section>


      {/* FEATURES ROW */}
      <section className="w-full max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <h3 className="text-lg font-semibold text-[#3D4098] flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-green-500"></span>
            Mission Statement
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            <div className="h-44 bg-gray-200 rounded-2xl shadow">
              <img src="pic8.webp" alt="" />
            </div>

            <div className=" border rounded-2xl -mt-4 overflow-hidden">
              <img className="" src="pic11.png" alt="" />
              <h4 className="font-bold -mt-90 flex px-4 text-3xl mb-2 text-[#3D4098]">
                Professional Growth
              </h4>
              <p className="text-sm text-black font-bold  px-4 mb-44 leading-relaxed">
              ICT helps you build the knowledge, practical skills, and ethical mindset needed to succeed in taxation, corporate law, and financial governance. Our focus is on real-world learning that prepares you for a strong and confident career.
              </p>

              {/* decorative lines */}
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 bg-gradient-to-tr from-blue-500 to-transparent rounded-full">
                
              </div>
            </div>
          </div>

          {/* CENTER COLUMN (STACKED IMAGES) */}
          <div className="flex flex-col gap-6">
            <div className="h-72  rounded-2xl "><img className="h-100 w-96 rounded-2xl" src="pic10.png" alt="" /></div>
            <div className="h-48 bg-gray-200 mt-24 rounded-2xl shadow"> <img className="rounded-2xl" src="pic7.png" alt="" /></div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">
            <div className=" border rounded-2xl shadow">
               <img className="" src="pic12.png" alt="" />
              <h4 className="font-bold -mt-44 flex px-4 text-3xl mb-2 text-[#3D4098]">
                Quality Learning
              </h4>
              <p className="text-sm text-gray-600 px-4 pb-10 leading-relaxed">
                We focus on practical, industry-aligned education that connects classroom learning with real work. Our goal is to develop skilled professionals who support economic growth and strong compliance.
              </p>
            </div>

            <div className="h-44 bg-gray-300 rounded-2xl -mt-4 shadow"> <img src="pic9.webp" alt="" /></div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE ICT */}
       <img className="mt-90" src="pic15.webp" alt="" />
      <section className="w-full max-w-6xl mx-auto px-6 py-20 -mt-[1350px] ">
        
        {/* Heading */}
        <div className="mb-10">
          <p className="text-sm font-semibold text-[#3D4098] flex items-center gap-2">
            <span className="w-8 h-[2px] bg-green-500"></span>
            Why Choose ICT?
          </p>

          <h2 className="text-3xl font-bold text-[#3D4098] mt-2">
            No Compromise On Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6 text-gray-700">
            <div>
              <h4 className="font-bold text-black">Learn From Real Experts</h4>
              <p>
                Get hands-on insights from seasoned corporate tax professionals and
                master strategies beyond textbooks.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-black">Tackle Live Tax Challenges</h4>
              <p>
                Engage in real-time corporate tax scenarios and crisis simulations
                to sharpen your decision-making and strategic skills under pressure.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-black">AI-Powered Learning, Anytime</h4>
              <p>
                Access AI-driven quizzes, 24/7 mentor support, and bite-sized tax
                training videos to learn at your own pace and master corporate
                taxation efficiently.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-black">Connect With Elite Tax Pros</h4>
              <p>
                Join a global network of 10,000+ corporate tax professionals spanning
                5 countries, expanding your connections, opportunities, and influence
                in the industry.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative flex flex-col gap-6">
            
            <img
              src="/pic13.png"
              className="rounded-2xl shadow-md object-cover h-44 w-full"
            />

            <img
              src="/pic14.png"
              className="rounded-2xl shadow-md object-cover h-52 w-full"
            />

            <div className="relative">
              <img
                src="/pic4.png"
                className="rounded-2xl shadow-md object-cover -mt-[161px] -ml-12 h-54  w-60"
              />

              {/* 10+ YEARS BADGE */}
              <div className="absolute bottom-2 left-42  bg-[#3D4098]  text-white px-12 py-1 rounded-xl shadow-lg text-center">
                <p className="text-[50px] font-semibold -mt-2">10+</p>
                <p className="text-3xl font-semibold -mt-3 mb-2">Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES CARDS (4 cards section) */}
       
      <section className="w-full max-w-6xl mx-auto px-6 py-16 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg overflow-hidden">
            <div className="py-3 mt-3 px-3 "><img src="pic16.png" alt="" /></div>
            <div><img className="-mt-76 mb-64" src="pic20.png" alt="" /></div>
            <div className="px-4 -mt-2 mb-4 py-1 text-start">
              <p className="text-lg text-black">Expert Faculty with <br></br> Real-World Experience</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg overflow-hidden">
             <img className="py-3 mt-3 px-3" src="pic17.png" alt="" />
              <div><img className="-mt-76 mb-64" src="pic21.png" alt="" /></div>
            <div className="px-4 -mt-2 mb-4 py-1 text-start">
              <p className="text-lg text-black">100% Practical Training Approach</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg overflow-hidden">
            <img className="py-3 mt-3 px-3" src="pic18.png" alt="" />
             <div><img className="-mt-76 mb-64" src="pic22.png" alt="" /></div>
            <div className="px-4 -mt-2 mb-4 py-1 text-start">
              <p className="text-lg text-black">Nationally Recognized Excellence</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white  shadow-lg overflow-hidden">
            <img className="py-3 mt-3 px-3" src="pic19.png" alt="" />
             <div><img className="-mt-76 mb-64" src="pic23.png" alt="" /></div>
            <div className="px-4 -mt-2 mb-4 py-1 text-start">
              <p className="text-lg text-black">Focused Career Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPUSES - With new section added exactly below as per image */}
      <section className="w-full mt-20  mx-auto px-[160px] py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left Text */}
          <div className="md:pt-12">
            <h3 className="text-lg font-semibold text-[#3D4098] flex items-center gap-3 mb-6">
              <span className="w-12 h-[3px] bg-green-500"></span>
              Our Campuses
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-sm">
              We operate in key cities, offering modern classrooms and a supportive learning environment so students can study comfortably and grow with confidence.
            </p>
          </div>

          {/* Islamabad & Lahore Cards - Side by side */}
          <div className="flex flex-col gap-8">
            {/* Islamabad Campus */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <img src="/isb.png" alt="Islamabad Campus" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-4">Islamabad Campus</h4>
                <div className="space-y-3">
                  <p className="flex items-center gap-3 text-gray-600">
                    <span className="text-2xl text-[#3D4098]"><MdCallEnd /></span>
                    03377774852
                  </p>
                  <p className="flex items-start gap-3 text-gray-600">
                    <span className="text-[#3D4098] text-2xl"><RiMapPinLine /></span>
                    Plot No. 63, Service Road, I-10/3 North, Islamabad 44000
                  </p>
                </div>
              </div>
            </div>
            

            
          {/* Karachi Campus - Lower position */}

            <div className="bg-white shadow-lg overflow-hidden w-[790px] h-[250px] rounded-2xl flex justify-start gap-4">
          <div >
          <img className="w-[340px] h-[250px]" src="kar.png" alt="" />
          </div>
          <div className="mt-6">
            <h1 className="text-2xl font-bold ">Karachi Campus</h1>
            <p className="flex justify-start gap-2 mt-8"> <span className="text-[#3D4098] text-2xl"><MdCallEnd /></span>03710194615</p>
            <p className="flex justify-start gap-2 mt-3"> <span className="text-[#3D4098] text-2xl"><RiMapPinLine /></span>Office 504, 5th Floor, Caesars Tower, Shahrah-E-Faisal, Karachi</p>
          </div>
             </div>
          </div>

          {/* Lahore Campus - Top right */}
          <div className="flex flex-col gap-8 md:pt-20 -mt-20">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <img src="/lah.png" alt="Lahore Campus" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-4">Lahore Campus</h4>
                <div className="space-y-3">
                  <p className="flex items-center gap-3 text-gray-600">
                    <span className="text-2xl text-[#3D4098]"><MdCallEnd /></span>
                    03308880211
                  </p>
                  <p className="flex items-start gap-3 text-gray-600">
                   <span className="text-[#3D4098] text-2xl"><RiMapPinLine /></span>
                    F/3 Sea Breeze Homes, Shershah Block, New Garden Town, Lahore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

 </section>
 <section>

  {/* Who Will You Learn About Section */}
<div className="relative overflow-hidden py-24 bg-gradient-to-r from-[#EAF3FF] via-[#E6FBF5] to-white">
  
  {/* Wave Lines Background */}
  {/* <div className="absolute bottom-0 left-0 w-full">
    <img src="/12.png" alt="Wave Lines" className="w-full h-40 object-cover" />
  </div> */}

  <div className="relative z-10 max-w-7xl mx-auto px-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    {/* Left Logos */}
    <div className="flex gap-10 items-center">
      {[
        "/FBR5.png",
        "/FBR2.png",
        "/FBR3.png",
        "/FBR4.png",
      ].map((logo, index) => (
        <div
          key={index}
          className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center"
        >
          <img src={logo} alt="Authority Logo" className="w-14 h-14 object-contain" />
        </div>
      ))}
    </div>

    {/* Right Content */}
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className="w-10 h-[2px] bg-[#15A959]"></span>
        <p className="text-[#3D4098] font-bold uppercase">At ICT</p>
      </div>

      <h2 className="text-4xl font-extrabold text-black mb-6">
        Who will you learn about?
      </h2>

      <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
        You will explore and understand the different regulatory authorities
        that play a key role in governing and monitoring today’s business
        environment
      </p>
    </div>
  </div>
</div>

{/* TRUSTED BY CUSTOMERS WORLDWIDE – IMAGE MATCHED */}
<section className="w-full py-24 bg-gradient-to-br from-white via-cyan-50 mb-20 to-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span className="w-12 h-[3px] bg-green-600"></span>
        <span className="text-blue-700 font-semibold">
          Trusted by Customers Worldwide
        </span>
      </div>

      <h2 className="text-4xl lg:text-5xl font-bold mb-6">
        Who will you learn about?
      </h2>

      <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
        Our clients share their experiences and feedback to help you understand
        the quality and reliability of our services. Read authentic reviews and
        join the growing community of satisfied customers.
      </p>

      {/* Dots */}
      <div className="flex gap-3 mt-10">
        <span className="w-3 h-3 rounded-full bg-gray-300"></span>
        <span className="w-3 h-3 rounded-full bg-gray-300"></span>
        <span className="w-3 h-3 rounded-full bg-blue-800"></span>
      </div>
    </div>

    {/* RIGHT REVIEWS */}
    <div className="relative">

      {/* Purple Shape */}
      <div className="absolute inset-0 bg-indigo-500 rounded-[60px] -z-10"></div>

      {/* Review Card 1 */}
      <div className="relative bg-white rounded-3xl shadow-lg p-6 mb-6 ml-10">
        <div className="flex items-start gap-4">
          <img
            src="/pic24.png"
            className="w-12 h-12 rounded-full object-cover"
          />
          <p className="text-gray-700 italic">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
        </div>
      </div>

      {/* Review Card 2 */}
      <div className="relative bg-white rounded-3xl shadow-lg p-6 ml-20">
        <div className="flex items-start gap-4">
          <img
            src="/pic24.png"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="text-gray-700 italic mb-4">
              “On the Windows talking painted pasture yet its express parties use.
              Sure last upon he same as knew next. Of believed or diverted no.”
            </p>
            <p className="font-semibold text-gray-900">Mayank das</p>
            <p className="text-sm text-gray-500">Delhi, India</p>
          </div>
        </div>
      </div>

      {/* Decorative Star */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-green-500 text-5xl">
        ✦
      </div>
    </div>

  </div>
</section>

      </section>

     
    </div>
  );
}