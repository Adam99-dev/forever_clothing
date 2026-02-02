import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import {
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  CreditCard,
  ShoppingCart,
} from "lucide-react";
import CartTotal from "../components/CartTotal";

function Cart() {
  const navigate = useNavigate();
  const { products, currency, cartItems, updateQuantity } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const temp = [];
      for (const items in cartItems) {
        for (const size in cartItems[items]) {
          if (cartItems[items][size] > 0) {
            temp.push({
              _id: items,
              size: size,
              quantity: cartItems[items][size],
            });
          }
        }
      }
      setCartData(temp);
    }
  }, [cartItems, products]);

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cartData.reduce((total, item) => {
      const productData = products.find((product) => product._id === item._id);
      return total + (productData?.price || 0) * item.quantity;
    }, 0);
  };

  const subtotal = calculateSubtotal();

  return (
    <div className="border-t pt-14 px-4 sm:px-8">
      <div className="text-2xl mb-8">
        <Title
          text1={"YOUR"}
          text2={"CART"}
          description={"CHECK ALL ITEMS BEFORE PLACING ORDER"}
        />
      </div>

      {cartData.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="text-gray-400 mb-4">
            <ShoppingCart size={80} />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Your cart is empty
          </h3>
          <p className="text-gray-500 mb-6">
            Add some products to your cart to see them here
          </p>
          <button
            onClick={() => navigate("/collection")}
            className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors cursor-pointer"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Cart Items */}
          <div className="lg:w-2/3">
            <div className="flex flex-col gap-5">
              {cartData.map((items, index) => {
                const productData = products.find(
                  (product) => product._id === items._id,
                );

                return (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row justify-between gap-4 p-4 sm:p-6 border rounded-lg shadow-sm hover:shadow-md transition"
                  >
                    {/* LEFT: PRODUCT INFO */}
                    <div className="flex gap-4">
                      <img
                        className="w-20 h-24 sm:w-24 sm:h-28 object-cover rounded-md"
                        src={productData.image[0]}
                        alt={productData.name}
                      />

                      <div className="flex flex-col justify-between">
                        <div>
                          <p className="text-lg font-semibold text-gray-800">
                            {productData.name}
                          </p>

                          <p className="text-sm text-gray-500 mt-1">
                            Size:{" "}
                            <span className="font-medium text-gray-700">
                              {items.size}
                            </span>
                          </p>
                        </div>

                        <p className="text-base font-bold text-gray-900 mt-2">
                          {currency}
                          {productData.price}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT: QTY + DELETE */}
                    <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4">
                      {/* Quantity selector with plus/minus buttons */}
                      <div className="flex items-center border rounded-lg bg-gray-50 shadow-sm overflow-hidden">
                        {/* Minus button */}
                        <button
                          onClick={() =>
                            updateQuantity(
                              items._id,
                              items.size,
                              Math.max(1, items.quantity - 1),
                            )
                          }
                          className="px-3 py-1.5 hover:bg-gray-200 active:bg-gray-300 transition-colors"
                          aria-label="Decrease quantity"
                          disabled={items.quantity <= 1}
                        >
                          <Minus
                            size={16}
                            className={items.quantity <= 1 ? "opacity-40" : ""}
                          />
                        </button>

                        {/* Quantity display */}
                        <div className="px-4 py-1.5 min-w-[60px] text-center">
                          <span className="text-base font-semibold text-gray-800">
                            {items.quantity}
                          </span>
                        </div>

                        {/* Plus button */}
                        <button
                          onClick={() =>
                            updateQuantity(
                              items._id,
                              items.size,
                              items.quantity + 1,
                            )
                          }
                          className="px-3 py-1.5 hover:bg-gray-200 active:bg-gray-300 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Delete button with improved styling */}
                      <button
                        onClick={() => updateQuantity(items._id, items.size, 0)}
                        className="p-2 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 rounded-lg border border-red-200 hover:border-red-300 transition-all duration-200 hover:scale-105 active:scale-95"
                        aria-label="Remove item"
                        title="Remove from cart"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons Below Cart Items */}
            <div className="mt-8 space-y-4">
              <button
                onClick={() => {
                  navigate("/place-order");
                }}
                disabled={subtotal === 0}
                className={`w-full py-3.5 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  subtotal === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-gray-900 to-black text-white hover:shadow-xl hover:scale-[1.01] active:scale-[0.99]"
                }`}
              >
                {subtotal === 0
                  ? "Cart is Empty"
                  : "Proceed to Secure Checkout"}
                {subtotal > 0 && <CreditCard size={20} />}
              </button>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    navigate("/collection");
                  }}
                  className="cursor-pointer flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <ArrowLeft size={18} />
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Cart Total */}
          <div className="lg:w-1/3 lg:sticky lg:top-24 lg:h-fit">
            <div className="w-full">
              <CartTotal />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
