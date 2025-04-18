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
