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

  const gladiatorssecond = [
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
  const carouselRefsecond = useRef<HTMLDivElement>(null);

  // Active indices for both carousels
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndexsecond, setActiveIndexsecond] = useState(0);

  // Total slides for both carousels
  const totalSlides = Math.ceil(gladiators.length / 4);
  const totalSlidessecond = Math.ceil(gladiatorssecond.length / 4);

  
  // Auto-scroll effect
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (carouselRef.current) {
  //       setActiveIndex((prevIndex) => {
  //         const newIndex = (prevIndex + 1) % Math.ceil(gladiators.length / 4);
  //         // Only scroll if the ref exists
  //         if (carouselRef.current) {
  //           const slideWidth = carouselRef.current.offsetWidth;
  //           carouselRef.current.scrollTo({
  //             left: newIndex * slideWidth,
  //             behavior: 'smooth'
  //           });
  //         }
  //         return newIndex;
  //       });
  //     }
  //   }, 10000); // Change slide every 3 seconds
  
  //   return () => clearInterval(interval);
  // }, [gladiators.length]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const newIndex = (activeIndex - 1 + totalSlides) % totalSlides;
      setActiveIndex(newIndex);
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: newIndex * slideWidth,
        behavior: "smooth",
      });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (carouselRef.current) {
      const newIndex = (activeIndex + 1) % totalSlides;
      setActiveIndex(newIndex);
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: newIndex * slideWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollLeftsecond = () => {
    if (carouselRefsecond.current) {
      const newIndex = (activeIndexsecond - 1 + totalSlidessecond) % totalSlidessecond;
      setActiveIndexsecond(newIndex);
      const slideWidth = carouselRefsecond.current.offsetWidth;
      carouselRefsecond.current.scrollTo({
        left: newIndex * slideWidth,
        behavior: "smooth",
      });
    }
  };

  // Scroll right for the second carousel
  const scrollRightsecond = () => {
    if (carouselRefsecond.current) {
      const newIndex = (activeIndexsecond + 1) % totalSlidessecond;
      setActiveIndexsecond(newIndex);
      const slideWidth = carouselRefsecond.current.offsetWidth;
      carouselRefsecond.current.scrollTo({
        left: newIndex * slideWidth,
        behavior: "smooth",
      });
    }
  };


  return (
    <div className="w-full bg-black text-white">
      {/* Transform Section */}
      <section className="bg-gradient-to-b py-10 md:py-14 px-4 md:px-8">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
    
    {/* Content */}
    <div className="w-full md:w-3/5 mb-8 md:mb-0 md:pr-6 mt-10">
      <h2 className="font-serif italic text-[#FF6B45] text-3xl md:text-4xl mb-2">
        We Don&apos;t Just Teach
      </h2>

      <h3 className="font-serif italic text-3xl md:text-4xl font-bold mb-5">
        We Transform!
      </h3> 

      <p className="text-gray-300 text-base md:text-lg mb-6 max-w-lg">
        At Prep Academy, we go beyond traditional teaching methods—we ignite curiosity, 
        inspire excellence, and empower students to achieve their full potential. Our goal isn&apos;t 
        just to help students pass exams but to transform their learning experience, sharpen their problem-solving skills,
        and equip them with the confidence to excel in competitive exams like 
        CAT, CLAT, CUET, IPM, XAT, MAT, CMAT, KMAT, KLEE, NID, NIFT, NATA, NDA, SAT, GRE, and GMAT etc…
      </p>

      <ul className="space-y-1">
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
      <div className="relative w-72 h-[30rem] md:w-[30rem] md:h-[34rem]">
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
      <div className="absolute w-full top-full mb-0">
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
             Meet Your Exam <br />
             <span className="text-3xl md:text-5xl font-bold text-white">Gladiators</span>
           </h2>
         </div>
     
         {/* Right Side - Description */}
         <h4 className="text-gray-300 text-sm md:text-lg max-w-md md:max-w-lg md:text-right mt-4 md:mt-0 leading-tight whitespace-pre-line">
           Behind every student&apos;s success are passionate, experienced educators who&apos;ve cracked the toughest exams.
         </h4>
       </div>
     
       {/* Gladiators Carousel - Updated to show 4 in a row */}
       <div className="max-w-7xl mx-auto mt-20 overflow-hidden relative px-12">
         {/* Left Scroll Button */}
         <button
           onClick={scrollLeft}
           className="absolute left-4 top-[40%] -translate-y-1/2 z-10 bg-[#FF6B45] text-white rounded-full p-2 shadow-lg hover:bg-[#E55A35] transition"
           aria-label="Scroll left"
         >
           <svg
             xmlns="http://www.w3.org/2000/svg"
             className="h-6 w-6"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
           >
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
           </svg>
         </button>
     
         {/* Carousel Container */}
         <div
           ref={carouselRef}
           className="flex transition-transform duration-300 ease-in-out overflow-x-hidden"
           style={{
             scrollSnapType: "x mandatory",
             msOverflowStyle: "none", // Hide scrollbar in IE/Edge
             scrollbarWidth: "none", // Hide scrollbar in Firefox
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
               style={{ scrollSnapAlign: "start" }}
             >
               {/* Display 4 gladiators per slide */}
               {gladiators.slice(groupIndex * 4, groupIndex * 4 + 4).map((gladiator, index) => (
                 <div key={index} className="w-1/4 px-2">
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
                     <h4 className="font-semibold text-sm md:text-lg text-white text-center">
                       {gladiator.name}
                     </h4>
                     <p className="text-[#FF6B45] text-xs md:text-sm text-center">{gladiator.title}</p>
                   </div>
                 </div>
               ))}
             </div>
           ))}
         </div>
     
         {/* Right Scroll Button */}
         <button
           onClick={scrollRight}
           className="absolute right-4 top-[40%] -translate-y-1/2 z-10 bg-[#FF6B45] text-white rounded-full p-2 shadow-lg hover:bg-[#E55A35] transition"
           aria-label="Scroll right"
         >
           <svg
             xmlns="http://www.w3.org/2000/svg"
             className="h-6 w-6"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"

           >
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
           </svg>
         </button>
       </div>

       <div className="max-w-7xl mx-auto mt-20 overflow-hidden relative px-12">
          <button
            onClick={scrollLeftsecond}
            className="absolute left-4 top-[40%] -translate-y-1/2 z-10 bg-[#FF6B45] text-white rounded-full p-2 shadow-lg hover:bg-[#E55A35] transition"
            aria-label="Scroll left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div
            ref={carouselRefsecond}
            className="flex transition-transform duration-300 ease-in-out overflow-x-hidden"
            style={{
              scrollSnapType: "x mandatory",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {Array.from({ length: Math.ceil(gladiatorssecond.length / 4) }).map((_, groupIndex) => (
              <div
                key={groupIndex}
                className="min-w-full flex justify-center px-4 flex-nowrap"
                style={{ scrollSnapAlign: "start" }}
              >
                {gladiatorssecond.slice(groupIndex * 4, groupIndex * 4 + 4).map((gladiator, index) => (
                  <div key={index} className="w-1/4 px-2">
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
                      <h4 className="font-semibold text-sm md:text-lg text-white text-center">
                        {gladiator.name}
                      </h4>
                      <p className="text-[#FF6B45] text-xs md:text-sm text-center">{gladiator.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <button
            onClick={scrollRightsecond}
            className="absolute right-4 top-[40%] -translate-y-1/2 z-10 bg-[#FF6B45] text-white rounded-full p-2 shadow-lg hover:bg-[#E55A35] transition"
            aria-label="Scroll right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        { /* Carousel Indicators */ }
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(gladiatorssecond.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndexsecond(index);
                if (carouselRefsecond.current) {
                  const slideWidth = carouselRefsecond.current.offsetWidth;
                  carouselRefsecond.current.scrollTo({
                    left: index * slideWidth,
                    behavior: "smooth",
                  });
                }
              }}
              className={`w-3 h-3 rounded-full ${
                activeIndexsecond === index ? "bg-[#FF6B45]" : "bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
     
       {/* Carousel Indicators - Updated for groups of 4 */}
       <div className="flex justify-center mt-8 space-x-2">
         {Array.from({ length: Math.ceil(gladiatorssecond.length / 4) }).map((_, index) => (
           <button
             key={index}
             onClick={() => {
              setActiveIndexsecond(index);
               if (carouselRefsecond.current) {
                 const slideWidth = carouselRefsecond.current.offsetWidth;
                 carouselRefsecond.current.scrollTo({
                   left: index * slideWidth,
                   behavior: "smooth",
                 });
               }
             }}
             className={`w-3 h-3 rounded-full ${
              activeIndexsecond === index ? "bg-[#FF6B45]" : "bg-gray-500"
             }`}
             aria-label={`Go to slide ${index + 1}`}
           />
         ))}
       </div>
     </section> 
     

<div className="w-full bg-[#1a0e0e] py-6">
        <div className="max-w-screen-2xl mx-auto px-4 flex flex-row flex-wrap justify-center items-center text-white text-sm md:text-base lg:text-lg">
          <div className="flex flex-row items-center justify-center flex-wrap gap-x-6 gap-y-2">
            <div className="flex items-center space-x-2">
              <span 
                className="w-5 h-5 md:w-6 md:h-6 bg-contain bg-no-repeat bg-center" 
                style={{ backgroundImage: "url(/lightning.svg)" }} 
              ></span>
              <span className="whitespace-nowrap font-medium">
                Top-Ranked Faculty
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span 
                className="w-5 h-5 md:w-6 md:h-6 bg-contain bg-no-repeat bg-center" 
                style={{ backgroundImage: "url(/lightning.svg)" }} 
              ></span>
              <span className="whitespace-nowrap font-medium">
                Master Trainers
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span 
                className="w-5 h-5 md:w-6 md:h-6 bg-contain bg-no-repeat bg-center" 
                style={{ backgroundImage: "url(/lightning.svg)" }} 
              ></span>
              <span className="whitespace-nowrap font-medium">
                Gurus
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span 
                className="w-5 h-5 md:w-6 md:h-6 bg-contain bg-no-repeat bg-center" 
                style={{ backgroundImage: "url(/lightning.svg)" }} 
              ></span>
              <span className="whitespace-nowrap font-medium">
                One-On-One Mentorship
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span 
                className="w-5 h-5 md:w-6 md:h-6 bg-contain bg-no-repeat bg-center" 
                style={{ backgroundImage: "url(/lightning.svg)" }} 
              ></span>
              <span className="whitespace-nowrap font-medium">
                Zero Sugarcoating
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span 
                className="w-5 h-5 md:w-6 md:h-6 bg-contain bg-no-repeat bg-center" 
                style={{ backgroundImage: "url(/lightning.svg)" }} 
              ></span>
              <span className="whitespace-nowrap font-medium">
                Brutal Honesty & Proven Strategies
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrepAcademyTransform;