import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Logging into admin panel...");
    setIsLoading(true);

    try {
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });

      if (response.data.success) {
        setToken(response.data.token);

        toast.update(toastId, {
          render: "Welcome Admin 🚀",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
      } else {
        toast.update(toastId, {
          render: response.data.message,
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.update(toastId, {
        render: "Invalid credentials or server error",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Login to Admin Panel
        </h1>

        <form onSubmit={submitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Email Address
            </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              placeholder="Enter Admin Email"
              required
            />
          </div>

          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Password
            </p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              placeholder="Enter Password"
              required
            />
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className={`mt-2 w-full py-2 px-4 rounded-md text-white 
            flex items-center justify-center gap-2
            ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black hover:bg-gray-900"
            }`}
          >
            {isLoading && (
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            )}
            {isLoading ? "Authenticating..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
