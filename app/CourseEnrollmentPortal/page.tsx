// "use client";

// import React, { useEffect, useState } from "react";
// import { ChevronDown, Heart, ShoppingCart, X } from "lucide-react";
// import { toast } from "react-toastify";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import axiosInstance from "../components/apiconfig/axios";
// import { API_URLS } from "../components/apiconfig/api_urls";
// import LoginModal from "../../app/components/login/Login"; // Import your login modal component

// type WishlistItem = {
//   id: string;
//   title: string;
//   price: string;
//   duration: string;
//   category: string;
//   description: string;
//   uuid?: string; // Added uuid field
// };

// type CourseData = {
//   id?: number;
//   title?: string;
//   description: string;
//   amount: string;
//   duration: string;
//   course_features: string[];
//   course_description: string;
//   image?: string;
//   course?: number;
//   section?: number;
//   uuid?: string;
// };

// type SalesCategory = {
//   id?: number;
//   category?: string;
// };

// type SalesSubjects = {
//   id?: number;
//   subject_name?: string;
//   course?: number;
// };

// type SalesSection = {
//   id?: number;
//   subject?: number;
//   subject_name?: string;
//   section_name?: string;
// };

// const CourseEnrollmentPortal: React.FC = () => {
//   const [activeMainTab, setActiveMainTab] = useState<string>("");
//   const [activeSubTab, setActiveSubTab] = useState<string>("");
//   const [activeCourse, setActiveCourse] = useState<string>("");
//   const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
//   const [isWishlistModalOpen, setIsWishlistModalOpen] =
//     useState<boolean>(false);
//   const [cartItems, setCartItems] = useState<WishlistItem[]>([]);
//   const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false);
//   const [salesCategories, setSalesCategories] = useState<SalesCategory[]>([]);
//   const [salesSubjects, setSalesSubjects] = useState<SalesSubjects[]>([]);
//   const [salesCourses, setSalesCourses] = useState<CourseData[]>([]);
//   const [salesSection, setSalesSection] = useState<SalesSection[]>([]);
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [showAuthAlert, setShowAuthAlert] = useState(false);

//   const router = useRouter();

//   useEffect(() => {
//     const storedUser = localStorage.getItem("currentUser");

//     if (storedUser) {
//       try {
//         const parsedUser = JSON.parse(storedUser);
//         const user_uuid = parsedUser.uuid;
//         if (user_uuid) {
//           localStorage.setItem("user", JSON.stringify({ uuid: user_uuid }));
//         }
//       } catch (error) {
//         console.error("Failed to parse currentUser from localStorage", error);
//       }
//     }
//   }, []);

//   const fetchSaleCategory = async () => {
//     try {
//       const response = await axiosInstance.get(
//         API_URLS.SALEPAGE_COURSE_CATEGORY.GET_SALEPAGE_COURSE_CATEGORY
//       );
//       setSalesCategories(response.data);
//       if (response.data.length > 0) {
//         setActiveMainTab(response.data[0].id?.toString() || "");
//       }
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     }
//   };

//   const fetchSaleSubjects = async () => {
//     try {
//       const response = await axiosInstance.get(
//         API_URLS.SALEPAGE_COURSE_SUBJECT.GET_SALEPAGE_COURSE_SUBJECTS
//       );
//       setSalesSubjects(response.data);
//     } catch (error) {
//       console.error("Error fetching subjects:", error);
//     }
//   };

//   const fetchSaleSection = async () => {
//     try {
//       const response = await axiosInstance.get(
//         API_URLS.SALEPAGE_COURSE_SECTION.GET_SALEPAGE_COURSE_SECTION
//       );
//       setSalesSection(response.data);
//     } catch (error) {
//       console.error("Error fetching sections:", error);
//     }
//   };

//   const fetchSaleCourse = async () => {
//     try {
//       const response = await axiosInstance.get(
//         API_URLS.SALEPAGE_COURSE.GET_SALEPAGE_COURSE
//       );
//       setSalesCourses(response.data);
//     } catch (error) {
//       console.error("Error fetching courses:", error);
//     }
//   };

//   useEffect(() => {
//     fetchSaleCategory();
//     fetchSaleSubjects();
//     fetchSaleCourse();
//     fetchSaleSection();
//   }, []);

//   const handleSubTabClick = (tabId: string) => {
//     setActiveSubTab(tabId);
//     setActiveCourse("");
//   };

//   const handleCourseClick = (
//     courseIdentifier: string,
//     isSection: boolean = false
//   ) => {
//     if (isSection) {
//       const course = salesCourses.find(
//         (c) => c.section?.toString() === courseIdentifier
//       );
//       if (course) {
//         setActiveCourse(course.title || "");
//       }
//     } else {
//       setActiveCourse(courseIdentifier);
//     }
//   };

//   const parsePriceToNumber = (priceString: string | undefined): number => {
//     if (!priceString) return 0;
//     return parseInt(priceString.replace(/[^\d]/g, "") || "0");
//   };

//   const getCurrentCourseData = (): CourseData => {
//     if (activeCourse) {
//       const courseData = salesCourses.find(
//         (course) => course.title === activeCourse
//       );

//       if (courseData) {
//         return {
//           ...courseData,
//           title: courseData.title,
//           description: courseData.description,
//           amount: courseData.amount,
//           duration: courseData.duration,
//           course_features: Array.isArray(courseData.course_features)
//             ? courseData.course_features
//             : [],
//           course_description: courseData.course_description,
//           image: courseData.image,
//           uuid: courseData.uuid,
//         };
//       }
//     }

//     return {
//       description: "Please select a course to view details",
//       amount: "0",
//       duration: "0 months",
//       course_features: ["Feature 1", "Feature 2", "Feature 3"],
//       course_description: "No course selected",
//       // Note: I removed 'title' and 'image' from here because they're optional in your CourseData type
//       // If they should be required in the default case, you should add them back
//       // and make them required in the CourseData type
//     };
//   };

//   const handleCartCheckout = () => {
//     if (cartItems.length === 0) return;

//     // Retrieve user UUID from localStorage
//     const userData = localStorage.getItem("user");
//     let user_uuid = "";

//     if (userData) {
//       try {
//         const parsedData = JSON.parse(userData);
//         user_uuid = parsedData.uuid || "";

//         if (!user_uuid) {
//           setShowAuthAlert(true);
//           return;
//         }
//       } catch (error) {
//         console.error("Error parsing user data from localStorage:", error);
//         setShowAuthAlert(true);
//         return;
//       }
//     } else {
//       setShowAuthAlert(true);
//       return;
//     }

//     // For cart with multiple items, we'll use first item's uuid or generate one
//     const courseUuid = cartItems[0].uuid || crypto.randomUUID();
//     const totalPrice = cartItems.reduce((total, item) => {
//       return total + parsePriceToNumber(item.price);
//     }, 0);
//     const originalPrice = totalPrice * 1.2;
//     const courseTitles = cartItems
//       .map((item) => encodeURIComponent(item.title))
//       .join(",");

//     router.push(
//       `/payment/${courseUuid}?title=${courseTitles}&price=₹${totalPrice}&items=${
//         cartItems.length
//       }&duration=${encodeURIComponent(
//         cartItems[0].duration
//       )}&originalPrice=₹${originalPrice}&discount=₹${(
//         originalPrice - totalPrice
//       ).toFixed(2)}&user_uuid=${encodeURIComponent(
//         user_uuid
//       )}&uuid=${encodeURIComponent(courseUuid)}`
//     );

//     closeCartModal();
//   };

//   const currentCourseData = getCurrentCourseData();

//   const addToWishlist = () => {
//     const currentCategory =
//       salesCategories.find((cat) => cat.id?.toString() === activeMainTab)
//         ?.category || "";
//     const courseToAdd: WishlistItem = {
//       id: `${activeMainTab}-${activeSubTab}-${activeCourse}`,
//       title: `${activeCourse} Course`,
//       price: currentCourseData.amount,
//       duration: currentCourseData.duration,
//       category: currentCategory,
//       description: currentCourseData.description,
//     };

//     const exists = wishlistItems.some((item) => item.id === courseToAdd.id);
//     if (!exists) {
//       setWishlistItems([...wishlistItems, courseToAdd]);
//       toast.success("Course added to wishlist!");
//     } else {
//       toast.warning("This course is already in your wishlist!");
//     }
//   };

//   const addToCart = () => {
//     const currentCategory =
//       salesCategories.find((cat) => cat.id?.toString() === activeMainTab)
//         ?.category || "";
//     const courseToAdd: WishlistItem = {
//       id: `${activeMainTab}-${activeSubTab}-${activeCourse}`,
//       title: `${activeCourse} Course`,
//       price: currentCourseData.amount,
//       duration: currentCourseData.duration,
//       category: currentCategory,
//       description: currentCourseData.description,
//       uuid: currentCourseData.uuid,
//     };

//     const exists = cartItems.some((item) => item.id === courseToAdd.id);
//     if (!exists) {
//       setCartItems([...cartItems, courseToAdd]);
//       toast.success("Course added to cart!");
//     } else {
//       toast.warning("This course is already in your cart!");
//     }
//   };

//   const handleEnrollNow = () => {
//     if (!currentCourseData.uuid) {
//       toast.error("Course ID is missing");
//       return;
//     }

//     // Retrieve user UUID from localStorage
//     const userData = localStorage.getItem("user");
//     let user_uuid = "";
//     if (userData) {
//       try {
//         const parsedData = JSON.parse(userData);
//         user_uuid = parsedData.uuid || "";

//         if (!user_uuid) {
//           setShowAuthAlert(true);
//           return;
//         }
//       } catch (error) {
//         console.error("Error parsing user data from localStorage:", error);
//         // toast.error("Failed to retrieve user information");
//         setShowAuthAlert(true);

//         return;
//       }
//     } else {
//       console.log("User information not found");
//       setShowAuthAlert(true);

//       return;
//     }

//     const originalPrice = parsePriceToNumber(currentCourseData.amount) * 1.2;
//     router.push(
//       `/payment/${currentCourseData.uuid}?title=${encodeURIComponent(
//         currentCourseData.title || activeCourse
//       )}&price=${encodeURIComponent(
//         currentCourseData.amount
//       )}&duration=${encodeURIComponent(
//         currentCourseData.duration
//       )}&originalPrice=₹${originalPrice}&discount=₹${(
//         originalPrice - parsePriceToNumber(currentCourseData.amount)
//       ).toFixed(2)}&user_uuid=${encodeURIComponent(
//         user_uuid
//       )}&uuid=${encodeURIComponent(currentCourseData.uuid)}`
//     );
//   };

//   const removeFromWishlist = (id: string) => {
//     setWishlistItems(wishlistItems.filter((item) => item.id !== id));
//   };

//   const removeFromCart = (id: string) => {
//     setCartItems(cartItems.filter((item) => item.id !== id));
//   };

//   const openWishlistModal = () => {
//     setIsWishlistModalOpen(true);
//   };

//   const closeWishlistModal = () => {
//     setIsWishlistModalOpen(false);
//   };

//   const openCartModal = () => {
//     setIsCartModalOpen(true);
//   };

//   const closeCartModal = () => {
//     setIsCartModalOpen(false);
//   };

