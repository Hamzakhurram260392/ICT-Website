import { FaFacebookF, FaPhone } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { LuYoutube } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <>
      {/* navbar */}
            <div className="flex justify-between py-3 px-16 bg-[#3D4098]">
                  <div className="flex justify-center items-center text-white gap-2 text-lg">
                    <FaFacebookF />
                    <AiOutlineInstagram />
                    <FiTwitter />
                    <LuYoutube />
                  </div>
                  <div className="flex justify-center gap-1 items-center">
                    <input className="bg-white rounded-md" type="text" /> <span className="py-1 px-2 rounded-md text-white bg-[#15A959]"><CiSearch /></span> 
                  </div>
                  <div className="flex gap-2 ">
                    <a className="px-2 py-1 text-sm items-center justify-center border border-white text-white" href="/">Certificate</a>
                    <a className="flex justify-center text-sm items-center hover:bg-[#15A959] text-white py-1 px-2" href="/">ICT LMS</a>
                  </div>
            </div>
      
            {/* main Navbar */}
            <div className="flex justify-start py-3 px-28 gap-14 border-b-2 border-gray-200">
                <div>
                   <img src="/logo ict.png" alt="logo" width={270} height={170} />
                </div>
                <div className="flex items-center gap-7 text-xl">
                <a className=" hover:text-[#15A959]" href="/">Home</a>
                <a className=" hover:text-[#15A959]" href="/About">About Us</a>
                <a className=" hover:text-[#15A959]" href="/courses">Courses</a>
                <a className=" hover:text-[#15A959]" href="/mentors">Our Mentors</a>
                <a className=" hover:text-[#15A959]" href="/Feedback">Feedback</a>
                <a className=" hover:text-[#15A959]" href="/contact">Contact Us</a>
                <a className=" hover:text-[#15A959]" href="/blogs">Blogs</a>
                <a className=" hover:text-[#15A959]" href="/Help_desk">Help Desk</a>
                <a className=" hover:text-[#15A959]" href="/career">Careers</a> 
               </div>
            </div>
    </>
  );
}
