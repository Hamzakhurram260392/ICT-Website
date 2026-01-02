// import { groq } from "next-sanity";

// /* 🔹 BLOG LIST (NO slug) */
// export const blogsQuery = groq`
// *[_type == "post"] | order(publishedAt desc){
//   _id,
//   title,
//   excerpt,
//   publishedAt,
//   "slug": slug.current,
//   author->{
//     name
//   },
//   "imageUrl": mainImage.asset->url
// }
// `;

// /* 🔹 SINGLE BLOG (USES slug) */
// export const singleBlogQuery = groq`
// *[_type == "post" && slug.current == $slug][0]{
//   _id,
//   title,
//   excerpt,
//   publishedAt,
//   body,
//   author->{
//     name
//   },
//   "imageUrl": mainImage.asset->url
// }
// `;




export const blogsQuery = `
*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  excerpt,
  "slug": slug.current,
  "mainImage": image,
}
`;
export const singleBlogQuery = `
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  body,
  publishedAt,
  "mainImage": image,
  seo,
  author->{
    name
  }
}
`;

export const mentorsQuery = `
*[_type == "mentor"] | order(name asc) {
  _id,
  name,
  slug,
  image,
  designation
}
`;

// SINGLE mentor
export const singleMentorQuery = `
*[_type == "mentor" && slug.current == $slug][0]{
  name,
  designation,
  image,
  shortBio,
  bio,
  expertise,
   seo {
    metaTitle,
    metaDescription,
    keywords,
    ogImage,
    noIndex
  }
}
`;
export const coursesQuery = `
*[_type == "course"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  shortDescription,
  category,
  price,
  duration,
  thumbnail,
  instructor->{
    name,
    image
  }
}
`;
// export const singleCourseQuery = `
// *[_type == "course" && slug.current == $slug][0] {
//   title,
//   slug,
//   category,
//   price,
//   duration,
//   thumbnail,
//   description,
//   features,
//   instructor->{
//     name,
//     image,
//     designation
//   }
// }
// `;

// sanity/lib/queries.ts
export const singleCourseQuery = `
*[_type=="course" && slug.current==$slug][0]{
  title,
  category,
  thumbnail,
  description,
  features,
  gallery,
  benefits,
  outline,

  instructor->{
    name,
    designation,
    image
  },

  certificate
}
`;


