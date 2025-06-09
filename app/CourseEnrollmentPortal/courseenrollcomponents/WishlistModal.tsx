import React from "react";
import { Heart, X } from "lucide-react";
import { WishlistItem } from "./types";

interface WishlistModalProps {
  isOpen: boolean;
  closeModal: () => void;
  wishlistItems: WishlistItem[];
  removeFromWishlist: (id: string) => void;
  handleWishlistEnroll: (item: WishlistItem) => void;
}

const WishlistModal: React.FC<WishlistModalProps> = React.memo(({ isOpen, closeModal, wishlistItems, removeFromWishlist, handleWishlistEnroll }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col border border-orange-500">
        <div className="p-4 border-b border-orange-600 flex justify-between items-center bg-gradient-to-r from-orange-600 to-orange-700">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <Heart className="mr-2 text-orange-400" size={24} /> My Wishlist ({wishlistItems.length})
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
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-32 w-full object-cover"
                    />
                  ) : (
                    <div className="h-32 bg-gradient-to-r from-orange-500 to-orange-600"></div>
                  )}
                  <div className="p-4 flex-grow">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-orange-400">{item.title}</h3>
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
                    <p className="text-sm text-orange-300 mt-2 line-clamp-2">{item.description}</p>
                    <div className="flex justify-between items-center mt-4">
                      <div>
                        <span className="font-semibold text-orange-400">{item.price}</span>
                        <p className="text-xs text-orange-300">Duration: {item.duration}</p>
                        {item.uuid && (
                          <p className="text-xs text-orange-300">Course ID: {item.uuid}</p>
                        )}
                      </div>
                      <button
                        onClick={() => handleWishlistEnroll(item)}
                        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-2 rounded-md text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                      >
                        Buy Now
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
            className="px-4 py-2 bg-gray-700 text-orange-300 rounded-md mr-2 hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
          >
            Close
          </button>
          {wishlistItems.length > 0 && (
            <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-md transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              Enroll All
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

WishlistModal.displayName = 'WishlistModal';


export default WishlistModal;