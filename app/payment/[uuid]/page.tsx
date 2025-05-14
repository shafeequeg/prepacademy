// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { CheckCircle, Lock, X, AlertCircle } from "lucide-react";
// import axiosInstance from "@/app/components/apiconfig/axios";
// import { API_URLS } from "@/app/components/apiconfig/api_urls";
// import Script from "next/script";
// // import { toast } from "react-toastify";

// interface CourseType {
//   title: string;
//   price: string;
//   originalPrice: string;
//   discount: string;
//   duration: string;
//   items?: number;
//   uuid?: string;
// }

// declare global {
//   interface Window {
//     Razorpay: new (options: RazorpayOptions) => {
//       open: () => void;
//     };
//   }
// }

// interface RazorpayOptions {
//   key: string;
//   amount: number;
//   currency: string;
//   name: string;
//   description: string;
//   order_id: string;
//   handler: (response: RazorpayResponse) => Promise<void>;
//   prefill: {
//     name: string;
//     email: string;
//   };
//   theme: {
//     color: string;
//   };
// }

// interface RazorpayResponse {
//   razorpay_payment_id: string;
//   razorpay_order_id: string;
//   razorpay_signature: string;
// }

// interface UserType {
//   id?: number;
//   uuid?: string;
//   full_name: string;
//   email: string;
//   password: string;
//   phone_number?: string;
//   dob?: string;
//   gender: "Male" | "Female";
//   location?: string;
//   exam_target?: string;
//   program?: string;
//   firebase_user_id: string;
// }

// export default function PaymentPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [step, setStep] = useState<number>(1);
//   const [isProcessing, setIsProcessing] = useState<boolean>(false);
//   const [course, setCourse] = useState<CourseType>({
//     title: "Loading...",
//     price: "₹0",
//     originalPrice: "₹0",
//     discount: "₹0",
//     duration: "0 months",
//     items: 1,
//     uuid: "",
//   });
//   const [currentUser, setCurrentUser] = useState<UserType | null>(null);
//   const [gstAmount, setGstAmount] = useState<string>("₹0");
//   const [totalAmount, setTotalAmount] = useState<string>("₹0");
//   const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);
//   const [alertMessage, setAlertMessage] = useState<string>("");
//   const [showErrorAlert, setShowErrorAlert] = useState<boolean>(false);

//   const user_uuid = searchParams.get("user_uuid");
//   const [users, setUsers] = useState<UserType[]>([]);

//   console.log(users);
//   console.log(setIsProcessing);

//   useEffect(() => {
//     const title = searchParams.get("title") || "Unknown Course";
//     const price = searchParams.get("price") || "₹0";
//     const originalPrice = searchParams.get("originalPrice") || "₹0";
//     const discount = searchParams.get("discount") || "₹0";
//     const duration = searchParams.get("duration") || "0 months";
//     const items = parseInt(searchParams.get("items") || "1");
//     const uuid = searchParams.get("uuid") || "";

//     setCourse({
//       title: decodeURIComponent(title),
//       price,
//       originalPrice,
//       discount,
//       duration,
//       items,
//       uuid,
//     });

//     const priceValue = parseFloat(price.replace(/[^0-9.]/g, ""));
//     const gst = priceValue * 0.18;
//     const total = priceValue + gst;

//     setGstAmount(`₹${gst.toFixed(2)}`);
//     setTotalAmount(`₹${total.toFixed(2)}`);
//   }, [searchParams]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axiosInstance.get(
//           API_URLS.REGISTRATION.GET_REGISTRATION
//         );
//         setUsers(response.data);

//         if (user_uuid) {
//           const user = response.data.find(
//             (u: UserType) => u.uuid === user_uuid
//           );
//           if (user) {
//             setCurrentUser(user);
//           }
//         }
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, [user_uuid]);

//   // Handle payment initiation with Razorpay
//   // Updated handlePayment function
//   // Replace your handlePayment function with this implementation
//   // const handlePayment = async (): Promise<void> => {
//   //   if (!user_uuid || !course.uuid) {
//   //     alert("Required information is missing. Please try again.");
//   //     return;
//   //   }

//   //   setIsProcessing(true);

//   //   try {
//   //     // First, create an order on your server
//   //     const orderResponse = await axiosInstance.post(API_URLS.PAYMENT.POST_PAYMENT_COURSE, {
//   //       user_uuid: user_uuid,
//   //       course_uuid: course.uuid
//   //     });

//   //     console.log("Order response:", orderResponse.data);

//   //     // Load Razorpay script dynamically
//   //     if (!(window as any).Razorpay) {
//   //       const script = document.createElement('script');
//   //       script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//   //       script.async = true;
//   //       document.body.appendChild(script);

//   //       // Wait for script to load
//   //       await new Promise((resolve) => {
//   //         script.onload = resolve;
//   //       });
//   //     }

//   //     // Extract price for Razorpay (remove currency symbol and convert to paise)
//   //     const priceValue = Math.round(parseFloat(totalAmount.replace(/[^0-9.]/g, "")) * 100);

//   //     // Get order_id from your backend response
//   //     const orderId = orderResponse.data.order_id;

//   //     if (!orderId) {
//   //       throw new Error("Order ID not received from server");
//   //     }

//   //     // Create Razorpay options
//   //     const options = {
//   //       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Make sure this env variable is correctly set
//   //       amount: priceValue,
//   //       currency: "INR",
//   //       name: "Exam Preparation",  // Your company/site name
//   //       description: course.title,
//   //       order_id: orderId,
//   //       handler: async function(response: any) {
//   //         try {
//   //           // Verify payment on your server
//   //           const verifyResponse = await axiosInstance.post(API_URLS.VERIFY_PAYMENT.POST_VERIFY_PAYMENT_COURSE, {
//   //             razorpay_payment_id: response.razorpay_payment_id,
//   //             razorpay_order_id: response.razorpay_order_id,
//   //             razorpay_signature: response.razorpay_signature,
//   //           });

