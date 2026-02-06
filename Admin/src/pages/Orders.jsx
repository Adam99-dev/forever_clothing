import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl, currency } from "../App";
import { Package } from "lucide-react";

function Orders({ token }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      setLoading(true);

      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } },
      );

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message || "Failed to fetch orders");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const statusHandler = async (e, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/update",
        { orderId, status: e.target.value },
        { headers: { token } },
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h3 className="text-2xl font-semibold mb-6">Orders</h3>

      {loading ? (
        <div className="space-y-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse bg-white rounded-lg shadow-md p-5 flex flex-col lg:flex-row gap-6"
            >
              {/* Icon */}
              <div className="h-7 w-7 bg-gray-300 rounded"></div>

              {/* Details */}
              <div className="flex-1 space-y-2">
                <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
                <div className="h-3 w-1/3 bg-gray-300 rounded"></div>
                <div className="h-3 w-1/2 bg-gray-300 rounded"></div>

                <div className="space-y-1">
                  <div className="h-3 w-2/3 bg-gray-300 rounded"></div>
                  <div className="h-3 w-1/2 bg-gray-300 rounded"></div>
                  <div className="h-3 w-1/3 bg-gray-300 rounded"></div>
                </div>

                <div className="h-4 w-32 bg-gray-300 rounded"></div>
              </div>

              {/* Status */}
              <div className="h-10 w-40 bg-gray-300 rounded-md"></div>
            </div>
          ))}
        </div>
      ) : orders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-5 flex flex-col lg:flex-row gap-6"
            >
              {/* Icon */}
              <div className="flex items-start">
                <Package className="text-gray-700" size={28} />
              </div>

              {/* Order Details */}
              <div className="flex-1 text-sm text-gray-700 space-y-1">
                <p className="font-medium">
                  {order.items.map((item, i) => (
                    <span key={i}>
                      {item.name} × {item.quantity}
                      {item.size && ` (${item.size})`}
                      {i < order.items.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>

                <p className="text-xs text-gray-500">Order ID: {order._id}</p>

                <p>
                  <span className="font-medium">Name:</span>{" "}
                  {order.address.firstName} {order.address.lastName}
                </p>

                <div className="text-gray-600">
                  <p>{order.address.street}</p>
                  <p>
                    {order.address.city}, {order.address.state},{" "}
                    {order.address.country}
                  </p>
                  <p>{order.address.pincode}</p>
                  <p>Phone: {order.address.phone}</p>
                </div>

                <p>Email: {order.address.email}</p>
                <p>Payment Method: {order.paymentMethod}</p>
                <p>Items: {order.items.length}</p>

                <p
                  className={`font-medium ${
                    order.payment ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {order.payment ? "Paid" : "Not Paid"}
                </p>

                <p>Date: {new Date(order.date).toLocaleDateString()}</p>

                <p className="font-semibold">
                  Amount: {currency}
                  {order.amount}
                </p>
              </div>

              {/* Status Dropdown */}
              <div className="flex items-center">
                <select
                  onChange={(e) => {
                    statusHandler(e, order._id);
                  }}
                  className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  value={order.status}
                >
                  <option>Order Placed</option>
                  <option>Processing</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                  <option>Cancelled</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
