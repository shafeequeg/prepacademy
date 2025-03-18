// CatExamApplySection.tsx

"use client"

import React, { useEffect, useRef } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com'; // Import EmailJS

import Image from 'next/image';
// interface VideoCardProps {
//   title: string;
//   thumbnail: string;
// }



interface CourseCardProps {
  // code: string;
  title: string;
  description: string;
  classType?: string;
  path?: string;
  className?: string; 
}


const CourseCard: React.FC<CourseCardProps> = ({ title, description, classType, path, className }) => {
  // Limit the description to 15 words (adjust as needed)
  const maxWords = 5;
  const truncatedDescription = description.split(" ").length > maxWords
    ? description.split(" ").slice(0, maxWords).join(" ") + "..."
    : description;

  const cardContent = (
    <div className={`bg-[#1F1414] p-5 rounded-lg hover:bg-[#2A1B1B] transition-all duration-300 flex flex-col items-center text-center min-h-[150px] ${className}`}>
      <h3 className="text-[#F55D3E] text-lg font-semibold mb-2">{title}</h3>
      <p className="text-white text-base">{truncatedDescription}</p>
      {classType && (
        <p className="text-white text-sm mt-2">{classType}</p>
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




const tabs = [
  { 
    id: "engineering", 
    label: "ENGINEERING", 
    path: "/engineering",
    dropdownItems: [
      { label: "JEE", path: "/schoolcourse/management/cat" },
      { label: "KEAM", path: "/schoolcourse/bba" },
      { label: "BITSAT", path: "/schoolcourse/hr" },
      { label: "VITEEE", path: "/schoolcourse/hr" },
      { label: "KCET", path: "/schoolcourse/hr" },
     
    ]
   
  },
  { 
    id: "MEDICAL", 
    label: "MEDICAL", 
    path: "/medical",
    dropdownItems: [
      { label: "NEET (UG)", path: "/medical/neet" },
      { label: "PARAMEDICAL ENTRANCE", path: "/medical/neet" },
      { label: "JIPMER", path: "/medical/neet" },

    ]
  },
  
  { 
    id: "MANAGEMENT", 
    label: "MANAGEMENT", 
    path: "/management",
    dropdownItems: [
      { label: "IPM ", path: "/schoolcourse/ipm" },
      { label: "CHRIST", path: "/schoolcourse/christ" },
      { label: "SET", path: "/schoolcourse/set" },
      { label: "NPAT", path: "/schoolcourse/npat" },
      { label: "MHCET", path: "/schoolcourse/mhcet" },


    ]
  },
  
 
  { 
    id: "LAW", 
    label: "LAW", 
    path: "/law",
    dropdownItems: [
      { label: "CLAT", path: "/schoolcourse-law/clat" },
      { label: "SLAT", path: "/schoolcourse/slat" },
      { label: "AILET", path: "/schoolcourse/ailet" },
      { label: "KLEE", path: "/schoolcourse/klee" },
      { label: "CULEE", path: "/schoolcourse/culee" },

    ]
  },

  
 

 
  { 
    id: "CUET", 
    label: "DEFENCE", 
    path: "/defence",
    dropdownItems: [
      { label: "NDA ", path: "/schoolcourse/nda" },
      { label: "AFCAT ", path: "/schoolcourse/afcat" },

    ]
  },

  { 
    id: "DESIGN", 
    label: "DESIGN & ARCHITECTURE", 
    path: "/design",
    dropdownItems: [
      { label: "NID ", path: "/schoolcourse/design/nid" },
      { label: "NIFT ", path: "/schoolcourse/design/nift" },
      { label: "UCEED ", path: "/schoolcourse/design/uceed" },
      { label: "CEED ", path: "/schoolcourse/design/ceed" },
      { label: "JEE MAIN ", path: "/schoolcourse/design/jee" },
      { label: "NATA ", path: "/schoolcourse/design/nata" },

    ]
  },
  { 
    id: "OTHERS", 
    label: "OTHERS", 
    path: "/others",
    dropdownItems: [
      { label: "ASHOKA UNIVERSITY ", path: "/schoolcourse/others/ashoka" },
      { label: "CHRIST UNIVERSITY ", path: "/schoolcourse/others/christ" },
      { label: "SYMBIOSIS ", path: "/schoolcourse/others/symbiosis" },
      { label: "NMIMS ", path: "/schoolcourse/others/nmims" },
      { label: "ST. XAVIER'S ", path: "/schoolcourse/others/xaviers" },

     

    ]
  },
  
  
  { 
    id: "TUITIONS", 
    label: "TUITIONS", 
    path: "/tuitions",
    dropdownItems: [
      { label: "PHYSICS ", path: "/schoolcourse/tuitions/physics" },
      { label: "CHEMISTRY", path: "/schoolcourse/tuitions/chemistry" },
      { label: "MATHS", path: "/schoolcourse/tuitions/maths" },
      { label: "BIOLOGY ", path: "/schoolcourse/tuitions/biology" },
      { label: "ACCOUNTING ", path: "/schoolcourse/tuitions/accounting" },
      { label: "ECONOMICS", path: "/schoolcourse/tuitions/economics" },
      { label: "ENGLISH ", path: "/schoolcourse/tuitions/english" },
      { label: "COMMERCE", path: "/schoolcourse/tuitions/commerce" },
      { label: "BUSINESS STUDIES", path: "/schoolcourse/tuitions/business" },


    ]

    // {
    //   // code: "TUITIONS",
    //   title: "TUITIONS",
    //   description: "PHYSICS, CHEMISTRY, MATHS, BIOLOGY, ACCOUNTING, ECONOMICS,ENGLISH,COMMERCE,BUSINESS STUDIES",
    //   classType: "CLASSES FOR 11TH & 12TH",
    //   path: "/courses/bank"

    // }
  }
];


const CatExamApplySection: React.FC = () => {


//   const [showIcons, setShowIcons] = useState(true);
// const [lastScrollY, setLastScrollY] = useState(0);
// const [isModalOpen, setIsModalOpen] = useState(false);
  
const [formData, setFormData] = useState({
  fullname: "",
  phone: "",
  email: "",
  college: "",
  program: "",
});
// const [activeTab, setActiveTab] = useState("online");
const [activeMainTab, setActiveMainTab] = useState("MANAGEMENT");
const [openDropdown, setOpenDropdown] = useState<string | null>(null);
const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});
// const filteredCourses = courseCards.filter((course) => course.type === activeTab);




const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  console.log(`Input changed: ${name} = ${value}`); // Debugging log

  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      // Replace with your EmailJS service ID, template ID, and user ID
      const serviceID = "service_eb5cvhl";
      const templateID = "template_lqeg482";
      const userID = "nk7-kQzPEcwr5RxjW";
  
      // Send the form data via EmailJS
      emailjs
        .send(serviceID, templateID, formData, userID)
        .then((response) => {
          console.log("Email sent successfully!", response.status, response.text);
          toast.success("Your message has been sent successfully!");
          // Reset the form
          setFormData({
            fullname: "",
            phone: "",
            email: "",
            college: "",
            program: "",
          });
        })
        .catch((error) => {
          console.error("Failed to send email:", error);
          toast.error("Failed to send the message. Please try again.");
        });
    };
  

    

  const schoolCourses = [
    {
      // code: "ENGINEERING",
      title: "ENGINEERING",
      description: "JEE, KEAM, BITSAT, VITEEE, KCET",
      classType: "CLASSES FOR 11TH, 12TH & DROPPERS",
      path: "/courses/bank"

    },
    {
      // code: "MEDICAL",
      title: "MEDICAL",
      description: "NEET (UG), PARAMEDICAL ENTRANCE, JIPMER",
      classType: "CLASSES FOR 11TH, 12TH & DROPPERS",
      path: "/courses/bank"

    },
    {
      // code: "MANAGEMENT",
      title: "MANAGEMENT",
      description: "IPM, CHRIST, SET, NPAT,MHCET",
      classType: "CLASSES FOR 12TH & DROPPERS",
      path: "/schoolcourse/management"

    },
    {
      // code: "LAW",
      title: "LAW",
      description: "CLAT, SLAT, AILET, KLEE, CULEE",
      classType: "CLASSES FOR 11TH, 12TH & DROPPERS",
      path: "/law"


    },
    {
      // code: "CUET",
      title: "  CUET ",
        description: "COMMON UNIVERSITY ENTRANCE TEST",
      classType: "CLASSES FOR 12TH & DROPPERS",
      path: "/courses/bank"

    },
    {
      // code: "DEFENCE",
      title: "DEFENCE",
      description: "NDA, AFCAT",
      classType: "CLASSES FOR 11TH, 12TH & DROPPERS",
      path: "/courses/bank"

    },
    {
      // code: "DESIGN",
      title: "DESIGN & ARCHITECTURE",
      description: "NID, NIFT, UCEED, CEED, JEE MAIN, NATA",
      classType: "CLASSES FOR 11TH, 12TH & DROPPERS",
      path: "/courses/bank"

    },
    {
      // code: "OTHERS",
      title: "OTHERS",
      description: "ASHOKA UNIVERSITY, CHRIST UNIVERSITY , SYMBIOSIS,NMIMS,ST. XAVIER'S",
      classType: "CLASSES FOR 12TH & DROPPERS",
      path: "/courses/bank"

    },
    {
      // code: "TUITIONS",
      title: "TUITIONS",
      description: "PHYSICS, CHEMISTRY, MATHS, BIOLOGY, ACCOUNTING, ECONOMICS,ENGLISH,COMMERCE,BUSINESS STUDIES",
      classType: "CLASSES FOR 11TH & 12TH",
      path: "/courses/bank"

    }
  ];
 

 

  
  
  const toggleDropdown = (tabId: string | null) => {
    setOpenDropdown(openDropdown === tabId ? null : tabId);
  };
  
  // Handle keyboard navigation for tabs
  const handleTabKeyNav = (    e: React.KeyboardEvent<HTMLElement> , index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % tabs.length;
      setActiveMainTab(tabs[nextIndex].id);
      document.getElementById(`tab-${tabs[nextIndex].id}`)?.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + tabs.length) % tabs.length;
      setActiveMainTab(tabs[prevIndex].id);
      document.getElementById(`tab-${tabs[prevIndex].id}`)?.focus();
    } else if (e.key === 'ArrowDown') {
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
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (itemIndex + 1) % items.length;
      document.getElementById(`dropdown-${tabId}-item-${nextIndex}`)?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (itemIndex - 1 + items.length) % items.length;
      document.getElementById(`dropdown-${tabId}-item-${prevIndex}`)?.focus();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setOpenDropdown(null);
      document.getElementById(`tab-${tabId}`)?.focus();
    }
  };
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!openDropdown) return; // Ensure openDropdown is not null
  
      const dropdownElement = dropdownRefs.current[openDropdown] as HTMLElement | null;
  
      if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);
  
  


 

  return (
    <div className="relative w-full bg-gradient-to-r from-[#121010] to-[#1A1311] text-white">
  {/* Background Image Between Sections */}
  {/* Main Content */}
  <div
  className="flex items-center justify-between w-full no-scrollbar bg-black mt-32 p-3"
  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
  role="tablist"
  aria-label="Study Abroad Programs"
>
  {tabs.map((tab, index) => (
  <div
  key={tab.id}
  className="flex-1 mx-1 relative"
  ref={(el) => {
    dropdownRefs.current[tab.id] = el; // Assign the element to the ref object
  }}
>      <button 
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
          className={`ml-1 w-4 h-4 transition-transform ${openDropdown === tab.id ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      {/* Dropdown menu */}
      {openDropdown === tab.id && (
          <div 
          className="absolute z-[1000] mt-1 w-[110%] overflow-hidden bg-black border border-gray-700 rounded-md shadow-lg" // Increased width to 105%
          role="menu"
          aria-labelledby={`tab-${tab.id}`}
        >
      
          {tab.dropdownItems.map((item, itemIndex) => (
            <Link 
              key={`${tab.id}-${itemIndex}`} 
              href={item.path}
              id={`dropdown-${tab.id}-item-${itemIndex}`}
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#FF6B3D] hover:text-white whitespace-nowrap rounded-md m-1"
              role="menuitem"
              tabIndex={openDropdown === tab.id ? 0 : -1}
              onClick={() => setOpenDropdown(null)}
              onKeyDown={(e) => handleDropdownKeyNav(e, tab.id, itemIndex, tab.dropdownItems)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  ))}
</div>
  <div className="relative w-full z-10  ">
 
    {/* Apply Section with Mascot */}
    <div 
      className="relative w-full bg-gradient-to-r p- from-[#0A1015] to-[#121820] text-white py-12 bg-center bg-no-repeat bg-cover "
    >
      <div className="w-full px-4 mt-24">
        <div className="flex flex-col lg:flex-row gap-16 relative max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="lg:w-[35%]">
            <div className="mb-6">
              {/* <p className="text-[#FF6B3D] text-sm font-medium px-3 py-1 bg-[#1A2836] inline-block rounded-md mb-4">
                Learn from the Experts
              </p> */}
              <h2 className="text-[#FF6B3D] text-4xl font-bold mb-4">School Courses with
                 {/* Prep Academy  */}
                 <span className='text-[#ED1C24] ml-2'>Prep</span><span className='text-[#15938F]'>Academy</span>
                 </h2>
              <p className="text-gray-300 mb-8">
                Based on past trends, School Courses exam is expected to be held on the last Sunday of November 2025. The official notification is expected to be released towards the end of July 2025.
              </p>
            </div>

            {/* Progress Items */}
            <div className="space-y-3 mb-8">
  <div className="flex items-center">
    <img 
      src="/aboutusverified.png" 
      alt="Check Icon" 
      className="w-5 h-5 mr-3"
    />
    <p className="text-white">	Expert Faculty & Personalized Mentorship </p>
  </div>
  <div className="flex items-center">
    <img 
      src="/aboutusverified.png" 
      alt="Check Icon" 
      className="w-5 h-5 mr-3"
    />
    <p className="text-white">Comprehensive School  Online /Offline Course </p>
  </div>
</div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button className="bg-[#FF6B3D] hover:bg-[#E04D2E] text-white py-3 px-6 rounded-md font-medium transition-colors">
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
        <img 
          src="/catexamtelegram.png" 
          alt="Telegram Icon" 
          className="w-5 h-5 mr-2"
        />
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
          <div className="lg:w-[45%] flex flex-col">
            <div className="bg-[#0E1721] p-8 rounded-lg border border-[#1A2836] shadow-lg">
              <h3 className="text-[#FF6B3D] text-xl font-semibold mb-3">NEED ASSISTANCE?</h3>
              <p className="text-white mb-6">Get guidance and clear your doubts</p>
              
              {/* Form Fields */}
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
                      <input
                        type="text"
                        name="college"
                        placeholder="College Studied"
                        value={formData.college}
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
                          <option value="" disabled>
                            Preferred Online Program
                          </option>
                          <option value="CAT Preparation">CAT Preparation</option>
                          <option value="MBA Entrance">MBA Entrance</option>
                          <option value="GMAT Preparation">GMAT Preparation</option>
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
   <div className="container mx-auto px-4 py-8">
         <div>
         <div className="flex flex-col md:flex-row gap-6 mb-8">
  {/* Left Section */}
  <div className="w-full md:w-1/2 flex flex-col justify-center  relative left-20"> {/* Positive margin to push right */}
    <h2 className="text-4xl mb-4">
      <span className="text-[#F55D3E] font-serif italic pl-4">School</span> Courses
    </h2>
    <p className="text-white text-lg md:text-2xl mb-6 max-w-lg pl-4">
      The beauty of learning was never meant to be confined within the four walls of a classroom. Prep Academy goes above and beyond the traditional teaching methods, bringing together the most skilled faculty to create an unparalleled learning experience for our students. When others rely on textbooks, we rely on innovation. When they focus on memorization, we focus on understanding. That&apos;s what sets us apart.
    </p>
  </div>

  {/* Right Section */}
  <div className="relative w-1/2 aspect-[4/3] min-h-[320px]"> {/* No margin change here */}
    <Image 
      src="/allcourse/schoolcourse.jpeg" 
      alt="School Students" 
      fill 
      className="rounded-lg object-cover" 
      sizes="(max-width: 768px) 100vw, 50vw"
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
                //  path={course.path}
 
                 className="border-l-4 border-[#F55D3E] p-4"
               />
             ))}
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
</div>
  );
};

export default CatExamApplySection;