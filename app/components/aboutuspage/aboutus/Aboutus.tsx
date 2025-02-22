import React from 'react';
import Image from 'next/image';

const PrepAcademyTransform = () => {
  const gladiators = [
    {
      name: 'Maria Thomas',
      title: 'CAT Analyst',
      image: '/gladiator1.png'
    },
    {
      name: 'Jeffin George',
      title: 'CAT Attempt',
      image: '/gladiator.png'
    },
    {
      name: 'Rose Alvez',
      title: 'CAT Architect',
      image: '/gladiator3.png'
    },
    {
      name: 'Raj Takur',
      title: 'CAT Method',
      image: '/gladiator4.png'
    }
  ];

  return (
    <div className="w-full bg-black text-white">
      {/* Transform Section */}
      <section className="bg-gradient-to-b py-12 md:py-16 px-6 md:px-10">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
    
    {/* Content */}
    <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-8">
    <h2 className="font-serif italic text-[#FF6B45] text-2xl md:text-3xl mb-2">
  We Don&apos;t Just Teach
</h2>

      <h3 className="text-2xl md:text-4xl font-bold mb-6">We Transform!</h3>
      <p className="text-gray-300 text-sm md:text-base mb-8 max-w-lg">
  Welcome to Prep Academy - where dreams take flight and success isn&apos;t just a destination, 
  but a way of learning. Whether you&apos;re chasing the CAT, MAT, GMAT, XAT, SAT or CSAT dream, 
  we&apos;ve got your back with experienced mentors, smart strategies, and a learning experience 
  that&apos;s anything but ordinary.
</p>

      <ul className="space-y-3">
        {[
          "No Boring Lectures",
          "No One-Size-Fits-All Learning",
          "No More Guesswork",
        ].map((feature, index) => (
          <li key={index} className="flex items-center">
            <div
              className="w-5 h-5 rounded-full flex-shrink-0 mr-3"
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
    <div 
      className="w-full md:w-1/2 flex justify-center mt-8 md:mt-10 relative bg-[url('/bannerround.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="relative w-80 h-[28rem] md:w-[28rem] md:h-[32rem]">
        
        {/* New p tag for the text overlay */}
       

        <Image
          src="/prepbannerlogo.png"
          alt="Prep Academy Mascot"
          layout="fill"
          objectFit="contain"
          priority
          className="mt-24"
        />


      </div>

      <div className="absolute w-full top-full mt-11">
      <p className="absolute w-full  left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      bg-[#2A1810] bg-opacity-80 text-[#FF6B45] text-sm md:text-base 
                      px-4 py-2 rounded-lg text-center">
          At Prep Academy, We Turn Preparation Into An Adventure. <b>Are You Ready?</b>
        </p>
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
      {/* <h3 className="text-3xl md:text-5xl font-bold text-white">
        Gladiators
      </h3> */}
    </div>

    {/* Right Side - Description */}
    <h5 className="text-gray-300 text-sm md:text-base max-w-md md:max-w-lg md:text-right mt-4 md:mt-0">
  Behind every student&apos;s success is a passionate, experienced, and dedicated educator who&apos;s cracked the toughest exams themselves.
</h5>
  </div>

  {/* Gladiators Grid */}
  <div className="max-w-7xl mx-auto mt-20">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      {gladiators.map((gladiator, index) => (
        <div key={index} className="flex flex-col items-center p-8 rounded-lg bg-gradient-to-b from-[#1a0e0e] to-[#241010] shadow-lg">
          <div className="w-52 h-52 relative overflow-hidden rounded-full mb-6">
            <Image
              src={gladiator.image}
              alt={gladiator.name}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <h4 className="font-semibold text-xl text-white">{gladiator.name}</h4>
          <p className="text-[#FF6B45] text-sm">{gladiator.title}</p>
        </div>
      ))}
    </div>
    {/* Additional Information Section */}


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