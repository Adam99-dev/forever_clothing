import React, { useContext, useState } from "react";
import axios from "axios";
import CartTotal from "../components/CartTotal";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

function PlaceOrder() {
  const [method, setMethod] = useState("cod");
  const {
    products,
    delivery_fee,
    backendUrl,
    navigate,
    token,
    setCartItems,
    getCartAmount,
    cartItems,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    let orderItems = [];
    for (const item in cartItems) {
      for (const size in cartItems[item]) {
        if (cartItems[item][size] > 0) {
          const itemInfo = structuredClone(
            products.find((product) => product._id === item),
          );
          if (itemInfo) {
            itemInfo.quantity = cartItems[item][size];
            itemInfo.size = size;
            orderItems.push(itemInfo);
          }
        }
      }
    }

    let orderData = {
      address: formData,
      items: orderItems,
      amount:
        getCartAmount() < 100
          ? getCartAmount() + delivery_fee
          : getCartAmount(),
    };

    switch (method) {
      case "cod": {
        const response = await axios.post(
          backendUrl + "/api/order/place",
          orderData,
          { headers: { token } },
        );

        if (response.data.success) {
          setCartItems({});
          navigate("/orders");
        } else {
          toast.error(response.data.message);
        }
        break;
      }

      case "stripe": {
        const responseStripe = await axios.post(
          backendUrl + "/api/order/stripe",
          orderData,
          { headers: { token } },
        );

        if (responseStripe.data.success && responseStripe.data.session_url) {
          window.location.href = responseStripe.data.session_url;
        } else {
          toast.error(responseStripe.data.message || "Stripe payment failed");
        }
        break;
      }
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col lg:flex-row justify-between gap-6 pt-5 sm:pt-14 min-h-[80vh]"
    >
      {/* Left Column - Delivery Form */}
      <div className="flex flex-col gap-6 w-full lg:max-w-2xl">
        <div className="my-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            DELIVERY <span className="text-gray-600 ml-2">INFORMATION</span>
          </h1>
          <div className="h-1 w-20 bg-gray-900 mt-2"></div>
        </div>

        <div className="space-y-6">
          {/* Name Row */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                First Name
              </label>
              <input
                required
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={onChangeHandler}
                className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Last Name
              </label>
              <input
                required
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={onChangeHandler}
                className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Email Address
            </label>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={onChangeHandler}
              className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Phone Number
            </label>
            <input
              required
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={onChangeHandler}
              className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
            />
          </div>

          {/* Shipping Address */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 pt-4 border-t border-gray-200">
              Shipping Address
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Street Address
              </label>
              <input
                required
                type="text"
                name="street"
                placeholder="Enter your street address"
                value={formData.street}
                onChange={onChangeHandler}
                className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  City
                </label>
                <input
                  required
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={onChangeHandler}
                  className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  State / Province
                </label>
                <input
                  required
                  type="text"
                  name="state"
                  placeholder="Enter state or province"
                  value={formData.state}
                  onChange={onChangeHandler}
                  className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  ZIP / Postal Code
                </label>
                <input
                  required
                  type="text"
                  name="postalCode"
                  placeholder="Enter ZIP or postal code"
                  value={formData.postalCode}
                  onChange={onChangeHandler}
                  className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Country
                </label>
                <select
                  required
                  name="country"
                  value={formData.country}
                  onChange={onChangeHandler}
                  className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition bg-white"
                >
                  <option value="">Select your country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AU">Australia</option>
                  <option value="IN">India</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:min-w-96">
        <CartTotal />
      </div>

      {/* Payment Methods */}
      <div className="mt-8 lg:mt-0 lg:max-w-2xl">
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Payment Method
          </h2>

          <div className="space-y-4">
            {/* Stripe */}
            <label
              htmlFor="stripe"
              className="flex items-center p-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition cursor-pointer"
            >
              <input
                type="radio"
                id="stripe"
                name="payment"
                value="stripe"
                checked={method === "stripe"}
                onChange={() => setMethod("stripe")}
                className="h-5 w-5 text-gray-900 accent-orange-500"
              />
              <div className="ml-3 flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium text-gray-900">Stripe</span>
                    <p className="text-sm text-gray-500 mt-1">
                      Pay securely with your credit/debit card
                    </p>
                  </div>
                  <div className="text-gray-900 font-semibold text-sm">
                    Visa • MasterCard • Amex
                  </div>
                </div>
              </div>
            </label>

            {/* COD */}
            <label
              htmlFor="cod"
              className="flex items-center p-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition cursor-pointer"
            >
              <input
                type="radio"
                id="cod"
                name="payment"
                value="cod"
                checked={method === "cod"}
                onChange={() => setMethod("cod")}
                className="h-5 w-5 text-gray-900 accent-orange-500"
              />
              <div className="ml-3 flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium text-gray-900">
                      Cash on Delivery
                    </span>
                    <p className="text-sm text-gray-500 mt-1">
                      Pay when you receive your order
                    </p>
                  </div>
                  <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                    Available
                  </div>
                </div>
              </div>
            </label>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full p-4 bg-gray-900 text-white font-semibold rounded-2xl hover:bg-gray-800 transition cursor-pointer"
              >
                PLACE ORDER
              </button>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">
                Secure Payment:
              </span>{" "}
              All transactions are encrypted and secure. Your payment
              information is never stored on our servers.
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
