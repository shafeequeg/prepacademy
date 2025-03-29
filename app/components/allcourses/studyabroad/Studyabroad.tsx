"use client"

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
// import { ChevronRight } from 'lucide-react';
import { useState } from "react";
import { toast } from 'react-toastify';
// import emailjs from 'emailjs-com';
import Image from 'next/image'; // Correct import for Next.js Image component
import axiosInstance from '../../apiconfig/axios';
import { API_URLS } from '../../apiconfig/api_urls';



interface CourseCardProps {
  // code: string;
  title: string;
  description: string;
  classType?: string;
  path?: string;
  className?: string; 
}

interface CourseCard {
  title: string;
  description: string;
  path?: string;


}

interface Program {
  id: string;
  name: string;
}


const CourseCard: React.FC<CourseCardProps> = ({ title, description, classType, path, className }) => {
  const cardContent = (
    <div className={`bg-[#1F1414] p-5 rounded-lg hover:bg-[#2A1B1B] transition-all duration-300 flex flex-col items-center text-center min-h-[150px] ${className}`}>
      {/* <p className="text-[#F55D3E] text-sm font-medium mb-1">{code}</p> */}
      <h3 className="text-[#F55D3E] text-lg font-semibold mb-2">{title}</h3>
      <p className="text-white  text-base">{description}</p>
      {classType && (
        <p className="text-white  text-sm mt-2">{classType}</p>
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

const tabs = [
  { id: "IELTS", label: "IELTS", path: '/courses/ielts' },
  { id: "SAT", label: "SAT",path: '/studyabroad/sat'  },
  { id: "ACT", label: "ACT", path: '/courses/act' },
  { id: "GRE", label: "GRE", path: '/studyabroad/gre' },
  { id: "GMAT", label: "GMAT", path: '/studyabroad/gmat' },
 
];




const offeringTypes = [
  { id: "online", label: "Online Class" },
  { id: "Classroom", label: "Classroom" },
  { id: "test", label: "Test Series" },
  { id: "Bookmaterials", label: "Book Materials" },
  { id: "SelfBased", label: "Self Based" },
];

console.log(offeringTypes);



const CatExamApplySection: React.FC = () => {
 const [formData, setFormData] = useState({
     full_name: '',
     mobile_number: '',
     email: '',
     school_college_studied:'',
     preferred_program: '',
     submitted_at:'',
   });
 
   const [EnrollformData, setEnrollFormData] = useState({
    full_name: "",
     mobile_number: "",
    email: "",
  school_college: "",
  class_type: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeMainTab, setActiveMainTab] = useState("engineering");
  // const [activeTab, setActiveTab] = useState("online");
const [programs, setPrograms] = useState<Program[]>([]); // State to store fetched programs

  // const filteredCourses = courseCards.filter((course) => course.type === activeTab);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleenrollformInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEnrollFormData({ ...EnrollformData, [name]: value });
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
      school_college_studied: "",
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

const handleenrollSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  try {
    const response = await axiosInstance.post(API_URLS.COMMONFORM.POST_FORM, {
      ...EnrollformData,
    });
  
    if (response.status >= 200 && response.status < 300) {
      console.log("Message sent successfully!", response.data);
      toast.success("Your message has been sent successfully!");
           
      // Reset form fields
      setIsModalOpen(false);
      setEnrollFormData({
        full_name: "",
        mobile_number: "",
        email: "",
        school_college: "",
        class_type: "",
      })
    } else {
      console.error("Unexpected status code:", response.status);
      toast.error("Failed to send the message. Please try again.");
    }
  } catch (error) {
    console.error("Failed to send message:", error);
    toast.error("Failed to send the message. Please try again.");
  }
  };
 

  const studyAbroadCards: CourseCard[] = [
    { title: 'IELTS', description: 'English proficiency test for study, work, and migration'},
    { title: 'SAT', description: 'Standardized test for college admissions, mainly in the U.S.'},
    { title: 'ACT', description: 'Entrance exam for admission into various universities' },
    { title: 'GRE', description: 'Graduate school admission test for various disciplines' },
    { title: 'GMAT', description: 'Global entrance exam for MBA and business programs' }
  ];

 
  

  const handleTabKeyNav = (e: React.KeyboardEvent, index: number, tabArray: typeof tabs | typeof offeringTypes, setTabFn: (id: string) => void) => {
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

  // Create refs for each section
  const ieltsRef = useRef<HTMLDivElement | null>(null);
  const satRef = useRef<HTMLDivElement | null>(null);
  const actRef = useRef<HTMLDivElement | null>(null);
  const greRef = useRef<HTMLDivElement | null>(null);
  const gmatRef = useRef<HTMLDivElement | null>(null);
  
  const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  useEffect(() => {
    switch (activeMainTab) {
      case "IELTS":
        scrollToRef(ieltsRef);
        break;
      case "SAT":
        scrollToRef(satRef);
        break;
      case "ACT":
        scrollToRef(actRef);
        break;
      case "GRE":
        scrollToRef(greRef);
        break;
      case "GMAT":
        scrollToRef(gmatRef);
        break;
      default:
        break;
    }
  }, [activeMainTab]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <div className="relative w-full bg-gradient-to-r from-[#121010] to-[#1A1311] text-white">
      {/* Main Content */}
      <div className="relative w-full z-10">
  {/* Main Tabs Section */}
  <div className="bg-black px-4 py-3 sticky top-0 z-50 mt-32">
          <div className="max-w-7xl mx-auto">
          <div
  className="flex items-center justify-start gap-2 md:gap-4 pb-1 overflow-x-auto md:overflow-visible w-full mt-4 w768:mt-3"
  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
  role="tablist"
  aria-label="Study Abroad Programs"
>
  
  {tabs.map((tab, index) => (
    <button
      key={tab.id}
      id={`tab-${tab.id}`}
      role="tab"
      aria-selected={activeMainTab === tab.id}
      aria-controls={`tabpanel-${tab.id}`}
      onClick={() => {
        setActiveMainTab(tab.id);
        // Navigate to the path associated with the tab
        window.location.href = tab.path;
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


  {/* Apply Section with Mascot */}
  <div className="relative w-full bg-gradient-to-r from-[#0A1015] to-[#121820] text-white py-12 bg-center bg-no-repeat bg-cover">
    <div className="w-full px-4 mt-24">
      <div className="flex flex-col lg:flex-row gap-16 relative max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="lg:w-[35%]">
          <div className="mb-6">
            <h2 className="text-[#FF6B3D] text-4xl font-bold mb-4">Study Abroad with <span className='text-[#ED1C24] '>Prep</span><span className='text-[#15938F]'>Academy</span>
            </h2>
            <p className="text-gray-300 mb-8">
            At Prep Academy, we are dedicated to guiding aspiring students toward global academic success through our specialized study abroad entrance coaching programs. 
            We offer comprehensive preparation for a range of standardized tests, including the GMAT, GRE, SAT, and IELTS, tailored to meet the 
            diverse needs of our students.            </p>
          </div>

          {/* Progress Items */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center">
            <Image 
  src="/aboutusverified.png" 
  alt="Check Icon" 
  width={20}  // 5 * 4
  height={20} // 5 * 4
  className="w-5 h-5 mr-3"
/>              <p className="text-white">Expert Counseling for Top Universities</p>
            </div>
            <div className="flex items-center">
            <Image 
  src="/aboutusverified.png" 
  alt="Check Icon" 
  width={20}  // 5 * 4
  height={20} // 5 * 4
  className="w-5 h-5 mr-3"
/>
              <p className="text-white">Comprehensive Support for Admissions & Visas</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="bg-[#FF6B3D] hover:bg-[#E04D2E] text-white py-3 px-6 rounded-md font-medium transition-colors" onClick={openModal}>
              Enroll Now
            </button>
            <button className="border border-[#FF6B3D] text-[#FF6B3D] py-3 px-6 rounded-md font-medium hover:bg-[#FF6B3D] hover:text-white transition-colors">
              Get a FREE Consultation
            </button>
          </div>
        </div>

        {/* Middle section with character background */}
        <div className="hidden lg:block lg:w-[20%] relative">
          <div
            className="absolute inset-0 bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: "url('/charater2.png')" }}
          ></div>
        </div>

        {/* Right Content - Form */}
        <div className="lg:w-[45%] flex flex-col">
          <div className="bg-[#0E1721] p-8 rounded-lg border border-[#1A2836] shadow-lg">
            <h3 className="text-[#FF6B3D] text-xl font-semibold mb-3">NEED ASSISTANCE?</h3>
            <p className="text-white mb-6">Get guidance and clear your doubts about studying abroad</p>

            {/* Form Fields */}
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
          name="school_college_studied"
          placeholder="College or School Studied"
          value={formData.school_college_studied}
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

      <div className="w-full bg-[#120B0B] px-6 md:px-10 py-6">
             <div className="flex flex-col lg:flex-row gap-8 mb-6 max-w-7xl mx-auto">
               {/* Left Content - Text Section */}
               <div className="lg:w-1/2 mt-14 relative ">
                 <h2 className="text-4xl mb-4">
                   <span className="text-[#F55D3E] font-serif italic">Study</span> Abroad
                 </h2>
                 <p className="text-gray-300 text-base md:text-xl mb-6 max-w-lg">
                 Embarking on an educational journey abroad is a significant decision that requires
                  meticulous planning and preparation. Our comprehensive entrance coaching services are 
                  designed to equip you with the knowledge and skills necessary to excel in international academic environments.
                 </p>
               </div>
     
               {/* Right Content - Image */}
               <div className="relative w-[100%] md:w-[40%]  aspect-[4/3] min-h-[250px]">
  <Image 
    src="/allcourse/studyabroadcourse.jpg" 
    alt="School Students" 
    fill 
    className="rounded-lg object-cover" 
    sizes="(max-width: 768px) 100vw, 33vw"
    priority
  /> 
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
           {isModalOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-11/12 md:w-4/5 max-w-4xl relative overflow-hidden max-h-[90vh] md:max-h-none overflow-y-auto">
          {/* Close button */}
          <button 
            onClick={closeModal} 
            className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-700 hover:text-black z-10"
            aria-label="Close"
          >
            <svg width="16" height="16" className="md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          
          {/* Responsive layout - stack on mobile, side-by-side on larger screens */}
          <div className="flex flex-col md:flex-row h-full">
            {/* Left section - Title and Image */}
            <div className="bg-[#2B1615] p-3 md:p-6 md:w-2/5 flex flex-col items-center justify-center text-white">
              <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-6 text-center">Upgrade Your Learning With Us</h2>
              <div className="w-24 h-24 md:w-64 md:h-auto lg:w-80 mb-2 md:mb-4">
                <Image 
                  src="/commonformmascot.png" 
                  alt="Learning Mascot" 
                  width={300}
                  height={200}
                  className="w-full h-full object-contain max-w-full"
                />
              </div>
            </div>
            
            {/* Right section - Form */}
            <div className="p-3 md:p-6 md:w-3/5">
              <h3 className="text-center text-lg md:text-xl font-medium text-gray-800 mb-3 md:mb-6">Fast Track Your Trial Class</h3>
              <form className="space-y-2 md:space-y-4" onSubmit={handleenrollSubmit}>
                {/* Name field */}
                <div>
                  <label htmlFor="full_name" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="full_name"
                    name="full_name"
                    placeholder="Your Name" 
                    value={EnrollformData.full_name}
                    onChange={handleenrollformInputChange}
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                    required
                  />
                </div>
                
                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="Enter Your Email" 
                    value={EnrollformData.email}
                    onChange={handleenrollformInputChange}
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="class_type" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Class</label>
                  <input 
                    type="text" 
                    id="class_type"
                    name="class_type"
                    placeholder="Your class" 
                    value={EnrollformData.class_type}
                    onChange={handleenrollformInputChange}
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                    required
                  />
                </div>
                
                {/* Phone Number field with country code */}
                <div>
                  <label htmlFor="mobile_number" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <div className="flex">
                    <div className="flex items-center bg-gray-100 border border-gray-300 rounded-l-md px-2 md:px-3">
                      <Image 
                        src="/gladiators/formcommonindia.png" 
                        alt="IN" 
                        width={12}
                        height={12}
                        className="mr-1 md:w-4 md:h-4"
                      />
                      <span className="text-xs md:text-sm text-gray-700">+91</span>
                    </div>
                    <input 
                      type="tel" 
                      id="mobile_number"
                      name="mobile_number"
                      placeholder="Your Phone Number" 
                      value={EnrollformData.mobile_number}
                      onChange={handleenrollformInputChange}
                      className="w-full p-2 md:p-3 border border-gray-300 border-l-0 rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="school_college" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">School/Institute</label>
                  <input 
                    type="text" 
                    id="school_college"
                    name="school_college"
                    placeholder="Your School/Institute" 
                    value={EnrollformData.school_college}
                    onChange={handleenrollformInputChange}
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                    required
                  />
                </div>
    
                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full bg-[#F55D3E] text-white py-2 md:py-3 px-4 rounded-md font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center"
                >
                  Submit
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )}

    </div>
  );
};

export default CatExamApplySection;