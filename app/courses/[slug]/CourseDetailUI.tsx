"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import React, { useState } from "react";

/* ================= FAQ ================= */
const FAQListSection = () => {
  const faqs = [
    {
      q: "Who should take this course?",
      a: "This course is ideal for students, professionals, and entrepreneurs.",
    },
    {
      q: "Will I get a certificate?",
      a: "Yes, after successful completion you will receive certification.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto">
        {faqs.map((f, i) => (
          <div key={i} className="border rounded-xl mb-4">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full p-6 flex justify-between font-semibold"
            >
              {f.q}
              <span>{open === i ? "-" : "+"}</span>
            </button>
            {open === i && (
              <div className="p-6 pt-0 text-gray-600">{f.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

/* ================= MAIN UI ================= */
export default function CourseDetailUI({ course }: any) {
  return (
    <>
      {/* ================= HERO ================= */}
     <section className="py-20 bg-gradient-to-r from-[#f7f7f7] to-[#eaf1f9]">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* ================= LEFT ================= */}
    <div>
      <h1 className="text-5xl font-extrabold text-[#2f2f8f] leading-tight">
        {course.title}
      </h1>

      <p className="mt-6 text-lg text-gray-700 max-w-xl">
        {course.shortDescription}
      </p>
       <div className="prose max-w-none">
            <PortableText value={course.description} />
          </div>

      <div className="flex gap-4 mt-8">
        <button className="bg-[#3c3f9e] text-white px-8 py-3 rounded-lg font-semibold">
          Enroll Now
        </button>
        <button className="border-2 border-[#3c3f9e] text-[#3c3f9e] px-8 py-3 rounded-lg font-semibold">
          Explore
        </button>
      </div>
    </div>

    {/* ================= RIGHT IMAGES (FIXED ALIGNMENT) ================= */}
    <div className="grid grid-cols-[1fr_1fr] gap-6">

      {/* LEFT TALL IMAGE */}
      <div className="rounded-[32px] overflow-hidden h-[420px]">
        <Image
          src={urlFor(course.thumbnail).width(600).height(800).url()}
          alt={course.title}
          width={600}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT STACKED IMAGES */}
      <div className="flex flex-col gap-6">

        {/* TOP RIGHT */}
        {course.gallery?.[0] && (
          <div className="rounded-[32px] overflow-hidden h-[130px]">
            <Image
              src={urlFor(course.gallery[0]).width(500).height(300).url()}
              alt=""
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* MIDDLE RIGHT */}
        {course.gallery?.[1] && (
          <div className="rounded-[32px] overflow-hidden h-[130px]">
            <Image
              src={urlFor(course.gallery[1]).width(500).height(300).url()}
              alt=""
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* BOTTOM RIGHT */}
        {course.gallery?.[2] && (
          <div className="rounded-[32px] overflow-hidden h-[130px]">
            <Image
              src={urlFor(course.gallery[2]).width(500).height(300).url()}
              alt=""
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>

  </div>
</section>



      {/* ================= ABOUT ================= */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">About this Course</h2>
          <div className="prose max-w-none">
            <PortableText value={course.description} />
          </div>
        </div>
      </section> */}

      {course.benefits?.length > 0 && (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-10">
        Course Benefits
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {course.benefits.map((b: string, i: number) => (
          <div key={i}>
            <span className="text-3xl font-bold text-[#3c3f9e]">
              {i + 1}.
            </span>
            <p className="mt-2 text-gray-600">{b}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)}

 <h1 className="flex justify-center text-4xl -mb-12 text-white">Course Outline</h1>
{course.outline?.length > 0 && ( 
  <section className="py-20 bg-[#262A7B] text-white"> 
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">
      {course.outline.map((o: any, i: number) => (
        <div key={i} className="border border-white/40 p-6">
          <h3 className="font-bold text-lg mb-2">
            {o.title}
          </h3>
          <p className="text-white/80 text-sm">
            {o.description}
          </p>
        </div>
      ))}
    </div>
  </section>
)}



{course.instructor && (
  <section className="py-20 bg-[#f6f6f6]">
    <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-10 shadow-lg">
      <Image
        src={urlFor(course.instructor.image).width(400).url()}
        alt={course.instructor.name}
        width={400}
        height={500}
        className="rounded-2xl"
      />

      <div>
        <h2 className="text-3xl font-bold mb-2">
          {course.instructor.name}
        </h2>
        <p className="text-gray-600 mb-4">
          {course.instructor.designation}
        </p>

        <button className="bg-[#3c3f9e] text-white px-6 py-3 rounded-xl">
          Explore more
        </button>
      </div>
    </div>
  </section>
)}


{course.certificate && (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <Image
        src={urlFor(course.certificate.image).width(700).url()}
        alt="Certificate"
        width={700}
        height={400}
        className="rounded-2xl"
      />

      <div>
        <h2 className="text-4xl font-bold mb-6">
          {course.certificate.title}
        </h2>
        <p className="text-gray-600 mb-8">
          {course.certificate.text}
        </p>

        <button className="bg-[#3c3f9e] text-white px-10 py-4 rounded-xl">
          Apply Now
        </button>
      </div>
    </div>
  </section>
)}
    
      {/* ================= FAQ ================= */}
      <FAQListSection />
    </>
  );
}
