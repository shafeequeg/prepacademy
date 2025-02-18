"use client";

import React from "react";

const CourseVideos = () => {
  const videos = [
    {
      title: "Preparing for the CAT 2025",
    },
    {
      title: "Best Coaching Centres",
    },
    {
      title: "How to Approach CAT Quantitative Ability",
    },
    // Add more videos as needed
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-left text-white">
            Course Related <span className="text-[#F55D3E]">Videos</span>
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className=" rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Video Thumbnail (Placeholder) */}
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600 text-lg">Video Thumbnail</span>
              </div>

              {/* Video Title (Heading) */}
              <div className="p-6">
                <h3 className="text-xl font-bold  mb-4 text-white">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8 flex items-center justify-center">
          <button className="bg-[#F55D3E] text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#a52a1a] transition-colors">
            View More
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseVideos;
