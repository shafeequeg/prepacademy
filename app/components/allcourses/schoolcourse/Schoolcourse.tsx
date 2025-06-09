"use client";

import React, { useEffect, useRef } from "react";
// import Image from 'next/image';
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

import Image from "next/image";
import axiosInstance from "../../apiconfig/axios";
import { API_URLS } from "../../apiconfig/api_urls";
import AssistanceForm from "../../assistanceForm/AssistanceForm";
import { useRouter } from "next/navigation";

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

interface Userdata {
  id: string;
  full_name: string;
  email: string;
  phone_number: number;
  school_name: string;
  question: string;
  question_text: string;
  selected_option: string;
  selected_option_text: string;
  class_type: string;
}

interface Option {
  id: string | number;
  question: string | number; // question ID this option belongs to
  text: string;
}

interface Question {
  id: string | number;
  text: string;
  options?: Option[];
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

//schoocourse
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
    ],
  },
  {
    id: "MEDICAL",
    label: "MEDICAL",
    path: "/medical",
    dropdownItems: [
      { label: "NEET (UG)", path: "schoolcourse/medical/neet" },
      {
        label: "PARAMEDICAL ENTRANCE",
        path: "schoolcourse/medical/paramedical",
      },
      { label: "JIPMER", path: "schoolcourse/medical/jipmer" },
    ],
  },

  {
    id: "MANAGEMENT",
    label: "MANAGEMENT",
    path: "/management",
    dropdownItems: [
      { label: "IPM ", path: "/schoolcourse/ipm" },
      // { label: "CHRIST", path: "/schoolcoursepage/MANAGEMENT/CHRIST" },
      { label: "SET", path: "/schoolcourse/management/set" },
      { label: "NPAT", path: "/schoolcourse/management/npat" },
      { label: "MHCET", path: "/schoolcourse/management/mhcet" },
    ],
  },

  {
    id: "LAW",
    label: "LAW",
    path: "/law",
    dropdownItems: [
      { label: "CLAT", path: "/schoolcourse-law/clat" },
      { label: "SLAT", path: "/schoolcourse/law/SLAT" },
      { label: "AILET", path: "/schoolcourse/law/AILET" },
      { label: "KLEE", path: "/schoolcourse/law/KLEE" },
      { label: "CULEE", path: "/schoolcourse/law/CULEE" },
    ],
  },

  {
    id: "CUET",
    label: "CUET",
    path: "/cuet",
    dropdownItems: [{ label: "CUET ", path: "/collegecourse/management/cuet" }],
  },

  {
    id: "DEFENCE",
    label: "DEFENCE",
    path: "/defence",
    dropdownItems: [
      { label: "NDA ", path: "/schoolcourse/defence/nda" },
      { label: "AFCAT", path: "/schoolcoursepage/DEFENCE/AFCAT" },
    ],
  },

  {
    id: "TUITIONS",
    label: "TUITIONS",
    path: "/tuitions",
    dropdownItems: [
      { label: "TUITIONS", path: "/schoolcoursepage/TUITIONS/TUITIONS" },
      // { label: "CHEMISTRY", path: "/" },
      // { label: "MATHS", path: "/" },
      // { label: "BIOLOGY ", path: "/" },
      // { label: "ACCOUNTING ", path: "/" },
      // { label: "ECONOMICS", path: "/" },
      // { label: "ENGLISH ", path: "/" },
      // { label: "COMMERCE", path: "/" },
      // { label: "BUSINESS STUDIES", path: "/" },
    ],
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
      {
        label: "ASHOKA UNIVERSITY",
        path: "/schoolcoursepage/OTHERS/ASHOKAUNIVERSITY",
      },
      {
        label: "CHRIST UNIVERSITY ",
        path: "/schoolcourse/others/christuniversity",
      },
      { label: "SYMBIOSIS", path: "/schoolcoursepage/OTHERS/SYMBIOSIS" },
      { label: "NMIMS", path: "/schoolcoursepage/OTHERS/NMIMS" },
      { label: "ST. XAVIER'S", path: "/schoolcoursepage/OTHERS/STXAVIERS" },
    ],
  },

  {
    id: "DESIGN",
    label: "DESIGN & ARCHITECTURE",
    path: "/design",
    dropdownItems: [
      { label: "NID ", path: "/schoolcourse/designandarchitecture/nid" },
      { label: "NIFT ", path: "/schoolcourse/designandarchitecture/nift" },
      { label: "UCEED ", path: "/schoolcourse/designandarchitecture/uceed" },
      { label: "CEED", path: "/schoolcoursepage/DESIGN/CEED" },
      { label: "JEE MAIN", path: "/schoolcoursepage/DESIGN/JEEMAIN" },
      { label: "NATA ", path: "/schoolcourse/designandarchitecture/nata" },
    ],
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

  // const [formData, setFormData] = useState({
  //   full_name: "",
  //   mobile_number: "",
  //   email: "",
  //   school_studied: "",
  //   preferred_program: "",
  //   submitted_at: "",
  // });

  // const [EnrollformData, setEnrollFormData] = useState({
  //   full_name: "",
  //    mobile_number: "",
  //   email: "",
  // school_college: "",
  // class_type: "",
  // });

  // const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [screeningStep, setScreeningStep] = useState(1);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [user, setuser] = useState<Userdata[]>([]);
  const [enrollFormData, setEnrollFormData] = useState({
    full_name: "",
    email: "",
    class_type: "",
    phone_number: "",
    school_name: "",
    question: "",
    selected_option: {} as Record<string, string>, // Change to only string keys
  });
  const [formStep, setFormStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    full_name: "",
    email: "",
    class_type: "",
    phone_number: "",
    school_name: "",
  });

  const router = useRouter();

  // const [activeTab, setActiveTab] = useState("online");
  const [activeMainTab, setActiveMainTab] = useState("MANAGEMENT");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});
  // const filteredCourses = courseCards.filter((course) => course.type === activeTab);
  const [programs, setPrograms] = useState<Program[]>([]); // State to store fetched programs

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  console.log(programs);

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

  const handleEnrollClick = () => {
    router.push("/CourseEnrollmentPortal");
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

  const validateFullName = (name: string): string => {
    if (!name || name.trim() === "") {
      return "Full name is required";
    }
    if (name.trim().length < 3) {
      return "Name must be at least 3 characters";
    }
    return "";
  };

  const validateEmail = (email: string): string => {
    if (!email || email.trim() === "") {
      return "Email address is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }

    // Check for duplicate email
    const isDuplicate = user.some((u) => u.email === email);
    if (isDuplicate) {
      return "This email address is already registered";
    }

    return "";
  };

  const validateClassType = (classType: string): string => {
    if (!classType || classType.trim() === "") {
      return "Class type is required";
    }
    return "";
  };

  const validateMobileNumber = (mobile: string): string => {
    if (!mobile || mobile.trim() === "") {
      return "Mobile number is required";
    }

    // Validate 10-digit Indian mobile number
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile)) {
      return "Please enter a valid 10-digit mobile number";
    }

    // Check for duplicate mobile number
    const isDuplicate = user.some((u) => u.phone_number.toString() === mobile);
    if (isDuplicate) {
      return "This mobile number is already registered";
    }

    return "";
  };

  const validateSchoolCollege = (school: string): string => {
    if (!school || school.trim() === "") {
      return "School/Institute name is required";
    }
    if (school.trim().length < 1) {
      return " Enter a valid School/Institute name  ";
    }
    return "";
  };

  const nextStep = () => {
    let error = "";

    // Validate current field before proceeding
    switch (formStep) {
      case 0:
        error = validateFullName(enrollFormData.full_name || "");
        if (error) {
          setValidationErrors((prev) => ({ ...prev, full_name: error }));
          return; // Don't proceed if validation fails
        }
        break;
      case 1:
        error = validateEmail(enrollFormData.email || "");
        if (error) {
          setValidationErrors((prev) => ({ ...prev, email: error }));
          return;
        }
        break;
      case 2:
        error = validateClassType(enrollFormData.class_type || "");
        if (error) {
          setValidationErrors((prev) => ({ ...prev, class_type: error }));
          return;
        }
        break;
      case 3:
        error = validateMobileNumber(enrollFormData.phone_number || "");
        if (error) {
          setValidationErrors((prev) => ({ ...prev, phone_number: error }));
          return;
        }
        break;
    }

    // If validation passes, proceed to next step
    setFormStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (formStep > 0) {
      setFormStep((prev) => prev - 1);
    } else if (screeningStep > 1) {
      setScreeningStep((prev) => prev - 1);
    }
  };

  const fetchQuestions = async () => {
    try {
      const response = await axiosInstance.get(
        API_URLS.QUESTIONS.GET_QUESTIONS
      );
      setQuestions(response.data);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
      // toast.error("Failed to fetch questions. Please try again.");
    }
  };

  const fetchUser = async () => {
    try {
      const response = await axiosInstance.get(API_URLS.USER_DATA.GET_USERDATA);
      setuser(response.data);
    } catch (error) {
      console.error("Failed to fetch user:", error);
      // toast.error("Failed to fetch questions. Please try again.");
    }
  };

  //  console.log(question);
  console.log(user);

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
      setCurrentQuestionIndex(0); // Add this line to reset the question index
      setEnrollFormData({
        full_name: "",
        email: "",
        class_type: "",
        phone_number: "",
        school_name: "",
        question: "",
        selected_option: {},
      });
    }
  }, [isModalOpen]);

  useEffect(() => {
    fetchPrograms();
    fetchQuestions();
    fetchUser();
  }, []);

  const handleEnrollSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check if all required fields are filled
      const requiredFields = [
        "full_name",
        "email",
        "class_type",
        "phone_number",
        "school_name",
      ] as const;
      // Use type assertion to check fields
      const missingFields = requiredFields.filter(
        (field) => !enrollFormData[field as keyof typeof enrollFormData]
      );

      if (missingFields.length > 0) {
        toast.error(
          `Please fill all required fields: ${missingFields.join(", ")}`
        );
        setIsSubmitting(false);
        return;
      }

      // Check if we have screening answers
      if (Object.keys(enrollFormData.selected_option).length === 0) {
        toast.error("Please answer all screening questions");
        setIsSubmitting(false);
        return;
      }

      let successCount = 0;
      const totalQuestions = Object.keys(enrollFormData.selected_option).length;

      // Process each question one by one with the full user data
      for (const [questionId, selectedOption] of Object.entries(
        enrollFormData.selected_option
      )) {
        try {
          const response = await axiosInstance.post(
            API_URLS.FREETRAIL.POST_FREETRAIL,
            {
              full_name: enrollFormData.full_name,
              email: enrollFormData.email,
              class_type: enrollFormData.class_type,
              phone_number: enrollFormData.phone_number,
              school_name: enrollFormData.school_name, // Note: your API might expect school_college not school_name
              question: questionId,
              selected_option: selectedOption,
            }
          );

          if (response.status >= 200 && response.status < 300) {
            successCount++;
          }
        } catch (questionError) {
          console.error(
            `Failed to submit for question ${questionId}:`,
            questionError
          );
        }
      }

      // Check if all submissions were successful
      if (successCount === totalQuestions) {
        toast.success("Your enrollment has been submitted successfully!");

        // Reset form fields
        setEnrollFormData({
          full_name: "",
          email: "",
          class_type: "",
          phone_number: "",
          school_name: "",
          question: "",
          selected_option: {},
        });

        // Reset steps
        setIsModalOpen(false);
        setFormStep(0);
        setScreeningStep(0);
        setCurrentQuestionIndex(0);
      } else if (successCount > 0) {
        toast.warning(
          `Partially successful: ${successCount} out of ${totalQuestions} responses saved.`
        );
      } else {
        toast.error("Failed to submit enrollment. Please try again.");
      }
    } catch (error) {
      console.error("Failed to submit enrollment:", error);
      toast.error("Failed to submit enrollment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScreeningChange = (
    questionId: number | string,
    optionId: string | number
  ) => {
    setEnrollFormData((prev) => ({
      ...prev,
      selected_option: {
        ...prev.selected_option,
        [questionId]: String(optionId), // Convert to string to ensure type safety
      },
    }));
  };

  const nextScreeningStep = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // If all questions answered, move to the next step
      setScreeningStep(screeningStep + 1);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEnrollFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate the changed field
    let errorMessage = "";
    switch (name) {
      case "full_name":
        errorMessage = validateFullName(value);
        break;
      case "email":
        errorMessage = validateEmail(value);
        break;
      case "class_type":
        errorMessage = validateClassType(value);
        break;
      case "phone_number":
        errorMessage = validateMobileNumber(value);
        break;
      case "school_name":
        errorMessage = validateSchoolCollege(value);
        break;
    }

    setValidationErrors((prev) => ({
      ...prev,
      [name]: errorMessage,
    }));
  };

  const schoolCourses = [
    {
      // code: "ENGINEERING",
      title: "ENGINEERING",
      description: "JEE, KEAM, BITSAT, VITEEE, KCET",
      classType: "CLASSES FOR 11TH, 12TH & DROPPERS",
      path: "/courses/bank",
    },
    {
      // code: "MEDICAL",
      title: "MEDICAL",
      description: "NEET (UG), PARAMEDICAL ENTRANCE, JIPMER",
      classType: "CLASSES FOR 11TH, 12TH & DROPPERS",
      path: "/courses/bank",
    },
    {
      // code: "MANAGEMENT",
      title: "MANAGEMENT",
      description: "IPM, CHRIST, SET, NPAT,MHCET",
      classType: "CLASSES FOR 12TH & DROPPERS",
      path: "/schoolcourse/management",
    },
    {
      // code: "LAW",
      title: "LAW",
      description: "CLAT, SLAT, AILET, KLEE, CULEE",
      classType: "CLASSES FOR 11TH, 12TH & DROPPERS",
      path: "/law",
    },
    {
      // code: "CUET",
      title: "  CUET ",
      description: "COMMON UNIVERSITY ENTRANCE TEST",
      classType: "CLASSES FOR 12TH & DROPPERS",
      path: "/courses/bank",
    },
    {
      // code: "DEFENCE",
      title: "DEFENCE",
      description: "NDA, AFCAT",
      classType: "CLASSES FOR 11TH, 12TH & DROPPERS",
      path: "/courses/bank",
    },
    {
      // code: "DESIGN",
      title: "DESIGN & ARCHITECTURE",
      description: "NID, NIFT, UCEED, CEED, JEE MAIN, NATA",
      classType: "CLASSES FOR 11TH, 12TH & DROPPERS",
      path: "/courses/bank",
    },
    {
      // code: "OTHERS",
      title: "OTHERS",
      description:
        "ASHOKA UNIVERSITY, CHRIST UNIVERSITY , SYMBIOSIS,NMIMS,ST. XAVIER'S",
      classType: "CLASSES FOR 12TH & DROPPERS",
      path: "/courses/bank",
    },
    {
      // code: "TUITIONS",
      title: "TUITIONS",
      description:
        "PHYSICS, CHEMISTRY,BIOLOGY, MATHS,ENGLISH,COMMERCE,BUSINESS STUDIES,ACCOUNTING,ECONOMICS",
      classType: "CLASSES FOR 11TH & 12TH",
      path: "/courses/bank",
    },
  ];

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

  return (
    <div className="relative w-full bg-gradient-to-r from-[#121010] to-[#1A1311] text-white  ">
      <div
        className="flex items-center overflow-x-auto w-full bg-black mt-32 p-3 space-x-2 scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
        role="tablist"
        aria-label="Study Abroad Programs "
      >
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className="relative  flex-shrink-0 w-auto min-w-[150px]"
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
                    School Courses with
                    {/* Prep Academy  */}
                    <span className="text-[#ED1C24] ml-2">Prep</span>
                    <span className="text-[#15938F]">Academy</span>
                  </h2>
                  <p className="text-gray-300 mb-8">
                    At Prep Academy, we are dedicated to empowering students
                    with the knowledge and skills necessary for a brighter
                    future. Our comprehensive coaching programs are designed to
                    prepare students for a variety of entrance examinations,
                    including CLAT, CUET,IPM, NDA, NID ,NIFT etc…Our tailored
                    programs are designed to equip students with the knowledge
                    and skills necessary to excel in these competitive tests.{" "}
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
                      Comprehensive School Online /Offline Course{" "}
                    </p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <button
                    className="bg-[#FF6B3D] hover:bg-[#E04D2E] text-white py-3 px-6 rounded-md font-medium transition-colors"
                    onClick={handleEnrollClick}
                  >
                    Enroll Now
                  </button>
                  <button
                    className="border border-[#FF6B3D] text-[#FF6B3D] py-3 px-6 rounded-md font-medium hover:bg-[#FF6B3D] hover:text-white transition-colors"
                    onClick={openModal}
                  >
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
              <AssistanceForm course="school-course" />
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
                    <span className="text-[#F55D3E] font-serif italic pl-4">
                      School
                    </span>{" "}
                    Courses
                  </h2>
                  <p className="text-white text-lg md:text-lg mb-6 max-w-lg pl-4">
                    The beauty of learning was never meant to be confined within
                    the four walls of a classroom. Prep Academy goes above and
                    beyond the traditional teaching methods, bringing together
                    the most skilled faculty to create an unparalleled learning
                    experience for our students. When others rely on textbooks,
                    we rely on innovation. When they focus on memorization, we
                    focus on understanding. That&apos;s what sets us apart.
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
                  <h2 className="text-xl md:text-2xl font-bold text-center md:text-left">
                    Fast Track Your Trial Class
                  </h2>
                  <p className="text-center md:text-left mt-2 text-sm md:text-base">
                    We are just a step away from finding the perfect tutor for
                    your child
                  </p>
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
              {/* Screening Questions - Only show these when screeningStep < 4 */}
              {screeningStep <= questions.length && questions.length > 0 && (
                <div className="flex flex-col items-center">
                  <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4">
                    {questions[currentQuestionIndex].text}
                  </h3>
                  <div className="space-y-3 w-full max-w-md">
                    {questions[currentQuestionIndex].options?.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => {
                          handleScreeningChange(
                            questions[currentQuestionIndex].id,
                            option.id
                          );
                          nextScreeningStep();
                        }}
                        className={`w-full p-3 text-left border rounded-lg transition-colors ${
                          enrollFormData.selected_option[
                            questions[currentQuestionIndex].id
                          ] === option.text
                            ? "bg-[#F55D3E] text-white"
                            : "border-gray-300 hover:bg-orange-50"
                        }`}
                      >
                        <span
                          className={
                            enrollFormData.selected_option[
                              questions[currentQuestionIndex].id
                            ] === option.text
                              ? "text-white"
                              : "text-gray-800"
                          }
                        >
                          {option.text}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Main Form Steps - Only show when screening is complete */}
              {screeningStep > questions.length && (
                <div className="w-full max-w-md mx-auto">
                  <form onSubmit={handleEnrollSubmit}>
                    {formStep === 0 && (
                      <div className="space-y-4">
                        <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4 text-center">
                          What&apos;s your name?
                        </h3>
                        <div>
                          <input
                            type="text"
                            id="full_name"
                            name="full_name"
                            placeholder="Your Full Name"
                            value={enrollFormData.full_name || ""}
                            onChange={handleFormChange}
                            className={`w-full p-3 border ${
                              validationErrors.full_name
                                ? "border-red-500"
                                : "border-gray-300"
                            } rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent`}
                            required
                          />
                          {validationErrors.full_name && (
                            <p className="mt-1 text-sm text-red-500">
                              {validationErrors.full_name}
                            </p>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={nextStep}
                          className={`w-full bg-[#F55D3E] text-white py-3 px-4 rounded-lg font-medium transition-colors ${
                            !enrollFormData.full_name ||
                            validationErrors.full_name
                              ? "opacity-50 cursor-not-allowed"
                              : "hover:bg-orange-700"
                          }`}
                          disabled={
                            !enrollFormData.full_name ||
                            !!validationErrors.full_name
                          }
                        >
                          Continue
                        </button>
                      </div>
                    )}

                    {formStep === 1 && (
                      <div className="space-y-4">
                        <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4 text-center">
                          What&apos;s your email address?
                        </h3>
                        <div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email Address"
                            value={enrollFormData.email || ""}
                            onChange={handleFormChange}
                            className={`w-full p-3 border ${
                              validationErrors.email
                                ? "border-red-500"
                                : "border-gray-300"
                            } rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent`}
                            required
                          />
                          {validationErrors.email && (
                            <p className="mt-1 text-sm text-red-500">
                              {validationErrors.email}
                            </p>
                          )}
                        </div>
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
                            className={`w-2/3 bg-[#F55D3E] text-white py-3 px-4 rounded-lg font-medium transition-colors ${
                              !enrollFormData.email || validationErrors.email
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-orange-700"
                            }`}
                            disabled={
                              !enrollFormData.email || !!validationErrors.email
                            }
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    )}

                    {formStep === 2 && (
                      <div className="space-y-4">
                        <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4 text-center">
                          Which class are you interested in?
                        </h3>
                        <div>
                          <input
                            type="text"
                            id="class_type"
                            name="class_type"
                            placeholder="e.g. Math, Science, English"
                            value={enrollFormData.class_type || ""}
                            onChange={handleFormChange}
                            className={`w-full p-3 border ${
                              validationErrors.class_type
                                ? "border-red-500"
                                : "border-gray-300"
                            } text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent`}
                            required
                          />
                          {validationErrors.class_type && (
                            <p className="mt-1 text-sm text-red-500">
                              {validationErrors.class_type}
                            </p>
                          )}
                        </div>
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
                            className={`w-2/3 bg-[#F55D3E] text-white py-3 px-4 rounded-lg font-medium transition-colors ${
                              !enrollFormData.class_type ||
                              validationErrors.class_type
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-orange-700"
                            }`}
                            disabled={
                              !enrollFormData.class_type ||
                              !!validationErrors.class_type
                            }
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    )}

                    {formStep === 3 && (
                      <div className="space-y-4">
                        <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4 text-center">
                          What&apos;s your phone number?
                        </h3>
                        <div>
                          <div className="flex">
                            <div className="flex items-center bg-gray-100 border border-gray-300 rounded-l-lg px-3">
                              <span className="text-sm text-gray-700">+91</span>
                            </div>
                            <input
                              type="tel"
                              id="phone_number"
                              name="phone_number"
                              placeholder="Your Phone Number"
                              value={enrollFormData.phone_number || ""}
                              onChange={handleFormChange}
                              className={`w-full p-3 border text-black ${
                                validationErrors.phone_number
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } border-l-0 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent`}
                              required
                            />
                          </div>
                          {validationErrors.phone_number && (
                            <p className="mt-1 text-sm text-red-500">
                              {validationErrors.phone_number}
                            </p>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 flex items-center">
                          <svg
                            className="w-4 h-4 mr-1 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
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
                            className={`w-2/3 bg-[#F55D3E] text-white py-3 px-4 rounded-lg font-medium transition-colors ${
                              !enrollFormData.phone_number ||
                              validationErrors.phone_number
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-orange-700"
                            }`}
                            disabled={
                              !enrollFormData.phone_number ||
                              !!validationErrors.phone_number
                            }
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    )}

                    {formStep === 4 && (
                      <div className="space-y-4">
                        <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4 text-center">
                          What school or institute do you attend?
                        </h3>
                        <div>
                          <input
                            type="text"
                            id="school_name"
                            name="school_name"
                            placeholder="Your School/Institute"
                            value={enrollFormData.school_name || ""}
                            onChange={handleFormChange}
                            className={`w-full p-3 border text-black ${
                              validationErrors.school_name
                                ? "border-red-500"
                                : "border-gray-300"
                            } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent`}
                            required
                          />
                          {validationErrors.school_name && (
                            <p className="mt-1 text-sm text-red-500">
                              {validationErrors.school_name}
                            </p>
                          )}
                        </div>
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
                            className={`w-2/3 bg-[#F55D3E] text-white py-3 px-4 rounded-lg font-medium transition-colors ${
                              !enrollFormData.school_name ||
                              validationErrors.school_name ||
                              isSubmitting
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-orange-700"
                            }`}
                            disabled={
                              !enrollFormData.school_name ||
                              !!validationErrors.school_name ||
                              isSubmitting
                            }
                          >
                            {isSubmitting ? "Submitting..." : "Submit"}
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
