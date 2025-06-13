"use client";

import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import axiosInstance from "../apiconfig/axios";
import { API_URLS } from "../apiconfig/api_urls";

interface NotificationTabProps {
  title: string;
  formLabel: string;
}

interface Courses {
  id: string;
  subject: number;
  subject_name: string;
  section_name: string;
}

const NotificationTab: React.FC<NotificationTabProps> = ({
  title,
  formLabel,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    selection: "",
    subcourse: "",
    targetYear: "",
    timeSlot: "",
  });
  const [course, setcourse] = useState<Courses[]>([]);
  const [uniqueSubjects, setUniqueSubjects] = useState<string[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Courses[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Get tomorrow's date in YYYY-MM-DD format
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing/selecting
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // When subject is selected, filter courses for that subject and reset subcourse
    if (name === "selection" && value) {
      const coursesForSubject = course.filter((c) => c.subject_name === value);
      setFilteredCourses(coursesForSubject);
      // Reset subcourse when main course changes
      setFormData((prev) => ({
        ...prev,
        subcourse: "",
      }));
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await axiosInstance.get(
        API_URLS.SALEPAGE_COURSE_SECTION.GET_SALEPAGE_COURSE_SECTION
      );
      setcourse(response.data);

      // Extract unique subject names
      const subjects = [
        ...new Set(response.data.map((course: Courses) => course.subject_name)),
      ] as string[];
      setUniqueSubjects(subjects);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch courses. Please try again.");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    // Number validation
    if (!formData.number.trim()) {
      newErrors.number = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.number.replace(/\s/g, ""))) {
      newErrors.number = "Please enter a valid 10-digit phone number";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Selection validation
    if (!formData.selection) {
      newErrors.selection = `${formLabel} is required`;
    }

    // Subcourse validation
    if (!formData.subcourse) {
      newErrors.subcourse = "Subcourse is required";
    }

    // Target year validation
    if (!formData.targetYear) {
      newErrors.targetYear = "Target year is required";
    }

    // Time slot validation
    if (!formData.timeSlot) {
      newErrors.timeSlot = "Please select a date";
    } else {
      const selectedDate = new Date(formData.timeSlot);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate <= today) {
        newErrors.timeSlot = "Please select a future date";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    // EmailJS configuration with dummy tokens
    const serviceID = "service_dummy123";
    const templateID = "template_dummy456";
    const userID = "user_dummy789";

    emailjs.send(serviceID, templateID, formData, userID).then(
      () => {
        toast.success(`${title} form submitted successfully!`);
        // Reset form
        setFormData({
          name: "",
          number: "",
          email: "",
          selection: "",
          subcourse: "",
          targetYear: "",
          timeSlot: "",
        });
        setFilteredCourses([]);
        setErrors({});
      },
      (error) => {
        console.error("EmailJS error:", error);
        toast.error(`Failed to submit ${title} form. Please try again.`);
      }
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left column - Social Media Links */}
      <div className="bg-[#140A0A] rounded-lg p-6">
        <h3 className="text-xl font-medium text-white mb-4">{title}</h3>
        <div className="flex flex-row flex-nowrap gap-1 sm:grid sm:grid-cols-2 sm:gap-4">
          {/* Facebook */}
          <div className="bg-[#220F0F] rounded-lg p-3 flex items-center justify-center w-[20%] sm:justify-center sm:gap-x-48 sm:w-full sm:col-span-2 sm:p-3">
            <a
              href="https://www.facebook.com/prepacademy.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium hover:text-[#F55D3E] text-sm sm:text-base hidden sm:block"
            >
              Join Now
            </a>
            <a
              href="https://www.facebook.com/prepacademy.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="currentColor"
                className="w-6 h-6 sm:w-8 sm:h-8 text-[#C69881] hover:text-[#F55D3E]"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>
          </div>

          {/* Telegram */}
          <div className="bg-[#220F0F] rounded-lg p-3 flex items-center justify-center w-[20%] sm:p-5 sm:flex-col sm:items-center sm:justify-center sm:w-auto">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#C69881] sm:mb-3">
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
                  className="w-6 h-6 sm:w-8 sm:h-8"
                >
                  <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                </svg>
              </a>
            </div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium hover:text-[#F55D3E] text-sm sm:text-base hidden sm:block"
            >
              Join Now
            </a>
          </div>

          {/* Instagram */}
          <div className="bg-[#220F0F] rounded-lg p-3 flex items-center justify-center w-[20%] sm:p-5 sm:flex-col sm:items-center sm:justify-center sm:w-auto">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#C69881] sm:mb-3">
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
                  className="w-6 h-6 sm:w-8 sm:h-8"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </div>
            <a
              href="https://www.instagram.com/prepacademy.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium hover:text-[#F55D3E] text-sm sm:text-base hidden sm:block"
            >
              Join Now
            </a>
          </div>

          {/* YouTube */}
          <div className="bg-[#220F0F] rounded-lg p-3 flex items-center justify-center w-[20%] sm:p-5 sm:flex-col sm:items-center sm:justify-center sm:w-auto">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#C69881] sm:mb-3">
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
                  className="w-6 h-6 sm:w-8 sm:h-8"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
              </a>
            </div>
            <a
              href="https://www.youtube.com/@PrepAcademy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium hover:text-[#F55D3E] text-sm sm:text-base hidden sm:block"
            >
              Join Now
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-[#220F0F] rounded-lg p-3 flex items-center justify-center w-[20%] sm:p-5 sm:flex-col sm:items-center sm:justify-center sm:w-auto">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#C69881] sm:mb-3">
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
                  className="w-6 h-6 sm:w-8 sm:h-8"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
            </div>
            <a
              href="https://wa.me/9446056789"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium hover:text-[#F55D3E] text-sm sm:text-base hidden sm:block"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>

      {/* Right column - Form */}
      <div className="bg-[#140A0A] rounded-lg p-6">
        <h3 className="text-xl font-medium text-white mb-6">{title}</h3>
        <form onSubmit={handleSubmit}>
          {/* Name and Number in one row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                NAME <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-[#220F0F] border ${
                  errors.name ? "border-red-500" : "border-gray-800"
                } rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                NUMBER <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="number"
                placeholder="Enter your number"
                value={formData.number}
                onChange={handleChange}
                className={`w-full bg-[#220F0F] border ${
                  errors.number ? "border-red-500" : "border-gray-800"
                } rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]`}
              />
              {errors.number && (
                <p className="text-red-500 text-xs mt-1">{errors.number}</p>
              )}
            </div>
          </div>

          {/* Email in full width */}
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">
              EMAIL <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full bg-[#220F0F] border ${
                errors.email ? "border-red-500" : "border-gray-800"
              } rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Course and Subcourse in one row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                {formLabel} <span className="text-red-500">*</span>
              </label>
              <select
                name="selection"
                value={formData.selection}
                onChange={handleChange}
                className={`w-full bg-[#220F0F] border ${
                  errors.selection ? "border-red-500" : "border-gray-800"
                } rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none cursor-pointer`}
              >
                <option value="">Select {formLabel}</option>
                {uniqueSubjects.map((subject, index) => (
                  <option key={index} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              {errors.selection && (
                <p className="text-red-500 text-xs mt-1">{errors.selection}</p>
              )}
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                SUBCOURSE <span className="text-red-500">*</span>
              </label>
              <select
                name="subcourse"
                value={formData.subcourse}
                onChange={handleChange}
                disabled={!formData.selection}
                className={`w-full bg-[#220F0F] border ${
                  errors.subcourse ? "border-red-500" : "border-gray-800"
                } rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <option value="">Select Subcourse</option>
                {filteredCourses.map((subcourse) => (
                  <option key={subcourse.id} value={subcourse.section_name}>
                    {subcourse.section_name}
                  </option>
                ))}
              </select>
              {errors.subcourse && (
                <p className="text-red-500 text-xs mt-1">{errors.subcourse}</p>
              )}
            </div>
          </div>

          {/* Target Year and Time Slot in one row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                TARGET YEAR <span className="text-red-500">*</span>
              </label>
              <select
                name="targetYear"
                value={formData.targetYear}
                onChange={handleChange}
                className={`w-full bg-[#220F0F] border ${
                  errors.targetYear ? "border-red-500" : "border-gray-800"
                } rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none cursor-pointer`}
              >
                <option value="">Select Target year</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
              </select>
              {errors.targetYear && (
                <p className="text-red-500 text-xs mt-1">{errors.targetYear}</p>
              )}
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                SELECT SLOT <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                min={getTomorrowDate()}
                className={`w-full bg-[#220F0F] border ${
                  errors.timeSlot ? "border-red-500" : "border-gray-800"
                } rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none`}
              />
              {errors.timeSlot && (
                <p className="text-red-500 text-xs mt-1">{errors.timeSlot}</p>
              )}
            </div>
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
  );
};

export default NotificationTab;