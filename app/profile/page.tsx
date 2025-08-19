"use client";
import { useEffect, useState } from "react";
// import Image from "next/image";
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

  // New state for inline editing
  const [editingField, setEditingField] = useState<string | null>(null);
  const [fieldValue, setFieldValue] = useState<string>("");
  const [isFieldUpdating, setIsFieldUpdating] = useState(false);

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

  // New function to handle inline field editing
  const handleFieldEdit = (fieldName: string, currentValue: string) => {
    setEditingField(fieldName);
    setFieldValue(currentValue || "");
  };

  // New function to cancel field editing
  const handleCancelFieldEdit = () => {
    setEditingField(null);
    setFieldValue("");
  };

  // New function to save individual field
  const handleSaveField = async (fieldName: string) => {
    if (!currentUser || !editingField) return;

    setIsFieldUpdating(true);
    try {
      const updateData = {
        ...currentUser,
        [fieldName]: fieldValue
      };

      const response = await axiosInstance.patch(
        API_URLS.USERS.PATCH_USER_BY_UUID(currentUser.uuid),
        updateData
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

      setEditingField(null);
      setFieldValue("");
    } catch (error) {
      console.error("Error updating field:", error);
    } finally {
      setIsFieldUpdating(false);
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

  // Component for rendering editable field
  const EditableField = ({
    fieldName,
    label,
    value,
    icon,
    iconColor,
    type = "text"
  }: {
    fieldName: string;
    label: string;
    value: string;
    icon: React.ReactNode;
    iconColor: string;
    type?: string;
  }) => {
    const isEditing = editingField === fieldName;

    return (
      <div className="flex items-center justify-between py-2 border-b border-orange-700/20">
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <div className={`w-6 h-6 ${iconColor} rounded-md flex items-center justify-center`}>
            {icon}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-orange-200 text-xs font-medium">{label}</p>
            {isEditing ? (
              <div className="flex items-center gap-2 mt-1">
                {type === "date" ? (
                  <input
                    type="date"
                    value={fieldValue}
                    onChange={(e) => setFieldValue(e.target.value)}
                    className="bg-white/10 border border-orange-500/50 rounded-md px-2 py-1 text-white text-sm focus:outline-none focus:border-orange-400 min-w-0 flex-1"
                    autoFocus
                  />
                ) : (
                  <input
                    type={type}
                    value={fieldValue}
                    onChange={(e) => setFieldValue(e.target.value)}
                    className="bg-white/10 border border-orange-500/50 rounded-md px-2 py-1 text-white text-sm focus:outline-none focus:border-orange-400 min-w-0 flex-1"
                    autoFocus
                  />
                )}
                <div className="flex items-center gap-1 flex-shrink-0">
                  <button
                    onClick={() => handleSaveField(fieldName)}
                    disabled={isFieldUpdating}
                    className="bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 rounded-md p-1 text-green-400 hover:text-green-300 transition-colors disabled:opacity-50"
                  >
                    {isFieldUpdating ? (
                      <div className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={handleCancelFieldEdit}
                    className="bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 rounded-md p-1 text-red-400 hover:text-red-300 transition-colors"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-white text-sm truncate">{value}</p>
            )}
          </div>
        </div>
        {!isEditing && (
          <button
            onClick={() => handleFieldEdit(fieldName, value)}
            className="text-orange-400 hover:text-orange-300 transition-colors flex-shrink-0 ml-2"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
        )}
      </div>
    );
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

  // const formattedDOB = currentUser.dob
  //   ? new Date(currentUser.dob).toLocaleDateString("en-US", {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   })
  //   : "Not specified";

  // Choose avatar image based on gender
  // const avatarSrc =
  //   currentUser.gender?.toLowerCase() === "female"
  //     ? "/profile/female.png"
  //     : "/profile/male.jpg";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2B1615] via-[#1A0E0D] to-[#0F0706] ">
      <div className="max-w-2xl mx-auto px-4 py-4">
        {/* Main Profile Card */}
        <div className="bg-gradient-to-br from-orange-900/10 to-red-900/10 backdrop-blur-xl border border-orange-700/20 rounded-2xl p-4 shadow-2xl relative overflow-hidden mt-28">

          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/5 to-transparent rounded-full blur-2xl"></div>

          {/* Header with Avatar and Basic Info */}
          <div className="relative z-10 text-center mb-4">
            {/* Edit Button */}
            <button
              onClick={handleEditProfile}
              className="absolute top-0 right-0 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 rounded-lg px-3 py-1.5 transition-all duration-300 flex items-center gap-1.5 text-orange-200 hover:text-white text-sm"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit All
            </button>

            {/* Avatar */}
            <div className="relative inline-block mb-3">
              <div className="w-20 h-20 rounded-full border-3 border-orange-500/30 shadow-xl overflow-hidden bg-gradient-to-br from-orange-200 to-orange-300 p-0.5 mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-white flex items-center justify-center">
                  {currentUser.gender?.toLowerCase() === "female" ? (
                    // Female Icon
                    <svg className="w-16 h-16" viewBox="0 0 512 512" fill="black" xmlns="http://www.w3.org/2000/svg">
                      {/* Circle Border */}
                      <circle cx="256" cy="256" r="240" stroke="black" strokeWidth="24" fill="none" />
                      {/* Hair + Head */}
                      <path d="M180 200c0-50 35-90 76-90s76 40 76 90v20c0 40-30 70-76 70s-76-30-76-70v-20z" fill="black" />
                      {/* Shoulders */}
                      <path d="M120 400c20-70 80-100 136-100s116 30 136 100v40H120v-40z" fill="black" />
                    </svg>
                  ) : (
                    // Male Icon
                    <svg className="w-16 h-16" viewBox="0 0 512 512" fill="black" xmlns="http://www.w3.org/2000/svg">
                      {/* Circle Border */}
                      <circle cx="256" cy="256" r="240" stroke="black" strokeWidth="24" fill="none" />
                      {/* Hair + Head */}
                      <path d="M180 190c0-45 35-80 76-80s76 35 76 80v25c0 35-30 65-76 65s-76-30-76-65v-25z" fill="black" />
                      {/* Beard */}
                      <path d="M180 210c5 40 30 70 76 70s71-30 76-70" stroke="black" strokeWidth="10" fill="none" />
                      {/* Shoulders + Shirt */}
                      <path d="M120 400c20-70 80-100 136-100s116 30 136 100v40H120v-40z" fill="black" />
                      <path d="M248 300v140M264 300v140" stroke="white" strokeWidth="12" />
                    </svg>
                  )}
                </div>
              </div>
              {/* Online Status */}
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white/30 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>

            {/* User Name and Handle */}
            <h1 className="text-xl font-bold text-white mb-1">
              {currentUser.full_name}
            </h1>
            <p className="text-orange-300 text-sm">
              @{currentUser.email.split('@')[0]}
            </p>
          </div>

          {/* Profile Details Grid with Inline Editing */}
          <div className="space-y-2">
            <EditableField
              fieldName="full_name"
              label="Username"
              value={currentUser.full_name}
              iconColor="bg-orange-500/20"
              icon={
                <svg className="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
            />

            <EditableField
              fieldName="email"
              label="Email"
              value={currentUser.email}
              iconColor="bg-blue-500/20"
              type="email"
              icon={
                <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />

            <EditableField
              fieldName="location"
              label="Address"
              value={currentUser.location || "Not specified"}
              iconColor="bg-green-500/20"
              icon={
                <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            />

            <EditableField
              fieldName="phone_number"
              label="Phone"
              value={currentUser.phone_number || "Not specified"}
              iconColor="bg-purple-500/20"
              type="tel"
              icon={
                <svg className="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }
            />

            <EditableField
              fieldName="dob"
              label="DOB"
              value={currentUser.dob ? new Date(currentUser.dob).toISOString().split('T')[0] : ""}
              iconColor="bg-red-500/20"
              type="date"
              icon={
                <svg className="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
            />
          </div>
        </div>
      </div>

      {/* Edit Profile Modal - Unchanged */}
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