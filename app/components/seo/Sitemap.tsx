// // app/sitemap.ts
// import { MetadataRoute } from 'next';

import { API_URLS } from "../apiconfig/api_urls";
import axiosInstance from "../apiconfig/axios";

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   // Core pages
//   const baseUrl = 'http://localhost:3000';
//   const routes: MetadataRoute.Sitemap = [
//     '',
//     '/aboutus',
//     '/allcourses',
//     '/schoolcourse',
//     '/neet',
//     '/schoolcourse/engineering/jee',
//     '/contact',
//     '/blog',
//   ].map((route) => ({
//     url: `${baseUrl}${route}`,
//     lastModified: new Date(),
//     changeFrequency: 'weekly',
//     priority: route === '' ? 1 : 0.8,
//   }));

//   // Get your dynamic blog posts
//   // Example code - replace with your actual blog fetching logic
//   // const blogPosts = await getBlogPosts();
//   // const blogRoutes = blogPosts.map((post) => ({
//   //   url: `${baseUrl}/blog/${post.slug}`,
//   //   lastModified: new Date(post.updatedAt),
//   //   changeFrequency: 'monthly',
//   //   priority: 0.6,
//   // }));

//   // Get your courses
//   // Example code - replace with your actual course fetching logic
//   // const courses = await getCourses();
//   // const courseRoutes = courses.map((course) => ({
//   //   url: `${baseUrl}/courses/${course.slug}`,
//   //   lastModified: new Date(course.updatedAt),
//   //   changeFrequency: 'monthly',
//   //   priority: 0.7,
//   // }));

//   return [
//     ...routes,
//     // ...blogRoutes,
//     // ...courseRoutes,
//   ];
// }

export default async function sitemap() {
  const baseUrl = "https://www.prepacademy.in";

  const blogResponse = await axiosInstance.get(API_URLS.BLOG.GET_BLOG);

  const blogPost = blogResponse.data.map((post:any) => {
    return{
        url: `https://www.prepacademy.in/blogdetails/${post.id}`
    }
  })

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...blogPost
  ];
}
