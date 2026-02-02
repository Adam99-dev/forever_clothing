import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { Trash } from "lucide-react";

function List({ token }) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchList = async () => {
    try {
      setLoading(true);
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + "/api/product/remove", {id}, {headers: {token}});
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-3 text-lg font-semibold">All Products List</p>

      <div className="flex flex-col gap-2">
        {/* Header */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-3 border bg-gray-100 text-sm font-semibold rounded">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p className="text-center">Action</p>
        </div>

        {/* Skeleton Loader */}
        {loading &&
          Array(4)
            .fill("")
            .map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-3 px-3 border rounded animate-pulse"
              >
                <div className="w-24 h-24 bg-gray-300 rounded" />
                <div className="h-4 bg-gray-300 rounded w-3/4" />
                <div className="h-4 bg-gray-300 rounded w-1/2" />
                <div className="h-4 bg-gray-300 rounded w-1/3" />
                <div className="h-6 w-6 bg-gray-300 rounded mx-auto" />
              </div>
            ))}

        {/* Rows */}
        {!loading &&
          list.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-3 px-3 border rounded hover:bg-gray-50 text-sm transition"
            >
              {/* Image + Hover Preview */}
              <div className="relative group">
                <img
                  src={item.image[0]}
                  alt=""
                  className="w-24 h-24 object-cover rounded"
                />

                <div className=" absolute left-0 top-16 hidden group-hover:flex gap-2 bg-white p-2 rounded shadow z-10">
                  {item.image.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt=""
                      className="w-16 h-16 object-cover rounded"
                    />
                  ))}
                </div>
              </div>

              <p className="font-medium">{item.name}</p>

              <p className="capitalize">{item.category}</p>

              <p className="font-semibold">
                {currency}
                {item.price}
              </p>

              <div className="flex justify-center">
                <Trash
                  size={20}
                  className="cursor-pointer text-red-500 hover:text-red-600 hover:scale-110 transition"
                  onClick={()=>removeProduct(item._id)}
                />
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default List;
