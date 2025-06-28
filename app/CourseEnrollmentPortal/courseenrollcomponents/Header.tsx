import React from "react";
import { Heart, Home } from "lucide-react";
import { WishlistItem } from "./types";

interface HeaderProps {
  openWishlistModal: () => void;
  openCartModal: () => void;
  wishlistItems: WishlistItem[];
  cartItems: WishlistItem[];
  cartButtonRef: React.RefObject<HTMLButtonElement | null>;
  wishlistButtonRef: React.RefObject<HTMLButtonElement | null>;
}

const Header: React.FC<HeaderProps> = React.memo(
  ({
    openWishlistModal,
    openCartModal,
    wishlistItems,
    cartItems,
    cartButtonRef,
    wishlistButtonRef,
  }) => {
    const handleHomeClick = () => {
      // Navigate to home - you can replace this with your routing logic
      window.location.href = "/";
    };

    return (
      <header className="bg-gray-800 py-4 sticky top-0 z-40 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleHomeClick}
              className="flex items-center space-x-1 text-orange-300 hover:text-orange-200 transition-colors p-2 rounded-lg hover:bg-gray-700"
              aria-label="Go to home"
            >
              <Home size={24} />
              {/* <span className="hidden sm:inline">Home</span> */}
            </button>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-orange-400">
                Course Enrollment Portal
              </h1>
              <p className="text-xs sm:text-sm text-orange-300">
                Find and enroll in the best courses
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              ref={wishlistButtonRef}
              onClick={openWishlistModal}
              className="relative flex items-center space-x-1 text-orange-300 hover:text-orange-200 transition-colors"
            >
              <Heart size={24} />
              <span className="hidden sm:inline">Wishlist</span>
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {wishlistItems.length}
                </span>
              )}
            </button>
            <button
              ref={cartButtonRef}
              onClick={openCartModal}
              className="relative flex items-center space-x-1 text-orange-300 hover:text-orange-200 transition-colors"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m0-2h6v2m-3-2v2"
                />
              </svg>
              <span className="hidden sm:inline">Cart</span>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
    );
  }
);

Header.displayName = "Header";

export default Header;
