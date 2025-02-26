"use client";

import React from "react";
import Link from "next/link";

// Simple Search Icon Component
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

const BlogSection = () => {


  const blogs = [
    {
      id: 1,
      title: "Strategies for CAT 2025",
      description: "Preparing for the CAT 2025 exam is a significant step to...",
      image: "/blogcommonimage.png",
    },
    {
      id: 2,
      title: "Ace the CAT Essential",
      description: "Preparing for the CAT 2025 exam is a significant step to...",
      image: "/blogcommonimage.png",
    },
    {
      id: 3,
      title: "How to Crack CAT?",
      description: "Preparing for the CAT 2025 exam is a significant step to...",
      image: "/blogcommonimage.png",
    },
    // Duplicate entries for the grid
  ].concat([...Array(6)].map((_, i) => ({
    id: i + 4,
    title: ["Strategies for CAT 2025", "Ace the CAT Essential", "How to Crack CAT?"][i % 3],
    description: "Preparing for the CAT 2025 exam is a significant step to...",
    image: ["/blogcommonimage.png", "/blogcommonimage.png", "/blogcommonimage.png"][i % 3],
  })));


  return (
    <div className="w-full bg-[#1A1A1A] min-h-screen mt-28 p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-white text-2xl font-semibold ">
        <span className='font-dmserif italic'>  Recent</span>   <span className="text-[#FF5733]">Blogs</span>
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
        className="w-full bg-[#F55D3E1A] text-white rounded-md py-2 pl-4 pr-10"
      />
      <div className="absolute right-3 top-2.5">
        <SearchIcon />
      </div>
    </div>

    {/* Categories Dropdowns */}
    <div className="flex gap-4 w-full md:w-auto">
      <select className="w-full md:w-auto bg-[#F55D3E1A] text-white rounded-md py-2 px-4">
        <option>Categories</option>
      </select>
      {/* <select className="w-full md:w-auto bg-[#F55D3E1A] text-white rounded-md py-2 px-4">
        <option>Categories</option>
      </select> */}
    </div>
  </div>

  {/* Tags */}
  <div className="flex flex-wrap gap-3 w-full">
  {[
    "Success Stories",
    "Exam Strategies",
    "Popular Articles",
    "Latest Updates & Notification",
    "Study Plans & Tips",
    "Entrance Exams"
  ].map((tag) => (
    <button
      key={tag}
      className="w-full md:w-auto min-w-[200px] bg-[#F55D3E1A] text-[#F55D3E] px-6 py-3  font-bold rounded-md text-base text-center hover:bg-[#F55D3E33] transition-colors"
    >
      {tag}
    </button>
  ))}
</div>

</div>



      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-[#2A2A2A] rounded-lg overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-white font-semibold text-lg mb-2">{blog.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{blog.description}</p>
              <Link href="/blogdetails">
                <button className="text-[#FF5733] text-sm flex items-center gap-2 hover:text-[#FF4522] transition-colors">
                  Read More <span>→</span>
                </button>
              </Link>
             
            </div>
          </div>
        ))}
      </div>

      <div className="relative w-full rounded-xl overflow-hidden bg-gradient-to-r from-[#2A1810] to-[#3A2820] p-8 md:p-12 mt-4">
        {/* Content Container */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="z-10 max-w-xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              <span className="text-[#FF5733] font-serif italic">Talk To Our Mentors</span>
              <br />
              <span className="text-white font-serif italic">For Free Counselling</span>
            </h2>
            <button className="bg-[#FF5733] text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-[#E64A2E] transition-colors mt-4">
              Lets Talk
              <span className="text-lg">→</span>
            </button>
          </div>

          {/* Image Group */}
          <div className="relative mt-8 md:mt-0">
            <img
              src="/groupphotopopularcourse.png"
              alt="Our Mentors"
              className="w-full md:w-[500px] h-auto object-contain"
            />
            {/* Badge */}
        
          </div>
        </div>
       </div>

    </div>
  );
};

export default BlogSection;