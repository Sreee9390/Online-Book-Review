import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../api/axiosInstance';

const EditBookForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    author: '',
    genre: '',
    description: '',
    coverImageUrl: ''
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`/books/${id}`);
        setForm(res.data);
      } catch (err) {
        console.error('Failed to load book', err);
      }
    };
    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem('token'); 
    try {
      await axios.put(`/books/${id}`, form);
      navigate('/admin');
    } catch (err) {
      console.error('Failed to update book', err);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Edit Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['title', 'author', 'genre', 'description', 'coverImageUrl'].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field}
            value={form[field]}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        ))}
        <button
          type="submit"
          className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditBookForm;
