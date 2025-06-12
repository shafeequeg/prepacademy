import { useEffect, useState } from "react";
import {
  X,
  ArrowRight,
  Mail,
  Phone,
  Lock,
  AlertCircle,
  CheckCircle,
  Loader2,
} from "lucide-react";
import axiosInstance from "../apiconfig/axios";
import { API_URLS } from "../apiconfig/api_urls";
// import { initializeApp } from 'firebase/app';
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   PhoneAuthProvider,
//   signInWithCredential,
//   RecaptchaVerifier
// } from 'firebase/auth';
import RegisterForm from "./Register";
import { initializeRecaptcha, sendOTP, verifyOTP } from "./firebase";
import Image from "next/image";

interface LoginModalProps {
  closeModal: () => void;
  source: 'chatbot' | 'percentage-calculator' | 'account';
  onSuccess: () => void;
}
interface ApiError {
  message: string;
}

interface User {
  id: number;
  uuid: string;
  full_name: string;
  email: string;
  password: string;
  phone_number: string;
  dob?: string | null;
  gender: "Male" | "Female";
  location?: string | null;
  exam_target?: string | null;
  program?: string | null;
  firebase_user_id: string;
}

const LoginModal: React.FC<LoginModalProps> = ({
  closeModal,
  onSuccess,
  source,
}) => {
  const [loginMethod, setLoginMethod] = useState<"email" | "phone_number">(
    "email"
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone_number: "",
  });
  const [activeField, setActiveField] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  // const [verificationId, setVerificationId] = useState<string | null>(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [otpError, setOtpError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [loginSuccess, setLoginSuccess] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [validationErrors, setValidationErrors] = useState({
    email: "",
    password: "",
    phone_number: "",
    otp: "",
  });

  console.log(onSuccess);

  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get(API_URLS.USERS.GET_USERS);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(otpError);
  console.log(isVerified);
  console.log(isVerifying);

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailPattern.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validatePassword = (password: string) => {
    if (!password) return "Password is required";
    if (password.length < 6)
      return "Password must be at least 6 characters long";
    return "";
  };

  const validatePhoneNumber = (phone_number: string) => {
    const mobilePattern = /^(\+91|91)?[6-9]\d{9}$/;
    let mobileToCheck = phone_number;
    if (mobileToCheck.startsWith("+91")) {
      mobileToCheck = mobileToCheck.substring(3);
    } else if (mobileToCheck.startsWith("91")) {
      mobileToCheck = mobileToCheck.substring(2);
    }
    if (!phone_number) return "Phone number is required";
    if (
      !mobilePattern.test("+91" + mobileToCheck.replace(/\D/g, "").slice(-10))
    ) {
      return "Please enter a valid Indian mobile number";
    }
    return "";
  };

  const validateOTP = (otp: string) => {
    if (!otp) return "OTP is required";
    if (otp.length < 6) return "Please enter a valid 6-digit OTP";
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
    setValidationErrors((prev) => ({
      ...prev,
      [name]:
        name === "email"
          ? validateEmail(value)
          : name === "password"
          ? validatePassword(value)
          : name === "phone_number"
          ? validatePhoneNumber(value)
          : validateOTP(value),
    }));
  };

  console.log(source);

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // Simulate login, then call onSuccess
  //   setTimeout(() => {
  //     onSuccess();
  //     closeModal();
  //   }, 1000);
  // };

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const saveUserToLocalStorage = (user: User) => {
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        id: user.id,
        uuid: user.uuid,
        full_name: user.full_name,
        email: user.email,
        phone_number: user.phone_number,
        firebase_user_id: user.firebase_user_id,
      })
    );
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleEmailLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    if (emailError || passwordError) {
      setValidationErrors({
        ...validationErrors,
        email: emailError,
        password: passwordError,
      });
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const user = users.find((user) => user.email === formData.email);
      if (!user) {
        setError("User not found. Please check your email or register.");
        setLoading(false);
        return;
      }
      if (user.password !== formData.password) {
        setError("Incorrect password. Please try again.");
        setLoading(false);
        return;
      }
      saveUserToLocalStorage(user);
      setCurrentUser(user);
      setLoading(false);
      setLoginSuccess(true);

      // Close the modal after 3 seconds of showing success
      setTimeout(() => {
        closeModal();
      }, 3000);
    } catch (error) {
      const err = error as ApiError;
      setError(err.message || "Login failed. Please try again.");
      setLoading(false);
    }
  };


  const handleSendOTP = async () => {
    const phoneError = validatePhoneNumber(formData.phone_number);
    if (phoneError) {
      setValidationErrors({ ...validationErrors, phone_number: phoneError });
      return;
    }
    setLoading(true); // Set loading to true at the start
    setIsVerifying(true);
    setOtpError(null);

    try {
      await initializeRecaptcha("recaptcha-container");
      const phoneNumber = formData.phone_number.startsWith("+91")
        ? formData.phone_number
        : `+91${formData.phone_number.replace(/^0+/, "")}`;
      const result = await sendOTP(phoneNumber);
      if (result.success) {
        setOtpSent(true);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        setOtpError(result.error || "Failed to send OTP");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      setOtpError("Failed to send OTP. Please try again.");
    } finally {
      setIsVerifying(false);
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    const otpError = validateOTP(otp);
    if (otpError) {
      setValidationErrors({ ...validationErrors, otp: otpError });
      return;
    }
    try {
      setIsVerifying(true);
      setOtpError(null);
      const result = await verifyOTP(otp);
      if (result.success) {
        setIsVerified(true);
        if (result.user?.uid) {
          setFormData((prev) => ({
            ...prev,
            firebase_user_id: result.user?.uid || "",
          }));

          // Find user by phone number
          const user = users.find(
            (user) =>
              user.phone_number === formData.phone_number ||
              user.phone_number === `+91${formData.phone_number}` ||
              `+91${user.phone_number}` === formData.phone_number
          );

          if (user) {
            saveUserToLocalStorage(user);
            setCurrentUser(user);
            setLoginSuccess(true);

            // Close the modal after 3 seconds of showing success
            setTimeout(() => {
              closeModal();
            }, 3000);
          } else {
            setOtpError("User not found with this phone number.");
          }
        }
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

  if (showRegister) {
    return <RegisterForm closeModal={() => setShowRegister(false)} />;
  }

  // Login Success Screen
  if (loginSuccess && currentUser) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-md transform transition-all animate-bounce-in">
          <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-6 relative">
            <div className="absolute top-3 right-3">
              <button
                onClick={closeModal}
                className="text-white hover:text-gray-200 transition-colors p-1 bg-orange-600 bg-opacity-30 rounded-full md:text-gray-500 md:hover:text-orange-500"
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
              Login Successful!
            </h2>
            <p className="text-white text-opacity-90 text-center">
              Welcome back, {currentUser.full_name}
            </p>
          </div>

          <div className="p-6">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-gray-200 rounded-full"></div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                {/* Animated confetti elements */}
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
                You&apos;ve been successfully logged in to your account.
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-2xl flex flex-col md:flex-row">
        <div className="relative bg-gradient-to-br from-orange-500 to-amber-600 h-40 md:h-auto md:w-1/2 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.3) 2%, transparent 0%)",
                backgroundSize: "100px 100px",
              }}
            ></div>
          </div>
          <div className="absolute top-3 right-3 md:hidden">
            <button
              onClick={closeModal}
              className="text-white hover:text-gray-200 transition-colors p-1 bg-orange-600 bg-opacity-30 rounded-full"
            >
              <X size={20} />
            </button>
          </div>
          <div className="relative w-full h-full flex items-center justify-center p-6">
            <div className="w-full max-w-xs relative aspect-square">
              <Image
                src="/commonformmascot.png"
                alt="PrepAcademy logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="absolute bottom-6 w-full flex justify-center">
            <div className="bg-white px-6 py-2 rounded-full shadow-lg">
              <h2 className="text-xl font-bold text-orange-600">PrepAcademy</h2>
            </div>
          </div>
        </div>
        <div className="p-6 md:w-1/2">
          <div className="absolute top-3 right-3 hidden md:block">
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-orange-500 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">
            Welcome Back!
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Sign in to access your courses
          </p>
          <div className="flex rounded-lg overflow-hidden border border-gray-300 mb-6">
            <button
              className={`flex-1 py-2 px-4 text-center ${
                loginMethod === "email"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setLoginMethod("email")}
            >
              Email Login
            </button>
            <button
              className={`flex-1 py-2 px-4 text-center ${
                loginMethod === "phone_number"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setLoginMethod("phone_number")}
            >
              Phone OTP
            </button>
          </div>
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
              <AlertCircle
                className="text-red-500 flex-shrink-0 mt-0.5"
                size={16}
              />
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}
          {showSuccess && loginMethod === "phone_number" && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center justify-center gap-2 animate-fade-in">
              <CheckCircle className="text-green-500" size={20} />
              <p className="text-green-600 text-sm font-medium">
                OTP sent successfully to your mobile!
              </p>
            </div>
          )}
          {loginMethod === "email" ? (
            <form onSubmit={handleEmailLogin} className="space-y-4">
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
                      ? "border-orange-500 ring-2 ring-orange-500"
                      : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900 transition-all ${
                    validationErrors.email ? "border-red-500" : ""
                  }`}
                />
                {validationErrors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {validationErrors.email}
                  </p>
                )}
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock
                    className={`${
                      activeField === "password"
                        ? "text-orange-500"
                        : "text-gray-400"
                    } transition-colors`}
                    size={18}
                  />
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => handleFocus("password")}
                  onBlur={handleBlur}
                  required
                  className={`pl-10 w-full p-3 border ${
                    activeField === "password"
                      ? "border-orange-500 ring-2 ring-orange-500"
                      : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900 transition-all ${
                    validationErrors.password ? "border-red-500" : ""
                  }`}
                />
                {validationErrors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {validationErrors.password}
                  </p>
                )}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 text-orange-600 rounded border-gray-300 focus:ring-orange-500"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm text-gray-600"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-orange-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center group transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70"
              >
                {loading ? (
                  <span className="flex items-center">
                    <Loader2 className="animate-spin mr-2" size={18} />
                    Signing In...
                  </span>
                ) : (
                  <>
                    <span>Sign In</span>
                    <ArrowRight
                      size={18}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              {!otpSent ? (
                <>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Phone
                        className={`${
                          activeField === "phone_number"
                            ? "text-orange-500"
                            : "text-gray-400"
                        } transition-colors`}
                        size={18}
                      />
                    </div>
                    <input
                      type="tel"
                      name="phone_number"
                      placeholder="Phone Number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      onFocus={() => handleFocus("phone")}
                      onBlur={handleBlur}
                      required
                      className={`pl-10 w-full p-3 border ${
                        activeField === "phone_number"
                          ? "border-orange-500 ring-2 ring-orange-500"
                          : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900 transition-all ${
                        validationErrors.phone_number ? "border-red-500" : ""
                      }`}
                    />
                    {validationErrors.phone_number && (
                      <p className="text-red-500 text-xs mt-1">
                        {validationErrors.phone_number}
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={handleSendOTP}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center group transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70"
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <Loader2 className="animate-spin mr-2" size={18} />
                        Sending OTP...
                      </span>
                    ) : (
                      "Send OTP"
                    )}
                  </button>
                </>
              ) : (
                <>
                  <div className="text-center mb-4">
                    <p className="text-sm text-gray-600">
                      OTP sent to {formData.phone_number}
                    </p>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="otp"
                      placeholder="Enter 6-digit OTP"
                      value={otp}
                      onChange={(e) => {
                        setOtp(e.target.value);
                        setValidationErrors({
                          ...validationErrors,
                          otp: validateOTP(e.target.value),
                        });
                      }}
                      className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-center text-gray-900 transition-all ${
                        validationErrors.otp ? "border-red-500" : ""
                      }`}
                      maxLength={6}
                    />
                    {validationErrors.otp && (
                      <p className="text-red-500 text-xs mt-1">
                        {validationErrors.otp}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setOtpSent(false);
                        setOtp("");
                      }}
                      className="flex-1 border border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleVerifyOTP}
                      disabled={loading}
                      className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70"
                    >
                      {loading ? (
                        <span className="flex items-center">
                          <Loader2 className="animate-spin mr-2" size={18} />
                          Verifying...
                        </span>
                      ) : (
                        "Verify OTP"
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Don&apos;t have an account?{" "}
              <button
                className="text-orange-600 hover:underline font-medium"
                onClick={() => setShowRegister(true)}
              >
                Sign up
              </button>
            </p>
          </div>
          <div className="mt-4 text-center text-xs text-gray-500">
            <p>By logging in, you agree to our Terms and Privacy Policy</p>
          </div>
        </div>
      </div>
      <div id="recaptcha-container"></div>

      {/* Add keyframe animation styles */}
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
          animation: float 3.5s ease-in-out 0

          .animate-float-delay-5 {
          animation: float 3.5s ease-in-out 0.8s infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default LoginModal;
