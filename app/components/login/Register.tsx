import { useState } from "react";
import {
  X,
  ArrowRight,
  UserCircle,
  Mail,
  Phone,
  Calendar,
  School,
  MapPin,
  Check,
} from "lucide-react";
import Image from "next/image";
import { toast } from "react-toastify";
import axiosInstance from "../apiconfig/axios";
import { API_URLS } from "../apiconfig/api_urls";
import { initializeRecaptcha, sendOTP, verifyOTP } from "./firebase";
// import axios from "axios";
import { Eye, EyeOff } from "lucide-react"; // For password visibility toggle
import LoginModal from "./Login";
import { CheckCircle } from "lucide-react";

// Define the types
interface RegistrationModalProps {
  closeModal: () => void;
}

interface FormData {
  full_name: string;
  email: string;
  phone_number: string;
  location: string;
  dateOfBirth: string;
  gender: string;
  targetExamYear: string;
  programs: string[];
  firebase_user_id: string;
  password: string;
  confirm_password: string;
}

interface User {
  full_name: string;
  email: string;
  phone_number: string;
  location: string;
  dateOfBirth: string;
  gender: string;
  targetExamYear: string;
  programs: string[];
  firebase_user_id: string;
  password: string;
  confirm_password: string;
}

// interface FirebaseData {

//   phone_number: string;

// }

