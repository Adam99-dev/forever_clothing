import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Search } from "lucide-react";
import { useLocation } from "react-router-dom";

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);



  useEffect(() => {
    if(location.pathname.includes('collection')){
        setVisible(true);
    }else{
        setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div
      className="
        absolute lg:mt-40
        top-3 right-3
        sm:top-full sm:left-0 sm:right-auto
        sm:w-full sm:flex sm:justify-center
      "
    >
      <div
        className="
          flex items-center
          w-60 sm:w-1/2
          border border-black rounded-full
          px-3 py-2 sm:px-4
          bg-white shadow-md
        "
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-transparent text-sm text-black"
          type="text"
          placeholder="Search..."
        />


        <Search
          className="text-gray-500 w-5 h-5 sm:w-6 sm:h-6"
        />
      </div>
    </div>
  ) : null;
}

export default SearchBar;