//   //           if (verifyResponse.data.status === "success") {
//   //             setStep(2);
//   //             setShowSuccessAlert(true);
//   //           } else {
//   //             alert("Payment verification failed. Please contact support.");
//   //           }
//   //         } catch (error) {
//   //           console.error("Payment verification error:", error);
//   //           alert("Payment verification failed. Please contact support.");
//   //         }
//   //       },
//   //       prefill: {
//   //         name: currentUser?.full_name || '',
//   //         email: currentUser?.email || '',
//   //         contact: currentUser?.phone_number || ''
//   //       },
//   //       theme: {
//   //         color: "#E45016" // Match your orange theme
//   //       },
//   //       modal: {
//   //         ondismiss: function() {
//   //           setIsProcessing(false);
//   //         }
//   //       }
//   //     };

//   //     // Open Razorpay checkout
//   //     const razorpay = new (window as any).Razorpay(options);
//   //     razorpay.open();

//   //   } catch (error) {
//   //     console.error("Payment initiation error:", error);
//   //     alert(
//   //       `Payment initiation failed: ${
//   //         error instanceof Error ? error.message : "Unknown error"
//   //       }`
//   //     );
//   //     setIsProcessing(false);
//   //   }
//   // };
//   // UPDATED handlePayment function with comprehensive error handling
//   const handlePayment = async () => {
//     if (!currentUser) {
//       alert("User details not found");
//       return;
//     }

//     console.log("currentUser", currentUser);

//     // ✅ Ensure Razorpay SDK is loaded
//     if (
//       typeof window === "undefined" ||
//       !(window as { Razorpay?: unknown }).Razorpay
//     ) {
//       alert("Razorpay SDK not loaded. Please refresh and try again.");
//       return;
//     }

//     try {
//       const res = await axiosInstance.post(
//         API_URLS.PAYMENT.POST_PAYMENT_COURSE,
//         {
//           user_uuid: currentUser.uuid,
//           course_uuid: course.uuid,
//           term_condition: true,
//         }
//       );

//       const order = res.data;

//       console.log("order", order);

//       const options: RazorpayOptions = {
//         key:
//           order.razorpay_key || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
//         amount: order.payment.amount * 100, // ensure amount is in paisa
//         currency: "INR",
//         name: "Prepacademy",
//         description: "Premium Personality Report",
//         order_id: order.order_id,
//         handler: async function (response: RazorpayResponse) {
//           await axiosInstance.post(
//             API_URLS.VERIFY_PAYMENT.POST_VERIFY_PAYMENT_COURSE,
//             {
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_signature: response.razorpay_signature,
//             }
//           );
//           // toast.success("Payment Successful!");
//           setShowSuccessAlert(true);
//         },
//         prefill: {
//           name: currentUser.full_name,
//           email: currentUser.email,
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };

//       console.log("options", options);
//       // const rzp = new window.Razorpay(options);
//       const rzp = new window.Razorpay(options);

//       rzp.open();
//     } catch (error) {
//       console.error("Payment error:", error);
//       // toast.error("Payment failed. Please try again.");
//       setAlertMessage("Payment verification failed. Please try again.");
//       setShowErrorAlert(true);
//     }
//   };

//   // Separate function to handle successful Razorpay responses
//   // const handleRazorpayResponse = async (response: any) => {
//   //   try {
//   //     console.log("Verifying payment with server:", response);

//   //     const verifyResponse = await axiosInstance.post(
//   //       API_URLS.VERIFY_PAYMENT.POST_VERIFY_PAYMENT_COURSE,
//   //       {
//   //         razorpay_payment_id: response.razorpay_payment_id,
//   //         razorpay_order_id: response.razorpay_order_id,
//   //         razorpay_signature: response.razorpay_signature,
//   //         user_uuid: user_uuid,
//   //         course_uuid: course.uuid,
//   //       }
//   //     );

//   //     console.log("Verification response:", verifyResponse.data);

//   //     if (verifyResponse.data.status === "success") {
//   //       setStep(2);
//   //       setShowSuccessAlert(true);
//   //     } else {
//   //       alert("Payment verification failed. Please contact support.");
//   //     }
//   //   } catch (error) {
//   //     console.error("Payment verification error:", error);
//   //     alert("Payment verification failed. Please contact support.");
//   //   } finally {
//   //     setIsProcessing(false);
//   //   }
//   // };
//   // const handlePaymentsubmit = async () => {
//   //   if (!student) {
//   //     alert("Student details not found");
//   //     return;
//   //   }

//   //   // ✅ Ensure Razorpay SDK is loaded
//   //   if (typeof window === "undefined" || !(window as any).Razorpay) {
//   //     alert("Razorpay SDK not loaded. Please refresh and try again.");
//   //     return;
//   //   }

//   //   try {
//   //     const res = await api.post(API_URL.PAYMENT.CREATE_ORDER, {
//   //       student_uuid: student.student_uuid,
//   //       name: student.name,
//   //       email: student.email,
//   //       term_condition: true,
//   //     });

//   //     const order = res.data;

//   //     const options: any = {
//   //       key: order.razorpay_key || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//   //       amount: order.amount * 100, // ensure amount is in paisa
//   //       currency: "INR",
//   //       name: "Prepacademy",
//   //       description: "Premium Personality Report",
//   //       order_id: order.order_id,
//   //       handler: async function (response: any) {
//   //         await axiosInstance.post(API_URLS.PAYMENT.VERIFY_ORDER, {
//   //           razorpay_payment_id: response.razorpay_payment_id,
//   //           razorpay_order_id: response.razorpay_order_id,
//   //           razorpay_signature: response.razorpay_signature,
//   //         });

//   //         alert("Payment Successful!");
//   //       },
//   //       prefill: {
//   //         name: student.name,
//   //         email: student.email,
//   //       },
//   //       theme: {
//   //         color: "#3399cc",
//   //       },
//   //     };

//   //     const rzp = new (window as any).Razorpay(options);
//   //     rzp.open();
//   //   } catch (error) {
//   //     console.error("Payment error:", error);
//   //     alert("Payment failed. Please try again.");
//   //   }
//   // };

//   // Handle payment verification after redirect from Razorpay
//   useEffect(() => {
//     const verifyPayment = async () => {
//       const paymentId = searchParams.get("razorpay_payment_id");
//       const orderId = searchParams.get("razorpay_order_id");
//       const signature = searchParams.get("razorpay_signature");

//       if (paymentId && orderId && signature) {
//         try {
//           const response = await axiosInstance.post(
//             API_URLS.VERIFY_PAYMENT.POST_VERIFY_PAYMENT_COURSE,
//             {
//               razorpay_payment_id: paymentId,
//               razorpay_order_id: orderId,
//               razorpay_signature: signature,
//             }
//           );

//           if (response.data.status === "success") {
//             setStep(2); // Move to confirmation step
//             setShowSuccessAlert(true); // Show success alert
//           } else {
//             // alert("Payment verification failed. Please contact support.");
//             setAlertMessage(
//               "Payment verification failed. Please contact support."
//             );
//             setShowErrorAlert(true);
//           }
//         } catch (error) {
//           console.error("Payment verification error:", error);
//           // alert("Payment verification failed. Please contact support.");
//           setAlertMessage(
//             "Payment verification failed. Please contact support."
//           );
//           setShowErrorAlert(true);
//         }
//       }
//     };

//     verifyPayment();
//   }, [searchParams]);

//   // const handleSuccess = (): void => {
//   //   router.push("/my-courses");
//   // };

//   const handleSuccess = (): void => {
//     router.push("/allcourses");
//   };

//   const closeSuccessAlert = (): void => {
//     setShowSuccessAlert(false);
//     router.push("/allcourses");
//   };

//   const closeErrorAlert = (): void => {
//     setShowErrorAlert(false);
//   };
//   return (
//     <div className="min-h-screen bg-[#2B1615] text-orange-50 flex flex-col">
//       <Script
//         src="https://checkout.razorpay.com/v1/checkout.js"
//         strategy="afterInteractive"
//       />
//       <header className="border-b border-orange-900 bg-[#1F100F] p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-xl md:text-2xl font-bold text-orange-100">
//             Secure Checkout
//           </h1>
//           <button
//             onClick={() => router.back()}
//             className="text-orange-400 hover:text-orange-300"
//           >
//             <X size={24} />
//           </button>
//         </div>
//       </header>

//       <div className="flex-grow container mx-auto py-6 px-4 md:px-6 lg:py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2">
//             {step < 2 && (
//               <div className="mb-6">
//                 <div className="flex items-center">
//                   <div
//                     className={`flex items-center justify-center w-8 h-8 rounded-full ${
//                       step >= 1
//                         ? "bg-orange-500 text-white"
//                         : "bg-orange-900 text-orange-400"
//                     }`}
//                   >
//                     1
//                   </div>
//                   <div
//                     className={`flex-1 h-1 mx-2 ${
//                       step >= 2 ? "bg-orange-500" : "bg-orange-900"
//                     }`}
//                   ></div>
//                   <div
//                     className={`flex items-center justify-center w-8 h-8 rounded-full ${
//                       step >= 2
//                         ? "bg-orange-500 text-white"
//                         : "bg-orange-900 text-orange-400"
//                     }`}
//                   >
//                     2
//                   </div>
//                 </div>
//                 <div className="flex justify-between mt-2 text-sm text-orange-400">
//                   <div className="text-center">Account Details</div>
//                   <div className="text-center">Confirmation</div>
//                 </div>
//               </div>
//             )}

//             {step === 1 && (
//               <div className="bg-[#3B211F] rounded-lg p-4 md:p-6 shadow-xl">
//                 <h2 className="text-xl font-semibold text-orange-200 mb-6">
//                   Account Information
//                 </h2>

