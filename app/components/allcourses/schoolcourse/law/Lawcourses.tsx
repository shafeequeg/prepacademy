"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { toast } from "react-toastify";
import axiosInstance from "@/app/components/apiconfig/axios";
import { API_URLS } from "@/app/components/apiconfig/api_urls";
import AssistanceForm from "@/app/components/assistanceForm/AssistanceForm";
import { useRouter } from "next/navigation";
import {
  courses,
  // Course,
  // Video,
  // Offering,
  // OfferingType,
} from "@/app/schoolcourse/law/Data";

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
  phone_number: string; // Changed to string to match input validation
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

interface CUETExamApplySectionProps {
  slug: string;
}

const DemoVideoCard: React.FC<DemoVideoCardProps> = ({ title, videoId }) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="relative w-full h-56 md:h-64 lg:h-72">
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

const CUETExamApplySection: React.FC<CUETExamApplySectionProps> = ({
  slug,
}) => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [screeningStep, setScreeningStep] = useState(1);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [user, setUser] = useState<Userdata[]>([]);
  const [activeTab, setActiveTab] = useState<string>(""); // Added activeTab state
  const [enrollFormData, setEnrollFormData] = useState<{
    full_name: string;
    email: string;
    class_type: string;
    phone_number: string; // Changed to string
    school_name: string;
    question: string;
    selected_option: Record<string, string>;
  }>({
    full_name: "",
    email: "",
    class_type: "",
    phone_number: "",
    school_name: "",
    question: "",
    selected_option: {},
  });
  const [formStep, setFormStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{
    full_name: string;
    email: string;
    class_type: string;
    phone_number: string;
    school_name: string;
  }>({
    full_name: "",
    email: "",
    class_type: "",
    phone_number: "",
    school_name: "",
  });

  const router = useRouter();
console.log(programs);

  // Find the course based on the slug
  const course = courses.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase()
  );
  console.log(courses);
  

  console.log(slug);
  
  const handleEnrollClick = () => {
    router.push("/CourseEnrollmentPortal");
  };

  const fetchPrograms = async () => {
    try {
      const response = await axiosInstance.get<Program[]>(
        API_URLS.ALLCOURSE.GET_COURSE
      );
      setPrograms(response.data);
    } catch (error) {
      console.error("Failed to fetch programs:", error);
    }
  };

  const validateFullName = (name: string): string => {
    if (!name || name.trim() === "") return "Full name is required";
    if (name.trim().length < 3) return "Name must be at least 3 characters";
    return "";
  };

  const validateEmail = (email: string): string => {
    if (!email || email.trim() === "") return "Email address is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    const isDuplicate = user.some((u) => u.email === email);
    if (isDuplicate) return "This email address is already registered";
    return "";
  };

  const validateClassType = (classType: string): string => {
    if (!classType || classType.trim() === "") return "Class type is required";
    return "";
  };

  const validateMobileNumber = (mobile: string): string => {
    if (!mobile || mobile.trim() === "") return "Mobile number is required";
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile))
      return "Please enter a valid 10-digit mobile number";
    const isDuplicate = user.some((u) => u.phone_number === mobile);
    if (isDuplicate) return "This mobile number is already registered";
    return "";
  };

  const validateSchoolCollege = (school: string): string => {
    if (!school || school.trim() === "")
      return "School/Institute name is required";
    if (school.trim().length < 1) return "Enter a valid School/Institute name";
    return "";
  };

  const nextStep = () => {
    let error = "";
    switch (formStep) {
      case 0:
        error = validateFullName(enrollFormData.full_name);
        if (error) {
          setValidationErrors((prev) => ({ ...prev, full_name: error }));
          return;
        }
        break;
      case 1:
        error = validateEmail(enrollFormData.email);
        if (error) {
          setValidationErrors((prev) => ({ ...prev, email: error }));
          return;
        }
        break;
      case 2:
        error = validateClassType(enrollFormData.class_type);
        if (error) {
          setValidationErrors((prev) => ({ ...prev, class_type: error }));
          return;
        }
        break;
      case 3:
        error = validateMobileNumber(enrollFormData.phone_number);
        if (error) {
          setValidationErrors((prev) => ({ ...prev, phone_number: error }));
          return;
        }
        break;
    }
    setFormStep((prev) => prev + 1);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const prevStep = () => {
    if (formStep > 0) {
      setFormStep((prev) => prev - 1);
    } else if (screeningStep > 1) {
      setScreeningStep((prev) => prev - 1);
    }
  };

  const fetchQuestions = async () => {
    try {
      const response = await axiosInstance.get<Question[]>(
        API_URLS.QUESTIONS.GET_QUESTIONS
      );
      setQuestions(response.data);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await axiosInstance.get<Userdata[]>(
        API_URLS.USER_DATA.GET_USERDATA
      );
      setUser(response.data);
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  };

  const calculateProgress = () => {
    const totalSteps = 8;
    const currentStep = screeningStep <= 3 ? screeningStep - 1 : 3 + formStep;
    return (currentStep / totalSteps) * 100;
  };

  useEffect(() => {
    if (!isModalOpen) {
      setScreeningStep(1);
      setFormStep(0);
      setCurrentQuestionIndex(0);
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
    // Set initial activeTab if course exists
    if (course?.offeringTypes?.[0]?.id) {
      setActiveTab(course.offeringTypes[0].id);
    }
  }, [course]);

  const handleEnrollSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const requiredFields = [
        "full_name",
        "email",
        "class_type",
        "phone_number",
        "school_name",
      ] as const;
      const missingFields = requiredFields.filter(
        (field) => !enrollFormData[field]
      );

      if (missingFields.length > 0) {
        toast.error(
          `Please fill all required fields: ${missingFields.join(", ")}`
        );
        setIsSubmitting(false);
        return;
      }

      if (Object.keys(enrollFormData.selected_option).length === 0) {
        toast.error("Please answer all screening questions");
        setIsSubmitting(false);
        return;
      }

      let successCount = 0;
      const totalQuestions = Object.keys(enrollFormData.selected_option).length;

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
              school_name: enrollFormData.school_name,
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

      if (successCount === totalQuestions) {
        toast.success("Your enrollment has been submitted successfully!");
        setEnrollFormData({
          full_name: "",
          email: "",
          class_type: "",
          phone_number: "",
          school_name: "",
          question: "",
          selected_option: {},
        });
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
        [questionId]: String(optionId),
      },
    }));
  };

  const nextScreeningStep = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setScreeningStep(screeningStep + 1);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEnrollFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

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

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="relative w-full bg-gradient-to-r from-[#121010] to-[#1A1311] text-white">
      <div className="relative w-full z-10">
        <div className="relative w-full bg-gradient-to-r from-[#0A1015] to-[#121820] text-white py-12 bg-center bg-no-repeat bg-cover">
          <div className="w-full px-4 mt-24">
            <div className="flex flex-col lg:flex-row gap-16 relative max-w-7xl mx-auto">
              <div className="lg:w-[35%]">
                <div className="mb-6">
                  <h2 className="text-[#FF6B3D] text-4xl font-bold mb-4">
                    {course.courseTitle}{" "}
                    <span className="text-[#ED1C24] ml-2">Prep</span>
                    <span className="text-[#15938F]">Academy</span>
                  </h2>
                  <p className="text-gray-300 mb-8">{course.description}</p>
                </div>
                <div className="space-y-3 mb-8">
                  {course.points.map((point, index) => (
                    <div key={index} className="flex items-center">
                      <Image
                        src="/aboutusverified.png"
                        alt="Check Icon"
                        width={20}
                        height={20}
                        className="w-5 h-5 mr-3"
                      />
                      <p className="text-white">{point}</p>
                    </div>
                  ))}
                </div>
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
                <div className="mt-4">
                  <a
                    href={course.telegramLink}
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
              <div className="hidden lg:block lg:w-[20%] relative">
                <div
                  className="absolute inset-0 bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: "url('/charater2.png')" }}
                ></div>
              </div>
              <AssistanceForm course={slug} />
            </div>
          </div>
        </div>

        <div className="bg-black text-white flex justify-center">
          <div className="px-6 py-10 max-w-7xl w-full">
            <h2 className="text-4xl font-semibold text-left mb-6 ml-2">
              <span className="font-serif italic font-normal">Related</span>{" "}
              <span className="text-[#F55D3E] font-semibold">Videos</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {course.relatedVideos?.map((video, index) => (
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

        <div className="bg-[#1A0E0E] py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-semibold text-center mb-6 ml-2">
              <span className="text-[#F55D3E] font-serif italic">Our</span>{" "}
              <span className="text-white">Offerings</span>
            </h2>
            <div className="flex justify-center mb-12 overflow-x-auto pb-2 w-full">
              <div className="inline-flex border-b border-[#2A1A1A] flex-nowrap min-w-0">
                {course.offeringTypes?.map((type) => (
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {course.offerings
                ?.filter((card) => card.type === activeTab)
                .map((card) => (
                  <div
                    key={card.id}
                    className="bg-[#220F0F] rounded-lg overflow-hidden flex flex-col"
                  >
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
                      <h3 className="text-white text-lg font-medium mb-4">
                        {card.title}
                      </h3>
                      <ul className="space-y-2 mb-6 flex-grow">
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
                        Enroll Now <ChevronRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="bg-black py-8">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-4">
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
                    Serious About Your Career?
                  </h1>
                  <h2 className="text-white text-2xl md:text-3xl font-medium mb-6">
                    Let&apos;s Make It Happen
                  </h2>
                  <a
                    href="#"
                    className="inline-block bg-[#F55D3E] text-white text-sm py-2 px-6 rounded hover:bg-opacity-90 transition-colors"
                  >
                    Apply for DEMO Class →
                  </a>
                </div>
                <div className="mx-auto my-auto">
                  <Image
                    src="/charater2.png"
                    alt="Prep Mascot"
                    width={200}
                    height={160}
                    className="h-40 md:h-48"
                  />
                </div>
              </div>
            </div>
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
                  {course.title} Master Class
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

        <div className="container mx-auto px-4 py-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-semibold text-center mb-6 ml-2">
              <span className="text-white font-serif italic">Demo</span>
              <span className="text-[#F55D3E]"> Videos</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {course.demoVideos?.map((video, index) => (
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
              <div className="w-full h-2 bg-white bg-opacity-30 rounded-full mt-4">
                <div
                  className="h-full bg-white rounded-full transition-all duration-300"
                  style={{ width: `${calculateProgress()}%` }}
                />
              </div>
            </div>
            <div className="p-4 md:p-6">
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
                          ] === String(option.id)
                            ? "bg-[#F55D3E] text-white"
                            : "border-gray-300 hover:bg-orange-50"
                        }`}
                      >
                        <span
                          className={
                            enrollFormData.selected_option[
                              questions[currentQuestionIndex].id
                            ] === String(option.id)
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
                            value={enrollFormData.full_name}
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
                            value={enrollFormData.email}
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
                            placeholder="e.g. Resume Building, Interview Prep"
                            value={enrollFormData.class_type}
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
                              value={enrollFormData.phone_number}
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
                            value={enrollFormData.school_name}
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
          </div>
        </div>
      )}
    </div>
  );
};

export default CUETExamApplySection;
