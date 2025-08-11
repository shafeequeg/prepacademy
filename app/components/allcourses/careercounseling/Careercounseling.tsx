"use client";

import React, { useEffect, useState } from "react";
// import Link from 'next/link';
// import { toast } from "react-toastify";
// import emailjs from 'emailjs-com';
// import axiosInstance from "../../apiconfig/axios";
// import { API_URLS } from "../../apiconfig/api_urls";
import Image from "next/image";
import Link from "next/link";
import AssistanceForm from "../../assistanceForm/AssistanceForm";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axiosInstance from "../../apiconfig/axios";
import { API_URLS } from "../../apiconfig/api_urls";

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

interface CatExamApplySectionProps {
  slug?: string;
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
  {
    id: "ResumeBuilding",
    label: "Resume Building",
    path: "/careercounseling/ResumeBuilding",
  },
  {
    id: "InterviewPreparation",
    label: "Interview Preparation",
    path: "/careercounseling/InterviewPreparation",
  },
  {
    id: "CareerPlanning",
    label: "Career Counseling ",
    path: "/careercounseling/CareerPlanning",
  },
  {
    id: "SkillDevelopment", // Remove space from "Skill Development"
    label: "Skill Development",
    path: "/careercounseling/SkillDevelopment",
  },
  {
    id: "JobSearchStrategies", // Remove spaces from "Job Search Strategies"
    label: "Job Search Strategies",
    path: "/careercounseling/JobSearchStrategies",
  },
  {
    id: "StreamSelection", // Remove space from "Stream Selection "
    label: "Stream Selection",
    path: "/careercounseling/StreamSelection",
  },
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

const CatExamApplySection: React.FC<CatExamApplySectionProps> = ({ slug }) => {
  const [enrollFormData, setEnrollFormData] = useState({
    full_name: "",
    email: "",
    class_type: "",
    phone_number: "",
    school_name: "",
    question: "",
    selected_option: {} as Record<string, string>, // Change to only string keys
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [screeningStep, setScreeningStep] = useState(1);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [user, setuser] = useState<Userdata[]>([]);

  const [formStep, setFormStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    full_name: "",
    email: "",
    class_type: "",
    phone_number: "",
    school_name: "",
  });
  const [activeMainTab, setActiveMainTab] = useState(slug || "");
  // const [programs, setPrograms] = useState<Program[]>([]); // State to store fetched programs

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const fetchPrograms = async () => {
  //   try {
  //     const response = await axiosInstance.get(API_URLS.ALLCOURSE.GET_COURSE); // Replace with your API endpoint
  //     setPrograms(response.data); // Assuming the response is an array of programs
  //   } catch (error) {
  //     console.error("Failed to fetch programs:", error);
  //     // toast.error("Failed to fetch programs. Please try again.");
  //   }
  // };

  // useEffect(() => {
  //   fetchPrograms();
  // }, []);

  const careerCounselingCards = [
    {
      title: "Resume Building",
      description: "Craft a professional resume tailored to your career goals.",
      path: "/careercounseling/ResumeBuilding",
    },
    {
      title: "Interview Preparation",
      description:
        "Get expert guidance to ace your job interviews with confidence.",
      path: "/careercounseling/InterviewPreparation",
    },
    {
      title: "Career Counseling",
      description:
        "Personalized career counseling to align with your ambitions.",
      path: "/careercounseling/CareerPlanning",
    },
    {
      title: "Skill Development",
      description: "Enhance your skills to stay competitive in the job market.",
      path: "/careercounseling/SkillDevelopment",
    },
    {
      title: "Job Search Strategies",
      description: "Effective techniques to land your dream job faster.",
      path: "/careercounseling/JobSearchStrategies",
    },
  ];

  // const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

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

  const fetchUser = async () => {
    try {
      const response = await axiosInstance.get(API_URLS.USER_DATA.GET_USERDATA);
      setuser(response.data);
    } catch (error) {
      console.error("Failed to fetch user:", error);
      // toast.error("Failed to fetch questions. Please try again.");
    }
  };

  useEffect(() => {
    // fetchPrograms();
    fetchQuestions();
    fetchUser();
  }, []);

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

  const calculateProgress = () => {
    const totalSteps = 8; // 3 screening + 5 form fields
    const currentStep = screeningStep <= 3 ? screeningStep - 1 : 3 + formStep;
    return (currentStep / totalSteps) * 100;
  };
  // Reset the form when modal closes
  const closeModal = () => setIsModalOpen(false);

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

  const nextScreeningStep = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // If all questions answered, move to the next step
      setScreeningStep(screeningStep + 1);
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

  const openModal = () => setIsModalOpen(true);

  const handleEnrollClick = () => {
    router.push(`/CourseEnrollmentPortal#careercounseling`);
  };

  const handleTabKeyNav = (
    e: React.KeyboardEvent,
    index: number,
    tabArray: typeof tabs,
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


  return (
    <div className="relative w-full bg-gradient-to-r from-[#121010] to-[#1A1311] text-white">
      <div className="relative w-full z-10">
        <div className="bg-black px-4 py-3 sticky top-0 z-50 mt-14  md:mt-32">
          <div className="max-w-7xl mx-auto">
            <div
              className="flex items-center justify-start gap-2 md:gap-4 pb-1 lg:mt-2 overflow-x-auto md:overflow-visible w-full w768:overflow-x-scroll w768:mt-16 "
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
                    setActiveMainTab(tab.id);
                    router.push(tab.path); // Navigate to the dynamic path
                  }}
                  onKeyDown={(e) =>
                    handleTabKeyNav(e, index, tabs, setActiveMainTab)
                  }
                  tabIndex={activeMainTab === tab.id ? 0 : -1}
                  className={`px-4 py-2 text-sm md:text-base whitespace-nowrap transition-colors flex-1 text-center ${activeMainTab === tab.id
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
          <div className="w-full px-4">
            <div className="flex flex-col lg:flex-row gap-16 relative max-w-7xl mx-auto">
              <div className="lg:w-[35%]">
                <div className="mb-6">
                  <h2 className="text-[#FF6B3D] text-4xl font-bold mb-4">
                    Shape Your Future with Expert Career Counseling
                  </h2>
                  <p className="text-gray-300 mb-8">
                    Unlock your true potential with personalized career guidance
                    from experienced professionals.
                  </p>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <Image
                      src="/aboutusverified.png"
                      alt="Check Icon"
                      width={20} // 5 * 4
                      height={20} // 5 * 4
                      className="w-5 h-5 mr-3"
                    />{" "}
                    <p className="text-white">
                      One-on-One Career Counseling Sessions
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
                      Personalized Career Roadmap & Action Plan
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <button
                    className="bg-[#FF6B3D] hover:bg-[#E04D2E] text-white py-3 px-6 rounded-md font-medium transition-colors whitespace-nowrap"
                    onClick={handleEnrollClick}
                  >
                    Book a Counseling Session
                  </button>
                  <button
                    className="border border-[#FF6B3D] text-[#FF6B3D] py-3 px-6 rounded-md font-medium hover:bg-[#FF6B3D] hover:text-white transition-colors whitespace-nowrap"
                    onClick={openModal}
                  >
                    Get a FREE Career Assessment
                  </button>
                </div>
              </div>
              <div className="hidden lg:block lg:w-[20%] relative">
                <div
                  className="absolute inset-0 bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: "url('/career_character.png')" }}
                ></div>
              </div>
              <AssistanceForm course="career-counseling" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-6 p-3">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="lg:w-1/2 text-start">
            <h2 className="text-2xl mb-4">
              <span className="text-[#F55D3E] font-serif italic">Career</span>{" "}
              Counseling
            </h2>
            <p className="text-white text-base md:text-lg mb-6 max-w-lg">
              Our career counseling program is designed to help individuals make
              informed career decisions.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {careerCounselingCards.map((card, index) => (
            <Link key={index} href={card.path || "#"} passHref>
              <div
                className="bg-[#1F1414] shadow-md p-8 w-full h-[220px] rounded-lg hover:shadow-lg transition-all duration-300 border-l-4 border-[#F55D3E] cursor-pointer flex flex-col"
              >
                <h3 className="text-[#F55D3E] font-medium mb-2 uppercase text-base">
                  {card.title}
                </h3>
                <p className="text-white text-base md:text-lg">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
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
                    Expert Career Guidance Awaits
                  </h2>
                  <p className="text-center md:text-left mt-2 text-sm md:text-base">
                    Connect with our counselors to discover your strengths and plan your path to success.
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
                        className={`w-full p-3 text-left border rounded-lg transition-colors ${enrollFormData.selected_option[
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
                            className={`w-full p-3 border ${validationErrors.full_name
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
                          className={`w-full bg-[#F55D3E] text-white py-3 px-4 rounded-lg font-medium transition-colors ${!enrollFormData.full_name ||
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
                            className={`w-full p-3 border ${validationErrors.email
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
                            className={`w-2/3 bg-[#F55D3E] text-white py-3 px-4 rounded-lg font-medium transition-colors ${!enrollFormData.email || validationErrors.email
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
                            className={`w-full p-3 border ${validationErrors.class_type
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
                            className={`w-2/3 bg-[#F55D3E] text-white py-3 px-4 rounded-lg font-medium transition-colors ${!enrollFormData.class_type ||
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
                              className={`w-full p-3 border text-black ${validationErrors.phone_number
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
                            className={`w-2/3 bg-[#F55D3E] text-white py-3 px-4 rounded-lg font-medium transition-colors ${!enrollFormData.phone_number ||
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
                            className={`w-full p-3 border text-black ${validationErrors.school_name
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
                            className={`w-2/3 bg-[#F55D3E] text-white py-3 px-4 rounded-lg font-medium transition-colors ${!enrollFormData.school_name ||
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
