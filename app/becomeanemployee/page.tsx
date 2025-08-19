"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  AlertCircle,
  CheckCircle,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import axiosInstance from "../components/apiconfig/axios";
import { API_URLS } from "../components/apiconfig/api_urls";

interface Position {
  id: string;
  name: string;
}

interface ApiError {
  response?: {
    status: number;
    data?: {
      message?: string;
      error?: string;
      [key: string]: unknown;
    };
  };
  message?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  position_id: string;
  cover_letter: string;
  resume: File | null;
}

interface FormErrors {
  [key: string]: string;
}

const BecomeEmployeePage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [positions, setPositions] = useState<Position[]>([]);
  const [loadingPositions, setLoadingPositions] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    position_id: "",
    cover_letter: "",
    resume: null,
  });

  // Fetch positions on component mount
  useEffect(() => {
    const fetchPositions = async () => {
      try {
        setLoadingPositions(true);
        // Replace with your actual API call for positions
        const response = await axiosInstance.get(API_URLS.POSITION.GET_POSITION);
        setPositions(response.data.positions || response.data || []);
      } catch (error) {
        console.error("Error fetching positions:", error);
        // Fallback positions in case API fails
        setPositions([
          { id: "1", name: "Software Developer" },
          { id: "2", name: "Frontend Developer" },
          { id: "3", name: "Backend Developer" },
          { id: "4", name: "UI/UX Designer" },
          { id: "5", name: "Product Manager" },
          { id: "6", name: "Other" },
        ]);
      } finally {
        setLoadingPositions(false);
      }
    };

    fetchPositions();
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Name can only contain letters and spaces";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation - exactly 10 digits
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (!formData.position_id) newErrors.position_id = "Please select a position";

    // Cover letter validation
    if (!formData.cover_letter.trim()) {
      newErrors.cover_letter = "Cover letter is required";
    } else if (formData.cover_letter.trim().length < 50) {
      newErrors.cover_letter = "Cover letter must be at least 50 characters long";
    }

    if (!formData.resume) newErrors.resume = "Resume is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Special handler for phone number input
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Remove all non-digit characters
    const digitsOnly = value.replace(/\D/g, '');
    // Limit to 10 digits
    const limitedDigits = digitsOnly.slice(0, 10);

    setFormData((prev) => ({ ...prev, phone: limitedDigits }));
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
  };

  // Prevent non-numeric input on keypress for phone field
  const handlePhoneKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow backspace, delete, tab, escape, enter, and arrow keys
    if (
      [8, 9, 27, 13, 37, 38, 39, 40, 46].includes(e.keyCode) ||
      // Allow Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
      (e.ctrlKey && [65, 67, 86, 88].includes(e.keyCode))
    ) {
      return;
    }
    // Prevent if not a number
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          resume: "File size must be less than 5MB",
        }));
        return;
      }
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          resume: "Only PDF, DOC, or DOCX files are allowed",
        }));
        return;
      }
      setErrors((prev) => ({ ...prev, resume: "" }));
    }
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name.trim());
      formDataToSend.append("email", formData.email.trim());
      formDataToSend.append("phone", formData.phone.trim());
      formDataToSend.append("position_id", formData.position_id);
      formDataToSend.append("cover_letter", formData.cover_letter.trim());

      if (formData.resume) {
        formDataToSend.append("resume", formData.resume);
      }

      // Make the API call
      const response = await axiosInstance.post(
        API_URLS.CAREERS.POST_CAREERS,
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          position_id: "",
          cover_letter: "",
          resume: null,
        });
        formRef.current?.reset();
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error: unknown) {
      console.error("Submission Error:", error);

      const apiError = error as ApiError;

      // Handle specific error cases
      if (apiError.response?.status === 400) {
        const serverErrors = apiError.response.data as FormErrors;
        setErrors(serverErrors);
      } else {
        setSubmitStatus("error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#231917] py-8 px-4">
      {/* Simplified Hero Section */}
      <div className="relative overflow-hidden">
        {/* Minimal Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-900/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-800/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-2xl mx-auto text-center pt-8 pb-12">
          <div className="inline-flex items-center bg-orange-900/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-orange-800/30">
            <Briefcase className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-orange-300 text-sm font-medium">Join Our Team</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 bg-clip-text text-transparent">
            Ready to Get Started?
          </h1>

          <p className="text-orange-200/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Join our mission to transform education. Fill out the form below to begin your journey with us.
          </p>
        </div>
      </div>

      {/* Compact Form Section */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-orange-950/40 to-[#231917] rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl border border-orange-900/30 backdrop-blur-sm">

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-900/30 backdrop-blur-sm rounded-lg border border-green-800/50 flex items-start">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div className="ml-3">
                <p className="text-green-300 font-medium text-sm">Application submitted successfully!</p>
                <p className="text-green-400/80 text-xs mt-1">We&apos;ll review your application and get back to you soon.</p>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-900/30 backdrop-blur-sm rounded-lg border border-red-800/50 flex items-start">
              <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
              <div className="ml-3">
                <p className="text-red-300 font-medium text-sm">Submission failed</p>
                <p className="text-red-400/80 text-xs mt-1">Please check your connection and try again.</p>
              </div>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

            {/* Personal Information */}
            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-orange-300 text-sm font-medium mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-orange-950/30 border border-orange-800/50 rounded-lg text-orange-100 placeholder-orange-600/60 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                  <User className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-orange-600/60" />
                </div>
                {errors.name && (
                  <span className="text-red-400 text-xs mt-1 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email and Phone - Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-orange-300 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-orange-950/30 border border-orange-800/50 rounded-lg text-orange-100 placeholder-orange-600/60 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all duration-300 text-sm sm:text-base"
                      placeholder="Enter your Email"
                    />
                    <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-orange-600/60" />
                  </div>
                  {errors.email && (
                    <span className="text-red-400 text-xs mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-orange-300 text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      onKeyPress={handlePhoneKeyPress}
                      maxLength={10}
                      className="w-full px-4 py-3 bg-orange-950/30 border border-orange-800/50 rounded-lg text-orange-100 placeholder-orange-600/60 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all duration-300 text-sm sm:text-base"
                      placeholder="Enter your Phone number"
                    />
                    <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-orange-600/60" />
                  </div>
                  <p className="text-orange-400/60 text-xs mt-1">
                    Enter 10-digit mobile number (numbers only)
                  </p>
                  {errors.phone && (
                    <span className="text-red-400 text-xs mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              {/* Position */}
              <div>
                <label className="block text-orange-300 text-sm font-medium mb-2">
                  Preferred Position *
                </label>
                <select
                  name="position_id"
                  value={formData.position_id}
                  onChange={handleInputChange}
                  disabled={loadingPositions}
                  className="w-full px-4 py-3 bg-orange-950/30 border border-orange-800/50 rounded-lg text-orange-100 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all duration-300 text-sm sm:text-base disabled:opacity-50"
                >
                  <option value="" className="bg-[#231917] text-orange-300">
                    {loadingPositions ? "Loading positions..." : "Select the role you're applying for"}
                  </option>
                  {positions.map((position) => (
                    <option
                      key={position.id}
                      value={position.id}
                      className="bg-[#231917] text-orange-300"
                    >
                      {position.name}
                    </option>
                  ))}
                </select>
                {errors.position_id && (
                  <span className="text-red-400 text-xs mt-1 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.position_id}
                  </span>
                )}
              </div>

              {/* Cover Letter */}
              <div>
                <label className="block text-orange-300 text-sm font-medium mb-2">
                  Cover Letter *
                </label>
                <textarea
                  name="cover_letter"
                  value={formData.cover_letter}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-orange-950/30 border border-orange-800/50 rounded-lg text-orange-100 placeholder-orange-600/60 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all duration-300 resize-y text-sm sm:text-base"
                  placeholder="Tell us about your background, relevant experience, skills, and why you're interested in joining our team. What unique value would you bring to this role?"
                />
                <div className="flex justify-between items-center mt-1 text-xs">
                  <span className="text-orange-400/60">
                    {formData.cover_letter.length} characters (minimum 50 required)
                  </span>
                </div>
                {errors.cover_letter && (
                  <span className="text-red-400 text-xs mt-1 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.cover_letter}
                  </span>
                )}
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-orange-300 text-sm font-medium mb-2">
                  Resume / CV *
                </label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 bg-orange-950/30 border border-orange-800/50 rounded-lg text-orange-100 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all duration-300 file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:bg-orange-700 file:text-orange-100 hover:file:bg-orange-600 file:transition-colors file:text-sm"
                />
                <p className="text-orange-400/70 text-xs mt-1">
                  Upload your latest resume in PDF, DOC, or DOCX format • Maximum file size: 5MB
                </p>
                {errors.resume && (
                  <span className="text-red-400 text-xs mt-1 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.resume}
                  </span>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || loadingPositions}
              className="w-full bg-gradient-to-r from-orange-700 to-orange-600 text-white py-3 sm:py-4 px-6 rounded-lg font-semibold text-sm sm:text-base hover:from-orange-600 hover:to-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:hover:scale-100 flex items-center justify-center group"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                  <span>Submitting Application...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Submit Application</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomeEmployeePage;