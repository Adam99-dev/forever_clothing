import React, { useContext, useState } from "react";
import CartTotal from "../components/CartTotal";
import { ShopContext } from "../context/ShopContext";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Orders() {
  const { currency, backendUrl, token, navigate } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } },
      );
      if (response.data.success) {
        let allOrderItems = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrderItems.push(item);
          });
        });
        setOrderData(allOrderItems.reverse());
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    loadOrderData();
  }, [token]);

  // Status colors for different order states
  const statusConfig = {
    "Order Placed": { color: "bg-green-500", text: "text-green-700" },
    Shipped: { color: "bg-blue-500", text: "text-blue-700" },
    Delivered: { color: "bg-purple-500", text: "text-purple-700" },
    Processing: { color: "bg-yellow-500", text: "text-yellow-700" },
    Cancelled: { color: "bg-red-500", text: "text-red-700" },
  };

  return (
    <div className="pt-5 sm:pt-14 min-h-[80vh] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            MY
            <span className="text-gray-600 ml-2">ORDERS</span>
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-gray-900 to-gray-600 mt-3 rounded-full"></div>
          <p className="text-gray-500 mt-4">View and manage all your orders</p>
        </div>

        {/* Orders Container */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          {/* Orders Header Stats */}
          <div className="flex flex-wrap items-center justify-between mb-8 pb-6 border-b border-gray-100">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Recent Orders
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                {orderData.length} total orders
              </p>
            </div>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                Filter Orders
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors">
                View All Orders
              </button>
            </div>
          </div>

          {/* Orders List */}
          <div className="space-y-6">
            {orderData.map((item, index) => (
              <div
                key={index}
                className="group p-5 sm:p-6 border border-gray-200 hover:border-gray-300 rounded-xl hover:shadow-md transition-all duration-300 bg-white"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Product Image & Info */}
                  <div className="flex-1 flex flex-col sm:flex-row gap-6">
                    <div className="relative">
                      <img
                        className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg shadow-sm"
                        src={item.image[0]}
                        alt={item.name}
                      />
                      <div className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs font-medium px-2 py-1 rounded-full">
                        {index + 1}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                        {item.name}
                      </h3>

                      <div className="flex flex-wrap items-center gap-4 mt-3 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-600">Price:</span>
                          <span className="text-xl font-bold text-gray-900">
                            {currency}
                            {item.price}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 text-gray-600">
                          <div className="flex items-center gap-1">
                            <span className="text-gray-500">Quantity:</span>
                            <span className="font-medium">1</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-gray-500">Size:</span>
                            <span className="font-medium">{item.size}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-500">Order Date:</span>
                        <span className="font-medium text-gray-700">
                          {new Date(item.date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="text-gray-500">Order Id:</span>
                        <span className="font-medium text-gray-700 text-sm">
                          {item._id.toUpperCase()}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="text-gray-500">Payment:</span>
                        <span className="font-medium text-gray-700">
                          {item.paymentMethod === "COD"
                            ? "Cash on Delivery"
                            : "Online Payment"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status & Actions */}
                  <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-gray-100">
                    {/* Status Badge */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`min-w-3 h-3 rounded-full ${
                          statusConfig[item.status]?.color || "bg-gray-400"
                        }`}
                      ></div>
                      <div className="flex flex-col">
                        <span
                          className={`font-semibold ${
                            statusConfig[item.status]?.text || "text-gray-700"
                          }`}
                        >
                          {item.status || "Order Placed"}
                        </span>
                        <span className="text-xs text-gray-500 mt-1">
                          Estimated delivery:{" "}
                          {(() => {
                            const d = new Date(item.date);
                            d.setDate(d.getDate() + 7);
                            return d.toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            });
                          })()}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button onClick={()=>navigate(`/product/${item._id}`)} className="cursor-pointer px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 rounded-lg transition-all duration-200">
                        View Details
                      </button>
                      <button onClick={loadOrderData} className="cursor-pointer px-5 py-2.5 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-all duration-200 shadow-sm hover:shadow">
                        Track Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State (Optional) */}
          {orderData.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No orders yet
              </h3>
              <p className="text-gray-500 mb-6">
                Start shopping to see your orders here
              </p>
              <button
                onClick={() => navigate("/collection")}
                className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Start Shopping
              </button>
            </div>
          )}

          {/* Pagination/View More */}
          {orderData.length > 4 && (
            <div className="mt-10 pt-6 border-t border-gray-100 text-center">
              <button className="px-6 py-3 text-gray-700 font-medium border border-gray-300 hover:border-gray-400 rounded-lg hover:bg-gray-50 transition-colors">
                Load More Orders
              </button>
            </div>
          )}
        </div>

        {/* Quick Stats (Optional) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Spent</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {currency}1,240.00
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Orders</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">2</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Delivered</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">14</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;