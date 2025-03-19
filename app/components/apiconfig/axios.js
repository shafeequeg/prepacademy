import axios from "axios";

const API_BASE_URL = "http://localhost:8000"; 

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // If you need to handle cookies or sessions
});



export default axiosInstance;
