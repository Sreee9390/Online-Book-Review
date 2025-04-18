import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from '../api/axiosInstance';

const BookCard = ({ book, onDelete }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  console.log("BookCard - user:", user); // ✅ Debug
  const isAdmin = user?.role?.toUpperCase() === 'ADMIN'; 
  console.log("BookCard - isAdmin:", isAdmin); 

  const handleEdit = async () => {
    try {
      
      const response = await axios.get(`/admin/books/${book.id}`);
      navigate(`/admin/edit-book/${book.id}`);
    } catch (error) {
      console.error("Error fetching book data for edit:", error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm(`Delete "${book.title}"?`)) {
      try {
        
        const response = await axios.delete(`/admin/books/${book.id}`);
        onDelete(book.id); 
        console.log('Book deleted:', response.data);
      } catch (error) {
        console.error('Failed to delete the book', error);
      }
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
      <img
        src={book.coverImageUrl}
        alt={book.title}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold">{book.title}</h2>
        <p className="text-gray-600">{book.author}</p>
        <Link
          to={`/book/${book.id}`}
          className="text-blue-600 mt-2 inline-block hover:underline"
        >
          View Details
        </Link>

        {isAdmin && (
          <div className="mt-2 flex gap-4">
            <button
              onClick={handleEdit}
              className="text-yellow-600 hover:underline text-sm"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="text-red-600 hover:underline text-sm"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCard;
