import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";

function Login() {
  const [currentState, setCurrentState] = useState("Sign Up");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    const toastId = toast.loading(
      currentState === "Login" ? "Logging in..." : "Creating account..."
    );

    setIsLoading(true);

    try {
      const url =
        currentState === "Sign Up"
          ? "/api/user/register"
          : "/api/user/login";

      const payload =
        currentState === "Sign Up"
          ? { name, email, password }
          : { email, password };

      const response = await axios.post(backendUrl + url, payload);

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);

        toast.update(toastId, {
          render: "Success 🎉",
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
        render: "Something went wrong!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token) navigate("/");
  }, [token]);

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <div className="h-0.5 w-10 bg-gray-500"></div>
        <p className="prata-regular text-3xl">{currentState}</p>
        <div className="h-0.5 w-10 bg-gray-500"></div>
      </div>

      {currentState !== "Login" && (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Enter Name..."
          required
        />
      )}

      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Enter Email..."
        required
      />

      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Enter Password..."
        required
      />

      <div className="w-full flex justify-between text-sm -mt-2">
        <p className="cursor-pointer">Forgot Password ?</p>

        <p
          className="cursor-pointer"
          onClick={() =>
            setCurrentState(currentState === "Login" ? "Sign Up" : "Login")
          }
        >
          {currentState === "Login" ? "Create Account" : "Login Here"}
        </p>
      </div>

      <button
        disabled={isLoading}
        className={`w-full p-2 rounded-xl text-white flex items-center justify-center gap-2
        ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-gray-700"}`}
      >
        {isLoading && (
          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
        )}
        {isLoading ? "Please wait..." : currentState}
      </button>
    </form>
  );
}

export default Login;
