function ProductLoadingCard() {
  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="animate-pulse h-[400px]">
        <div className="bg-gray-200 h-[300px] w-full"></div>
        <div className="p-6">
          <div className="bg-gray-200 h-4 w-1/2 mb-4"></div>
          <div className="bg-gray-200 h-4 w-1/4"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductLoadingCard;
