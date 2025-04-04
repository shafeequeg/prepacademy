// CatExamApplySection.tsx

"use client";

import React, { useEffect, useRef } from "react";
// import Image from 'next/image';
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
// import emailjs from 'emailjs-com'; // Import EmailJS

import Image from "next/image";
import axiosInstance from "@/app/components/apiconfig/axios";
import { API_URLS } from "@/app/components/apiconfig/api_urls";
import AssistanceForm from "@/app/components/assistanceForm/AssistanceForm";
// interface VideoCardProps {
//   title: string;
//   thumbnail: string;
// }

// interface DemoVideoCardProps {
//   title: string;
//   videoId: string;
// }

interface CourseCardProps {
  // code: string;
  title: string;
  description: string;
  classType?: string;
  path?: string;
  className?: string;
}

interface Program {
  id: string;
  name: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  classType,
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

  // if (path) {
  //   return (
  //     <Link href={path} className="block h-full">
  //       {cardContent}
  //     </Link>
  //   );
  // }

  return cardContent;
};

// const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnail }) => {
//   return (
//     <div className="relative group overflow-hidden rounded-lg w-full">
//       <div className="relative w-full h-56 md:h-64 lg:h-72">
//         <Image
//           src={thumbnail}
//           alt={title}
//           fill
//           className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
//         />
//         {/* Play button overlay */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="bg-black bg-opacity-30 rounded-full p-3 flex items-center justify-center">
//             <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
//           </div>
//         </div>
//       </div>
//       <p className="text-lg md:text-xl text-gray-300 mb-6">
//       {title}</p>
//     </div>
//   );
// };

const collegeCourses = [
  {
    // code: "MGMT",
    title: "Management",
    description: "CAT, XAT, KMAT, CMAT, MAT, NMAT, CUET(PG), MICAT, MHCET",
    path: "/collegecourse",
  },
  {
    // code: "CIVIL",
    title: "Civil Services",
    description: "UPSC",
    path: "/courses/civil-services",
  },
  {
    // code: "GOVT",
    title: "Government",
    description: "RAILWAY, SSC",
    path: "/courses/government",
  },
  {
    // code: "DEF",
    title: "Defence",
    description: "CDS, AFCAT ",
    path: "/courses/defence",
  },
  {
    // code: "DESIGN",
    title: "Design & Architecture",
    description: "NID PG, NIFT PG",
    path: "/courses/design-architecture",
  },
  {
    // code: "BANK",
    title: "Bank",
    description:
      "SBI, IBPS P O, RBI GRADE B, IBPS RRB, SBI CLERK, IBPS CLERK, NABARD , LIC AAO",
    path: "/courses/bank",
  },
];
const tabs = [
  {
    id: "MANAGEMENT",
    label: "MANAGEMENT",
    path: "/collegecourse",
    dropdownItems: [
      { label: "CAT", path: "/collegecourse/management/cat" },
      { label: "XAT", path: "/collegecourse/bba" },
      { label: "KMAT", path: "/collegecourse/hr" },
      { label: "CMAT", path: "/collegecourse/hr" },
      { label: "MAT", path: "/collegecourse/hr" },
      { label: "NMAT", path: "/collegecourse/hr" },
      { label: "CUET(PG)", path: "/collegecourse/hr" },
      { label: "MICAT", path: "/collegecourse/hr" },
      { label: "MHCET", path: "/collegecourse/hr" },
    ],
  },
  {
    id: "CEVILSERVICE",
    label: "CIVIL SERVICE",
    path: "/slat",
    dropdownItems: [{ label: "UPSC", path: "/slat/ias" }],
  },
  {
    id: "GOVERNMENT",
    label: "GOVERNMENT",
    path: "/ailet",
    dropdownItems: [
      { label: "RAILWAY ", path: "/ailet/state" },
      { label: "SSC", path: "/ailet/central" },
    ],
  },
  {
    id: "DEFENCE",
    label: "DEFENCE",
    path: "/klee",
    dropdownItems: [
      { label: "CDS", path: "/klee/nda" },
      { label: "AFCAT", path: "/klee/cds" },
    ],
  },
  {
    id: "MAT",
    label: "DESIGN & ARCHITECTURE",
    path: "/culee",
    dropdownItems: [
      { label: "NID PG ", path: "/culee/nata" },
      { label: "NIFT PG", path: "/culee/nift" },
    ],
  },
  {
    id: "BANK",
    label: "BANK",
    path: "/culee/bank",
    dropdownItems: [
      { label: "SBI ", path: "/culee/bank/sbi-po" },
      { label: "IBPS P O", path: "/culee/bank/ibps" },
      { label: "RBI GRADE B", path: "/culee/bank/rbi" },
      { label: "IBPS RRB ", path: "/culee/bank/sbi-po" },
      { label: "SBI CLERK ", path: "/culee/bank/sbi-po" },
      { label: "IBPS CLERK ", path: "/culee/bank/sbi-po" },
      { label: "NABARD ", path: "/culee/bank/sbi-po" },
      { label: "LIC AAO ", path: "/culee/bank/sbi-po" },
    ],
  },
];

