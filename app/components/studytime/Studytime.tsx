"use client";

import React from "react";

const SaveStudyTime = () => {
  const stats = [
    {
      number: "2L+",
      label: "Users Worldwide",
    },
    {
      number: "20L+",
      label: "Hours of Classes",
    },
    {
      number: "80K+",
      label: "Students Passed",
    },
    {
      number: "10+",
      label: "Years Legacy",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#2B1615] to-[#1A0F0E] text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side - Text Content */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#F55D3E] font-dmserif italic">Save Study Time <br /></span> <span className="text-white">upto 40%</span>
            </h2>
          </div>

          {/* Right Side - Paragraph Content */}
          <div className="w-full md:w-1/2">
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Optimize your study routine with our efficient methods, saving you
              up to 40% of study time while boosting productivity and retention.
            </p>
          </div>
        </div>

        {/* Right Side - Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
  {stats.map((stat, index) => (
    <div
      key={index}
      className="h-52 bg-[#1A0F0E] rounded-lg flex flex-col items-center justify-center text-center hover:bg-[#2B1615] transition-all duration-300 border-l-4 border-[#F55D3E]"
    >
      <span className="text-[#F55D3E] text-3xl font-bold">{stat.number}</span>
      <span className="text-gray-300 text-sm">{stat.label}</span>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default SaveStudyTime;
