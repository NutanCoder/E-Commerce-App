import { Product } from "../types/product";

async function getProduct(): Promise<Product[]> {
  const url = "https://fakestoreapi.com/products";
  const options: RequestInit = {
    method: "GET",
  };
  const response = await fetch(url, options);
  const body = await response.json();
  const results = body;
  return results;
}

export default getProduct;
