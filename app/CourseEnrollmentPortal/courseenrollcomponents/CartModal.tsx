import React, { useState } from "react";
import { ShoppingCart, X, Trash2, Package, Sparkles } from "lucide-react";
import { WishlistItem } from "./types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LoginModal from "@/app/components/login/Login";

interface CartModalProps {
  isOpen: boolean;
  closeModal: () => void;
  cartItems: WishlistItem[];
  removeFromCart: (id: string) => void;
  parsePriceToNumber: (priceString: string | undefined) => number;
  setShowAuthAlert: (show: boolean) => void;
  setShowLoginModal: (show: boolean) => void;
}

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

    const totalAmount = cartItems.reduce((total, item) => {
      return total + parsePriceToNumber(item.price);
    }, 0);

    return (
      <>
        {/* Backdrop with blur effect */}
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeModal}
        />
        
        {/* Modal Container */}
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
          <div className="pointer-events-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col border border-orange-500/30 backdrop-blur-xl animate-in slide-in-from-bottom-4 duration-300">
            
            {/* Header with Glassmorphism Effect */}
            <div className="relative p-6 bg-gradient-to-r from-orange-500/90 to-orange-600/90 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm" />
              <div className="relative flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <ShoppingCart className="text-white" size={32} />
                    {cartItems.length > 0 && (
                      <div className="absolute -top-2 -right-2 bg-white text-orange-600 text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                        {cartItems.length}
                      </div>
                    )}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Shopping Cart
                    </h2>
                    <p className="text-orange-100/80 text-sm">
                      {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={closeModal}
                  className="text-white/80 hover:text-white transition-all duration-200 p-2 hover:bg-white/10 rounded-full"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full py-16 px-6">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl" />
                    <div className="relative bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-full border border-orange-500/30">
                      <Package size={64} className="text-orange-400" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-orange-300 mb-3">
                    Your cart is empty
                  </h3>
                  <p className="text-orange-400/80 text-center max-w-md leading-relaxed">
                    Discover amazing courses and add them to your cart to start your learning adventure!
                  </p>
                  <div className="flex items-center mt-4 text-orange-300/60">
                    <Sparkles size={16} className="mr-2" />
                    <span className="text-sm">Browse our catalog to get started</span>
                  </div>
                </div>
              ) : (
                <div className="p-6">
                  <div className="grid gap-6">
                    {cartItems.map((item, index) => (
                      <div
                        key={item.id}
                        className="group relative bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl overflow-hidden border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
                        style={{
                          animationDelay: `${index * 100}ms`,
                        }}
                      >
                        <div className="flex flex-col lg:flex-row">
                          {/* Image Section */}
                          <div className="relative lg:w-72 h-48 lg:h-auto overflow-hidden">
                            <Image
                              src={item.image || "/default-course.jpg"}
                              alt={item.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/20" />
                            
                            {/* Remove Button - Mobile */}
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="absolute top-3 right-3 lg:hidden bg-red-500/80 hover:bg-red-500 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>

                          {/* Content Section */}
                          <div className="flex-1 p-6 lg:p-8">
                            <div className="flex justify-between items-start mb-4">
                              <div className="flex-1">
                                <h3 className="text-xl lg:text-2xl font-bold text-orange-300 mb-2 line-clamp-2 group-hover:text-orange-200 transition-colors">
                                  {item.title}
                                </h3>
                                <div className="inline-flex items-center bg-gradient-to-r from-orange-900/50 to-orange-800/50 text-orange-200 px-3 py-1 rounded-full text-sm font-medium border border-orange-700/50">
                                  {item.category}
                                </div>
                              </div>
                              
                              {/* Remove Button - Desktop */}
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="hidden lg:flex items-center justify-center w-10 h-10 text-orange-400 hover:text-red-400 hover:bg-red-500/10 rounded-full transition-all duration-200 group-hover:opacity-100 opacity-60"
                              >
                                <Trash2 size={20} />
                              </button>
                            </div>

                            <p className="text-orange-400/80 mb-6 line-clamp-2 leading-relaxed">
                              {item.description}
                            </p>

                            {/* Price and Action Section */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                              <div className="space-y-1">
                                <div className="flex items-baseline space-x-2">
                                  <span className="text-2xl lg:text-3xl font-bold text-orange-300">
                                    ₹{parsePriceToNumber(item.price).toLocaleString("en-IN")}
                                  </span>
                                  <span className="text-orange-400/60 text-sm line-through">
                                    ₹{Math.round(parsePriceToNumber(item.price) * 1.25).toLocaleString("en-IN")}
                                  </span>
                                </div>
                                <p className="text-orange-400/80 text-sm flex items-center">
                                  <span className="mr-2">🕐</span>
                                  Duration: {item.duration}
                                </p>
                              </div>

                              <button
                                onClick={() => handleBuyNow(item)}
                                disabled={loadingItems.has(item.id)}
                                className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 disabled:opacity-75 disabled:cursor-not-allowed disabled:transform-none min-w-[140px]"
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                                
                                {loadingItems.has(item.id) ? (
                                  <div className="flex items-center justify-center space-x-2">
                                    <svg
                                      className="animate-spin h-5 w-5 text-white"
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
                                      />
                                      <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                      />
                                    </svg>
                                    <span>Processing...</span>
                                  </div>
                                ) : (
                                  <span className="relative z-10">Buy Now</span>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer with Summary */}
            {cartItems.length > 0 && (
              <div className="border-t border-orange-500/20 bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-orange-400/80 text-sm">Total Amount</p>
                    <p className="text-2xl font-bold text-orange-300">
                      ₹{totalAmount.toLocaleString("en-IN")}
                    </p>
                    <p className="text-orange-400/60 text-xs">
                      Save ₹{Math.round(totalAmount * 0.25).toLocaleString("en-IN")} on this purchase
                    </p>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button
                      onClick={closeModal}
                      className="px-6 py-3 bg-gray-600/80 hover:bg-gray-600 text-orange-200 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-gray-500/30"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {showLoginModalLocal && (
          <LoginModal
            closeModal={() => setShowLoginModalLocal(false)}
            source="cart-purchase"
            onSuccess={handleLoginSuccess}
          />
        )}
      </>
    );
  }
);

CartModal.displayName = "CartModal";

export default CartModal;