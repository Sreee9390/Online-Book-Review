import { useEffect, useState, useContext } from 'react';
import axios from '../api/axiosInstance';
import BookCard from '../components/BookCard';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const [books, setBooks] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const endpoint = user?.role === 'ADMIN' ? '/admin/books' : '/user/books';
        
        const res = await axios.get(endpoint, {
          headers: {
            Authorization: `Bearer ${user?.token}`,  
          },
        });
        setBooks(res.data);
        console.log("API Response:",res);
      } catch (error) {
        console.error('Failed to fetch books', error);
      }
    };
  
    if (user) {
      fetchBooks();
    }
  }, [user]);
  

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-6">Browse Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
