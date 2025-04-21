import Image from "next/image";
import React from "react";
import Link from "next/link";

interface CourseCard {
  title: string;
  description: string;
  path?: string;
}

const StudyAbroadSection: React.FC = () => {
  const studyAbroadCards: CourseCard[] = [
    {
      title: "IELTS",
      description: "English proficiency test for study, work, and migration",
      path: "/courses/ielts",
    },
    {
      title: "SAT",
      description:
        "Standardized test for college admissions, mainly in the U.S.",
      path: "/studyabroad/sat",
    },
    {
      title: "ACT",
      description: "Entrance exam for admission into various universities",
      path: "/courses/act",
    },
    {
      title: "GRE",
      description: "Graduate school admission test for various disciplines",
      path: "/studyabroad/gre",
    },
    {
      title: "GMAT",
      description: "Global entrance exam for MBA and business programs",
      path: "/studyabroad/gmat",
    },
  ];

  const careerCounselingCards: CourseCard[] = [
    {
      title: "Resume Building",
      description: "Craft a professional resume tailored to your career goals.",
      path: "/career/resume-building",
    },
    {
      title: "Interview Preparation",
      description:
        "Get expert guidance to ace your job interviews with confidence.",
      path: "/career/interview-prep",
    },
    {
      title: "Career Planning",
      description:
        "Personalized career counseling to align with your ambitions.",
      path: "/career/career-planning",
    },
    {
      title: "Skill Development",
      description: "Enhance your skills to stay competitive in the job market.",
      path: "/career/skill-development",
    },
    {
      title: "Job Search Strategies",
      description: "Effective techniques to land your dream job faster.",
      path: "/career/job-search",
    },
  ];

  return (
    <div className="w-full text-white py-6">
      {/* Study Abroad Section - Full Width */}
      <div className="w-full bg-[#120B0B] px-6 md:px-10 py-6">
        <div className="flex flex-col lg:flex-row gap-8 mb-6 max-w-7xl mx-auto">
          {/* Left Content - Text Section */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl mb-4">
              <span className="text-[#F55D3E] font-serif italic">Study</span>{" "}
              Abroad
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-6 max-w-lg">
              Embarking on an educational journey abroad is a significant
              decision that requires meticulous planning and preparation. Our
              comprehensive entrance coaching services are designed to equip you
              with the knowledge and skills necessary to excel in international
              academic environments.
            </p>
          </div>

          {/* Right Content - Image */}
          <div className="lg:w-1/2">
            <div className="relative w-full h-48 lg:h-56">
              <Image
                src="/studyabroad.jpeg"
                alt="Student studying abroad"
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Study Abroad Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {studyAbroadCards.map((card, index) => (
            <Link key={index} href={card.path || "#"} passHref>
              <div className="bg-[#1F1414] p-6 rounded-lg hover:bg-[#2A1B1B] transition-all duration-300 border-l-4 border-[#F55D3E] cursor-pointer">
                <h3 className="text-[#F55D3E] font-medium mb-2 uppercase text-base">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-base md:text-lg">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Career Counseling Section */}
      <div className="w-full py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Left Content - Text Section (Aligned to Start) */}
          <div className="lg:w-1/2 text-start">
            <h2 className="text-2xl mb-4">
              <span className="text-[#F55D3E] font-serif italic">Career</span>{" "}
              Counseling
            </h2>
            <p className="text-white text-base md:text-lg mb-6 max-w-lg">
              Our career counseling program is designed to help individuals make
              informed career decisions. We provide professional guidance on
              resume building, interview preparation, and skill development to
              enhance employability and career growth.
            </p>
          </div>
        </div>

        {/* Career Counseling Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {careerCounselingCards.map((card, index) => (
            <Link key={index} href={card.path || "#"} passHref>
              <div
                className="bg-[#1F1414] shadow-md p-8 w-full rounded-lg hover:shadow-lg transition-all duration-300 border-l-4 border-[#F55D3E]"
                style={{ height: "220px", width: "100%" }} // Fixed height and width
              >
                <h3 className="text-[#F55D3E] font-medium mb-2 uppercase text-base">
                  {card.title}
                </h3>
                <p className="text-white text-base md:text-lg line-clamp-4">
                  {" "}
                  {/* Limit to 4 lines */}
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadSection;
