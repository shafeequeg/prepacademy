"use client"

import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Ensures CountUp starts once the component is mounted
  }, []);

 

  const benefitCards = [
    {
      title: 'Innovative Live Platform',
      description: 'Your CAT 2024 journey might seem daunting, but remember'
    },
    {
      title: 'State of The Operating System',
      description: 'Your CAT 2024 journey might seem daunting, but remember'
    },
    {
      title: 'Hybrid Model Coaching Program',
      description: 'Your CAT 2024 journey might seem daunting, but remember'
    },
    {
      title: 'Hybrid Model Coaching Program',
      description: 'Your CAT 2024 journey might seem daunting, but remember'
    }
  ];

  const stats = [
    {
      number: 80000000, // 8Cr+
      label: 'Questions Taken'
    },
    {
      number: 30000000, // 3Cr+
      label: 'Tests Taken'
    },
    {
      number: 42000, // 42K+
      label: 'Doubts Solved'
    }
  ];
 

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 text-white ">
      {/* Header Section */}
      <div className="w-full bg-[#2B1615] px-4 md:px-8 lg:px-16 py-12 rounded-md">
      <div 
  className="rounded-md p-6 relative mx-auto mb-12 w-[85%]"
  style={{
    background: "radial-gradient(circle, #4E211B 0%, #3A1511 50%, #321310 100%)"
  }}
>
  <div className="flex items-center justify-between">
    {/* Left Side (Heading & Button) */}
    <div className="flex flex-col items-start text-left">
      <h2 className="text-2xl md:text-3xl font-bold">
        <span className="text-[#F55D3E] italic font-medium">Register</span> 
        <span className="text-white"> and Get a Free Trial</span>
      </h2>
      <button className="mt-3 px-4 py-2 bg-[#F55D3E] text-white rounded text-sm font-medium hover:bg-[#E04D2E] flex items-center gap-1">
        JOIN NOW
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>

    {/* Right Side (Mascot Image) */}
    <div className="w-20 h-20">
      <img
        src="/charater2.png"
        alt="Prep Academy Mascot"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</div>
  <div className="grid md:grid-cols-2 gap-8 mb-12">
    <div>
      <h2 className="text-4xl font-bold">
        <span className="text-[#F55D3E] font-dmserif italic">Why Study with</span>
        <br />PrepAcademy?
      </h2>
    </div>
    <div>
      <p className="text-gray-300">
        Are you ready to conquer the world? Your CAT 2024 journey might seem daunting, but remember,
        every great achievement starts with a single step. Believe in yourself, because you hold the power to
        make your dreams a reality!
      </p>
    </div>
  </div>

  {/* Benefits Cards Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
    {benefitCards.map((card, index) => (
      <div 
        key={index}
        className="bg-gradient-to-b from-[#2B1615] to-[#1A0F0E] rounded-lg p-6 hover:from-[#3A1F1D] hover:to-[#2B1615] transition-all duration-300"
      >
        <h3 className="text-[#F55D3E] text-xl font-semibold mb-4">{card.title}</h3>
        <p className="text-gray-300">{card.description}</p>
      </div>
    ))}
  </div>

  {/* Registration Section */}
 

</div>

    

      {/* Statistics Section */}
      <div className="grid grid-cols-1 mt-10 md:grid-cols-3 gap-8 mb-12">
  {stats.map((stat, index) => (
    <div 
      key={index} 
      className="flex flex-col items-center justify-center text-center border-l-4 border-[#F55D3E] pl-4 rounded-l-md"
    >
      <span className="text-[#F55D3E] text-5xl font-bold mb-2">
        {isVisible && (
          <CountUp start={0} end={stat.number} duration={10} separator="," />
        )}
      </span>
      <span className="text-gray-300 text-lg">{stat.label}</span>
    </div>
  ))}
</div>



      {/* New Section - Full Width & Two Rows */}
    
    </div>
  );
};

export default Benefits;
