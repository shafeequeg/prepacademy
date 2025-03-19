"use client";

import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import axiosInstance from '../../apiconfig/axios';
import { API_URLS } from '../../apiconfig/api_urls';

// interface CourseCardProps {
//   title: string;
//   description: string;
//   classType?: string;
//   path?: string;
//   className?: string;
// }

// interface TabProps {
//   label: string;
//   active: boolean;
//   onClick: () => void;
//   id: string;
// }

interface Program {
  id: string;
  name: string;
}

// const CourseCard: React.FC<CourseCardProps> = ({ title, description, classType, path, className }) => {
//   const cardContent = (
//     <div className={`bg-[#1F1414] p-5 rounded-lg hover:bg-[#2A1B1B] transition-all duration-300 flex flex-col items-center text-center min-h-[150px] ${className}`}>
//       <h3 className="text-[#F55D3E] text-lg font-semibold mb-2">{title}</h3>
//       <p className="text-white text-base">{description}</p>
//       {classType && <p className="text-white text-sm mt-2">{classType}</p>}
//     </div>
//   );

//   return path ? <Link href={path} className="block h-full">{cardContent}</Link> : cardContent;
// };

const tabs = [
  { id: "ResumeBuilding", label: "Resume Building", path: "/career-counseling/resume-building" },
  { id: "InterviewPreparation", label: "Interview Preparation", path: "/career-counseling/interview-preparation" },
  { id: "CareerPlanning", label: "Career Planning", path: "/career-counseling/career-planning" },
  { id: "Skill Development", label: "Skill Development", path: "/career-counseling/skill-development" },
  { id: "Job Search Strategies", label: "Job Search Strategies", path: "/career-counseling/job-search-strategies" },
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

// const TabsContainer: React.FC<{ activeTab: string; setActiveTab: (tab: string) => void }> = ({
//   activeTab,
//   setActiveTab,
// }) => {
//   return (
//     <div className="overflow-x-auto whitespace-nowrap scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
//       <div className="flex space-x-4 w-max px-4 py-2">
//         {tabs.map((tab) => (
//           <Tab
//             key={tab.id}
//             id={tab.id}
//             label={tab.label}
//             active={activeTab === tab.id}
//             onClick={() => setActiveTab(tab.id)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

const CatExamApplySection: React.FC = () => {
  const [formData, setFormData] = useState({
      full_name: '',
      mobile_number: '',
      email: '',
      college_studied:'',
      preferred_program: '',
      submitted_at:'',
    });

  const [activeMainTab, setActiveMainTab] = useState("engineering");
const [programs, setPrograms] = useState<Program[]>([]); // State to store fetched programs

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const fetchPrograms = async () => {
try {
  const response = await axiosInstance.get(API_URLS.ALLCOURSE.GET_COURSE); // Replace with your API endpoint
  setPrograms(response.data); // Assuming the response is an array of programs
} catch (error) {
  console.error("Failed to fetch programs:", error);
  // toast.error("Failed to fetch programs. Please try again.");
}
};

useEffect(() => {
fetchPrograms();
}, []);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();

try {
  const response = await axiosInstance.post(API_URLS.ALLCOURSE.POST_COURSE, {
    ...formData,
    preferred_program: formData.preferred_program, // Ensure this is the ID of the selected program
  });

  if (response.status >= 200 && response.status < 300) {
    console.log("Message sent successfully!", response.data);
    toast.success("Your message has been sent successfully!");

    // Reset form fields
    setFormData({
      full_name: "",
      mobile_number: "",
      email: "",
      college_studied: "",
      preferred_program: "",
      submitted_at: "",
    });
  } else {
    console.error("Unexpected status code:", response.status);
    toast.error("Failed to send the message. Please try again.");
  }
} catch (error) {
  console.error("Failed to send message:", error);
  toast.error("Failed to send the message. Please try again.");
}
};

  const careerCounselingCards = [
    { title: 'Resume Building', description: 'Craft a professional resume tailored to your career goals.' },
    { title: 'Interview Preparation', description: 'Get expert guidance to ace your job interviews with confidence.' },
    { title: 'Career Planning', description: 'Personalized career counseling to align with your ambitions.' },
    { title: 'Skill Development', description: 'Enhance your skills to stay competitive in the job market.' },
    { title: 'Job Search Strategies', description: 'Effective techniques to land your dream job faster.' }
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
  className="flex items-center justify-start gap-2 md:gap-4 pb-1 overflow-x-auto md:overflow-visible w-full"
  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
  role="tablist"
  aria-label="Career Counseling Programs"
>
  {tabs.map((tab, index) => (
    <button
      key={tab.id}
      id={`tab-${tab.id}`}
      role="tab"
      aria-selected={activeMainTab === tab.id}
      aria-controls={`tabpanel-${tab.id}`}
      onClick={() => {
        setActiveMainTab(tab.id); // Set the active tab
        window.location.href = tab.path; // Navigate to the path
      }}
      onKeyDown={(e) => handleTabKeyNav(e, index, tabs, setActiveMainTab)}
      tabIndex={activeMainTab === tab.id ? 0 : -1}
      className={`px-4 py-2 text-sm md:text-base whitespace-nowrap transition-colors flex-1 text-center ${
        activeMainTab === tab.id
          ? "bg-[#FF6B3D] text-white font-medium"
          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
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
                  <h2 className="text-[#FF6B3D] text-4xl font-bold mb-4">Shape Your Future with Expert Career Counseling</h2>
                  <p className="text-gray-300 mb-8">
                    Unlock your true potential with personalized career guidance from experienced professionals.
                  </p>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <img src="/aboutusverified.png" alt="Check Icon" className="w-5 h-5 mr-3" />
                    <p className="text-white">One-on-One Career Counseling Sessions</p>
                  </div>
                  <div className="flex items-center">
                    <img src="/aboutusverified.png" alt="Check Icon" className="w-5 h-5 mr-3" />
                    <p className="text-white">Personalized Career Roadmap & Action Plan</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <button className="bg-[#FF6B3D] hover:bg-[#E04D2E] text-white py-3 px-6 rounded-md font-medium transition-colors">
                    Book a Counseling Session
                  </button>
                  <button className="border border-[#FF6B3D] text-[#FF6B3D] py-3 px-6 rounded-md font-medium hover:bg-[#FF6B3D] hover:text-white transition-colors">
                    Get a FREE Career Assessment
                  </button>
                </div>
              </div>
              <div className="hidden lg:block lg:w-[20%] relative">
                <div className="absolute inset-0 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url('/career_character.png')" }}></div>
              </div>
              <div className="lg:w-[45%] flex flex-col">
                <div className="bg-[#0E1721] p-8 rounded-lg border border-[#1A2836] shadow-lg">
                  <h3 className="text-[#FF6B3D] text-xl font-semibold mb-3">NEED CAREER GUIDANCE?</h3>
                  <p className="text-white mb-6">Connect with our experts to explore career opportunities.</p>
                  <form onSubmit={handleSubmit}>
      <div className="space-y-4 mb-6">
        <input
          type="text"
          name="full_name"
          placeholder="Enter your Full Name"
          value={formData.full_name}
          onChange={handleInputChange}
          className="w-full bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white"
          required
        />
        <input
          type="tel"
          name="mobile_number"
          placeholder="Mobile Number"
          value={formData.mobile_number}
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
        <input
          type="text"
          name="college_studied"
          placeholder="College Studied"
          value={formData.college_studied}
          onChange={handleInputChange}
          className="w-full bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white"
          required
        />
        <div className="relative">
          <select
            name="preferred_program"
            value={formData.preferred_program}
            onChange={handleInputChange}
            className="w-full bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white appearance-none"
            required
          >
            <option value="" disabled>
              Preferred Online Program
            </option>
            {programs.map((program) => (
              <option key={program.id} value={program.id}>
                {program.name}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L13 1"
                stroke="#FF6B3D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Submit Button */}
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

      <div className="w-full py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="lg:w-1/2 text-start">
            <h2 className="text-2xl mb-4">
              <span className="text-[#F55D3E] font-serif italic">Career</span> Counseling
            </h2>
            <p className="text-white text-base md:text-lg mb-6 max-w-lg">
              Our career counseling program is designed to help individuals make informed career decisions.
            </p>
          </div>
        </div>
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

export default CatExamApplySection;