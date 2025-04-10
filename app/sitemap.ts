// import { API_URLS } from "./components/apiconfig/api_urls";
// import axiosInstance from "./components/apiconfig/axios";

// export default async function sitemap() {
//     const baseUrl = "https://www.prepacademy.in";

//     interface BlogPost {
//       id: string | number;
//       // Add other properties your blog posts have if needed
//     }
  
  
//     const blogResponse = await axiosInstance.get(API_URLS.BLOG.GET_BLOG);
  
//     const blogPost = blogResponse.data.map((post:BlogPost) => {
//       return{
//           url: `https://www.prepacademy.in/blogdetails/${post.id}`
//       }
//     })
  
//     return [
//       {
//         url: baseUrl,
//         lastModified: new Date(),
//       },
//       ...blogPost
//     ];
//   }

  import { API_URLS } from "./components/apiconfig/api_urls";
import axiosInstance from "./components/apiconfig/axios";
import { MetadataRoute } from 'next';


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://www.prepacademy.in";
  
    interface BlogPost {
      id: string | number;
    }
  
    let blogPosts: BlogPost[] = [];
  
    try {
      const response = await axiosInstance.get(API_URLS.BLOG.GET_BLOG);
      blogPosts = response.data;
    } catch (error) {
      console.error("Error fetching blogs for sitemap:", error);
    }
  
    const blogUrls = blogPosts.map((post) => ({
      url: `${baseUrl}/blogdetails/${post.id}`,
      lastModified: new Date(),
    }));
  
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
      },
      ...blogUrls,
    ];
  }