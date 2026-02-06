import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import ProductItemSkeleton from "./ProductItemSkeleton";

function RelatedProducts({ category, subCategory }) {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (!products.length || !category) return;

    setLoader(true);

    const filteredProducts = products.filter(
      (item) =>
        item?.category?.gender === category?.gender &&
        item?.category?.season === category?.season &&
        item?.subCategory === subCategory
    );

    setRelated(filteredProducts.slice(0, 5));
    setLoader(false);
  }, [products, category, subCategory]);

  return (
    <div className="my-20">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {loader
          ? Array.from({ length: 5 }).map((_, i) => (
              <ProductItemSkeleton key={i} />
            ))
          : related.map((item) => (
              <ProductItem
                key={item._id}
                id={item._id}
                image={item.image[0]}
                name={item.name}
                price={item.price}
              />
            ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
