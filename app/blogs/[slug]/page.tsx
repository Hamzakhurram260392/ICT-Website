// import { client } from "@/sanity/lib/client";
// import { singleBlogQuery } from "@/sanity/lib/queries";
// import { PortableText } from "@portabletext/react";
// import Image from "next/image";

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// // ✅ Fetch blog with slug
// async function getBlog(slug: string) {
//   return await client.fetch(singleBlogQuery, {
//     slug: slug, // <-- IMPORTANT
//   });
// }

// export default async function BlogDetailPage({ params }: PageProps) {
//   const { slug } = params;

//   // Safety check
//   if (!slug) {
//     return <div className="py-20 text-center">Invalid blog URL</div>;
//   }

//   const blog = await getBlog(slug);

//   if (!blog) {
//     return <div className="py-20 text-center">Blog not found</div>;
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <div className="max-w-4xl mx-auto px-4 py-16">

//         {/* Title */}
//         <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
//           {blog.title}
//         </h1>

//         {/* Meta */}
//         <p className="text-gray-500 mb-8">
//           By <span className="font-medium">{blog.author?.name || "Admin"}</span>{" "}
//           • {new Date(blog.publishedAt).toDateString()}
//         </p>

//         {/* Image */}
//         {blog.imageUrl && (
//           <div className="relative w-full h-[420px] mb-10 rounded-xl overflow-hidden">
//             <Image
//               src={blog.imageUrl}
//               alt={blog.title}
//               fill
//               className="object-cover"
//             />
//           </div>
//         )}

//         {/* Excerpt */}
//         {blog.excerpt && (
//           <p className="text-xl text-gray-700 mb-10">
//             {blog.excerpt}
//           </p>
//         )}

//         {/* Body */}
//         <article className="prose prose-lg max-w-none">
//           <PortableText value={blog.body} />
//         </article>

//       </div>
//     </div>
//   );
// }


// import { client } from "@/sanity/lib/client";
// import { singleBlogQuery } from "@/sanity/lib/queries";

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// async function getSingleBlog(slug: string) {
//   return client.fetch(singleBlogQuery, {
//     slug: slug, // 👈 THIS FIXES THE ERROR
//   });
// }

// export default async function BlogDetailPage({ params }: PageProps) {
//   const blog = await getSingleBlog(params.slug);

//   if (!blog) {
//     return <div>Blog not found</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto py-20 px-6">
//       <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

//       <p className="text-gray-500 mb-6">
//         {new Date(blog.publishedAt).toDateString()}
//       </p>

//       <img
//         src={blog.imageUrl}
//         alt={blog.title}
//         className="w-full rounded-lg mb-8"
//       />

//       <p className="text-lg text-gray-700">{blog.excerpt}</p>
//     </div>
//   );
// }



import { client } from "@/sanity/lib/client";
import { singleBlogQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";

export async function generateMetadata(
  { params }: { params: { slug: string } | Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const blog = await client.fetch(singleBlogQuery, {
    slug,
  });

  if (!blog) {
    return {
      title: "Blog Not Found",
      robots: "noindex",
    };
  }

  const seo = blog.seo || {};

  return {
    title: seo.metaTitle || blog.title,
    description: seo.metaDescription || blog.excerpt,
    keywords: seo.keywords?.join(", "),
    robots: seo.noIndex ? "noindex, nofollow" : "index, follow",
    openGraph: {
      title: seo.metaTitle || blog.title,
      description: seo.metaDescription || blog.excerpt,
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
  params: Promise<{ slug: string }>;
};

export default async function BlogDetail({ params }: PageProps) {
  // ✅ IMPORTANT: await params
  const { slug } = await params;

  const blog = await client.fetch(singleBlogQuery, {
    slug: slug, // ✅ now passed correctly
  });

  if (!blog) {
    return <div className="p-10 text-center">Blog not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      {blog.mainImage ? (
        <img
          src={urlFor(blog.mainImage).width(1200).height(600).url()}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      ) : (
        <img
          src="/placeholder.jpg"
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}

      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

      <p className="text-gray-500 mb-6">
        By {blog.author?.name}
      </p>

      {/* Later we will render PortableText here */}
      <div className="prose max-w-none">
  <PortableText value={blog.body} />
</div>

    </div>
  );
}

