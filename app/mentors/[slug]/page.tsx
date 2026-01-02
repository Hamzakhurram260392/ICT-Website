// import { client } from "@/sanity/lib/client";
// import { singleMentorQuery } from "@/sanity/lib/queries";
// import { urlFor } from "@/sanity/lib/image";
// import { PortableText } from "@portabletext/react";

// export default async function MentorDetail({ params }: { params: { slug: string } | Promise<{ slug: string }> }) {
//   const { slug } = await params;

//   if (!slug) return <div>Mentor not found</div>;

//   const mentor = await client.fetch(singleMentorQuery, { slug });

//   if (!mentor) return <div>Mentor not found</div>;

//   return (
//     <div className="max-w-4xl mx-auto py-20">
//       <img
//         src={
//           mentor.image
//             ? urlFor(mentor.image).width(600).height(500).url()
//             : "/placeholder.jpg"
//         }
//         className="rounded-xl mb-6"
//       />

//       <h1 className="text-4xl font-bold">{mentor.name}</h1>
//       <p className="text-gray-500 mb-6">{mentor.designation}</p>

//       <div className="prose">
//         <PortableText value={mentor.bio} />
//       </div>
//     </div>
//   );
// }

import { client } from "@/sanity/lib/client";
import { singleMentorQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";

export async function generateMetadata(
  { params }: { params: { slug: string } | Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const mentor = await client.fetch(singleMentorQuery, {
    slug,
  });

  if (!mentor) {
    return {
      title: "Mentor Not Found",
      robots: "noindex",
    };
  }

  const seo = mentor.seo || {};

  return {
    title: seo.metaTitle || mentor.name,
    description: seo.metaDescription || mentor.designation,
    keywords: seo.keywords?.join(", "),
    robots: seo.noIndex ? "noindex, nofollow" : "index, follow",
    openGraph: {
      title: seo.metaTitle || mentor.name,
      description: seo.metaDescription || mentor.designation,
      images: seo.ogImage
        ? [
            {
              url: urlFor(seo.ogImage)
                .width(1200)
                .height(630)
                .url(),
            },
          ]
        : [],
    },
  };
}


type PageProps = {
  params: { slug: string } | Promise<{ slug: string }>;
};

export default async function MentorDetail({ params }: PageProps) {
  const { slug } = await params;

  const mentor = await client.fetch(singleMentorQuery, { slug });

  if (!mentor) return <div>Mentor not found</div>;

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative container mx-auto px-20 py-12 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-9 items-center">
        {/* LEFT */}
        <div className="relative">
          {/* NAME BADGE */}
          <div className="mb-40">
            <span className="inline-block px-6 py-2 text-[20px] font-bold border-2 rounded-lg text-[#3D4098] border-[#3D4098] bg-white">
              {mentor.name}
            </span>
          </div>

          {/* SHORT BIO */}
          <div className="max-w-[460px] mb-9 mt-[-120]">
            <h1
              className="
                text-[20px] md:text-[20.74px]
                leading-[132%]
                tracking-[-0.02em]
                text-black
                mb-4
                [text-shadow:
                  0.8px_0_0_#3D4098,
                  -0.8px_0_0_#3D4098,
                  0_0.8px_0_#3D4098,
                  0_-0.8px_0_#3D4098
                ]
              "
            >
              {mentor.designation}
            </h1>
          </div>

          {/* CTA */}
          <button className="bg-[#3D4098] hover:bg-[#2f327a] mt-10 text-white px-7 py-2 rounded-lg shadow-lg transition">
            Enroll Now
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div
            className="absolute -top-16 -left-[-20]
            w-[420px] md:w-[520px] lg:w-[613px]
            h-[360px] md:h-[460px] lg:h-[525px]
            bg-no-repeat bg-contain"
            style={{ backgroundImage: "url('/bg.png')" }}
          />

          <div className="relative z-10 rounded-2xl overflow-hidden translate-x-8 translate-[-26px]">
            <img
              src={
                mentor.image
                  ? urlFor(mentor.image).width(500).height(600).url()
                  : "/placeholder.jpg"
              }
              alt={mentor.name}
              className="w-[220px] h-[520px] md:w-[400px] md:h-[420px] lg:w-[424px] lg:h-[458px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT & EXPERTISE ================= */}
      <section className="container mx-auto px-20 py-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* ABOUT */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-6 h-[3px] bg-green-600"></span>
            <h2 className="font-extrabold text-[#3D4098]">
              About {mentor.name}
            </h2>
          </div>

          <div className="prose max-w-none">
            <PortableText value={mentor.bio} />
          </div>
        </div>

        {/* EXPERTISE */}
        <div className="bg-[#3D4098] rounded-2xl py-8 px-12 mt-6 text-white shadow-xl">
          <h3 className="text-center mb-10 mt-[-30]">
            <span className="inline-flex items-center justify-center font-extrabold px-10 w-[440px] h-[90px] text-[32px] border-l border-r border-b border-white rounded-b-3xl">
              Expertise & Skills
            </span>
          </h3>

          <ul className="space-y-6 pb-6">
            {mentor.expertise?.map((item: string, i: number) => (
              <li
                key={i}
                className="flex items-center gap-4 pb-4 border-b border-white/60"
              >
                <span className="w-5 h-5 rounded-full bg-[#15A959] flex items-center justify-center text-white text-xs">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
