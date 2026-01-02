// export default {
//   name: "course",
//   title: "Course",
//   type: "document",
//   fields: [
//     {
//       name: "title",
//       title: "Course Title",
//       type: "string",
//       validation: (Rule: any) => Rule.required(),
//     },

//     {
//       name: "slug",
//       title: "Slug",
//       type: "slug",
//       options: { source: "title" },
//       validation: (Rule: any) => Rule.required(),
//     },

//     {
//       name: "thumbnail",
//       title: "Course Image",
//       type: "image",
//       options: { hotspot: true },
//     },

//     {
//       name: "shortDescription",
//       title: "Short Description",
//       type: "text",
//       rows: 3,
//     },

//     {
//       name: "category",
//       title: "Category",
//       type: "string",
//       options: {
//         list: ["Taxation", "Accounting", "Finance", "Corporate Law"],
//       },
//     },

//     {
//       name: "duration",
//       title: "Duration",
//       type: "string",
//       description: "e.g. 3 Months",
//     },

//     {
//       name: "price",
//       title: "Price",
//       type: "number",
//     },

//     {
//       name: "instructor",
//       title: "Instructor",
//       type: "reference",
//       to: [{ type: "mentor" }],
//     },

//     {
//       name: "description",
//       title: "Full Description",
//       type: "array",
//       of: [{ type: "block" }],
//     },

//     {
//       name: "features",
//       title: "Course Features",
//       type: "array",
//       of: [{ type: "string" }],
//     },
//   ],
// };



// schemas/course.js
export default {
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    { name: "category", type: "string" },

    {
      name: "thumbnail",
      type: "image",
      options: { hotspot: true },
    },

    {
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    },

    // 🔥 EXTRA IMAGES
    {
      name: "gallery",
      title: "Course Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },

    // 🔥 BENEFITS
    {
      name: "benefits",
      title: "Course Benefits",
      type: "array",
      of: [{ type: "string" }],
    },

    // 🔥 COURSE OUTLINE
    {
      name: "outline",
      title: "Course Outline",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "description", type: "text" },
          ],
        },
      ],
    },

    // 🔥 INSTRUCTOR
    {
      name: "instructor",
      type: "reference",
      to: [{ type: "mentor" }],
    },

    // 🔥 CERTIFICATION
    {
      name: "certificate",
      title: "Certification Section",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        { name: "text", type: "text" },
        {
          name: "image",
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
  ],
};