const CatExamApplySection: React.FC = () => {
  //   const [showIcons, setShowIcons] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const [EnrollformData, setEnrollFormData] = useState({
    full_name: "",
    mobile_number: "",
    email: "",
    school_college: "",
    class_type: "",
  });

  // const [activeTab, setActiveTab] = useState("online");
  const [activeMainTab, setActiveMainTab] = useState("MANAGEMENT");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});
  // const filteredCourses = courseCards.filter((course) => course.type === activeTab);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  //   const { name, value } = e.target;
  //   console.log(`Input changed: ${name} = ${value}`); // Debugging log

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleenrollformInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEnrollFormData({ ...EnrollformData, [name]: value });
  };

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

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

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  // const videoCards = [
  //   {
  //     title: "Explore About Courses",
  //     thumbnail: "/news1.png",
  //   },
  //   {
  //     title: "Explore About Courses",
  //     thumbnail: "/new2.png",
  //   },
  //   {
  //     title: "Explore About Courses",
  //     thumbnail: "/news3.png",
  //   },
  // ];

  const toggleDropdown = (tabId: string | null) => {
    setOpenDropdown(openDropdown === tabId ? null : tabId);
  };

  // Handle keyboard navigation for tabs
  const handleTabKeyNav = (
    e: React.KeyboardEvent<HTMLElement>,
    index: number
  ) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (index + 1) % tabs.length;
      setActiveMainTab(tabs[nextIndex].id);
      document.getElementById(`tab-${tabs[nextIndex].id}`)?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (index - 1 + tabs.length) % tabs.length;
      setActiveMainTab(tabs[prevIndex].id);
      document.getElementById(`tab-${tabs[prevIndex].id}`)?.focus();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      toggleDropdown(tabs[index].id);
    }
  };

  // Handle keyboard navigation for dropdown items
  const handleDropdownKeyNav = <T,>(
    e: React.KeyboardEvent<HTMLElement>,
    tabId: string,
    itemIndex: number,
    items: Array<T>
  ) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (itemIndex + 1) % items.length;
      document.getElementById(`dropdown-${tabId}-item-${nextIndex}`)?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = (itemIndex - 1 + items.length) % items.length;
      document.getElementById(`dropdown-${tabId}-item-${prevIndex}`)?.focus();
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpenDropdown(null);
      document.getElementById(`tab-${tabId}`)?.focus();
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!openDropdown) return; // Ensure openDropdown is not null

      const dropdownElement = dropdownRefs.current[
        openDropdown
      ] as HTMLElement | null;

      if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  // Add this useEffect to handle body scrolling
  useEffect(() => {
    if (openDropdown) {
      // Disable scrolling on body when dropdown is open
      document.body.style.overflow = "hidden";
      // Store current scroll position
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      // Re-enable scrolling when dropdown is closed
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      // Cleanup function to ensure scrolling is re-enabled
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.body.style.top = "";
    };
  }, [openDropdown]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative w-full bg-gradient-to-r from-[#121010] to-[#1A1311] text-white">
      {/* Background Image Between Sections */}
      {/* Main Content */}
      <div
        className="flex items-center overflow-x-auto w-full bg-black mt-32 p-3 space-x-2 scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
        role="tablist"
        aria-label="Study Abroad Programs"
      >
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className="relative flex-shrink-0 w-auto min-w-[150px]"
            ref={(el) => {
              dropdownRefs.current[tab.id] = el;
            }}
          >
            <button
              id={`tab-${tab.id}`}
              role="tab"
              aria-selected={activeMainTab === tab.id}
              aria-controls={`tabpanel-${tab.id}`}
              aria-expanded={openDropdown === tab.id}
              onClick={() => {
                setActiveMainTab(tab.id);
                toggleDropdown(tab.id);
              }}
              onKeyDown={(e) => handleTabKeyNav(e, index)}
              tabIndex={activeMainTab === tab.id ? 0 : -1}
              className={`w-full px-4 py-2 text-sm md:text-base whitespace-nowrap transition-colors ${
                activeMainTab === tab.id
                  ? "bg-[#FF6B3D] text-white font-medium"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              } rounded-full flex items-center justify-center`}
            >
              <span>{tab.label}</span>
              <svg
                className={`ml-1 w-4 h-4 transition-transform ${
                  openDropdown === tab.id ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {/* Dropdown menu with fixed positioning */}
            {openDropdown === tab.id && (
              <div
                className="fixed inset-0 z-[9999] bg-black/50 overflow-hidden"
                onClick={() => setOpenDropdown(null)}
              >
                <div
                  className="w-[90%] max-w-md bg-black border border-gray-700 rounded-md shadow-lg mx-auto mt-56"
                  style={{
                    position: "relative",
                    top: "0",
                    maxHeight: "calc(100vh - 150px)",
                    overflowY: "auto",
                  }}
                  onClick={(e) => e.stopPropagation()}
                  role="menu"
                  aria-labelledby={`tab-${tab.id}`}
                >
                  <div className="flex flex-col space-y-2 p-2">
                    {tab.dropdownItems.map((item, itemIndex) => (
                      <Link
                        key={`${tab.id}-${itemIndex}`}
                        href={item.path}
                        id={`dropdown-${tab.id}-item-${itemIndex}`}
                        className="block w-full px-4 py-2 text-sm text-gray-300 hover:bg-[#FF6B3D] hover:text-white whitespace-nowrap rounded-md"
                        role="menuitem"
                        tabIndex={openDropdown === tab.id ? 0 : -1}
                        onClick={() => setOpenDropdown(null)}
                        onKeyDown={(e) =>
                          handleDropdownKeyNav(
                            e,
                            tab.id,
                            itemIndex,
                            tab.dropdownItems
                          )
                        }
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="relative w-full z-10  ">
        {/* Apply Section with Mascot */}
        <div className="relative w-full bg-gradient-to-r p- from-[#0A1015] to-[#121820] text-white py-12 bg-center bg-no-repeat bg-cover ">
          <div className="w-full px-4 mt-24">
            <div className="flex flex-col lg:flex-row gap-16 relative max-w-7xl mx-auto">
              {/* Left Content */}
              <div className="lg:w-[35%]">
                <div className="mb-6">
                  {/* <p className="text-[#FF6B3D] text-sm font-medium px-3 py-1 bg-[#1A2836] inline-block rounded-md mb-4">
                Learn from the Experts
              </p> */}
                  <h2 className="text-[#FF6B3D] text-4xl font-bold mb-4">
                    College Courses with
                    {/* Prep Academy  */}
                    <span className="text-[#ED1C24] ml-2">Prep</span>
                    <span className="text-[#15938F]">Academy</span>
                  </h2>
                  <p className="text-gray-300 mb-8">
                    At Prep Academy, we are dedicated to empowering students
                    with the knowledge and skills necessary for a brighter
                    future. Our comprehensive coaching programs are designed to
                    prepare students for a variety of entrance examinations,
                    including CAT, XAT, KMAT, CMAT,etc..Our tailored programs
                    are designed to equip students with the knowledge and skills
                    necessary to excel in these competitive tests.{" "}
                  </p>
                </div>

                {/* Progress Items */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <Image
                      src="/aboutusverified.png"
                      alt="Check Icon"
                      width={20}
                      height={20}
                      className="w-5 h-5 mr-3"
                    />
                    <p className="text-white">
                      {" "}
                      Expert Faculty & Personalized Mentorship{" "}
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
                      Comprehensive College Online /Offline Course{" "}
                    </p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <button
                    className="bg-[#FF6B3D] hover:bg-[#E04D2E] text-white py-3 px-6 rounded-md font-medium transition-colors"
                    onClick={openModal}
                  >
                    Enroll Now
                  </button>
                  <button className="border border-[#FF6B3D] text-[#FF6B3D] py-3 px-6 rounded-md font-medium hover:bg-[#FF6B3D] hover:text-white transition-colors">
                    Get a FREE Trial
                  </button>
                </div>

                {/* Telegram Link with Underline */}
                <div className="mt-4">
                  <a
                    href="#"
                    className="flex items-center text-gray-300 hover:text-[#FF6B3D] text-sm border-b border-transparent hover:border-[#FF6B3D] transition duration-300"
                  >
                    <div className="relative w-5 h-5 mr-2">
                      <Image
                        src="/catexamtelegram.png"
                        alt="Telegram Icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                    Join Our Telegram Channel
                  </a>
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
              <AssistanceForm course="college-course" />
            </div>
          </div>
        </div>

        {/* Related Videos Section */}
        <div className="bg-black text-white flex justify-center">
          {/* Related Videos Section */}
          {/* <div className="px-6 py-10 max-w-7xl w-full">
    <h2 className="text-4xl font-semibold text-left mb-6 ml-2">
      <span className="font-serif italic font-normal">Related</span>{" "}
      <span className="text-[#F55D3E] font-semibold">Videos</span>
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
    {relatedVideos.map((video, index) => (
      <DemoVideoCard key={index} title={video.title} videoId={video.videoId} />
    ))}
  </div>

  <div className="flex justify-center">
    <Link href="https://www.youtube.com/@PrepAcademy" target="_blank" rel="noopener noreferrer" className="text-[#F55D3E] flex items-center hover:underline">
      <span className='text-lg md:text-xl text-[#F55D3E]'>View More</span>
      <ChevronRight size={16} />
    </Link>
  </div>
  </div> */}
          <div className="w-full bg-[#120B0B] py-8">
            <div className="container mx-auto px-4">
              <div className="mb-16">
                <div className="flex flex-col md:flex-row gap-6 mb-8 w-full">
                  <div className="w-full md:w-1/2 flex flex-col justify-center relative left-">
                    <h2 className="text-4xl mb-4">
                      <span className="text-[#F55D3E] font-serif italic pl-4">
                        College
                      </span>{" "}
                      Courses
                    </h2>
                    <p className="text-white  text-base md:text-xl mb-6 max-w-lg pl-4">
                      The beauty of learning was never meant to be confined
                      within the four walls of a classroom. Prep Academy goes
                      above and beyond the traditional teaching methods,
                      bringing together the most skilled faculty to create an
                      unparalleled learning experience for our students. When
                      others rely on textbooks, we rely on innovation. When they
                      focus on memorization, we focus on understanding.
                      That&apos;s what sets us apart.
                    </p>
                  </div>
                  <div className="relative w-full md:w-[40%] aspect-[4/3] min-h-[250px]">
                    <Image
                      src="/allcourse/college.jpg"
                      alt="School Students"
                      fill
                      className="rounded-lg object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                    />
                  </div>

                  {/* <div className="relative w-[40%] aspect-[4/3] min-h-[250px]">
        <Image 
          src="/allcourse/school.jpg" 
          alt="School Students" 
          fill 
          className="rounded-lg object-cover" 
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        /> 
      </div> */}
                </div>

                {/* Updated college courses grid with 6 centered cards with navigation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                  {collegeCourses.map((course, index) => (
                    <CourseCard
                      key={index}
                      // code={course.code}
                      title={course.title}
                      description={course.description}
                      // path={course.path}
                      className="border-l-4 border-[#F55D3E] p-4"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full bg-gradient-to-r from-[#121010] to-[#1A1311] text-white">
        {/* Mascot Banner Section */}

        {/* Demo Videos Section */}
        {/* <div className="container mx-auto px-4 py-10">
  <div className="flex justify-between items-center mb-8">
    <h2 className="text-4xl font-semibold text-center mb-6 ml-2">
      <span className="text-white font-serif italic">Demo</span> 
      <span className="text-[#F55D3E]"> Videos</span>
    </h2>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
    {demoVideos.map((video, index) => (
      <DemoVideoCard key={index} title={video.title} videoId={video.videoId} />
    ))}
  </div>

  <div className="flex justify-center">
    <Link href="https://www.youtube.com/@PrepAcademy" target="_blank" rel="noopener noreferrer" className="text-[#F55D3E] flex items-center hover:underline">
      <span className='text-lg md:text-xl text-[#F55D3E]'>View More</span>
      <ChevronRight size={16} />
    </Link>
  </div>
</div> */}
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
              <svg
                width="16"
                height="16"
                className="md:w-5 md:h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Responsive layout - stack on mobile, side-by-side on larger screens */}
            <div className="flex flex-col md:flex-row h-full">
              {/* Left section - Title and Image */}
              <div className="bg-[#2B1615] p-3 md:p-6 md:w-2/5 flex flex-col items-center justify-center text-white">
                <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-6 text-center">
                  Upgrade Your Learning With Us
                </h2>
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
                <h3 className="text-center text-lg md:text-xl font-medium text-gray-800 mb-3 md:mb-6">
                  Fast Track Your Trial Class
                </h3>
                <form
                  className="space-y-2 md:space-y-4"
                  onSubmit={handleenrollSubmit}
                >
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="full_name"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
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
                    <label
                      htmlFor="email"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
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
                    <label
                      htmlFor="class_type"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
                    >
                      Class
                    </label>
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
                    <label
                      htmlFor="mobile_number"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <div className="flex">
                      <div className="flex items-center bg-gray-100 border border-gray-300 rounded-l-md px-2 md:px-3">
                        <Image
                          src="/gladiators/formcommonindia.png"
                          alt="IN"
                          width={12}
                          height={12}
                          className="mr-1 md:w-4 md:h-4"
                        />
                        <span className="text-xs md:text-sm text-gray-700">
                          +91
                        </span>
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
                    <label
                      htmlFor="school_college"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
                    >
                      School/Institute
                    </label>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 md:h-5 md:w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
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
