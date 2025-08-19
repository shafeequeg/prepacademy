import React from "react";
import Image from "next/image";
import { SalesSubjects, CourseData } from "./types";

interface SalesSection {
  id?: number | string;
  section_name?: string;
  subject?: number | string; // Add other properties that exist in your sales section data
}

interface CourseListProps {
  activeMainTab: string;
  activeSubTab: string;
  activeCourse: string;
  salesCourses: CourseData[];
  salesSubjects: SalesSubjects[];
  salesCoursessection?: SalesSection[]; // Changed from any[] to SalesSection[]
  handleCourseClick: (courseId: string, isSection: boolean) => void;
  searchTerm?: string;
}

const CourseList: React.FC<CourseListProps> = React.memo(
  ({
    // activeMainTab,
    activeSubTab,
    activeCourse,
    salesCourses,
    salesSubjects,
    salesCoursessection = [],
    handleCourseClick,
    searchTerm = "",
  }) => {
    // Enhanced course click handler with mobile scroll
    const handleViewDetailsClickWithScroll = (course: CourseData) => {
      // Pass the course title to show course details and ensure proper sidebar highlighting
      const courseTitle = course.title || "";
      handleCourseClick(courseTitle, false);
      
      // Add scroll behavior for mobile screens only
      if (window.innerWidth < 768) { // md breakpoint
        setTimeout(() => {
          // Try to find the course details area
          const courseDetailsArea = document.querySelector('.course-details') ||
                                   document.querySelector('[class*="course-details"]') ||
                                   document.querySelector('[class*="md:col-span-3"]');
          
          if (courseDetailsArea) {
            courseDetailsArea.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start',
              inline: 'nearest'
            });
          } else {
            // Fallback: scroll to a reasonable position
            window.scrollTo({
              top: window.innerHeight * 0.6, // Scroll past the sidebar
              behavior: 'smooth'
            });
          }
        }, 100); // Small delay to ensure DOM is updated
      }
    };

    // Function to get filtered courses based on the current selection and search term
    const getFilteredCourses = () => {
      let filteredCourses = [];

      // If there's a search term, search across all courses
      if (searchTerm.trim()) {
        const searchLower = searchTerm.toLowerCase();
        filteredCourses = salesCourses.filter((course) => {
          const title = course.title?.toLowerCase() || "";
          const description = course.description?.toLowerCase() || "";
          const courseDescription = course.course_description?.toLowerCase() || "";
          
          return (
            title.includes(searchLower) ||
            description.includes(searchLower) ||
            courseDescription.includes(searchLower)
          );
        });
      } else {
        // Original filtering logic when no search term
        if (!activeSubTab) {
          return [];
        }

        if (activeCourse) {
          // If a specific section is selected, show courses for that section
          const matchingCourseSection = salesCoursessection.find(
            (courseSection) => courseSection.id?.toString() === activeCourse
          );

          if (!matchingCourseSection) {
            return [];
          }

          filteredCourses = salesCourses.filter(
            (course) =>
              course.section?.toString() === matchingCourseSection.id?.toString()
          );
        } else {
          // If no specific section is selected, show all courses for the subject
          const matchingCourseSections = salesCoursessection.filter(
            (courseSection) => courseSection.subject?.toString() === activeSubTab
          );

          const sectionIds = matchingCourseSections.map((section) =>
            section.id?.toString()
          );

          filteredCourses = salesCourses.filter((course) =>
            sectionIds.includes(course.section?.toString())
          );
        }
      }

      return filteredCourses;
    };

    const filteredCourses = getFilteredCourses();

    console.log("Active Course:", activeCourse);
    console.log("Sales Courses:", salesCourses);
    console.log("Sales Course Section:", salesCoursessection);
    console.log("Filtered Courses:", filteredCourses);

    // Get subject name for display
    const subjectName =
      salesSubjects.find((sub) => sub.id?.toString() === activeSubTab)
        ?.subject_name || "Courses";

    // Get section name for display
    const sectionName =
      salesCoursessection.find(
        (courseSection) => courseSection.id?.toString() === activeCourse
      )?.section_name || "";

    console.log("Subject Name:", subjectName);
    console.log("Section Name:", sectionName);
    console.log("Active Sub Tab:", activeSubTab);

    // Render message if no activeSubTab is selected and no search term
    if (!activeSubTab && !searchTerm.trim()) {
      return (
        <div className="bg-gray-800 rounded-lg shadow-md p-6 md:col-span-3 border border-orange-600 course-content">
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-orange-400 mb-2">
              Select a Category
            </h3>
            <p className="text-orange-300">
              Please select a category from the sidebar to view available
              courses.
            </p>
          </div>
        </div>
      );
    }

    // Determine the header text based on whether a section is selected or searching
    const headerText = searchTerm.trim()
      ? `Search Results for "${searchTerm}"`
      : activeCourse
      ? `${subjectName} - ${sectionName}`
      : subjectName;

    return (
      <div className="bg-gray-800 rounded-lg shadow-md p-6 md:col-span-3 border border-orange-600 course-content">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-orange-400">
            {headerText}
          </h2>
          <p className="text-sm text-orange-300 mt-1">
            {filteredCourses.length} course
            {filteredCourses.length !== 1 ? "s" : ""} available
            {searchTerm.trim() 
              ? " (Search results)" 
              : !activeCourse && " (All sections)"}
          </p>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-orange-400 mb-2">
              {searchTerm.trim() ? "No search results found" : "No courses available"}
            </h3>
            <p className="text-orange-300">
              {searchTerm.trim() 
                ? `No courses found matching "${searchTerm}". Try a different search term.`
                : `There are currently no courses available for this ${activeCourse ? "section" : "subject"}.`
              }
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="border border-orange-600 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer bg-gray-800 hover:border-orange-500 transform hover:scale-105 flex flex-col h-full"
              >
                <div className="relative h- w-full overflow-hidden rounded-t-lg flex-shrink-0 aspect-[4/3]">
                  <Image
                    src={course.image || "/default-course.jpg"}
                    alt={course.title || "Course image"}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-medium text-orange-400 mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-orange-300 mt-1 line-clamp-3 mb-4 flex-grow">
                    {course.course_description}
                  </p>
                  <div className="flex justify-between items-center mt-auto mb-3">
                    <span className="font-semibold text-orange-400">
                      ₹{course.amount}
                    </span>
                    <span className="text-sm text-orange-300">
                      {course.duration}
                    </span>
                  </div>
                  <button
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-3 py-2 rounded-md text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-medium"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent event bubbling
                      handleViewDetailsClickWithScroll(course);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

CourseList.displayName = "CourseList";

export default CourseList;