import { Link } from "react-router-dom";
import { Product } from "../types/product";

interface IProductCard {
  product: Product;
}
function ProductCard(props: IProductCard) {
  const product = props.product;
  return (
    <Link
      to={`/product_detail/${product.id}`}
      className="border border-teal-100 rounded-lg bg-white shadow"
    >
      <div className="relative">
        <span className="absolute right-2 top-2 ml-2 bg-teal-700 px-2 py-1 rounded-3xl text-white text-sm">
          {product.category.toUpperCase()}
        </span>
        <img
          className="h-[300px] md:w-full p-4 cursor-pointer"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="m-2">
        <h1 className="text-lg">{product.title}</h1>
        <hr className="my-2" />

        <h3 className="text-lg">Price:{product.price}</h3>
      </div>
    </Link>
  );
}

export default ProductCard;
