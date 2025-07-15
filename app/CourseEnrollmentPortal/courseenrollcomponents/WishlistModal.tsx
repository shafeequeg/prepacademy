import React, { useState } from "react";
import { Heart, X } from "lucide-react";
import { WishlistItem } from "./types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LoginModal from "@/app/components/login/Login";

interface WishlistModalProps {
  isOpen: boolean;
  closeModal: () => void;
  wishlistItems: WishlistItem[];
  removeFromWishlist: (id: string) => void;
  parsePriceToNumber: (priceString: string | undefined) => number;
  setShowAuthAlert: (show: boolean) => void;
  setShowLoginModal: (show: boolean) => void;
}

const WishlistModal: React.FC<WishlistModalProps> = React.memo(
  ({
    isOpen,
    closeModal,
    wishlistItems,
    removeFromWishlist,
    parsePriceToNumber,
    setShowAuthAlert,
    // setShowLoginModal,
  }) => {
    const router = useRouter();
    const [loadingItems, setLoadingItems] = useState<Set<string>>(new Set());
    const [showLoginModalLocal, setShowLoginModalLocal] = useState(false);
    const [pendingItem, setPendingItem] = useState<WishlistItem | null>(null);

    if (!isOpen) return null;

    const proceedToPayment = (item: WishlistItem) => {
      // Get fresh user data from localStorage
      const userData =
        localStorage.getItem("user") || localStorage.getItem("currentUser");

      if (!userData) {
        console.error("No user data found after login");
        setShowAuthAlert(true);
        return;
      }

      let user_uuid = "";
      try {
        const parsedData = JSON.parse(userData);
        user_uuid = parsedData.uuid || "";

        if (!user_uuid) {
          console.error("No user UUID found in user data");
          setShowAuthAlert(true);
          return;
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
        setShowAuthAlert(true);
        return;
      }

      try {
        const courseUuid = item.uuid || crypto.randomUUID();
        const itemPrice = parsePriceToNumber(item.price);
        const originalPrice = Math.round(itemPrice * 1.25);
        const discount = originalPrice - itemPrice;

        router.push(
          `/payment/${courseUuid}?title=${encodeURIComponent(
            item.title
          )}&price=₹${itemPrice.toLocaleString(
            "en-IN"
          )}&duration=${encodeURIComponent(
            item.duration
          )}&originalPrice=₹${originalPrice.toLocaleString(
            "en-IN"
          )}&discount=₹${discount.toLocaleString(
            "en-IN"
          )}&user_uuid=${encodeURIComponent(
            user_uuid
          )}&uuid=${encodeURIComponent(courseUuid)}`
        );

        closeModal();
      } finally {
        // Stop loading after navigation
        setTimeout(() => {
          setLoadingItems((prev) => {
            const newSet = new Set(prev);
            newSet.delete(item.id);
            return newSet;
          });
        }, 1000);
      }
    };

    const handleBuyNow = async (item: WishlistItem) => {
      // Start loading for this specific item
      setLoadingItems((prev) => new Set(prev).add(item.id));

      // Check if user is logged in
      const userData = localStorage.getItem("user");
      let user_uuid = "";

      if (userData) {
        try {
          const parsedData = JSON.parse(userData);
          user_uuid = parsedData.uuid || "";
          if (!user_uuid) {
            setLoadingItems((prev) => {
              const newSet = new Set(prev);
              newSet.delete(item.id);
              return newSet;
            });
            // Set pending item and show login modal
            setPendingItem(item);
            setShowLoginModalLocal(true);
            return;
          }
        } catch (error) {
          console.error("Error parsing user data from localStorage:", error);
          setLoadingItems((prev) => {
            const newSet = new Set(prev);
            newSet.delete(item.id);
            return newSet;
          });
          // Set pending item and show login modal
          setPendingItem(item);
          setShowLoginModalLocal(true);
          return;
        }
      } else {
        setLoadingItems((prev) => {
          const newSet = new Set(prev);
          newSet.delete(item.id);
          return newSet;
        });
        // Set pending item and show login modal
        setPendingItem(item);
        setShowLoginModalLocal(true);
        return;
      }

      // User is logged in, proceed with payment
      proceedToPayment(item);
    };

    const handleLoginSuccess = () => {
      setShowLoginModalLocal(false);

      // Small delay to ensure login state is properly set
      setTimeout(() => {
        if (pendingItem) {
          // Re-add loading state for the pending item
          setLoadingItems((prev) => new Set(prev).add(pendingItem.id));
          proceedToPayment(pendingItem);
          setPendingItem(null);
        }
      }, 100);
    };

    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col border border-orange-500">
          <div className="p-4 border-b border-orange-600 flex justify-between items-center bg-gradient-to-r from-orange-600 to-orange-700">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Heart className="mr-2 text-orange-400" size={24} /> My Wishlist (
              {wishlistItems.length})
            </h2>
            <button
              onClick={closeModal}
              className="text-orange-300 hover:text-orange-200 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <div className="overflow-y-auto p-4 flex-grow bg-gray-900">
            {wishlistItems.length === 0 ? (
              <div className="text-center py-12">
                <Heart size={64} className="mx-auto text-orange-700 mb-4" />
                <h3 className="text-xl font-medium text-orange-400 mb-2">
                  Your wishlist is empty
                </h3>
                <p className="text-orange-300">
                  Browse courses and add them to your wishlist
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {wishlistItems.map((item) => (
                  <div
                    key={item.id}
                    className="border border-orange-600 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-gray-800 flex flex-col"
                  >
                    {item.image ? (
                      <div className="relative w-full h-32">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="h-32 bg-gradient-to-r from-orange-500 to-orange-600"></div>
                    )}
                    <div className="p-4 flex-grow">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-orange-400">
                          {item.title}
                        </h3>
                        <button
                          onClick={() => removeFromWishlist(item.id)}
                          className="text-orange-300 hover:text-orange-200 transition-colors"
                        >
                          <X size={18} />
                        </button>
                      </div>
                      <span className="text-xs bg-orange-800 text-orange-300 px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                      <p className="text-sm text-orange-300 mt-2 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <div>
                          <span className="font-semibold text-orange-400">
                            ₹
                            {parsePriceToNumber(item.price).toLocaleString(
                              "en-IN"
                            )}
                          </span>
                          <p className="text-xs text-orange-300">
                            Duration: {item.duration}
                          </p>
                          {item.uuid && (
                            <p className="text-xs text-orange-300">
                              Course ID: {item.uuid}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => handleBuyNow(item)}
                          disabled={loadingItems.has(item.id)}
                          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-2 rounded-md text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-75 disabled:cursor-not-allowed disabled:transform-none"
                        >
                          {loadingItems.has(item.id) ? (
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="border-t border-orange-600 p-4 flex justify-end bg-gray-800">
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-gray-700 text-orange-300 rounded-md hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>

        {showLoginModalLocal && (
          <LoginModal
            closeModal={() => setShowLoginModalLocal(false)}
            source="wishlist-purchase"
            onSuccess={handleLoginSuccess}
          />
        )}
      </div>
    );
  }
);

WishlistModal.displayName = "WishlistModal";

export default WishlistModal;
