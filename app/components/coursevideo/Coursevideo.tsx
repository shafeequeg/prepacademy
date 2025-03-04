"use client";

import React from "react";

const CourseVideos = () => {
  const videos = [
    {
      title: "Preparing for the CAT 2025",
      url: "https://www.youtube.com/embed/Qiy4xihD_kM",
    },
    {
      title: "Best Coaching Centres",
      url: "https://www.youtube.com/embed/M33APKoNOqE",
    },
    {
      title: "How to Approach CAT Quantitative Ability",
      url: "https://www.youtube.com/embed/4g7cyj774_M",
    },
  ];
  

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-left text-white">
           <span className="font-dmserif italic">Course Related</span>  <span className="text-[#F55D3E]">Videos</span>
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Video Thumbnail (Placeholder) */}
              <div className="w-full h-48">
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>


              {/* Video Title (Heading) */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-white">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
      {/* View More Button */}
<div className="text-center mt-8 flex items-center justify-center">
  <a
    href="https://www.youtube.com/@PrepAcademy" // Replace with your actual channel link
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#F55D3E] text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#a52a1a] transition-colors"
  >
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
  </a>
</div>

      </div>

      {/* Read Features Section */}
      <div className="relative w-full bg-gradient-to-r from-[#2B1615] to-[#1A0F0E] bg-black mt-16 py-12">
  {/* Soft Overlay */}
  <div className="absolute pointer-events-none"></div>

  <div className="relative container mx-auto px-4 md:px-8">
    <div className="flex flex-col items-center">
      {/* Heading with Online in bold */}
      <h2 className="text-2xl md:text-3xl font-medium mb-12 relative z-10">
        <span className="text-[#F55D3E] font-dmserif italic">Read Features</span>
        <span className="text-white font-bold"> Online</span>
      </h2>

      {/* Logo Container */}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 relative z-10">
        {/* DailyHunt Logo */}
        <div className="flex items-center">
          <div className="h-20 w-px mr-4 hidden md:block"></div>
          <img 
            src="/dailyhunt.png"
            alt="DailyHunt logo" 
            className="h-20 md:h-26"
          />
        </div>

        {/* Business Standard Logo */}
        <div className="flex items-center">
          <div className="h-16 w-px mr-4 hidden md:block"></div>
          <img 
            src="/businessstandard.png"
            alt="Business Standard logo" 
            className="h-20 md:h-26"
          />
        </div>

        {/* AsiaNet News Logo */}
        <div className="flex items-center">
          <div className="h-16 w-px mr-4 hidden md:block"></div>
          <img 
            src="/asianetnews.png"
            alt="AsiaNet News logo" 
            className="h-20 md:h-26"
          />
        </div>

        {/* Mint Logo */}
        <div className="flex items-center">
          <div className="h-16 w-px mr-4 hidden md:block"></div>
          <img 
            src="/mint.png"
            alt="Mint logo" 
            className="h-20 md:h-26"
          />
        </div>
      </div>
    </div>
  </div>
</div>


    </section>
  );
};

export default CourseVideos;