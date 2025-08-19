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
    <div className="min-h-screen bg-[#2B1615]">
      {/* Header with background using logo colors */}
      <div className="bg-orange-600 text-white p-8 shadow-xl">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold tracking-wider mt-28 text-white">My Learning Journey</h1>
          <p className="mt-2 text-red-100">Continue where you left off and build your skills</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search with improved styling using orange theme */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search my courses"
              className="w-full pl-5 pr-12 py-3 border-0 rounded-full shadow-lg bg-slate-800 text-white placeholder-slate-400 focus:ring-2 focus:ring-teal-400 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute right-4 top-3.5 text-teal-400 hover:text-teal-300 transition-colors">
              <FiSearch size={20} />
            </button>
          </div>
        </div>

        {/* Courses Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-400"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <div key={course.course_uuid} className="bg-slate-800 rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl border-2 border-slate-700 hover:border-teal-500">
                  <div className="relative h-48 bg-slate-700">
                    <Image
                      src={getCourseThumbnail(course.course_uuid)}
                      alt={course.course_details.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-slate-900 opacity-60"></div>
                    <div className="absolute bottom-3 right-3 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {course.course_details.duration}
                    </div>
                  </div>
                  <div className="p-5 bg-slate-800">
                    <h3 className="font-bold text-xl mb-2 text-white">{course.course_details.title}</h3>
                    <p className="text-sm text-slate-300 mb-4 flex items-center">
                      <span className="mr-1">📅</span>
                      Purchased: {new Date(course.timestamp).toLocaleDateString()}
                    </p>
                    <div className="flex items-center mb-3">
                      <div className="w-full bg-orange-800/50 rounded-full h-2.5 shadow-inner">
                        <div className="bg-gradient-to-r from-orange-400 via-red-400 to-amber-400 h-2.5 rounded-full shadow-sm" style={{ width: '0%' }}></div>
                      </div>
                      <span className="ml-2 text-xs font-medium text-orange-300">0%</span>
                    </div>
                    <div className="mt-4">
                      <button className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        <FiBookOpen className="mr-2" />
                        Continue Learning
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-slate-300 text-lg">No courses found. Try adjusting your search.</p>
              </div>
            )}
          </div>
        )}

        {/* No courses message with improved styling using orange theme */}
        {!isLoading && purchasedCourses.length === 0 && (
          <div className="text-center py-14 bg-slate-800 rounded-xl shadow-2xl p-8 mx-auto max-w-2xl border-2 border-slate-700">
            <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <FiBookOpen size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Your Learning Library is Empty</h3>
            <p className="text-slate-300 mb-8">Discover and enroll in courses that align with your career goals and interests.</p>
            <Link href="/CourseEnrollmentPortal">
              <span className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
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