import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";

function Login() {
  const [currentState, setCurrentState] = useState("Sign Up");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          setToken(response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          setToken(response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    if(token){
      navigate('/')
    }
  }, [token])
  return (
    <form
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
      onSubmit={submitHandler}
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <div className="h-0.5 w-10 bg-gray-500"></div>
        <p className="prata-regular text-3xl">{currentState}</p>
        <div className="h-0.5 w-10 bg-gray-500"></div>
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
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
        {currentState === "Login" ? (
          <p
            className="cursor-pointer"
            onClick={() => {
              setCurrentState("Sign Up");
            }}
          >
            Create Account
          </p>
        ) : (
          <p
            className="cursor-pointer"
            onClick={() => {
              setCurrentState("Login");
            }}
          >
            Login Here
          </p>
        )}
      </div>
      <button className="w-full p-2 bg-gray-700 text-white cursor-pointer rounded-xl">
        {currentState}
      </button>
    </form>
  );
}

export default Login;
