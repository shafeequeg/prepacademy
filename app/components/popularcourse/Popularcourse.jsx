import React from 'react';

const PopularCourses = () => {
  const courses = [
    'MBA', 'NID', 'NIFT', 'NATA', 'CLAT', 'KLEE', 'CUET', 'SAT', 'NDA'
  ];

  const features = [
    'Dynamic Live Sessions',
    '1000+ Targeted Questions',
    '20 Simulated Mock Tests',
    'Personalized Learning Path'
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 text-white">
      {/* Popular Courses Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-8">
          <span className="text-[#F55D3E]">Our Popular</span> Courses
        </h2>
        
        {/* Course Navigation */}
        <div className="flex flex-wrap gap-4 mb-8">
          {courses.map((course) => (
            <button
              key={course}
              className="px-4 py-2 text-white hover:text-[#F55D3E] transition-colors"
            >
              {course}
            </button>
          ))}
        </div>

        {/* Course Info Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-300">
              The Master of Business Administration (MBA) is a highly sought-after
              qualification with entrance exams in India being extremely competitive. These
              exams serve as gateways to prestigious B-Schools across the country and
              internationally. Popular exams include CAT, XAT, GMAT, and CMAT, with the
              CAT being especially challenging due to limited seats and a vast pool of
              applicants.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-[#F55D3E] hover:bg-[#a52a1a] rounded-md transition-colors">
                Apply Now
              </button>
              <button className="px-6 py-2 border border-[#F55D3E] text-[#F55D3E] hover:bg-[#F55D3E] hover:text-white rounded-md transition-colors">
                Know More
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[#F55D3E] text-xl font-semibold">Exams and Criteria</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• The Common Admission Test is the gateway for admissions to the MBA programs at top B-schools in India.</li>
              <li>• Candidates must possess an undergraduate degree to be eligible for CAT 2025. The minimum grade point average should be 50% (45% for students in reserved categories).</li>
              <li>• To appear for the exam, candidates must register within the given deadline and download the CAT 2025 admit card for details about the venue, time, and slot.</li>
              <li>• Taking coaching classes, giving mock exams, and relevant study materials can help candidates prepare for the exam.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gradient-to-r from-[#402424] to-[#723232] rounded-lg mt-12 p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              <span className="text-[#F55D3E]">Our Team Of Expert Educators</span>
              <br />Will Always Be There For You
            </h2>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="text-[#F55D3E]">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Images stacked one by one */}
          <div className="flex flex-col items-center gap-4">
            {/* Prep Academy Logo */}
            <div className="w-32 h-32">
              <img 
                src="/preplogopopularcourse.png" 
                alt="Prep Academy Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Team Photo */}
            <div className="w-full h-[280px] relative">
              <img 
                src="/groupphotopopularcourse.png" 
                alt="Team of Expert Educators" 
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#723232]/50 rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/4 mx-auto mt-12 grid md:grid-cols-[2fr_1fr] gap-8 bg-[#2B1615] rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="p-8 space-y-4">
          <button className="px-4 py-1 bg-[#3A1F1D] text-[#F55D3E] rounded-full text-sm">
            Get Early Access
          </button>
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">
              <span className="text-[#F55D3E]">Looking For The Best</span>
              <br />Educational Academy
              <br />Near You?
            </h2>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-[#F55D3E] p-6 flex flex-col items-center justify-center text-center">
          <h3 className="text-2xl font-bold mb-4">
            Join the
            <br />Summer
            <br />Bootcamp
          </h3>
          <div className="w-24 h-24 mb-4">
            <img
              src="/charater2.png"
              alt="Prep Academy Mascot"
              className="w-full h-full object-contain"
            />
          </div>
          <button className="px-6 py-2 bg-white text-[#F55D3E] rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
            JOIN NOW
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default PopularCourses;
