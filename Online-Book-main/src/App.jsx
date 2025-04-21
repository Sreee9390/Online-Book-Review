import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';

import Navbar from './components/Navbar';
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import BookDetail from './pages/BookDetail';
import NotFound from './pages/NotFound';
import ProtectedRoute from './auth/ProtectedRoute';

import AddBookForm from './pages/AddBookForm';
import EditBookForm from './pages/EditBookForm';

const App = () => {
  return (

    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
>>>>>>> 61a4d138fd51fd2005fe4e1930f74d4862a29b40

          
          <Route
            path="/admin"
            element={
              <ProtectedRoute role="ADMIN">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/add-book"
            element={
              <ProtectedRoute role="ADMIN">
                <AddBookForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/edit-book/:id"
            element={
              <ProtectedRoute role="ADMIN">
                <EditBookForm />
              </ProtectedRoute>
            }
          />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
