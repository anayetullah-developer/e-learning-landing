const DiscountCard = () => {
  return (
    <div className="w-72 border border-gray-300 shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src="card-image.jpg"
          alt="Card Image"
          className="w-full h-40 object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-red-500 text-white p-2 rounded">
          30% Discount
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <img
            src="author-image.jpg" // Replace with author image URL
            alt="Author"
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="ml-2 font-semibold">Author Name</span>
          <div className="ml-auto flex items-center">
            <span className="text-yellow-500">
             icon
            </span>
          </div>
        </div>
        <h4 className="text-lg font-semibold mb-4">Card Title</h4>
        <button className="w-full bg-blue-500 text-white py-2 rounded">
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now
          Buy Now 
        </button>
      </div>
    </div>
  );
};

export default DiscountCard;
