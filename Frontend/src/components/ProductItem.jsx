import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

function ProductItem({ id, image, price, name }) {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="cursor-pointer text-gray-700" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="h-50 w-50 hover:scale-110 transition ease-in-out object-cover rounded-3xl"
          src={image}
          alt="Logo"
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="font-medium text-xl">
        {currency}
        {price}
      </p>
    </Link>
  );
}

export default ProductItem;