"use client";

import React, { useState, useRef } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  FileText,
  MessageSquare,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

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

      await emailjs.sendForm(
        "service_xxxxxx", // Dummy EmailJS Service ID
        "template_xxxxxx", // Dummy EmailJS Template ID
        formRef.current!,
        "public_key_xxxxxx" // Dummy EmailJS Public Key
      );

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
    <div className="min-h-screen bg-[#220F0F] text-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-800 to-orange-600 py-10 px-4 mt-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Join Our Team
          </h1>
          <p className="text-orange-200 text-sm md:text-base">
            Be part of our mission to transform education. Apply now!
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-[#2A1515] rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-orange-300 mb-4 text-center">
            Application Form
          </h2>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="mb-4 p-3 bg-green-800/20 rounded flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <p className="text-green-300 text-sm">
                Application submitted successfully! We'll contact you soon.
              </p>
            </div>
          )}
          {submitStatus === "error" && (
            <div className="mb-4 p-3 bg-red-800/20 rounded flex items-center">
              <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
              <p className="text-red-300 text-sm">
                Submission failed. Please try again.
              </p>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-orange-300 text-sm font-medium mb-1">
                <User className="w-4 h-4 inline mr-1" />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-[#3A1F1F] border border-orange-700 rounded text-white placeholder-orange-600 focus:outline-none focus:border-orange-500"
                placeholder="Your full name"
              />
              {errors.name && (
                <span className="text-red-400 text-xs mt-1">{errors.name}</span>
              )}
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-orange-300 text-sm font-medium mb-1">
                  <Mail className="w-4 h-4 inline mr-1" />
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-[#3A1F1F] border border-orange-700 rounded text-white placeholder-orange-600 focus:outline-none focus:border-orange-500"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <span className="text-red-400 text-xs mt-1">
                    {errors.email}
                  </span>
                )}
              </div>
              <div>
                <label className="block text-orange-300 text-sm font-medium mb-1">
                  <Phone className="w-4 h-4 inline mr-1" />
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-[#3A1F1F] border border-orange-700 rounded text-white placeholder-orange-600 focus:outline-none focus:border-orange-500"
                  placeholder="Enter your phonenumber"
                />
                {errors.phone && (
                  <span className="text-red-400 text-xs mt-1">
                    {errors.phone}
                  </span>
                )}
              </div>
            </div>

            {/* Position */}
            <div>
              <label className="block text-orange-300 text-sm font-medium mb-1">
                Position *
              </label>
              <select
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-[#3A1F1F] border border-orange-700 rounded text-white focus:outline-none focus:border-orange-500"
              >
                <option value="">Select a position</option>
                {positions.map((pos) => (
                  <option key={pos} value={pos}>
                    {pos}
                  </option>
                ))}
              </select>
              {errors.position && (
                <span className="text-red-400 text-xs mt-1">
                  {errors.position}
                </span>
              )}
            </div>

            {/* Resume */}
            <div>
              <label className="block text-orange-300 text-sm font-medium mb-1">
                <FileText className="w-4 h-4 inline mr-1" />
                Resume *
              </label>
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="w-full px-3 py-2 bg-[#3A1F1F] border border-orange-700 rounded text-white file:mr-3 file:py-1 file:px-3 file:rounded file:border-0 file:bg-orange-600 file:text-white hover:file:bg-orange-700"
              />
              <p className="text-orange-400 text-xs mt-1">
                PDF, DOC, or DOCX (Max 5MB)
              </p>
              {errors.resume && (
                <span className="text-red-400 text-xs mt-1">
                  {errors.resume}
                </span>
              )}
            </div>

            {/* Cover Letter */}
            <div>
              <label className="block text-orange-300 text-sm font-medium mb-1">
                <MessageSquare className="w-4 h-4 inline mr-1" />
                Cover Letter *
              </label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 bg-[#3A1F1F] border border-orange-700 rounded text-white placeholder-orange-600 focus:outline-none focus:border-orange-500 resize-y"
                placeholder="Why you're a great fit for this role..."
              />
              <p className="text-orange-400 text-xs mt-1 text-right">
                {formData.coverLetter.length}/500 recommended
              </p>
              {errors.coverLetter && (
                <span className="text-red-400 text-xs mt-1">
                  {errors.coverLetter}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-600 text-white py-2 rounded font-medium hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Submit Application
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
