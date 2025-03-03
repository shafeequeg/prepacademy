"use client"

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const PrepAcademyTransform = () => {
  const gladiators = [
    {
      name: 'Dr. Swati A. Mishra',
      title: 'Director Operations Lucknow Centre',
      image: '/gladiators/gladiator1.jpg'
    },
    {
      name: 'Ashutosh Mishra',
      title: 'Master IIM Ahmedabad',
      image: '/gladiators/gladiator2.webp'
    },
    {
      name: 'Deepak Kushwaha',
      title: 'Master IIM Lucknow',
      image: '/gladiators/gladiator3.jpg'
    },
    {
      name: 'Raghav Shukla',
      title: 'Co-Founder @ CAT Tutorials',
      image: '/gladiators/gladiator4.jpg'
    },
    {
      name: 'Nikhil Bhalla',
      title: 'CEO @ CATTutorials',
      image: '/gladiators/gladiator5.jpg'
    },
    {
      name: 'Taruna B. Khanna',
      title: '23 Years EXPERIENCED Certified Trainer VARC/DM/GWPI',
      image: '/gladiators/gladiator6.png'
    },
    {
      name: 'Nitin Kukreja',
      title: 'IIM Raipur',
      image: '/gladiators/gladiator7.webp'
    },
    {
      name: 'Kavya Narayani',
      title: '22 Years Experienced VARC Mentor',
      image: '/gladiators/gladiator8.jpg'
    },
    {
      name: 'Rahul',
      title: '15 Years Experience General Awareness and Innovation and Entrepreneurship Expert',
      image: '/gladiators/gladiator9.jpg'
    },
    {
      name: 'Ashutosh Mishra',
      title: 'Master IIM Ahmedabad',
      image: '/gladiators/gladiator10.png'
    },
    {
      name: 'Deepak Kushwaha',
      title: 'Master IIM Lucknow',
      image: '/gladiators/gladiator11.png'
    }

  ];

  // For carousel functionality - fixed TypeScript type
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        setActiveIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % Math.ceil(gladiators.length / 4);
          // Only scroll if the ref exists
          if (carouselRef.current) {
            const slideWidth = carouselRef.current.offsetWidth;
            carouselRef.current.scrollTo({
              left: newIndex * slideWidth,
              behavior: 'smooth'
            });
          }
          return newIndex;
        });
      }
    }, 3000); // Change slide every 3 seconds
  
    return () => clearInterval(interval);
  }, [gladiators.length]);
  return (
    <div className="w-full bg-black text-white">
      {/* Transform Section */}
      <section className="bg-gradient-to-b py-10 md:py-14 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          
          {/* Content */}
          <div className="w-full md:w-3/5 mb-8 md:mb-0 md:pr-6">
            <h2 className="font-serif italic text-[#FF6B45] text-3xl md:text-4xl mb-2">
              We Don&apos;t Just Teach
            </h2>

            <h3 className="font-serif italic text-3xl md:text-4xl font-bold mb-5">We Transform!</h3> 

            <p className="text-gray-300 text-base md:text-lg mb-6 max-w-lg">
              Welcome to Prep Academy - where dreams take flight and success isn&apos;t just a destination, 
              but a way of learning. Whether you&apos;re chasing the CAT, MAT, GMAT, XAT, SAT, or CSAT dream, 
              we&apos;ve got your back with experienced mentors, smart strategies, and a learning experience 
              that&apos;s anything but ordinary.
            </p>

            <ul className="space-y-2">
              {[
                "No Boring Lectures",
                "No One-Size-Fits-All Learning",
                "No More Guesswork",
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <div
                    className="w-4 h-4 rounded-full flex-shrink-0 mr-2"
                    style={{
                      backgroundImage: "url('/aboutusverified.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <span className="text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mascot Image */}
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-8 relative bg-[url('/bannerround.png')] bg-cover bg-center bg-no-repeat">
            <div className="relative w-72 h-[26rem] md:w-[26rem] md:h-[30rem]">
              <Image
                src="/prepbannerlogo.png"
                alt="Prep Academy Mascot"
                layout="fill"
                objectFit="contain"
                priority
                className="mt-20"
              />
            </div>

            {/* Text Overlay */}
            <div className="absolute w-full top-full mt-0">
              <div className="absolute w-full right-3/4 transform -translate-x-1/2 -translate-y-1/2 
                          bg-gradient-to-r from-[#2A1810] to-[#3A2820] bg-opacity-90 text-center
                          border-l-4 border-[#FF6B45] rounded-lg overflow-hidden
                          shadow-lg px-6 py-4 mb-3">
                <p className="relative z-10">
                  <span className="block text-[#FF6B45] font-bold text-xs md:text-base mb-1">
                    At Prep Academy, We Turn Preparation Into An Adventure.
                  </span>
                  <span className="inline-block text-amber-300 font-extrabold text-sm md:text-lg mt-1 animate-pulse">
                    Are You Ready?
                  </span>
                </p>
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#FF6B45] opacity-10 rounded-full -mr-8 -mt-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-amber-300 opacity-10 rounded-full -ml-6 -mb-6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gladiators Section */}
      <section className="w-full bg-gradient-to-b from-[#1a0e0e] to-[#241010] py-20 px-8 relative">
  {/* Section Header - Updated for Responsive Layout */}
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left mt-8 px-8">
    {/* Left Side - Title & Subtitle */}
    <div className="flex items-center">
      <h2 className="font-serif italic text-[#FF6B45] text-2xl md:text-3xl md:mr-3">
        Meet Your Exam <br /><span className='text-3xl md:text-5xl font-bold text-white'>Gladiators</span>
      </h2>
    </div>

    {/* Right Side - Description */}
    <h4 className="text-gray-300 text-sm md:text-lg max-w-md md:max-w-lg md:text-right mt-4 md:mt-0">
      Behind every student&apos;s success is a passionate, experienced, and dedicated educator who&apos;s cracked the toughest exams themselves.
    </h4>
  </div>

  {/* Gladiators Carousel - Updated to show 4 in a row */}
 {/* Gladiators Carousel - Updated to show 4 in a row */}
<div className="max-w-7xl mx-auto mt-20 overflow-hidden relative">
  <div 
    ref={carouselRef}
    className="flex transition-transform duration-500 ease-in-out overflow-x-hidden"
    style={{
      scrollSnapType: 'x mandatory',
      msOverflowStyle: 'none',  // Hide scrollbar in IE/Edge
      scrollbarWidth: 'none'    // Hide scrollbar in Firefox
    }}
  >
    {/* Hide scrollbar in WebKit browsers (Chrome, Safari) */}
    <style jsx>{`
      div::-webkit-scrollbar {
        display: none;
      }
    `}</style>

    {/* Group gladiators into sets of 4 */}
    {Array.from({ length: Math.ceil(gladiators.length / 4) }).map((_, groupIndex) => (
  <div 
    key={groupIndex} 
    className="min-w-full flex justify-center px-4 flex-nowrap"
    style={{ scrollSnapAlign: 'start' }}
  >
    {/* Display 4 gladiators per slide */}
    {gladiators.slice(groupIndex * 4, groupIndex * 4 + 4).map((gladiator, index) => (
      <div 
        key={index} 
        className="w-1/4 px-2"
      >
        <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-b from-[#1a0e0e] to-[#241010] shadow-lg w-full">
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative overflow-hidden rounded-full mb-4">
            <Image
              src={gladiator.image}
              alt={gladiator.name}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <h4 className="font-semibold text-sm md:text-lg text-white text-center">{gladiator.name}</h4>
          <p className="text-[#FF6B45] text-xs md:text-sm text-center">{gladiator.title}</p>
        </div>
      </div>
    ))}
  </div>
))}

  </div>
  
  {/* Carousel Indicators - Updated for groups of 4 */}
  <div className="flex justify-center mt-8 space-x-2">
  {Array.from({ length: Math.ceil(gladiators.length / 4) }).map((_, index) => (
    <button
      key={index}
      onClick={() => {
        setActiveIndex(index);
        if (carouselRef.current) {
          const slideWidth = carouselRef.current.offsetWidth;
          carouselRef.current.scrollTo({
            left: index * slideWidth,
            behavior: 'smooth'
          });
        }
      }}
      className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-[#FF6B45]' : 'bg-gray-500'}`}
      aria-label={`Go to slide ${index + 1}`}
    />
  ))}
</div>

</div>

</section>

      <div className="w-full bg-[#1a0e0e] py-4">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center items-center text-white text-sm md:text-base">
          
          <span className="mx-2 flex items-center">
            Top-Ranked Faculty
            <span 
              className="w-4 h-4 bg-contain bg-no-repeat bg-center ml-2" 
              style={{ backgroundImage: "url(/lightning.svg)" }} 
            ></span>
          </span>

          <span className="mx-2 flex items-center">
            Master Trainers
            <span 
              className="w-4 h-4 bg-contain bg-no-repeat bg-center ml-2" 
              style={{ backgroundImage: "url(/lightning.svg)" }} 
            ></span>
          </span>

          <span className="mx-2 flex items-center">
            Gurus
            <span 
              className="w-4 h-4 bg-contain bg-no-repeat bg-center ml-2" 
              style={{ backgroundImage: "url(/lightning.svg)" }} 
            ></span>
          </span>

          <span className="mx-2 flex items-center">
            One-On-One Mentorship
            <span 
              className="w-4 h-4 bg-contain bg-no-repeat bg-center ml-2" 
              style={{ backgroundImage: "url(/lightning.svg)" }} 
            ></span>
          </span>

          <span className="mx-2 flex items-center">
            Zero Sugarcoating
            <span 
              className="w-4 h-4 bg-contain bg-no-repeat bg-center ml-2" 
              style={{ backgroundImage: "url(/lightning.svg)" }} 
            ></span>
          </span>

          <span className="mx-2 flex items-center">
            Brutal Honesty & Proven Strategies
            <span 
              className="w-4 h-4 bg-contain bg-no-repeat bg-center ml-2" 
              style={{ backgroundImage: "url(/lightning.svg)" }} 
            ></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PrepAcademyTransform;