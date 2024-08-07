// src/utils/axiosInstance.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.vocagame.com', // Ganti dengan URL dasar API Anda
  timeout: 10000, // Waktu tunggu default (10 detik)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Jika perlu, Anda bisa menambahkan interceptor di sini
axiosInstance.interceptors.request.use(
  config => {
    // Tambahkan token atau konfigurasi lain jika diperlukan
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Tangani kesalahan global di sini
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
