import { API_URLS } from "./components/apiconfig/api_urls";
import axiosInstance from "./components/apiconfig/axios";

export default async function sitemap() {
    const baseUrl = "https://www.prepacademy.in";

    interface BlogPost {
      id: string | number;
     
    }
  
  
    const blogResponse = await axiosInstance.get(API_URLS.BLOG.GET_BLOG);
  
    console.log(blogResponse);
    
    const blogPost = blogResponse.data.map((post:BlogPost) => {
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