//                 <div className="mb-4">
//                   <div className="flex items-center mb-4">
//                     <CheckCircle className="text-green-500 mr-2" size={18} />
//                     <label className="text-orange-200 font-medium">
//                       1. Account Details
//                     </label>
//                   </div>
//                   {currentUser && (
//                     <div className="ml-6 mt-2 space-y-4 text-orange-300 text-sm">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div className="flex flex-col">
//                           <p className="font-medium text-orange-200 mb-1">
//                             Full Name
//                           </p>
//                           <div className="bg-[#2B1615] p-3 rounded border border-orange-900 text-orange-300">
//                             {currentUser.full_name}
//                           </div>
//                         </div>
//                         <div className="flex flex-col">
//                           <p className="font-medium text-orange-200 mb-1">
//                             Email
//                           </p>
//                           <div className="bg-[#2B1615] p-3 rounded border border-orange-900 text-orange-300">
//                             {currentUser.email}
//                           </div>
//                         </div>
//                       </div>
//                       {(currentUser.phone_number || currentUser.gender) && (
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                           {currentUser.phone_number && (
//                             <div className="flex flex-col">
//                               <p className="font-medium text-orange-200 mb-1">
//                                 Phone
//                               </p>
//                               <div className="bg-[#2B1615] p-3 rounded border border-orange-900 text-orange-300">
//                                 {currentUser.phone_number}
//                               </div>
//                             </div>
//                           )}
//                           {currentUser.gender && (
//                             <div className="flex flex-col">
//                               <p className="font-medium text-orange-200 mb-1">
//                                 Gender
//                               </p>
//                               <div className="bg-[#2B1615] p-3 rounded border border-orange-900 text-orange-300">
//                                 {currentUser.gender}
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       )}
//                       {currentUser.location && (
//                         <div className="flex flex-col">
//                           <p className="font-medium text-orange-200 mb-1">
//                             Location
//                           </p>
//                           <div className="bg-[#2B1615] p-3 rounded border border-orange-900 text-orange-300">
//                             {currentUser.location}
//                           </div>
//                         </div>
//                       )}
//                       {currentUser.dob && (
//                         <div className="flex flex-col">
//                           <p className="font-medium text-orange-200 mb-1">
//                             Date of Birth
//                           </p>
//                           <div className="bg-[#2B1615] p-3 rounded border border-orange-900 text-orange-300">
//                             {currentUser.dob}
//                           </div>
//                         </div>
//                       )}
//                       {currentUser.exam_target && (
//                         <div className="flex flex-col">
//                           <p className="font-medium text-orange-200 mb-1">
//                             Exam Target
//                           </p>
//                           <div className="bg-[#2B1615] p-3 rounded border border-orange-900 text-sky-400">
//                             {currentUser.exam_target}
//                           </div>
//                         </div>
//                       )}
//                       {currentUser.program && (
//                         <div className="flex flex-col">
//                           <p className="font-medium text-orange-200 mb-1">
//                             Program
//                           </p>
//                           <div className="bg-[#2B1615] p-3 rounded border border-orange-900 text-orange-300">
//                             {currentUser.program}
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   )}
//                 </div>

//                 <div className="text-xs text-orange-400 mt-6">
//                   If any of these details are incorrect, please update your
//                   profile before proceeding.
//                 </div>
//               </div>
//             )}

//             {step === 2 && showSuccessAlert && (
//               <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//                 <div className="bg-[#2B1615] rounded-lg p-6 max-w-md w-full shadow-xl">
//                   <div className="flex items-center justify-center mb-4">
//                     <CheckCircle size={48} className="text-orange-500" />
//                   </div>
//                   <h3 className="text-xl font-bold text-orange-200 text-center mb-4">
//                     Payment Successful!
//                   </h3>
//                   <p className="text-orange-100 text-center mb-6">
//                     Thank you for your purchase. Your course access will be
//                     activated within 15 minutes.
//                   </p>
//                   <button
//                     onClick={handleSuccess}
//                     className="w-full bg-orange-900 hover:bg-orange-800 text-white py-3 rounded-md"
//                   >
//                     Go to My Courses
//                   </button>
//                 </div>
//               </div>
//             )}

//             {step === 2 && !showSuccessAlert && (
//               <div className="bg-[#3B211F] rounded-lg p-4 md:p-8 shadow-xl text-center">
//                 <div className="bg-green-800 w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-6">
//                   <CheckCircle size={48} className="text-green-300" />
//                 </div>

//                 <h3 className="text-2xl font-bold text-green-300 mb-4">
//                   Payment Successful!
//                 </h3>
//                 <p className="text-orange-200 mb-6">
//                   Thank you for enrolling in{" "}
//                   {course.items && course.items > 1
//                     ? "your courses"
//                     : "your course"}
//                   . You will receive a confirmation email shortly.
//                 </p>

//                 <div className="bg-[#341A18] p-4 md:p-6 rounded-md border border-orange-900 text-left max-w-md mx-auto">
//                   <h4 className="font-medium text-orange-200 mb-3">
//                     Order Details
//                   </h4>
//                   <div className="flex justify-between text-orange-300 mb-2">
//                     <span>
//                       Course{course.items && course.items > 1 ? "s" : ""}:
//                     </span>
//                     <span className="font-medium text-orange-100">
//                       {course.title}
//                     </span>
//                   </div>
//                   <div className="flex justify-between text-orange-300 mb-2">
//                     <span>Order ID:</span>
//                     <span className="font-medium text-orange-100">
//                       ORD{Math.floor(Math.random() * 1000000)}
//                     </span>
//                   </div>
//                   <div className="flex justify-between text-orange-300 mb-2">
//                     <span>Date:</span>
//                     <span className="font-medium text-orange-100">
//                       {new Date().toLocaleDateString()}
//                     </span>
//                   </div>
//                   <div className="flex justify-between text-orange-300 mb-2">
//                     <span>Amount Paid:</span>
//                     <span className="font-medium text-orange-100">
//                       {totalAmount}
//                     </span>
//                   </div>
//                 </div>

//                 <p className="mt-6 text-orange-300">
//                   Your course access will be activated within the next 15
//                   minutes. Happy learning!
//                 </p>
//               </div>
//             )}

//             {step < 2 && (
//               <div className="mt-8 flex justify-between">
//                 <button
//                   onClick={() => router.back()}
//                   className="px-4 md:px-6 py-3 border border-orange-600 text-orange-400 hover:bg-[#341A18] rounded-md"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handlePayment}
//                   disabled={isProcessing}
//                   className={`px-6 md:px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-md flex items-center ${
//                     isProcessing ? "opacity-75 cursor-not-allowed" : ""
//                   }`}
//                 >
//                   {isProcessing ? (
//                     <>Processing...</>
//                   ) : (
//                     <>
//                       Continue <Lock size={16} className="ml-2" />
//                     </>
//                   )}
//                 </button>
//               </div>
//             )}

//             {step === 2 && !showSuccessAlert && (
//               <div className="mt-8 flex justify-center">
//                 <button
//                   onClick={handleSuccess}
//                   className="px-6 md:px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-md"
//                 >
//                   Go to My Courses
//                 </button>
//               </div>
//             )}

//             {step < 2 && (
//               <div className="mt-6 py-3 flex justify-center items-center text-xs text-orange-400">
//                 <Lock size={14} className="mr-2" /> Secure payment processed by
//                 Razorpay
//               </div>
//             )}
//           </div>

//           <div className="lg:col-span-1">
//             <div className="bg-[#3B211F] rounded-lg p-4 md:p-6 shadow-xl">
//               <h2 className="text-xl font-semibold text-orange-200 mb-6">
//                 Order summary
//               </h2>

//               <div className="space-y-4">
//                 <div className="flex justify-between items-center">
//                   <span className="text-orange-300">Original Price:</span>
//                   <span className="text-orange-100">{course.price}</span>
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <span className="text-orange-300">GST (18%):</span>
//                   <span className="text-orange-100">{gstAmount}</span>
//                 </div>

//                 <div className="border-t border-orange-900 pt-4 flex justify-between items-center font-medium">
//                   <span className="text-orange-200">
//                     Total ({course.items} course
//                     {course.items && course.items > 1 ? "s" : ""}):
//                   </span>
//                   <span className="text-orange-100 text-xl">{totalAmount}</span>
//                 </div>

//                 <div className="text-xs text-orange-400 mt-2">
//                   By completing your purchase, you agree to these{" "}
//                   <a href="#" className="text-orange-300 hover:underline">
//                     Terms of Use
//                   </a>
//                   .
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6 bg-[#341A18] border border-orange-900 rounded-lg p-4">
//               <h3 className="text-lg font-medium text-orange-200 mb-3">
//                 Course Information
//               </h3>
//               <h4 className="font-medium text-orange-100 mb-2">
//                 {course.title}
//               </h4>
//               <p className="text-orange-300 text-sm mb-4">
//                 Duration: {course.duration}
//               </p>

//               <div className="flex items-center text-xs text-orange-400">
//                 <AlertCircle size={14} className="mr-1" />
//                 <span>
//                   This course access will be available for {course.duration}{" "}
//                   from the date of purchase.
//                 </span>
//               </div>
//             </div>

//             <div className="mt-6 bg-[#341A18] border border-orange-900 rounded-lg p-4">
//               <h3 className="text-lg font-medium text-orange-200 mb-3">
//                 30-Day Money-Back Guarantee
//               </h3>
//               <p className="text-orange-300 text-sm">
//                 Not satisfied? Get a full refund within 30 days. Simple and
//                 straightforward!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       {showSuccessAlert && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-1 rounded-lg w-full max-w-md mx-4">
//             <div className="bg-white rounded-lg p-6 flex flex-col items-center">
//               <div className="bg-green-100 p-3 rounded-full mb-4">
//                 <CheckCircle className="text-green-500 w-10 h-10" />
//               </div>
//               <h2 className="text-gray-800 text-xl font-bold mb-2">
//                 Your payment has been received
//               </h2>
//               <p className="text-gray-600 text-center mb-4">
//                 Thank you for your payment. Your plan has been upgraded to
//                 premium! Please check your email for payment confirmation &
//                 invoice.
//               </p>
//               <button
//                 onClick={closeSuccessAlert}
//                 className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full w-full max-w-xs"
//               >
//                 Go to your dashboard
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Error Alert Modal */}
//       {showErrorAlert && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-gradient-to-r from-red-600 to-orange-500 p-1 rounded-lg w-full max-w-md mx-4">
//             <div className="bg-white rounded-lg p-6 flex flex-col items-center">
//               <div className="bg-red-100 p-3 rounded-full mb-4">
//                 <AlertCircle className="text-red-500 w-10 h-10" />
//               </div>
//               <h2 className="text-gray-800 text-xl font-bold mb-2">
//                 Payment Failed
//               </h2>
//               <p className="text-gray-600 text-center mb-4">
//                 {alertMessage ||
//                   "Your payment could not be processed. Please try again or contact support."}
//               </p>
//               <button
//                 onClick={closeErrorAlert}
//                 className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full w-full max-w-xs"
//               >
//                 Try Again
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle, Lock, X, AlertCircle } from "lucide-react";
import axiosInstance from "@/app/components/apiconfig/axios";
import { API_URLS } from "@/app/components/apiconfig/api_urls";
import Script from "next/script";

interface CourseType {
  title: string;
  price: string;
  originalPrice: string;
  discount: string;
  duration: string;
  items?: number;
  uuid?: string;
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => {
      open: () => void;
    };
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayResponse) => Promise<void>;
  prefill: {
    name: string;
    email: string;
  };
  theme: {
    color: string;
  };
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface UserType {
  id?: number;
  uuid?: string;
  full_name: string;
  email: string;
  password: string;
  phone_number?: string;
  dob?: string;
  gender: "Male" | "Female";
  location?: string;
  exam_target?: string;
  program?: string;
  firebase_user_id: string;
}

