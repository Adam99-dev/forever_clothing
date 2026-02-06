import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { CircleCheckBig, ChevronRight } from "lucide-react";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import ProductItemSkeleton from "../components/ProductItemSkeleton";

function Collection() {
  const { products = [], search } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [genders, setGenders] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleValue = (value, setter) => {
    setter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  useEffect(() => {
    if (!products.length) {
      setFilteredProducts([]);
      setLoading(true);
      return;
    }

    let temp = [...products];

    if (genders.length)
      temp = temp.filter((p) =>
        genders.includes(p?.category?.gender?.toLowerCase()),
      );

    if (subCategories.length)
      temp = temp.filter((p) =>
        subCategories.includes(p?.subCategory?.toLowerCase()),
      );

    if (search?.trim()) {
      const q = search.toLowerCase();
      temp = temp.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.gender.toLowerCase().includes(q) ||
          p.subCategory.toLowerCase().includes(q),
      );
    }

    if (sortType === "low-high") temp.sort((a, b) => a.price - b.price);
    if (sortType === "high-low") temp.sort((a, b) => b.price - a.price);

    setFilteredProducts(temp);
    setLoading(false);
  }, [products, genders, subCategories, sortType, search]);

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 pt-8">
      {/* LEFT FILTERS */}
      <div className="w-full lg:w-65 lg:sticky lg:top-24 self-start">
        <p
          className="text-lg font-semibold flex items-center gap-2 cursor-pointer lg:hidden"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <ChevronRight
            className={`transition-transform ${showFilter ? "rotate-90" : ""}`}
          />
        </p>

        <div
          className={`mt-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm ${
            showFilter ? "block" : "hidden"
          } lg:block`}
        >
          {/* Gender */}
          <p className="mb-3 text-sm font-semibold">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm text-gray-700">
            {["Men", "Women", "Kids"].map((label) => {
              const value = label.toLowerCase();
              return (
                <label
                  key={label}
                  className="flex items-center gap-2 cursor-pointer hover:text-black transition select-none"
                  onClick={() => toggleValue(value, setGenders)}
                >
                  {genders.includes(value) ? (
                    <CircleCheckBig size={16} />
                  ) : (
                    <div className="w-4 h-4 border border-gray-400 rounded-sm" />
                  )}
                  {label}
                </label>
              );
            })}
          </div>

          {/* Sub-category */}
          <p className="my-5 text-sm font-semibold">TYPE</p>
          <div className="flex flex-col gap-2 text-sm text-gray-700">
            {["Topwear", "Bottomwear", "Winterwear"].map((label) => {
              const value = label.toLowerCase();
              return (
                <label
                  key={label}
                  className="flex items-center gap-2 cursor-pointer hover:text-black transition select-none"
                  onClick={() => toggleValue(value, setSubCategories)}
                >
                  {subCategories.includes(value) ? (
                    <CircleCheckBig size={16} />
                  ) : (
                    <div className="w-4 h-4 border border-gray-400 rounded-sm" />
                  )}
                  {label}
                </label>
              );
            })}
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex-1">
        <div className="flex flex-col gap-4 sm:gap-6 mb-10">
          <div className="flex justify-center">
            <Title
              text1="ALL"
              text2="COLLECTIONS"
              description={"CHECK OUT ALL THE COLLECTION AVAILABLE"}
            />
          </div>

          <div className="flex justify-end items-center gap-4">
            <span className="text-sm text-gray-600">
              {filteredProducts.length} products
            </span>

            <div className="h-10 border border-gray-300 rounded-md px-3 flex items-center bg-white shadow-sm">
              <select
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
                className="bg-transparent outline-none text-sm cursor-pointer"
              >
                <option value="relevant">Sort by: Relevant</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {Array.from({ length: 10 }).map((_, i) => (
              <ProductItemSkeleton key={i} />
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            No products match your filters.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {filteredProducts.map((item) => (
              <ProductItem
                key={item._id}
                id={item._id}
                image={item.image[0]}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Collection;
