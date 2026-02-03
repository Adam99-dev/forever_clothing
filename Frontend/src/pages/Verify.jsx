import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

function Verify() {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const [status, setStatus] = useState("loading"); // loading | success | failed

  const verifyPayment = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + "/api/order/verifyStripe",
        { orderId, success },
        { headers: { token } }
      );

      if (response.data.success === "true") {
        setCartItems({});
        setStatus("success");
        setTimeout(() => navigate("/orders"), 2000);
      } else {
        setStatus("failed");
        toast.error(response.data.message);
        setTimeout(() => navigate("/cart"), 2000);
      }
    } catch (error) {
      setStatus("failed");
      toast.error("Payment verification failed");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {/* Inline animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0 }
            to { opacity: 1 }
          }

          @keyframes scaleIn {
            from { transform: scale(0.85); opacity: 0 }
            to { transform: scale(1); opacity: 1 }
          }
        `}
      </style>

      <div
        className="bg-white p-8 rounded-2xl shadow-xl w-[350px] text-center"
        style={{ animation: "fadeIn 0.6s ease-out" }}
      >
        {status === "loading" && (
          <>
            <Loader2 className="mx-auto h-12 w-12 text-blue-500 animate-spin" />
            <h2 className="mt-4 text-xl font-semibold">Verifying Payment</h2>
            <p className="text-gray-500 mt-1">Please wait...</p>
          </>
        )}

        {status === "success" && (
          <>
            <CheckCircle
              className="mx-auto h-14 w-14 text-green-500"
              style={{ animation: "scaleIn 0.4s ease-out" }}
            />
            <h2 className="mt-4 text-xl font-semibold text-green-600">
              Payment Successful
            </h2>
            <p className="text-gray-500 mt-1">
              Redirecting to your orders...
            </p>
          </>
        )}

        {status === "failed" && (
          <>
            <XCircle
              className="mx-auto h-14 w-14 text-red-500"
              style={{ animation: "scaleIn 0.4s ease-out" }}
            />
            <h2 className="mt-4 text-xl font-semibold text-red-600">
              Payment Failed
            </h2>
            <p className="text-gray-500 mt-1">
              Redirecting back to cart...
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Verify;
