"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
// import { ChevronRight } from 'lucide-react';
import { useState } from "react";
import { toast } from "react-toastify";
// import emailjs from "emailjs-com";
import Image from "next/image"; // Correct import for Next.js Image component
import { useRouter } from "next/navigation";
import axiosInstance from "@/app/components/apiconfig/axios";
import { API_URLS } from "@/app/components/apiconfig/api_urls";

// interface DemoVideoCardProps {
//   title: string;
//   videoId: string;
// }

// interface TabProps {
//     label: string;
//     active: boolean;
//     onClick: () => void;
//     id: string;
//     path: string;
//   }

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
      className={`bg-[#1F1414] p-5 rounded-lg hover:bg-[#2A1B1B] transition-all duration-300 flex flex-col items-center text-center min-h-[150px] ${className}`}
    >
      {/* <p className="text-[#F55D3E] text-sm font-medium mb-1">{code}</p> */}
      <h3 className="text-[#F55D3E] text-lg font-semibold mb-2">{title}</h3>
      <p className="text-white  text-base">{description}</p>
      {classType && <p className="text-white  text-sm mt-2">{classType}</p>}
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
  { id: "IPM", label: "IPM", path: "/schoolcourse/ipm" },
  { id: "CHRIST", label: "CHRIST", path: "/slat" },
  { id: "SET", label: "SET", path: "/ailet" },
  { id: "NPAT", label: "NPAT", path: "/klee" },
  { id: "MHCET", label: "MHCET", path: "/culee" },
];

//   const Tab: React.FC<TabProps> = ({ label, active, onClick, id, path }) => {
//     return (
//       <Link href={path} passHref>
//         <button
//           onClick={onClick}
//           id={`tab-${id}`}
//           role="tab"
//           aria-selected={active}
//           aria-controls={`tabpanel-${id}`}
//           className={`flex items-center justify-center px-6 py-2 min-w-[180px] rounded-full transition-all duration-300 text-sm md:text-base whitespace-nowrap ${
//             active
//               ? "bg-[#FF6B3D] text-white font-medium"
//               : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//           }`}
//         >
//           {label}
//         </button>
//       </Link>
//     );
//   };

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
// const DemoVideoCard: React.FC<DemoVideoCardProps> = ({ title, videoId }) => {
//   return (
//     <div className="relative group cursor-pointer">
//       <div className="relative w-full h-56 md:h-64 lg:h-72">
//         <iframe
//           className="w-full h-full rounded-lg"
//           src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
//           title={title}
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         />
//       </div>
//     </div>
//   );
// };

const offeringTypes = [
  { id: "online", label: "Online Class" },
  { id: "Classroom", label: "Classroom" },
  { id: "test", label: "Test Series" },
  { id: "Bookmaterials", label: "Book Materials" },
  { id: "SelfBased", label: "Self Based" },
];

console.log(offeringTypes);

// Add courseCards definition since it was referenced but missing
// const courseCards = [
//   { id: 1, type: "online", title: "Online CAT Course" },
//   { id: 2, type: "online", title: "Online MBA Entrance Course" },
//   { id: 3, type: "Classroom", title: "Classroom CAT Program" },
//   { id: 4, type: "Classroom", title: "Classroom MBA Prep" },
//   { id: 5, type: "test", title: "CAT Mock Tests" },
//   { id: 6, type: "Bookmaterials", title: "CAT Study Materials" },
//   { id: 7, type: "SelfBased", title: "Self-paced CAT Program" },
// ];

