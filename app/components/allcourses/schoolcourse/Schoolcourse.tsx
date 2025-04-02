// CatExamApplySection.tsx

"use client"

import React, { useEffect, useRef } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import { toast } from 'react-toastify';
// import emailjs from 'emailjs-com'; // Import EmailJS

import Image from 'next/image';
import axiosInstance from '../../apiconfig/axios';
import { API_URLS } from '../../apiconfig/api_urls';
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


interface Program {
  id: string;
  name: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, classType, className }) => {
  const cardContent = (
    <div className={`bg-[#1F1414] p-5  rounded-lg hover:bg-[#2A1B1B] transition-all duration-300 flex flex-col items-center text-center min-h-[150px] min-w-[250px] ${className}`}>
      <h3 className="text-[#F55D3E] text-lg font-semibold mb-2">{title}</h3>
      <p className="text-white text-base overflow-hidden overflow-ellipsis line-clamp-3">
        {description}
      </p>
      {classType && (
        <p className="text-white text-sm mt-2">{classType}</p>
      )}
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




const tabs = [
  { 
    id: "engineering", 
    label: "ENGINEERING", 
    path: "/engineering",
    dropdownItems: [
      { label: "JEE", path: "/schoolcourse/engineering/jee" },
      { label: "KEAM", path: "/schoolcourse/engineering/keam" },
      { label: "BITSAT", path: "/schoolcourse/engineering/bitsat" },
      { label: "VITEEE", path: "/schoolcourse/engineering/vitee" },
      { label: "KCET", path: "/schoolcourse/engineering/kcet" },
     
    ]
   
  },
  { 
    id: "MEDICAL", 
    label: "MEDICAL", 
    path: "/medical",
    dropdownItems: [
      { label: "NEET (UG)", path: "schoolcourse/medical/neet" },
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
      { label: "NPAT", path: "/schoolcourse/management/npat" },
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
    label: "CUET", 
    path: "/cuet",
    dropdownItems: [
      { label: "CUET ", path: "/collegecourse/management/cuet" },

    ]
  },
 

 
  { 
    id: "DEFENCE", 
    label: "DEFENCE", 
    path: "/defence",
    dropdownItems: [
      { label: "NDA ", path: "/schoolcourse/defence/nda" },
      { label: "AFCAT ", path: "/schoolcourse/afcat" },

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
//(6-12 Standards)
    // {
    //   // code: "TUITIONS",
    //   title: "TUITIONS",
    //   description: "PHYSICS, CHEMISTRY, MATHS, BIOLOGY, ACCOUNTING, ECONOMICS,ENGLISH,COMMERCE,BUSINESS STUDIES",
    //   classType: "CLASSES FOR 11TH & 12TH",
    //   path: "/courses/bank"

    // }
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
    id: "DESIGN", 
    label: "DESIGN & ARCHITECTURE", 
    path: "/design",
    dropdownItems: [
      { label: "NID ", path: "/schoolcourse/designandarchitecture/nid" },
      { label: "NIFT ", path: "/schoolcourse/designandarchitecture/nift" },
      { label: "UCEED ", path: "/schoolcourse/designandarchitecture/uceed" },
      { label: "CEED ", path: "/schoolcourse/designandarchitecture/ceed" },
      { label: "JEE MAIN ", path: "/schoolcourse/designandarchitecture/jee" },
      { label: "NATA ", path: "/schoolcourse/designandarchitecture/nata" },

    ]
  },
 
  
  
];


const CatExamApplySection: React.FC = () => {


//   const [showIcons, setShowIcons] = useState(true);
// const [lastScrollY, setLastScrollY] = useState(0);
// const [isModalOpen, setIsModalOpen] = useState(false);
  
// const [formData, setFormData] = useState({
//   fullname: "",
//   phone: "",
//   email: "",
//   college: "",
//   program: "",
// });

 const [formData, setFormData] = useState({
    full_name: '',
    mobile_number: '',
    email: '',
    school_studied:'',
    preferred_program: '',
    submitted_at:'',
  });

  // const [EnrollformData, setEnrollFormData] = useState({
  //   full_name: "",
  //    mobile_number: "",
  //   email: "",
  // school_college: "",
  // class_type: "",
  // });

  const [screeningStep, setScreeningStep] = useState(1);
   const questions = {
    question1: "What is your learning goal?",
    question2: "When would you prefer to schedule classes?", 
    question3: "How did you hear about us?"
  };
  
  // Options for each question
  const questionOptions = {
    question1: ['Improve grades', 'Exam preparation', 'Learn new skills', 'Homework help'],
    question2: ['Weekday afternoons', 'Weekday evenings', 'Weekend mornings', 'Weekend afternoons'],
    question3: ['Friend or family', 'Social media', 'Search engine', 'Advertisement', 'Other']
  };
  const [formStep, setFormStep] = useState(0);

  // const [screeningStep, setScreeningStep] = useState(1);
  
  // Combined form data with questions and answers
  const [EnrollformData, setEnrollFormData] = useState({
    full_name: '',
    email: '',
    class_type: '',
    mobile_number: '',
    school_college: '',
    question1: questions.question1,
    question2: questions.question2,
    question3: questions.question3,
    answer1: '',
    answer2: '',
    answer3: ''
  });
// const [activeTab, setActiveTab] = useState("online");
const [activeMainTab, setActiveMainTab] = useState("MANAGEMENT");
const [openDropdown, setOpenDropdown] = useState<string | null>(null);
const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});
// const filteredCourses = courseCards.filter((course) => course.type === activeTab);
const [programs, setPrograms] = useState<Program[]>([]); // State to store fetched programs

const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

// const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//   const { name, value } = e.target;
//   console.log(`Input changed: ${name} = ${value}`); // Debugging log

//   setFormData((prevData) => ({
//     ...prevData,
//     [name]: value,
//   }));
// };

  
    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //   e.preventDefault();
  
    //   // Replace with your EmailJS service ID, template ID, and user ID
    //   const serviceID = "service_eb5cvhl";
    //   const templateID = "template_lqeg482";
    //   const userID = "nk7-kQzPEcwr5RxjW";
  
    //   // Send the form data via EmailJS
    //   emailjs
    //     .send(serviceID, templateID, formData, userID)
    //     .then((response) => {
    //       console.log("Email sent successfully!", response.status, response.text);
    //       toast.success("Your message has been sent successfully!");
    //       // Reset the form
    //       setFormData({
    //         full_name: "",
    //         mobile_number: "",
    //         email: "",
    //         preferred_program: "",
    //         submitted_at:""
    //       });
    //     })
    //     .catch((error) => {
    //       console.error("Failed to send email:", error);
    //       toast.error("Failed to send the message. Please try again.");
    //     });
    // };
  

    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    // const handleenrollformInputChange = (
    //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    // ) => {
    //   const { name, value } = e.target;
    //   setEnrollFormData({ ...EnrollformData, [name]: value });
    // };



    // const handleenrollSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //   e.preventDefault();
      
    //   try {
    //     const response = await axiosInstance.post(API_URLS.COMMONFORM.POST_FORM, {
    //       ...EnrollformData,
    //     });
      
    //     if (response.status >= 200 && response.status < 300) {
    //       console.log("Message sent successfully!", response.data);
    //       toast.success("Your message has been sent successfully!");
               
    //       // Reset form fields
    //       setIsModalOpen(false);
    //       setEnrollFormData({
    //         full_name: "",
    //        mobile_number: "",
    //       email: "",
    //     school_college: "",
    //     class_type: "",
    //       })
    //     } else {
    //       console.error("Unexpected status code:", response.status);
    //       toast.error("Failed to send the message. Please try again.");
    //     }
    //   } catch (error) {
    //     console.error("Failed to send message:", error);
    //     toast.error("Failed to send the message. Please try again.");
    //   }
    //   };
  
  //  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  
  //     // Replace with your EmailJS service ID, template ID, and user ID
  //     const serviceID = 'service_eb5cvhl';
  //     const templateID = 'template_lqeg482';
  //     const userID = 'nk7-kQzPEcwr5RxjW';
  
  //     // Send the form data via EmailJS
  //     emailjs.send(serviceID, templateID, formData, userID)
  //       .then((response) => {
  //         console.log('Email sent successfully!', response.status, response.text);
  //         toast.success('Your message has been sent successfully!');
  //         // Reset the form
  //         setFormData({
  //           fullname: '',
  //           phone: '',
  //           email: '',
  //           message: '',
  //         });
  //       })
  //       .catch((error) => {
  //         console.error('Failed to send email:', error);
  //         toast.error('Failed to send the message. Please try again.');
  //       });
  //   };


    const handleScreeningChange = (questionNum : number, answer : string) => {
      setEnrollFormData(prev => ({
        ...prev,
        [`answer${questionNum}`]: answer
      }));
    };

  const nextScreeningStep = () => {
    setScreeningStep(prev => prev + 1);
  };

  // Handle main form changes
  const handleFormChange = (e :React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEnrollFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Navigate through form steps
  const nextStep = () => {
    setFormStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (formStep > 0) {
      setFormStep(prev => prev - 1);
    } else if (screeningStep > 1) {
      setScreeningStep(prev => prev - 1);
    }
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
          school_studied: "",
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

  const handleEnrollSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await axiosInstance.post(API_URLS.COMMONFORM.POST_FORM, {
        ...EnrollformData
      });
    
      if (response.status >= 200 && response.status < 300) {
        console.log("Form submitted successfully!", response.data);
        toast.success("Your details have been submitted successfully!");
             
        // Reset form fields
        closeModal();
        setEnrollFormData({
          full_name: "",
          mobile_number: "",
          email: "",
          school_college: "",
          class_type: "",
          question1: questions.question1,
          question2: questions.question2,
          question3: questions.question3,
          answer1: '',
          answer2: '',
          answer3: ''
        });
        setScreeningStep(1);
        setFormStep(0);
      } else {
        console.error("Unexpected status code:", response.status);
        toast.error("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  };


  // Determine progress percentage
  const calculateProgress = () => {
    const totalSteps = 8; // 3 screening + 5 form fields
    const currentStep = screeningStep <= 3 ? screeningStep - 1 : 3 + formStep;
    return (currentStep / totalSteps) * 100;
  };

  // Reset the form when modal closes
  useEffect(() => {
    if (!isModalOpen) {
      setScreeningStep(1);
      setFormStep(0);
      setEnrollFormData({
        full_name: "",
        mobile_number: "",
        email: "",
        school_college: "",
        class_type: "",
        question1: questions.question1,
        question2: questions.question2,
        question3: questions.question3,
        answer1: '',
        answer2: '',
        answer3: ''
      });
    }
  }, [isModalOpen]);

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
      description: "PHYSICS, CHEMISTRY,BIOLOGY, MATHS,ENGLISH,COMMERCE,BUSINESS STUDIES,ACCOUNTING,ECONOMICS",
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
  
  

// Add this useEffect to handle body scrolling
useEffect(() => {
  if (openDropdown) {
    // Disable scrolling on body when dropdown is open
    document.body.style.overflow = 'hidden';
    // Store current scroll position
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${window.scrollY}px`;
  } else {
    // Re-enable scrolling when dropdown is closed
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }

  return () => {
    // Cleanup function to ensure scrolling is re-enabled
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    document.body.style.top = '';
  };
}, [openDropdown]);

 

  return (
    <div className="relative w-full bg-gradient-to-r from-[#121010] to-[#1A1311] text-white  ">
 
 <div 
  className="flex items-center overflow-x-auto w-full bg-black mt-32 p-3 space-x-2 scrollbar-hide"
  style={{
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    WebkitOverflowScrolling: "touch"
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
          className={`ml-1 w-4 h-4 transition-transform ${openDropdown === tab.id ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
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
        position: 'relative',
        top: '0',
        maxHeight: 'calc(100vh - 150px)',
        overflowY: 'auto'
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
            onKeyDown={(e) => handleDropdownKeyNav(e, tab.id, itemIndex, tab.dropdownItems)}
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
              At Prep Academy, we are dedicated to empowering students with the knowledge and skills necessary for a brighter future. Our comprehensive coaching programs are designed to prepare students for a variety of entrance examinations, including CLAT, CUET,IPM, NDA, NID ,NIFT etc…Our tailored programs are designed to equip students with the knowledge and skills necessary to excel in these competitive tests.              </p>
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
/>
    <p className="text-white">	Expert Faculty & Personalized Mentorship </p>
  </div>
  <div className="flex items-center">
  <Image 
  src="/aboutusverified.png" 
  alt="Check Icon" 
  width={20}  // 5 * 4
  height={20} // 5 * 4
  className="w-5 h-5 mr-3"
/>
    <p className="text-white">Comprehensive School  Online /Offline Course </p>
  </div>
</div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button className="bg-[#FF6B3D] hover:bg-[#E04D2E] text-white py-3 px-6 rounded-md font-medium transition-colors" 
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
          <div className="lg:w-[45%] flex flex-col">
            <div className="bg-[#0E1721] p-8 rounded-lg border border-[#1A2836] shadow-lg">
              <h3 className="text-[#FF6B3D] text-xl font-semibold mb-3">NEED ASSISTANCE?</h3>
              <p className="text-white mb-6">Get guidance and clear your doubts</p>
              
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
          name="school_studied"
          placeholder="School Studied"
          value={formData.school_studied}
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
  <div className="w-full md:w-1/2 flex flex-col justify-center  relative left-4"> 
    <h2 className="text-4xl mb-4">
      <span className="text-[#F55D3E] font-serif italic pl-4">School</span> Courses
    </h2>
    <p className="text-white text-lg md:text-lg mb-6 max-w-lg pl-4">
      The beauty of learning was never meant to be confined within the four walls of a classroom. Prep Academy goes above and beyond the traditional teaching methods, bringing together the most skilled faculty to create an unparalleled learning experience for our students. When others rely on textbooks, we rely on innovation. When they focus on memorization, we focus on understanding. That&apos;s what sets us apart.
    </p>
  </div>

  {/* Right Section */}
  <div className="relative w-[100%] md:w-[40%] aspect-[4/3] min-h-[250px]">
  <Image 
    src="/allcourse/school.jpg" 
    alt="School Students" 
    fill 
    className="rounded-lg object-cover" 
    sizes="(max-width: 768px) 100vw, 33vw"
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
     <div className="bg-white rounded-lg w-11/12 md:w-3/4 max-w-xl relative overflow-hidden max-h-[95vh] md:max-h-none">
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
       
       {/* Header section with image */}
       <div className="bg-[#F55D3E] p-4 md:p-6 text-white">
         <div className="flex flex-col md:flex-row items-center">
           <div className="md:w-1/3 flex justify-center mb-3 md:mb-0">
             <div className="w-20 h-20 md:w-32 md:h-32 relative">
               <Image 
                 src="/commonformmascot.png" 
                 alt="Learning Mascot" 
                 width={128}
                 height={128}
                 className="object-contain"
               />
             </div>
           </div>
           <div className="md:w-2/3">
             <h2 className="text-xl md:text-2xl font-bold text-center md:text-left">Fast Track Your Trial Class</h2>
             <p className="text-center md:text-left mt-2 text-sm md:text-base">We are just a step away from finding the perfect tutor for your child</p>
           </div>
         </div>
         
         {/* Progress bar */}
         <div className="w-full h-2 bg-white bg-opacity-30 rounded-full mt-4">
           <div 
             className="h-full bg-white rounded-full transition-all duration-300" 
             style={{ width: `${calculateProgress()}%` }}
           />
         </div>
       </div>
       
       <div className="p-4 md:p-6">
         {/* Screening Questions */}
         {screeningStep === 1 && (
  <div className="flex flex-col items-center">
    <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4">
      {questions.question1}
    </h3>
    <div className="space-y-3 w-full max-w-md">
      {questionOptions.question1.map((option) => (
        <button
          key={option}
          onClick={() => {
            handleScreeningChange(1, option);
            nextScreeningStep();
          }}
          className={`w-full p-3 text-left border rounded-lg transition-colors ${
            EnrollformData.answer1 === option
              ? 'bg-[#F55D3E] bg-orange-50'
              : 'border-gray-300 hover:bg-[#F55D3E]'
          }`}
        >
          <span className="text-gray-800">{option}</span>
        </button>
      ))}
    </div>
  </div>
)}
         
         {screeningStep === 2 && (
           <div className="flex flex-col items-center">
             <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4">{questions.question2}</h3>
             <div className="space-y-3 w-full max-w-md">
               {questionOptions.question2.map(option => (
                 <button
                   key={option}
                   onClick={() => {
                     handleScreeningChange(2, option);
                     nextScreeningStep();
                   }}
                   className={`w-full p-3 text-left border rounded-lg transition-colors ${
                     EnrollformData.answer2 === option 
                       ? 'bg-[#F55D3E] bg-orange-50' 
                       : 'border-gray-300 hover:bg-[#F55D3E]'
                   }`}
                 >
          <span className="text-gray-800">{option}</span>
          </button>
               ))}
             </div>
           </div>
         )}
         
         {screeningStep === 3 && (
           <div className="flex flex-col items-center">
             <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4">{questions.question3}</h3>
             <div className="space-y-3 w-full max-w-md">
               {questionOptions.question3.map(option => (
                 <button
                   key={option}
                   onClick={() => {
                     handleScreeningChange(3, option);
                     setScreeningStep(4); // Move to main form
                   }}
                   className={`w-full p-3 text-left border rounded-lg transition-colors ${
                     EnrollformData.answer3 === option 
                       ? 'bg-[#F55D3E] bg-orange-50' 
                       : 'border-gray-300 hover:bg-[#F55D3E]'
                   }`}
                 >
          <span className="text-gray-800">{option}</span>
          </button>
               ))}
             </div>
           </div>
         )}
         
         {/* Main Form Steps */}
         {screeningStep === 4 && (
           <div className="w-full max-w-md mx-auto">
             <form onSubmit={handleEnrollSubmit}>
               {formStep === 0 && (
               <div className="space-y-4">
               <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4 text-center">What's your name?</h3>
               <input 
                 type="text" 
                 id="full_name"
                 name="full_name"
                 placeholder="Your Full Name" 
                 value={EnrollformData.full_name || ''}  // Added fallback empty string
                 onChange={handleFormChange}
                 className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent"
                 required
               />
               <button 
                 type="button"
                 onClick={nextStep}
                 className={`w-full bg-[#F55D3E] text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors ${
                   !EnrollformData.full_name ? 'opacity-50 cursor-not-allowed' : ''
                 }`}
                 disabled={!EnrollformData.full_name}
               >
                 Continue
               </button>
             </div>
               )}
               
               {formStep === 1 && (
                 <div className="space-y-4">
                   <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4 text-center">What's your email address?</h3>
                   <input 
                     type="email" 
                     id="email"
                     name="email"
                     placeholder="Your Email Address" 
                     value={EnrollformData.email}
                     onChange={handleFormChange}
                     className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent"
                     required
                   />
                   <div className="flex space-x-3">
                     <button 
                       type="button"
                       onClick={prevStep}
                       className="w-1/3 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                     >
                       Back
                     </button>
                     <button 
                       type="button"
                       onClick={nextStep}
                       className="w-2/3 bg-[#F55D3E] text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                       disabled={!EnrollformData.email}
                     >
                       Continue
                     </button>
                   </div>
                 </div>
               )}
               
               {formStep === 2 && (
                 <div className="space-y-4">
                   <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4 text-center">Which class are you interested in?</h3>
                   <input 
                     type="text" 
                     id="class_type"
                     name="class_type"
                     placeholder="e.g. Math, Science, English" 
                     value={EnrollformData.class_type}
                     onChange={handleFormChange}
                     className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent"
                     required
                   />
                   <div className="flex space-x-3">
                     <button 
                       type="button"
                       onClick={prevStep}
                       className="w-1/3 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                     >
                       Back
                     </button>
                     <button 
                       type="button"
                       onClick={nextStep}
                       className="w-2/3 bg-[#F55D3E] text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                       disabled={!EnrollformData.class_type}
                     >
                       Continue
                     </button>
                   </div>
                 </div>
               )}
               
               {formStep === 3 && (
                 <div className="space-y-4">
                   <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4 text-center">What's your phone number?</h3>
                   <div className="flex">
                     <div className="flex items-center bg-gray-100 border border-gray-300 rounded-l-lg px-3">
                       <span className="text-sm text-gray-700">+91</span>
                     </div>
                     <input 
                       type="tel" 
                       id="mobile_number"
                       name="mobile_number"
                       placeholder="Your Phone Number" 
                       value={EnrollformData.mobile_number}
                       onChange={handleFormChange}
                       className="w-full p-3 border text-black border-gray-300 border-l-0 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent"
                       required
                     />
                   </div>
                   <p className="text-xs text-gray-500 flex items-center">
                     <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                     </svg>
                     No spam, we promise!
                   </p>
                   <div className="flex space-x-3">
                     <button 
                       type="button"
                       onClick={prevStep}
                       className="w-1/3 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                     >
                       Back
                     </button>
                     <button 
                       type="button"
                       onClick={nextStep}
                       className="w-2/3 bg-[#F55D3E] text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                       disabled={!EnrollformData.mobile_number}
                     >
                       Continue
                     </button>
                   </div>
                 </div>
               )}
               
               {formStep === 4 && (
                 <div className="space-y-4">
                   <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4 text-center">What school or institute do you attend?</h3>
                   <input 
                     type="text" 
                     id="school_college"
                     name="school_college"
                     placeholder="Your School/Institute" 
                     value={EnrollformData.school_college}
                     onChange={handleFormChange}
                     className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent"
                     required
                   />
                   <div className="flex space-x-3">
                     <button 
                       type="button"
                       onClick={prevStep}
                       className="w-1/3 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                     >
                       Back
                     </button>
                     <button 
                       type="submit"
                       className="w-2/3 bg-[#F55D3E] text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                       disabled={!EnrollformData.school_college}
                     >
                       Submit
                     </button>
                   </div>
                 </div>
               )}
             </form>
           </div>
         )}
       </div>
       
       {/* Summary section showing answers (visible at the bottom after questions are answered) */}
       {/* {screeningStep === 4 && (
         <div className="p-4 bg-gray-50 border-t border-gray-200">
           <h4 className="text-sm font-medium text-gray-700 mb-2">Your selections:</h4>
           <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
             {EnrollformData.answer1 && (
               <div>
                 <span className="font-medium block">Learning goal:</span>
                 {EnrollformData.answer1}
               </div>
             )}
             {EnrollformData.answer2 && (
               <div>
                 <span className="font-medium block">Schedule:</span>
                 {EnrollformData.answer2}
               </div>
             )}
             {EnrollformData.answer3 && (
               <div>
                 <span className="font-medium block">Found via:</span>
                 {EnrollformData.answer3}
               </div>
             )}
           </div>
         </div>
       )} */}
     </div>
   </div>
    )}
</div>
  );
};

export default CatExamApplySection;