const RegistrationModal = ({ closeModal }: RegistrationModalProps) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    full_name: "", // Add this field to match backend expectations
    email: "",
    phone_number: "",
    location: "",
    dateOfBirth: "",
    gender: "", // Will be set to "male" or "female" as a string
    targetExamYear: "2024",
    programs: [],
    firebase_user_id: "",
    password: "", // Add password field
    confirm_password: "", // Add confirm password field
  });
  const [showlogin, setshowlogin] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  // const [firebaseData, setfirebaseData] = useState<FirebaseData>({

  //   phone_number: "",

  // });
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [activeField, setActiveField] = useState<string | null>(null);
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>("");
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [otpError, setOtpError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  // const [generatedOtp, setGeneratedOtp] = useState<string>("");

  // Simple function to generate a 6-digit OTP
  // const generateOTP = () => {
  //   const otp = Math.floor(100000 + Math.random() * 900000).toString();
  //   return otp;
  // };
console.log(showSuccess);

  const handleSendOTP = async () => {
    if (!formData.phone_number) {
      setOtpError("Please enter a mobile number");
      return;
    }

    const mobilePattern = /^(\+91|91)?[6-9]\d{9}$/;
    let mobileToCheck = formData.phone_number;

    if (mobileToCheck.startsWith("+91")) {
      mobileToCheck = mobileToCheck.substring(3);
    } else if (mobileToCheck.startsWith("91")) {
      mobileToCheck = mobileToCheck.substring(2);
    }

    if (
      !mobilePattern.test("+91" + mobileToCheck.replace(/\D/g, "").slice(-10))
    ) {
      setOtpError("Please enter a valid Indian mobile number");
      return;
    }

    setIsVerifying(true);
    setOtpError(null);

    try {
      // Initialize reCAPTCHA
      await initializeRecaptcha("recaptcha-container");

      // Format phone number properly
      const phoneNumber = formData.phone_number.startsWith("+91")
        ? formData.phone_number
        : `+91${formData.phone_number.replace(/^0+/, "")}`;

      // Send OTP via Firebase
      const result = await sendOTP(phoneNumber);

      if (result.success) {
        setOtpSent(true);
        toast.success("OTP sent successfully to your mobile!");
      } else {
        setOtpError(result.error || "Failed to send OTP");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      setOtpError("Failed to send OTP. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (otp.length < 6) {
      setOtpError("Please enter a valid 6-digit OTP");
      return;
    }

    try {
      setIsVerifying(true);
      setOtpError(null);

      // Verify OTP with Firebase
      const result = await verifyOTP(otp);
      console.log(result);

      if (result.success) {
        setIsVerified(true);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);

        // Store the Firebase user ID directly in formData
        if (result.user?.uid) {
          setFormData((prev) => ({
            ...prev,
            firebase_user_id: result.user?.uid || "",
          }));
        }

        console.log("Phone number verified successfully!");
      } else {
        setOtpError(result.error || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setOtpError("Verification failed. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      // If updating fullName, also update full_name
      if (name === "fullName") {
        return { ...prev, [name]: value, full_name: value };
      }

      // For gender radio buttons, capitalize the first letter
      if (name === "gender") {
        return {
          ...prev,
          [name]: value.charAt(0).toUpperCase() + value.slice(1),
        };
      }

      return { ...prev, [name]: value };
    });
  };

  const handleProgramSelect = (programId: string) => {
    setFormData((prev) => {
      if (prev.programs.includes(programId)) {
        return {
          ...prev,
          programs: prev.programs.filter((id) => id !== programId),
        };
      } else {
        return { ...prev, programs: [...prev.programs, programId] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isVerified) {
      setOtpError("Please verify your phone number before proceeding");
      return;
    }

    if (!validatePasswords()) {
      return;
    }

    try {
      setIsSubmitting(true);

      // Ensure phone number is properly formatted
      const phoneNumber = formData.phone_number.startsWith("+91")
        ? formData.phone_number
        : `+91${formData.phone_number.replace(/\D/g, "").slice(-10)}`;

      // Skip creating a new Firebase user - we already have the ID from verification
      if (!formData.firebase_user_id) {
        throw new Error(
          "Missing Firebase user ID. Please verify your phone number again."
        );
      }

      // Use the Firebase user ID we already captured during OTP verification
      const registrationData = {
        ...formData,
        phone_number: phoneNumber,
        // Remove confirm_password as it's not needed in API call
        confirm_password: undefined,
      };

      const response = await axiosInstance.post(
        API_URLS.REGISTRATION.POST_REGISTRATION,
        registrationData
      );

      if (response.status >= 200 && response.status < 300) {
        setLoginSuccess(true);

        setCurrentUser(response.data.user);
        setTimeout(() => closeModal(), 3000);
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Registration failed. Please try again.");
      setOtpError("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  console.log(loginSuccess);
  

  // Helper function to get or create Firebase user
  // const getOrCreateFirebaseUser = async (phoneNumber: string) => {
  //   try {
  //     // First try to get existing Firebase user
  //     const response = await axiosInstance.post(
  //       API_URLS.FIREBASE_NUMBER.POST_FIREBASE_NUMBER,
  //       { phone_number: phoneNumber }
  //     );

  //     return response.data.uid;
  //   } catch (error) {
  //     if (axios.isAxiosError(error) && error.response?.status === 404) {
  //       // If user doesn't exist, create a new one
  //       const createResponse = await axiosInstance.post(
  //         API_URLS.FIREBASE_NUMBER.POST_FIREBASE_NUMBER,
  //         { phone_number: phoneNumber, create: true }
  //       );

  //       return createResponse.data.uid;
  //     }

  //     // Re-throw other errors
  //     throw error;
  //   }
  // };

  // Helper function to register user
  // const registerUser = async (phoneNumber: string, firebaseUserId: string) => {
  //   const registrationData = {
  //     ...formData,
  //     phone_number: phoneNumber,
  //     firebase_user_id: firebaseUserId
  //   };

  //   const response = await axiosInstance.post(
  //     API_URLS.REGISTRATION.POST_REGISTRATION,
  //     registrationData
  //   );

  //   if (response.status >= 200 && response.status < 300) {
  //     toast.success("Registration successful!");
  //     setTimeout(() => closeModal(), 1000);
  //   } else {
  //     throw new Error("Registration failed");
  //   }
  // };

  // Helper function to complete the registration
  // const completeRegistration = async (phoneNumber: string, firebaseUserId: string) => {
  //   try {
  //     const registrationData = {
  //       ...formData,
  //       phone_number: phoneNumber,
  //       firebase_user_id: firebaseUserId
  //     };

  //     console.log("Sending registration data:", registrationData);

  //     const registrationResponse = await axiosInstance.post(
  //       API_URLS.REGISTRATION.POST_REGISTRATION,
  //       registrationData
  //     );

  //     if (registrationResponse.status >= 200 && registrationResponse.status < 300) {
  //       console.log("Registration successful:", registrationResponse.data);
  //       toast.success("Registration successful!");
  //       setTimeout(() => closeModal(), 1000);
  //     } else {
  //       throw new Error("Registration failed");
  //     }
  //   } catch (error) {
  //     console.error("Registration error:", error);
  //     toast.error("Failed to complete registration");
  //     throw error;
  //   }
  // };

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const goToNextStep = () => {
    if (currentStep === 1) {
      if (!formData.full_name || !formData.email || !isVerified) {
        setOtpError(
          "Please complete all required fields and verify your phone number"
        );
        return;
      }

      if (!validatePasswords()) {
        return;
      }
    }
    setCurrentStep((step) => step + 1);
  };

  const goToPrevStep = () => {
    setCurrentStep((step) => step - 1);
  };

  const programOptions = [
    { id: "school", label: "School", icon: School },
    { id: "after12", label: "After-12", icon: School },
    { id: "college", label: "College", icon: School },
  ];

  const validatePasswords = () => {
    if (formData.password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return false;
    }

    if (formData.password !== formData.confirm_password) {
      setPasswordError("Passwords do not match");
      return false;
    }

    setPasswordError("");
    return true;
  };

 // Replace this section in your code

if (showlogin) {
  return (
    <LoginModal 
      closeModal={() => setshowlogin(false)} 
      onSuccess={() => {
        setLoginSuccess(true);
        closeModal();
      }}
      source="chatbot" // Using one of the allowed values: "chatbot" or "percentage-calculator"
    />
  );
}
  console.log(loginSuccess);

  if (loginSuccess && currentUser) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-md transform transition-all animate-bounce-in">
          <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-6 relative">
            <div className="absolute top-3 right-3">
              <button
                onClick={closeModal}
                className="text-white hover:text-gray-200 transition-colors p-1 bg-orange-600 bg-opacity-30 rounded-full"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="text-green-500" size={48} />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white text-center mb-2">
              Registration Successful!
            </h2>
            <p className="text-white text-opacity-90 text-center">
              Welcome, {currentUser.full_name}
            </p>
          </div>

          <div className="p-6">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-gray-200 rounded-full"></div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <div className="animate-float-delay-1">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
                <div className="animate-float-delay-2">
                  <div className="w-4 h-4 bg-amber-400 rounded-full"></div>
                </div>
                <div className="animate-float-delay-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="animate-float-delay-4">
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                </div>
                <div className="animate-float-delay-5">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                </div>
              </div>

              <p className="text-gray-600 text-center">
                Your account has been successfully created.
              </p>

              <div className="text-center text-gray-500 text-sm">
                <p>Redirecting you to dashboard...</p>
              </div>

              <div className="flex justify-center">
                <div className="animate-spin w-5 h-5 border-2 border-orange-500 border-t-transparent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // In the form section, replace the OTP success toast with this:

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl">
        {/* Top branding bar */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 text-center rounded-t-2xl">
          <h1 className="text-2xl font-bold text-white">PrepAcademy</h1>
        </div>

        {/* Close button */}
        <div className="absolute top-3 right-3">
          <button
            onClick={closeModal}
            className="text-white hover:text-gray-200 transition-colors p-1 bg-orange-600 bg-opacity-30 rounded-full"
          >
            <X size={20} />
          </button>
        </div>

        <div id="recaptcha-container" className="hidden"></div>

        <div className="flex flex-col md:flex-row">
          {/* Left Side - Image (smaller) */}
          <div className="hidden md:block bg-orange-500 p-4 md:w-1/3 md:rounded-bl-2xl">
            <div className="w-full flex flex-col items-center justify-center h-full">
              <Image
                src="/commonformmascot.png"
                alt="Student studying"
                width={320}
                height={200}
                className="w-full rounded-lg shadow-lg"
              />

              <div className="mt-4 text-center bg-white bg-opacity-90 p-3 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-orange-600">
                  Create Account
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  Join PrepAcademy today!
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form content (with step navigation) */}
          <div className="p-4 md:p-6 md:w-2/3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Registration Form
              </h2>
              <div className="flex space-x-2">
                <span
                  className={`w-3 h-3 rounded-full ${
                    currentStep === 1 ? "bg-orange-500" : "bg-gray-300"
                  }`}
                ></span>
                <span
                  className={`w-3 h-3 rounded-full ${
                    currentStep === 2 ? "bg-orange-500" : "bg-gray-300"
                  }`}
                ></span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {currentStep === 1 && (
                <div className="space-y-4">
                  <h3 className="text-base font-medium text-gray-700">
                    Personal Information
                  </h3>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <UserCircle
                        className={`${
                          activeField === "fullName"
                            ? "text-orange-500"
                            : "text-gray-400"
                        } transition-colors`}
                        size={18}
                      />
                    </div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.full_name}
                      onChange={handleChange}
                      onFocus={() => handleFocus("fullName")}
                      onBlur={handleBlur}
                      required
                      className={`pl-10 w-full p-3 border ${
                        activeField === "fullName"
                          ? "border-orange-500 ring-1 ring-orange-500 ring-opacity-50"
                          : "border-gray-300"
                      } rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-gray-900 transition-all text-sm`}
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail
                        className={`${
                          activeField === "email"
                            ? "text-orange-500"
                            : "text-gray-400"
                        } transition-colors`}
                        size={18}
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus("email")}
                      onBlur={handleBlur}
                      required
                      className={`pl-10 w-full p-3 border ${
                        activeField === "email"
                          ? "border-orange-500 ring-1 ring-orange-500 ring-opacity-50"
                          : "border-gray-300"
                      } rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-gray-900 transition-all text-sm`}
                    />
                  </div>

                  {/* Password fields - Added here */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${
                          activeField === "password"
                            ? "text-orange-500"
                            : "text-gray-400"
                        } transition-colors h-5 w-5`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="3"
                          y="11"
                          width="18"
                          height="11"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password (min. 8 characters)"
                      value={formData.password}
                      onChange={handleChange}
                      onFocus={() => handleFocus("password")}
                      onBlur={handleBlur}
                      required
                      className={`pl-10 w-full p-3 border ${
                        activeField === "password"
                          ? "border-orange-500 ring-1 ring-orange-500 ring-opacity-50"
                          : "border-gray-300"
                      } rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-gray-900 transition-all text-sm`}
                    />
                    <div
                      className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff
                          size={18}
                          className="text-gray-400 hover:text-gray-600"
                        />
                      ) : (
                        <Eye
                          size={18}
                          className="text-gray-400 hover:text-gray-600"
                        />
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${
                          activeField === "confirm_password"
                            ? "text-orange-500"
                            : "text-gray-400"
                        } transition-colors h-5 w-5`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="3"
                          y="11"
                          width="18"
                          height="11"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirm_password"
                      placeholder="Confirm Password"
                      value={formData.confirm_password}
                      onChange={handleChange}
                      onFocus={() => handleFocus("confirm_password")}
                      onBlur={handleBlur}
                      required
                      className={`pl-10 w-full p-3 border ${
                        activeField === "confirm_password"
                          ? "border-orange-500 ring-1 ring-orange-500 ring-opacity-50"
                          : "border-gray-300"
                      } rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-gray-900 transition-all text-sm`}
                    />
                    <div
                      className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff
                          size={18}
                          className="text-gray-400 hover:text-gray-600"
                        />
                      ) : (
                        <Eye
                          size={18}
                          className="text-gray-400 hover:text-gray-600"
                        />
                      )}
                    </div>
                  </div>

                  {passwordError && (
                    <p className="text-red-500 text-xs font-medium">
                      {passwordError}
                    </p>
                  )}

                  {/* Mobile verification (compact) */}
                  <div className="space-y-3">
                    <h3 className="text-base font-medium text-gray-700">
                      Mobile Verification
                    </h3>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="relative col-span-3 md:col-span-2">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Phone
                            className={`${
                              activeField === "phone_number"
                                ? "text-orange-500"
                                : isVerified
                                ? "text-green-500"
                                : "text-gray-400"
                            } transition-colors`}
                            size={18}
                          />
                        </div>
                        <input
                          type="tel"
                          name="phone_number"
                          placeholder="Mobile Number (e.g., 9876543210)"
                          value={formData.phone_number}
                          onChange={handleChange}
                          onFocus={() => handleFocus("phone_number")}
                          onBlur={handleBlur}
                          required
                          disabled={isVerified}
                          className={`pl-10 w-full p-3 border ${
                            activeField === "phone_number"
                              ? "border-orange-500 ring-1 ring-orange-500 ring-opacity-50"
                              : isVerified
                              ? "border-green-500 bg-green-50"
                              : "border-gray-300"
                          } rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-gray-900 transition-all text-sm`}
                        />
                        {isVerified && (
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center">
                            <Check size={14} className="text-green-500 mr-1" />
                            <span className="text-green-500 text-xs font-medium">
                              Verified
                            </span>
                          </div>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={handleSendOTP}
                        disabled={
                          !formData.phone_number || isVerifying || isVerified
                        }
                        className="col-span-3 md:col-span-1 bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                        {isVerifying && otpSent
                          ? "Resending..."
                          : isVerifying
                          ? "Sending..."
                          : otpSent
                          ? "Resend OTP"
                          : "Send OTP"}
                      </button>
                      {otpSent && !isVerified && (
                        <div className=" w-full bg-green-50 border border-green-200 rounded-lg flex items-center justify-center  animate-fade-in">
                          <CheckCircle className="text-green-500" size={20} />
                          <p className="text-green-600  text-sm font-medium">
                            OTP sent successfully to your mobile!
                          </p>
                        </div>
                      )}
                    </div>

                    {otpSent && !isVerified && (
                      <div className="grid grid-cols-3 gap-2">
                        <input
                          type="text"
                          placeholder="Enter 6-digit OTP"
                          value={otp}
                          onChange={(e) =>
                            setOtp(
                              e.target.value.replace(/[^0-9]/g, "").slice(0, 6)
                            )
                          }
                          maxLength={6}
                          className="col-span-2 p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-sm"
                        />
                        <button
                          type="button"
                          onClick={handleVerifyOTP}
                          disabled={otp.length !== 6 || isVerifying}
                          className="col-span-1 bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                          {isVerifying ? "Verifying..." : "Verify"}
                        </button>
                      </div>
                    )}

                    {otpError && (
                      <p className="text-red-500 text-xs font-medium">
                        {otpError}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 2 content remains the same */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  {/* Additional Information */}
                  <div className="space-y-3">
                    <h3 className="text-base font-medium text-gray-700">
                      Additional Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Calendar
                            className={`${
                              activeField === "dateOfBirth"
                                ? "text-orange-500"
                                : "text-gray-400"
                            } transition-colors`}
                            size={18}
                          />
                        </div>
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          onFocus={() => handleFocus("dateOfBirth")}
                          onBlur={handleBlur}
                          required
                          className={`pl-10 w-full p-3 border ${
                            activeField === "dateOfBirth"
                              ? "border-orange-500 ring-1 ring-orange-500 ring-opacity-50"
                              : "border-gray-300"
                          } rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-gray-900 transition-all text-sm`}
                        />
                      </div>

                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <MapPin
                            className={`${
                              activeField === "location"
                                ? "text-orange-500"
                                : "text-gray-400"
                            } transition-colors`}
                            size={18}
                          />
                        </div>
                        <input
                          type="text"
                          name="location"
                          placeholder="Your Location/City"
                          value={formData.location}
                          onChange={handleChange}
                          onFocus={() => handleFocus("location")}
                          onBlur={handleBlur}
                          required
                          className={`pl-10 w-full p-3 border ${
                            activeField === "location"
                              ? "border-orange-500 ring-1 ring-orange-500 ring-opacity-50"
                              : "border-gray-300"
                          } rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-gray-900 transition-all text-sm`}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Gender
                        </label>
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center">
                            <input
                              id="male"
                              type="radio"
                              name="gender"
                              value="Male"
                              checked={formData.gender === "Male"}
                              onChange={handleChange}
                              className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                            />
                            <label
                              htmlFor="male"
                              className="ml-2 text-sm text-gray-700"
                            >
                              Male
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="female"
                              type="radio"
                              name="gender"
                              value="Female"
                              checked={formData.gender === "Female"}
                              onChange={handleChange}
                              className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                            />
                            <label
                              htmlFor="female"
                              className="ml-2 text-sm text-gray-700"
                            >
                              Female
                            </label>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Target Exam Year
                        </label>
                        <select
                          name="targetExamYear"
                          value={formData.targetExamYear}
                          onChange={handleChange}
                          onFocus={() => handleFocus("targetExamYear")}
                          onBlur={handleBlur}
                          className={`w-full p-3 border ${
                            activeField === "targetExamYear"
                              ? "border-orange-500 ring-1 ring-orange-500 ring-opacity-50"
                              : "border-gray-300"
                          } rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-gray-900 transition-all text-sm`}
                        >
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                          <option value="2026">2026</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Program Selection */}
                  <div className="space-y-3">
                    <label className="block text-gray-700 text-sm font-medium">
                      Programs of Interest
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {programOptions.map((program) => (
                        <button
                          key={program.id}
                          type="button"
                          onClick={() => handleProgramSelect(program.id)}
                          className={`flex flex-col items-center justify-center p-2 border-2 rounded-lg transition-all ${
                            formData.programs.includes(program.id)
                              ? "bg-orange-50 border-orange-500 shadow-md"
                              : "border-gray-200 hover:border-orange-300 hover:bg-orange-50"
                          }`}
                        >
                          <program.icon
                            size={20}
                            className={
                              formData.programs.includes(program.id)
                                ? "text-orange-500"
                                : "text-gray-500"
                            }
                          />
                          <span
                            className={`text-xs mt-1 font-medium ${
                              formData.programs.includes(program.id)
                                ? "text-orange-600"
                                : "text-gray-700"
                            }`}
                          >
                            {program.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation/Submit Buttons */}
              <div className="pt-2 flex justify-between">
                {currentStep === 2 ? (
                  <button
                    type="button"
                    onClick={goToPrevStep}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg text-sm transition-colors"
                  >
                    Back
                  </button>
                ) : (
                  <div></div>
                )}

                {currentStep === 1 ? (
                  <button
                    type="button"
                    onClick={goToNextStep}
                    className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center transition-all text-sm"
                  >
                    <span>Next</span>
                    <ArrowRight size={18} className="ml-1" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center transition-all text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Complete Registration"}
                    {!isSubmitting && <ArrowRight size={18} className="ml-1" />}
                  </button>
                )}
              </div>
            </form>

            <div className="mt-4 text-center">
              <p className="text-gray-600 text-sm">
                Already have an account?{" "}
                <button
                  className="text-orange-600 hover:underline font-medium"
                  onClick={() => setshowlogin(true)}
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          70% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }

        .animate-float-delay-1 {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delay-2 {
          animation: float 3.2s ease-in-out 0.2s infinite;
        }

        .animate-float-delay-3 {
          animation: float 3.4s ease-in-out 0.4s infinite;
        }

        .animate-float-delay-4 {
          animation: float 3.3s ease-in-out 0.6s infinite;
        }

        .animate-float-delay-5 {
          animation: float 3.5s ease-in-out 0.8s infinite;
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default RegistrationModal;
