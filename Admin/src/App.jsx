import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Home from "./pages/Home";

export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = '$'




function App() {
  const [token, setToken] = React.useState(localStorage.getItem("token") ? localStorage.getItem("token") : "");
  useEffect(()=>{
    localStorage.setItem("token", token)
  }, [token])
  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr className="text-gray-200" />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/" element={<Home token={token}/>} />
                <Route path="/add" element={<Add token={token}/>} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/orders" element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
