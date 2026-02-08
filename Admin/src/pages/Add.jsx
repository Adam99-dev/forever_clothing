import React, { useState } from "react";
import { backendUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

function Add({ token }) {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestSeller", bestSeller);
      formData.append("sizes", JSON.stringify(sizes));

      if (image1) {
        formData.append("image1", image1);
      }
      if (image2) {
        formData.append("image2", image2);
      }
      if (image3) {
        formData.append("image3", image3);
      }
      if (image4) {
        formData.append("image4", image4);
      }

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } },
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setPrice(0);
        setCategory("Men");
        setSubCategory("Topwear");
        setBestSeller(false);
        setSizes([]);
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-full max-w-4xl bg-white p-6 rounded-xl shadow flex flex-col gap-6"
    >
      {/* IMAGE UPLOAD */}
      <div>
        <p className="font-semibold mb-2">Product Images</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              className="w-40 cursor-pointer"
              src={!image1 ? "./upload_area.jpg" : URL.createObjectURL(image1)}
              alt=""
            />
            <input
              onChange={(e) => {
                setImage1(e.target.files[0]);
              }}
              type="file"
              id="image1"
              hidden
            />
          </label>
          <label htmlFor="image2">
            <img
              className="w-40 cursor-pointer"
              src={!image2 ? "./upload_area.jpg" : URL.createObjectURL(image2)}
              alt=""
            />
            <input
              onChange={(e) => {
                setImage2(e.target.files[0]);
              }}
              type="file"
              id="image2"
              hidden
            />
          </label>
          <label htmlFor="image3">
            <img
              className="w-40 cursor-pointer"
              src={!image3 ? "./upload_area.jpg" : URL.createObjectURL(image3)}
              alt=""
            />
            <input
              onChange={(e) => {
                setImage3(e.target.files[0]);
              }}
              type="file"
              id="image3"
              hidden
            />
          </label>
          <label htmlFor="image4">
            <img
              className="w-40 cursor-pointer"
              src={!image4 ? "./upload_area.jpg" : URL.createObjectURL(image4)}
              alt=""
            />
            <input
              onChange={(e) => {
                setImage4(e.target.files[0]);
              }}
              type="file"
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>

      {/* PRODUCT NAME */}
      <div>
        <p className="font-semibold">Product Name</p>
        <input
          type="text"
          value={name}
          placeholder="Swim Trunks"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      {/* DESCRIPTION */}
      <div>
        <p className="font-semibold">Description</p>
        <textarea
          placeholder="Quick-dry swim trunks with mesh lining"
          value={description}
          rows="3"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>

      {/* PRICE */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-semibold">Price</p>
          <input
            type="number"
            value={price}
            placeholder="$ 39.99"
            className="w-full px-3 py-2 border rounded"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
      </div>

      {/* CATEGORY */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="font-semibold">Category</p>
          <select
            className="w-full px-3 py-2 border rounded"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option>Men</option>
            <option>Women</option>
          </select>
        </div>

        <div>
          <p
            className="font-semibold"
            onChange={(e) => {
              setSubCategory(e.target.value);
            }}
          >
            Sub Category
          </p>
          <select className="w-full px-3 py-2 border rounded">
            <option>Bottomwear</option>
            <option>Topwear</option>
            <option>Winterwear</option>
          </select>
        </div>
      </div>

      {/* SIZES */}
      <div>
        <p className="font-semibold mb-2">Sizes</p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() =>
              setSizes((p) =>
                p.includes("S") ? p.filter((p) => p !== "S") : [...p, "S"],
              )
            }
            className={`px-4 py-1 rounded border cursor-pointer ${
              sizes.includes("S") ? "bg-black text-white" : ""
            }`}
          >
            S
          </button>
          <button
            type="button"
            onClick={() =>
              setSizes((p) =>
                p.includes("M") ? p.filter((p) => p !== "M") : [...p, "M"],
              )
            }
            className={`px-4 py-1 rounded border cursor-pointer ${
              sizes.includes("M") ? "bg-black text-white" : ""
            }`}
          >
            M
          </button>
          <button
            type="button"
            onClick={() =>
              setSizes((p) =>
                p.includes("L") ? p.filter((p) => p !== "L") : [...p, "L"],
              )
            }
            className={`px-4 py-1 rounded border cursor-pointer ${
              sizes.includes("L") ? "bg-black text-white" : ""
            }`}
          >
            L
          </button>
          <button
            type="button"
            onClick={() =>
              setSizes((p) =>
                p.includes("XL") ? p.filter((p) => p !== "XL") : [...p, "XL"],
              )
            }
            className={`px-4 py-1 rounded border cursor-pointer ${
              sizes.includes("XL") ? "bg-black text-white" : ""
            }`}
          >
            XL
          </button>
          <button
            type="button"
            onClick={() =>
              setSizes((p) =>
                p.includes("XXL")
                  ? p.filter((p) => p !== "XXL")
                  : [...p, "XXL"],
              )
            }
            className={`px-4 py-1 rounded border cursor-pointer ${
              sizes.includes("XXL") ? "bg-black text-white" : ""
            }`}
          >
            XXL
          </button>
        </div>
      </div>

      {/* BEST SELLER TOGGLE */}
      <div className="flex items-center gap-3">
        <p className="font-semibold">Best Seller</p>
        <button
          type="button"
          checked={bestSeller}
          onClick={() => setBestSeller(!bestSeller)}
          className={`w-12 h-6 rounded-full relative transition ${
            bestSeller ? "bg-black" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${
              bestSeller ? "translate-x-6" : ""
            }`}
          />
        </button>
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={loading}
        className={`self-start px-6 py-2 rounded text-white flex items-center gap-2
    ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:opacity-90"}
  `}
      >
        {loading ? (
          <>
            <span>Adding</span>
            <span className="flex gap-1">
              <span className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:0ms]" />
              <span className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:150ms]" />
              <span className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:300ms]" />
            </span>
          </>
        ) : (
          "Add"
        )}
      </button>
    </form>
  );
}

export default Add;
