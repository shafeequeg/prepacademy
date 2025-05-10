// import axios from "axios";

// const API_BASE_URL = "https://api-web.prepacademy.in/"; 

// const axiosInstance = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default axiosInstance;

// axios.js


import axios from "axios";

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://api-web.prepacademy.in/' 
  : 'http://localhost:8000/';


const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  maxRedirects: 0
});

export default axiosInstance;