import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import {
  Star,
  StarHalf,
  ShieldCheck,
  CircleDollarSign,
  Undo2,
  ShoppingCart,
} from "lucide-react";
import RelatedProducts from "../components/RelatedProducts";

function Product() {
  const { productId } = useParams();
  const { products = [], currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    if (!products.length) return;

    const product = products.find((item) => item._id === productId);

    if (product) {
      setProductData(product);
      setImage(product.image[0]); // ✅ first image by default
    }
  }, [productId, products]);

  // 🔍 zoom logic
  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    e.currentTarget.style.transformOrigin = `${x}% ${y}%`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transformOrigin = "center";
  };

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity duration-500 opacity-100">
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* LEFT IMAGE SECTION */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3">
          {/* THUMBNAILS */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto sm:w-[18%] w-full">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setImage(item)}
                className={`w-[24%] sm:w-full mb-3 cursor-pointer border 
                ${image === item ? "border-black" : "border-transparent"}`}
                alt=""
              />
            ))}
          </div>

          {/* MAIN IMAGE WITH ZOOM */}
          <div className="w-full sm:w-[80%] overflow-hidden">
            <img
              src={image}
              alt=""
              className="w-full transition-transform duration-300 scale-100 hover:scale-150 cursor-zoom-in"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </div>

        {/* RIGHT DETAILS */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <Star size={14} />
            <Star size={14} />
            <Star size={14} />
            <Star size={14} />
            <StarHalf size={14} />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => {
                return (
                  <button
                    onClick={() => {
                      setSize(item);
                    }}
                    key={index}
                    className={`border py-2 px-4 font-medium cursor-pointer ${item === size ? " bg-gray-700 border-orange-500 text-white" : ""}`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <button className="bg-gray-800 text-white py-3 px-8 active:bg-gray-700 cursor-pointer" onClick={()=>addToCart(productData._id, size)}>
            <div className="flex">
              <p className="mr-5">ADD TO CART </p>
              <ShoppingCart size={24} />
            </div>
          </button>
          <hr className="mt-8 sm:w-4/5 bg-gray-600" />
          <div className="text-md text-gray-500 mt-5 flex flex-col gap-1 font-semibold">
            <div className="flex">
              <ShieldCheck />
              <p className="ml-2">100% Original Product</p>
            </div>
            <div className="flex">
              <CircleDollarSign />
              <p className="ml-2">Cash On Delivery on product</p>
            </div>
            <div className="flex">
              <Undo2 />
              <p className="ml-2">
                Return Policy and Easy Exchange till 7 Days
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        {/* Tabs */}
        <div className="flex border-b">
          <button className="px-6 py-3 text-sm font-semibold border-b-2 border-black text-black">
            Description
          </button>

          <button className="px-6 py-3 text-sm text-gray-500 hover:text-black transition">
            Reviews (122)
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-gray-50 px-6 py-6 text-sm text-gray-600 leading-relaxed rounded-b-md shadow-sm">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quasi adipisci, distinctio odit laboriosam repudiandae
            sequi fuga ullam quae ea.
          </p>

          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quasi adipisci, distinctio odit laboriosam repudiandae
            sequi fuga ullam quae ea.
          </p>
        </div>
      </div>

      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;
