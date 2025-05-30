import React from "react";
import { ShoppingCart, X } from "lucide-react";
import { WishlistItem } from "./types";
import Image from "next/image";

interface CartModalProps {
  isOpen: boolean;
  closeModal: () => void;
  cartItems: WishlistItem[];
  removeFromCart: (id: string) => void;
  handleCartCheckout: () => void;
  parsePriceToNumber: (priceString: string | undefined) => number;
}

const CartModal: React.FC<CartModalProps> = React.memo(
  ({
    isOpen,
    closeModal,
    cartItems,
    removeFromCart,
    handleCartCheckout,
    parsePriceToNumber,
  }) => {
    if (!isOpen) return null;

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
                            {item.price}
                          </span>
                          <p className="text-xs text-orange-400">
                            Duration: {item.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="border-t border-orange-600 p-6 bg-gray-700">
            {cartItems.length > 0 && (
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-orange-300">
                  Total:
                </h3>
                <span className="text-2xl font-bold text-orange-300">
                  ₹
                  {cartItems.reduce(
                    (total, item) => total + parsePriceToNumber(item.price),
                    0
                  )}
                </span>
              </div>
            )}
            <div className="flex justify-end gap-4">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-gray-600 text-orange-200 rounded-md hover:bg-gray-500 transition-all duration-300 transform hover:scale-105"
              >
                Close
              </button>
              {cartItems.length > 0 && (
                <button
                  onClick={handleCartCheckout}
                  className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-md transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default CartModal;
