// app/blog/[id]/page.tsx
import { Metadata } from "next";
import BlogDetails from "@/app/components/blogs/blogdetails/Blogdetails";
import axiosInstance from "@/app/components/apiconfig/axios";
import { API_URLS } from "@/app/components/apiconfig/api_urls";

interface BlogMeta {
  title: string;
  description: string;
  keywords: string;
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    const response = await axiosInstance.get(API_URLS.SEO.BLOGMETA);
    const blogMeta: BlogMeta = response.data;

    return {
      title: blogMeta.title,
      description: blogMeta.description,
      keywords: blogMeta.keywords.split(","),
      openGraph: {
        title: blogMeta.title,
        description: blogMeta.description,
        url: `https://prepacademy.in/blogdetails/${params.id}`,
      },
    };
  } catch (error) {
    console.error("Failed to fetch blog metadata:", error);
    return {
      title: "Blog | PrepAcademy",
      description: "Read expert blog posts on exams, tips, and strategies.",
    };
  }
}

export default function BlogDetailsPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div>
      <BlogDetails id={id} />
    </div>
  );
}
