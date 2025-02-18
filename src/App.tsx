import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home_page";
import ProductDetailPage from "./pages/product_detail_page";
import AppLayout from "./layouts/app_layouts";
import CategoryPage from "./pages/category_page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product_detail/:p_id" element={<ProductDetailPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route
            path="*"
            element={
              <h1 className="text-center text-2xl font-bold">Not Found</h1>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
