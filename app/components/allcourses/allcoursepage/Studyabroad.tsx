import Image from 'next/image';
import React from 'react';

interface CourseCard {
  title: string;
  description: string;
}

const StudyAbroadSection: React.FC = () => {
  const studyAbroadCards: CourseCard[] = [
    { title: 'IELTS', description: 'English proficiency test for study, work, and migration' },
    { title: 'SAT', description: 'Standardized test for college admissions, mainly in the U.S.' },
    { title: 'ACET', description: 'Entrance exam for admission into various universities' },
    { title: 'GRE', description: 'Graduate school admission test for various disciplines' },
    { title: 'GMAT', description: 'Global entrance exam for MBA and business programs' }
  ];

  const careerCounselingCards: CourseCard[] = [
    { title: 'Resume Building', description: 'Craft a professional resume tailored to your career goals.' },
    { title: 'Interview Preparation', description: 'Get expert guidance to ace your job interviews with confidence.' },
    { title: 'Career Planning', description: 'Personalized career counseling to align with your ambitions.' },
    { title: 'Skill Development', description: 'Enhance your skills to stay competitive in the job market.' },
    { title: 'Job Search Strategies', description: 'Effective techniques to land your dream job faster.' }
  ];

  return (
    <div className="w-full text-white py-6">
      {/* Study Abroad Section - Full Width */}
      <div className="w-full bg-[#120B0B] px-6 md:px-10 py-6">
        <div className="flex flex-col lg:flex-row gap-8 mb-6 max-w-7xl mx-auto">
          {/* Left Content - Text Section */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl mb-4">
              <span className="text-[#F55D3E] font-serif italic">Study</span> Abroad
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-6 max-w-lg">
              The Master of Business Administration (MBA) is a highly sought-after 
              qualification, and entrance exams help secure admission competitively. 
              These exams serve as gateways to participation in admissions for global 
              universities, especially in Australia, Canada, the U.K., and U.S.A. Our 
              faculty aids you in making decisions based on exam results, developing 
              skills to increase scores, and setting a firm application goal.
            </p>
          </div>

          {/* Right Content - Image */}
          <div className="lg:w-1/2">
            <div className="relative w-full h-48 lg:h-56">
              <Image
                src="/allcoursestudyabroad.png"
                alt="Student studying abroad"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Study Abroad Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {studyAbroadCards.map((card, index) => (
            <div 
              key={index} 
              className="bg-[#1F1414] p-6 rounded-lg hover:bg-[#2A1B1B] transition-all duration-300 border-l-4 border-[#F55D3E]"
            >
              <h3 className="text-[#F55D3E] font-medium mb-2 uppercase text-base">{card.title}</h3>
              <p className="text-gray-300 text-base md:text-lg">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Career Counseling Section */}
      <div className="w-full py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Left Content - Text Section (Aligned to Start) */}
          <div className="lg:w-1/2 text-start">
            <h2 className="text-2xl mb-4">
              <span className="text-[#F55D3E] font-serif italic">Career</span> Counseling
            </h2>
            <p className="text-white text-base md:text-lg mb-6 max-w-lg">
              Our career counseling program is designed to help individuals make 
              informed career decisions. We provide professional guidance on resume 
              building, interview preparation, and skill development to enhance 
              employability and career growth.
            </p>
          </div>
        </div>

        {/* Career Counseling Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {careerCounselingCards.map((card, index) => (
            <div 
              key={index} 
              className="bg-[#1F1414] shadow-md p-8 w-full rounded-lg hover:shadow-lg transition-all duration-300 border-l-4 border-[#F55D3E]"
            >
              <h3 className="text-[#F55D3E] font-medium mb-2 uppercase text-base">{card.title}</h3>
              <p className="text-white text-base md:text-lg">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadSection;
