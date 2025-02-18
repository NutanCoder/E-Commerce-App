import { useEffect } from "react";
import getProduct from "../services/product_api";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useSelector } from "react-redux";
import {
  fetchProductStart,
  setProcuctFail,
  setProcuctSuccess,
} from "../redux/product_slice";
import ProductCard from "../components/product_card";
import ProductLoadingCard from "../components/product_loading";

function HomePage() {
  const dispatch: AppDispatch = useDispatch();
  const { error, loading, products } = useSelector(
    (state: RootState) => state.product
  );
  const { query } = useSelector((state: RootState) => state.search);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    dispatch(fetchProductStart());
    const items = await getProduct();
    if (items == null) {
      dispatch(setProcuctFail());
    } else {
      dispatch(setProcuctSuccess(items));
    }
  };

  if (loading) {
    return (
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => {
          return <ProductLoadingCard key={e} />;
        })}
      </div>
    );
  } else if (error) {
    return <h1>Something Went Wrong!</h1>;
  } else {
    return (
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {products
          .filter((product) => {
            if (query) {
              const title = product.title.toLowerCase();
              const search = query.toLocaleLowerCase();
              return title.includes(search);
            } else {
              return true;
            }
          })
          .map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
      </div>
    );
  }
}

export default HomePage;
