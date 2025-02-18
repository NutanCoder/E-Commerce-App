import { Product } from "../types/product";

async function fetchOneProduct(
  id: string | undefined
): Promise<Product | null> {
  const url = `https://fakestoreapi.com/products/${id}`;
  const options: RequestInit = {
    method: "GET",
  };
  const response = await fetch(url, options);
  const body = await response.json();
  const result = body;
  return result;
}

export default fetchOneProduct;