const CatExamApplySection: React.FC = () => {
  const [formData, setFormData] = useState({
     full_name: "",
     mobile_number: "",
     email: "",
     college_studied: "",
     program_type: "",
     location: "",
     course: "",
   });
 

   const [mainFormErrors, setMainFormErrors] = useState({
    full_name: "",
    mobile_number: "",
    email: "",
    college_studied: "",
    program_type: "",
    location: "",
  });


  const [activeMainTab, setActiveMainTab] = useState("engineering");
  //   const [activeTab, setActiveTab] = useState("online");

  //   const filteredCourses = courseCards.filter((course) => course.type === activeTab);

 const validateMainFullName = (name: string) => {
    if (!name || name.trim() === "") {
      return "Full name is required";
    }
    if (name.trim().length < 2) {
      return "Name must be at least 2 characters";
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      return "Name should only contain letters and spaces";
    }
    return "";
  };

  const validateMainEmail = (email: string) => {
    if (!email || email.trim() === "") {
      return "Email address is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validateMainMobile = (mobile: string) => {
    if (!mobile || mobile.trim() === "") {
      return "Mobile number is required";
    }
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile)) {
      return "Please enter a valid 10-digit mobile number ";
    }
    return "";
  };

  const validateMainCollege = (college: string) => {
    if (!college || college.trim() === "") {
      return "College or School name is required";
    }
    if (college.trim().length < 2) {
      return "Please enter a valid college/school name";
    }
    return "";
  };

  const validateMainLocation = (location: string) => {
    if (!location || location.trim() === "") {
      return "Location is required";
    }
    if (location.trim().length < 2) {
      return "Please enter a valid location";
    }
    return "";
  };

  const validateMainProgramType = (programType: string) => {
    if (!programType || programType.trim() === "") {
      return "Please select a program type";
    }
    return "";
  };


   const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    // For mobile number, only allow digits and limit to 10 characters
    if (name === "mobile_number") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, [name]: numericValue });

      // Validate mobile number
      const error = validateMainMobile(numericValue);
      setMainFormErrors((prev) => ({ ...prev, [name]: error }));
      return;
    }

    setFormData({ ...formData, [name]: value });

    // Validate the changed field
    let errorMessage = "";
    switch (name) {
      case "full_name":
        errorMessage = validateMainFullName(value);
        break;
      case "email":
        errorMessage = validateMainEmail(value);
        break;
      case "college_studied":
        errorMessage = validateMainCollege(value);
        break;
      case "location":
        errorMessage = validateMainLocation(value);
        break;
      case "program_type":
        errorMessage = validateMainProgramType(value);
        break;
    }

    setMainFormErrors((prev) => ({ ...prev, [name]: errorMessage }));
  };


   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


     const errors = {
      full_name: validateMainFullName(formData.full_name),
      mobile_number: validateMainMobile(formData.mobile_number),
      email: validateMainEmail(formData.email),
      college_studied: validateMainCollege(formData.college_studied),
      location: validateMainLocation(formData.location),
      program_type: validateMainProgramType(formData.program_type),
    };

    setMainFormErrors(errors);

    // Check if there are any errors
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      toast.error("Please fix all validation errors before submitting");
      return;
    }

    try {
      const response = await axiosInstance.post(
        API_URLS.ALLCOURSE.POST_COURSE,
        {
          ...formData,
          course: "study-abroad",
        }
      );

      if (response.status >= 200 && response.status < 300) {
        console.log("Message sent successfully!", response.data);
        toast.success("Your message has been sent successfully!");

        // Reset form fields
        setFormData({
          full_name: "",
          mobile_number: "",
          email: "",
          college_studied: "",
          program_type: "",
          course: "",
          location: "",
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

  //   const relatedVideos = [
  //     { title: "Preparing for the CAT 2025", videoId: "JNJOTlz8C2Y" },
  //     { title: "Strategies for CAT 2025", videoId: "Kjjeb1v50C0" },
  //     { title: "Best Coaching Centers", videoId: "4g7cyj774_M" },
  //   ];

  const studyAbroadCards: CourseCard[] = [
    {
      title: "IELTS",
      description: "English proficiency test for study, work, and migration",
    },
    {
      title: "SAT",
      description:
        "Standardized test for college admissions, mainly in the U.S.",
    },
    {
      title: "ACT",
      description: "Entrance exam for admission into various universities",
    },
    {
      title: "GRE",
      description: "Graduate school admission test for various disciplines",
    },
    {
      title: "GMAT",
      description: "Global entrance exam for MBA and business programs",
    },
  ];

  //   const schoolCourses = [
  //     {
  //       // code: "ENGINEERING",
  //       title: "ENGINEERING",
  //       description: "JEE, KEAM, BITSAT, VITEEE, KCET",
  //       classType: "CLASSES FOR 11TH, 12TH & DROPPERS"
  //     },
  //     {
  //       // code: "MEDICAL",
  //       title: "MEDICAL",
  //       description: "NEET (UG), PARAMEDICAL ENTRANCE, JIPMER",
  //       classType: "CLASSES FOR 11TH, 12TH & DROPPERS"
  //     },
  //     {
  //       // code: "MANAGEMENT",
  //       title: "MANAGEMENT",
  //       description: "IPM, CHRIST, SET, NPAT,MHCET",
  //       classType: "CLASSES FOR 12TH & DROPPERS"
  //     },
  //     {
  //       // code: "LAW",
  //       title: "LAW",
  //       description: "CLAT, SLAT, AILET, KLEE, CULEE",
  //       classType: "CLASSES FOR 11TH, 12TH & DROPPERS"
  //     },
  //     {
  //       // code: "CUET",
  //       title: "COMMON UNIVERSITY ENTRANCE TEST",
  //         description: "COMMON UNIVERSITY ENTRANCE TEST",
  //       classType: "CLASSES FOR 12TH & DROPPERS"
  //     },
  //     {
  //       // code: "DEFENCE",
  //       title: "DEFENCE",
  //       description: "NDA, AFCAT",
  //       classType: "CLASSES FOR 11TH, 12TH & DROPPERS"
  //     },
  //     {
  //       // code: "DESIGN",
  //       title: "DESIGN & ARCHITECTURE",
  //       description: "NID, NIFT, UCEED, CEED, JEE MAIN, NATA",
  //       classType: "CLASSES FOR 11TH, 12TH & DROPPERS"
  //     },
  //     {
  //       // code: "OTHERS",
  //       title: "OTHERS",
  //       description: "ASHOKA UNIVERSITY, CHRIST UNIVERSITY , SYMBIOSIS,NMIMS,ST. XAVIER'S",
  //       classType: "CLASSES FOR 12TH & DROPPERS"
  //     },
  //     {
  //       // code: "TUITIONS",
  //       title: "TUITIONS",
  //       description: "PHYSICS, CHEMISTRY, MATHS, BIOLOGY, ACCOUNTING, ECONOMICS,ENGLISH,COMMERCE,BUSINESS STUDIES",
  //       classType: "CLASSES FOR 11TH & 12TH"
  //     }
  //   ];

  const handleTabKeyNav = (
    e: React.KeyboardEvent,
    index: number,
    tabArray: typeof tabs | typeof offeringTypes,
    setTabFn: (id: string) => void
  ) => {
    if (e.key === "ArrowRight") {
      const nextIndex = index < tabArray.length - 1 ? index + 1 : 0;
      setTabFn(tabArray[nextIndex].id);
      document.getElementById(`tab-${tabArray[nextIndex].id}`)?.focus();
    } else if (e.key === "ArrowLeft") {
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
      case "CLAT":
        scrollToRef(ieltsRef);
        break;
      case "SLAT":
        scrollToRef(satRef);
        break;
      case "AILET":
        scrollToRef(actRef);
        break;
      case "KLEE":
        scrollToRef(greRef);
        break;
      case "CULEE":
        scrollToRef(gmatRef);
        break;
      default:
        break;
    }
  }, [activeMainTab]);

  const router = useRouter();

  const handleEnrollClick = () => {
    router.push(`/CourseEnrollmentPortal#management`);
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-[#121010] to-[#1A1311] text-white">
      {/* Main Content */}
      <div className="relative w-full z-10">
        {/* Main Tabs Section */}
        <div className="bg-black px-4 py-3 sticky top-0 z-50 mt-32">
          <div className="max-w-7xl mx-auto">
            <div
              className="flex items-center justify-between w-full no-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              role="tablist"
              aria-label="Study Abroad Programs"
            >
              {tabs.map((tab, index) => (
                <Link href={tab.path} key={tab.id} className="flex-1 mx-1">
                  <button
                    id={`tab-${tab.id}`}
                    role="tab"
                    aria-selected={activeMainTab === tab.id}
                    aria-controls={`tabpanel-${tab.id}`}
                    onClick={() => setActiveMainTab(tab.id)}
                    onKeyDown={(e) =>
                      handleTabKeyNav(e, index, tabs, setActiveMainTab)
                    }
                    tabIndex={activeMainTab === tab.id ? 0 : -1}
                    className={`w-full px-4 py-2 text-sm md:text-base whitespace-nowrap transition-colors ${
                      activeMainTab === tab.id
                        ? "bg-[#FF6B3D] text-white font-medium"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    } rounded-full`}
                  >
                    {tab.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Apply Section with Mascot */}
        <div className="relative w-full bg-gradient-to-r from-[#0A1015] to-[#121820] text-white py-12 bg-center bg-no-repeat bg-cover">
          <div className="w-full px-4 mt-1">
            <div className="flex flex-col lg:flex-row gap-16 relative max-w-7xl mx-auto">
              {/* Left Content */}
              <div className="lg:w-[35%]">
                <div className="mb-6">
                  <h2 className="text-[#FF6B3D] text-4xl font-bold mb-4">
                    Study Abroad with{" "}
                    <span className="text-[#ED1C24] ml-2">Prep</span>
                    <span className="text-[#15938F]">Academy</span>
                  </h2>
                  <p className="text-gray-300 mb-8">
                    Achieve your dream of studying abroad with expert guidance,
                    personalized counseling, and comprehensive support for
                    admissions, visas, and more.
                  </p>
                </div>

                {/* Progress Items */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <Image
                      src="/aboutusverified.png"
                      alt="Check Icon"
                      width={20} // 5 * 4
                      height={20} // 5 * 4
                      className="w-5 h-5 mr-3"
                    />

                    <p className="text-white">
                      Expert Counseling for Top Universities
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/aboutusverified.png"
                      alt="Check Icon"
                      width={20} // 5 * 4
                      height={20} // 5 * 4
                      className="w-5 h-5 mr-3"
                    />

                    <p className="text-white">
                      Comprehensive Support for Admissions & Visas
                    </p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <button className="bg-[#FF6B3D] hover:bg-[#E04D2E] text-white py-3 px-6 rounded-md font-medium transition-colors"
                    onClick={handleEnrollClick}
                    
                  >
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
                  <h3 className="text-[#FF6B3D] text-xl font-semibold mb-3">
                    NEED ASSISTANCE?
                  </h3>
                  <p className="text-white mb-6">
                    Get guidance and clear your doubts about studying abroad
                  </p>

                  {/* Form Fields */}
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4 mb-6">
                      <div>
                        <input
                          type="text"
                          name="full_name"
                          placeholder="Enter your Full Name"
                          value={formData.full_name}
                          onChange={handleInputChange}
                          className={`w-full bg-[#131F2C] border ${
                            mainFormErrors.full_name
                              ? "border-red-500"
                              : "border-[#1A2836]"
                          } rounded-md p-3 text-white`}
                          required
                        />
                        {mainFormErrors.full_name && (
                          <p className="text-red-400 text-sm mt-1">
                            {mainFormErrors.full_name}
                          </p>
                        )}
                      </div>

                      <div>
                        <input
                          type="tel"
                          name="mobile_number"
                          placeholder="Mobile Number"
                          value={formData.mobile_number}
                          onChange={handleInputChange}
                          className={`w-full bg-[#131F2C] border ${
                            mainFormErrors.mobile_number
                              ? "border-red-500"
                              : "border-[#1A2836]"
                          } rounded-md p-3 text-white`}
                          maxLength={10}
                          required
                        />
                        {mainFormErrors.mobile_number && (
                          <p className="text-red-400 text-sm mt-1">
                            {mainFormErrors.mobile_number}
                          </p>
                        )}
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full bg-[#131F2C] border ${
                            mainFormErrors.email
                              ? "border-red-500"
                              : "border-[#1A2836]"
                          } rounded-md p-3 text-white`}
                          required
                        />
                        {mainFormErrors.email && (
                          <p className="text-red-400 text-sm mt-1">
                            {mainFormErrors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <input
                          type="text"
                          name="college_studied"
                          placeholder="College or School Studied"
                          value={formData.college_studied}
                          onChange={handleInputChange}
                          className={`w-full bg-[#131F2C] border ${
                            mainFormErrors.college_studied
                              ? "border-red-500"
                              : "border-[#1A2836]"
                          } rounded-md p-3 text-white`}
                          required
                        />
                        {mainFormErrors.college_studied && (
                          <p className="text-red-400 text-sm mt-1">
                            {mainFormErrors.college_studied}
                          </p>
                        )}
                      </div>

                      <div>
                        <input
                          type="text"
                          name="location"
                          placeholder="Location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className={`w-full bg-[#131F2C] border ${
                            mainFormErrors.location
                              ? "border-red-500"
                              : "border-[#1A2836]"
                          } rounded-md p-3 text-white`}
                          required
                        />
                        {mainFormErrors.location && (
                          <p className="text-red-400 text-sm mt-1">
                            {mainFormErrors.location}
                          </p>
                        )}
                      </div>

                      <div>
                        <div className="relative">
                          <select
                            name="program_type"
                            value={formData.program_type}
                            onChange={handleInputChange}
                            className={`w-full bg-[#131F2C] border ${
                              mainFormErrors.program_type
                                ? "border-red-500"
                                : "border-[#1A2836]"
                            } rounded-md p-3 text-white appearance-none`}
                            required
                          >
                            <option value="" disabled>
                              Preferred Online Program
                            </option>
                            <option value="online">Online</option>
                            <option value="offline">Offline</option>
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
                        {mainFormErrors.program_type && (
                          <p className="text-red-400 text-sm mt-1">
                            {mainFormErrors.program_type}
                          </p>
                        )}
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
              <h3 className="text-[#F55D3E] font-medium mb-2 uppercase text-base">
                {card.title}
              </h3>
              <p className="text-gray-300 text-base md:text-lg">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatExamApplySection;
