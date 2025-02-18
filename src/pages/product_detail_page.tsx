import { useEffect, useState } from "react";
import { Product } from "../types/product";
import fetchOneProduct from "../services/one_product";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductDetailLoadingCard from "../components/productdetail_loading_card";

function ProductDetailPage() {
  const params = useParams();
  console.log(params);

  const id = params.p_id;

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    console.log(id);

    getOneProduct(id);
  }, [id]);

  const getOneProduct = async (id: string | undefined) => {
    if (id == undefined) return;
    const result = await fetchOneProduct(id);
    console.log(result);
    setProduct(result);
  };

  if (!product) {
    return (
      <div className="container mx-auto my-8">
        <ProductDetailLoadingCard />
      </div>
    );
  }
  return (
    <div className="container mx-auto my-8">
      <div className="bg-white border-gray-200 shadow-2xl rounded-lg">
        <div className="flex place-items-center gap-8 p-4">
          <img className="w-1/3 p-2" src={product.image} alt={product.title} />

          <div>
            <h1 className="font-bold text-gray-600 underline">
              {product.title}
            </h1>
            <p className="font-light text-gray-900">
              Category : {product.category}
            </p>
            <p className="font-light text-gray-900 text-sx">
              Description : {product.description}
            </p>
            <p className="font-light text-gray-900 text-sx">
              Price : {product.price}
            </p>
            <div className="mt-2 mb-3">
              <Link
                className="bg-gray-600 text-center hover:bg-gray-800 text-white text-sm py-1 px-4 rounded-md shadow"
                to={"/cart"}
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
