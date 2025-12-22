import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { LuYoutube } from "react-icons/lu";


export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
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
          <h1 className=" text-4xl text-[#3D4098] mt-12 font-extrabold ">Develop Global Business <br></br> Skills With <span className="text-[#15A959]">ICT.</span> </h1> 
          <p className="text-3xl font-sans mt-9 ">Master practical skills in Taxation, <br></br> Accounting, Finance, Corporate Affairs <br></br> and more through <span className="text-[#15A959] ">ICT's online in- <br></br> person classes.</span></p>
          <div className="mt-12 gap-4 flex">
            <a className="bg-[#3D4098] py-4 px-10 text-white font-bold text-xl rounded-lg" href="">Enroll Now</a>
          <a className="py-3 px-12 border-[#3D4098] border-3 text-[#3D4098] font-bold text-xl rounded-lg" href="">Explore</a>
          </div>
          </div> 
        <div>helloo</div>

      </div>

      {/* Second Section */}
      <div className="flex justify-center gap-16 px-32">
         {/* one */}
         <div className="flex justify-start w-[1100px] gap-1">
          <img className="w-56 h-[400px]" src="/Rectangle 8.png" alt="" />
          <img className="w-36 h-[450px] pt-12" src="/Rectangle 9.png" alt="" />
          <img className="w-56 h-[450px] pt-16" src="/Rectangle 7.png" alt="" />
         </div>

         {/* Second */}
         <div className="w-[1100px]">
          <p className="bg-[#15A959] w-1 h-28 rotate-90 font-bold"></p> <p className="text-[#3D4098] font-bold pb-3"> Welcome to ICT</p>
          <h1 className="text-3xl font-extrabold pb-3">About us</h1>
          <p className="mb-6 w-[500px] font-semibold">ICT turns complex tax rules into practical skills and real results. As Pakistan’s leading taxation institute, we offer expert-led training and corporate solutions that help professionals and businesses stay compliant, confident, and ahead.</p>
          <a className="bg-[#3D4098] py-2 px-9 text-white font-bold text-lg rounded-lg" href="">Explore</a>
         </div>
      </div>

      {/* third section */}
      <div className="flex justify-center gap-14 mt-10">
         {/* one */}
        <div>
          <h1 className="text-[80px] flex justify-center text-[#3D4098]">09+</h1>
          <p className="text-[#15A959] flex justify-center text-lg ">Years of Excellence in Tax & Consultancy</p>
        </div>
        {/* two */}
        <div>
          <h1 className="text-[80px] flex justify-center text-[#3D4098]">07+</h1>
          <p className="text-[#15A959] text-lg ">Innovative Tax Online Courses</p>
        </div>
        {/* three */}
        <div>
          <h1 className="text-[80px] flex justify-center text-[#3D4098]">06+</h1>
          <p className="text-[#15A959] text-lg ">Qualified Teachers and language experts</p>
        </div>
        {/* four */}
        <div>
          <h1 className="text-[80px] flex justify-center text-[#3D4098]">8k+</h1>
          <p className="text-[#15A959] text-lg "> Learners Enrolled in Tax Courses</p>
        </div>
      </div>


      <div className="flex justify-center flex-col items-center mt-16 -mb-10">
        <p className="text-[#3D4098] font-bold text-md">Course we offer's</p>
        <h1 className="text-black text-3xl font-extrabold">Build Your Skills</h1>
        <p>From taxation to corporate affairs, our courses help you grow with clear, practical learning</p>
      </div>
      {/* Courses Grid Section */}
