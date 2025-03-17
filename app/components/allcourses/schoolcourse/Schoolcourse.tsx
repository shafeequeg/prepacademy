"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import Image from 'next/image';

interface CourseCardProps {
  title: string;
  description: string;
  classType?: string;
  path?: string;
  className?: string;
}

// interface TabProps {
//   label: string;
//   active: boolean;
//   onClick: () => void;
//   id: string;
// }

const CourseCard: React.FC<CourseCardProps> = ({ title, description, classType, path, className }) => {
  const cardContent = (
    <div className={`bg-[#1F1414] p-5 rounded-lg hover:bg-[#2A1B1B] transition-all duration-300 flex flex-col items-center text-center min-h-[150px] ${className}`}>
      <h3 className="text-[#F55D3E] text-lg font-semibold mb-2">{title}</h3>
      <p className="text-white text-base">{description}</p>
      {classType && <p className="text-white text-sm mt-2">{classType}</p>}
    </div>
  );

  return path ? <Link href={path} className="block h-full">{cardContent}</Link> : cardContent;
};

const tabs = [
  { id: "engineering", label: "ENGINEERING" },
  { id: "medical", label: "MEDICAL" },
  { id: "management", label: "MANAGEMENT" },
  { id: "law", label: "LAW" },
  { id: "cuet", label: "COMMON UNIVERSITY ENTRANCE TEST" },
  { id: "defence", label: "DEFENCE" },
  { id: "design_architecture", label: "DESIGN & ARCHITECTURE" },
  { id: "others", label: "OTHERS" },
  { id: "tuitions", label: "TUITIONS" },
];

// const Tab: React.FC<TabProps> = ({ label, active, onClick, id }) => {
//   return (
//     <button
//       onClick={onClick}
//       id={`tab-${id}`}
//       role="tab"
//       aria-selected={active}
//       aria-controls={`tabpanel-${id}`}
//       className={`flex items-center justify-center px-6 py-2 min-w-[180px] rounded-full transition-all duration-300 text-sm md:text-base whitespace-nowrap ${
//         active ? "bg-[#FF6B3D] text-white font-medium" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//       }`}
//     >
//       {label}
//     </button>
//   );
// };

