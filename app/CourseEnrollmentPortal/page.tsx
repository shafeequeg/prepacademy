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
  const [isEnrolling, setIsEnrolling] = useState<boolean>(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false);
  const [salesCategories, setSalesCategories] = useState<SalesCategory[]>([]);
  const [salesSubjects, setSalesSubjects] = useState<SalesSubjects[]>([]);
  const [salesCourses, setSalesCourses] = useState<CourseData[]>([]);
  const [salesSection, setSalesSection] = useState<SalesSection[]>([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAuthAlert, setShowAuthAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState<{
    type:
    | "cart"
    | "wishlist"
    | "duplicate_cart"
    | "duplicate_wishlist"
    | "error";
    message: string;
  } | null>(null);
  const cartButtonRef = useRef<HTMLButtonElement>(null);
  const wishlistButtonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const [pendingAction, setPendingAction] = useState<
    "buy" | "cart" | "wishlist" | null
  >(null);

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


  // Scroll to section if hash is present in URL and open the course section
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        console.log("Hash from URL:", id);
        console.log("salesSection:", salesSection);

        // Consistent cleaning logic
        const clean = (str: string) => (str || "").replace(/\s+/g, "").replace(/[^a-zA-Z0-9]/g, '');

        // Find the section in salesSection whose cleaned section_name matches the hash
        let matchingSection = salesSection.find(
          (section) => {
            if (!section.section_name) return false;
            const cleanedSectionName = clean(section.section_name || "");
            return cleanedSectionName === id;
          }
        );

        console.log("Matching section:", matchingSection);

        // Fallback: Try to match by slug (for static data slugs)
        if (!matchingSection) {
          matchingSection = salesSection.find(
            (section) => {
              const cleanedSlug = clean(section.section_name || "").toLowerCase();
              return cleanedSlug === id.toLowerCase();
            }
          );
          if (matchingSection) {
            console.log("Fallback matching section by slug:", matchingSection);
          }
        }

        if (matchingSection) {
          // Find the course in salesCourses with matching section number
          const matchingCourse = salesCourses.find(
            (course) => course.section?.toString() === matchingSection.id?.toString()
          );
          console.log("Matching course:", matchingCourse);

          if (matchingCourse) {
            setActiveSubTab(matchingCourse.course?.toString() || "");
            setActiveCourse(matchingCourse.title || "");

            // Scroll to the element after state updates
            setTimeout(() => {
              const sectionElement = document.getElementById(id);
              if (sectionElement) {
                sectionElement.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                });
              }
            }, 500); // Increased delay to ensure DOM is updated
          }
        } else {
          console.warn("No matching section found for hash:", id);
        }
      }
    }
  }, [salesCourses, salesSection]);

  // const isLoggedIn = () => {
  //   if (typeof window !== "undefined") {
  //     return localStorage.getItem("isLoggedIn") === "true";
  //   }
  //   return false;
  // };

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
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      try {
        const parsedCartItems = JSON.parse(storedCartItems);
        if (Array.isArray(parsedCartItems)) {
          setCartItems(parsedCartItems);
        }
      } catch (error) {
        console.error("Failed to parse cart items from localStorage", error);
        localStorage.removeItem("cartItems"); // Clear invalid data
      }
    }

    const storedWishlistItems = localStorage.getItem("wishlistItems");
    if (storedWishlistItems) {
      try {
        const parsedWishlistItems = JSON.parse(storedWishlistItems);
        if (Array.isArray(parsedWishlistItems)) {
          setWishlistItems(parsedWishlistItems);
        }
      } catch (error) {
        console.error(
          "Failed to parse wishlist items from localStorage",
          error
        );
        localStorage.removeItem("wishlistItems"); // Clear invalid data
      }
    }
  }, []); 

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // 3. Add useEffect to save wishlist items to localStorage whenever wishlistItems changes
  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  useEffect(() => {
    fetchSaleCategory();
    fetchSaleSubjects();
    fetchSaleCourse();
    fetchSaleSection();
  }, []);

  const parsePriceToNumber = (priceString: string | undefined): number => {
    if (!priceString) return 0;
    // Remove currency symbol (₹), commas, and any non-numeric characters except decimal point
    const cleanedPrice = priceString.replace(/[^\d.]/g, "");
    // Parse as float and round to nearest integer to avoid decimal issues
    return Math.round(parseFloat(cleanedPrice) || 0);
  };
  // Replace the getCurrentCourseData method in CourseEnrollmentPortal with this fixed version:

  const getCurrentCourseData = (): CourseData => {
    if (activeCourse) {
      // Find by title first (most common case)
      const courseData = salesCourses.find(
        (course) => course.title === activeCourse
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
          section: courseData.section, // Include section for ID generation
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

  // const handleCartCheckout = () => {
  //   if (cartItems.length === 0) return;

  //   const userData = localStorage.getItem("user");
  //   let user_uuid = "";

  //   if (userData) {
  //     try {
  //       const parsedData = JSON.parse(userData);
  //       user_uuid = parsedData.uuid || "";
  //       if (!user_uuid) {
  //         setShowAuthAlert(true);
  //         return;
  //       }
  //     } catch (error) {
  //       console.error("Error parsing user data from localStorage:", error);
  //       setShowAuthAlert(true);
  //       return;
  //     }
  //   } else {
  //     setShowAuthAlert(true);
  //     return;
  //   }

  //   const courseUuid = cartItems[0].uuid || crypto.randomUUID();
  //   const totalPrice = cartItems.reduce(
  //     (total, item) => total + parsePriceToNumber(item.price),
  //     0
  //   );
  //   const originalPrice = Math.round(totalPrice * 1.25);
  //   const discount = originalPrice - totalPrice;

  //   const courseTitles = cartItems
  //     .map((item) => item.title.replace(" Course", ""))
  //     .join(", ");
  //   const duration = cartItems[0].duration;

  //   router.push(
  //     `/payment/${courseUuid}?title=${encodeURIComponent(
  //       courseTitles
  //     )}&price=₹${totalPrice.toLocaleString("en-IN")}&items=${
  //       cartItems.length
  //     }&duration=${encodeURIComponent(
  //       duration
  //     )}&originalPrice=₹${originalPrice.toLocaleString(
  //       "en-IN"
  //     )}&discount=₹${discount.toLocaleString(
  //       "en-IN"
  //     )}&user_uuid=${encodeURIComponent(user_uuid)}&uuid=${encodeURIComponent(
  //       courseUuid
  //     )}`
  //   );

  //   closeCartModal();
  // };
  const addToWishlist = () => {
    const currentCategory =
      salesCategories.find((cat) => cat.id?.toString() === activeMainTab)
        ?.category || "";
    const currentCourseData = getCurrentCourseData();

    const courseToAdd: WishlistItem = {
      id: `${activeMainTab}-${activeSubTab}-${activeCourse}`,
      title: currentCourseData.title || activeCourse, // Use course title from data
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
      title: currentCourseData.title || activeCourse, // Use course title from data
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

  const handleEnrollNow = async () => {
    const currentCourseData = getCurrentCourseData();
    if (!currentCourseData.uuid) {
      setShowAuthAlert(true);
      return;
    }

    // Check if user is logged in
    const userData = localStorage.getItem("user");
    let user_uuid = "";
    if (userData) {
      try {
        const parsedData = JSON.parse(userData);
        user_uuid = parsedData.uuid || "";
        if (!user_uuid) {
          setShowAuthAlert(true); // Show AuthAlertModal if no user_uuid
          setPendingAction("buy"); // Set pending action for payment
          return;
        }
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        setShowAuthAlert(true); // Show AuthAlertModal on error
        setPendingAction("buy"); // Set pending action for payment
        return;
      }
    } else {
      setShowAuthAlert(true); // Show AuthAlertModal if no user data
      setPendingAction("buy"); // Set pending action for payment
      return;
    }

    // User is logged in, proceed with enrollment
    proceedToPayment();
  };

  // const handleLoginSuccess = () => {
  //   // Execute the pending action after successful login
  //   if (pendingAction === "buy") {
  //     proceedToPayment();
  //   }
  //   // Reset pending action
  //   setPendingAction("");
  // };

  // Update your AuthAlertModal usage to show login modal:
  // const openLoginModal = () => {
  //   setShowAuthAlert(false);
  //   setShowLoginModal(true);
  // };

  // Separate function to handle the actual payment process
  // Update the proceedToPayment function:

  const proceedToPayment = async () => {
    const currentCourseData = getCurrentCourseData();

    // Get fresh user data from localStorage
    const userData =
      localStorage.getItem("user") || localStorage.getItem("currentUser");

    if (!userData) {
      console.error("No user data found after login");
      setShowAuthAlert(true);
      return;
    }

    let user_uuid = "";
    try {
      const parsedData = JSON.parse(userData);
      user_uuid = parsedData.uuid || "";

      if (!user_uuid) {
        console.error("No user UUID found in user data");
        setShowAuthAlert(true);
        return;
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      setShowAuthAlert(true);
      return;
    }

    setIsEnrolling(true);

    try {
      const originalPrice = parsePriceToNumber(currentCourseData.amount) * 1.2;

      const paymentUrl = `/payment/${currentCourseData.uuid
        }?title=${encodeURIComponent(
          currentCourseData.title || activeCourse
        )}&price=${encodeURIComponent(
          currentCourseData.amount
        )}&duration=${encodeURIComponent(
          currentCourseData.duration
        )}&originalPrice=₹${originalPrice}&discount=₹${(
          originalPrice - parsePriceToNumber(currentCourseData.amount)
        ).toFixed(2)}&user_uuid=${encodeURIComponent(
          user_uuid
        )}&uuid=${encodeURIComponent(currentCourseData.uuid || "")}`;

      console.log("Navigating to payment URL:", paymentUrl);
      router.push(paymentUrl);
    } catch (error) {
      console.error("Error navigating to payment:", error);
      setAlertMessage({
        type: "error" as
          | "cart"
          | "wishlist"
          | "duplicate_cart"
          | "duplicate_wishlist"
          | "error",
        message: "Failed to proceed to payment. Please try again.",
      });
    } finally {
      // Reset loading state after navigation
      setTimeout(() => setIsEnrolling(false), 1000);
    }
  };

  // Handler for successful login from CourseDetails
  const handleLoginSuccessFromCourse = () => {
    setShowLoginModal(false);

    // Small delay to ensure login state is properly set
    setTimeout(() => {
      // Execute the pending action
      if (pendingAction === "buy") {
        proceedToPayment();
      } else if (pendingAction === "cart") {
        addToCart();
      } else if (pendingAction === "wishlist") {
        addToWishlist();
      }

      // Reset pending action
      setPendingAction(null);
    }, 100); // Small delay to ensure state is updated
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

  // const handleWishlistEnroll = (item: WishlistItem) => {
  //   const userData = localStorage.getItem("user");
  //   let user_uuid = "";

  //   if (userData) {
  //     try {
  //       const parsedData = JSON.parse(userData);
  //       user_uuid = parsedData.uuid || "";
  //       if (!user_uuid) {
  //         setShowAuthAlert(true);
  //         return;
  //       }
  //     } catch (error) {
  //       console.error("Error parsing user data from localStorage:", error);
  //       setShowAuthAlert(true);
  //       return;
  //     }
  //   } else {
  //     setShowAuthAlert(true);
  //     return;
  //   }

  //   const courseUuid = item.uuid || crypto.randomUUID();
  //   const itemPrice = parsePriceToNumber(item.price);
  //   const originalPrice = Math.round(itemPrice * 1.25);
  //   const discount = originalPrice - itemPrice;

  //   router.push(
  //     `/payment/${courseUuid}?title=${encodeURIComponent(
  //       item.title
  //     )}&price=₹${itemPrice.toLocaleString(
  //       "en-IN"
  //     )}&duration=${encodeURIComponent(
  //       item.duration
  //     )}&originalPrice=₹${originalPrice.toLocaleString(
  //       "en-IN"
  //     )}&discount=₹${discount.toLocaleString(
  //       "en-IN"
  //     )}&user_uuid=${encodeURIComponent(user_uuid)}&uuid=${encodeURIComponent(
  //       courseUuid
  //     )}`
  //   );

  //   closeWishlistModal();
  // };

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
            className={`alert ${alertMessage.type === "cart"
              ? "bg-green-500 border-green-600"
              : alertMessage.type === "wishlist"
                ? "bg-green-500 border-green-600"
                : "bg-red-500 border-red-600"
              } text-white px-6 py-3 rounded-lg shadow-lg border`}
          >
            <div className="flex items-center space-x-2">
              {alertMessage.type === "wishlist" ? (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              ) : alertMessage.type === "cart" ? (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM17 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM2 2v2h1l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 21 4H5.21l-.94-2H2zm16 16c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
                </svg>
              ) : (
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
              )}
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
              isEnrolling={isEnrolling}
              showLoginModal={showLoginModal}
              setShowLoginModal={setShowLoginModal}
              onLoginSuccess={handleLoginSuccessFromCourse}
              pendingAction={pendingAction}
              salesSection={salesSection}
              salesCategories={salesCategories} // Add this
              activeMainTab={activeMainTab} // Add this
              setActiveMainTab={setActiveMainTab}
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
        parsePriceToNumber={parsePriceToNumber}
        setShowAuthAlert={setShowAuthAlert}
        setShowLoginModal={setShowLoginModal}
      />
      <CartModal
        isOpen={isCartModalOpen}
        closeModal={closeCartModal}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        parsePriceToNumber={parsePriceToNumber}
        setShowAuthAlert={setShowAuthAlert}
        setShowLoginModal={setShowLoginModal}
      />
      <AuthAlertModal
        isOpen={showAuthAlert}
        closeModal={() => setShowAuthAlert(false)}
        openLoginModal={() => setShowLoginModal(true)}
      />
      {showLoginModal && (
        <LoginModal
          closeModal={() => setShowLoginModal(false)}
          onSuccess={handleLoginSuccessFromCourse}
          source="course-purchase"
        />
      )}
    </div>
  );
};

export default CourseEnrollmentPortal;
