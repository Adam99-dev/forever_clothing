import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "../components/ProductItem";
function LatestCollections() {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-5xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} description={"CHECK OUT THE 2026 COLLECTION"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {latestProducts.map((item, index) => (
          <ProductItem key={index} id={item._id} image={item.image[0]} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
}

export default LatestCollections;