const CatExamApplySection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    college: "",
    program: "",
  });

  const [activeMainTab, setActiveMainTab] = useState("engineering");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceID = "service_eb5cvhl";
    const templateID = "template_lqeg482";
    const userID = "nk7-kQzPEcwr5RxjW";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        toast.success("Your message has been sent successfully!");
        console.log(response);
        
        setFormData({ fullname: "", phone: "", email: "", college: "", program: "" });
      })
      .catch((error) => {
        console.log(error);
        
        toast.error("Failed to send the message. Please try again.");
      });
  };

  const schoolCourses = [
    { title: "ENGINEERING", description: "JEE, KEAM, BITSAT, VITEEE, KCET", classType: "CLASSES FOR 11TH, 12TH & DROPPERS" },
    { title: "MEDICAL", description: "NEET (UG), PARAMEDICAL ENTRANCE, JIPMER", classType: "CLASSES FOR 11TH, 12TH & DROPPERS" },
    { title: "MANAGEMENT", description: "IPM, CHRIST, SET, NPAT,MHCET", classType: "CLASSES FOR 12TH & DROPPERS" },
    { title: "LAW", description: "CLAT, SLAT, AILET, KLEE, CULEE", classType: "CLASSES FOR 11TH, 12TH & DROPPERS" },
    { title: "COMMON UNIVERSITY ENTRANCE TEST", description: "COMMON UNIVERSITY ENTRANCE TEST", classType: "CLASSES FOR 12TH & DROPPERS" },
    { title: "DEFENCE", description: "NDA, AFCAT", classType: "CLASSES FOR 11TH, 12TH & DROPPERS" },
    { title: "DESIGN & ARCHITECTURE", description: "NID, NIFT, UCEED, CEED, JEE MAIN, NATA", classType: "CLASSES FOR 11TH, 12TH & DROPPERS" },
    { title: "OTHERS", description: "ASHOKA UNIVERSITY, CHRIST UNIVERSITY , SYMBIOSIS,NMIMS,ST. XAVIER'S", classType: "CLASSES FOR 12TH & DROPPERS" },
    { title: "TUITIONS", description: "PHYSICS, CHEMISTRY, MATHS, BIOLOGY, ACCOUNTING, ECONOMICS,ENGLISH,COMMERCE,BUSINESS STUDIES", classType: "CLASSES FOR 11TH & 12TH" },
  ];

  const handleTabKeyNav = (e: React.KeyboardEvent, index: number, tabArray: typeof tabs, setTabFn: (id: string) => void) => {
    if (e.key === 'ArrowRight') {
      const nextIndex = index < tabArray.length - 1 ? index + 1 : 0;
      setTabFn(tabArray[nextIndex].id);
      document.getElementById(`tab-${tabArray[nextIndex].id}`)?.focus();
    } else if (e.key === 'ArrowLeft') {
      const prevIndex = index > 0 ? index - 1 : tabArray.length - 1;
      setTabFn(tabArray[prevIndex].id);
      document.getElementById(`tab-${tabArray[prevIndex].id}`)?.focus();
    }
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-[#121010] to-[#1A1311] text-white">
      <div className="relative w-full z-10">
        <div className="bg-black px-4 py-3 sticky top-0 z-50 mt-32">
          <div className="max-w-7xl mx-auto">
            <div
              className="flex items-center justify-start overflow-x-auto gap-2 md:gap-4 pb-1 no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              role="tablist"
              aria-label="School Subjects"
            >
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  role="tab"
                  aria-selected={activeMainTab === tab.id}
                  aria-controls={`tabpanel-${tab.id}`}
                  onClick={() => setActiveMainTab(tab.id)}
                  onKeyDown={(e) => handleTabKeyNav(e, index, tabs, setActiveMainTab)}
                  tabIndex={activeMainTab === tab.id ? 0 : -1}
                  className={`px-4 py-2 text-sm md:text-base whitespace-nowrap transition-colors ${
                    activeMainTab === tab.id ? "bg-[#FF6B3D] text-white font-medium" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  } rounded-full`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-full bg-gradient-to-r from-[#0A1015] to-[#121820] text-white py-12 bg-center bg-no-repeat bg-cover">
          <div className="w-full px-4 mt-24">
            <div className="flex flex-col lg:flex-row gap-16 relative max-w-7xl mx-auto">
              <div className="lg:w-[35%]">
                <div className="mb-6">
                  <h2 className="text-[#FF6B3D] text-4xl font-bold mb-4">
                    Excel in Your School Exams with <span className="text-[#ED1C24]">Prep</span><span className="text-[#15938F]">Academy</span>
                  </h2>
                  <p className="text-gray-300 mb-8">
                    Prepare for your school exams with expert guidance, interactive learning, and comprehensive courses designed for students from Grade 6 to 12.
                  </p>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <img src="/aboutusverified.png" alt="Check Icon" className="w-5 h-5 mr-3" />
                    <p className="text-white">Experienced Faculty & Personalized Support</p>
                  </div>
                  <div className="flex items-center">
                    <img src="/aboutusverified.png" alt="Check Icon" className="w-5 h-5 mr-3" />
                    <p className="text-white">Comprehensive Online & Offline School Courses</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <button className="bg-[#FF6B3D] hover:bg-[#E04D2E] text-white py-3 px-6 rounded-md font-medium transition-colors">
                    Enroll Now
                  </button>
                  <button className="border border-[#FF6B3D] text-[#FF6B3D] py-3 px-6 rounded-md font-medium hover:bg-[#FF6B3D] hover:text-white transition-colors">
                    Get a FREE Trial
                  </button>
                </div>
              </div>
              <div className="hidden lg:block lg:w-[20%] relative">
                <div className="absolute inset-0 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url('/charater2.png')" }}></div>
              </div>
              <div className="lg:w-[45%] flex flex-col">
                <div className="bg-[#0E1721] p-8 rounded-lg border border-[#1A2836] shadow-lg">
                  <h3 className="text-[#FF6B3D] text-xl font-semibold mb-3">NEED ASSISTANCE?</h3>
                  <p className="text-white mb-6">Get guidance and clear your doubts</p>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4 mb-6">
                      <input
                        type="text"
                        name="fullname"
                        placeholder="Enter your Full Name"
                        value={formData.fullname}
                        onChange={handleInputChange}
                        className="w-full bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white"
                        required
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white"
                        required
                      />
                      <div className="relative">
                        <select
                          name="program"
                          value={formData.program}
                          onChange={handleInputChange}
                          className="w-full bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white appearance-none"
                          required
                        >
                          <option value="" disabled>Preferred School Program</option>
                          <option value="Maths & Science">Maths & Science</option>
                          <option value="Social Studies">Social Studies</option>
                          <option value="English & Language Arts">English & Language Arts</option>
                        </select>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bg-[#FF6B3D] hover:bg-[#E04D2E] text-white py-3 px-6 rounded-md w-full font-medium transition-colors"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div>
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl mb-4">
                <span className="text-[#F55D3E] font-serif italic pl-4">School</span> Courses
              </h2>
              <p className="text-white text-base md:text-lg mb-6 max-w-lg pl-4">
                The beauty of learning was never meant to be confined within the four walls of a classroom. Prep Academy goes above and beyond the traditional teaching methods, bringing together the most skilled faculty to create an unparalleled learning experience for our students. When others rely on textbooks, we rely on innovation. When they focus on memorization, we focus on understanding. That&apos;s what sets us apart.
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
                title={course.title}
                description={course.description}
                className="border-l-4 border-[#F55D3E] p-4"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatExamApplySection;