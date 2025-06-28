// CatExamApplySection.tsx

"use client";

import React, { useEffect, useRef } from "react";
// import Image from 'next/image';
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
// import emailjs from 'emailjs-com'; // Import EmailJS
import { API_URLS } from "@/app/components/apiconfig/api_urls";
import axiosInstance from "@/app/components/apiconfig/axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

// interface VideoCardProps {
//   title: string;
//   thumbnail: string;
// }

interface DemoVideoCardProps {
  title: string;
  videoId: string;
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
  location: string;
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

const DemoVideoCard: React.FC<DemoVideoCardProps> = ({ title, videoId }) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="relative w-full h-56 md:h-64 lg:h-72">
        {/* YouTube Embed */}
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {/* <p className="text-lg md:text-xl text-gray-300 mt-3">{title}</p> */}
    </div>
  );
};

const offeringTypes = [
  { id: "online", label: "Online Class" },
  { id: "Classroom", label: "Classroom" },
  { id: "test", label: "Test Series" },
  { id: "Bookmaterials", label: "Book Materials" },
  { id: "SelfBased", label: "Self Based" },
];

const courseCards = [
  {
    id: "cat-online-1",
    title: "Daily Class ",
    image: "/catdailyclass.jpeg",
    type: "online",
    features: [
      "Personal mentoring",
      "GDPI assistance",
      "Live & interactive sessions",
      "Live doubt-solving sessions",
    ],
  },
  {
    id: "cat-online-2",
    title: "Night Class",
    image: "/catnightclass.jpeg",
    type: "online",
    features: [
      "Live doubt-solving sessions",
      "Advanced problem-solving techniques",
      "Mock test series with AI analysis",
      "Best for repeat CAT takers",
    ],
  },
  {
    id: "cat-online-3",
    title: "Weekend Class",
    image: "/catweekendclass.jpeg",
    type: "online",
    features: [
      "Personal mentoring",
      "GDPI assistance",
      "Live & interactive sessions",
      "Live doubt-solving sessions",
    ],
  },
  {
    id: "cat-Classroom-1",
    title: " Day Classes",
    image: "/catdailyclass.jpeg",
    type: "Classroom",
    features: [
      "Personal mentoring",
      "GDPI assistance",
      "Authentic Learning Experiences",
      "Live & interactive sessions",
      "Live doubt-solving sessions",
    ],
  },
  {
    id: "cat-Classroom-2",
    title: " Night Classes",
    image: "/catnightclass.jpeg",
    type: "Classroom",
    features: [
      "Personal mentoring",
      "GDPI assistance",
      "Authentic Learning Experiences",
      "Live & interactive sessions",
      "Live doubt-solving sessions",
    ],
  },

  {
    id: "cat-Classroom-3",
    title: " Weekend Classes",
    image: "/catweekendclass.jpeg",
    type: "Classroom",
    features: [
      "Personal mentoring",
      "GDPI assistance",
      "Authentic Learning Experiences",
      "Live & interactive sessions",
      "Live doubt-solving sessions",
    ],
  },

  {
    id: "cat-test-1",
    title: " Mock Test Only ",
    image: "/allcourse/mocktest.jpeg",
    type: "test",
    features: [
      "enhance exam preparation skill",
      "10 Mocks test available",
      "Personal mentoring",
      "GDPI assistance",
    ],
  },

  {
    id: "cat-test-2",
    title: " Test Series+ Mock:",
    image: "/allcourse/mockandtest.jpeg",
    type: "test",
    features: [
      "Personal mentoring",
      "GDPI assistance",
      "Test Series",
      "Mock Test",
    ],
  },

  {
    id: "cat-test-3",
    title: " Mock +Test Series + Book Materials)",
    image: "/allcourse/testmockandbook.jpeg",
    type: "test",
    features: [
      "Personal mentoring",
      "GDPI assistance",
      "Test Series",
      "Mock Test",
      "Book Materials ",
    ],
  },

  {
    id: "cat-Bookmaterials-1",
    title: " Book Materials Only ",
    image: "/allcourse/bookmaterials.jpeg",
    type: "Bookmaterials",
    features: ["Complete Book Materils"],
  },

  {
    id: "cat-Bookmaterials-2",
    title: " Test Series+ Mock Test + Book materials",
    image: "/allcourse/testmockandbook.jpeg",
    type: "Bookmaterials",
    features: ["Complete Book Materils", "Mock Tests", "Test Series"],
  },

  {
    id: "cat-SelfBased-1",
    title: " Self Based",
    image: "/allcourse/selfbased.jpeg",
    type: "SelfBased",
    features: ["Video lectures", "Mock Test", "Book Materials"],
  },
];


const tabs = [
  { id: "IELTS", label: "IELTS", path: "/studyabroad/ielts" },
  { id: "SAT", label: "SAT", path: "/studyabroad/sat" },
  { id: "ACT", label: "ACT", path: "/studyabroad/act" },
  { id: "GRE", label: "GRE", path: "/studyabroad/gre" },
  { id: "GMAT", label: "GMAT", path: "/studyabroad/gmat" },
];

const CatExamApplySection: React.FC = () => {
  //   const [showIcons, setShowIcons] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);
  // const [isModalOpen, setIsModalOpen] = useState(false);

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

  const [isModalOpen, setIsModalOpen] = useState(false);

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
    location: "",
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
    location: "",
  });
const [activeMainTab, setActiveMainTab] = useState("SAT");

  const [programs, setPrograms] = useState<Program[]>([]); // State to store fetched programs

  console.log(programs);

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

  const fetchPrograms = async () => {
    try {
      const response = await axiosInstance.get(API_URLS.ALLCOURSE.GET_COURSE); // Replace with your API endpoint
      setPrograms(response.data); // Assuming the response is an array of programs
    } catch (error) {
      console.error("Failed to fetch programs:", error);
      // toast.error("Failed to fetch programs. Please try again.");
    }
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

   const validateLocation = (location: string): string => {
    if (!location || location.trim() === "") {
      return "Location is required";
    }
    if (location.trim().length < 2) {
      return "Enter a valid location";
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
      case 4:
      error = validateSchoolCollege(enrollFormData.school_name || ""); // Fixed: was validating location instead of school_name
      if (error) {
        setValidationErrors((prev) => ({ ...prev, school_name: error })); // Fixed: was setting location error instead of school_name
        return;
      }
      break;
    case 5:
      error = validateLocation(enrollFormData.location || ""); // This is correct for step 5
      if (error) {
        setValidationErrors((prev) => ({ ...prev, location: error }));
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
    const totalSteps = 9; // 3 screening + 6 form fields (including location)
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
        location: "",
      });
    }
  }, [isModalOpen]);

  useEffect(() => {
    fetchPrograms();
    fetchQuestions();
    fetchUser();
  }, []);

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
          course: "sat",
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

        setMainFormErrors({
          full_name: "",
          mobile_number: "",
          email: "",
          college_studied: "",
          program_type: "",
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
        "location",
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
              location: enrollFormData.location,
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
          location: "",
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

  const relatedVideos = [
    {
      title: "Preparing for the SAT 2025",
      videoId: "JNJOTlz8C2Y", // Remove "&t=2s"
    },
    {
      title: "Strategies for SAT 2025",
      videoId: "Kjjeb1v50C0", // Remove "&t=11s"
    },
    {
      title: "Best Coaching Centers",
      videoId: "4g7cyj774_M", // Remove "&t=26s"
    },
  ];

  const demoVideos = [
    {
      title: "Preparing for the SAT 2025",
      videoId: "XhXxA_AA3IQ", // Remove "&t=2s"
    },
    {
      title: "Strategies for SAT 2025",
      videoId: "b2y5qz04RKk", // Remove "&t=11s"
    },
    {
      title: "Best Coaching Centers",
      videoId: "WaYzGw6qnQ8", // Remove "&t=26s"
    },
  ];

  const [activeTab, setActiveTab] = useState("online");

  const filteredCourses = courseCards.filter(
    (course) => course.type === activeTab
  );


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
  const router = useRouter();

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

   const handleEnrollClick = () => {
    router.push("/CourseEnrollmentPortal");
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-[#121010] to-[#1A1311] text-white">
      {/* Background Image Between Sections */}

        <div className="bg-black px-4 py-3 sticky top-0  mt-10 md:mt-24 lg:mt-28">
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
                  onKeyDown={(e) =>
                    handleTabKeyNav(e, index, tabs, setActiveMainTab)
                  }
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

      {/* Main Content */}
      <div className="relative w-full z-10">
        {/* Apply Section with Mascot */}
        <div className="relative w-full bg-gradient-to-r p- from-[#0A1015] to-[#121820] text-white py-12 bg-center bg-no-repeat bg-cover ">
          <div className="w-full px-4 mt-1">
            <div className="flex flex-col lg:flex-row gap-16 relative max-w-7xl mx-auto">
              {/* Left Content */}
              <div className="lg:w-[35%]">
                <div className="mb-6">
                  {/* <p className="text-[#FF6B3D] text-sm font-medium px-3 py-1 bg-[#1A2836] inline-block rounded-md mb-4">
                Learn from the Experts
              </p> */}
                  <h2 className="text-[#FF6B3D] text-4xl font-bold mb-4">
                    Crack SAT 2025 with
                    {/* Prep Academy  */}
                    <span className="text-[#ED1C24] ml-2">Prep</span>
                    <span className="text-[#15938F]">Academy</span>
                  </h2>
                  <p className="text-gray-300 mb-8">
                    The SAT is a standardized test widely used for college
                    admissions in the United States. SAT is conducted multiple
                    times each year, providing students with several
                    opportunities to take the test.{" "}
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
                      Comprehensive SAT Online /Offline Course{" "}
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
              <div className="lg:w-[45%] flex flex-col">
                <div className="bg-[#0E1721] p-8 rounded-lg border border-[#1A2836] shadow-lg">
                  <h3 className="text-[#FF6B3D] text-xl font-semibold mb-3">
                    NEED ASSISTANCE?
                  </h3>
                  <p className="text-white mb-6">
                    Get guidance and clear your doubts
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

        {/* Related Videos Section */}
        <div className="bg-black text-white flex justify-center">
          {/* Related Videos Section */}
          <div className="px-6 py-10 max-w-7xl w-full">
            <h2 className="text-4xl font-semibold text-left mb-6 ml-2">
              <span className="font-serif italic font-normal">Related</span>{" "}
              <span className="text-[#F55D3E] font-semibold">Videos</span>
            </h2>

            {/* Make videos full width */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {relatedVideos.map((video, index) => (
                <DemoVideoCard
                  key={index}
                  title={video.title}
                  videoId={video.videoId}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <Link
                href="https://www.youtube.com/@PrepAcademy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F55D3E] flex items-center hover:underline"
              >
                <span className="text-lg md:text-xl text-[#F55D3E]">
                  View More
                </span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full bg-gradient-to-r from-[#121010] to-[#1A1311] text-white">
        {/* Offerings Section */}
        <div className="bg-[#1A0E0E] py-16">
          <div className="max-w-6xl mx-auto px-4">
            {/* Section Title */}
            <h2 className="text-4xl font-semibold text-center mb-6 ml-2">
              <span className="text-[#F55D3E] font-serif italic">Our</span>{" "}
              <span className="text-white">Offerings</span>
            </h2>

            {/* Tab Navigation - Made responsive */}
            <div className="flex justify-center mb-12 overflow-x-auto pb-2 w-full">
              <div className="inline-flex border-b border-[#2A1A1A] flex-nowrap min-w-0">
                {offeringTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setActiveTab(type.id)}
                    className={`px-3 sm:px-5 md:px-8 py-2 text-base sm:text-lg md:text-xl whitespace-nowrap transition-colors relative ${
                      activeTab === type.id
                        ? "text-[#F55D3E] border-b-2 border-[#F55D3E]"
                        : "text-gray-500 hover:text-gray-400"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Course Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((card) => (
                  <div
                    key={card.id}
                    className="bg-[#220F0F] rounded-lg overflow-hidden flex flex-col"
                  >
                    {" "}
                    {/* Added flex and flex-col here */}
                    {/* Image Container */}
                    <div className="w-full flex items-center justify-center bg-gray-800">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      {" "}
                      {/* Added flex classes here */}
                      <h3 className="text-white text-lg font-medium mb-4">
                        {card.title}
                      </h3>
                      <ul className="space-y-2 mb-6 flex-grow">
                        {" "}
                        {/* Added flex-grow here */}
                        {card.features.map((feature, idx) => (
                          <li key={idx} className="flex text-gray-300 text-sm">
                            <span className="text-[#F55D3E] mr-2">•</span>
                            <span className="text-base md:text-lg text-gray-300 mb-6">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href="/CourseEnrollmentPortal"
                        className="inline-flex items-center text-[#F55D3E] text-lg hover:underline mt-auto"
                      >
                        {" "}
                        {/* Added mt-auto here */}
                        Enroll Now <ChevronRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-400 col-span-full">
                  No courses available for this category.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Mascot Banner Section */}
        <div className="bg-black py-8">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* First CTA Section (Compact Width) */}
            <div className="lg:col-span-4 rounded-lg overflow-hidden bg-[#1D1514] relative flex flex-col justify-center items-center p-6 md:p-10 md:ml-24">
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background:
                    "linear-gradient(90deg, #F55D3E 0%, #F55D3E 50%, transparent 100%)",
                }}
              ></div>

              <div className="flex flex-col md:flex-row items-center justify-center w-full">
                <div className="relative z-10 text-center md:text-left">
                  <h1 className="text-[#F55D3E] font-serif italic text-2xl md:text-3xl lg:text-4xl mb-2">
                    Serious About Your Exam?
                  </h1>
                  <h2 className="text-white text-2xl md:text-3xl font-medium mb-6">
                    Let&apos;s Make It Happen
                  </h2>
                  <button
                    type="button"
                    className="inline-block bg-[#F55D3E] text-white text-sm py-2 px-6 rounded hover:bg-opacity-90 transition-colors"
                    onClick={openModal}
                  >
                    Apply for DEMO Class →
                  </button>
                </div>

                <div className="mx-auto my-auto">
                  <Image
                    src="/charater2.png"
                    alt="Prep Mascot"
                    width={200} // Adjust as needed
                    height={160} // Adjust as needed (h-40 is ~160px)
                    className="h-40 md:h-48"
                  />
                </div>
              </div>
            </div>

            {/* Second CTA Section (Slightly Wider) */}
            <div className="lg:col-span-1.5 rounded-lg overflow-hidden bg-[#1F1414] relative flex flex-col justify-center items-center">
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background:
                    "linear-gradient(90deg, #F55D3E 0%, #F55D3E 50%, transparent 100%)",
                }}
              ></div>

              <div className="p-8 flex flex-col items-center justify-center h-full">
                <div className="flex items-center justify-center mb-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3 className="text-white text-center text-lg font-medium mb-5">
                  SAT Master Class
                </h3>
                <button
                  onClick={openModal}
                  className="inline-block bg-[#F55D3E] text-white text-sm py-2 px-6 rounded hover:bg-[#F55D3E] hover:text-white transition-colors"
                >
                  Book Free TRIAL
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Videos Section */}
        <div className="container mx-auto px-4 py-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-semibold text-center mb-6 ml-2">
              <span className="text-white font-serif italic">Demo</span>
              <span className="text-[#F55D3E]"> Videos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {demoVideos.map((video, index) => (
              <DemoVideoCard
                key={index}
                title={video.title}
                videoId={video.videoId}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              href="https://www.youtube.com/@PrepAcademy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F55D3E] flex items-center hover:underline"
            >
              <span className="text-lg md:text-xl text-[#F55D3E]">
                View More
              </span>
              <ChevronRight size={16} />
            </Link>
          </div>
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
                            type="button"
                            onClick={nextStep}
                            className={`w-2/3 bg-[#F55D3E] text-white py-3 px-4 rounded-lg font-medium transition-colors ${
                              !enrollFormData.school_name ||
                              validationErrors.school_name
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-orange-700"
                            }`}
                            disabled={
                              !enrollFormData.school_name ||
                              !!validationErrors.school_name
                            }
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    )}
                    {formStep === 5 && (
                      <div className="space-y-4">
                        <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4 text-center">
                          What&apos;s your location?
                        </h3>
                        <div>
                          <input
                            type="text"
                            id="location"
                            name="location"
                            placeholder="Your Location (City, State)"
                            value={enrollFormData.location || ""}
                            onChange={handleFormChange}
                            className={`w-full p-3 border text-black ${
                              validationErrors.location
                                ? "border-red-500"
                                : "border-gray-300"
                            } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent`}
                            required
                          />
                          {validationErrors.location && (
                            <p className="mt-1 text-sm text-red-500">
                              {validationErrors.location}
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
                              !enrollFormData.location ||
                              validationErrors.location ||
                              isSubmitting
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-orange-700"
                            }`}
                            disabled={
                              !enrollFormData.location ||
                              !!validationErrors.location ||
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
