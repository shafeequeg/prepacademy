"use client";

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";


const SaveStudyTime = () => {

  const [isStatsVisible, setIsStatsVisible] = useState(false);

  const statsRef = useRef(null);

   useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          setIsStatsVisible(entry.isIntersecting);
        },
        { threshold: 0.1 } 
      );
    
      if (statsRef.current) {
        observer.observe(statsRef.current);
      }
    
      return () => {
        if (statsRef.current) {
          observer.unobserve(statsRef.current);
        }
      };
    }, []);

    const formatNumber = (number : number) : string => {
      if (number >= 10000000) {
        return `${(number / 10000000).toFixed(0)}Cr+`;
      } else if (number >= 100000) {
        return `${(number / 100000).toFixed(0)}Lakh+`;
      } else if (number >= 1000) {
        return `${(number / 1000).toFixed(0)}K+`;
      }
      return number.toString();
    };
    
  const stats = [
    {
      number: 2000000, 
      label: "Users Worldwide",
    },
    {
      number: 20000000,
      label: "Hours of Classes",
    },
    {
      number: 80000, 
      label: "Students Passed",
    },
    {
      number: 15, 
      label: "Years Legacy",
    },
  ];


  return (
    <section className="bg-gradient-to-r from-[#2B1615] to-[#1A0F0E] text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-24 mx-auto max-w-4xl">
  {/* Left Side - Text Content */}
  <div className="w-full md:w-[85%] text-center md:text-left">
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      <span className="text-[#F55D3E] font-dmserif italic">Save Study Time <br /></span> 
      <span className="text-white">upto 40%</span>
    </h2>
  </div>

  {/* Right Side - Paragraph Content */}
  <div className="w-full md:w-[95%] text-center md:text-left">
    <p className="text-lg md:text-xl text-gray-300 mb-6">
      Optimize your study routine with our efficient methods, saving you
      up to 40% of study time while boosting productivity and retention.
    </p>
  </div>
</div>


        {/* Right Side - Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8"
         ref={statsRef} 

        >
          {/* {stats.map((stat, index) => (
            <div
              key={index}
              className="h-52 bg-[#1A0F0E] rounded-lg flex flex-col items-center justify-center text-center hover:bg-[#2B1615] transition-all duration-300 border-l-4 border-[#F55D3E]"
            >
              <span className="text-[#F55D3E] text-3xl font-bold">
                <CountUp start={0} end={stat.number} duration={20} separator="," />
              </span>
              <span className="text-gray-300 text-sm">{stat.label}</span>
            </div>
          ))} */}

{stats.map((stat, index) => (
    <div 
      key={index} 
      className="flex flex-col items-center justify-center text-center border-l-4 border-[#F55D3E] pl-4 rounded-l-md"
    >
      <span className="text-[#F55D3E] text-5xl font-bold mb-2">
        {isStatsVisible && (
          <CountUp 
            start={0} 
            end={stat.number} 
            duration={8.5} 
            separator="," 
            useEasing={true}
            redraw={false}
            formattingFn={formatNumber} // Apply formatting here
          />
        )}
      </span>
      <span className="text-gray-300 text-lg">{stat.label}</span>
    </div>
  ))}
        </div>

      </div>
    </section>
  );
};

export default SaveStudyTime;
