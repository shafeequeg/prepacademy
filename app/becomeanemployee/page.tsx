"use client";

import React, { useState, useRef } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  // FileText,
  // MessageSquare,
  AlertCircle,
  CheckCircle,
  Briefcase,
  ArrowRight,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  coverLetter: string;
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
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
    resume: null,
  });

  const positions = [
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Product Manager",
    "Other",
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email address";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (
      !/^\+?[\d\s\-\(\)]{10,15}$/.test(formData.phone.replace(/\s/g, ""))
    )
      newErrors.phone = "Invalid phone number";

    if (!formData.position) newErrors.position = "Please select a position";

    if (!formData.coverLetter.trim())
      newErrors.coverLetter = "Cover letter is required";
    else if (formData.coverLetter.trim().length < 20)
      newErrors.coverLetter = "Cover letter must be at least 20 characters";

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
          resume: "Only PDF, DOC, or DOCX files allowed",
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
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("position", formData.position);
      formDataToSend.append("cover_letter", formData.coverLetter);
      if (formData.resume) formDataToSend.append("resume", formData.resume);

      // Simulate API call for demo
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        coverLetter: "",
        resume: null,
      });
      formRef.current?.reset();
    } catch (error) {
      console.error("Submission Error:", error);
      setSubmitStatus("error");
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
                    Email *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-orange-950/30 border border-orange-800/50 rounded-lg text-orange-100 placeholder-orange-600/60 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all duration-300 text-sm sm:text-base"
                      placeholder="your@email.com"
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
                    Phone *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-orange-950/30 border border-orange-800/50 rounded-lg text-orange-100 placeholder-orange-600/60 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all duration-300 text-sm sm:text-base"
                      placeholder="+1 (555) 123-4567"
                    />
                    <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-orange-600/60" />
                  </div>
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
                  Position *
                </label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-orange-950/30 border border-orange-800/50 rounded-lg text-orange-100 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all duration-300 text-sm sm:text-base"
                >
                  <option value="" className="bg-[#231917] text-orange-300">
                    Select your preferred role
                  </option>
                  {positions.map((pos) => (
                    <option
                      key={pos}
                      value={pos}
                      className="bg-[#231917] text-orange-300"
                    >
                      {pos}
                    </option>
                  ))}
                </select>
                {errors.position && (
                  <span className="text-red-400 text-xs mt-1 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.position}
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
                <p className="text-orange-400/70 text-xs mt-1">PDF, DOC, or DOCX • Maximum 5MB</p>
                {errors.resume && (
                  <span className="text-red-400 text-xs mt-1 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.resume}
                  </span>
                )}
              </div>

              {/* Cover Letter */}
              <div>
                <label className="block text-orange-300 text-sm font-medium mb-2">
                  Cover Letter *
                </label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-orange-950/30 border border-orange-800/50 rounded-lg text-orange-100 placeholder-orange-600/60 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all duration-300 resize-y text-sm sm:text-base"
                  placeholder="Tell us about yourself and why you're interested in joining our team..."
                />
                <div className="flex justify-between items-center mt-1 text-xs">
                  <span className="text-orange-400/60">
                    {formData.coverLetter.length} characters
                  </span>
                </div>
                {errors.coverLetter && (
                  <span className="text-red-400 text-xs mt-1 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.coverLetter}
                  </span>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-700 to-orange-600 text-white py-3 sm:py-4 px-6 rounded-lg font-semibold text-sm sm:text-base hover:from-orange-600 hover:to-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:hover:scale-100 flex items-center justify-center group"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                  <span>Submitting...</span>
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