//   const handleWishlistEnroll = (item: WishlistItem) => {
//     // Retrieve user UUID from localStorage
//     const userData = localStorage.getItem("user");
//     let user_uuid = "";

//     if (userData) {
//       try {
//         const parsedData = JSON.parse(userData);
//         user_uuid = parsedData.uuid || "";

//         if (!user_uuid) {
//           setShowAuthAlert(true);
//           return;
//         }
//       } catch (error) {
//         console.error("Error parsing user data from localStorage:", error);
//         setShowAuthAlert(true);
//         return;
//       }
//     } else {
//       setShowAuthAlert(true);
//       return;
//     }

//     // Get course UUID - for wishlist items we may not have it, so generate one if necessary
//     const courseUuid = item.uuid || crypto.randomUUID();
//     const originalPrice = parsePriceToNumber(item.price) * 1.2;

//     router.push(
//       `/payment/${courseUuid}?title=${encodeURIComponent(
//         item.title
//       )}&price=${encodeURIComponent(item.price)}&duration=${encodeURIComponent(
//         item.duration
//       )}&originalPrice=₹${originalPrice}&discount=₹${(
//         originalPrice - parsePriceToNumber(item.price)
//       ).toFixed(2)}&user_uuid=${encodeURIComponent(
//         user_uuid
//       )}&uuid=${encodeURIComponent(courseUuid)}`
//     );

//     closeWishlistModal();
//   };

//   const AuthAlertModal = () => {
//     if (!showAuthAlert) return null;

//     return (
//       <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
//         <div className="bg-orange-50 rounded-lg shadow-xl w-full max-w-md overflow-hidden flex flex-col">
//           <div className="p-4 border-b border-orange-200 flex justify-between items-center bg-gradient-to-r from-orange-500 to-orange-600">
//             <h2 className="text-xl font-bold text-white flex items-center">
//               <span className="mr-2">🔐</span> Authentication Required
//             </h2>
//             <button
//               onClick={() => setShowAuthAlert(false)}
//               className="text-white hover:text-orange-100"
//             >
//               <X size={24} />
//             </button>
//           </div>

//           <div className="p-6 bg-orange-50">
//             <div className="text-center mb-4">
//               <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <ShoppingCart size={32} className="text-orange-600" />
//               </div>
//               <h3 className="text-xl font-medium text-orange-900 mb-2">
//                 Access Your Learning Journey
//               </h3>
//               <p className="text-orange-700">
//                 Please log in to purchase this course and begin your learning
//                 adventure. Your educational growth is just one step away!
//               </p>
//             </div>
//           </div>

//           <div className="border-t border-orange-200 p-4 flex justify-center gap-4 bg-orange-100">
//             <button
//               onClick={() => {
//                 setShowAuthAlert(false);
//                 setShowLoginModal(true);
//               }}
//               className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md font-medium transition-colors"
//             >
//               Log In
//             </button>
//             <button
//               onClick={() => setShowAuthAlert(false)}
//               className="px-6 py-2 bg-orange-200 text-orange-800 rounded-md hover:bg-orange-300 transition-colors"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const WishlistModal = () => {
//     if (!isWishlistModalOpen) return null;

//     return (
//       <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
//         <div className="bg-orange-50 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
//           <div className="p-4 border-b border-orange-200 flex justify-between items-center bg-orange-100">
//             <h2 className="text-2xl font-bold text-orange-900 flex items-center">
//               <Heart className="mr-2 text-orange-700" size={24} /> My Wishlist (
//               {wishlistItems.length})
//             </h2>
//             <button
//               onClick={closeWishlistModal}
//               className="text-orange-700 hover:text-orange-900"
//             >
//               <X size={24} />
//             </button>
//           </div>

