import React from "react";
import { NavLink } from "react-router-dom";
import { House,SquarePlus, Package, PackageCheck } from "lucide-react";

function Sidebar() {
  return (
    <div className="w-[18%] min-h-screen border-r-2 border-gray-200">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          to="/"
        >
          <House size={24} />
          <p className="hidden md:block">Home</p>
        </NavLink>
        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          to="/add"
        >
          <SquarePlus size={24} />
          <p className="hidden md:block">Add Products</p>
        </NavLink>
        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          to="/list"
        >
          <Package size={24} />
          <p className="hidden md:block">List Products</p>
        </NavLink>
        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          to="/orders"
        >
          <PackageCheck size={24} />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
