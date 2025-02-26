// AllCourses.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CourseCardProps {
  code: string;
  title: string;
  description: string;
  classType?: string;
  path?: string;
  className?: string; 
}

const CourseCard: React.FC<CourseCardProps> = ({ code, title, description, classType, path, className }) => {
  const cardContent = (
    <div className={`bg-[#1F1414] p-4 rounded hover:bg-[#2A1B1B] transition-all duration-300 flex flex-col items-center text-center h-full ${className}`}>
      <p className="text-[#F55D3E] text-sm font-medium mb-1">{code}</p>
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
      {classType && (
        <p className="text-gray-400 text-xs mt-2">{classType}</p>
      )}
    </div>
  );

  if (path) {
    return (
      <Link href={path} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

const AllCourses: React.FC = () => {
  // College course data - updated with 6 categories only
  const collegeCourses = [
    {
      code: "MGMT",
      title: "Management",
      description: "CAT, XAT, KMAT, CMAT, MAT, NMAT, CUET(PG), MICAT, MAH CET",
      path: "/courses/management"
    },
    {
      code: "CIVIL",
      title: "Civil Services",
      description: "UPSC",
      path: "/courses/civil-services"
    },
    {
      code: "GOVT",
      title: "Government",
      description: "RAILWAY, SSC",
      path: "/courses/government"
    },
    {
      code: "DEF",
      title: "Defence",
      description: "CDS, AFCAT ",
      path: "/courses/defence"
    },
    {
      code: "DESIGN",
      title: "Design & Architecture",
      description: "NID PG, NIFT PG",
      path: "/courses/design-architecture"
    },
    {
      code: "BANK",
      title: "Bank",
      description: "SBT P O, IBPS P O, RBI GRADE B, IBPS RRB, SBI CLERK, IBPS CLERK, NAVAD, LIC AAO",
      path: "/courses/bank"
    }
  ];

  // School course data
  const schoolCourses = [
    {
      code: "ENGINEERING",
      title: "ENGINEERING",
      description: "JEE, KEAM, BITSAT, VITEEE, KCET",
      classType: "CLASSES FOR 11TH, 12TH & DROPPERS"
    },
    {
      code: "MEDICAL",
      title: "MEDICAL",
      description: "NEET (UG), BSC NURSING, JIPMER",
      classType: "CLASSES FOR 11TH, 12TH & DROPPERS"
    },
    {
      code: "MANAGEMENT",
      title: "MANAGEMENT",
      description: "IPM, CHRIST, SET, NPAT",
      classType: "CLASSES FOR 12TH & DROPPERS"
    },
    {
      code: "LAW",
      title: "LAW",
      description: "CLAT, SLAT, NLSAT",
      classType: "CLASSES FOR 11TH, 12TH & DROPPERS"
    },
    {
      code: "CUET",
      title: "COMMON UNIVERSITY ENTRANCE TEST",
      description: "COMMON UNIVERSITY ENTRANCE TEST",
      classType: "CLASSES FOR 12TH & DROPPERS"
    },
    {
      code: "DEFENCE",
      title: "DEFENCE",
      description: "NDA, NA",
      classType: "CLASSES FOR 11TH, 12TH & DROPPERS"
    },
    {
      code: "DESIGN",
      title: "DESIGN & ARCHITECTURE",
      description: "NID, NIFT, UCEED, CEED, JEE MAIN, NATA",
      classType: "CLASSES FOR 11TH, 12TH & DROPPERS"
    },
    {
      code: "OTHERS",
      title: "OTHERS",
      description: "ASHOKA UNIVERSITY, CHRIST UNIVERSITY",
      classType: "CLASSES FOR 12TH & DROPPERS"
    },
    {
      code: "TUITIONS",
      title: "TUITIONS",
      description: "PHYSICS, CHEMISTRY, MATHS, BIOLOGY, ACCOUNTING, ECONOMICS",
      classType: "CLASSES FOR 11TH & 12TH"
    }
  ];
  
  return (
    <div className="text-white min-h-screen">
      {/* Courses Header */}
      <div className="bg-gradient-to-r py-4 px-6 ml-4 md:ml-20">
        <h1 className="text-3xl font-semibold mt-32">
          <span className="text-[#F55D3E] font-serif italic">All</span> Courses
        </h1>
      </div>
      <div className=""></div>
      
      {/* College Courses Section - Now with full width and background color */}
      <div className="w-full bg-[#120B0B] py-8">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-6 mb-8 w-full">
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl mb-4">
                  <span className="text-[#F55D3E] font-serif italic">College</span> Courses
                </h2>
                <p className="text-gray-300 text-base md:text-lg mb-6 max-w-lg">
                  The beauty of learning was never meant to be confined within 
                  the four walls of a classroom. Prep Academy goes above and beyond the traditional
                   teaching methods, bringing together the most skilled faculty to create an unparalleled 
                   learning experience for our students. When others rely on textbooks, we rely on innovation.
                    When they focus on memorization, we focus on understanding. That&apos;s what sets us apart.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <Image 
                  src="/allcoursecollege.png" 
                  alt="College Students" 
                  width={600} 
                  height={300}
                  className="rounded-lg object-cover w-full h-full max-h-72"
                />
              </div>
            </div>

            {/* Updated college courses grid with 6 centered cards with navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {collegeCourses.map((course, index) => (
                <CourseCard 
                  key={index} 
                  code={course.code} 
                  title={course.title} 
                  description={course.description} 
                  path={course.path}
                  className="border-l-4 border-[#F55D3E] p-4"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* School Courses Section */}
      <div className="container mx-auto px-4 py-8">
        <div>
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl mb-4">
                <span className="text-[#F55D3E] font-serif italic">School</span> Courses
              </h2>
              <p className="text-gray-300 text-base md:text-lg mb-6 max-w-lg">
                The beauty of learning was never meant to be confined within the four walls of a classroom. Prep Academy goes above and beyond the traditional teaching methods, bringing together the most skilled faculty to create an unparalleled learning experience for our students. When others rely on textbooks, we rely on innovation.
                 When they focus on memorization, we focus on understanding. That's what sets us apart.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <Image 
                src="/allcourseschoolcourse.png" 
                alt="School Students" 
                width={600} 
                height={300}
                className="rounded-lg object-cover w-full h-full max-h-72"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {schoolCourses.map((course, index) => (
              <CourseCard 
                key={index}
                code={course.code}
                title={course.title}
                description={course.description}
                // classType={course.classType}
                className="border-l-4 border-[#F55D3E] p-4"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;