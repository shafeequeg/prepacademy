// AllCourses.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  // code: string;
  title: string;
  description: string;
  classType?: string;
  path?: string;
  className?: string;
  
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  classType,
  path,
  className,
}) => {
  const cardContent = (
    <div
      className={`bg-[#1F1414] p-5  rounded-lg hover:bg-[#2A1B1B] transition-all duration-300 flex flex-col items-center text-center min-h-[150px] min-w-[250px] ${className}`}
    >
      <h3 className="text-[#F55D3E] text-lg font-semibold mb-2">{title}</h3>
      <p className="text-white text-base overflow-hidden overflow-ellipsis line-clamp-3">
        {description}
      </p>
      {classType && <p className="text-white text-sm mt-2">{classType}</p>}
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
 // In AllCourses.tsx - Update only the collegeCourses array paths

const collegeCourses = [
  {
    title: "Management",
    description: "CAT, XAT, KMAT, CMAT, MAT, NMAT, CUET(PG), MICAT, MHCET",
    path: "/collegecourse?tab=MANAGEMENT",
  },
  {
    title: "Civil Services",
    description: "UPSC",
    path: "/collegecourse?tab=CEVILSERVICE",
  },
  {
    title: "Government",
    description: "RAILWAY, SSC",
    path: "/collegecourse?tab=GOVERNMENT",
  },
  {
    title: "Defence",
    description: "CDS, AFCAT ",
    path: "/collegecourse?tab=DEFENCE",
  },
  {
    title: "Design & Architecture",
    description: "NID PG, NIFT PG",
    path: "/collegecourse?tab=MAT",
  },
  {
    title: "Bank",
    description: "SBI, IBPS PO, RBI GRADE B, IBPS RRB, SBI CLERK, IBPS CLERK, NABARD , LIC AAO",
    path: "/collegecourse?tab=BANK",
  },
];

  // School course data
const schoolCourses = [
  {
    title: "ENGINEERING",
    description: "JEE, KEAM, BITSAT, VITEEE, KCET",
    classType: "CLASSES FOR 11TH, 12TH & DROPPERS",
    path: "/schoolcourse?tab=engineering",
  },
  {
    title: "MEDICAL",
    description: "NEET (UG), PARAMEDICAL ENTRANCE, JIPMER",
    classType: "CLASSES FOR 11TH, 12TH & DROPPERS",
    path: "/schoolcourse?tab=MEDICAL",
  },
  {
    title: "MANAGEMENT",
    description: "IPM, CHRIST, SET, NPAT,MHCET",
    classType: "CLASSES FOR 12TH & DROPPERS",
    path: "/schoolcourse?tab=MANAGEMENT",
  },
  {
    title: "LAW",
    description: "CLAT, SLAT, AILET, KLEE, CULEE",
    classType: "CLASSES FOR 11TH, 12TH & DROPPERS",
    path: "/schoolcourse?tab=LAW",
  },
  {
    title: "COMMON UNIVERSITY ENTRANCE TEST",
    description: "COMMON UNIVERSITY ENTRANCE TEST",
    classType: "CLASSES FOR 12TH & DROPPERS",
    path: "/schoolcourse?tab=CUET",
  },
  {
    title: "DEFENCE",
    description: "NDA, AFCAT",
    classType: "CLASSES FOR 11TH, 12TH & DROPPERS",
    path: "/schoolcourse?tab=DEFENCE",
  },
  {
    title: "DESIGN & ARCHITECTURE",
    description: "NID, NIFT, UCEED, CEED, JEE MAIN, NATA",
    classType: "CLASSES FOR 11TH, 12TH & DROPPERS",
    path: "/schoolcourse?tab=DESIGN",
  },
  {
    title: "OTHERS",
    description: "ASHOKA UNIVERSITY, CHRIST UNIVERSITY , SYMBIOSIS,NMIMS,ST. XAVIER'S",
    classType: "CLASSES FOR 12TH & DROPPERS",
    path: "/schoolcourse?tab=OTHERS",
  },
  {
    title: "TUITIONS",
    description: "PHYSICS, CHEMISTRY,BIOLOGY, MATHS,ENGLISH,COMMERCE,BUSINESS STUDIES,ACCOUNTING,ECONOMICS",
    classType: "CLASSES FOR 11TH & 12TH",
    path: "/schoolcourse?tab=TUITIONS",
  },
];

  return (
    <div className="text-white min-h-screen">
      {/* Courses Header */}
      <div className="bg-gradient-to-r py-4 px-6 ml-4 md:ml-20">
        <h1 className="text-3xl font-semibold mt-16 md:mt-28">
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
                  <span className="text-[#F55D3E] font-serif italic pl-4">
                    College
                  </span>{" "}
                  Courses
                </h2>
                <p className="text-white  text-base md:text-lg mb-6 max-w-lg pl-4">
                  The beauty of learning was never meant to be confined within
                  the four walls of a classroom. Prep Academy goes above and
                  beyond the traditional teaching methods, bringing together the
                  most skilled faculty to create an unparalleled learning
                  experience for our students. When others rely on textbooks, we
                  rely on innovation. When they focus on memorization, we focus
                  on understanding. That&apos;s what sets us apart.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/allcourse/allcoursecollegecourse.jpeg"
                  alt="College Students"
                  width={600}
                  height={338}
                  className="rounded-lg object-cover w-full aspect-video"
                  quality={90}
                  priority
                />
              </div>
            </div>

            {/* Updated college courses grid with 6 centered cards with navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {collegeCourses.map((course, index) => (
                <CourseCard
                  key={index}
                  // code={course.code}
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
                <span className="text-[#F55D3E] font-serif italic pl-4">
                  School
                </span>{" "}
                Courses
              </h2>
              <p className="text-white text-base md:text-lg mb-6 max-w-lg pl-4">
                The beauty of learning was never meant to be confined within the
                four walls of a classroom. Prep Academy goes above and beyond
                the traditional teaching methods, bringing together the most
                skilled faculty to create an unparalleled learning experience
                for our students. When others rely on textbooks, we rely on
                innovation. When they focus on memorization, we focus on
                understanding. That&apos;s what sets us apart.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src="/allcourse/allcourseschoolcourse.jpeg"
                alt="College Students"
                width={600}
                height={375}
                className="rounded-lg object-cover w-full aspect-[16/10]"
                quality={90}
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {schoolCourses.map((course, index) => (
              <CourseCard
                key={index}
                // code={course.code}
                title={course.title}
                description={course.description}
                // classType={course.classType}
                path={course.path}
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