export default function PaymentPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState<number>(1);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [course, setCourse] = useState<CourseType>({
    title: "Loading...",
    price: "₹0",
    originalPrice: "₹0",
    discount: "₹0",
    duration: "0 months",
    items: 1,
    uuid: "",
  });
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);
  const [gstAmount, setGstAmount] = useState<string>("₹0");
  const [totalAmount, setTotalAmount] = useState<string>("₹0");
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [showErrorAlert, setShowErrorAlert] = useState<boolean>(false);


  const user_uuid = searchParams.get("user_uuid");
  const [users, setUsers] = useState<UserType[]>([]);

  console.log(users);
  console.log(setIsProcessing);

  useEffect(() => {
    const title = searchParams.get("title") || "Unknown Course";
    const price = searchParams.get("price") || "₹0";
    const originalPrice = searchParams.get("originalPrice") || "₹0";
    const discount = searchParams.get("discount") || "₹0";
    const duration = searchParams.get("duration") || "0 months";
    const items = parseInt(searchParams.get("items") || "1");
    const uuid = searchParams.get("uuid") || "";

    setCourse({
      title: decodeURIComponent(title),
      price,
      originalPrice,
      discount,
      duration,
      items,
      uuid,
    });

    
    const priceValue = parseFloat(price.replace(/[^0-9.]/g, ""));
    const gst = priceValue * 0.18;
    const total = priceValue + gst;

    setGstAmount(`₹${gst.toFixed(2)}`);
    setTotalAmount(`₹${total.toFixed(2)}`);
  }, [searchParams]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get(
          API_URLS.REGISTRATION.GET_REGISTRATION
        );
        setUsers(response.data);

        if (user_uuid) {
          const user = response.data.find(
            (u: UserType) => u.uuid === user_uuid
          );
          if (user) {
            setCurrentUser(user);
          }
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [user_uuid]);

  // Function to store payment data in localStorage
  const storePaymentData = (status: string, paymentDetails?: RazorpayResponse) => {
    const paymentData = {
      course_uuid: course.uuid,
      user_uuid: currentUser?.uuid,
      course_details: {
        title: course.title,
        price: course.price,
        duration: course.duration,
        items: course.items,
      },
      payment_status: status,
      payment_id: paymentDetails?.razorpay_payment_id || null,
      order_id: paymentDetails?.razorpay_order_id || null,
      timestamp: new Date().toISOString(),
    };

    // Retrieve existing payments from localStorage or initialize empty array
    const existingPayments = JSON.parse(localStorage.getItem("course_payments") || "[]");
    // Add new payment data
    existingPayments.push(paymentData);
    // Save back to localStorage
    localStorage.setItem("course_payments", JSON.stringify(existingPayments));
  };

  const handlePayment = async () => {
    if (!currentUser) {
      alert("User details not found");
      storePaymentData("failed"); // Store failed attempt due to missing user
      return;
    }

    console.log("currentUser", currentUser);

    if (
      typeof window === "undefined" ||
      !(window as { Razorpay?: unknown }).Razorpay
    ) {
      alert("Razorpay SDK not loaded. Please refresh and try again.");
      storePaymentData("failed"); // Store failed attempt due to SDK not loaded
      return;
    }

    try {
      const res = await axiosInstance.post(
        API_URLS.PAYMENT.POST_PAYMENT_COURSE,
        {
          user_uuid: currentUser.uuid,
          course_uuid: course.uuid,
          term_condition: true,
        }
      );

      const order = res.data;

      console.log("order", order);

      storePaymentData("pending"); // Store pending status before initiating payment

      const options: RazorpayOptions = {
        key:
          order.razorpay_key || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
        amount: order.payment.amount * 100,
        currency: "INR",
        name: "Prepacademy",
        description: "Premium Personality Report",
        order_id: order.order_id,
        handler: async function (response: RazorpayResponse) {
          try {
            await axiosInstance.post(
              API_URLS.VERIFY_PAYMENT.POST_VERIFY_PAYMENT_COURSE,
              {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
              }
            );
            storePaymentData("success", response); // Store success status
            setShowSuccessAlert(true);
          } catch (error) {
            console.error("Payment verification error:", error);
            storePaymentData("failed", response); // Store failed status on verification error
            setAlertMessage("Payment verification failed. Please try again.");
            setShowErrorAlert(true);
          }
        },
        prefill: {
          name: currentUser.full_name,
          email: currentUser.email,
        },
        theme: {
          color: "#3399cc",
        },
      };

      console.log("options", options);
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      storePaymentData("failed"); // Store failed status on payment initiation error
      setAlertMessage("Payment verification failed. Please try again.");
      setShowErrorAlert(true);
    }
  };

  useEffect(() => {
    const verifyPayment = async () => {
      const paymentId = searchParams.get("razorpay_payment_id");
      const orderId = searchParams.get("razorpay_order_id");
      const signature = searchParams.get("razorpay_signature");

      if (paymentId && orderId && signature) {
        try {
          const response = await axiosInstance.post(
            API_URLS.VERIFY_PAYMENT.POST_VERIFY_PAYMENT_COURSE,
            {
              razorpay_payment_id: paymentId,
              razorpay_order_id: orderId,
              razorpay_signature: signature,
            }
          );

          if (response.data.status === "success") {
            storePaymentData("success", {
              razorpay_payment_id: paymentId,
              razorpay_order_id: orderId,
              razorpay_signature: signature,
            }); // Store success status
            setStep(2);
            setShowSuccessAlert(true);
          } else {
            storePaymentData("failed", {
              razorpay_payment_id: paymentId,
              razorpay_order_id: orderId,
              razorpay_signature: signature,
            }); // Store failed status
            setAlertMessage(
              "Payment verification failed. Please contact support."
            );
            setShowErrorAlert(true);
          }
        } catch (error) {
          console.error("Payment verification error:", error);
          storePaymentData("failed", {
            razorpay_payment_id: paymentId,
            razorpay_order_id: orderId,
            razorpay_signature: signature,
          }); // Store failed status on error
          setAlertMessage(
            "Payment verification failed. Please contact support."
          );
          setShowErrorAlert(true);
        }
      }
    };

    verifyPayment();
  }, [searchParams]);

  const handleSuccess = (): void => {
    router.push("/allcourses");
  };

  const closeSuccessAlert = (): void => {
    setShowSuccessAlert(false);
    router.push("/allcourses");
  };

  const closeErrorAlert = (): void => {
    setShowErrorAlert(false);
  };

  return (
    <div className="min-h-screen bg-[#2B1615] text-orange-50 flex flex-col">
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />
      <header className="border-b border-orange-900 bg-[#1F100F] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-orange-100">
            Secure Checkout
          </h1>
          <button
            onClick={() => router.back()}
            className="text-orange-400 hover:text-orange-300"
          >
            <X size={24} />
          </button>
        </div>
      </header>

      <div className="flex-grow container mx-auto py-6 px-4 md:px-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {step < 2 && (
              <div className="mb-6">
                <div className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      step >= 1
                        ? "bg-orange-500 text-white"
                        : "bg-orange-900 text-orange-400"
                    }`}
                  >
                    1
                  </div>
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      step >= 2 ? "bg-orange-500" : "bg-orange-900"
                    }`}
                  ></div>
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      step >= 2
                        ? "bg-orange-500 text-white"
                        : "bg-orange-900 text-orange-400"
                    }`}
                  >
                    2
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-orange-400">
                  <div className="text-center">Account Details</div>
                  <div className="text-center">Confirmation</div>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="bg-[#3B211F] rounded-lg p-4 md:p-6 shadow-xl">
                <h2 className="text-xl font-semibold text-orange-200 mb-6">
                  Account Information
                </h2>

                <div className="mb-4">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="text-green-500 mr-2" size={18} />
                    <label className="text-orange-200 font-medium">
                      1. Account Details
                    </label>
                  </div>
                  {currentUser && (
                    <div className="ml-6 mt-2 space-y-4 because text-orange-300 text-sm">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                          <p className="font-medium text-orange-200 mb-1">
                            Full Name
                          </p>
                          <div className="bg-[#2B1615] p-3 rounded border border-orange-900 text-orange-300">
                            {currentUser.full_name}
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <p className="font-medium text-orange-200 mb-1">
                            Email
                          </p>
                          <div className="bg-[#2B1615] p-3 rounded border border-orange-900 text-orange-300">
                            {currentUser.email}
                          </div>
                        </div>
                      </div>
                      {(currentUser.phone_number || currentUser.gender) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {currentUser.phone_number && (
                            <div className="flex flex-col">
                              <p className="font-medium text-orange-200 mb-1">
                                Phone
                              </p>
                              <div className="bg-[#2B1615] p-3 rounded border border-orange-900 text-orange-300">
                                {currentUser.phone_number}
                              </div>
                            </div>
                          )}
                          {currentUser.gender && (
                            <div className="flex flex-col">
                              <p className="font-medium text-orange-200 mb-1">
                                Gender
                              </p>
                              <div className="bg-[#2B1615] p-3 rounded border border-orange-900 text-orange-300">
                                {currentUser.gender}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                      {currentUser.location && (
                        <div className="flex flex-col">
                          <p className="font-medium text-orange-200 mb-1">
                            Location
                          </p>
                          <div className="bg-[#2B1615] p-3 rounded border border-orange-900 text-orange-300">
                            {currentUser.location}
                          </div>
                        </div>
                      )}
                      {currentUser.dob && (
                        <div className="flex flex-col">
                          <p className="font-medium text-orange-200 mb-1">
                            Date of Birth
                          </p>
                          <div className="bg-[#2B1615] p-3 rounded border border-orange-900 text-orange-300">
                            {currentUser.dob}
                          </div>
                        </div>
                      )}
                      {currentUser.exam_target && (
                        <div className="flex flex-col">
                          <p className="font-medium text-orange-200 mb-1">
                            Exam Target
                          </p>
                          <div className="bg-[#2B1615] p-3 rounded border border-orange-900 text-sky-400">
                            {currentUser.exam_target}
                          </div>
                        </div>
                      )}
                      {currentUser.program && (
                        <div className="flex flex-col">
                          <p className="font-medium text-orange-200 mb-1">
                            Program
                          </p>
                          <div className="bg-[#2B1615] p-3 rounded border border-orange-900 text-orange-300">
                            {currentUser.program}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="text-xs text-orange-400 mt-6">
                  If any of these details are incorrect, please update your
                  profile before proceeding.
                </div>
              </div>
            )}

            {step === 2 && showSuccessAlert && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-[#2B1615] rounded-lg p-6 max-w-md w-full shadow-xl">
                  <div className="flex items-center justify-center mb-4">
                    <CheckCircle size={48} className="text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-orange-200 text-center mb-4">
                    Payment Successful!
                  </h3>
                  <p className="text-orange-100 text-center mb-6">
                    Thank you for your purchase. Your course access will be
                    activated within 15 minutes.
                  </p>
                  <button
                    onClick={handleSuccess}
                    className="w-full bg-orange-900 hover:bg-orange-800 text-white py-3 rounded-md"
                  >
                    Go to My Courses
                  </button>
                </div>
              </div>
            )}

            {step === 2 && !showSuccessAlert && (
              <div className="bg-[#3B211F] rounded-lg p-4 md:p-8 shadow-xl text-center">
                <div className="bg-green-800 w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-6">
                  <CheckCircle size={48} className="text-green-300" />
                </div>

                <h3 className="text-2xl font-bold text-green-300 mb-4">
                  Payment Successful!
                </h3>
                <p className="text-orange-200 mb-6">
                  Thank you for enrolling in{" "}
                  {course.items && course.items > 1
                    ? "your courses"
                    : "your course"}
                  . You will receive a confirmation email shortly.
                </p>

                <div className="bg-[#341A18] p-4 md:p-6 rounded-md border border-orange-900 text-left max-w-md mx-auto">
                  <h4 className="font-medium text-orange-200 mb-3">
                    Order Details
                  </h4>
                  <div className="flex justify-between text-orange-300 mb-2">
                    <span>
                      Course{course.items && course.items > 1 ? "s" : ""}:
                    </span>
                    <span className="font-medium text-orange-100">
                      {course.title}
                    </span>
                  </div>
                  <div className="flex justify-between text-orange-300 mb-2">
                    <span>Order ID:</span>
                    <span className="font-medium text-orange-100">
                      ORD{Math.floor(Math.random() * 1000000)}
                    </span>
                  </div>
                  <div className="flex justify-between text-orange-300 mb-2">
                    <span>Date:</span>
                    <span className="font-medium text-orange-100">
                      {new Date().toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-orange-300 mb-2">
                    <span>Amount Paid:</span>
                    <span className="font-medium text-orange-100">
                      {totalAmount}
                    </span>
                  </div>
                </div>

                <p className="mt-6 text-orange-300">
                  Your course access will be activated within the next 15
                  minutes. Happy learning!
                </p>
              </div>
            )}

            {step < 2 && (
              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => router.back()}
                  className="px-4 md:px-6 py-3 border border-orange-600 text-orange-400 hover:bg-[#341A18] rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className={`px-6 md:px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-md flex items-center ${
                    isProcessing ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isProcessing ? (
                    <>Processing...</>
                  ) : (
                    <>
                      Continue <Lock size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            )}

            {step === 2 && !showSuccessAlert && (
              <div className="mt-８ flex justify-center">
                <button
                  onClick={handleSuccess}
                  className="px-6 md:px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-md"
                >
                  Go to My Courses
                </button>
              </div>
            )}

            {step < 2 && (
              <div className="mt-6 py-3 flex justify-center items-center text-xs text-orange-400">
                <Lock size={14} className="mr-2" /> Secure payment processed by
                Razorpay
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-[#3B211F] rounded-lg p-4 md:p-6 shadow-xl">
              <h2 className="text-xl font-semibold text-orange-200 mb-6">
                Order summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-orange-300">Original Price:</span>
                  <span className="text-orange-100">{course.price}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-orange-300">GST (18%):</span>
                  <span className="text-orange-100">{gstAmount}</span>
                </div>

                <div className="border-t border-orange-900 pt-4 flex justify-between items-center font-medium">
                  <span className="text-orange-200">
                    Total ({course.items} course
                    {course.items && course.items > 1 ? "s" : ""}):
                  </span>
                  <span className="text-orange-100 text-xl">{totalAmount}</span>
                </div>

                <div className="text-xs text-orange-400 mt-2">
                  By completing your purchase, you agree to these{" "}
                  <a href="#" className="text-orange-300 hover:underline">
                    Terms of Use
                  </a>
                  .
                </div>
              </div>
            </div>

            <div className="mt-6 bg-[#341A18] border border-orange-900 rounded-lg p-4">
              <h3 className="text-lg font-medium text-orange-200 mb-3">
                Course Information
              </h3>
              <h4 className="font-medium text-orange-100 mb-2">
                {course.title}
              </h4>
              <p className="text-orange-300 text-sm mb-4">
                Duration: {course.duration}
              </p>

              <div className="flex items-center text-xs text-orange-400">
                <AlertCircle size={14} className="mr-1" />
                <span>
                  This course access will be available for {course.duration}{" "}
                  from the date of purchase.
                </span>
              </div>
            </div>

            <div className="mt-6 bg-[#341A18] border border-orange-900 rounded-lg p-4">
              <h3 className="text-lg font-medium text-orange-200 mb-3">
                30-Day Money-Back Guarantee
              </h3>
              <p className="text-orange-300 text-sm">
                Not satisfied? Get a full refund within 30 days. Simple and
                straightforward!
              </p>
            </div>
          </div>
        </div>
      </div>
      {showSuccessAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-1 rounded-lg w-full max-w-md mx-4">
            <div className="bg-white rounded-lg p-6 flex flex-col items-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <CheckCircle className="text-green-500 w-10 h-10" />
              </div>
              <h2 className="text-gray-800 text-xl font-bold mb-2">
                Your payment has been received
              </h2>
              <p className="text-gray-600 text-center mb-4">
                Thank you for your payment. Your plan has been upgraded to
                premium! Please check your email for payment confirmation &
                invoice.
              </p>
              <button
                onClick={closeSuccessAlert}
                className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full w-full max-w-xs"
              >
                Go to your dashboard
              </button>
            </div>
          </div>
        </div>
      )}

      {showErrorAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-r from-red-600 to-orange-500 p-1 rounded-lg w-full max-w-md mx-4">
            <div className="bg-white rounded-lg p-6 flex flex-col items-center">
              <div className="bg-red-100 p-3 rounded-full mb-4">
                <AlertCircle className="text-red-500 w-10 h-10" />
              </div>
              <h2 className="text-gray-800 text-xl font-bold mb-2">
                Payment Failed
              </h2>
              <p className="text-gray-600 text-center mb-4">
                {alertMessage ||
                  "Your payment could not be processed. Please try again or contact support."}
              </p>
              <button
                onClick={closeErrorAlert}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full w-full max-w-xs"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}