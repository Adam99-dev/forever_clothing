import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import {
  Check,
  Truck,
  Shield,
  CreditCard,
  Package,
  Sparkles,
} from "lucide-react";

function CartTotal() {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  // Safeguard against undefined / non-numeric values
  const subtotal = Number(getCartAmount?.() || 0);
  const shipping = subtotal > 100 ? 0 : Number(delivery_fee || 0);
  const total = subtotal + shipping;

  const freeShippingThreshold = 100;
  const freeShippingRemaining = Math.max(0, freeShippingThreshold - subtotal);

  const formatCurrency = (value) => {
    const num = Number(value);
    return isNaN(num) ? "0.00" : num.toFixed(2);
  };

  const safeSubtotal   = formatCurrency(subtotal);
  const safeShipping   = formatCurrency(shipping);
  const safeTotal      = formatCurrency(total);
  const safeRemaining  = formatCurrency(freeShippingRemaining);

  const progressPercentage = Math.min(
    100,
    Math.max(0, (subtotal / freeShippingThreshold) * 100)
  );

  return (
    <div className="w-full bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 shadow-lg p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-gray-900 text-white rounded-lg">
            <Package size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Order Summary</h2>
            <p className="text-gray-500 text-sm mt-1">
              Review your items before checkout
            </p>
          </div>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-6">
        {/* Subtotal */}
        <div className="flex justify-between items-center py-3">
          <span className="text-gray-700 font-medium">Subtotal</span>
          <span className="text-xl font-bold text-gray-900">
            {currency}
            {safeSubtotal}
          </span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between items-center py-4 border-y border-gray-100 bg-gray-50 rounded-lg px-4">
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-full ${shipping === 0 ? "bg-green-100" : "bg-blue-100"}`}
            >
              <Truck
                size={20}
                className={shipping === 0 ? "text-green-600" : "text-blue-600"}
              />
            </div>
            <div>
              <span className="text-gray-700 font-medium block">Shipping</span>
              {shipping === 0 ? (
                <span className="text-green-600 text-sm font-medium">
                  Free shipping unlocked!
                </span>
              ) : (
                <span className="text-gray-500 text-sm">Standard delivery</span>
              )}
            </div>
          </div>

          {shipping === 0 ? (
            <div className="flex items-center gap-1.5 bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm font-semibold">
              <Sparkles size={14} />
              FREE
            </div>
          ) : (
            <div className="text-right">
              <div className="text-lg font-semibold text-gray-900">
                {currency}
                {safeShipping}
              </div>
              {subtotal > 0 && (
                <div className="text-xs text-blue-600 font-medium mt-1">
                  Only {currency}
                  {safeRemaining} away from free shipping
                </div>
              )}
            </div>
          )}
        </div>

        {/* Free Shipping Progress */}
        {subtotal > 0 && subtotal < freeShippingThreshold && (
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <span className="font-medium text-gray-700">
                Free Shipping Progress
              </span>
              <span className="text-sm font-semibold text-gray-800">
                {currency}
                {safeRemaining} to go
              </span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-gray-900 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>{currency}0</span>
              <span className="font-medium">
                Free at {currency}
                {freeShippingThreshold}
              </span>
              <span>{currency}
                {safeSubtotal}</span>
            </div>
          </div>
        )}

        {/* Grand Total */}
        <div className="flex justify-between items-center py-5 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl px-5">
          <div>
            <div className="text-xl font-bold text-gray-900">Total</div>
            <div className="text-sm text-gray-500">incl. taxes & fees</div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-black text-gray-900">
              {currency}
              {safeTotal}
            </div>
            {shipping === 0 && subtotal > 0 && (
              <div className="text-sm text-green-600 font-medium mt-1 flex items-center justify-end gap-1.5">
                <Check size={16} />
                Free shipping included
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Trust & Security */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex flex-wrap justify-center gap-5 mb-4 text-sm">
          <div className="flex items-center gap-1.5 text-gray-700">
            <Shield size={18} className="text-green-600" />
            <span>Secure</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-700">
            <CreditCard size={18} className="text-blue-600" />
            <span>Encrypted</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-700">
            <Truck size={18} className="text-purple-600" />
            <span>Fast Delivery</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 text-center">
          256-bit SSL • No card details stored • 7-day returns
        </p>
      </div>

      {/* Delivery Estimate */}
      {subtotal > 0 && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <div className="flex items-start gap-3">
            <Truck size={18} className="text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-blue-800">
                Estimated Delivery
              </p>
              <p className="text-sm text-blue-700">
                {shipping === 0 ? "2–3 business days" : "3–5 business days"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartTotal;