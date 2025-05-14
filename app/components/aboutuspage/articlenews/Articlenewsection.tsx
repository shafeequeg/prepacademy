"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axiosInstance from "../../apiconfig/axios";
import { API_URLS } from "../../apiconfig/api_urls";



const stripHtmlAndTruncate = (
    html: string | null | undefined,
    maxLength: number = 120
  ): string => {
    if (!html) return "No description available";

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    const text = tempDiv.textContent || tempDiv.innerText || "";
    const cleanedText = text.trim();

    return cleanedText.length > maxLength
      ? `${cleanedText.substring(0, maxLength)}...`
      : cleanedText;
  };

  
interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
  id: number;
}

interface Blog {
  id: number;
  title: string;
  category: number;
  category_name: string;
  description: string;
  image: string;
  alt_img_text: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  image,
  title,
  description,
}) => (
  <div className="bg-[#1A1412] rounded-lg overflow-hidden flex flex-col h-full">
    <Image
      src={image || "/default-blog-image.jpg"} // Add a default image fallback
      alt={title}
      width={500}
      height={192}
      className="w-full h-48 object-cover"
    />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
  {stripHtmlAndTruncate(description)}
</p>

      <div className="mt-auto">
        <Link href={`/blogdetails/${id}`}>
          <button className="text-[#FF5733] flex items-center gap-2 text-sm hover:text-[#FF6B4A] transition-colors">
            Read More
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const NewsAndArticles: React.FC = () => {
  const [allBlog, setAllBlog] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(API_URLS.BLOG.GET_BLOG);
      setAllBlog(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

   

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#0F0F0F] min-h-screen p-8 flex justify-center items-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-[#0F0F0F] min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-3 mb-10">
          <h2 className="text-3xl font-bold italic text-white">Latest</h2>
          <span className="text-3xl font-bold text-[#FF5733]">
            News & Articles
          </span>
        </div>

        {allBlog.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {allBlog.slice(0, 3).map((blog) => (
                <ArticleCard
                  key={blog.id}
                  id={blog.id}
                  image={blog.image || "/default-blog-image.jpg"}
                  title={blog.title}
                  description={blog.description}
                />
              ))}
            </div>

            <div className="text-center">
              <Link href={"/blogs"}>
                <button className="text-white flex items-center gap-2 mx-auto hover:text-gray-300 transition-colors">
                  View More
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>
          </>
        ) : (
          <div className="text-white text-center py-10">
            No articles available at the moment.
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsAndArticles;