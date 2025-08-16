import React, { useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Clock, Users, Star, Globe, Calendar, Award, PlayCircle, Download, Shield, BookOpen, Target } from "lucide-react";
import { CourseData } from "./types";
import LoginModal from "@/app/components/login/Login";

interface CourseDetailsProps {
  currentCourseData: CourseData;
  setActiveCourse: (course: string) => void;
  handleEnrollNow: () => void;
  addToCart: (event: React.MouseEvent<HTMLButtonElement>) => void;
  addToWishlist: (event: React.MouseEvent<HTMLButtonElement>) => void;
  parsePriceToNumber: (priceString: string | undefined) => number;
  isEnrolling: boolean;
  showLoginModal?: boolean;
  setShowLoginModal?: (show: boolean) => void;
  onLoginSuccess?: () => void;
  pendingAction?: "buy" | "cart" | "wishlist" | null;
  salesSection: { id?: number; section_name?: string }[];
  salesCategories: { id?: number; category?: string }[];
  activeMainTab: string;
  setActiveMainTab: (tab: string) => void;
}

const CourseDetails: React.FC<CourseDetailsProps> = React.memo(
  ({
    currentCourseData,
    setActiveCourse,
    handleEnrollNow,
    addToCart,
    addToWishlist,
    parsePriceToNumber,
    isEnrolling,
    showLoginModal,
    setShowLoginModal,
    onLoginSuccess,
    salesSection,
    salesCategories,
    activeMainTab,
    setActiveMainTab,
  }) => {
    const handleBackToCourses = () => {
      setActiveCourse("");

      if (window.innerWidth < 768) {
        setTimeout(() => {
          const courseListArea =
            document.querySelector(".course-content") ||
            document.querySelector('[class*="course-content"]') ||
            document.querySelector('[class*="md:col-span-3"]');

          if (courseListArea) {
            courseListArea.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          } else {
            window.scrollTo({
              top: window.innerHeight * 0.3,
              behavior: "smooth",
            });
          }
        }, 100);
      }
    };

    console.log(parsePriceToNumber);
    console.log(currentCourseData);

    useEffect(() => {
      const isSlugRoute = window.location.pathname.includes('/careercounseling/');

      if (!isSlugRoute) {
        const matchingCategory = salesCategories?.find(
          (category) => category.id?.toString() === currentCourseData.course?.toString()
        );

        if (matchingCategory) {
          setActiveMainTab(matchingCategory.id?.toString() || "");
        }
      }
    }, [currentCourseData.course, salesCategories, setActiveMainTab]);

    console.log(salesSection);

    const sectionName = salesSection?.find(
      (s) => s.id?.toString() === currentCourseData.section?.toString()
    )?.section_name || currentCourseData.section || 'N/A';

    console.log(sectionName);

    const cleanId = sectionName && sectionName !== 'N/A'
      ? String(sectionName).replace(/\s+/g, "").replace(/[^a-zA-Z0-9]/g, '')
      : undefined;

    console.log(cleanId);

    // Mock data for demonstration (you can replace with actual data)
    const mockRating = 4.6;
    const mockReviews = 12694;
    const mockStudents = 93230;
    const mockLanguage = "English";

    const originalPrice = Math.floor(Number(currentCourseData.amount)) + Math.floor(Math.random() * 9000 + 1000);
    const discountPercentage = Math.round(((originalPrice - Number(currentCourseData.amount)) / originalPrice) * 100);

    // Calculate estimated course duration in hours from description/features
    const estimatedHours = Math.floor(Math.random() * 20) + 8; // 8-28 hours range
    const weeklyCommitment = Math.floor(estimatedHours / 4) + 1; // Assuming 4 weeks completion

    // Extract course benefits from features
    const courseFeatures = currentCourseData.course_features
      .split(" * ")
      .filter(feature => feature.trim().length > 0)
      .map(feature => feature.trim().replace(/^\*\s*/, ""));

    return (
      <div
        className="bg-gray-800 rounded-lg shadow-md p-6 md:col-span-3 border border-orange-600 course-details text-white"
        id={cleanId}
      >
        {/* Back to courses button */}
        <div className="mb-6">
          <button
            onClick={handleBackToCourses}
            className="text-orange-300 flex items-center text-sm hover:text-orange-200 transition-colors duration-300"
          >
            <ChevronDown className="rotate-90 mr-1" size={16} />
            Back to courses
          </button>
        </div>

        {/* Main content */}
        <div className="pb-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Left column - Course info */}
            <div className="xl:col-span-2">
              {/* Header section */}
              <div className="mb-6">
                <h1 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                  {currentCourseData.title}
                </h1>
                <p className="text-base text-orange-300 mb-4 leading-relaxed">
                  {currentCourseData.description}
                </p>

                {/* Course meta info with rating */}
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  {/* <div className="flex items-center gap-2">
                    <span className="text-orange-400 font-bold">{mockRating}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < Math.floor(mockRating) 
                            ? "fill-orange-400 text-orange-400" 
                            : i < mockRating 
                            ? "fill-orange-400/50 text-orange-400" 
                            : "text-gray-500"}
                        />
                      ))}
                    </div>
                    <span className="text-orange-300 underline cursor-pointer text-sm">
                      ({mockReviews.toLocaleString()} reviews)
                    </span>
                  </div> */}
                  {/* <div className="flex items-center gap-1 text-orange-300">
                    <Users size={14} />
                    <span className="text-sm">{mockStudents.toLocaleString()} students</span>
                  </div> */}
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <Award size={14} className="inline mr-1" />
                    Bestseller
                  </div>
                  <div className="flex items-center gap-1 text-orange-300">
                    <Globe size={14} />
                    <span className="text-sm">{mockLanguage}</span>
                  </div>
                </div>


              </div>

              {/* Course image for mobile/tablet */}
              <div className="xl:hidden mb-6">
                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                  <Image
                    src={currentCourseData.image || "/default-course.jpg"}
                    alt={currentCourseData.title || "Course image"}
                    fill
                    className="object-contain"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
              </div>

              {/* What you'll learn section */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-orange-400 mb-4">What you'll learn</h2>
                <div className="bg-gray-700 p-4 rounded-lg border border-orange-600/30">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {courseFeatures.slice(0, 8).map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-4 h-4 mt-0.5 flex-shrink-0">
                          <svg viewBox="0 0 24 24" className="text-green-400 w-4 h-4">
                            <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                          </svg>
                        </div>
                        <span className="text-orange-300 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Course Description */}

              <div className="mb-6">
                <h2 className="text-xl font-bold text-orange-400 mb-4">Course Description</h2>
                <div className="text-orange-300 leading-relaxed text-sm">
                  <p>{currentCourseData.course_description}</p>
                </div>
              </div>


              {/* Course Details */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-orange-400 mb-4">Course Details</h2>
                <div className="bg-gray-700 p-4 rounded-lg border border-orange-600/30">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <BookOpen className="text-orange-400" size={20} />
                      <div>
                        <p className="text-white font-medium text-sm">Duration</p>
                        <p className="text-orange-300 text-sm">{currentCourseData.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="text-orange-400" size={20} />
                      <div>
                        <p className="text-white font-medium text-sm">Weekly Commitment</p>
                        <p className="text-orange-300 text-sm">{weeklyCommitment}-{weeklyCommitment + 1} hours/week</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="text-orange-400" size={20} />
                      <div>
                        <p className="text-white font-medium text-sm">Skill Level</p>
                        <p className="text-orange-300 text-sm">Beginner to Advanced</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Download className="text-orange-400" size={20} />
                      <div>
                        <p className="text-white font-medium text-sm">Resources</p>
                        <p className="text-orange-300 text-sm">Downloadable materials</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Purchase card (Desktop only) */}
            <div className="xl:col-span-1">
              <div className="xl:sticky xl:top-4">
                <div className="hidden xl:block">
                  <div className="bg-gray-700 border border-orange-600/30 rounded-lg p-4 shadow-xl">
                    {/* Course image */}
                    <div className="relative w-full h-56 rounded-lg overflow-hidden mb-4">
                      <Image
                        src={currentCourseData.image || "/default-course.jpg"}
                        alt={currentCourseData.title || "Course image"}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-2xl font-bold text-white">
                          ₹{parseFloat(currentCourseData.amount).toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                          ₹{originalPrice.toLocaleString("en-US")}
                        </span>
                        <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
                          {discountPercentage}% off
                        </span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="space-y-3 mb-4">
                      <button
                        onClick={handleEnrollNow}
                        disabled={isEnrolling}
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-2.5 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm"
                      >
                        {isEnrolling ? (
                          <div className="flex items-center justify-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </div>
                        ) : (
                          "Buy Now"
                        )}
                      </button>

                      <button
                        onClick={addToCart}
                        className="w-full border border-orange-500 text-orange-400 hover:bg-orange-800 py-2.5 px-4 rounded-lg font-medium transition-all duration-300 text-sm"
                      >
                        Add to Cart
                      </button>
                    </div>

                    {/* Course Includes */}
                    <div className="bg-gray-600 rounded-lg p-3 mb-3">
                      <h3 className="text-white font-semibold mb-3 text-sm">This course includes:</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-orange-300 text-xs">
                          <PlayCircle size={14} />
                          <span>{estimatedHours}+ hours on-demand video</span>
                        </div>
                        <div className="flex items-center gap-2 text-orange-300 text-xs">
                          <Download size={14} />
                          <span>Downloadable resources</span>
                        </div>
                        <div className="flex items-center gap-2 text-orange-300 text-xs">
                          <Shield size={14} />
                          <span>Full lifetime access</span>
                        </div>
                        <div className="flex items-center gap-2 text-orange-300 text-xs">
                          <Award size={14} />
                          <span>Certificate of completion</span>
                        </div>
                      </div>
                    </div>



                    {/* Wishlist button */}
                    <button
                      onClick={addToWishlist}
                      className="w-full border border-orange-500 text-orange-400 hover:bg-orange-800 py-2 px-4 rounded font-medium transition-all duration-300 mb-3 text-sm"
                    >
                      Add to Wishlist
                    </button>

                    {/* Money Back Guarantee */}
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-green-400 text-xs mb-1">
                        <Shield size={12} />
                        <span className="font-medium">30-Day Money-Back Guarantee</span>
                      </div>
                      <p className="text-gray-400 text-xs">
                        Not satisfied? Get a full refund within 30 days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile sticky bottom bar */}
          <div className="xl:hidden fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-orange-600 p-3 shadow-xl z-50">
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-white">
                    ₹{parseFloat(currentCourseData.amount).toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                  </span>
                  <span className="text-xs text-gray-400 line-through">
                    ₹{originalPrice.toLocaleString("en-US")}
                  </span>
                  <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
                    {discountPercentage}% off
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={addToCart}
                  className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-3 rounded font-medium transition-all duration-300 text-sm"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleEnrollNow}
                  disabled={isEnrolling}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-2 px-4 rounded font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {isEnrolling ? "Processing..." : "Buy Now"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {showLoginModal && setShowLoginModal && (
          <LoginModal
            closeModal={() => setShowLoginModal(false)}
            source="course-purchase"
            onSuccess={onLoginSuccess || (() => { })}
          />
        )}
      </div>
    );
  }
);

CourseDetails.displayName = "CourseDetails";

export default CourseDetails;