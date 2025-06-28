"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axiosInstance from "../../apiconfig/axios";
import { API_URLS } from "../../apiconfig/api_urls";

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

interface Blogcategory {
  id: number;
  category: string;
}

interface Blogs {
  id: number;
  title: string;
  category: number;
  category_name: string;
  description: string;
  image: string;
  alt_img_text: string;
}

const stripHtmlAndTruncate = (
  html: string | null | undefined,
  maxLength: number = 120
): string => {
  if (!html) return "No description available";

  // Create a temporary div element to parse the HTML
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;

  // Get the text content and trim whitespace
  const text = tempDiv.textContent || tempDiv.innerText || "";
  const cleanedText = text.trim();

  // Truncate if needed
  return cleanedText.length > maxLength
    ? `${cleanedText.substring(0, maxLength)}...`
    : cleanedText;
};

const BlogSection = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [allBlog, setAllBlog] = useState<Blogs[]>([]);
  const [Blogcategory, setAllBlogcategory] = useState<Blogcategory[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(error);

  console.log(API_URLS.BLOG_CATEGORY.GET_BLOG_CATEGORY);

  const fetchBlogs = async () => {
    try {
      const response = await axiosInstance.get(API_URLS.BLOG.GET_BLOG);
      console.log(response);

      // const matchedBlog = response.data.find((blog:any) => blog.id == id )
      setAllBlog(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(allBlog);

  const fetchBlogsCategories = async () => {
    try {
      const response = await axiosInstance.get(
        API_URLS.BLOG_CATEGORY.GET_BLOG_CATEGORY
      );

      console.log("Full API response:", response);

      console.log("Response data:", response.data);
      console.log("Response status:", response.status);

      setAllBlogcategory(response.data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
        console.error("Error fetching categories:", err);
      } else {
        setError("Failed to fetch categories");
        console.error("Unknown error fetching categories:", err);
      }
    }
  };

  console.log(Blogcategory);

  // Updated display logic to include search functionality
  const displayBlogs = (() => {
    let filteredBlogs = allBlog;

    // Filter by category if activeTab is selected
    if (activeTab !== null) {
      filteredBlogs = allBlog.filter((blog) => blog.category === activeTab);
    }

    // Filter by search term if searchTerm is not empty
    if (searchTerm.trim() !== "") {
      filteredBlogs = filteredBlogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredBlogs;
  })();
  // const handleTabClick = (categoryId, categoryName) => {
  //   setActiveTab(categoryId); // Store ID instead of name
  // };

  // const displayBlogsAlternative = (() => {
  //   let filteredBlogs = allBlog;

  //   if (activeTab !== "") {
  //     filteredBlogs = allBlog.filter((blog) => blog.category === activeTab);
  //   }

  //   if (searchTerm.trim() !== "") {
  //     filteredBlogs = filteredBlogs.filter((blog) =>
  //       blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //   }

  //   return filteredBlogs;
  // })();

  // console.log(displayBlogs);

  useEffect(() => {
    fetchBlogs();
    fetchBlogsCategories();
  }, []);

  console.log(Blogcategory);

  return (
    <div className="w-full bg-[#1A1A1A] min-h-screen mt-16 md:mt-28 p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-white text-2xl font-semibold ">
          <span className="font-dmserif italic">Recent</span>{" "}
          <span className="text-[#FF5733]">Blogs</span>
          <i className="fa-solid fa-arrows-rotate"></i>
        </h2>
      </div>

      {/* Search and Categories */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Search Bar */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Blogs"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#F55D3E1A] text-white rounded-md py-2 pl-4 pr-10"
            />
            <div className="absolute right-3 top-2.5">
              <SearchIcon />
            </div>
          </div>

          {/* Categories Dropdowns */}
          {/* <div className="flex gap-4 w-full md:w-auto">
            <select className="w-full md:w-auto bg-[#F55D3E1A] text-white rounded-md py-2 px-4">
              <option className="">Categories</option>
            </select>
          </div> */}
        </div>

        {/* Tabs */}
        <div role="tablist" className="flex flex-wrap gap-3 w-full">
          <button
            role="tab"
            aria-selected={activeTab === null}
            onClick={() => setActiveTab(null)}
            className={`w-full md:w-auto min-w-[200px] px-6 py-3 font-bold rounded-md text-base text-center transition-colors ${
              activeTab === null
                ? "bg-[#F55D3E] text-white"
                : "bg-[#F55D3E1A] text-[#F55D3E] hover:bg-[#F55D3E33]"
            }`}
          >
            All
          </button>

          {Blogcategory.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full md:w-auto min-w-[200px] px-6 py-3 font-bold rounded-md text-base text-center transition-colors ${
                activeTab === tab.id
                  ? "bg-[#F55D3E] text-white"
                  : "bg-[#F55D3E1A] text-[#F55D3E] hover:bg-[#F55D3E33]"
              }`}
            >
              {tab.category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid - FIXED IMAGE CONTAINER */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayBlogs.map((blog: Blogs) => (
          <div
            key={blog.id}
            className="bg-[#2A2A2A] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
          >
            {/* Rest of your blog card JSX remains the same */}
            <div className="w-full aspect-video relative overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.alt_img_text || blog.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                {stripHtmlAndTruncate(blog.description)}
              </p>
              <div className="mt-auto pt-2">
                <Link href={`/blogdetails/${blog.id}`} passHref>
                  <button className="text-[#FF5733] text-sm flex items-center gap-2 hover:text-[#FF4522] transition-colors">
                    Read More <span>→</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {displayBlogs.length === 0 && (
        <div className="text-center text-gray-400 py-8">
          <p>No blogs found for the selected category.</p>
        </div>
      )}
      {/* Counselling CTA Section */}
      <div className="relative w-full rounded-xl overflow-hidden bg-gradient-to-r from-[#2A1810] to-[#3A2820] p-8 md:p-12 mt-4">
        {/* Content Container */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="z-10 max-w-xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              <span className="text-[#FF5733] font-serif italic">
                Talk To Our Mentors
              </span>
              <br />
              <span className="text-white font-serif italic">
                For Free Counselling
              </span>
            </h2>
            <Link href="/careercounseling" passHref>
              <button className="bg-[#FF5733] text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-[#E64A2E] transition-colors mt-4">
                Lets Talk
                <span className="text-lg">→</span>
              </button>
            </Link>
          </div>

          {/* Image Group */}
          <div className="relative mt-8 md:mt-0">
            <Image
              src="/groupphotopopularcourse.png"
              alt="Our Mentors"
              width={500}
              height={300}
              className="w-full md:w-[500px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
