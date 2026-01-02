// "use client";

// import React from "react";
// import Link from "next/link";


// export default function MentorsPage() {
//   const mentors = [
//     { id: "rai", name: "Mr. Rai Basharat Ali", img: "/2.png" },
//     { id: "asaar", name: "Mr. Asaar Uz-Zaman", img: "/1.png" },
//     { id: "waqas", name: "Mr. Muhammad Waqas", img: "/3.png" },
//     { id: "shoaib", name: "Mr. Shaheer Mirza", img: "/2.png" },
//     { id: "hassan", name: "Mr. Hassan Mahmood", img: "/444.jpeg" },
//     { id: "baqir", name: "Mr. Syed Baqir Raza", img: "/666.jpeg" },
//     { id: "naseerr", name: "Mr. Naseer Ud Din", img: "/777.jpeg" },
//     { id: "kamran", name: "Mr. Kamran Ahmad", img: "kamran.png" },
//     { id: "faizan", name: "Mr. Faizan Ali", img: "/333.jpeg" },
//     { id: "tahir", name: "Mr. Tahir Aziz", img: "/tahir.png" },
//     { id: "mehmood", name: "Mr. Mehmood Ul Hassan", img: "/555.jpeg" },
//     { id: "sanaullah", name: "Mr. Sanaullah Khan", img: "/sanaullah.png" },
//     { id: "hammad", name: "Mr. Hammad Aadi", img: "/222.jpeg" },
//   ];

//   const scrollingMentors = [
//     { id: 1, img: "/2.png" },
//     { id: 2, img: "/1.png" },
//     { id: 3, img: "/3.png" },
//     { id: 4, img: "/777.jpeg" },
//     { id: 5, img: "/444.jpeg" },
//     { id: 6, img: "/555.jpeg" },
//     { id: 7, img: "/222.jpeg" },
//     { id: 8, img: "/333.jpeg" },
//     { id: 9, img: "/666.jpeg" },
//   ];

//   return (
//     <main className="min-h-screen bg-linear-to-b from-gray-50 to-white">
//       <style jsx>{`
//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-scroll {
//           display: flex;
//           width: max-content;
//           animation: scroll 25s linear infinite;
//         }
//       `}</style>

//       {/* HERO */}
//       <section className="py-10 px-4 sm:px-6 text-center">
//         <div className="max-w-5xl mx-auto">
//           <h1 className="text-3xl sm mb-2 :text-4xl md:text-4xl font-poppins font-extrabold text-[#3D4098] flex items-center justify-center gap-3">
//   <span className="w-10 sm:w-14 h-0.5 bg-transparent" />
//   Meet Our <span className="text-[#15A959]">Mentors</span>
// </h1>


//           <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-4 leading-[132%]">
//             Our mentor brings years of experience and expertise, guiding students with <span className="text-[#15A959]">practical insights</span> and <span className="text-[#15A959]">personalized support</span>. Their dedication ensures every learner achieves their full potential.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
//             <button className="px-8 py-2 text-white font-bold rounded-xl shadow-xl bg-[#3D4098]">
//               Enroll Now
//             </button>
//             <button className="px-8 py-2 border-2 font-bold rounded-xl text-[#3D4098] border-[#3D4098] hover:bg-indigo-50">
//               Explore
//             </button>
//           </div>

//           {/* SCROLLING */}
//           <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden w-screen">
//             <div className="flex animate-scroll gap-3">
//               {[...scrollingMentors, ...scrollingMentors].map((m, i) => (
//                 <img
//                   key={i}
//                   src={m.img}
//                   className="w-40 sm:w-48 md:w-52 h-52 sm:h-60 object-cover rounded-2xl shadow-md shrink-0"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* GRID */}
//       <section className="py-10 px-4 mt-[-30] sm:px-6">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-[#3D4098] flex items-center justify-center gap-3 mb-16">
//             <span className="w-10 sm:w-14 h-0.5 bg-[#15A959]" />
//             Meet Our <span className="text-[#15A959]">Mentors</span>
//           </h2>

//           {/* RESPONSIVE GRID */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
//             {mentors.map((mentor) => (
//               <div
//   key={mentor.id}
//   className={`
//     text-center
//     lg:[&:nth-last-child(-n+3)]:col-span-1
//     lg:[&:nth-last-child(3)]:col-start-2
//   `}
// >


//                 <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-40 sm:w-[180px] md:w-[200px] hover:scale-105 transition">
//                   <img
//                     src={mentor.img}
//                     alt={mentor.name}
//                     className="w-full h-44 sm:h-52 md:h-60 object-cover"
//                   />
//                 </div>

//                 <h3 className="text-[#564F4F] font-bold text-xs sm:text-sm mt-2">
//                   {mentor.name}
//                 </h3>

//                 <Link href={`/mentors/components/${mentor.id}`}>
//                   <button className="mt-2 mb-4 px-3 py-1 text-sm bg-[#3D4098] text-white rounded-md shadow hover:bg-indigo-700 transition">
//                     View Detail
//                   </button>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { mentorsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

type Mentor = {
  _id: string;
  name: string;
  slug: { current: string };
  image: any;
  designation?: string;
};

export default function MentorsPage() {
  const [mentors, setMentors] = useState<Mentor[]>([]);

  useEffect(() => {
    client.fetch(mentorsQuery).then(setMentors);
  }, []);

  // Use first mentors for slider
  const scrollingMentors = mentors.slice(0, 8);

  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* ===== SLIDER ANIMATION ===== */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 25s linear infinite;
        }
      `}</style>

      {/* ================= SLIDER SECTION ================= */}
      {scrollingMentors.length > 0 && (
        <section className="py-14 overflow-hidden">
         <h1 className="text-3xl sm mb-2 :text-4xl md:text-4xl font-poppins font-extrabold text-[#3D4098] flex items-center justify-center gap-3">
  <span className="w-10 sm:w-14 h-0.5 bg-transparent" />
  Meet Our Mentors
</h1>


          <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-4 leading-[132%] justify-center flex items-center">
            Our mentor brings years of experience and expertise, guiding students with practical insights and personalized support. Their dedication ensures every learner achieves their full potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <button className="px-8 py-2 text-white font-bold rounded-xl shadow-xl bg-[#3D4098]">
              Enroll Now
            </button>
            <button className="px-8 py-2 border-2 font-bold rounded-xl text-[#3D4098] border-[#3D4098] hover:bg-indigo-50">
              Explore
            </button>
          </div>
          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
            <div className="flex animate-scroll gap-4 px-4">
              {[...scrollingMentors, ...scrollingMentors].map((mentor, i) => (
                <img
                  key={i}
                  src={
                    mentor.image
                      ? urlFor(mentor.image)
                          .width(300)
                          .height(350)
                          .url()
                      : "/placeholder.jpg"
                  }
                  className="w-40 sm:w-48 md:w-52 h-52 sm:h-60 object-cover rounded-2xl shadow-md shrink-0"
                  alt={mentor.name}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= HEADING ================= */}
      <section className="py-10 max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#3D4098]">
          Meet Our <span className="text-[#15A959]">Mentors</span>
        </h1>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
          {mentors.map((mentor) => (
            <div key={mentor._id} className="text-center">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-40 sm:w-[180px] md:w-[200px] hover:scale-105 transition">
                <img
                  src={
                    mentor.image
                      ? urlFor(mentor.image)
                          .width(300)
                          .height(400)
                          .url()
                      : "/placeholder.jpg"
                  }
                  alt={mentor.name}
                  className="w-full h-44 sm:h-52 md:h-60 object-cover"
                />
              </div>

              <h3 className="text-[#564F4F] font-bold text-xs sm:text-sm mt-2">
                {mentor.name}
              </h3>


              {mentor.slug?.current && (
                <Link href={`/mentors/${mentor.slug.current}`}>
                  <button className="mt-2 mb-4 px-3 py-1 text-sm bg-[#3D4098] text-white rounded-md shadow hover:bg-indigo-700 transition">
                    View Detail
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
