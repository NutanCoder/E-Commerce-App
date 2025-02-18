import { useEffect, useState } from "react";
import fetchCategory from "../services/category_api";
import CategoryCard from "../components/category_card";
import CategoryLoadingCard from "../components/category_loading_card";

function CategoryPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const result = await fetchCategory();
    setCategories(result);
  };

  if (!categories) {
    return (
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((e) => {
            return <CategoryLoadingCard key={e} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          {categories.map((item) => {
            console.log(item);
            return <CategoryCard key={item} category={item} />;
          })}
        </div>
      </div>
    );
  }
}

export default CategoryPage;
