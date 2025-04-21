"use client";

import Link from "next/link";
import React, { useState, ChangeEvent, useEffect } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import { toast } from "react-toastify";
import Image from "next/image";
import axiosInstance from "../apiconfig/axios";
import { API_URLS } from "../apiconfig/api_urls";

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

  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    class: "",
    school: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
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
          class: "",
          school: "",
        });
        closeModal(); // Close the modal after successful submission
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        toast.error("Failed to send the message. Please try again.");
      });
  };

  console.log(formData);

  // const features = [
  //   { image: "/aboutusverified.png", text: "Dynamic Live Sessions" },
  //   { image: "/aboutusverified.png", text: "1000+ Targeted Questions" },
  //   { image: "/aboutusverified.png", text: "20 Simulated Mock Tests" },
  //   { image: "/aboutusverified.png", text: "Personalized Learning Path" }
  // ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full max-w-7xl mx-auto px-4  py-12 text-white">
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
            <button
              className={`px-4 py-3 font-medium text-base sm:text-lg mr-4 focus:outline-none relative ${
                activeTab === 1
                  ? "text-white after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[2px] after:bg-[#F55D3E]"
                  : "text-gray-400 hover:text-gray-300"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Community
            </button>
            <button
              className={`px-4 py-3 font-medium text-base sm:text-lg mr-4 focus:outline-none relative ${
                activeTab === 2
                  ? "text-white after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[2px] after:bg-[#F55D3E]"
                  : "text-gray-400 hover:text-gray-300"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Counselling
            </button>
            <button
              className={`px-4 py-3 font-medium text-base sm:text-lg mr-4 focus:outline-none relative ${
                activeTab === 3
                  ? "text-white after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[2px] after:bg-[#F55D3E]"
                  : "text-gray-400 hover:text-gray-300"
              }`}
              onClick={() => setActiveTab(3)}
            >
              Resources
            </button>
            <button
              className={`px-4 py-3 font-medium text-base sm:text-lg focus:outline-none relative ${
                activeTab === 4
                  ? "text-white after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[2px] after:bg-[#F55D3E]"
                  : "text-gray-400 hover:text-gray-300"
              }`}
              onClick={() => setActiveTab(4)}
            >
              Updates
            </button>
          </div>

          {/* Tab Content - Only show content for the active tab */}
          {activeTab === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left column - Community section */}
              <div className="bg-[#140A0A] rounded-lg p-6">
                <h3 className="text-xl font-medium text-white mb-4">
                  Help us building Largest Communities
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#220F0F] rounded-lg p-4 flex items-center justify-center gap-x-48 col-span-1 sm:col-span-2">
                    {/* Left Side - Join Now Button */}
                    <a
                      href="https://www.facebook.com/prepacademy.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-[#F55D3E]"
                    >
                      Join Now
                    </a>

                    {/* Right Side - Icon */}
                    <a
                      href={"https://www.facebook.com/prepacademy.in"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        fill="currentColor"
                        className="w-8 h-8 text-[#C69881] hover:text-[#F55D3E]"
                      >
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                      </svg>
                    </a>
                  </div>

                  <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#F55D3E]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="w-8 h-8"
                        >
                          <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                        </svg>
                      </a>
                    </div>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-[#F55D3E]"
                    >
                      Join Now
                    </a>
                  </div>

                  <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                      <a
                        href={"https://www.instagram.com/prepacademy.in/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#F55D3E]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="currentColor"
                          className="w-8 h-8"
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </a>
                    </div>
                    <a
                      href="https://www.instagram.com/prepacademy.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-[#F55D3E]"
                    >
                      Join Now
                    </a>
                  </div>

                  <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                      <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                        <a
                          href="https://www.youtube.com/@PrepAcademy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#F55D3E]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            fill="currentColor"
                            className="w-8 h-8"
                          >
                            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <a
                      href="https://www.youtube.com/@PrepAcademy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-[#F55D3E]"
                    >
                      Join Now
                    </a>
                  </div>

                  <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#F55D3E]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="currentColor"
                          className="w-8 h-8"
                        >
                          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                      </a>
                    </div>
                    <a
                      href="https://wa.me/9446056789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-[#F55D3E]"
                    >
                      Join Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Right column - Form */}
              <div className="bg-[#140A0A] rounded-lg p-6">
                <h3 className="text-xl font-medium text-white mb-6">
                  Book 1 on 1 Counselling from Experts
                </h3>

                <form>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        NAME
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        NUMBER
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your number"
                        className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-white text-sm font-medium mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        COURSE
                      </label>
                      <select className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none">
                        <option>Select Course</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        TARGET YEAR
                      </label>
                      <select className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none">
                        <option>Select Target year</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-white text-sm font-medium mb-2">
                      TIME SLOT
                    </label>
                    <select className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none">
                      <option>Select Time slot</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-between bg-gradient-to-r from-[#F55D3E] to-[#E85D3E] text-white font-medium rounded-md px-5 py-3 hover:opacity-90 transition-opacity w-full"
                  >
                    <span>SUBMIT</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Placeholder content for other tabs */}
          {activeTab === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left column - Community section */}
              <div className="bg-[#140A0A] rounded-lg p-6">
                <h3 className="text-xl font-medium text-white mb-4">
                  Counselling
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#220F0F] rounded-lg p-4 flex items-center justify-center gap-x-48 col-span-1 sm:col-span-2">
                    {/* Left Side - Join Now Button */}
                    <a
                      href="https://www.facebook.com/prepacademy.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-[#F55D3E]"
                    >
                      Join Now
                    </a>

                    {/* Right Side - Icon */}
                    <a
                      href="https://www.facebook.com/prepacademy.in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        fill="currentColor"
                        className="w-8 h-8 text-[#C69881] hover:text-[#F55D3E]"
                      >
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                      </svg>
                    </a>
                  </div>

                  <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                      <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#F55D3E]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="w-8 h-8"
                        >
                          <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                        </svg>
                      </a>
                    </div>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-[#F55D3E]"
                    >
                      Join Now
                    </a>
                  </div>

                  <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                      <a
                        href="https://www.instagram.com/prepacademy.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#F55D3E]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="currentColor"
                          className="w-8 h-8"
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </a>
                    </div>
                    <a
                      href="https://www.instagram.com/prepacademy.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-[#F55D3E]"
                    >
                      Join Now
                    </a>
                  </div>

                  <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                      <a
                        href="https://www.youtube.com/@PrepAcademy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#F55D3E]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          fill="currentColor"
                          className="w-8 h-8"
                        >
                          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                        </svg>
                      </a>
                    </div>
                    <a
                      href="https://www.youtube.com/@PrepAcademy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-[#F55D3E]"
                    >
                      Join Now
                    </a>
                  </div>

                  <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                      <a
                        href="https://wa.me/9446056789"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#F55D3E]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="currentColor"
                          className="w-8 h-8"
                        >
                          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                      </a>
                    </div>
                    <a
                      href="https://wa.me/9446056789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-[#F55D3E]"
                    >
                      Join Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Right column - Form */}
              <div className="bg-[#140A0A] rounded-lg p-6">
                <h3 className="text-xl font-medium text-white mb-6">
                  Counselling
                </h3>

                <form>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        NAME
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        NUMBER
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your number"
                        className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-white text-sm font-medium mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Counselling
                      </label>
                      <select className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none">
                        <option>Select Counselling</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        TARGET YEAR
                      </label>
                      <select className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none">
                        <option>Select Target year</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-white text-sm font-medium mb-2">
                      TIME SLOT
                    </label>
                    <select className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none">
                      <option>Select Time slot</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-between bg-gradient-to-r from-[#F55D3E] to-[#E85D3E] text-white font-medium rounded-md px-5 py-3 hover:opacity-90 transition-opacity w-full"
                  >
                    <span>SUBMIT</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          )}

          {activeTab === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left column - Community section */}
              <div className="bg-[#140A0A] rounded-lg p-6">
                <h3 className="text-xl font-medium text-white mb-4">
                  Resources
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#220F0F] rounded-lg p-4 flex items-center justify-center gap-x-48 col-span-1 sm:col-span-2">
                    {/* Left Side - Join Now Button */}
                    <a
                      href="https://www.facebook.com/prepacademy.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-[#F55D3E]"
                    >
                      Join Now
                    </a>

                    {/* Right Side - Icon */}
                    <a
                      href="https://www.facebook.com/prepacademy.in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        fill="currentColor"
                        className="w-8 h-8 text-[#C69881] hover:text-[#F55D3E]"
                      >
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                      </svg>
                    </a>
                  </div>

                  <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#F55D3E]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="w-8 h-8"
                        >
                          <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                        </svg>
                      </a>
                    </div>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-[#F55D3E]"
                    >
                      Join Now
                    </a>
                  </div>

                  <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                      <a
                        href="https://www.instagram.com/prepacademy.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#F55D3E]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="currentColor"
                          className="w-8 h-8"
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </a>
                    </div>
                    <a
                      href="https://www.instagram.com/prepacademy.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-[#F55D3E]"
                    >
                      Join Now
                    </a>
                  </div>

                  <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                      <a
                        href="https://wa.me/9446056789"
                        className="hover:text-[#F55D3E]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          fill="currentColor"
                          className="w-8 h-8"
                        >
                          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                        </svg>
                      </a>
                    </div>
                    <a
                      href="https://wa.me/9446056789"
                      className="text-white font-medium hover:text-[#F55D3E]"
                    >
                      Join Now
                    </a>
                  </div>

                  <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#F55D3E]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="currentColor"
                          className="w-8 h-8"
                        >
                          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                      </a>
                    </div>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-[#F55D3E]"
                    >
                      Join Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Right column - Form */}
              <div className="bg-[#140A0A] rounded-lg p-6">
                <h3 className="text-xl font-medium text-white mb-6">
                  Resources
                </h3>

                <form>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        NAME
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        NUMBER
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your number"
                        className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-white text-sm font-medium mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Resources
                      </label>
                      <select className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none">
                        <option>Select Resources</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        TARGET YEAR
                      </label>
                      <select className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none">
                        <option>Select Target year</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-white text-sm font-medium mb-2">
                      TIME SLOT
                    </label>
                    <select className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none">
                      <option>Select Time slot</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-between bg-gradient-to-r from-[#F55D3E] to-[#E85D3E] text-white font-medium rounded-md px-5 py-3 hover:opacity-90 transition-opacity w-full"
                  >
                    <span>SUBMIT</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          )}

          {activeTab === 4 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left column - Community section */}
              <div className="bg-[#140A0A] rounded-lg p-6">
                <h3 className="text-xl font-medium text-white mb-4">Updates</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#220F0F] rounded-lg p-4 flex items-center justify-center gap-x-48 col-span-1 sm:col-span-2">
                    {/* Left Side - Join Now Button */}
                    <a
                      href="https://www.facebook.com/prepacademy.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-[#F55D3E]"
                    >
                      Join Now
                    </a>

                    {/* Right Side - Icon */}
                    <a
                      href="https://www.facebook.com/prepacademy.in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        fill="currentColor"
                        className="w-8 h-8 text-[#C69881] hover:text-[#F55D3E]"
                      >
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                      </svg>
                    </a>
                  </div>

                  <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                      <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#F55D3E]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="w-8 h-8"
                        >
                          <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                        </svg>
                      </a>
                    </div>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-[#F55D3E]"
                    >
                      Join Now
                    </a>
                  </div>

                  <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                      <a
                        href="https://www.instagram.com/prepacademy.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#F55D3E]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="currentColor"
                          className="w-8 h-8"
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </a>
                    </div>
                    <a
                      href="https://www.instagram.com/prepacademy.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-[#F55D3E]"
                    >
                      Join Now
                    </a>
                  </div>

                  <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                      <a
                        href="https://www.youtube.com/@PrepAcademy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#F55D3E]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          fill="currentColor"
                          className="w-8 h-8"
                        >
                          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                        </svg>
                      </a>
                    </div>
                    <a
                      href="https://www.youtube.com/@PrepAcademy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-[#F55D3E]"
                    >
                      Join Now
                    </a>
                  </div>

                  <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                      <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#F55D3E]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="currentColor"
                          className="w-8 h-8"
                        >
                          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                      </a>
                    </div>
                    <a
                      href="https://wa.me/9446056789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-[#F55D3E]"
                    >
                      Join Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Right column - Form */}
              <div className="bg-[#140A0A] rounded-lg p-6">
                <h3 className="text-xl font-medium text-white mb-6">Updates</h3>

                <form>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        NAME
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        NUMBER
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your number"
                        className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-white text-sm font-medium mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Updates
                      </label>
                      <select className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none">
                        <option>Select Updates</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        TARGET YEAR
                      </label>
                      <select className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none">
                        <option>Select Target year</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-white text-sm font-medium mb-2">
                      TIME SLOT
                    </label>
                    <select className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none">
                      <option>Select Time slot</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-between bg-gradient-to-r from-[#F55D3E] to-[#E85D3E] text-white font-medium rounded-md px-5 py-3 hover:opacity-90 transition-opacity w-full"
                  >
                    <span>SUBMIT</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
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
                  onSubmit={handleSubmit}
                >
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="fullname"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      placeholder="Your Name"
                      value={formData.fullname}
                      onChange={handleInputChange}
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
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="class"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
                    >
                      Class
                    </label>
                    <input
                      type="text"
                      id="class"
                      name="class"
                      placeholder="Your class"
                      value={formData.class}
                      onChange={handleInputChange}
                      className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                      required
                    />
                  </div>

                  {/* Phone Number field with country code */}
                  <div>
                    <label
                      htmlFor="phone"
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
                        id="phone"
                        name="phone"
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-2 md:p-3 border border-gray-300 border-l-0 rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="school"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
                    >
                      School/Institute
                    </label>
                    <input
                      type="text"
                      id="school"
                      name="school"
                      placeholder="Your School/Institute"
                      value={formData.school}
                      onChange={handleInputChange}
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

export default PopularCourses;
