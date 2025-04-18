import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axiosInstance';
import RatingStars from '../components/RatingStars';
import ReviewForm from '../components/ReviewForm';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const res = await axios.get(`/books/${id}`);
        setBook(res.data);
      } catch (error) {
        console.error('Failed to fetch book details', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col sm:flex-row items-center">
        <img
          src={book.coverImageUrl} 
          alt={book.title}
          className="w-48 h-72 object-cover mr-6"
        />
        <div>
          <h2 className="text-3xl font-bold">{book.title}</h2>
          <p className="text-lg mt-2 text-gray-700 font-medium">{book.author}</p>
          <RatingStars rating={book.averageRating || 0} />
          <p className="mt-4 text-gray-600">{book.description}</p>
          <p className="mt-2 text-sm text-blue-600 italic">Genre: {book.genre}</p>
        </div>
      </div>
      <ReviewForm bookId={id} />
    </div>
  );
};

export default BookDetail;
