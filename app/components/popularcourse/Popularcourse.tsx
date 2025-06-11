"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
// import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import Image from "next/image";
import axiosInstance from "../apiconfig/axios";
import { API_URLS } from "../apiconfig/api_urls";
import NotificationTab from "./Notificationsection"; // Adjust the path based on your project structure



type CourseDataType = {
  [key: string]: {
    description: string;
    path: string;
    exams: string[];
    criteria: string[];
  };
};

interface SeoData {
  image_alt_text: string;
  // other fields like title, description, etc.
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
  question: string | number;
  text: string;
}

interface Question {
  id: string | number;
  text: string;
  options?: Option[];
}

const PopularCourses = () => {
  const [activeCourse, setActiveCourse] = useState("MBA");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [seo, setSeo] = useState<SeoData | null>(null);

  const courses = [
    "MBA",
    "NID",
    "NIFT",
    "NATA",
    "CLAT",
    "KLEE",
    "CUET",
    "SAT",
    "NDA",
  ];
  // const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
    // location:"",
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

  console.log(activeTab);

  const fetchSeoData = async () => {
    try {
      const response = await axiosInstance.get(API_URLS.SEO.HOMEMETA);
      setSeo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSeoData();
  }, []);

  const tabs = [
    { id: 1, title: "Community", formLabel: "Course" },
    { id: 2, title: "Counselling", formLabel: "Counselling" },
    { id: 3, title: "Resources", formLabel: "Resources" },
    { id: 4, title: "Updates", formLabel: "Updates" },
  ];


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
    // fetchPrograms();
    fetchQuestions();
    fetchUser();
  }, []);

  const courseData: CourseDataType = {
    MBA: {
      description: `The Master of Business Administration (MBA) is a highly sought-after qualification, with entrance exams in India being extremely competitive. These exams serve as gateways to prestigious B-Schools across the country and internationally. Popular exams include CAT, XAT, CMAT, and GMAT, with the CAT being especially challenging due to limited seats and a vast pool of applicants.`,
      path: "/collegecourse/management/cat",
      exams: ["CAT", "XAT", "CMAT", "GMAT"],
      criteria: [
        "Bachelor's degree with a minimum percentage requirement (varies by institute).",
        "Entrance exam scores are mandatory.",
        "Work experience is preferred for some programs.",
        "Group discussion and personal interview rounds are conducted.",
      ],
    },
    NID: {
      description:
        "The National Institute of Design (NID) entrance exam is a crucial step for students aspiring for a career in design. The exam tests creativity, problem-solving, and design aptitude.",
      path: "/schoolcourse/designandarchitecture/nid",
      exams: ["NID DAT Prelims", "NID DAT Mains"],
      criteria: [
        "The entrance exams for the National Institute of Design (NID) are highly competitive, with the NID Design Aptitude Test (DAT) being the primary test for admission to B.Des and M.Des programs.",
        "Candidates must meet the eligibility criteria, such as completing Class 12 for B.Des (with a maximum age of 20 years as of June 30, 2025; 3-year relaxation for OBC-NCL/SC/ST) or a bachelor’s degree for M.Des (no age limit).",
        "Registration deadlines must be followed strictly, with the NID DAT 2025 application window having closed on December 3, 2024 (late fee until December 5, 2024). The exam was held on January 5, 2025.",
        "Proper preparation with mock tests, previous years’ papers, and sketching practice increases the chances of success, especially for the DAT Prelims (written) and DAT Mains (studio test and interview).",
      ],
    },
    NIFT: {
      description:
        "The National Institute of Fashion Technology (NIFT) entrance exam assesses students' aptitude in design, creativity, and fashion-related skills for admission to top fashion institutes.",
      path: "/schoolcourse/designandarchitecture/nift",
      exams: ["NIFT Entrance Exam"],
      criteria: [
        "The entrance exam for the National Institute of Fashion Technology (NIFT) is conducted by the NTA, with the GAT (General Ability Test) and CAT (Creative Ability Test) being key components for B.Des and M.Des programs.",
        "Candidates must meet the eligibility criteria, such as passing Class 12 for B.Des/B.F.Tech (max age 24 as of August 1, 2025; 5-year relaxation for SC/ST/PwD) or a bachelor’s degree for PG programs (no age limit).",
        "Registration deadlines must be followed strictly, with the NIFT 2025 application window having closed on January 6, 2025 (late fee until January 9, 2025). The exam was conducted on February 9, 2025.",
        "Proper preparation with mock tests, sketching practice, and study materials for GAT (quantitative, verbal, GK) and CAT (creativity) increases the chances of success.",
      ],
    },
    NATA: {
      description:
        "The National Aptitude Test in Architecture (NATA) is an entrance exam for students seeking admission to architecture programs in India, testing drawing and observation skills.",
      path: "/schoolcourse/designandarchitecture/nata",
      exams: ["NATA"],
      criteria: [
        "The National Aptitude Test in Architecture (NATA) is conducted by the Council of Architecture (CoA) for admission to B.Arch programs, with multiple attempts allowed (three in 2025).",
        "	Candidates must meet the eligibility criteria, such as passing Class 12 with Physics, Chemistry, and Mathematics, securing at least 50% aggregate (45% for reserved categories).",
        "Registration deadlines must be followed strictly, with NATA 2025 Test 1 applications closing on March 15, 2025, and the exam scheduled for April 5, 2025 (Tests 2 and 3 in June and July).",
        "Proper preparation with mock tests, drawing practice, and study materials for mathematics, general aptitude, and architectural awareness increases the chances of success.",
      ],
    },
    CLAT: {
      description:
        "The Common Law Admission Test (CLAT) is the gateway to prestigious law universities in India. It assesses logical reasoning, legal aptitude, and English proficiency.",
      path: "/schoolcourse-law/clat",
      exams: ["CLAT"],
      criteria: [
        "The Common Law Admission Test (CLAT) is a highly competitive exam for admission to undergraduate (LLB) and postgraduate (LLM) programs at 24 National Law Universities (NLUs) and other institutions.",
        "Candidates must meet the eligibility criteria, such as passing Class 12 with at least 45% marks for UG (40% for SC/ST) or a bachelor’s degree in law for PG (no age limit).",
        "Registration deadlines must be followed strictly, with CLAT 2025 applications having closed on October 15, 2024, and the exam conducted on December 1, 2024.",
        "Proper preparation with mock tests and study materials for English, GK, legal reasoning, logical reasoning, and quantitative techniques increases the chances of success.",
      ],
    },
    KLEE: {
      description:
        "The Kerala Law Entrance Exam (KLEE) is conducted for admission to law colleges in Kerala, testing candidates' knowledge in legal aptitude, general English, and general knowledge.",
      path: "/schoolcourse/klee",
      exams: ["KLEE"],
      criteria: [
        "The Kerala Law Entrance Exam (KLEE) is conducted by the Commissioner for Entrance Examinations (CEE), Kerala, for admission to 5-year integrated LLB, 3-year LLB, and LLM programs in Kerala.",
        "Candidates must meet the eligibility criteria, such as passing Class 12 with at least 45% marks for 5-year LLB (40% for SC/ST) or a bachelor’s degree for 3-year LLB/LLM (no age limit).",
        "Registration deadlines must be followed strictly, with KLEE 2025 applications for 5-year LLB closing on March 10, 2025, and the exam scheduled for April 20, 2025.",
        "Proper preparation with mock tests and study materials for English, GK, aptitude for legal studies, and arithmetic increases the chances of success.",
      ],
    },
    CUET: {
      description:
        "The Common University Entrance Test (CUET) is conducted for undergraduate admissions in central universities, covering subjects like mathematics, science, and general knowledge.",
      path: "/collegecourse/management/cuet",
      exams: ["CUET"],
      criteria: [
        "The Common University Entrance Test (CUET) is conducted by the NTA for admission to UG and PG programs across central, state, and other participating universities in India.",
        "Candidates must meet the eligibility criteria, such as passing Class 12 for UG (specific subject requirements vary by program) or a bachelor’s degree for PG (age limits may apply for some universities).",
        "Registration deadlines must be followed strictly, with CUET-UG 2025 applications having closed on March 24, 2025, and the exam scheduled from May 8 to June 1, 2025.",
        "Proper preparation with mock tests and study materials for language, domain-specific subjects, and the general test (GK, reasoning) increases the chances of success.",
      ],
    },
    SAT: {
      description:
        "The Scholastic Assessment Test (SAT) is a standardized test widely used for college admissions in the United States, assessing reading, writing, and mathematical skills.",
      path: "/studyabroad/sat",
      exams: ["SAT"],
      criteria: [
        "The Scholastic Assessment Test (SAT) is a standardized test for admission to undergraduate programs, primarily in the US, Canada, and some Indian universities (e.g., Ashoka, OP Jindal).",
        "Candidates must meet the eligibility criteria, such as being in or having completed Class 12 (no strict age limit, but typically for high school students).",
        "Registration deadlines must be followed strictly, with the SAT May 2025 test registration closing on April 18, 2025, and the exam scheduled for May 3, 2025 (digital format).",
        "Proper preparation with mock tests and study materials for Reading, Writing & Language, and Math (with optional Essay) increases the chances of success.",
      ],
    },
    NDA: {
      description:
        "The National Defence Academy (NDA) entrance exam is conducted for candidates aspiring to join the Indian Army, Navy, and Air Force, testing mathematics, general knowledge, and aptitude.",
      path: "/schoolcourse/defence/nda",
      exams: ["NDA Exam"],
      criteria: [
        "The National Defence Academy (NDA) exam is conducted by the UPSC for admission to the Army, Navy, and Air Force wings of NDA and the Indian Naval Academy Course (INAC).",
        "Candidates must meet the eligibility criteria, such as passing/appearing in Class 12 (Physics, Chemistry, Mathematics for Air Force/Navy), aged 16.5–19.5 years as of July 1, 2025, and being unmarried.",
        "Registration deadlines must be followed strictly, with NDA I 2025 applications having closed on January 28, 2025, and the exam conducted on April 13, 2025 (NDA II on September 7, 2025).",
        "Proper preparation with mock tests and study materials for Mathematics and General Ability Test (English, GK, Science) increases the chances of success.",
      ],
    },
  };

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

  // const features = [
  //   { image: "/aboutusverified.png", text: "Dynamic Live Sessions" },
  //   { image: "/aboutusverified.png", text: "1000+ Targeted Questions" },
  //   { image: "/aboutusverified.png", text: "20 Simulated Mock Tests" },
  //   { image: "/aboutusverified.png", text: "Personalized Learning Path" }
  // ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
        // <div className="w-full max-w-7xl mx-auto px-4  py-12 text-white">

    <div className="w-full max-w-8xl mx-auto px-4  py-12 text-white">
      {/* Popular Courses Header */}
      {/* Popular Courses Header */}
      <div className="w-full bg-[#2B1615] px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold mb-8">
          <span className="text-[#F55D3E] font-dmserif italic">
            Our Popular
          </span>{" "}
          Courses
        </h2>

        {/* Course Navigation */}
        <div className="flex flex-wrap gap-4 mb-8">
          {courses.map((course) => (
            <button
              key={course}
              className={`px-4 py-2 transition-colors ${
                activeCourse === course
                  ? "text-[#F55D3E] border-b-2 border-[#F55D3E]"
                  : "text-white hover:text-[#F55D3E]"
              }`}
              onClick={() => setActiveCourse(course)}
            >
              {course}
            </button>
          ))}
        </div>

        {/* Course Info Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-300">
              {courseData[activeCourse]?.description}
            </p>
            <div className="flex gap-4">
              <Link href={courseData[activeCourse]?.path || "/collegecourse"}>
                <button className="px-6 py-2 bg-[#F55D3E] hover:bg-[#a52a1a] rounded-md transition-colors">
                  Know More
                </button>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[#F55D3E] text-xl font-semibold">
              Exams and Criteria
            </h3>
            <ul className="space-y-3 text-gray-300">
              {/* <li><strong>Exams:</strong> {courseData[activeCourse]?.exams?.join(", ") || "N/A"}</li>
      <li><strong>Eligibility Criteria:</strong></li> */}
              {courseData[activeCourse]?.criteria?.map((criterion, index) => (
                <li key={index}>• {criterion}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gradient-to-r  rounded-lg mt-12 p-5 md:p-6 lg:p-8 relative flex justify-center items-center">
          {/* Single Image */}
          <Image
            src="/popularcourseteambanner.png"
            alt={seo?.image_alt_text || "popular-course-team-banner"}
            width={800} // Adjust based on your design
            height={400} // Adjust based on your design
            className="w-full h-auto max-w-full object-contain rounded-lg"
          />
        </div>
      </div>

   <section className="bg-[#1A0E0E] py-12 mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-white">
            Notifications
          </h2>

          {/* Tab Navigation */}
          <div className="flex mb-8 overflow-x-auto pb-2 border-b border-gray-800">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-3 font-medium text-base sm:text-lg mr-4 focus:outline-none relative ${
                  activeTab === tab.id
                    ? "text-white after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[2px] after:bg-[#F55D3E]"
                    : "text-gray-400 hover:text-gray-300"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <NotificationTab
                  key={tab.id}
                  title={tab.title}
                  formLabel={tab.formLabel}
                />
              )
          )}
        </div>
      </section>

      
      <div className="w-3/4 mx-auto mt-12 grid md:grid-cols-[2fr_1fr]  rounded-lg overflow-hidden">
        {/* Left Section */}

        <div className="p-8 space-y-4 relative bg-[#2B1615] rounded-md">
          <button className="px-4 py-1 bg-[#3A1F1D] text-[#F55D3E] rounded-full text-sm">
            Get Early Access
          </button>
          <div className="space-y-2">
            <h2 className="text-4xl font-bold font-dmserif italic">
              <span className="text-[#F55D3E]">Looking For The Best</span>
              <br />
              Educational Academy
              <br />
              Near You?
            </h2>
          </div>
          {/* Add right border with gap effect */}
          <div className="absolute right-0 top-0 h-full w-[1px] bg-[#3A1F1D]"></div>
        </div>

        {/* Right Section - with gap */}
        <div className="bg-[#F55D3E] p-6 flex flex-col items-center justify-center rounded-md text-center relative md:ml-4 ">
          <h3 className="text-2xl font-bold mb-4 font-dmserif italic text-white">
            Join the
            <br />
            Summer
            <br />
            Bootcamp
          </h3>
          <div className="w-24 h-24 mb-4">
            <Image
              src="/charater2.png"
              alt="Prep Academy Mascot"
              width={200}
              height={200}
              className="object-contain w-full h-full"
            />
          </div>
          <button
            onClick={openModal}
            className="px-6 py-2 bg-white text-[#F55D3E] rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            JOIN NOW
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
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

export default PopularCourses;
