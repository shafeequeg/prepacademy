"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Heart, ShoppingCart, X } from "lucide-react";
import { toast } from "react-toastify";
import { mainCategories, courseMockData } from "./courses";
import { useRouter } from "next/navigation";
import Image from "next/image";
type WishlistItem = {
  id: string;
  title: string;
  price: string;
  duration: string;
  category: string;
  description: string;
};

type CourseData = {
  label?: string;
  title?: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  image?: string;
};

const CourseEnrollmentPortal: React.FC = () => {
  const [activeMainTab, setActiveMainTab] = useState<string>("schoolcourse");
  const [activeSubTab, setActiveSubTab] = useState<string>("");
  const [activeCourse, setActiveCourse] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<Record<string, boolean>>(
    {}
  );
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [isWishlistModalOpen, setIsWishlistModalOpen] =
    useState<boolean>(false);
  const [cartItems, setCartItems] = useState<WishlistItem[]>([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false);

  const router = useRouter();

  const activeMainCategory = mainCategories.find(
    (category) => category.id === activeMainTab
  );

  const toggleDropdown = (tabId: string) => {
    setIsDropdownOpen((prev) => ({
      ...prev,
      [tabId]: !prev[tabId],
    }));
  };

  const handleSubTabClick = (tabId: string) => {
    setActiveSubTab(tabId);

    if (
      activeMainTab === "studyabroad" ||
      activeMainTab === "careercounseling"
    ) {
      const selectedTab = activeMainCategory?.tabs.find(
        (tab) => tab.id === tabId
      );
      if (selectedTab) {
        setActiveCourse(selectedTab.label);
      }
    } else {
      setActiveCourse("");
    }
  };

  const handleCourseClick = (course: string) => {
    setActiveCourse(course);
  };

  const parsePriceToNumber = (priceString: string | undefined): number => {
    if (!priceString) return 0;
    return parseInt(priceString.replace(/[^\d]/g, "") || "0");
  };

  // 2. Update the getCurrentCourseData function to ensure it always returns a complete CourseData object
  const getCurrentCourseData = (): CourseData => {
    // For studyabroad and careercounseling tabs
    if (
      activeMainTab === "studyabroad" ||
      activeMainTab === "careercounseling"
    ) {
      const currentTab = activeMainCategory?.tabs.find(
        (tab) => tab.id === activeSubTab
      );
      if (currentTab?.course) {
        return currentTab.course;
      }
    }

    // For schoolcourse and collegecourse tabs
    if (activeCourse) {
      // Safely access course data from courseMockData
      const courseData = (courseMockData as Record<string, CourseData>)[
        activeCourse
      ];

      if (courseData) {
        return {
          ...courseData,
          title: courseData.title || activeCourse,
          label: activeCourse,
        };
      }
    }

    // Return default values if no course is selected or courseData is undefined
    return {
      description: "Comprehensive preparation course",
      price: "₹12,999",
      duration: "3 months",
      features: [
        "Comprehensive study materials",
        "Expert faculty",
        "Regular assessments",
        "Doubt clearing sessions",
      ],
      label: activeCourse || "Course Preparation",
    };
  };

  // 3. Update the handleCartCheckout function to use the safe price parser
  const handleCartCheckout = () => {
    if (cartItems.length > 0) {
      const uuid = crypto.randomUUID();
      const totalPrice = cartItems.reduce((total, item) => {
        return total + parsePriceToNumber(item.price);
      }, 0);
      router.push(
        `/payment/${uuid}?title=Cart Checkout&price=₹${totalPrice}&items=${cartItems.length}`
      );
      closeCartModal();
    }
  };

  const currentCourseData = getCurrentCourseData();

  const addToWishlist = () => {
    const currentCategory = activeMainCategory?.label || "";
    const courseToAdd: WishlistItem = {
      id: `${activeMainTab}-${activeSubTab}-${activeCourse}`,
      title: `${activeCourse} Course`,
      price: currentCourseData.price,
      duration: currentCourseData.duration,
      category: currentCategory,
      description: currentCourseData.description,
    };

    const exists = wishlistItems.some((item) => item.id === courseToAdd.id);
    if (!exists) {
      setWishlistItems([...wishlistItems, courseToAdd]);
      toast.success("Course added to wishlist!");
    } else {
      toast.warning("This course is already in your wishlist!");
    }
  };

  const addToCart = () => {
    const currentCategory = activeMainCategory?.label || "";
    const courseToAdd: WishlistItem = {
      id: `${activeMainTab}-${activeSubTab}-${activeCourse}`,
      title: `${activeCourse} Course`,
      price: currentCourseData.price,
      duration: currentCourseData.duration,
      category: currentCategory,
      description: currentCourseData.description,
    };

    const exists = cartItems.some((item) => item.id === courseToAdd.id);
    if (!exists) {
      setCartItems([...cartItems, courseToAdd]);
      toast.success("Course added to cart!");
    } else {
      toast.warning("This course is already in your cart!");
    }
  };

  const handleEnrollNow = () => {
    const uuid = crypto.randomUUID();
    router.push(
      `/payment/${uuid}?title=${encodeURIComponent(
        currentCourseData.title || activeCourse
      )}&price=${encodeURIComponent(
        currentCourseData.price
      )}&duration=${encodeURIComponent(currentCourseData.duration)}`
    );
  };

  const removeFromWishlist = (id: string) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const openWishlistModal = () => {
    setIsWishlistModalOpen(true);
  };

  const closeWishlistModal = () => {
    setIsWishlistModalOpen(false);
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  const handleWishlistEnroll = (item: WishlistItem) => {
    const uuid = crypto.randomUUID();
    router.push(
      `/payment/${uuid}?title=${encodeURIComponent(
        item.title
      )}&price=${encodeURIComponent(item.price)}&duration=${encodeURIComponent(
        item.duration
      )}`
    );
    closeWishlistModal();
  };

  // const handleCartCheckout = () => {
  //   if (cartItems.length > 0) {
  //     const uuid = crypto.randomUUID();
  //     const totalPrice = cartItems.reduce((total, item) => {
  //       const price = parseInt(item.price.replace(/[^\d]/g, ""));
  //       return total + price;
  //     }, 0);
  //     router.push(
  //       `/payment/${uuid}?title=Cart Checkout&price=₹${totalPrice}&items=${cartItems.length}`
  //     );
  //     closeCartModal();
  //   }
  // };

  const WishlistModal = () => {
    if (!isWishlistModalOpen) return null;

    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-orange-50 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
          <div className="p-4 border-b border-orange-200 flex justify-between items-center bg-orange-100">
            <h2 className="text-2xl font-bold text-orange-900 flex items-center">
              <Heart className="mr-2 text-orange-700" size={24} /> My Wishlist (
              {wishlistItems.length})
            </h2>
            <button
              onClick={closeWishlistModal}
              className="text-orange-700 hover:text-orange-900"
            >
              <X size={24} />
            </button>
          </div>

          <div className="overflow-y-auto p-4 flex-grow bg-orange-50">
            {wishlistItems.length === 0 ? (
              <div className="text-center py-12">
                <Heart size={64} className="mx-auto text-orange-200 mb-4" />
                <h3 className="text-xl font-medium text-orange-800 mb-2">
                  Your wishlist is empty
                </h3>
                <p className="text-orange-600">
                  Browse courses and add them to your wishlist
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {wishlistItems.map((item) => (
                  <div
                    key={item.id}
                    className="border border-orange-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-orange-50 flex flex-col"
                  >
                    <div className="h-32 bg-gradient-to-r from-orange-300 to-orange-400"></div>
                    <div className="p-4 flex-grow">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-orange-900">
                          {item.title}
                        </h3>
                        <button
                          onClick={() => removeFromWishlist(item.id)}
                          className="text-orange-700 hover:text-orange-900"
                        >
                          <X size={18} />
                        </button>
                      </div>
                      <span className="text-xs bg-orange-200 text-orange-900 px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                      <p className="text-sm text-orange-800 mt-2">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <div>
                          <span className="font-semibold text-orange-700">
                            {item.price}
                          </span>
                          <p className="text-xs text-orange-600">
                            Duration: {item.duration}
                          </p>
                        </div>
                        <button
                          onClick={() => handleWishlistEnroll(item)}
                          className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-orange-200 p-4 flex justify-end bg-orange-100">
            <button
              onClick={closeWishlistModal}
              className="px-4 py-2 bg-orange-200 text-orange-800 rounded-md mr-2 hover:bg-orange-300"
            >
              Close
            </button>
            {wishlistItems.length > 0 && (
              <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md">
                Enroll All
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const CartModal = () => {
    if (!isCartModalOpen) return null;

    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-orange-50 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
          <div className="p-4 border-b border-orange-200 flex justify-between items-center bg-orange-100">
            <h2 className="text-2xl font-bold text-orange-900 flex items-center">
              <ShoppingCart className="mr-2 text-orange-700" size={24} /> My
              Cart ({cartItems.length})
            </h2>
            <button
              onClick={closeCartModal}
              className="text-orange-700 hover:text-orange-900"
            >
              <X size={24} />
            </button>
          </div>

          <div className="overflow-y-auto p-4 flex-grow bg-orange-50">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart
                  size={64}
                  className="mx-auto text-orange-200 mb-4"
                />
                <h3 className="text-xl font-medium text-orange-800 mb-2">
                  Your cart is empty
                </h3>
                <p className="text-orange-600">
                  Browse courses and add them to your cart
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="border border-orange-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-orange-50 flex flex-row"
                  >
                    <div className="w-24 md:w-32 bg-gradient-to-r from-orange-300 to-orange-400"></div>
                    <div className="p-4 flex-grow">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-orange-900">
                          {item.title}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-orange-700 hover:text-orange-900"
                        >
                          <X size={18} />
                        </button>
                      </div>
                      <span className="text-xs bg-orange-200 text-orange-900 px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                      <div className="flex justify-between items-center mt-4">
                        <div>
                          <span className="font-semibold text-orange-700">
                            {item.price}
                          </span>
                          <p className="text-xs text-orange-600">
                            Duration: {item.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-orange-200 p-4 bg-orange-100">
            {cartItems.length > 0 && (
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-orange-900">Total:</h3>
                <span className="font-bold text-orange-900 text-xl">
                  ₹
                  {cartItems.reduce((total, item) => {
                    return total + parsePriceToNumber(item.price);
                  }, 0)}
                </span>
              </div>
            )}
            <div className="flex justify-end">
              <button
                onClick={closeCartModal}
                className="px-4 py-2 bg-orange-200 text-orange-800 rounded-md mr-2 hover:bg-orange-300"
              >
                Close
              </button>
              {cartItems.length > 0 && (
                <button
                  onClick={handleCartCheckout}
                  className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md"
                >
                  Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#2B1615] text-white">
      <header className="bg-[#FF8C42] shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#2B1615] font-serif">
              Course Enrollment Portal
            </h1>
            <p className="text-[#4D291F] font-serif italic">
              Find and enroll in the best courses for your academic journey
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={openWishlistModal}
              className="relative flex items-center gap-2 bg-[#F9C784] hover:bg-[#FFAE75] text-[#2B1615] px-4 py-2 rounded-md transition-colors"
            >
              <Heart size={20} className="text-[#E25822]" />
              <span className="font-medium">Wishlist</span>
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#E25822] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlistItems.length}
                </span>
              )}
            </button>
            <button
              onClick={openCartModal}
              className="relative flex items-center gap-2 bg-[#F9C784] hover:bg-[#FFAE75] text-[#2B1615] px-4 py-2 rounded-md transition-colors"
            >
              <ShoppingCart size={20} className="text-[#E25822]" />
              <span className="font-medium">Cart</span>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#E25822] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap border-b border-[#FF8C42]">
          {mainCategories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-3 text-sm font-medium ${
                activeMainTab === category.id
                  ? "text-white border-b-2 border-[#FF8C42] bg-[#E25822]"
                  : "text-orange-200 hover:text-white hover:bg-[#E25822]"
              } transition-colors sm:px-6 sm:text-base`}
              onClick={() => {
                setActiveMainTab(category.id);
                setActiveSubTab("");
                setActiveCourse("");
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="bg-[#4D291F] rounded-lg shadow-md p-4 md:col-span-1 border border-[#FF8C42]">
            <h2 className="font-semibold text-[#F9C784] mb-4">Categories</h2>
            <div className="space-y-2">
              {activeMainCategory?.tabs.map((tab) => (
                <div key={tab.id} className="border-b border-[#FF8C42] pb-2">
                  <div
                    className={`flex justify-between items-center py-2 px-3 rounded-md cursor-pointer ${
                      activeSubTab === tab.id
                        ? "bg-[#E25822] text-white"
                        : "hover:bg-[#743C30] text-[#F9C784]"
                    }`}
                    onClick={() => {
                      handleSubTabClick(tab.id);
                      if (tab.dropdownItems) {
                        toggleDropdown(tab.id);
                      }
                    }}
                  >
                    <span className="font-medium text-sm">{tab.label}</span>
                    {tab.dropdownItems && (
                      <span>
                        {isDropdownOpen[tab.id] ? (
                          <ChevronUp size={16} className="text-[#FFAE75]" />
                        ) : (
                          <ChevronDown size={16} className="text-[#FFAE75]" />
                        )}
                      </span>
                    )}
                  </div>
                  {tab.dropdownItems && isDropdownOpen[tab.id] && (
                    <div className="pl-4 mt-1 space-y-1">
                      {tab.dropdownItems.map((item) => (
                        <div
                          key={item.path}
                          className={`py-1 px-3 text-sm rounded-md cursor-pointer ${
                            activeCourse === item.label
                              ? "bg-[#E25822] text-white"
                              : "text-[#FFAE75] hover:bg-[#743C30]"
                          }`}
                          onClick={() => handleCourseClick(item.label)}
                        >
                          {item.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#4D291F] rounded-lg shadow-md p-6 md:col-span-3 border border-[#FF8C42]">
            {!activeSubTab ? (
              <div className="flex flex-col items-center justify-center py-16 bg-[#4D291F] rounded-lg">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-[#F9C784] mb-2">
                    Select a category to view courses
                  </h3>
                  <p className="text-[#FFAE75]">
                    Browse through our extensive course catalog by selecting a
                    category from the left sidebar
                  </p>
                </div>
              </div>
            ) : !activeCourse ? (
              <div>
                <h2 className="text-xl font-semibold text-[#F9C784] mb-6">
                  {
                    activeMainCategory?.tabs.find(
                      (tab) => tab.id === activeSubTab
                    )?.label
                  }{" "}
                  Courses
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {(activeMainTab === "schoolcourse" ||
                    activeMainTab === "collegecourse") &&
                    activeMainCategory?.tabs
                      .find((tab) => tab.id === activeSubTab)
                      ?.dropdownItems?.map((course) => {
                        const courseData = (
                          courseMockData as Record<string, CourseData>
                        )[course.label];
                        return (
                          <div
                            key={course.path}
                            className="border border-[#FF8C42] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-[#4D291F]"
                            onClick={() => handleCourseClick(course.label)}
                          >
                            <div className="relative h-40 w-full overflow-hidden rounded-lg">
                              <Image
                                src={courseData?.image || "/default-course.jpg"}
                                alt={course.label}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="font-medium text-[#F9C784]">
                                {courseData?.title || course.label}
                              </h3>
                              <p className="text-sm text-[#FFAE75] mt-1">
                                {courseData?.description ||
                                  "Comprehensive preparation course"}
                              </p>
                              <div className="flex justify-between items-center mt-4">
                                <span className="font-semibold text-[#F9C784]">
                                  {courseData?.price || "₹12,999"}
                                </span>
                                <button className="bg-[#E25822] hover:bg-[#FF8C42] text-white px-3 py-1 rounded-md text-sm">
                                  Details
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <button
                    onClick={() => setActiveCourse("")}
                    className="text-[#FFAE75] flex items-center text-sm hover:text-[#F9C784]"
                  >
                    <ChevronDown className="rotate-90 mr-1" size={16} />
                    Back to courses
                  </button>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-2/5">
                    <div className="relative h-64 w-full rounded-lg overflow-hidden">
                      <Image
                        src="/your-image.jpg"
                        alt="Background"
                        fill
                        className="object-cover"
                      />
                    </div>{" "}
                  </div>
                  <div className="md:w-3/5">
                    <h2 className="text-2xl font-bold text-[#F9C784]">
                      {currentCourseData.label || activeCourse} Course
                    </h2>
                    <p className="text-[#FFAE75] mt-2">
                      {currentCourseData.description}
                    </p>

                    <div className="mt-4 flex items-center">
                      <div className="bg-[#E25822] text-white px-2 py-1 rounded text-sm font-medium">
                        Bestseller
                      </div>
                      <div className="ml-3 text-[#FF8C42] flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                      <span className="ml-2 text-[#FFAE75] text-sm">
                        (240 reviews)
                      </span>
                    </div>

                    <div className="mt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-3xl font-bold text-[#F9C784]">
                            {currentCourseData.price}
                          </span>
                          <span className="ml-2 text-[#FFAE75] line-through">
                            ₹
                            {parseInt(
                              currentCourseData.price.replace(/[^\d]/g, "")
                            ) * 1.2}
                          </span>
                        </div>
                        {/* <div className="bg-[#E25822] text-white px-2 py-1 rounded text-sm font-medium">
                          20% OFF
                        </div> */}
                      </div>
                      <p className="text-[#FFAE75] text-sm mt-1">
                        Duration: {currentCourseData.duration}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={handleEnrollNow}
                        className="bg-[#FF8C42] hover:bg-[#FFAE75] text-[#2B1615] py-3 px-6 rounded-lg font-medium flex-1 transition-colors"
                      >
                        Buy Now
                      </button>
                      <button
                        onClick={addToCart}
                        className="bg-[#E25822] hover:bg-[#FF8C42] text-white py-3 px-6 rounded-lg font-medium transition-colors"
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={addToWishlist}
                        className="border border-[#FF8C42] text-[#F9C784] hover:bg-[#743C30] py-3 px-6 rounded-lg font-medium transition-colors"
                      >
                        Add to Wishlist
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-semibold text-orange-100 mb-4">
                    Course Features
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentCourseData.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-orange-800 text-orange-200 flex items-center justify-center mr-3">
                          ✓
                        </div>
                        <span className="text-orange-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 border-t border-orange-800 pt-6">
                  <h3 className="text-xl font-semibold text-orange-100 mb-4">
                    Course Description
                  </h3>
                  <p className="text-orange-200">
                    This comprehensive {activeCourse} preparation course is
                    designed to help students excel in their exams. Our expert
                    faculty will guide you through the entire syllabus with
                    in-depth explanations, practical examples, and proven
                    strategies to tackle even the most challenging questions.
                  </p>
                  <p className="text-orange-200 mt-4">
                    The course includes regular assessments, personalized
                    feedback, and dedicated doubt-clearing sessions to ensure
                    that you&apos;re always on track with your preparation. With
                    our structured approach and quality study materials,
                    you&apos;ll be well-prepared to achieve your academic goals.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <WishlistModal />
      <CartModal />
    </div>
  );
};

export default CourseEnrollmentPortal;