<div className="px-28 py-14">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

    {[
      { title: 'UK TAXATION', img: '/uk.png' },
      { title: 'USA TAXATION', img: '/usa.png' },
      { title: 'UAE TAXATION', img: '/uae.png' },
      { title: 'SAUDI TAXATION', img: '/saudi.png' },
      { title: 'CERTIFIED TAX ADVISOR', img: '/fbr.png' },
      { title: 'ADVANCE TAXATION AND LITIGATION', img: '/advance-tax.png' },
      { title: 'MASTER SALES TAX', img: '/sales-tax.png' },
      { title: 'CANADIAN TAXATION', img: '/canada.png' },
    ].map((course, index) => (
      <div
        key={index}
        className="relative h-[330px] w-64 rounded-xl overflow-hidden group"
      >
        <img
          src={course.img}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-[#3D4098]/70 flex justify-center items-end p-4">
          <h3 className="text-white font-bold text-lg">
            {course.title}
          </h3>
        </div>
      </div>
    ))}

  </div>

  {/* Button */}
  <div className="flex justify-center mt-12">
    <a
      href="/courses"
      className="bg-[#3D4098] hover:bg-[#15A959] text-white px-10 py-3 rounded-lg font-bold transition"
    >
      Explore Courses
    </a>
  </div>
</div>


  {/* Inside Our Campus Section */}
  <div className="bg-[#F9FAFB] py-20 mt-16">
    <div className="max-w-7xl mx-auto px-6 text-center">

      <p className="text-sm text-[#15A959] font-semibold mb-2">
        — About Campus
      </p>

      <h2 className="text-4xl font-extrabold text-black mb-4">
        Inside Our Campus
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto mb-14">
        A reliable name in tax education, with well-equipped campuses in
        Islamabad, Karachi, and Lahore to support your learning journey
      </p>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        {/* Left Image */}
        <div className="relative overflow-hidden rounded-2xl rotate-[-3deg] shadow-lg">
          <img
            src="/campus-1.jpg"
            alt="Campus Session"
            className="w-full h-[360px] object-cover"
          />
        </div>

        {/* Center Image */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl scale-105">
          <img
            src="/campus-2.jpg"
            alt="ICT Campus Group"
            className="w-full h-[420px] object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="relative overflow-hidden rounded-2xl rotate-[3deg] shadow-lg">
          <img
            src="/campus-3.jpg"
            alt="Campus Faculty"
            className="w-full h-[360px] object-cover"
          />
        </div>

      </div>
    </div>
  </div>

{/* Who Will You Learn About Section */}
<div className="relative overflow-hidden py-24 bg-gradient-to-r from-[#EAF3FF] via-[#E6FBF5] to-white">

  {/* Wave Lines Background */}
  <div className="absolute bottom-0 left-0 w-full">
    {/* <img src="/12.png" alt="Wave Lines" className="w-full h-40 object-cover" /> */}
  </div>

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


{/* Testimonials Section */}
<div className="relative py-28 overflow-hidden bg-gradient-to-br from-[#F1F5FF] via-[#ECFBF6] to-white">

  {/* Decorative Circle */}
  <div className="absolute right-[-200px] top-10 w-[500px] h-[500px] bg-[#3D4098] rounded-full opacity-90"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-28 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

    {/* Left Content */}
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className="w-10 h-[2px] bg-[#15A959]"></span>
        <p className="text-[#3D4098] font-semibold">
          Trusted by Learners
        </p>
      </div>

      <h2 className="text-4xl font-extrabold mb-6">
        What Our Students Say
      </h2>

      <p className="text-gray-700 text-lg max-w-xl leading-relaxed">
        Hear directly from our learners about their journey, experience,
        and success with ICT’s professional training programs.
      </p>

      {/* Dots */}
      <div className="flex gap-3 mt-10">
        <span className="w-3 h-3 rounded-full bg-[#3D4098]"></span>
        <span className="w-3 h-3 rounded-full bg-gray-300"></span>
        <span className="w-3 h-3 rounded-full bg-gray-300"></span>
      </div>
    </div>

    {/* Right Card */}
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-lg">

        {/* Avatar */}
        <div className="absolute -top-8 left-8">
          <img
            src="/user1.jpg"
            alt="Student"
            className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
          />
        </div>

        {/* Feedback */}
        <p className="text-gray-700 text-lg leading-relaxed mb-8 mt-6">
          “ICT provided me with practical taxation knowledge that helped me
          grow professionally. The mentors are highly experienced and supportive.”
        </p>

        <h4 className="font-bold text-[#3D4098]">
          Ali Raza
        </h4>
        <p className="text-gray-500 text-sm">
          Tax Consultant — Islamabad
        </p>
      </div>
    </div>

  </div>
</div>


{/* why choose ICT? */}
<div className="flex justify-around text-5xl font-bold mt-10">
     <div>
       <h1>Why Choose <br></br> <span className="text-[#3D4098]"> ICT?</span> </h1>
     </div>
     <div className="text-[#3D4098]">
       <h1>No Compromise <br></br> on Excellence</h1>
     </div> 
</div>
<div className="flex justify-center mt-38">
  <img className="w-[1120px]" src="line 2.png" alt="" />
</div>
<div className="flex justify-center w-[1520px] gap-8">

    <div className="">
     {/* 1st */}
       <div>
         <h1 className="text-xl font-bold mt-14">Industry Titans as Trainers</h1>
         <h2 className="mt-3 font-bold">Learn from real experts</h2>
         <p className="mt-2">Get hands-on insights from seasoned corporate <br></br> tax professionals and  master strategies beyond <br></br> textbooks.</p>
       </div>

     {/* 2nd */}
       <div className="mt-24">
        <h1 className="text-xl font-bold">War Room Simulations</h1>
        <h2 className="mt-3 font-bold">Tackle live tax challenges</h2>
        <p className="mt-2">Engage in real-time corporate tax scenarios and <br></br>  crisis simulations to sharpen your  decision  <br></br>-making and strategic skills under pressure.</p>
       </div>
    </div>

                {/* 3rd */}
               <div className="flex justify-center">
                  <img  className="w-[400px] h-[500px] " src="rba.png" alt="" />
               </div>
     <div>
             {/* 4th */}
               <div >
                 <h1 className="text-xl font-bold mt-14">Next‑Gen LMS</h1>
                 <h2 className="mt-3 font-bold">AI-powered learning, anytime</h2>
                 <p className="mt-2">Access AI-driven quizzes, 24/7 mentor support, <br></br> and bite-sized tax training videos to learn at <br></br>  your own pace and master corporate <br></br> taxation efficiently</p> 
             </div>

              {/* 5th */}
             <div className="mt-18">
             <h1 className="text-xl font-bold">Alumni Firepower</h1>
             <h2 className="mt-3 font-bold">Connect with elite tax pros</h2>
             <p className="mt-2">Join a global network of 10,000+ corporate <br></br> tax professionals spanning 5 countries, <br></br> expanding your connections, opportunities, <br></br> and influence in the industry.</p>
            </div>
     </div>
</div>

    <div className="flex justify-center gap-16 mt-7">
              <div className="w-[450px]">
                  <img src="line.png" alt="" />
              </div>
              <div className="flex justify-center">
                  <img className="w-28 h-28" src="Buttob.png" alt="" />
             </div>
             <div className="w-[450px]">
                  <img src="line 1.png" alt="" />
             </div>

    </div>
{/* after logo */}
    <div>
      <p className="flex justify-center font-bold text-[#3D4098] mt-10">Crack the Code of Tax Like a Pro</p>
      <h1 className="flex justify-center text-2xl font-bold mb-5">More Than Tax Education — It’s a Career Transformation.</h1>
    </div>
    <div className="flex justify-center gap-8">
         <div>
          <img className="w-[570px]" src="pic1.png" alt="" />
         </div>
         <div>
          <img className="h-[458px] mt-2" src="pic2.png" alt="" />
         </div>
         <div className="mt-2">
           <p className="bg-[#3D4098] rounded-full w-8 flex justify-center text-white text-2xl">1</p>
           <h1 className="text-xl font-bold">Corporate Tax Proficiency</h1>
           <p className="mt-2">From seamless tax filings to strategic boardroom <br></br> planning, this program equips you with the skills <br></br> and confidence to handle corporate taxation with <br></br> expertise.</p>

           <p className="bg-[#3D4098] rounded-full w-8 flex justify-center text-white text-2xl mt-5">2</p>
           <h1 className="text-xl font-bold">The International Tax Playbook</h1>
           <p className="mt-2">Master global tax treaties, navigate cross-border <br></br> opportunities, and achieve compliance success.</p>

           <p className="bg-[#3D4098] rounded-full w-8 flex justify-center text-white text-2xl mt-5">3</p>
           <h1 className="text-xl font-bold">Tax Labs Powered by AI</h1>
           <p className="mt-2">Simulate real-world corporate tax scenarios, navigate <br></br>complex challenges, and enhance your strategic decision- <br></br>making skills</p>
         </div>
    </div>

    <div>
      <p className="text-[#3D4098] mt-9 font-bold flex justify-center">Insights</p>
      <h1 className="text-4xl font-bold flex justify-center">Stay Ahead in Tax & Finance</h1>
      <img className="mt-3" src="pic3.png" alt="" />
    </div>

  


    </div>
  );
}
