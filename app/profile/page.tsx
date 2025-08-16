"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import axiosInstance from "../components/apiconfig/axios";
import { API_URLS } from "../components/apiconfig/api_urls";

interface User {
  id: string;
  uuid: string;
  full_name: string;
  email: string;
  bio?: string;
  phone_number?: string;
  location?: string;
  gender?: string;
  dob?: string;
  occupation?: string;
  exam_target?: string;
  program?: string;
  firebase_user_id?: string;
}

const ProfilePage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState<User | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get(API_URLS.USERS.GET_USERS);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditProfile = () => {
    if (currentUser) {
      setEditFormData({ ...currentUser });
      setIsEditModalOpen(true);
    }
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setEditFormData(null);
  };

  const handleInputChange = (field: string, value: string) => {
    if (!editFormData) return;

    setEditFormData({
      ...editFormData,
      [field]: value
    });
  };

  const handleUpdateProfile = async () => {
    if (!editFormData || !currentUser) return;

    setIsUpdating(true);
    try {
      const response = await axiosInstance.patch(
        API_URLS.USERS.PATCH_USER_BY_UUID(currentUser.uuid),
        editFormData
      );

      const updatedUser = response.data;
      setCurrentUser(updatedUser);

      setUsers(users.map(user =>
        user.id === updatedUser.id ? updatedUser : user
      ));

      const localCurrentUserStr = localStorage.getItem("currentUser");
      if (localCurrentUserStr) {
        const localCurrentUser = JSON.parse(localCurrentUserStr);
        localStorage.setItem("currentUser", JSON.stringify({
          ...localCurrentUser,
          ...updatedUser
        }));
      }

      handleCloseEditModal();
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      try {
        const localCurrentUserStr = localStorage.getItem("currentUser");
        if (localCurrentUserStr) {
          const localCurrentUser = JSON.parse(localCurrentUserStr);
          const foundUser = users.find((u) => u.id === localCurrentUser.id);
          if (foundUser) {
            setCurrentUser(foundUser);
          }
        }
      } catch {
        setCurrentUser(null);
      }
    }
  }, [users]);

  if (loading) {
    return (
      <div className="h-screen bg-[#2B1615] flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-orange-500 rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-bold text-orange-100">PrepAcademy</h2>
          <p className="text-orange-300 text-xs">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="h-screen bg-[#2B1615] flex items-center justify-center px-4">
        <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/20 backdrop-blur-xl border border-orange-700/30 rounded-2xl p-6 max-w-sm w-full text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-orange-100 mb-2">
            Welcome to PrepAcademy
          </h1>
          <p className="text-orange-300 mb-6 text-sm">
            Please sign in to access your learning profile.
          </p>
          <button
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
            onClick={() => (window.location.href = "/")}
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  const formattedDOB = currentUser.dob
    ? new Date(currentUser.dob).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    : "Not specified";

  // Choose avatar image based on gender
  const avatarSrc =
    currentUser.gender?.toLowerCase() === "female"
      ? "/profile/female.png"
      : "/profile/male.jpg";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2B1615] via-[#1A0E0D] to-[#0F0706] overflow-y-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Modern Profile Card */}
        <div className="bg-gradient-to-br from-orange-900/15 via-orange-800/10 to-red-900/15 backdrop-blur-2xl border border-orange-700/20 rounded-3xl overflow-hidden shadow-2xl mt-6 md:mt-20 relative">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-red-500/5 to-transparent rounded-full blur-2xl"></div>
          
          {/* Profile Header Section */}
          <div className="relative">
            {/* Header Background with Gradient */}
            <div className="h-48 bg-gradient-to-r from-orange-600 via-orange-500 to-red-500 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"></div>
              </div>
              
              {/* Edit Button - Fixed Clickable Area */}
              <button
                onClick={handleEditProfile}
                className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5 transition-all duration-300 flex items-center gap-2 cursor-pointer group z-10"
              >
                <svg
                  className="w-4 h-4 text-white group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                <span className="text-white text-sm font-medium">Edit Profile</span>
              </button>
            </div>

            {/* Profile Content Overlay */}
            <div className="relative -mt-24 px-8 pb-8">
              <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6">
                
                {/* Avatar Section - Fixed Display */}
                <div className="relative group">
                  <div className="w-40 h-40 rounded-2xl border-4 border-white/30 shadow-2xl overflow-hidden bg-gradient-to-br from-orange-200 to-orange-300 p-1">
                    <div className="w-full h-full rounded-xl overflow-hidden relative">
                      <Image
                        src={avatarSrc}
                        alt="Profile avatar"
                        fill
                        className="object-cover object-center scale-110"
                        sizes="160px"
                        priority
                      />
                    </div>
                  </div>
                  {/* Online Status Indicator */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-xl border-4 border-white/30 flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* User Info Section */}
                <div className="text-center lg:text-left flex-1 lg:ml-6">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
                    <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight">
                      {currentUser.full_name}
                    </h1>
                    
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-orange-100 text-sm mb-4">
                      <div className="flex items-center gap-2 bg-orange-500/10 px-3 py-1.5 rounded-lg border border-orange-500/20">
                        <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium">{currentUser.email}</span>
                      </div>
                      
                      {currentUser.location && (
                        <div className="flex items-center gap-2 bg-red-500/10 px-3 py-1.5 rounded-lg border border-red-500/20">
                          <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="font-medium">{currentUser.location}</span>
                        </div>
                      )}
                    </div>

                    {currentUser.bio && (
                      <p className="text-orange-200/80 text-sm leading-relaxed max-w-2xl">
                        {currentUser.bio}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Details Grid */}
          <div className="px-8 pb-8">
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Personal Information Card */}
              <div className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-white flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  Personal Information
                </h3>

                <div className="space-y-4">
                  <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-4 hover:bg-orange-500/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-orange-300 text-xs font-medium uppercase tracking-wide">Date of Birth</p>
                        <p className="text-white text-sm font-medium">{formattedDOB}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4 hover:bg-red-500/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-red-300 text-xs font-medium uppercase tracking-wide">Gender</p>
                        <p className="text-white text-sm font-medium">{currentUser.gender || "Not specified"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information Card */}
              <div className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-white flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  Contact Details
                </h3>

                <div className="space-y-4">
                  <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4 hover:bg-blue-500/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-blue-300 text-xs font-medium uppercase tracking-wide">Email Address</p>
                        <p className="text-white text-sm font-medium break-all">{currentUser.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-4 hover:bg-purple-500/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-purple-300 text-xs font-medium uppercase tracking-wide">Phone Number</p>
                        <p className="text-white text-sm font-medium">{currentUser.phone_number || "Not specified"}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-4 hover:bg-green-500/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-green-300 text-xs font-medium uppercase tracking-wide">Location</p>
                        <p className="text-white text-sm font-medium">{currentUser.location || "Not specified"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified Edit Profile Modal */}
      {isEditModalOpen && editFormData && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gradient-to-br from-orange-900/95 to-red-900/95 backdrop-blur-xl border border-orange-500/30 rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Edit Profile</h2>
                <button
                  onClick={handleCloseEditModal}
                  className="text-orange-300 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Simplified Edit Form - Only Essential Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-orange-200 text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    value={editFormData.full_name}
                    onChange={(e) => handleInputChange('full_name', e.target.value)}
                    className="w-full bg-white/5 border border-orange-500/30 rounded-xl px-4 py-3 text-white placeholder-orange-300/50 focus:outline-none focus:border-orange-400 focus:bg-white/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-orange-200 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={editFormData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full bg-white/5 border border-orange-500/30 rounded-xl px-4 py-3 text-white placeholder-orange-300/50 focus:outline-none focus:border-orange-400 focus:bg-white/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-orange-200 text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={editFormData.phone_number || ''}
                    onChange={(e) => handleInputChange('phone_number', e.target.value)}
                    className="w-full bg-white/5 border border-orange-500/30 rounded-xl px-4 py-3 text-white placeholder-orange-300/50 focus:outline-none focus:border-orange-400 focus:bg-white/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-orange-200 text-sm font-medium mb-2">Location</label>
                  <input
                    type="text"
                    value={editFormData.location || ''}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full bg-white/5 border border-orange-500/30 rounded-xl px-4 py-3 text-white placeholder-orange-300/50 focus:outline-none focus:border-orange-400 focus:bg-white/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-orange-200 text-sm font-medium mb-2">Date of Birth</label>
                  <input
                    type="date"
                    value={editFormData.dob ? new Date(editFormData.dob).toISOString().split('T')[0] : ''}
                    onChange={(e) => handleInputChange('dob', e.target.value)}
                    className="w-full bg-white/5 border border-orange-500/30 rounded-xl px-4 py-3 text-white placeholder-orange-300/50 focus:outline-none focus:border-orange-400 focus:bg-white/10 transition-all"
                  />
                </div>

                {/* <div>
                  <label className="block text-orange-200 text-sm font-medium mb-2">Gender</label>
                  <select
                    value={editFormData.gender || ''}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="w-full bg-white/5 border border-orange-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-400 focus:bg-white/10 transition-all"
                  >
                    <option value="" className="bg-orange-900">Select Gender</option>
                    <option value="male" className="bg-orange-900">Male</option>
                    <option value="female" className="bg-orange-900">Female</option>
                    <option value="other" className="bg-orange-900">Other</option>
                  </select>
                </div> */}

                {/* Modal Actions */}
                <div className="flex gap-3 pt-6 border-t border-orange-500/30">
                  <button
                    onClick={handleCloseEditModal}
                    className="flex-1 bg-white/5 hover:bg-white/10 border border-orange-500/30 text-orange-100 font-medium py-3 px-4 rounded-xl transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdateProfile}
                    disabled={isUpdating}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
                  >
                    {isUpdating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Updating...
                      </>
                    ) : (
                      'Save Changes'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;