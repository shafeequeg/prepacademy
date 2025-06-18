import React, { useState } from "react";
import { ShoppingCart, X } from "lucide-react";
import { WishlistItem } from "./types";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CartModalProps {
  isOpen: boolean;
  closeModal: () => void;
  cartItems: WishlistItem[];
  removeFromCart: (id: string) => void;
  parsePriceToNumber: (priceString: string | undefined) => number;
  setShowAuthAlert: (show: boolean) => void;
  setShowLoginModal: (show: boolean) => void;
}

// interface AuthAlertModalProps {
//   isOpen: boolean;
//   closeModal: () => void;
//   openLoginModal: () => void;
//   showLoginButton?: boolean; // Add this prop
// }

const CartModal: React.FC<CartModalProps> = React.memo(
  ({
    isOpen,
    closeModal,
    cartItems,
    removeFromCart,
    parsePriceToNumber,
    setShowAuthAlert,
    // setShowLoginModal,
  }) => {
    const router = useRouter();
    const [loadingItems, setLoadingItems] = useState<Set<string>>(new Set());

    if (!isOpen) return null;


    const handleBuyNow = async (item: WishlistItem) => {
      // Start loading for this specific item
      setLoadingItems((prev) => new Set(prev).add(item.id));

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
            setShowAuthAlert(true);
            closeModal();
            return;
          }
        } catch (error) {
          console.error("Error parsing user data from localStorage:", error);
          setLoadingItems((prev) => {
            const newSet = new Set(prev);
            newSet.delete(item.id);
            return newSet;
          });
          setShowAuthAlert(true);
          closeModal();
          return;
        }
      } else {
        setLoadingItems((prev) => {
          const newSet = new Set(prev);
          newSet.delete(item.id);
          return newSet;
        });
        setShowAuthAlert(true);
        closeModal();
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

    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col border border-orange-500">
          <div className="p-6 border-b border-orange-600 bg-gradient-to-r from-orange-500 to-orange-600">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <ShoppingCart className="mr-2 text-orange-200" size={28} />
                My Cart ({cartItems.length})
              </h2>
              <button
                onClick={closeModal}
                className="text-orange-200 hover:text-orange-100 transition-colors"
              >
                <X size={28} />
              </button>
            </div>
          </div>
          <div className="overflow-y-auto p-6 flex-grow bg-gray-800">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingCart
                  size={80}
                  className="mx-auto text-orange-600 mb-4"
                />
                <h3 className="text-2xl font-semibold text-orange-300 mb-2">
                  Your cart is empty
                </h3>
                <p className="text-orange-400">
                  Browse our courses and add them to start your learning
                  journey!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-orange-600"
                  >
                    <div className="relative w-full sm:w-48 h-40 sm:h-auto">
                      <Image
                        src={item.image || "/default-course.jpg"}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-grow p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-semibold text-orange-300">
                          {item.title}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-orange-400 hover:text-orange-300 transition-colors"
                        >
                          <X size={20} />
                        </button>
                      </div>
                      <span className="inline-block text-xs bg-orange-900 text-orange-200 px-2 py-1 rounded-full mt-2">
                        {item.category}
                      </span>
                      <p className="text-sm text-orange-400 mt-2 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <div>
                          <span className="text-lg font-semibold text-orange-300">
                            ₹
                            {parsePriceToNumber(item.price).toLocaleString(
                              "en-IN"
                            )}
                          </span>
                          <p className="text-xs text-orange-400">
                            Duration: {item.duration}
                          </p>
                        </div>
                        <button
                          onClick={() => handleBuyNow(item)}
                          disabled={loadingItems.has(item.id)}
                          className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-md transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-75 disabled:cursor-not-allowed disabled:transform-none"
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
          <div className="border-t border-orange-600 p-6 bg-gray-700">
            <div className="flex justify-end gap-4">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-gray-600 text-orange-200 rounded-md hover:bg-gray-500 transition-all duration-300 transform hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

CartModal.displayName = "CartModal";

export default CartModal;
