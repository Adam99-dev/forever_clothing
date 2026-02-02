import React, { useContext, useState } from "react";
import { assets } from "../assets/asset";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Search,
  UserRoundX,
  UserRoundCheck,
  Handbag,
  Menu,
  CircleChevronLeft,
} from "lucide-react";
import { ShopContext } from "../context/ShopContext";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const {
    showSearch,
    setShowSearch,
    getCartCount,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="flex justify-between items-center py-5 font-medium">
      <Link to="/">
        <div className="flex flex-col items-center">
          <img
            src={assets.light_logo}
            alt="Forever Clothing"
            className="w-28"
          />
          <p className="fjalla-one-regular">FOREVER CLOTHING</p>
        </div>
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col gap-1 items-center">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden group-hover:block" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col gap-1 items-center">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden group-hover:block" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col gap-1 items-center">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden group-hover:block" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col gap-1 items-center">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden group-hover:block" />
        </NavLink>
      </ul>

      <div className="flex gap-6 items-center">
        <Search
          size={24}
          className="cursor-pointer"
          onClick={() => setShowSearch(!showSearch)}
        />

        <div className="relative group">
          <Link to={token ? "#" : "/login"} className="block">
            {token ? (
              <UserRoundCheck
                size={24}
                className="cursor-pointer text-green-700"
              />
            ) : (
              <UserRoundX size={24} className="cursor-pointer text-red-700" />
            )}
          </Link>

          {/* Dropdown only shown when logged in */}
          {token && (
            <div className="group-hover:block hidden absolute right-0 top-full pt-4 z-[50]">
              <div className="flex flex-col gap-2 w-40 py-3 px-5 bg-slate-100 text-gray-600 rounded shadow-md">
                <p className="hover:text-black cursor-pointer">My Profile</p>
                <p onClick={()=> navigate('/orders')} className="hover:text-black cursor-pointer">Orders</p>
                <p
                  onClick={logout}
                  className="hover:text-red-700 cursor-pointer font-medium"
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        <Link to="/cart" className="relative">
          <Handbag size={24} className="cursor-pointer" />
          <p className="absolute -right-2 -bottom-2 text-xs bg-black text-white rounded-full min-w-[18px] h-[18px] flex justify-center items-center text-[10px] px-1">
            {getCartCount()}
          </p>
        </Link>

        <Menu
          className="cursor-pointer sm:hidden"
          size={26}
          onClick={() => setVisible(true)}
        />
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed z-50 top-0 right-0 bottom-0 bg-white transition-all duration-300 sm:hidden overflow-hidden ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600 h-full">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-4 cursor-pointer border-b"
          >
            <CircleChevronLeft size={26} />
            <p className="font-bold">Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="py-4 pl-8 border-b hover:bg-gray-50"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/collection"
            className="py-4 pl-8 border-b hover:bg-gray-50"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className="py-4 pl-8 border-b hover:bg-gray-50"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className="py-4 pl-8 border-b hover:bg-gray-50"
          >
            CONTACT
          </NavLink>

          {/* Mobile logout option */}
          {token && (
            <div
              onClick={logout}
              className="mt-auto py-4 pl-8 border-t hover:bg-gray-50 cursor-pointer text-red-700 font-medium"
            >
              Logout
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
