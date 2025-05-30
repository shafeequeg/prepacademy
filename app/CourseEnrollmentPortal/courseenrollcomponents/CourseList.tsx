import React from "react";
import Image from "next/image";
import { SalesSubjects, CourseData } from "./types";

interface CourseListProps {
  activeMainTab: string;
  activeSubTab: string;
  salesCourses: CourseData[];
  salesSubjects: SalesSubjects[];
  handleCourseClick: (courseId: string, isSection: boolean) => void;
}

const CourseList: React.FC<CourseListProps> = React.memo(
  ({
    activeMainTab,
    activeSubTab,
    salesCourses,
    salesSubjects,
    handleCourseClick,
  }) => {
    // Filter courses based on activeMainTab and activeSubTab
    const filteredCourses = salesCourses.filter((course) => {
      const courseMainTab = course.course?.toString() || "";
      const courseSubTab = course.section?.toString() || "";
      return courseMainTab === activeMainTab && courseSubTab === activeSubTab;
    });

    console.log(salesCourses);

    const subjectName =
      salesSubjects.find((sub) => sub.id?.toString() === activeSubTab)
        ?.subject_name || "Courses";

        
    console.log(subjectName);
    console.log(activeSubTab);

    // Render message if no activeSubTab is selected
    if (!activeSubTab) {
      return (
        <div className="bg-gray-800 rounded-lg shadow-md p-6 md:col-span-3 border border-orange-600">
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

    return (
      <div className="bg-gray-800 rounded-lg shadow-md p-6 md:col-span-3 border border-orange-600">
        <h2 className="text-xl font-semibold text-orange-400 mb-6">
          {subjectName} ({filteredCourses.length})
        </h2>
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-orange-400 mb-2">
              No courses available
            </h3>
            <p className="text-orange-300">
              There are currently no courses available for this subject.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="border border-orange-600 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer bg-gray-800 hover:border-orange-500 transform hover:scale-105"
                onClick={() =>
                  handleCourseClick(course.id?.toString() || "", false)
                }
              >
                <div className="relative h-40 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={course.image || "/default-course.jpg"}
                    alt={course.title || "Course image"}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-orange-400 mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-orange-300 mt-1 line-clamp-3 mb-4">
                    {course.course_description}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-semibold text-orange-400">
                      ₹{course.amount}
                    </span>
                    <span className="text-sm text-orange-300">
                      {course.duration}
                    </span>
                  </div>
                  <button className="mt-3 w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-3 py-2 rounded-md text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-medium">
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

export default CourseList;
