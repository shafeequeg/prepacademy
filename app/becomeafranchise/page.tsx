"use client";

import React, { useState } from "react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
// import { IoMailOutline, IoCallOutline } from "react-icons/io5";
import { toast } from "react-toastify";
// Replace emailjs import with axios
import axiosInstance from "@/app/components/apiconfig/axios";
import { API_URLS } from "@/app/components/apiconfig/api_urls";
interface FormData {
  full_name: string;
  phone_number: string;
  email: string;
  city: string;
  address: string;
  message: string;
}

interface ApiError {
  response?: {
    status: number;
    data?: {
      message?: string;
      error?: string;
    };
  };
  request?: XMLHttpRequest | undefined;
  message?: string;
}
interface FormErrors {
  full_name?: string;
  phone_number?: string;
  email?: string;
  city?: string;
  address?: string;
  message?: string;
}

const FranchisePage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    phone_number: "",
    email: "",
    city: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation functions
  const validateFullName = (name: string): string | undefined => {
    if (!name.trim()) return "Full name is required";
    if (name.trim().length < 2) return "Full name must be at least 2 characters";
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) return "Full name can only contain letters and spaces";
    return undefined;
  };

  const validatePhoneNumber = (phone: string): string | undefined => {
    if (!phone.trim()) return "Phone number is required";
    if (!/^\d{10}$/.test(phone.trim())) return "Phone number must be exactly 10 digits";
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) return "Please enter a valid email address";
    return undefined;
  };

  const validateCity = (city: string): string | undefined => {
    if (!city.trim()) return "City is required";
    if (city.trim().length < 2) return "City must be at least 2 characters";
    return undefined;
  };

  const validateAddress = (address: string): string | undefined => {
    if (!address.trim()) return "Address is required";
    if (address.trim().length < 10) return "Address must be at least 10 characters";
    return undefined;
  };

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) return "Message is required";
    if (message.trim().length < 20) return "Message must be at least 20 characters";
    return undefined;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Special handling for phone number - only allow digits
    if (name === 'phone_number') {
      const numericValue = value.replace(/\D/g, ''); // Remove all non-digits
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    newErrors.full_name = validateFullName(formData.full_name);
    newErrors.phone_number = validatePhoneNumber(formData.phone_number);
    newErrors.email = validateEmail(formData.email);
    newErrors.city = validateCity(formData.city);
    newErrors.address = validateAddress(formData.address);
    newErrors.message = validateMessage(formData.message);

    setErrors(newErrors);

    // Check if any errors exist
    return !Object.values(newErrors).some(error => error !== undefined);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // For phone number field, only allow numbers and navigation keys
    if (e.currentTarget.name === 'phone_number') {
      const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
      const isNumber = /^[0-9]$/.test(e.key);
      const isAllowedKey = allowedKeys.includes(e.key);

      if (!isNumber && !isAllowedKey) {
        e.preventDefault();
      }
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Validate specific field on blur
    let fieldError: string | undefined;

    switch (name) {
      case 'full_name':
        fieldError = validateFullName(value);
        break;
      case 'phone_number':
        fieldError = validatePhoneNumber(value);
        break;
      case 'email':
        fieldError = validateEmail(value);
        break;
      case 'city':
        fieldError = validateCity(value);
        break;
      case 'address':
        fieldError = validateAddress(value);
        break;
      case 'message':
        fieldError = validateMessage(value);
        break;
    }

    setErrors({ ...errors, [name]: fieldError });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for API call
      const apiData = {
        full_name: formData.full_name.trim(),
        phone_number: formData.phone_number.trim(),
        email: formData.email.trim(),
        city: formData.city.trim(),
        address: formData.address.trim(),
        message: formData.message.trim(),
      };

      // Make API call to your backend
      const response = await axiosInstance.post(API_URLS.FRANCHISE.POST_FRANCHISE, apiData);

      console.log("Franchise inquiry sent successfully!", response.data);
      toast.success("Your franchise inquiry has been sent successfully!");

      // Reset form on success
      setFormData({
        full_name: "",
        phone_number: "",
        email: "",
        city: "",
        address: "",
        message: "",
      });
      setErrors({});

    } catch (error: unknown) {
      console.error("Failed to send inquiry:", error);

      const apiError = error as ApiError;

      // Handle different error scenarios
      if (apiError.response) {
        // Server responded with error status
        const errorMessage = apiError.response.data?.message ||
          apiError.response.data?.error ||
          `Server error: ${apiError.response.status}`;
        toast.error(errorMessage);
      } else if (apiError.request) {
        // Network error
        toast.error("Network error. Please check your connection and try again.");
      } else {
        // Other error
        toast.error("Failed to send the inquiry. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen mt-14">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-[#F55D3E] font-serif italic">Become a</span> Franchise
        </h1>
        <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Partner with Prep Academy to deliver world-class e-learning and empower students in your community.
        </p>
      </header>

      {/* Hero Section */}
      {/* <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Join <span className="text-[#ED1C24]">Prep</span>
              <span className="text-[#15938F]">Academy</span>
            </h2>
            <p className="text-gray-300 text-lg mt-4">
              Build a rewarding business by bringing Prep Academy's proven e-learning solutions to your region. Our trusted brand and comprehensive support help you succeed.
            </p>
            <a
              href="#franchise-form"
              className="inline-block mt-6 bg-[#F55D3E] hover:bg-[#E25B41] text-white px-6 py-3 rounded-lg text-lg font-medium"
            >
              Apply Now
            </a>
          </div>
          <div className="hidden md:block">
            <div
              className="w-full h-80 bg-contain bg-center bg-no-repeat rounded-lg"
              style={{ backgroundImage: "url('/franchise-hero.png')" }}
            ></div>
          </div>
        </div>
      </section> */}

      {/* Why Prep Academy */}
      <section className="bg-[#1E1615] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Why <span className="text-[#ED1C24]">Prep</span>
            <span className="text-[#15938F]">Academy</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Proven Success",
                description:
                  "Our curriculum has empowered thousands to excel in exams like CLAT, CUET, and IPM.",
              },
              {
                title: "Full Support",
                description:
                  "From training to marketing, we provide everything you need to thrive.",
              },
              {
                title: "Trusted Brand",
                description:
                  "Leverage our reputation to attract students and build trust.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#231917] p-6 rounded-lg border-l-4 border-[#F55D3E]"
              >
                <h3 className="text-[#F55D3E] text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Form */}
      <section id="franchise-form" className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-[#1F1F21] rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-[#F55D3E] mb-4">
            Start Your Franchise Journey
          </h2>
          <p className="text-gray-300 mb-6">
            Fill out the form to connect with our team and explore the opportunity.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full bg-[#2B1615] border rounded-lg p-3 text-white ${errors.full_name ? 'border-red-500' : 'border-gray-800'
                    }`}
                  required
                  disabled={isSubmitting}
                />
                {errors.full_name && (
                  <p className="text-red-500 text-sm mt-1">{errors.full_name}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone_number"
                  placeholder="Phone Number (10 digits)"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  onBlur={handleBlur}
                  maxLength={10}
                  className={`w-full bg-[#2B1615] border rounded-lg p-3 text-white ${errors.phone_number ? 'border-red-500' : 'border-gray-800'
                    }`}
                  required
                  disabled={isSubmitting}
                />
                {errors.phone_number && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone_number}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full bg-[#2B1615] border rounded-lg p-3 text-white ${errors.email ? 'border-red-500' : 'border-gray-800'
                    }`}
                  required
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full bg-[#2B1615] border rounded-lg p-3 text-white ${errors.city ? 'border-red-500' : 'border-gray-800'
                    }`}
                  required
                  disabled={isSubmitting}
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                )}
              </div>
            </div>
            <div>
              <textarea
                name="address"
                placeholder="Complete Address"
                rows={3}
                value={formData.address}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full bg-[#2B1615] border rounded-lg p-3 text-white ${errors.address ? 'border-red-500' : 'border-gray-800'
                  }`}
                required
                disabled={isSubmitting}
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
              )}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Why do you want to become a franchisee?"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full bg-[#2B1615] border rounded-lg p-3 text-white ${errors.message ? 'border-red-500' : 'border-gray-800'
                  }`}
                required
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-lg font-medium transition-colors ${isSubmitting
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-[#F55D3E] hover:bg-[#E25B41] text-white'
                }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="text-[#F55D3E] font-serif italic">Get in</span> Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center bg-[#2B1615] rounded-lg p-3">
              <IoMailOutline className="text-white mr-3" />
              <span className="text-gray-300">info@prepacademy.in</span>
            </div>
            <div className="flex items-center bg-[#2B1615] rounded-lg p-3">
              <IoCallOutline className="text-white mr-3" />
              <span className="text-gray-300">+91 9446056789</span>
            </div>
            <div className="flex justify-center space-x-4 bg-[#2B1615] p-4 rounded-lg">
              {[
                { Icon: FaWhatsapp, href: "https://wa.me/9446056789" },
                { Icon: FaFacebookF, href: "https://www.facebook.com/prepacademy.in" },
                { Icon: FaInstagram, href: "https://www.instagram.com/prepacademy.in/" },
                { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/prep-academy-india/" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#F55D3E]"
                >
                  <Icon className="text-2xl" />
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-gray-300 text-lg">
              Contact us to learn how you can partner with Prep Academy and transform education in your community.
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default FranchisePage;