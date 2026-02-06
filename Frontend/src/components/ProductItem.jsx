import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

function ProductItem({ id, image, price, name }) {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="cursor-pointer text-gray-700" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          loading="lazy"
          className="
            object-cover rounded-3xl transition ease-in-out hover:scale-110
            h-36 w-36
            sm:h-44 sm:w-44
            md:h-50 md:w-50
          "
          src={image}
          alt={name}
        />
      </div>

      <p className="pt-3 pb-1 text-sm truncate">{name}</p>

      <p className="font-medium text-xl">
        {currency}
        {price}
      </p>
    </Link>
  );
}

export default ProductItem;