//           <div className="overflow-y-auto p-4 flex-grow bg-orange-50">
//             {wishlistItems.length === 0 ? (
//               <div className="text-center py-12">
//                 <Heart size={64} className="mx-auto text-orange-200 mb-4" />
//                 <h3 className="text-xl font-medium text-orange-800 mb-2">
//                   Your wishlist is empty
//                 </h3>
//                 <p className="text-orange-600">
//                   Browse courses and add them to your wishlist
//                 </p>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {wishlistItems.map((item) => (
//                   <div
//                     key={item.id}
//                     className="border border-orange-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-orange-50 flex flex-col"
//                   >
//                     <div className="h-32 bg-gradient-to-r from-orange-300 to-orange-400"></div>
//                     <div className="p-4 flex-grow">
//                       <div className="flex justify-between">
//                         <h3 className="font-medium text-orange-900">
//                           {item.title}
//                         </h3>
//                         <button
//                           onClick={() => removeFromWishlist(item.id)}
//                           className="text-orange-700 hover:text-orange-900"
//                         >
//                           <X size={18} />
//                         </button>
//                       </div>
//                       <span className="text-xs bg-orange-200 text-orange-900 px-2 py-1 rounded-full">
//                         {item.category}
//                       </span>
//                       <p className="text-sm text-orange-800 mt-2">
//                         {item.description}
//                       </p>
//                       <div className="flex justify-between items-center mt-4">
//                         <div>
//                           <span className="font-semibold text-orange-700">
//                             {item.price}
//                           </span>
//                           <p className="text-xs text-orange-600">
//                             Duration: {item.duration}
//                           </p>
//                         </div>
//                         <button
//                           onClick={() => handleWishlistEnroll(item)}
//                           className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm"
//                         >
//                           Buy Now
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <div className="border-t border-orange-200 p-4 flex justify-end bg-orange-100">
//             <button
//               onClick={closeWishlistModal}
//               className="px-4 py-2 bg-orange-200 text-orange-800 rounded-md mr-2 hover:bg-orange-300"
//             >
//               Close
//             </button>
//             {wishlistItems.length > 0 && (
//               <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md">
//                 Enroll All
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const CartModal = () => {
//     if (!isCartModalOpen) return null;

//     return (
//       <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
//         <div className="bg-orange-50 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
//           <div className="p-4 border-b border-orange-200 flex justify-between items-center bg-orange-100">
//             <h2 className="text-2xl font-bold text-orange-900 flex items-center">
//               <ShoppingCart className="mr-2 text-orange-700" size={24} /> My
//               Cart ({cartItems.length})
//             </h2>
//             <button
//               onClick={closeCartModal}
//               className="text-orange-700 hover:text-orange-900"
//             >
//               <X size={24} />
//             </button>
//           </div>

//           <div className="overflow-y-auto p-4 flex-grow bg-orange-50">
//             {cartItems.length === 0 ? (
//               <div className="text-center py-12">
//                 <ShoppingCart
//                   size={64}
//                   className="mx-auto text-orange-200 mb-4"
//                 />
//                 <h3 className="text-xl font-medium text-orange-800 mb-2">
//                   Your cart is empty
//                 </h3>
//                 <p className="text-orange-600">
//                   Browse courses and add them to your cart
//                 </p>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 gap-4">
//                 {cartItems.map((item) => (
//                   <div
//                     key={item.id}
//                     className="border border-orange-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-orange-50 flex flex-row"
//                   >
//                     <div className="w-24 md:w-32 bg-gradient-to-r from-orange-300 to-orange-400"></div>
//                     <div className="p-4 flex-grow">
//                       <div className="flex justify-between">
//                         <h3 className="font-medium text-orange-900">
//                           {item.title}
//                         </h3>
//                         <button
//                           onClick={() => removeFromCart(item.id)}
//                           className="text-orange-700 hover:text-orange-900"
//                         >
//                           <X size={18} />
//                         </button>
//                       </div>
//                       <span className="text-xs bg-orange-200 text-orange-900 px-2 py-1 rounded-full">
//                         {item.category}
//                       </span>
//                       <div className="flex justify-between items-center mt-4">
//                         <div>
//                           <span className="font-semibold text-orange-700">
//                             {item.price}
//                           </span>
//                           <p className="text-xs text-orange-600">
//                             Duration: {item.duration}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <div className="border-t border-orange-200 p-4 bg-orange-100">
//             {cartItems.length > 0 && (
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="font-semibold text-orange-900">Total:</h3>
//                 <span className="font-bold text-orange-900 text-xl">
//                   ₹
//                   {cartItems.map((total) => {
//                     return total.price;
//                   }, 0)}
//                 </span>
//               </div>
//             )}
//             <div className="flex justify-end">
//               <button
//                 onClick={closeCartModal}
//                 className="px-4 py-2 bg-orange-200 text-orange-800 rounded-md mr-2 hover:bg-orange-300"
//               >
//                 Close
//               </button>
//               {cartItems.length > 0 && (
//                 <button
//                   onClick={handleCartCheckout}
//                   className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md"
//                 >
//                   Checkout
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const activeCategorySubjects = salesSubjects.filter(
//     (subject) => subject.course?.toString() === activeMainTab
//   );

//   const filteredCourses = salesCourses.filter(
//     (course) =>
//       course.course?.toString() === activeMainTab &&
//       course.section?.toString() === activeSubTab
//   );

//   return (
//     <div className="min-h-screen bg-[#2B1615] text-white">
//        <header className="bg-[#FF8C42] shadow-md">
//         <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
//           <div className="text-center md:text-left">
//             <h1 className="text-2xl md:text-3xl font-bold text-[#2B1615] font-serif">
//               Course Enrollment Portal
//             </h1>
//             <p className="text-[#4D291F] font-serif italic">
//               Find and enroll in the best courses
//             </p>
//           </div>
//           <div className="flex gap-2 md:gap-4">
//             <button
//               onClick={openWishlistModal}
//               className="relative flex items-center gap-1 md:gap-2 bg-[#F9C784] hover:bg-[#FFAE75] text-[#2B1615] px-2 md:px-4 py-1 md:py-2 rounded-md transition-colors text-sm md:text-base"
//             >
//               <Heart size={18} className="text-[#E25822]" />
//               <span className="font-medium">Wishlist</span>
//               {wishlistItems.length > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-[#E25822] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//                   {wishlistItems.length}
//                 </span>
//               )}
//             </button>
//             <button
//               onClick={openCartModal}
//               className="relative flex items-center gap-1 md:gap-2 bg-[#F9C784] hover:bg-[#FFAE75] text-[#2B1615] px-2 md:px-4 py-1 md:py-2 rounded-md transition-colors text-sm md:text-base"
//             >
//               <ShoppingCart size={18} className="text-[#E25822]" />
//               <span className="font-medium">Cart</span>
//               {cartItems.length > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-[#E25822] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//                   {cartItems.length}
//                 </span>
//               )}
//             </button>
//           </div>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 py-8">
//         <div className="flex flex-wrap border-b border-[#FF8C42]">
//           {salesCategories.map((category) => (
//             <button
//               key={category.id}
//               className={`px-4 py-3 text-sm font-medium ${
//                 activeMainTab === category.id?.toString()
//                   ? "text-white border-b-2 border-[#FF8C42] bg-[#E25822]"
//                   : "text-orange-200 hover:text-white hover:bg-[#E25822]"
//               } transition-colors sm:px-6 sm:text-base`}
//               onClick={() => {
//                 setActiveMainTab(category.id?.toString() || "");
//                 setActiveSubTab("");
//                 setActiveCourse("");
//               }}
//             >
//               {category.category}
//             </button>
//           ))}
//         </div>

//         <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
//           <div className="bg-[#4D291F] rounded-lg shadow-md p-4 md:col-span-1 border border-[#FF8C42]">
//             <h2 className="font-semibold text-[#F9C784] mb-4">Categories</h2>
//             <div className="space-y-2">
//               {activeCategorySubjects.map((subject) => (
//                 <div
//                   key={subject.id}
//                   className="border-b border-[#FF8C42] pb-2"
//                 >
//                   <div
//                     className={`flex justify-between items-center py-2 px-3 rounded-md cursor-pointer ${
//                       activeSubTab === subject.id?.toString()
//                         ? "bg-[#E25822] text-white"
//                         : "hover:bg-[#743C30] text-[#F9C784]"
//                     }`}
//                     onClick={() => {
//                       handleSubTabClick(subject.id?.toString() || "");
//                     }}
//                   >
//                     <span className="font-medium text-sm">
//                       {subject.subject_name}
//                     </span>
//                     <span>
//                       <ChevronDown size={16} className="text-[#FFAE75]" />
//                     </span>
//                   </div>
//                   {activeSubTab === subject.id?.toString() && (
//                     <div className="pl-4 mt-1 space-y-1">
//                       {salesSection
//                         .filter((section) => section.subject === subject.id)
//                         .map((section) => (
//                           <div
//                             key={section.section_name}
//                             className={`py-1 px-3 text-sm rounded-md cursor-pointer ${
//                               activeCourse === section.section_name
//                                 ? "bg-[#E25822] text-white"
//                                 : "text-[#FFAE75] hover:bg-[#743C30]"
//                             }`}
//                             onClick={() =>
//                               handleCourseClick(
//                                 section.id?.toString() || "",
//                                 true
//                               )
//                             }
//                           >
//                             {section.section_name}
//                           </div>
//                         ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="bg-[#4D291F] rounded-lg shadow-md p-6 md:col-span-3 border border-[#FF8C42]">
//             {!activeSubTab ? (
//               <div className="flex flex-col items-center justify-center py-16 bg-[#4D291F] rounded-lg">
//                 <div className="text-center">
//                   <h3 className="text-xl font-semibold text-[#F9C784] mb-2">
//                     Select a category to view courses
//                   </h3>
//                   <p className="text-[#FFAE75]">
//                     Browse through our extensive course catalog by selecting a
//                     category from the left sidebar
//                   </p>
//                 </div>
//               </div>
//             ) : !activeCourse ? (
//               <div>
//                 <h2 className="text-xl font-semibold text-[#F9C784] mb-6">
//                   {
//                     activeCategorySubjects.find(
//                       (sub) => sub.id?.toString() === activeSubTab
//                     )?.subject_name
//                   }{" "}
//                   Courses ({filteredCourses.length})
//                 </h2>
//                 {filteredCourses.length === 0 ? (
//                   <div className="text-center py-12">
//                     <h3 className="text-lg font-medium text-[#F9C784] mb-2">
//                       No courses available
//                     </h3>
//                     <p className="text-[#FFAE75]">
//                       There are currently no courses available for this subject.
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                     {filteredCourses.map((course) => (
//                       <div
//                         key={course.id}
//                         className="border border-[#FF8C42] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-[#4D291F]"
//                         onClick={() => handleCourseClick(course.title || "")}
//                       >
//                         <div className="relative h-40 w-full overflow-hidden rounded-lg">
//                           <Image
//                             src={course.image || "/default-course.jpg"}
//                             alt={course.title || "Course image"}
//                             fill
//                             className="object-cover"
//                           />
//                         </div>
//                         <div className="p-4">
//                           <h3 className="font-medium text-[#F9C784]">
//                             {course.title}
//                           </h3>
//                           <p className="text-sm text-[#FFAE75] mt-1">
//                             {course.course_description}
//                           </p>
//                           <div className="flex justify-between items-center mt-4">
//                             <span className="font-semibold text-[#F9C784]">
//                               ₹{course.amount}
//                             </span>
//                             <span className="text-sm text-[#FFAE75]">
//                               {course.duration}
//                             </span>
//                           </div>
//                           <button className="mt-2 w-full bg-[#E25822] hover:bg-[#FF8C42] text-white px-3 py-1 rounded-md text-sm">
//                             Details
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <div>
//                 <div className="mb-6">
//                   <button
//                     onClick={() => setActiveCourse("")}
//                     className="text-[#FFAE75] flex items-center text-sm hover:text-[#F9C784]"
//                   >
//                     <ChevronDown className="rotate-90 mr-1" size={16} />
//                     Back to courses
//                   </button>
//                 </div>
//                 <div className="flex flex-col md:flex-row gap-6">
//                   <div className="md:w-2/5">
//                     <div className="relative h-64 w-full rounded-lg overflow-hidden">
//                       <Image
//                         src={currentCourseData.image || "/default-course.jpg"}
//                         alt={currentCourseData.title || "Course image"}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                   </div>
//                   <div className="md:w-3/5">
//                     <h2 className="text-2xl font-bold text-[#F9C784]">
//                       {currentCourseData.title}
//                     </h2>
//                     <p className="text-[#FFAE75] mt-2">
//                       {currentCourseData.description}
//                     </p>

//                     <div className="mt-4 flex items-center">
//                       <div className="bg-[#E25822] text-white px-2 py-1 rounded text-sm font-medium">
//                         Bestseller
//                       </div>
//                       {/* <div className="ml-3 text-[#FF8C42] flex">
//                         {[...Array(5)].map((_, i) => (
//                           <span key={i}>★</span>
//                         ))}
//                       </div> */}
//                       {/* <span className="ml-2 text-[#FFAE75] text-sm">
//                         (240 reviews)
//                       </span> */}
//                     </div>

//                     <div className="mt-6">
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <span className="text-3xl font-bold text-[#F9C784]">
//                             ₹{currentCourseData.amount}
//                           </span>
//                           <span className="ml-2 text-[#FFAE75] line-through">
//                             ₹
//                             {parseInt(
//                               currentCourseData.amount.replace(/[^\d]/g, "")
//                             ) * 1.2}
//                           </span>
//                         </div>
//                       </div>
//                       <p className="text-[#FFAE75] text-sm mt-1">
//                         Duration: {currentCourseData.duration}
//                       </p>
//                     </div>

//                     <div className="mt-6 flex flex-col sm:flex-row gap-3">
//                       <button
//                         onClick={handleEnrollNow}
//                         className="bg-[#FF8C42] hover:bg-[#FFAE75] text-[#2B1615] py-3 px-6 rounded-lg font-medium flex-1 transition-colors"
//                       >
//                         Buy Now
//                       </button>
//                       <button
//                         onClick={addToCart}
//                         className="bg-[#E25822] hover:bg-[#FF8C42] text-white py-3 px-6 rounded-lg font-medium transition-colors"
//                       >
//                         Add to Cart
//                       </button>
//                       <button
//                         onClick={addToWishlist}
//                         className="border border-[#FF8C42] text-[#F9C784] hover:bg-[#743C30] py-3 px-6 rounded-lg font-medium transition-colors"
//                       >
//                         Add to Wishlist
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-10">
//                   <h3 className="text-xl font-semibold text-orange-100 mb-4">
//                     Course Features
//                   </h3>
//                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                     {currentCourseData.course_features?.map(
//                       (feature, index) => (
//                         <li key={index} className="flex items-center">
//                           <div className="h-5 w-5 rounded-full bg-orange-800 text-orange-200 flex items-center justify-center mr-3">
//                             ✓
//                           </div>
//                           <span className="text-orange-200">{feature}</span>
//                         </li>
//                       )
//                     )}
//                   </ul>
//                 </div>

//                 <div className="mt-10 border-t border-orange-800 pt-6">
//                   <h3 className="text-xl font-semibold text-orange-100 mb-4">
//                     Course Description
//                   </h3>
//                   <p className="text-orange-200">
//                     {currentCourseData.course_description}
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>

//       <WishlistModal />
//       <CartModal />

//       <AuthAlertModal />
//       {showLoginModal && (
//         <LoginModal
//           closeModal={() => setShowLoginModal(false)}
//           onSuccess={() => {

//           }}
//           source="chatbot"
//         />
//       )}
//     </div>
//   );
// };

// export default CourseEnrollmentPortal;

"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import LoginModal from "../../app/components/login/Login";
import {
  SalesCategory,
  SalesSubjects,
  SalesSection,
  CourseData,
  WishlistItem,
} from "./courseenrollcomponents/types";
import axiosInstance from "../components/apiconfig/axios";
import { API_URLS } from "../components/apiconfig/api_urls";
import CategoryTabs from "./courseenrollcomponents/CategoryTabs";
import Header from "./courseenrollcomponents/Header";
import Sidebar from "./courseenrollcomponents/Sidebar";
import CourseDetails from "./courseenrollcomponents/CourseDetails";
import CourseList from "./courseenrollcomponents/CourseList";
import WishlistModal from "./courseenrollcomponents/WishlistModal";
import CartModal from "./courseenrollcomponents/CartModal";
import AuthAlertModal from "./courseenrollcomponents/AuthAlertModal";

const CourseEnrollmentPortal: React.FC = () => {
  const [activeMainTab, setActiveMainTab] = useState<string>("");
  const [activeSubTab, setActiveSubTab] = useState<string>("");
  const [activeCourse, setActiveCourse] = useState<string>("");
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [isWishlistModalOpen, setIsWishlistModalOpen] =
    useState<boolean>(false);
  const [cartItems, setCartItems] = useState<WishlistItem[]>([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false);
  const [salesCategories, setSalesCategories] = useState<SalesCategory[]>([]);
  const [salesSubjects, setSalesSubjects] = useState<SalesSubjects[]>([]);
  const [salesCourses, setSalesCourses] = useState<CourseData[]>([]);
  const [salesSection, setSalesSection] = useState<SalesSection[]>([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAuthAlert, setShowAuthAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState<{
    type: "cart" | "wishlist" | "duplicate_cart" | "duplicate_wishlist";
    message: string;
  } | null>(null);
  const cartButtonRef = useRef<HTMLButtonElement>(null);
  const wishlistButtonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        const user_uuid = parsedUser.uuid;
        if (user_uuid) {
          localStorage.setItem("user", JSON.stringify({ uuid: user_uuid }));
        }
      } catch (error) {
        console.error("Failed to parse currentUser from localStorage", error);
      }
    }
  }, []);

  const fetchSaleCategory = async () => {
    try {
      const response = await axiosInstance.get(
        API_URLS.SALEPAGE_COURSE_CATEGORY.GET_SALEPAGE_COURSE_CATEGORY
      );
      setSalesCategories(response.data);
      if (response.data.length > 0) {
        setActiveMainTab(response.data[0].id?.toString() || "");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchSaleSubjects = async () => {
    try {
      const response = await axiosInstance.get(
        API_URLS.SALEPAGE_COURSE_SUBJECT.GET_SALEPAGE_COURSE_SUBJECTS
      );
      setSalesSubjects(response.data);
    } catch (error) {
      console.error("Error fetching subjects:", error);
    }
  };

  const fetchSaleSection = async () => {
    try {
      const response = await axiosInstance.get(
        API_URLS.SALEPAGE_COURSE_SECTION.GET_SALEPAGE_COURSE_SECTION
      );
      setSalesSection(response.data);
    } catch (error) {
      console.error("Error fetching sections:", error);
    }
  };

  const fetchSaleCourse = async () => {
    try {
      const response = await axiosInstance.get(
        API_URLS.SALEPAGE_COURSE.GET_SALEPAGE_COURSE
      );
      setSalesCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchSaleCategory();
    fetchSaleSubjects();
    fetchSaleCourse();
    fetchSaleSection();
  }, []);

  const parsePriceToNumber = (priceString: string | undefined): number => {
    if (!priceString) return 0;
    return parseInt(priceString.replace(/[^\d]/g, "") || "0");
  };

  // Replace the getCurrentCourseData method in CourseEnrollmentPortal with this fixed version:

  const getCurrentCourseData = (): CourseData => {
    if (activeCourse) {
      // First try to find by UUID, then by ID, then by title
      const courseData = salesCourses.find(
        (course) =>
          course.uuid === activeCourse ||
          course.id?.toString() === activeCourse ||
          course.title === activeCourse
      );

      if (courseData) {
        return {
          ...courseData,
          title: courseData.title,
          description: courseData.description,
          amount: courseData.amount,
          duration: courseData.duration,
          course_features: courseData.course_features,
          course_description: courseData.course_description,
          image: courseData.image,
          uuid: courseData.uuid,
        };
      }
    }
    return {
      description: "Please select a course to view details",
      amount: "0",
      duration: "0 months",
      course_features: "No Features",
      course_description: "No course selected",
    };
  };

  const handleSubTabClick = (tabId: string) => {
    setActiveSubTab(tabId);
    setActiveCourse("");
  };

  const handleCourseClick = (
    courseIdentifier: string,
    isSection: boolean = false
  ) => {
    if (isSection) {
      const course = salesCourses.find(
        (c) => c.section?.toString() === courseIdentifier
      );
      if (course) {
        setActiveCourse(course.title || "");
      }
    } else {
      setActiveCourse(courseIdentifier);
    }
  };

  const handleCartCheckout = () => {
    if (cartItems.length === 0) return;
    const userData = localStorage.getItem("user");
    let user_uuid = "";
    if (userData) {
      try {
        const parsedData = JSON.parse(userData);
        user_uuid = parsedData.uuid || "";
        if (!user_uuid) {
          setShowAuthAlert(true);
          return;
        }
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        setShowAuthAlert(true);
        return;
      }
    } else {
      setShowAuthAlert(true);
      return;
    }
    const courseUuid = cartItems[0].uuid || crypto.randomUUID();
    const totalPrice = cartItems.reduce(
      (total, item) => total + parsePriceToNumber(item.price),
      0
    );
    const originalPrice = totalPrice * 1.2;
    const courseTitles = cartItems
      .map((item) => encodeURIComponent(item.title))
      .join(",");
    router.push(
      `/payment/${courseUuid}?title=${courseTitles}&price=₹${totalPrice}&items=${
        cartItems.length
      }&duration=${encodeURIComponent(
        cartItems[0].duration
      )}&originalPrice=₹${originalPrice}&discount=₹${(
        originalPrice - totalPrice
      ).toFixed(2)}&user_uuid=${encodeURIComponent(
        user_uuid
      )}&uuid=${encodeURIComponent(courseUuid)}`
    );
    closeCartModal();
  };

  const addToWishlist = () => {
    const currentCategory =
      salesCategories.find((cat) => cat.id?.toString() === activeMainTab)
        ?.category || "";
    const currentCourseData = getCurrentCourseData();
    const courseToAdd: WishlistItem = {
      id: `${activeMainTab}-${activeSubTab}-${activeCourse}`,
      title: `${activeCourse} Course`,
      price: currentCourseData.amount,
      duration: currentCourseData.duration,
      category: currentCategory,
      description: currentCourseData.description,
      image: currentCourseData.image,
      uuid: currentCourseData.uuid,
    };

    const exists = wishlistItems.some((item) => item.id === courseToAdd.id);
    if (exists) {
      setAlertMessage({
        type: "duplicate_wishlist",
        message: "This course is already in your wishlist!",
      });
      setTimeout(() => setAlertMessage(null), 3000);
      return;
    }

    setWishlistItems([...wishlistItems, courseToAdd]);
    setAlertMessage({
      type: "wishlist",
      message: "Course added to wishlist!",
    });
    setTimeout(() => setAlertMessage(null), 3000);
  };

  const addToCart = () => {
    const currentCategory =
      salesCategories.find((cat) => cat.id?.toString() === activeMainTab)
        ?.category || "";
    const currentCourseData = getCurrentCourseData();
    const courseToAdd: WishlistItem = {
      id: `${activeMainTab}-${activeSubTab}-${activeCourse}`,
      title: `${activeCourse} Course`,
      price: currentCourseData.amount,
      duration: currentCourseData.duration,
      category: currentCategory,
      description: currentCourseData.description,
      uuid: currentCourseData.uuid,
      image: currentCourseData.image,
    };

    const exists = cartItems.some((item) => item.id === courseToAdd.id);
    if (exists) {
      setAlertMessage({
        type: "duplicate_cart",
        message: "This course is already in your cart!",
      });
      setTimeout(() => setAlertMessage(null), 3000);
      return;
    }

    setCartItems([...cartItems, courseToAdd]);
    setAlertMessage({
      type: "cart",
      message: "Course added to cart!",
    });
    setTimeout(() => setAlertMessage(null), 3000);
  };

  const handleEnrollNow = () => {
    const currentCourseData = getCurrentCourseData();
    if (!currentCourseData.uuid) {
      setShowAuthAlert(true);
      return;
    }
    const userData = localStorage.getItem("user");
    let user_uuid = "";
    if (userData) {
      try {
        const parsedData = JSON.parse(userData);
        user_uuid = parsedData.uuid || "";
        if (!user_uuid) {
          setShowAuthAlert(true);
          return;
        }
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        setShowAuthAlert(true);
        return;
      }
    } else {
      setShowAuthAlert(true);
      return;
    }
    const originalPrice = parsePriceToNumber(currentCourseData.amount) * 1.2;
    router.push(
      `/payment/${currentCourseData.uuid}?title=${encodeURIComponent(
        currentCourseData.title || activeCourse
      )}&price=${encodeURIComponent(
        currentCourseData.amount
      )}&duration=${encodeURIComponent(
        currentCourseData.duration
      )}&originalPrice=₹${originalPrice}&discount=₹${(
        originalPrice - parsePriceToNumber(currentCourseData.amount)
      ).toFixed(2)}&user_uuid=${encodeURIComponent(
        user_uuid
      )}&uuid=${encodeURIComponent(currentCourseData.uuid)}`
    );
  };

  const removeFromWishlist = (id: string) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const openWishlistModal = () => setIsWishlistModalOpen(true);
  const closeWishlistModal = () => setIsWishlistModalOpen(false);
  const openCartModal = () => setIsCartModalOpen(true);
  const closeCartModal = () => setIsCartModalOpen(false);

  const handleWishlistEnroll = (item: WishlistItem) => {
    const userData = localStorage.getItem("user");
    let user_uuid = "";
    if (userData) {
      try {
        const parsedData = JSON.parse(userData);
        user_uuid = parsedData.uuid || "";
        if (!user_uuid) {
          setShowAuthAlert(true);
          return;
        }
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        setShowAuthAlert(true);
        return;
      }
    } else {
      setShowAuthAlert(true);
      return;
    }
    const courseUuid = item.uuid || crypto.randomUUID();
    const originalPrice = parsePriceToNumber(item.price) * 1.2;
    router.push(
      `/payment/${courseUuid}?title=${encodeURIComponent(
        item.title
      )}&price=${encodeURIComponent(item.price)}&duration=${encodeURIComponent(
        item.duration
      )}&originalPrice=₹${originalPrice}&discount=₹${(
        originalPrice - parsePriceToNumber(item.price)
      ).toFixed(2)}&user_uuid=${encodeURIComponent(
        user_uuid
      )}&uuid=${encodeURIComponent(courseUuid)}`
    );
    closeWishlistModal();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <style jsx>{`
        @keyframes alert-slide-in {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes alert-slide-out {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100px);
            opacity: 0;
          }
        }

        .alert {
          animation: alert-slide-in 0.3s ease-out;
        }

        .alert.fade-out {
          animation: alert-slide-out 0.3s ease-in forwards;
        }
      `}</style>

      <Header
        openWishlistModal={openWishlistModal}
        openCartModal={openCartModal}
        wishlistItems={wishlistItems}
        cartItems={cartItems}
        cartButtonRef={cartButtonRef}
        wishlistButtonRef={wishlistButtonRef}
      />

      {alertMessage && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
          <div
            className={`alert ${
              alertMessage.type === "cart" || alertMessage.type === "wishlist"
                ? "bg-green-500 border-green-600"
                : "bg-red-500 border-red-600"
            } text-white px-6 py-3 rounded-lg shadow-lg border`}
          >
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 18.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
              <span className="font-medium">{alertMessage.message}</span>
            </div>
          </div>
        </div>
      )}

      <main className="container mx-auto px-4 py-8">
        <CategoryTabs
          salesCategories={salesCategories}
          activeMainTab={activeMainTab}
          setActiveMainTab={setActiveMainTab}
          setActiveSubTab={setActiveSubTab}
          setActiveCourse={setActiveCourse}
        />
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
          <Sidebar
            activeMainTab={activeMainTab}
            activeSubTab={activeSubTab}
            activeCourse={activeCourse}
            salesSubjects={salesSubjects}
            salesSection={salesSection}
            handleSubTabClick={handleSubTabClick}
            handleCourseClick={handleCourseClick}
          />
          {activeSubTab && activeCourse ? (
            <CourseDetails
              currentCourseData={getCurrentCourseData()}
              setActiveCourse={setActiveCourse}
              handleEnrollNow={handleEnrollNow}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              parsePriceToNumber={parsePriceToNumber}
            />
          ) : (
            <CourseList
              activeMainTab={activeMainTab}
              activeSubTab={activeSubTab}
              activeCourse={activeCourse}
              salesCourses={salesCourses}
              salesSubjects={salesSubjects}
              salesCoursessection={salesSection}
              handleCourseClick={handleCourseClick}
            />
          )}
        </div>
      </main>
      <WishlistModal
        isOpen={isWishlistModalOpen}
        closeModal={closeWishlistModal}
        wishlistItems={wishlistItems}
        removeFromWishlist={removeFromWishlist}
        handleWishlistEnroll={handleWishlistEnroll}
      />
      <CartModal
        isOpen={isCartModalOpen}
        closeModal={closeCartModal}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        handleCartCheckout={handleCartCheckout}
        parsePriceToNumber={parsePriceToNumber}
      />
      <AuthAlertModal
        isOpen={showAuthAlert}
        closeModal={() => setShowAuthAlert(false)}
        openLoginModal={() => setShowLoginModal(true)}
      />
      {showLoginModal && (
        <LoginModal
          closeModal={() => setShowLoginModal(false)}
          onSuccess={() => {}}
          source="chatbot"
        />
      )}
    </div>
  );
};

export default CourseEnrollmentPortal;
