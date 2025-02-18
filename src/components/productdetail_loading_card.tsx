function ProductDetailLoadingCard() {
  return (
    <div className="bg-gray-200 h-[400px] border-gray-200 shadow-2xl rounded-lg p-4">
      <div className="flex animate-pulse items-center gap-8 p-4">
        <div className="w-1/3 h-[300px] my-2 mx-2 bg-gray-300"></div>
        <div className="w-full p-2">
          <h1 className="bg-gray-300 w-70 py-2 mb-2"></h1>
          <p className="bg-gray-300 w-50 py-2 mb-2"></p>
          <p className="bg-gray-300 h-30 py-2 mb-2"></p>
          <p className="bg-gray-300 w-20 py-2 mb-2"></p>
          <p className="w-10 px-10 py-3 bg-gray-300"></p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailLoadingCard;
