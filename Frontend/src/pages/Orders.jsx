import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

function Orders() {
  const { currency, backendUrl, token, navigate } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrderItems = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            allOrderItems.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date,
            });
          });
        });
        setOrderData(allOrderItems.reverse());
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  const statusConfig = {
    "Order Placed": { color: "bg-green-500", text: "text-green-700" },
    Processing: { color: "bg-yellow-500", text: "text-yellow-700" },
    Shipped: { color: "bg-blue-500", text: "text-blue-700" },
    Delivered: { color: "bg-purple-500", text: "text-purple-700" },
    Cancelled: { color: "bg-red-500", text: "text-red-700" },
  };

  return (
    <div className="pt-6 sm:pt-14 min-h-[80vh] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            MY <span className="text-gray-600">ORDERS</span>
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-gray-900 to-gray-600 mt-3 rounded-full" />
          <p className="text-gray-500 mt-4">View and manage all your orders</p>
        </div>

        {/* Orders Card */}
        <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8 pb-6 border-b">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Recent Orders
              </h2>
              <p className="text-gray-500 text-sm">
                {orderData.length} total orders
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                Filter
              </button>
              <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
                View All
              </button>
            </div>
          </div>

          {/* Orders */}
          <div className="space-y-6">
            {orderData.map((item, index) => (
              <div
                key={index}
                className="border rounded-xl p-4 sm:p-6 hover:shadow-md transition"
              >
                <div className="flex flex-col xl:flex-row gap-4 sm:gap-6">
                  {/* Product */}
                  <div className="flex-1 flex flex-col sm:flex-row gap-4">
                    <img
                      src={item.image[0]}
                      alt={item.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-lg"
                    />

                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.name}</h3>

                      <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                        <span>
                          Price:{" "}
                          <strong className="text-gray-900">
                            {currency}
                            {item.price}
                          </strong>
                        </span>
                        <span>Size: {item.size}</span>
                        <span>Qty: 1</span>
                      </div>

                      <div className="flex flex-wrap gap-x-2 gap-y-1 mt-3 text-sm break-all">
                        <span className="text-gray-500">Order ID:</span>
                        <span className="font-medium">{item._id}</span>
                        <span>•</span>
                        <span>
                          {item.paymentMethod === "COD"
                            ? "Cash on Delivery"
                            : "Online Payment"}
                        </span>
                      </div>

                      <p className="text-sm text-gray-500 mt-1">
                        {new Date(item.date).toLocaleDateString("en-IN")}
                      </p>
                    </div>
                  </div>

                  {/* Status & Actions */}
                  <div className="flex flex-col sm:flex-row xl:flex-col justify-between items-start sm:items-center xl:items-end gap-3 pt-4 xl:pt-0 border-t xl:border-t-0">
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-3 w-3 rounded-full ${
                          statusConfig[item.status]?.color || "bg-gray-400"
                        }`}
                      />
                      <span
                        className={`font-semibold ${
                          statusConfig[item.status]?.text || "text-gray-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                      <button
                        onClick={() => navigate(`/product/${item._id}`)}
                        className="w-full sm:w-auto px-5 py-2 border rounded-lg hover:bg-gray-50"
                      >
                        View Details
                      </button>
                      <button
                        onClick={loadOrderData}
                        className="w-full sm:w-auto px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
                      >
                        Track Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty */}
          {orderData.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-700">
                No orders yet
              </h3>
              <p className="text-gray-500 mt-2">
                Start shopping to see orders
              </p>
              <button
                onClick={() => navigate("/collection")}
                className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-lg"
              >
                Start Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Orders;
