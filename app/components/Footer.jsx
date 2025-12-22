import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
  return (
    <>
        {/* Footer */}
    <div className="flex justify-center bg-gray-100">
        <div className="flex justify-center bg-[#3D4098] mt-32 pt-10 rounded-3xl w-[900px] h-72 gap-14 items-center ">
              <div>
               <img className="w-[280px] -mt-44" src="image 8.png" alt="" />
              </div>
              <div>
              <h1 className="text-white font-bold text-[28px] ">Subscribe to our newsletter <br></br>for the latest updates and insights.</h1>
              <div className="flex items-center mt-3 border-2 border-gray-500 rounded-full px-2 py-2 w-[420px]">
                      {/* Email Input */}
                     <input
                     type="email" placeholder="@ Enter your email" className="flex-1 bg-transparent text-white placeholder-white outline-none px-4"/>
                      {/* Subscribe Button */}
                     <button className="bg-white text-black font-medium px-6 py-2 rounded-full"> Subscribe </button>

              </div>
              <p className="text-white mt-2 pl-2">Stay ahead with the latest updates, insights, <br></br> and events from Macat Megatrons.</p>
              </div>
        </div>
    </div>

    {/* Second Footer */}

    <footer className="bg-white -mt-28  py-12 pt-44 rounded-[50px] rounded-b-[50px]">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

    {/* Logo & Description */}
    <div>
      <div className="flex items-center gap-2 -mt-3 mb-4 ">
        <img src="/logo ict.png" alt="Logo" className="h-12" />
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        Macat Megatrons is a thriving community where innovators,
        professionals, and enthusiasts come together to share
        knowledge, collaborate, and grow.
      </p>

      {/* Social Icons */}
      <div className="flex gap-4 text-gray-600">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-google"></i>
        <i className="fab fa-x-twitter"></i>
        <i className="fab fa-linkedin-in"></i>
      </div>
    </div>

    {/* Important Links */}
    <div>
      <h3 className="font-semibold mb-4">Important links</h3>
      <ul className="space-y-2 text-gray-600 text-sm">
        <li>Courses</li>
        <li>About</li>
        <li>Our Mentors</li>
        <li>Disclaimer</li>
      </ul>
    </div>

    {/* Courses */}
    <div>
      <h3 className="font-semibold mb-4">Courses</h3>
      <ul className="space-y-2 text-gray-600 text-sm">
       <li>US Taxation</li>
       <li>UK Taxation</li>
       <li>UAE Taxation</li>
       <li>Saidi Taxation</li>
       <li>View All</li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="font-semibold mb-4">Contact</h3>
      <ul className="space-y-3 text-gray-600 text-sm">
        <li className="flex gap-3">
          <span className="text-[#3D4098] text-[18px] pt-1"><FaMapMarkerAlt /></span>  Plot No. 63, Service Road, I-10/3 North, Islamabad 44000
        </li>
        <li className="flex gap-3">
          <div className="text-[#3D4098] text-[18px]"><FaPhone /></div>  03710194615
        </li>
        <li className="flex gap-3 text-[18px]">
          <span className="text-[#3D4098] text-xl mt-1"><IoIosMail /></span> admission@ict.net.pk
        </li>
      </ul>
    </div>

  </div>
</footer>

<div className="flex justify-between px-36 -z-10 relative pt-20 pb-5 -mt-10 bg-gray-200 ">
      <div>
        <p className="text-gray-500 text-sm">© 2025 ICT. All rights reserved.</p>
      </div>

      <div className="gap-6 flex">
        <a href="">Privacy Policy</a>
        <a href="">Terms of Use</a>
        <a href="">Legal</a>
        <a href="">Sitemap</a>
      </div>
</div>
    </>
  );
}
