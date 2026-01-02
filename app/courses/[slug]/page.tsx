// import { client } from "@/sanity/lib/client";
// import { singleCourseQuery } from "@/sanity/lib/queries";
// import { urlFor } from "@/sanity/lib/image";
// import { PortableText } from "@portabletext/react";

// export default async function CourseDetail({ params }: any) {
//   const { slug } = await params;
//   const course = await client.fetch(singleCourseQuery, {
//     slug,
//   });

//   if (!course) return <div>Course not found</div>;

//   return (
//     <div className="max-w-5xl mx-auto py-20 px-6">
//       <img
//         src={urlFor(course.thumbnail).width(900).url()}
//         className="rounded-xl mb-8"
//       />

//       <h1 className="text-4xl font-bold">{course.title}</h1>
//       <p className="text-gray-500 mt-2">{course.category}</p>

//       <div className="mt-6 prose">
//         <PortableText value={course.description} />
//       </div>

//       <h3 className="mt-10 font-bold text-xl">What you’ll learn</h3>
//       <ul className="mt-4 space-y-2">
//         {(Array.isArray(course.features) ? course.features : []).map(
//           (f: string, i: number) => (
//             <li key={i}>✅ {f}</li>
//           )
//         )}
//       </ul>
//     </div>
//   );
// }
import { client } from "@/sanity/lib/client";
import { singleCourseQuery } from "@/sanity/lib/queries";
import CourseDetailUI from "./CourseDetailUI";

export default async function CourseDetailPage({ params }: any) {
  const { slug } = await params;

  const course = await client.fetch(singleCourseQuery, { slug });

  if (!course) return <div>Course not found</div>;

  return <CourseDetailUI course={course} />;
}
