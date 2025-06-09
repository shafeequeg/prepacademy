import React from "react";
import { ShoppingCart, X } from "lucide-react";

interface AuthAlertModalProps {
  isOpen: boolean;
  closeModal: () => void;
  openLoginModal: () => void;
}

const AuthAlertModal: React.FC<AuthAlertModalProps> = React.memo(({ isOpen, closeModal, openLoginModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg shadow-2xl w-full max-w-md overflow-hidden flex flex-col border border-orange-500">
        <div className="p-4 border-b border-orange-600 flex justify-between items-center bg-gradient-to-r from-orange-600 to-orange-700">
          <h2 className="text-xl font-bold text-white flex items-center">
            <span className="mr-2">🔐</span> Authentication Required
          </h2>
          <button
            onClick={closeModal}
            className="text-white hover:text-orange-200 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6 bg-gray-900">
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-orange-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart size={32} className="text-orange-400" />
            </div>
            <h3 className="text-xl font-medium text-orange-400 mb-2">
              Access Your Learning Journey
            </h3>
            <p className="text-orange-300">
              Please log in to purchase this course and begin your learning
              adventure. Your educational growth is just one step away!
            </p>
          </div>
        </div>
        <div className="border-t border-orange-600 p-4 flex justify-center gap-4 bg-gray-800">
          <button
            onClick={() => {
              closeModal();
              openLoginModal();
            }}
            className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-md font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Log In
          </button>
          <button
            onClick={closeModal}
            className="px-6 py-2 bg-gray-700 text-orange-300 rounded-md hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
});

AuthAlertModal.displayName = 'AuthAlertModal'; 


export default AuthAlertModal;