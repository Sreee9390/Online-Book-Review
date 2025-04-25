
// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:8080/api',
  
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   withCredentials:true,
// });


// axiosInstance.interceptors.request.use((config) => {
//   const token = sessionStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default axiosInstance;

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, 
});


axiosInstance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// You don't need this line anymore since you're setting it in create()
// axios.defaults.withCredentials = true;

export default axiosInstance;
