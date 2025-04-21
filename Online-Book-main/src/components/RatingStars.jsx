const RatingStars = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, index) => (
          <span key={index} className="text-yellow-500">★</span>
        ))}
        {halfStar && <span className="text-yellow-500">★</span>}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={index} className="text-gray-400">★</span>
        ))}
      </div>
    );
  };
  
  export default RatingStars;
  