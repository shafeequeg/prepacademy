import React, { useState } from "react";
import axiosInstance from "../apiconfig/axios";
import { API_URLS } from "../apiconfig/api_urls";
import { toast } from "react-toastify";

type Props = {
  course: string;
};

interface FormErrors {
  full_name?: string;
  mobile_number?: string;
  email?: string;
  college_studied?: string;
  program_type?: string;
  location?: string;
}

const AssistanceForm = ({ course }: Props) => {
  const [formData, setFormData] = useState({
    full_name: "",
    mobile_number: "",
    email: "",
    college_studied: "",
    program_type: "",
    location: "",
    course: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation functions
  const validateFullName = (name: string): string | undefined => {
    if (!name.trim()) return "Full name is required";
    if (name.trim().length < 2)
      return "Full name must be at least 2 characters long";
    if (!/^[a-zA-Z\s]+$/.test(name.trim()))
      return "Full name should only contain letters and spaces";
    return undefined;
  };

  const validateMobileNumber = (mobile: string): string | undefined => {
    if (!mobile.trim()) return "Mobile number is required";
    // Remove all non-digits
    const cleanMobile = mobile.replace(/\D/g, "");
    if (cleanMobile.length !== 10)
      return "Mobile number must be exactly 10 digits";
    if (!/^[6-9]/.test(cleanMobile))
      return "Mobile number must start with 6, 7, 8, or 9";
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return "Email address is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim()))
      return "Please enter a valid email address";
    return undefined;
  };

  const validateCollegeStudied = (college: string): string | undefined => {
    if (!college.trim()) return "College or school name is required";
    if (college.trim().length < 3)
      return "College or school name must be at least 3 characters long";
    return undefined;
  };

  const validateLocation = (location: string): string | undefined => {
    if (!location.trim()) return "Location is required";
    if (location.trim().length < 2)
      return "Location must be at least 2 characters long";
    return undefined;
  };

  const validateProgramType = (programType: string): string | undefined => {
    if (!programType) return "Please select a preferred program type";
    return undefined;
  };

  // Validate individual field
  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "full_name":
        return validateFullName(value);
      case "mobile_number":
        return validateMobileNumber(value);
      case "email":
        return validateEmail(value);
      case "college_studied":
        return validateCollegeStudied(value);
      case "location":
        return validateLocation(value);
      case "program_type":
        return validateProgramType(value);
      default:
        return undefined;
    }
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    newErrors.full_name = validateFullName(formData.full_name);
    newErrors.mobile_number = validateMobileNumber(formData.mobile_number);
    newErrors.email = validateEmail(formData.email);
    newErrors.college_studied = validateCollegeStudied(
      formData.college_studied
    );
    newErrors.location = validateLocation(formData.location);
    newErrors.program_type = validateProgramType(formData.program_type);

    // Remove undefined errors
    Object.keys(newErrors).forEach((key) => {
      if (newErrors[key as keyof FormErrors] === undefined) {
        delete newErrors[key as keyof FormErrors];
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // For mobile number, only allow digits
    if (name === "mobile_number") {
      const numericValue = value.replace(/\D/g, "");
      // Limit to 10 digits
      if (numericValue.length <= 10) {
        setFormData({ ...formData, [name]: numericValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      toast.error("Please fix the errors in the form before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axiosInstance.post(
        API_URLS.ALLCOURSE.POST_COURSE,
        {
          ...formData,
          course: course,
        }
      );

      if (response.status >= 200 && response.status < 300) {
        console.log("Message sent successfully!", response.data);
        toast.success("Your message has been sent successfully!");

        // Reset form fields and errors
        setFormData({
          full_name: "",
          mobile_number: "",
          email: "",
          college_studied: "",
          program_type: "",
          course: "",
          location: "",
        });
        setErrors({});
      } else {
        console.error("Unexpected status code:", response.status);
        toast.error("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send the message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="lg:w-[45%] flex flex-col">
      <div className="bg-[#0E1721] p-8 rounded-lg border border-[#1A2836] shadow-lg">
        <h3 className="text-[#FF6B3D] text-xl font-semibold mb-3">
          NEED ASSISTANCE?
        </h3>
        <p className="text-white mb-6">Get guidance and clear your doubts</p>

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
                onBlur={handleBlur}
                className={`w-full bg-[#131F2C] border rounded-md p-3 text-white ${
                  errors.full_name ? "border-red-500" : "border-[#1A2836]"
                }`}
                required
              />
              {errors.full_name && (
                <p className="text-red-500 text-sm mt-1">{errors.full_name}</p>
              )}
            </div>

            <div>
              <input
                type="tel"
                name="mobile_number"
                placeholder="Mobile Number"
                value={formData.mobile_number}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full bg-[#131F2C] border rounded-md p-3 text-white ${
                  errors.mobile_number ? "border-red-500" : "border-[#1A2836]"
                }`}
                required
              />
              {errors.mobile_number && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mobile_number}
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
                onBlur={handleBlur}
                className={`w-full bg-[#131F2C] border rounded-md p-3 text-white ${
                  errors.email ? "border-red-500" : "border-[#1A2836]"
                }`}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="college_studied"
                placeholder="College or School Studied"
                value={formData.college_studied}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full bg-[#131F2C] border rounded-md p-3 text-white ${
                  errors.college_studied ? "border-red-500" : "border-[#1A2836]"
                }`}
                required
              />
              {errors.college_studied && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.college_studied}
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
                onBlur={handleBlur}
                className={`w-full bg-[#131F2C] border rounded-md p-3 text-white ${
                  errors.location ? "border-red-500" : "border-[#1A2836]"
                }`}
                required
              />
              {errors.location && (
                <p className="text-red-500 text-sm mt-1">{errors.location}</p>
              )}
            </div>

            <div>
              <div className="relative">
                <select
                  name="program_type"
                  value={formData.program_type}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full bg-[#131F2C] border rounded-md p-3 text-white appearance-none ${
                    errors.program_type ? "border-red-500" : "border-[#1A2836]"
                  }`}
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
              {errors.program_type && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.program_type}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`py-3 px-6 rounded-md w-full font-medium transition-colors ${
              isSubmitting
                ? "bg-gray-600 cursor-not-allowed text-gray-300"
                : "bg-[#FF6B3D] hover:bg-[#E04D2E] text-white"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AssistanceForm;
