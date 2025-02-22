"use client";

import React from "react";

const BlogsSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Strategies for CAT 2025",
      description: "Preparing for the CAT 2025 exam is a significant step to...",
      image: "/api/placeholder/400/240",
    },
    {
      id: 2,
      title: "Ace the CAT Essential",
      description: "Preparing for the CAT 2025 exam is a significant step to...",
      image: "/api/placeholder/400/240",
    },
    {
      id: 3,
      title: "How to Crack CAT?",
      description: "Preparing for the CAT 2025 exam is a significant step to...",
      image: "/api/placeholder/400/240",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-medium  text-center md:text-left">
           <span className="font-dmserif italic"> Know More With</span> <span className="text-[#F55D3E] font-bold not-italic">Blogs</span>
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Blog Image */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-white">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {blog.description}
                </p>

                {/* Read Full Button */}
                <a
                  href="#"
                  className="inline-flex items-center text-[#F55D3E] hover:text-[#FF7D5E] font-medium"
                >
                  Read Full
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center text-white hover:text-gray-200 font-medium"
          >
            View More
            <svg
              className="w-5 h-5 ml-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;