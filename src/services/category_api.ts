async function fetchCategory(): Promise<[]> {
  const url = "https://fakestoreapi.com/products/categories";
  const options: RequestInit = {
    method: "GET",
  };
  const response = await fetch(url, options);
  const body = await response.json();
  console.log(body);
  const results = body;
  return results;
}

export default fetchCategory;
