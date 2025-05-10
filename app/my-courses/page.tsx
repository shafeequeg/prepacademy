'use client';

import { useEffect, useState } from 'react';
import { FiSearch, FiBookOpen } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import axiosInstance from '../components/apiconfig/axios';
import { API_URLS } from '../components/apiconfig/api_urls';

// Types
interface CoursePayment {
  course_uuid: string;
  course_details: {
    title: string;
    price: string;
    duration: string;
  };
  order_id: string;
  payment_id: string;
  payment_status: string;
  timestamp: string;
  user_uuid: string;
}

interface SaleCourse {
  course_uuid: string;
  title: string;
  price: string;
  duration: string;
  thumbnail?: string;
  description?: string;
}

const MyCourses = () => {
  const [salesCourses, setSalesCourses] = useState<SaleCourse[]>([]);
  const [purchasedCourses, setPurchasedCourses] = useState<CoursePayment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch sales courses for additional course information
    const fetchSaleCourses = async () => {
      try {
        const response = await axiosInstance.get(API_URLS.SALEPAGE_COURSE.GET_SALEPAGE_COURSE);
        setSalesCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    // Get purchased courses from localStorage
    const getPurchasedCourses = () => {
      try {
        const coursePaymentsStr = localStorage.getItem('course_payments');
        if (coursePaymentsStr) {
          const coursePayments = JSON.parse(coursePaymentsStr);
          // Filter for successful payments only
          const successfulPayments = coursePayments.filter(
            (payment: CoursePayment) => payment.payment_status === 'success'
          );
          setPurchasedCourses(successfulPayments);
        }
      } catch (error) {
        console.error("Error retrieving course payments from localStorage:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSaleCourses();
    getPurchasedCourses();
  }, []);

  // Filter courses based on search term
  const filteredCourses = purchasedCourses.filter(course => 
    course.course_details.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Find thumbnail from salesCourses based on course_uuid
  const getCourseThumbnail = (courseUuid: string) => {
    const saleCourse = salesCourses.find(course => course.course_uuid === courseUuid);
    return saleCourse?.thumbnail || '/images/default-course.jpg';
  };


  
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header with gradient background similar to the image */}
      <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-[#F55D3E] text-white p-8 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold tracking-wider">My Learning Journey</h1>
          <p className="mt-2 text-red-100">Continue where you left off and build your skills</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search with improved styling */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="Search my courses" 
              className="w-full pl-5 pr-12 py-3 border-0 rounded-full shadow-md focus:ring-2 focus:ring-red-400 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute right-4 top-3.5 text-red-500">
              <FiSearch size={20} />
            </button>
          </div>
        </div>

        {/* Courses Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <div key={course.course_uuid} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
                  <div className="relative h-48 bg-gray-200">
                    <Image 
                      src={getCourseThumbnail(course.course_uuid)} 
                      alt={course.course_details.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                    <div className="absolute bottom-3 right-3 bg-[#F55D3E] text-white text-xs font-bold px-2 py-1 rounded-full">
                      {course.course_details.duration}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-xl mb-2 text-gray-800">{course.course_details.title}</h3>
                    <p className="text-sm text-gray-500 mb-4 flex items-center">
                      <span className="mr-1">📅</span>
                      Purchased: {new Date(course.timestamp).toLocaleDateString()}
                    </p>
                    <div className="flex items-center mb-3">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-red-400 to-[#F55D3E] h-2.5 rounded-full" style={{ width: '0%' }}></div>
                      </div>
                      <span className="ml-2 text-xs font-medium text-gray-500">0%</span>
                    </div>
                    <div className="mt-4">
                      <button className="w-full py-3 bg-gradient-to-r from-orange-400 to-[#F55D3E] text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all flex items-center justify-center">
                        <FiBookOpen className="mr-2" />
                        Continue Learning
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600 text-lg">No courses found. Try adjusting your search.</p>
              </div>
            )}
          </div>
        )}

        {/* No courses message with improved styling */}
        {!isLoading && purchasedCourses.length === 0 && (
          <div className="text-center py-14 bg-white rounded-xl shadow-lg p-8 mx-auto max-w-2xl">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiBookOpen size={40} className="text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Learning Library is Empty</h3>
            <p className="text-gray-600 mb-8">Discover and enroll in courses that align with your career goals and interests.</p>
            <Link href="/courses">
              <span className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all font-medium">
                Explore Courses
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;